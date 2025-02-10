class Gasto {
    _id;
    _fecha;
    _descripcion;
    _metodoDePago;
    _categoria;
    _registradoPor;

    constructor(id, descripcion, monto, metodoDePago, categoria, registradoPor) {
        this._id = id;
        this._fecha = new Date();
        this._descripcion = descripcion;
        this._monto = monto;
        this._metodoDePago = metodoDePago
        this._categoria = categoria;
        this._registradoPor= registradoPor;
    }
    

    set fecha(fecha) {
        this._fecha = fecha;
    }

    get fecha() {
        return this._fecha;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    get descripcion() {
        return this._descripcion;
    }

    set monto(monto) {
        this._monto = monto;
    }

    get monto() {
        return this._monto;
    }

    set metodoDePago(metodoDePago) {
        this._metodoDePago = metodoDePago;
    }

    get metodoDePago() {
        return this._metodoDePago;
    }
    
    set categoria(categoria) {
        this._categoria = categoria;
    }

    get categoria() {
        return this._categoria;
    }
    
    set registradoPor(registradoPor) {
        this._registradoPor = registradoPor;
    }

    get registradoPor() {
        return this._registradoPor;
    }
}

export default Gasto;