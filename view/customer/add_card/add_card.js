let container = document.querySelector(".container");
let total = document.getElementById("total");
//1// get data from localstorage=====================
let dataAddCard = JSON.parse(localStorage.getItem("product_Add"));

//sum total==============
let result_price = 0
for (let obj of dataAddCard){
    result_price += parseInt(obj.price)
    
}
total.textContent = result_price + " $"
// ===============================

function saveDataAdd() {
    localStorage.setItem("product_Add", JSON.stringify(dataAddCard));
    
  }

console.log(dataAddCard)
console.log(dataAddCard)
function rederAddcard(){
    let addCard = document.querySelector(".addCard");
    addCard.remove()
    let newAddCard = document.createElement("div");
    newAddCard.className = ("addCard");
    container.appendChild(newAddCard)
    
    for (let index in dataAddCard ){
        let data = dataAddCard[index] 
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = index;
        newAddCard.appendChild(card)


        let cardContain = document.createElement("div");
        cardContain.className = ("cardContainer")
        card.appendChild(cardContain)

        let imfor_product = document.createElement("div");
        imfor_product.className = ("imfor_prodcut")
        cardContain.appendChild(imfor_product)


        let Image = document.createElement("img");
        Image.src = data.imge

        imfor_product.appendChild(Image)

        let div_Name = document.createElement("div");
        div_Name.className = ("div_name")
        div_Name.textContent = "Name: "
        imfor_product.appendChild(div_Name)
        let span_name = document.createElement("span");
        span_name.textContent = data.name
        div_Name.appendChild(span_name)

        

        let span_Price = document.createElement("span");
        span_Price.textContent = "Price: " + data.price + "$"
        imfor_product.appendChild(span_Price)
        let remove = document.createElement("div");
        remove.className = ("remove");
        card.appendChild(remove);
        let i = document.createElement("i");
        i.className = ("fa fa-remove");
        i.addEventListener("click",removecard)
        remove.appendChild(i)
    }
}
function removecard(event){
    
        //  Get index
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
      
        // Remove question
        dataAddCard.splice(index, 1);
        // Save to local storage
        saveDataAdd()
        // Update the view
        rederAddcard()

    // console.log(afterRemove)
 
}

// call function======================================
saveDataAdd()
rederAddcard()