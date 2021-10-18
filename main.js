
function cargar(){



    let divformulario=document.createElement("div");
    divformulario.id="divformulario";
    
    let formulario = document.createElement("form");//<p></p>
    formulario.id = "formulario" //<p id="parrafo1"></p>

    let fieldset= document.createElement("fieldset");

    let legend= document.createElement("legend");
    legend.textContent="Conocimientos Programación"
    

    
    
    // Crear nodo de tipo Text

    let textos=document.createElement("div");
    textos.id="textos";

    let inputdni = document.createElement("input");
    inputdni.id="inputdni";
    inputdni.type="text";
    inputdni.placeholder="Introduce aqui tu DNI";

    let inputnombre = document.createElement("input");
    inputnombre.id="inputnombre";
    inputdni.type="text";
    inputnombre.placeholder="Introduce aqui tu Nombre";

    let inputapellidos = document.createElement("input");
    inputapellidos.id="inputapellidos";
    inputdni.type="text";
    inputapellidos.placeholder="Introduce aqui tus apellidos";

    let inputdireccion = document.createElement("input");
    inputdireccion.id="inputdireccion";
    inputdni.type="text";
    inputdireccion.placeholder="Introduce aqui tu direccion";

    let inputtelefono = document.createElement("input");
    inputtelefono.id="inputdireccion";
    inputtelefono.type="number";
    inputtelefono.placeholder="Introduce aqui tu telefono";

     
    let gruporadio1 =document.createElement("div");
    gruporadio1.id="gruporadio1";

    let labelradio1=document.createElement("label");
    labelradio1.textContent="Radio 1"
    let  radio1= document.createElement("input");
    radio1.id="radio1";
    radio1.type="radio";
    radio1.name="grupo1";

    let labelradio2=document.createElement("label");
    labelradio2.textContent="Radio 2"
    let  radio2= document.createElement("input");
    radio2.id="radio2";
    radio2.type="radio";
    radio2.name="grupo1";

    let labelradio3=document.createElement("label");
    labelradio3.textContent="Radio 3"
    let  radio3= document.createElement("input");
    radio3.id="radio3";
    radio3.type="radio";
    radio3.name="grupo1";

    let labelradio4=document.createElement("label");
    labelradio4.textContent="Radio 4"
    let  radio4= document.createElement("input");
    radio4.id="radio4";
    radio4.type="radio";
    radio4.name="grupo1";




    let gruporadio2 =document.createElement("div");
    gruporadio2.id="gruporadio2";

    let labelradio5=document.createElement("label");
    labelradio5.textContent="Radio 5"
    let  radio5= document.createElement("input");
    radio5.id="radio5";
    radio5.type="radio";
    radio5.name="grupo2";

    let labelradio6=document.createElement("label");
    labelradio6.textContent="Radio 6"
    let  radio6= document.createElement("input");
    radio6.id="radio6";
    radio6.type="radio";
    radio6.name="grupo2";

    let labelradio7=document.createElement("label");
    labelradio7.textContent="Radio 7"
    let  radio7= document.createElement("input");
    radio7.id="radio7";
    radio7.type="radio";
    radio7.name="grupo2";

    let labelradio8=document.createElement("label");
    labelradio8.textContent="Radio 8"
    let  radio8= document.createElement("input");
    radio8.id="radio8";
    radio8.type="radio";
    radio8.name="grupo2";


    
    
    // Añadir el nodo Text como hijo del nodo Element
    textos.appendChild(inputdni);//
    textos.appendChild(inputnombre);//
    textos.appendChild(inputapellidos);//
    textos.appendChild(inputdireccion);//
    textos.appendChild(inputtelefono);//

    gruporadio1.appendChild(labelradio1);
    gruporadio1.appendChild(radio1);
    gruporadio1.appendChild(labelradio2);
    gruporadio1.appendChild(radio2);
    gruporadio1.appendChild(labelradio3);
    gruporadio1.appendChild(radio3);
    gruporadio1.appendChild(labelradio4);
    gruporadio1.appendChild(radio4);

    gruporadio2.appendChild(labelradio5);
    gruporadio2.appendChild(radio5);
    gruporadio2.appendChild(labelradio6);
    gruporadio2.appendChild(radio6);
    gruporadio2.appendChild(labelradio7);
    gruporadio2.appendChild(radio7);
    gruporadio2.appendChild(labelradio8);
    gruporadio2.appendChild(radio8);


    let divhobbies=document.createElement("div");
    divhobbies.id="divhobbies";

    let labelhobbies= document.createElement("label");
    labelhobbies.textContent="Selecciona tus hobbies"

    let labelh1= document.createElement("label");
    labelh1.textContent="Deportes";

    let inputh1= document.createElement("input");
    inputh1.id="inputh1";
    inputh1.type="checkbox";

    let labelh2= document.createElement("label");
    labelh2.textContent="Cine y Series";

    let inputh2= document.createElement("input");
    inputh2.id="inputh2";
    inputh2.type="checkbox";

    let labelh3= document.createElement("label");
    labelh3.textContent="Deportes";

    let inputh3= document.createElement("input");
    inputh3.id="inputh3";
    inputh3.type="checkbox";

    let labelh4= document.createElement("label");
    labelh4.textContent="Deportes";

    let inputh4= document.createElement("input");
    inputh4.id="inputh4";
    inputh4.type="checkbox";

    let labelh5= document.createElement("label");
    labelh5.textContent="Deportes";

    let inputh5= document.createElement("input");
    inputh5.id="inputh1";
    inputh5.type="checkbox";

    divhobbies.appendChild(labelhobbies);
    divhobbies.appendChild(labelh1);
    divhobbies.appendChild(inputh1);
    divhobbies.appendChild(labelh2);
    divhobbies.appendChild(inputh2);
    divhobbies.appendChild(labelh3);
    divhobbies.appendChild(inputh3);
    divhobbies.appendChild(labelh4);
    divhobbies.appendChild(inputh4);
    divhobbies.appendChild(labelh5);
    divhobbies.appendChild(inputh5);



    let imagen1=document.createElement("div")
    imagen1.id="imagen1";

    let img1=document.createElement("img");
    img1.src="/img/dibujo1.png";
    img1.alt="Aqui imagen 1";
    img1.id="img1";
    img1.height=100;
    img1.width=200;
    imagen1.appendChild(img1);


    let imagen2=document.createElement("div")
    imagen2.id="imagen2";

    let img2=document.createElement("img");
    img2.src="/img/dibujo2.jpg";
    img2.alt="Aqui imagen 2";
    img2.id="img2";
    img2.height=100;
    img2.width=200;

    imagen1.appendChild(img1);
    imagen2.appendChild(img2);


    let divselect=document.createElement("div");
    divselect.id="divselect";

    let select=document.createElement("select");
    select.id="select";
    select.textContent="Elige tu asignatura favorita de este trimestre"
    
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

    divselect.appendChild(select);


    let textareadiv=document.createElement("div");
    textareadiv.id="textareadiv";

    let textarea=document.createElement("textarea");
    textarea.id="textarea";
    textarea.cols=100;
    textarea.rows=5;


    textareadiv.appendChild(textarea);





    fieldset.appendChild(legend);
    fieldset.appendChild(textos);
    fieldset.appendChild(gruporadio1);
    fieldset.appendChild(gruporadio2);
    fieldset.appendChild(divhobbies);
    fieldset.appendChild(imagen1);
    fieldset.appendChild(imagen2);
    fieldset.appendChild(divselect);
    fieldset.appendChild(textareadiv);
    formulario.appendChild(fieldset);


    


    
    divformulario.appendChild(formulario);
    // Añadir el nodo Element como hijo de la pagina
    document.body.appendChild(divformulario);

}

