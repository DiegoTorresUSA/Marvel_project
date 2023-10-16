/* Llamado del modal */
const openModal = document.getElementById("user-join")
const closeModal = document.querySelector("#user-close")
console.log(closeModal)
const modal = document.querySelector("#modal")
console.log(modal)
openModal.addEventListener("click", ()=>{
    modal.showModal();
    modal.classList.add("modal--show")
})

closeModal.addEventListener("click", ()=>{
    modal.close()
    modal.classList.add("modal--close")
})
/* Llamado del modal */



/******Control botones registro - ingreso*/

const btnSignin = document.getElementById('btn-signin')
const btnSignup = document.getElementById('btn-signup')
const nameField = document.getElementById('name-field')
const nombres = document.getElementById('nombres')
const contrasenia = document.getElementById('contrasenia')
const title = document.getElementById('title')

btnSignin.onclick = function (){
    nameField.style.display = 'block';
    nombres.style.display = 'none';
    contrasenia.style.display = 'none';
    title.innerHTML = 'SIGN IN'
    btnSignin.classList.remove('disable')
    btnSignup.classList.add('disable')
}

btnSignup.onclick = function (){
    nameField.style.display = 'block';
    nameField.classList.add('#nombres')
    nombres.style.display = 'block';
    title.innerHTML = 'REGISTRATE';
    btnSignin.classList.add('disable');
    btnSignup.classList.remove('disable');
    console.log(nameField);
}



/******Control botones registro - ingreso*/

