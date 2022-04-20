const form = document.querySelector('form')
const log = document.querySelector('#log')

form.addEventListener(
  'submit',
  (event) => {
    let data = new FormData(form)
    let output = ''
    for (const entry of data) {
      output = entry[0] + ': ' + entry[1] + '\r'
    }
    log.innerText = output
    log.classList.add('viewLog')
    event.preventDefault()
  },
  false
)
