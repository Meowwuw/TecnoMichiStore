const API_URL = import.meta.env.VITE_API_URL;

export function obtenerProductos(){
    return fetch(`${API_URL}/productos`)
    .then((response) => {
        if(!response.ok){
            throw new Error ("Error al obtener producto");
        }
        return response.json();
    });
}

export function crearProducto(producto) {
    return fetch(`${API_URL}/productos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error al crear producto");
        }

        return response.json();
    });
}

