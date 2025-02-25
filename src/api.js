const baseUrl = "http://localhost:3001";

export const getGrupos = async () => {
    const res = await fetch(`${baseUrl}/grupos`, {cache: "no-store"})
    const grupos = await res.json();

    return grupos;
}

export const getGrupo = async (grupoId) => {
    const res = await fetch(`${baseUrl}/grupos/${grupoId}`, {cache: "no-store"})
    const g = await res.json();

    return g;
}


export const guardarGrupo = async (grupo) => {
    const res = await fetch(`${baseUrl}/grupos`, {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify(grupo)
    })

    const nuevoGrupo = await res.json();

    return nuevoGrupo;
}

export const editarGrupo = async (grupo) => {
    const res = await fetch(`${baseUrl}/grupos/${grupo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify(grupo)
    })

    const updatedGrupo = await res.json();

    return updatedGrupo;

}
export const eliminarGrupo = async (id) => {
    const res = await fetch(`${baseUrl}/grupos/${id}`, {
        method: "DELETE",
    })
}

export const getUsuarios = async () => {
    const res = await fetch(`${baseUrl}/usuarios`, {cache: "no-store"})
    const usuarios = await res.json();

    return usuarios;
}

export const guardarUsuario = async (usuario) => {
    const res = await fetch(`${baseUrl}/usuarios`, {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify(usuario)
    })

    const nuevoUsuario = await res.json();

    return nuevoUsuario;
}

export const editarUsuario = async (usuario) => {
    const res = await fetch(`${baseUrl}/usuarios/${usuario.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify(usuario)
    })

    const updatedUsuario = await res.json();

    return updatedUsuario;

}
export const eliminarUsuario = async (id) => {
    const res = await fetch(`${baseUrl}/usuarios/${id}`, {
        method: "DELETE",
    })
}