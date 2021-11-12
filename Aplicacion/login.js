var mensajeria = function(mensaje, tipo){

  var contenedorormensajes = document.getElementById('divmensajes')
  contenedorormensajes.innerHTML += '<div class="alert alert-'+ tipo +'" role="alert">' +
  mensaje +
  '</div>'

  //Esta funcion es para esperar los segundos elegidos
  setTimeout(function(){
    $('.alert').alert('close')
  },5000)
  
}


var iniciarsesion = function(){
  var email = document.getElementById('inputEmail').value
  var password = document.getElementById('inputPassword').value

  console.log(email)
  console.log(password)

  document.getElementById('inputEmail').classList.remove("borderojo")

  if(email == null || email == '' || email == undefined){
      //alert('Email es obligatoorio')
      mensajeria('Email es obligatorio', 'danger')
      document.getElementById('inputEmail').classList.add("borderojo")
      //mensajeria('Email es obligatorio', 'warning')
      //mensajeria('Email es obligatorio', 'success')
      return false; //No deja seguir al siguiente CAMPO hasta que no se llene 
  }

  if(password == null || password == '' || password == undefined){
      mensajeria('Password es obligatoorio', 'warning')
      return false;
  }

     
  var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (emailRegex.test(email)) {
    alert('Correo Valido')
    
  } else {
    mensajeria('Correo Invalido','success')
    return false
  }
} 