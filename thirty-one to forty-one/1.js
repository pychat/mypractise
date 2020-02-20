let x = [1, 2, 3, 4, 5]
x.forEach((item, index, array) => {
  if (item === 3) item = 10
})
console.log(x)