/* Llamado del modal */
const openModal = document.getElementById("openModal")
const closeModal = document.querySelector("#user-close")
const modal = document.querySelector("#modal")
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
const title = document.getElementById('title')

btnSignin.onclick = function (){
    nameField.style.display = 'block';
    nombres.style.display = 'none';
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
}

/******Control botones registro - ingreso*/

const email = document.getElementById('input-email')
const pass = document.getElementById('input-pass')
const form = document.getElementById('form')
const sign = document.getElementById('btn-signin')

sign.addEventListener('click', e =>{
    e.preventDefault();
    validateSign();
})

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs();
    saveLs();
})

// const setError = (element, message) =>{
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error')
//     errorDisplay.innerText = message;
//     inputControl.classList.add('error')
// }

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    let emailValue = email.value.trim();
    let passValue = pass.value.trim();

    if (emailValue === ''){
        alert ('Email es requerido')
    }else if (!isValidEmail(emailValue)){
        alert('Dirección de correo no valida')
    }

    if (passValue === ''){
        alert('Password es requerido')
    }else if (passValue.length < 6){
        alert('Password no puede ser menor a 6 caracteres')
    }else {
        modal.close()
        modal.classList.add("modal--close")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El usuario se ha registrado con exito',
            showConfirmButton: false,
            timer: 1500,
        })
    }
}

function saveLs(){
    let users = [];

    let user ={
        email: email.value,
        pass: pass.value
    }

    // users.push({ 'email': email.value, 'pass': pass.value });
    users.push({user});
    users.value = ""; // Limpia el campo de entrada
    localStorage.setItem("email", JSON.stringify(user.email));
    localStorage.setItem("pw", JSON.stringify(user.pass));
    document.forms[0].reset();
}


function validateSign(){
    let email = JSON.parse(window.localStorage.getItem('email'));
    let pass = JSON.parse(window.localStorage.getItem('pw'));
    console.log(email, pass)

    let mail = document.getElementById('input-email').value;
    let pw = document.getElementById('input-pass').value;

    const series =document.querySelector("#series")
    const comics =document.querySelector("#comics")
    console.log(comics, series)

    // let users = Object.keys(localStorage);
    // console.log("usuarios", + users);

    // for (key in json){
    //     console.log(json.key[0])
    // }
    // //obteniendo los valores
    // let emailVal = document.getElementById('input-email').value;
    // let passVal = document.getElementById('input-pass').value;
    //
    // //Almacenamiento en LS
    // let email = localStorage.setItem('mail', emailVal);
    // let pass = localStorage.setItem('pw', passVal);
    //
    // let emailS = localStorage.getItem("email", emailVal);
    // let passS = localStorage.getItem("pw", passVal);
    //
    if (mail == email && pw == pass){
        modal.close()
        modal.classList.add("modal--close")
        series.classList.add("opacity");
        comics.classList.add("opacity");
        series.classList.remove("series")
        comics.classList.remove("comics")
    }else {
        alert("Credenciales invalidas")
    }
}