let start = 1
let end = 100
function f(start, end) {
  let n = start
  while (n <= end) {
    if(String(n).includes('3') || n % 3 === 0) {
      console.log('PA')
    } else {
      console.log(n)
    }
    n++
  }
}
