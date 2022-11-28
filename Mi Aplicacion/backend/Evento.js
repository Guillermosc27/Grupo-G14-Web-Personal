class Evento{
    constructor(artista, aforo, costo){
        this.artista = artista;
        this.aforo = aforo;
        this.costo = costo;
        this.ciudad = "Bogota";
}      
    iniciarEvento(asistentes){
        if(asistentes > this.aforo){
            console.log("El evento esta saturado");
        }else{
           const ganancia = this.costo * asistentes;
            console.log("La ganancia total fue de: "+ganancia)
        }
    }
}

export default Evento;
//module.exports = Evento; (estandar antigo de node js y java script)