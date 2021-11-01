function recogerDatos(){

    let nombreCliente = document.getElementById("name").value;
    let direccionCliente = document.getElementById("direccion").value;
    let telefonoCliente = document.getElementById("telefono").value;
    let emailCliente = document.getElementById("email").value;

    let tamaño="";

    let tamañoS = document.getElementById("S");
    let tamañoM = document.getElementById("M");
    let tamañoXL = document.getElementById("XL");

    if(tamañoS.checked){
        tamaño = tamañoS.value;  
    }else if(tamañoM.checked){
        tamaño = tamañoM.value;
    }else{
        tamaño = tamañoXL.value
    }

    let ingredientes =[];

    let ingredientesBacon = document.getElementById("Bacon");
    let ingredientesCebolla = document.getElementById("Cebolla");
    let ingredientesMaiz = document.getElementById("Maiz");
    let ingredientesAceitunas = document.getElementById("Aceitunas");
    let ingredientesAtun = document.getElementById("Atun");
    let ingredientesBerengena = document.getElementById("Berengena");
    let ingredientesTrufa = document.getElementById("Trufa");
    let ingredientesRicotta = document.getElementById("Ricotta");

    if(ingredientesBacon.checked){
        ingredientes.push (ingredientesBacon.value);
    }

    if(ingredientesCebolla.checked){
        ingredientes.push (ingredientesCebolla.value);
    }

    if(ingredientesMaiz.checked){
        ingredientes.push (ingredientesMaiz.value);
    }

    if(ingredientesAceitunas.checked){
        ingredientes.push (ingredientesAceitunas.value);
    }

    if(ingredientesAtun.checked){
        ingredientes.push (ingredientesAtun.value);
    }

    if(ingredientesBerengena.checked){
        ingredientes.push (ingredientesBerengena.value);
    }

    if(ingredientesTrufa.checked){
        ingredientes.push (ingredientesTrufa.value);
    }

    if(ingredientesRicotta.checked){
        ingredientes.push (ingredientesRicotta.value);
    }

    let mensajeFinal = "El cliente con el nombre" + nombreCliente + ", direccion: " + direccionCliente + ", telefono: " + telefonoCliente + ", E-mail: " + emailCliente + ", ha escogido un tamaño: " + tamaño + ", Con estos ingredientes: " + ingredientes;

    for(let i=0; i< ingredientes.length; i++){
        const element = ingredientes[1];

        mensajeFinal+= element + " ";
    }

    console.log(mensajeFinal);



}