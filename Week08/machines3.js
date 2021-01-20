// abababx

let time = 0
function match(string) {
  let state = start
  for(let c of string) {
    state = state(c)
  }
  return state === end
}

function start(c) {
  if(c === 'a') {
    return foundA
  }
  time = 0
  return start
}

function end() {
  return end
}

function foundA(c) {
  if(c === 'b') {
    time++;
    return time > 2 ? foundX : start
  } 
  return start(c)
}

function foundX(c) {
  return c === 'x' ? end : start(c)
}

