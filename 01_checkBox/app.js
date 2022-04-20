const checkBoxs = document.querySelectorAll('.checkBox')

checkBoxs.forEach((checks, index) => {
  checks.addEventListener('click', () => {
    if (checks.checked) {
      alert(`${index + 1} checkbox is selected`)
    } else {
      alert('The checkbox was not selected')
    }
  })
})
