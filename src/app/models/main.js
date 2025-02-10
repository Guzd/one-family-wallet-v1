import Admin from "./Admin.js";
import Integrante from "./Integrante.js";
import Grupo from "./Grupo.js";


const integrantes = []
const admin = new Admin("admin1", "DianaG", "123A");
const integrante1 = new Integrante("integrante1", "Sara M", "456B");
const integrante2 = new Integrante("integrante2", "Lulu Z", "789C");
integrante1.registrarGasto("1", "Despensa", "1500", "TDC", "alimentos")
integrante1.registrarGasto("2","pantalones", "1500", "TDC", "ropa")
integrante1.registrarGasto("3","vasos", "1500", "TDC", "hogar")
integrante1.registrarGasto("4","camisas", "1500", "TDC", "ropa")
integrantes.push(integrante1);
integrantes.push(integrante2);
const nuevoGrupo = new Grupo("grupo1", "grupo1", integrantes);
admin.crearGrupo(nuevoGrupo);

console.log(admin.grupos)
const integrante3 = new Integrante("integrante3", "David G", "001C");
admin.addIntegrante("grupo1", integrante3)

console.log(admin.grupos)
console.log(nuevoGrupo.getGastosTotal());

integrante2.abandonarGrupo(nuevoGrupo);
console.log(nuevoGrupo.integrantes)
console.log(admin.grupos)
admin.eliminarGrupo("grupo1");
console.log(admin.grupos)