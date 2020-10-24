function validar(){
     patron = /^([^A-z0-9!¡@#\$%\^&\*\?_~\/]*[A-Z]([0-9]{3}[a-z]{3}\W{3})[^A-z0-9!¡@#\$%\^&\*\?_~\/]*)$/;
     valor = document.getElementById("ExpresionRegu").value;
     if(valor===""){
        alert("EL CAMPO DE TEXTO NO PUEDE QUEDAR VACIO");
     }
     else if (patron.test(valor))
    {
       
            alert("La validacion es CORRECTA");
        }
        else{
            alert("La validacion es INCORRECTA");
        }
     }
   
