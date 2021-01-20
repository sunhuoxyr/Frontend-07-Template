const $ = Symbol('$')

class Trile {
  constructor() {
    this.root = Object.create(null)
  };
  add(word) {
    let node = this.root
    for (let c of word) {
      if(!node[c]) {
        node[c] = Object.create(null)
      }
      node = node[c]
    }
    if(!node[$]) {
      node[$] = 0
    }
    node[$]++
  };
  most() {
    let max = 0;
    let maxCode = '';
    const visit = (node, code) => {
      if(node[$] && node[$] > max) {
        max = node[$]
        maxCode = code
      }
      for(let c in node) {
        visit(node[c], code + c)
      }
    }

    visit(this.root, '')
    console.log(max, maxCode)
  }
}

function randomWord(length) {
  const s = Array(length).fill(0).map(item => {
    return String.fromCharCode(Math.random() * 26 + 'a'.charCodeAt(0));
  })

  return s.join('');
}

const trile = new Trile()

Array(100000).fill(0).forEach(() => {
  trile.add(randomWord(4))
})

trile.most()

