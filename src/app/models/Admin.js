import UsuarioBase from "./UsuarioBase.js"
import Grupo from "./Grupo.js";
import Integrante from "./Integrante.js"
import Categoria from "./Categoria.js";
import MetodoDePago from "./MetodoDePago.js";


const ADMIN = "admin"
class Admin extends UsuarioBase {
    _grupos = [];
    _categorias = [];
    _metodosDePago = [];

    constructor(nombre, usuario, password) {
        super(nombre, usuario, password, ADMIN);
    }
    
    set grupos(grupo){
        this._grupos.push(grupo);
    }

    get grupos() {
        return this._grupos;
    }

    set categorias(categoria){
        this._grupos.push(categoria);
    }

    get categorias() {
        return this._categorias;
    }

    set _metodosDePago(metodoDePago){
        this._metodosDePago.push(metodoDePago);
    }

    get metodosDePago() {
        return this._metodosDePago;
    }

    getGrupo(id){
        const index = this.grupos.findIndex(grupo => grupo.id === id);
        return this.grupos[index];
    }
    
    crearGrupo(grupo) {
        if (grupo instanceof Grupo) {
            this.grupos = grupo;
            return;
        }

        console.log("Los datos ingresados no corresponden a un grupo");
    }

    eliminarGrupo(id){
        const index = this.grupos.findIndex(grupo => 
            grupo.id === id
        )
        this.grupos.splice(index, 1);

        return this.grupos;
    }

    addIntegrante(grupoId, integrante) {
        const grupo = this.getGrupo(grupoId);
        if(integrante instanceof Integrante) {
            grupo.nuevoIntegrante(integrante);
            return;
        }

        console.log("Los datos ingresados no corresponden a un integrante")
    }

    eliminarIntegrante(grupoId, integrante) {
        const grupo = this.getGrupo(grupoId);
        if(integrante instanceof Integrante) {
            grupo.eliminarIntegrante(integrante);
            return;
        }

        console.log("Los datos ingresados no corresponden a un integrante")
    }

    addCategoria(categoria) {
        if (categoria instanceof Categoria) {
            this.categorias = categoria;
            return;
        }

        console.log("Los datos ingresados no corresponden a una categoria");
    }

    eliminarCategoria(id) {
        const index = this.categorias.findIndex(categoria => 
            categoria.id === id
        )
        this.categorias.splice(index, 1);

        return this.categorias;
    }

    addMetodoDePago(metodoDePago) {
        if (metodoDePago instanceof MetodoDePago) {
            this.metodosDePago = metodoDePago;
            return;
        }

        console.log("Los datos ingresados no corresponden a una metodo de pago");
    }

    eliminarMetodoDePago() {
        const index = this.metodosDePago.findIndex(metodoDePago => 
            metodoDePago.id === id
        )
        this.metodosDePago.splice(index, 1);

        return this.metodosDePago;
    }
}

export default Admin;

// const integrantes = []
// const admin = new Admin("admin1", "DianaG", "123A");
// const integrante1 = new Integrante("integrante1", "Sara M", "456B");
// const integrante2 = new Integrante("integrante2", "Lulu Z", "789C");
// integrante1.registrarGasto("1", "Despensa", "1500", "TDC", "alimentos")
// integrante1.registrarGasto("2","pantalones", "1500", "TDC", "ropa")
// integrante1.registrarGasto("3","vasos", "1500", "TDC", "hogar")
// integrante1.registrarGasto("4","camisas", "1500", "TDC", "ropa")
// integrantes.push(integrante1);
// integrantes.push(integrante2);
// const nuevoGrupo = new Grupo("grupo1", "grupo1", integrantes);
// admin.crearGrupo(nuevoGrupo);
// console.log(admin.grupos)
// const integrante3 = new Integrante("integrante3", "David G", "001C");
// admin.addIntegrante("grupo1", integrante3)

// console.log(admin.grupos)
// // integrante2.abandonarGrupo(nuevoGrupo);
// console.log(nuevoGrupo.getGastosTotal());
// console.log(nuevoGrupo.integrantes)
// // admin.eliminarGrupo("grupo1");
// console.log(admin.grupos)