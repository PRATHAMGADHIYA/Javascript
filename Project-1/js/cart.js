import { createTag } from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar()

let cart = JSON.parse(localStorage.getItem("cart")) || []

const remove = (index) => {
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    mapper(cart)
}

const handleqty = (opr, index) => {
    if (opr == "+") {
        cart[index].qty += 1
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    else {
        if (cart[index].qty > 1) {
            cart[index].qty -= 1
            localStorage.setItem("cart", JSON.stringify(cart))
        }
        else {
            remove(index)
        }
    }
    mapper(cart)
}
const mapper = (cart) => {
    document.getElementById("cartitem").innerHTML = ""

    cart.map((ele, index) => {

        let tr = createTag("tr", "")
        let td1 = createTag("td", "")
        let img = createTag("img", ele.img)
        img.setAttribute("class", "img")

        td1.append(img)

        let td2 = createTag("td", ele.title)

        let td3 = createTag("td", "")
        let btn1 = createTag("button", "-")
        let btn2 = createTag("button", ele.qty)
        let btn3 = createTag("button", "+")
        td3.append(btn1, btn2, btn3)

        btn1.addEventListener("click", () => handleqty("-", index))
        btn3.addEventListener("click", () => handleqty("+", index))

        let td4 = createTag("td", ele.price)
        let td5 = createTag("td", ele.price * ele.qty)
        let td6 = createTag("td", "Delete")
        td6.addEventListener("click", () => remove(index))

        tr.append(td1, td2, td3, td4, td5, td6)

        document.getElementById("cartitem").append(tr)        
    })
}
mapper(cart)

