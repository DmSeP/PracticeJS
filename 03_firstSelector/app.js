function showChoice() {
  const fisrtSelect = document.querySelector('#firstSelect').selectedIndex
  let options = document.querySelector('#firstSelect').options
  log.innerText = `The option is selected: ${options[fisrtSelect].text}`
}
