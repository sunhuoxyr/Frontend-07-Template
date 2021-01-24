const str = 'abababca';
const newStr = 'aaabababca'

const judge = (source, str, value, table) => {
  if(source === str[value]) {
    value++;
  } else {
    if(value > 0) {
      return judge(source, str, table[value - 1], table)
    } else {
       return 0
    }
  }
  return value
}

const kmp = (str) => {
  let table = new Array(str.length).fill(0); 
  let value = 0;
  for(let index = 1; index < str.length; index++) {
    value = judge(str[index], str, value, table)
    table[index] = value
  }
  return table
}

function match(source, str) {
  if(str === '') {
    return 0
  } 
  const table = kmp(str);
  let value = 0;
  for(let index = 0; index < source.length; index++) {
    value = judge(source[index], str, value, table)
    if(value === str.length) {
      return index - value + 1
    }
  }
  return -1
}

console.log(match('hello', 'll'))

// 有限状态机 状态