let rangeUpLeftCorner = document.querySelector('#rangeUpLeftCorner')
let rangeUpRightCorner = document.querySelector('#rangeUpRightCorner')
let rangeDownRightCorner = document.querySelector('#rangeDownRightCorner')
let rangeDownLeftCorner = document.querySelector('#rangeDownLeftCorner')

let textUpLeftCorner = document.querySelector('#textUpLeftCorner')
let textUpRightCorner = document.querySelector('#textUpRightCorner')
let textDownRightCorner = document.querySelector('#textDownRightCorner')
let textDownLeftCorner = document.querySelector('#textDownLeftCorner')

const section = document.querySelector('section')
const area = document.querySelector('#testArea')

section.addEventListener('input', () => {
  textUpLeftCorner.value = rangeUpLeftCorner.value
  textUpRightCorner.value = rangeUpRightCorner.value
  textDownRightCorner.value = rangeDownRightCorner.value
  textDownLeftCorner.value = rangeDownLeftCorner.value
  area.style.borderRadius =
    rangeUpLeftCorner.value +
    'px ' +
    rangeUpRightCorner.value +
    'px ' +
    rangeDownRightCorner.value +
    'px ' +
    rangeDownLeftCorner.value +
    'px '
})
