

let buttonShowModalPresent = document.getElementById('getPresent')
let modalPresentWindow = document.getElementById('modalPresent')
let closePresentWindow = document.getElementById('closemodalPresent')
let sendPresentInfo = document.getElementById('sendPresentInfo')


buttonShowModalPresent.onclick = function () {

    modalPresentWindow.style.display = 'block'

}

closePresentWindow.onclick = function () {

    modalPresentWindow.style.display = 'none'

}

sendPresentInfo.onclick = function () {
    let nameGuest = document.getElementById('firstname_guest')
    let selectGuest = document.getElementById('select_guest')

    if(nameGuest.value) {
        nameGuest.style.border = '1px solid #bebebe'
    } 
    else {
        nameGuest.style.border = '2px solid red'
    }

    if(selectGuest.value != 0) {
        selectGuest.style.border = '1px solid #bebebe'
    }
    else {
        selectGuest.style.border = '2px solid red' 
    }
    if (nameGuest.value && selectGuest.value != 0) {
        modalPresentWindow.style.display = 'none'
    }
}

let nameGuest = document.getElementById('firstname_guest')
    nameGuest.onchange = function () {
        console.log ('До нажатия кнопки Отправить: nameGuest', nameGuest.value)
    }
let selectGuest = document.getElementById('select_guest')
    selectGuest.onchange = function () {
        console.log ('До нажатия кнопки Отправить: selectGuest', selectGuest.value)
    }