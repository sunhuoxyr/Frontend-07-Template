let parser = selectorParser

function match(selector, element) {
  let rules = parser(selector),
    position = rules.length - 1
  while (element != document.body && position !== 0) {
    let rule = rules[position]
    if (rule.type === 'node') {
      if (
        rule.rules[0].type === 'tag' &&
        rule.rules[0].name === element.tagName.toLowerCase()
      ) {
        position--
      } else if (
        rule.rules[0].type === 'id' &&
        rule.rules[0].name === element.id
      ) {
        position--
      } else if (
        rule.rules[0].type === 'class' &&
        rule.rules[0].name === element.className
      ) {
        position--
      } else {
        if (position === rules.length - 1) {
          return false
        }
      }
    } else {
      if (rule.joint === '>' && element != element.parentElement) {
        return false
      }
      position--
    }
    element = element.parentElement
  }
  return position === 0 ? true : false
}