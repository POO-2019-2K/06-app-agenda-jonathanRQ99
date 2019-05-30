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
}