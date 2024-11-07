const products = [
    {
        name: "Tênis de Corrida",
        image: "https://via.placeholder.com/200x150",
        price: "R$ 299,90"
    },
    {
        name: "Camiseta Esportiva",
        image: "https://via.placeholder.com/200x150",
        price: "R$ 79,90"
    },
    {
        name: "Bola de Futebol",
        image: "https://via.placeholder.com/200x150",
        price: "R$ 49,90"
    },
    {
        name: "Luvas de Boxe",
        image: "https://via.placeholder.com/200x150",
        price: "R$ 149,90"
    },
    {
        name: "Garrafa Térmica",
        image: "https://via.placeholder.com/200x150",
        price: "R$ 39,90"
    }
];

function displayProducts() {
    const productList = document.getElementById("product-list");
    
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        
        productList.appendChild(productCard);
    });
}

document.addEventListener("DOMContentLoaded", displayProducts);
