class Grupo {
    _id;
    _nombre;
    _integrantes = [];
    constructor(id, nombre, integrantes) {
        this._id = id;
        this._nombre = nombre;
        this._integrantes = integrantes;
    }

    set id(id) {
        this._id = id
    }

    get id() {
        return this._id;
    }

    set nombre(nombre) {
        this._nombre = nombre
    }

    get nombre() {
        return this._nombre;
    }

    set integrantes(integrantes) {
        this._integrantes = integrantes
    }
    
    get integrantes() {
        return this._integrantes;
    }

    nuevoIntegrante(integrante) {
        this._integrantes.push(integrante)
    }

    eliminarIntegrante(id) {
        const index = this._integrantes.findIndex(integrante => 
            integrante.id === id
        )
        this._integrantes.splice(index, 1);

        return this._integrantes;
    }
    
    getGastosTotal() {
        let suma = 0;
        for (const integrante of this.integrantes) {
            const integranteGastosPorCategoria = integrante.getGastoTotal()
            suma = suma + integranteGastosPorCategoria;
        }
        return suma;
    }
}

export default Grupo;


