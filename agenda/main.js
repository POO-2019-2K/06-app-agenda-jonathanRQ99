import Usuario from "./Usuario.js";
import Agenda from "./Agenda.js";

class Main {
    constructor() {
        let agenda = new Usuario(
            document.querySelector("#agenda"));

            document.querySelector("#btndd").addEventListener("click",()=> {
                let form = document.querySelector("#form");
                form.classList.add("was-validated");

                if (form.checkValidity() === true) {
                    
                }
            })

