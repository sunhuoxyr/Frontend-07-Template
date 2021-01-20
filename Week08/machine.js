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
  return c === 'd' ? foundD : start(c)
}
function foundD(c) {
  return c === 'e' ? foundE : start(c)
}
function foundE(c) {
  return c === 'f' ? end : start(c)
}
console.log(match('ababcdef'))


// reConsume