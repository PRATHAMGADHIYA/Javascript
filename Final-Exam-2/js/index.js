import navbar from "../components/navbar.js";
import methods from "../components/api.js";

document.getElementById('navbar').innerHTML= navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];

const deletedData = async (id) => {
    await methods.delete(id);
};

const mapper = async () => {
    let data = await methods.get();
    document.getElementById("productlist").innerHTML = ""
        data.map((ele) => {
            let div = document.createElement('div');
            div.className = 'product';
    
            let title = document.createElement('h2');
            title.innerHTML = ele.title;
    
            let price = document.createElement('h3');
            price.innerHTML = ele.price;
    
            let img = document.createElement('img');
            img.src = ele.img;
    
            let category = document.createElement('p');
            category.innerHTML = ele.category;
    
            let btn = document.createElement('button');
            btn.innerHTML = 'Delete';

            btn.addEventListener('click', async () => {
                await deletedData(ele.id);
                await mapper();
            });
    
            div.append(img,title,price,category, btn);
            document.getElementById('productlist').append(div);
        });
}

await mapper(products);

const handlesort = (orderby) => {
    if (orderby == "lth") {
        let temp = products.sort((a, b) => a.price - b.price);

        mapper(temp);
    }
    else {
        let temp = products.sort((a, b) => b.price - a.price);

        mapper(temp);
    }
};

const handlecategory = (category) => {

    let temp = products.filter((ele) => ele.category == category);

    mapper(temp);
};

document.getElementById("lth").addEventListener("click", () => handlesort("lth"));

document.getElementById("htl").addEventListener("click", () => handlesort("htl"));

document.getElementById("Shoes").addEventListener("click", () => handlecategory("Shoes"));

document.getElementById("nike").addEventListener("click", () => handlecategory("nike"));

document.getElementById("jorden").addEventListener("click", () => handlecategory("jorden"));