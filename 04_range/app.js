const range = document.querySelector('#range')
const test1 = document.querySelector('#test1')
const test2 = document.querySelector('#test2')
const test3 = document.querySelector('#test3')
const test4 = document.querySelector('#test4')
const test5 = document.querySelector('#test5')
const test6 = document.querySelector('#test6')
let p = document.querySelector('#p1')
range.addEventListener('input', () => {
  p.innerHTML = range.value
  test1.style.width = range.value + 'px'
  test2.style.width = range.value + 'pt'
  test3.style.width = range.value + 'vw'
  test4.style.width = range.value + 'q'
  test5.style.width = range.value + 'rem'
  test6.style.width = range.value + 'mm'
})
