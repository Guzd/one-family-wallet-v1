import { v4 as uuid } from 'uuid';
class UsuarioBase {
    #password;
    #loggedIn;

    constructor(nombre, usuario, password, tipo) {
        this.id = `user::${tipo}::${uuid()}`
        this.nombre = nombre;
        this.usuario = usuario;
        this.tipo = tipo
        this.#password = password;
        this.#loggedIn = false;
    }

    _login(inputUsuario, inputPassword) {
        if (this.usuario === inputUsuario && this.#password === inputPassword) {
            this.#loggedIn = true;
            console.log(`${this.nombre} ha iniciado sesión correctamente.`);
        } else {
            console.log("Usuario o contraseña incorrectos.");
        }
    }

    _logout() {
        if (this.loggedIn) {
            this.loggedIn = false;
            console.log(`${this.nombre} ha cerrado sesión.`);
        } else {
            console.log("No hay ninguna sesión activa.");
        }
    }
    

    setPassword(newPassword) {
        this.#password = newPassword;
        console.log("Contraseña actualizada correctamente.");
    }

    verificarPassword(inputPassword) {
        if (this.#password === inputPassword) {
            console.log("Contraseña correcta.");
        } else {
            console.log("Contraseña incorrecta.");
        }
    }

    getUsuarioLoggedIn() {
        if (this.#loggedIn) {
            console.log(`usuarioLoggedIn: ${this.usuario}`)
            return this.usuario;
        } 
        console.log("No hay ninguna sesión activa")
    }
}

export default UsuarioBase;

// Ejemplos de uso
// const usuario1 = new Usuario('Juan Pérez', 'juanp', '12345');
// usuario1.login('juanp', '12345');
// usuario1.getUsuarioLoggedIn();
// usuario1.verificarPassword("12345"); // correcto 
// usuario1.setPassword("ABCD");
// usuario1.verificarPassword("12345"); // error
// usuario1.verificarPassword("ABCD"); // correcto 


