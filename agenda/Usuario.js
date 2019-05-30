import Agenda from "./Agenda.js";
export default class Usuario {
    constructor(tableUsuario){
        this._tableUsuario = tableUsuario;
        this._taller = [];
        this._initTables();
    }

    _initTables() {
        let taller = JSON.parse(localStorage.getItem("taller"));
        if(!taller) {
        return;
        }
        taller.forEach( (Agenda, index) =>{
            console.log(Agenda);
            Agenda.fechaN = new Date(Agenda.fechaN);
            this._addAgenda(new Agenda(Agenda));

        });
    }

    _addEditDeleteToRow(row, Agenda){
        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = 'borrar';
        btnDelete.className = 'btn btn-danger';
        row.cells[5].innerHTML = '';
        row.cells[5],appendChild(btnDelete);
        btnDelete.addEventListener('click', () => {
            this._taller.splice(Agenda, 1);
            row.innerHTML = "";
            localStorage.setItem("taller", JSON.stringify(this._taller));
            return;
        });
    }

    _addAgenda(Agenda) {
        let row = this._tableUsuario.insertRow(-1);
        let cellnombre = row.insertCell(0);
        let cellfechaN = row.insertCell(1);
        let cellcorreo = row.insertCell(2);
        let cellAge = row.insertCell(3);
        let celltelefono = row.insertCell(4);
        row.insertCell(5);
        
        cellnombre.innerHTML = Agenda.nombre;
        cellfechaN.innerHTML = Agenda.fechaN;
        cellcorreo.innerHTML = Agenda.correo;
        cellAge.innerHTML = Agenda.getAge;
        celltelefono.innerHTML = Agenda.telefono;
        this._addEditDeleteToRow(row, Agenda);
        
        let objAgenda = {
            nombre: Agenda.nombre,
            fechaN: Agenda.fechaN,
            correo: Agenda.correo,
            telefono: Agenda.telefono
        }
        this._taller.push(objAgenda);
    }
    _findCorreo(correo){
        letfound = -1
        this._taller.forEach((Agenda, index) => {
            if(Agenda.correo === correo){
                found = index;
                return;
            }
        });
        return found;
    }
}