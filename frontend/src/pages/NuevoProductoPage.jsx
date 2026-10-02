import { useState } from "react";
import { crearProducto } from "../services/productoService";

function NuevoProductoPage() {

    const [producto, setProducto] = useState({
        nombre: "",
        categoria: "",
        precio: "",
        stock: ""
    });

    const manejarCambio = (event) => {
        setProducto({
            ...producto,
            [event.target.name]: event.target.value
        });
    };

    const guardarProducto = (event) => {
        event.preventDefault();

        crearProducto(producto)
            .then((data) => {
                console.log("Producto creado:", data);
                alert("Producto registrado");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h1>Nuevo producto</h1>

            <form onSubmit={guardarProducto}>

                <input
                    name="nombre"
                    placeholder="Nombre"
                    value={producto.nombre}
                    onChange={manejarCambio}
                />

                <input
                    name="categoria"
                    placeholder="Categoría"
                    value={producto.categoria}
                    onChange={manejarCambio}
                />

                <input
                    name="precio"
                    type="number"
                    placeholder="Precio"
                    value={producto.precio}
                    onChange={manejarCambio}
                />

                <input
                    name="stock"
                    type="number"
                    placeholder="Stock"
                    value={producto.stock}
                    onChange={manejarCambio}
                />

                <button type="submit">
                    Guardar producto
                </button>

            </form>
        </div>
    );
}

export default NuevoProductoPage;