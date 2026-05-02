const productos = [
  {
    nombre: "Hamburguesa Clásica 🍔",
    descripcion: "Carne, queso, lechuga, tomate",
    precio: "$18.000",
    imagen: "img/Burger.png"
  },
  {
    nombre: "Pizza Pepperoni 🍕",
    descripcion: "Queso mozzarella + pepperoni",
    precio: "$25.000",
    imagen: "img/Pizza.png"
  },
  {
    nombre: "Combo Burger + Gaseosa 🥤",
    descripcion: "Incluye papas",
    precio: "$22.000",
    imagen: "img/Combo.png"
  },
  {
    nombre: "Papas Francesas 🍟",
    descripcion: "Crocantes con salsa",
    precio: "$8.000",
    imagen: "img/Papas.png"
  }
];
const contenedor = document.getElementById("productos");

productos.forEach(p => {
  contenedor.innerHTML += `
    <div class="card">
      <img src="${p.imagen}" alt="">
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <p class="precio">${p.precio}</p>
      <button onclick="pedir('${p.nombre}')">Pedir por WhatsApp</button>
    </div>
  `;
});

function pedir(producto) {
  const numero = "573000000000"; // TU NÚMERO
  const mensaje = `Hola, quiero pedir: ${producto}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}