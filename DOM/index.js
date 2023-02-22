
let heart = document.querySelectorAll(".fav")

heart.forEach(button => {
    button.addEventListener ("click",function(){
        if(button.getAttribute("class") == "fav") {
            button.setAttribute("class","fav full")} 
        else {
            button.setAttribute("class",'fav')
        }
    })
})

let deletebutton = document.querySelectorAll(".x") 

deletebutton.forEach(btn =>{
    btn.addEventListener("click",() =>{
        btn.parentElement.parentElement.remove()
        updateTotal();

    }
     )
})

let add = document.querySelectorAll(".plus")

add.forEach( btn => {
    btn.addEventListener("click", () => {
        var input = btn.previousElementSibling
        input.value ++
        updateTotal();

    }
    )
})

let moins = document.querySelectorAll(".moins")

moins.forEach( btn => {
    btn.addEventListener("click", () => {
        var input = btn.nextElementSibling
        if (input.value>1){
            input.value -- 
        }else{
            btn.parentElement.parentElement.remove()
        }
        updateTotal();

    }
    )
})


function updateTotal() {
    total = 0;
    const qtyInputs = document.querySelectorAll(".qty-input");
    const prices = document.querySelectorAll(".price");
    
    for(let i=0 ; i< qtyInputs.length; i++){
        total += qtyInputs[i].value * prices[i].textContent
    }
    const totalPrice = document.querySelector(".total-price")
    totalPrice.textContent = `Total : ${total}$` 
  }
  
  updateTotal();
  

