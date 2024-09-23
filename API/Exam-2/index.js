let productsdata = [];

const getData = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();
    productsdata = res.products; 
    displayProducts(productsdata); 
}

getData();


const displayProducts = (Data) => {
    const productsList = document.getElementById("productsList");
    productsList.innerHTML = ""; 

    Data.map((data) => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        let id = document.createElement("h2");
        id.innerHTML = data.id;
        let title = document.createElement("h2");
        title.innerHTML = data.title;
        let price = document.createElement("h5");
        price.innerHTML = data.price;
        let category = document.createElement("h5");
        category.innerHTML = data.category;
        let stars = document.createElement("h5");
        stars.innerHTML = data.rating; 
        let image = document.createElement("img");
        image.src = data.thumbnail;

        productDiv.append(id, title, price, category, stars, image);
        productsList.appendChild(productDiv);
    });
};

document.getElementById("lth").addEventListener("click", () => {
    let sorted = [...productsdata].sort((a, b) => a.price - b.price);
    displayProducts(sorted);
});

document.getElementById("htl").addEventListener("click", () => {
    let sorted = [...productsdata].sort((a, b) => b.price - a.price);
    displayProducts(sorted);
});

document.getElementById("beauty").addEventListener("click", () => {
    let filtering = productsdata.filter(product => product.category === "beauty");
    displayProducts(filtering);
});

document.getElementById("fragrances").addEventListener("click", () => {
    let filtering = productsdata.filter(product => product.category === "fragrances");
    displayProducts(filtering);
});

document.getElementById("furniture").addEventListener("click", () => {
    let filtering = productsdata.filter(product => product.category === "furniture");
    displayProducts(filtering);
});

document.getElementById("groceries").addEventListener("click", () => {
    let filtering = productsdata.filter(product => product.category === "groceries");
    displayProducts(filtering);
});
document.getElementById("search").addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

    }

});