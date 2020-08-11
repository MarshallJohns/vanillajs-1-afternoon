console.log('The house always wins')

const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')
console.log(idInput, colorInput)

const setCard = () => {
    let card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
    idInput.value = ''
    colorInput.value = ''
}

const resetCards = () => {
    card.style.color = grey
}