import Usuario from "./Usuario.js";
import Agenda from "./Agenda.js";

class Main {
    constructor() {
        let Usuario = new Agenda(
            document.querySelector("#agenda"));

            document.querySelector("#btndd").addEventListener("click",()=> {
                let form = document.querySelector("#form");
                form.classList.add("was-validated");

                if (form.checkValidity() === true) {
                    let nombre = document.querySelector("#nombre").Value;
                    let fechaN = document.querySelector("#fechaN").Value;
                    let correo = document.querySelector("#correo").Value;
                    let telefono = document.querySelector("#telefono").Value;
                    fechaN = fechaN.split('-');
                    
                    let fechaN = new Date(fechaN[0], fechaN[1], fechaN[2]);
                    
                    let correo = document.querySelector("#correo").value;

                    let objAgenda = {
                        nombre: nombre,
                        fechaN: fechaN,
                        correo: correo,
                        telefono: telefono
                    }
                    let Agenda = new Agenda(objAgenda);
                    this._usuario.addEmployee2(agenda);
                    
                }
            });


            new Main();

