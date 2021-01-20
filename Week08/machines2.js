function match(string) {
  let state = start

  for(let c of string) {
    state = state(c)
  }
  return state === end
}

function start(c) {
  return c === 'a' ? foundA : start
}

function end() {
  return end
}

function foundA(c) {
  return c === 'b' ? foundB : start(c)
}

function foundB(c) {
  return c === 'c' ? foundC : start(c)
}

function foundC(c) {
  return c === 'a' ? foundA2 : start(c)
}

function foundA2(c) {
  return c === 'b' ? foundB2 : start(c)
}

function foundB2(c) {
  return c === 'x' ? end : foundB(c)
}

console.log(match('abcabcabx'))

console.log(match('abcabx'))

// reConsume