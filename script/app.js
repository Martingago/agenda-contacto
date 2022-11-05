"use strict";
const listContacto = document.querySelector(".agenda-personas");

const fotoPerfil = document.querySelector(".foto-perfil");
const telefono = document.querySelector(".telefono");
const nombre = document.querySelector(".nombre");
const puesto = document.querySelector(".puesto");
const web = document.querySelector(".web");
const mail = document.querySelector(".mail");


const contactos = new Map();

async function importarContactos(){
    // Traemos los contactos desde la BBDD y los metemos en un MAP
    const response = await fetch('script/contactos.json');
    let contacto = await response.json();
    contacto.forEach(element => {
        contactos.set(element.id, element);
        // Creamos contenido para cada contacto
        const elementoContacto = document.createElement('li');
        elementoContacto.className = "contacto";
        elementoContacto.id = element.id;
        elementoContacto.innerHTML += `
        <div>
            <img src="${element.imagen}" alt="test">
            <p>${element.nombre + " " + element.apellido} </p>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
        `
        listContacto.appendChild(elementoContacto)

        // Se pinta por pantalla los datos de los contactos
        elementoContacto.addEventListener("click",
        ()=> {
            fotoPerfil.src = `${element.imagen}`
            nombre.textContent = `${element.nombre}`;
            puesto.textContent = `${element.puesto}`;
            telefono.textContent = `${element.telefono}`;
            web.textContent = `${element.url}`;
                web.href = `${element.url}`;
            mail.textContent = `${element.email}`;
                mail.href = `mailto:${element.email}`
        })
    }
    );   
    fotoPerfil.src = `${contactos.get("000").imagen}`
    nombre.textContent = `${contactos.get("000").nombre}`; 
    puesto.textContent = `${contactos.get("000").puesto}`;
    telefono.textContent = `${contactos.get("000").telefono}`;
    web.textContent = `${contactos.get("000").url}`; 
        web.href= `${contactos.get("000").url}`
    mail.textContent = `${contactos.get("000").email}`;
        mail.href = `mailto:${contactos.get("000".email)}`


}
importarContactos();
