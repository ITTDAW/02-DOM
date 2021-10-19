
function cargar(){

    let contenedor=document.querySelector(".contenedor");
    
    
   
    
    let divformulario=document.createElement("div");
    divformulario.id="divformulario";
    let formulario = document.createElement("form");
    formulario.id = "formulario" ;
    formulario.action="#";
    formulario.method="post";


    let fieldset= document.createElement("fieldset");

    let legend= document.createElement("legend");
    legend.textContent="Ficha personal alumno"
    

   
    
    

    let textos=document.createElement("div");
    textos.id="textos";


    let labeldni=document.createElement("label");
    labeldni.textContent="DNI ALUMNO"
    let inputdni = document.createElement("input");
    inputdni.id="inputdni";
    inputdni.type="text";
    inputdni.placeholder="Introduce aqui tu DNI";

    let labelnombre=document.createElement("label");
    labelnombre.textContent="NOMBRE"
    let inputnombre = document.createElement("input");
    inputnombre.id="inputnombre";
    inputdni.type="text";
    inputnombre.placeholder="Introduce aqui tu Nombre";

    let labelapellidos=document.createElement("label");
    labelapellidos.textContent="APELLIDOS"
    let inputapellidos = document.createElement("input");
    inputapellidos.id="inputapellidos";
    inputdni.type="text";
    inputapellidos.placeholder="Introduce aqui tus apellidos";

    let labeldireccion=document.createElement("label");
    labeldireccion.textContent="DIRECCIÓN"
    let inputdireccion = document.createElement("input");
    inputdireccion.id="inputdireccion";
    inputdni.type="text";
    inputdireccion.placeholder="Introduce aqui tu direccion";

    let labeltelefono=document.createElement("label");
    labeltelefono.textContent="TELÉFONO"
    let inputtelefono = document.createElement("input");
    inputtelefono.id="inputdireccion";
    inputtelefono.type="number";
    inputtelefono.placeholder="Introduce aqui tu telefono";

    textos.appendChild(labeldni);
    textos.appendChild(inputdni);//
    textos.appendChild(labelnombre);
    textos.appendChild(inputnombre);//
    textos.appendChild(labelapellidos);
    textos.appendChild(inputapellidos);//
    textos.appendChild(labeldireccion);
    textos.appendChild(inputdireccion);//
    textos.appendChild(labeltelefono);
    textos.appendChild(inputtelefono);//

    let radios =document.createElement("div");
    radios.id="radios";

    let gruporadio1 =document.createElement("div");
    gruporadio1.id="gruporadio1";

    let labelgrupo1=document.createElement("label");
    labelgrupo1.textContent="Nivel de Estudios";


    let divbachiller =document.createElement("div")
    let labelradio1=document.createElement("label");
    labelradio1.textContent="Bachiller"
    let  radio1= document.createElement("input");
    radio1.id="radio1";
    radio1.type="radio";
    radio1.name="grupo1";
    divbachiller.appendChild(labelradio1);
    divbachiller.appendChild(radio1);
    
    let divciclomedio =document.createElement("div");
    let labelradio2=document.createElement("label");
    labelradio2.textContent="Ciclo Medio"
    let  radio2= document.createElement("input");
    radio2.id="radio2";
    radio2.type="radio";
    radio2.name="grupo1";
    divciclomedio.appendChild(labelradio2);
    divciclomedio.appendChild(radio2);

    let divciclosuperior =document.createElement("div")
    let labelradio3=document.createElement("label");
    labelradio3.textContent="Ciclo Superior"
    let  radio3= document.createElement("input");
    radio3.id="radio3";
    radio3.type="radio";
    radio3.name="grupo1";
    divciclosuperior.appendChild(labelradio3);
    divciclosuperior.appendChild(radio3);

    let divuniversidad =document.createElement("div")
    let labelradio4=document.createElement("label");
    labelradio4.textContent="Estudios Universitarios"
    let  radio4= document.createElement("input");
    radio4.id="radio4";
    radio4.type="radio";
    radio4.name="grupo1";
    divuniversidad.appendChild(labelradio4);
    divuniversidad.appendChild(radio4);




    let gruporadio2 =document.createElement("div");
    gruporadio2.id="gruporadio2";

    let labelgrupo2=document.createElement("label");
    labelgrupo2.textContent="¿Cual es tu lenguaje de programación favorito?";

    let divjava =document.createElement("div");
    let labelradio5=document.createElement("label");
    labelradio5.textContent="Java"
    let  radio5= document.createElement("input");
    radio5.id="radio5";
    radio5.type="radio";
    radio5.name="grupo2";
    divjava.appendChild(labelradio5);
    divjava.appendChild(radio5);

    let divjavascript =document.createElement("div");
    let labelradio6=document.createElement("label");
    labelradio6.textContent="JavaScript"
    let  radio6= document.createElement("input");
    radio6.id="radio6";
    radio6.type="radio";
    radio6.name="grupo2";
    divjavascript.appendChild(labelradio6);
    divjavascript.appendChild(radio6);

    let divcsharp =document.createElement("div");
    let labelradio7=document.createElement("label");
    labelradio7.textContent="C#"
    let  radio7= document.createElement("input");
    radio7.id="radio7";
    radio7.type="radio";
    radio7.name="grupo2";
    divcsharp.appendChild(labelradio7);
    divcsharp.appendChild(radio7);

    let divpython =document.createElement("div");
    let labelradio8=document.createElement("label");
    labelradio8.textContent="Python"
    let  radio8= document.createElement("input");
    radio8.id="radio8";
    radio8.type="radio";
    radio8.name="grupo2";
    divpython.appendChild(labelradio8);
    divpython.appendChild(radio8);


    
    
    
    gruporadio1.appendChild(labelgrupo1);
    gruporadio1.appendChild(divbachiller);
    gruporadio1.appendChild(divciclomedio);
    gruporadio1.appendChild(divciclosuperior);
    gruporadio1.appendChild(divuniversidad);


   
    gruporadio2.appendChild(labelgrupo2);
    gruporadio2.appendChild(divjava);
    gruporadio2.appendChild(divjavascript);
    gruporadio2.appendChild(divcsharp);
    gruporadio2.appendChild(divpython);

    radios.appendChild(gruporadio1);
    radios.appendChild(gruporadio2);


    let divbloquegustos=document.createElement("div");
    divbloquegustos.id="divbloquegustos";

    let divhobbies=document.createElement("div");
    divhobbies.id="divhobbies";


    let labelhobbies= document.createElement("label");
    labelhobbies.textContent="Selecciona tus hobbies"

    let divh1=document.createElement("div");
    let labelh1= document.createElement("label");
    labelh1.textContent="Deportes";

    let inputh1= document.createElement("input");
    inputh1.id="inputh1";
    inputh1.type="checkbox";

    let img1=document.createElement("img");
    img1.src="./img/deportes.png";
    img1.alt="Aqui imagen 1";
    img1.id="img1";
    img1.height=30;
    img1.width=30;
   

    divh1.appendChild(labelh1)
    
    divh1.appendChild(img1);
    divh1.appendChild(inputh1);
    
    
    let divh2=document.createElement("div");

    let labelh2= document.createElement("label");
    labelh2.textContent="Cine y Series";

    let inputh2= document.createElement("input");
    inputh2.id="inputh2";
    inputh2.type="checkbox";

    let img2=document.createElement("img");
    img2.src="./img/cine.jpg";
    img2.alt="Aqui imagen 2";
    img2.id="img2";
    img2.height=30;
    img2.width=30;
   


    divh2.appendChild(labelh2)
    divh2.appendChild(img2);
    divh2.appendChild(inputh2);


    let divh3=document.createElement("div");

    let labelh3= document.createElement("label");
    labelh3.textContent="Lectura";

    let inputh3= document.createElement("input");
    inputh3.id="inputh3";
    inputh3.type="checkbox";

    let img3=document.createElement("img");
    img3.src="./img/libros.jpg";
    img3.alt="Aqui imagen 3";
    img3.id="img3";
    img3.height=30;
    img3.width=30;

    divh3.appendChild(labelh3);
    divh3.appendChild(img3);
    divh3.appendChild(inputh3);

    let divh4=document.createElement("div");

    let labelh4= document.createElement("label");
    labelh4.textContent="Viajes";

    let inputh4= document.createElement("input");
    inputh4.id="inputh4";
    inputh4.type="checkbox";

    let img4=document.createElement("img");
    img4.src="./img/viaje.png";
    img4.alt="Aqui imagen 2";
    img4.id="img2";
    img4.height=30;
    img4.width=30;

    divh4.appendChild(labelh4);
    divh4.appendChild(img4);
    divh4.appendChild(inputh4);

    let divh5=document.createElement("div");

    let labelh5= document.createElement("label");
    labelh5.textContent="Naturaleza";

    let inputh5= document.createElement("input");
    inputh5.id="inputh1";
    inputh5.type="checkbox";

    let img5=document.createElement("img");
    img5.src="./img/naturaleza.png";
    img5.alt="Aqui imagen 2";
    img5.id="img2";
    img5.height=30;
    img5.width=30;

    divh5.appendChild(labelh5);
    divh5.appendChild(img5);
    divh5.appendChild(inputh5);


    divhobbies.appendChild(labelhobbies);
    divhobbies.appendChild(divh1);
    divhobbies.appendChild(divh2);
    divhobbies.appendChild(divh3);
    divhobbies.appendChild(divh4);
    divhobbies.appendChild(divh5);



   
    
    
    

    let divselect=document.createElement("div");
    divselect.id="divselect";

    let labelselect=document.createElement("label");
    labelselect.textContent="¿Cual es tu asignatura favorita?"

    let select=document.createElement("select");
    select.id="select";
    
    
    let option1=document.createElement("option");
    option1.value="DWEC";
    option1.textContent="DWEC";
    let option2=document.createElement("option");
    option2.value="DWES"
    option2.textContent="DWES";
    let option3=document.createElement("option");
    option3.value="Interfaces"
    option3.textContent="Interfaces";
    let option4=document.createElement("option");
    option4.value="Inglés"
    option4.textContent="Inglés";
    let option5=document.createElement("option");
    option5.value="Ninguna"
    option5.textContent="Ninguna";

    
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    divselect.appendChild(labelselect)
    divselect.appendChild(select);




    let textareadiv=document.createElement("div");
    textareadiv.id="textareadiv";

    let labeltextarea=document.createElement("label");
    labeltextarea.textContent="Describe tus condiciones en 5 lineas"

    let textarea=document.createElement("textarea");
    textarea.id="textarea";
    textarea.cols=100;
    textarea.rows=5;

    textareadiv.appendChild(labeltextarea);
    textareadiv.appendChild(textarea);

    divbloquegustos.appendChild(divhobbies)
    divbloquegustos.appendChild(divselect);
   



    fieldset.appendChild(legend);
    fieldset.appendChild(textos);
    fieldset.appendChild(radios);
    fieldset.appendChild(divbloquegustos)
    fieldset.appendChild(textareadiv);
    formulario.appendChild(fieldset);


    


    
    divformulario.appendChild(formulario);

    
  
    contenedor.appendChild(divformulario);

    
}

