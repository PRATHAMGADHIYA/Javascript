let products = JSON.parse(localStorage.getItem('products'));

const handleDelete = (index) => {

    products.splice(index, 1);
    mapper(products)
    localStorage.setItem("products", JSON.stringify(products));
}

const mapper = (products) => {
    document.getElementById("productlist").innerHTML = ""
    products.map((ele, index) => {
        let title = document.createElement("h3")
        title.innerHTML = ele.title;
        let price = document.createElement("p")
        price.innerHTML = ele.price;
        let img = document.createElement("img")
        img.src = ele.img;
        let category = document.createElement("p");
        category.innerHTML = ele.category;
        let btnDlt = document.createElement("button");
        btnDlt.innerHTML = "Delete";
        btnDlt.addEventListener("click", () => handleDelete(index));
        let div = document.createElement("div");
        div.append(title, price, img, category, btnDlt);
        document.getElementById("productlist").append(div);
    });
}

mapper(products);