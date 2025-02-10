import Categoria from "./Categoria.js";
import Gasto from "./gasto.js"
import UsuarioBase from "./UsuarioBase.js"

const INTEGRANTE = "integrante"
class Integrante extends UsuarioBase {
    #gastos = [];

    constructor(nombre, usuario, password) {
        super(nombre, usuario, password, INTEGRANTE);
    }

    registrarGasto(id, descripcion, monto, metodoDePago, categoria) {
        this.#gastos.push(new Gasto(id, descripcion, monto, metodoDePago, categoria, this.usuario))
    }

    getGasto(id) {
        return this.getGastos().find(gasto => gasto.id === id)
    }

    getGastos() {
        return this.#gastos;
    }

    editarGasto(id, propiedad, valor) {
        const gasto = this.getGasto(id);
        gasto[propiedad] = valor;
    }
    
    eliminarGasto(id) {
        const gastos = this.getGastos();
        const index = gastos.findIndex(gasto => 
            gasto.id === id
        )
        gastos.splice(index, 1);

        return gastos;
    }

    abandonarGrupo(grupo) {
        grupo.eliminarIntegrante(this.id)
    }


    getGastosPorCategoria(gastos, categoria) {
        const getCategoria = categoria.nombre
        const result = gastos.filter(gasto => gasto.categoria === getCategoria)
        return result;
    }

    getGastosPorMetodoDePago(gastos, metodoDePago) {
        const getMetodoDePago = metodoDePago.nombre
        const result = gastos.filter(gasto => gasto.metodoDePago === getMetodoDePago)
        return result;
    }

    getGastoTotal() {
        const getGastos = this.getGastos();
        return getGastos.reduce((acc, {monto}) => acc + Number(monto), 0)
    }
}
export default Integrante;

// Ejemplos de uso
// const integrante = new Integrante("Diana Gutierrez", "dianagz", "123654")
// integrante.registrarGasto("1", "Despensa", "1500", "TDC", "alimentos")
// integrante.registrarGasto("2","pantalones", "1500", "TDC", "ropa")
// integrante.registrarGasto("3","vasos", "1500", "TDC", "hogar")
// integrante.registrarGasto("4","camisas", "1500", "TDC", "ropa")
// const gastos = integrante.getGastos();
// integrante.getGastosPorCategoria(gastos, new Categoria("ropa", "#ropa"));
// console.log(integrante.editarGasto("gasto::hogar::3", "descripcion" ,"vasos grandes"));
// console.log(integrante.getGastos())
// console.log(integrante.eliminarGasto("gasto::hogar::3"))
// console.log("gasto total", integrante.getGastoTotal(integrante.getGastos()))


