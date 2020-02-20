const products = document.getElementsByName('product')
const regions = document.getElementsByName('region')

// 监听checkbox
function checkboxListener(inputs) {
  inputs[0].disabled = true
  l = inputs.length
  inputs[0].addEventListener('click', () => {
    for (let i = 1; i < l; i++) {
      inputs[i].checked = true
      inputs[0].disabled = true
    }
  })
  for (let i = 1; i < l; i++) {
    inputs[i].addEventListener('click', () => {
      if (!inputs[i].checked) {
        if (others(inputs, inputs[i].id)) {
          inputs[0].checked = false
          inputs[0].disabled = false
        }
      } else {
        if (others(inputs, inputs[i].id)) {
         inputs[0].click()
        }
      }
    })
  }
}

// 检查除全选和本按钮外其它是否全选中
function others(inputs, id) {
  for (let i = 1; i < l; i++) {
    if (inputs[i].id !== id) {
      if (!inputs[i].checked) return false
    }
  }
  return true
}

checkboxListener(products)
checkboxListener(regions)