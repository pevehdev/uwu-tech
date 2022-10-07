const email = document.getElementById('email')
const senha = document.getElementById('senha1')
const form = document.getElementById("formulario")

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInput();
})


function checkInput(){
   const emailValue = email.value
   const senhaValue = senha.value
   console.log(emailValue)
   console.log(senhaValue)
}


if(emailValue ===''){
    

    setErrorFor(emailValue, 'Email não pode estar vazio');
}else{
    setSuccessFor(emailValue);
}
function setErrorFor(input, message){
 const campo = input.parentElement;
 const small = campo.querySelector('small');

 small.innerText = message;
 campo.className = 'campo'
}
