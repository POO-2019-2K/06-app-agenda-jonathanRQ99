export default class Agenda {
    constructor(Agenda) {
        this._nombre = Agenda.nombre.toUpperCase();
        this._fechaN = Agenda.fechaN;
        this._correo = Agenda._correo;
        this._telefono = Agenda._telefono;
        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"

        ]
    }
    
    get nombre() {
        return this._nombre;
    }
    get fechaN() {
        return this._fechaN;
    }
    get correo() {
        return this._correo;
    }
    get telefono() {
        return this._telefono;
    }
    getFechaInicioString(){
        let date = 
        this._fechaN.getDate() + "/" +
        this._months[this._fechaN.getMonth()] + "/" +
        this._fechaN.getFullYear();
        return date  
    }

}