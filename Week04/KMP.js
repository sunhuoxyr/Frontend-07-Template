const str = 'abababca';
const newStr = 'abababc2aaaaacababababababca'


const kmpMark = [];


function kmpOriginal(params) {

  for (let i in str) {
    i = parseInt(i)
    if(i == 0) {
      kmpMark.push(0)
      continue;
    }
    const code = str.slice(0,i+1)
    let length = 0;
    for (let j in code) {
      const index = parseInt(j) + 1
      const codeLength = code.length
      if(index === codeLength) {
        continue
      }
      if(code.slice(0, index) === code.slice(codeLength - index, codeLength)) {
        length = index
      }
    }
    kmpMark.push(length)
  }
  
  
  
  let matchIndex = 0

  const match = () => {
    for (let i in newStr) {
      i = parseInt(i)
      if(newStr[i] === str[matchIndex]) {
        if(matchIndex + 1 === str.length) {
          return true
        }
        matchIndex++
      } else {
        const value = kmpMark[matchIndex]
        matchIndex = value
        if(matchIndex === 0) {
          if(newStr[i] === str[matchIndex]) {
            if(matchIndex + 1 === str.length) {
              return true
            }
            matchIndex++
          }
        } 
       
       
      }
    }
  return false
  }
  console.log(match())
}



function kmp(source, str) {
  if(str === '') {
    return 0
  } 

  let table = new Array(str.length).fill(0);
  const calcTable = () => {
    let value = 0;
    let index = 1;
    while(index < str.length) {
      if( str[index] === str[value] ) {
        table[index] = ++value;
        index++;
      } else {
        if(value > 0) {
          value = table[value-1]
        } else {
          index++;
        }
      }
    }
  }
  calcTable()

  const calcIndex =() => {
    let tableIndex = 0;
    let index = 0;

    while(index < source.length) {
      if(source[index] === str[tableIndex]){
        index++
        tableIndex++
      } else {
        if(tableIndex > 0) {
          tableIndex = table[tableIndex - 1]
        } else {
          index++
        }
      }

      if(tableIndex === str.length) {
        return index - tableIndex
      }
    }
    return -1
  }
  return calcIndex()
}

kmp('1', '')