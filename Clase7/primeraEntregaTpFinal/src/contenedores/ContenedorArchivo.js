const fs  = require('fs')

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = ruta;
    }

    listar(id) {
        let productos = null;
        const contenido = fs.readFileSync(this.ruta, 'utf-8');
        return JSON.parse(contenido)
    }

    async listarAll() {
    }

    async guardar(obj) {
    
    }

    async actualizar(elem, id) {
    
    }

    async borrar(id) {
    
    }

    async borrarAll() {
    }
}

module.exports = ContenedorArchivo