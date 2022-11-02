"use strict";
const listContacto = document.querySelector(".agenda-personas");
let contacto = [];

async function importarContactos(){
    const response = await fetch('/script/contactos.json');
    contacto = await response.json();
    
    contacto.forEach(element => {
        const persona = document.createElement('li');
        persona.className = "contacto"
        persona.id = `${element.ID}`
        persona.innerHTML += `
        <div>
        <img src="${element.imagen}" alt="imagen persona contacto">
        <p>${element.nombre + " "+  element.apellido}</p>
        <div>
        `
        listContacto.appendChild(persona);

        persona.addEventListener("click",
        
        ()=> {
            console.log(persona)
        })
    }
    
    );   
}
importarContactos();