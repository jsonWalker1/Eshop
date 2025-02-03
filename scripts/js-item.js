import {item} from "../moduls/item308.js";
import {Cart} from "../moduls/cart1.js";

// vykreslování obsahu 
let itemHTML= '';
item.forEach( (item,index) => {
    itemHTML +=  
            `   <img src="${item.itemIMG}" alt="">
                <p>${item.name}  ${item.size}</p>
                <p>${item.status}</p>
                <p>${item.price}</p>
                <input type="number" data-index='${index}' class='js-inputQuantity'>
                <button data-index='${index}' class="js-add-cart"><img src="IMG/carticon.bmp" alt=""></button>
            `
});
//zde se vše vykreslí
let itemDom = document.querySelector('.itemID')
itemDom.innerHTML = itemHTML
//console.log(itemHTML) test


const myCart = new Cart ()
myCart.displayCart();

document.querySelectorAll('.js-add-cart').forEach((button)=>{
    button.addEventListener('click', () => {
        //získám index pro identifikaci a uložím do variebls
        let index = event.target.closest('button').getAttribute('data-index');
        let product = item[index];
        //console.log(selectedItem)
        //picknu input pro množství 
        let element = document.querySelector(`.js-inputQuantity[data-index="${index}"]`);

        
        let quantity = parseInt(element.value)|| 0;
        
        //console.log(quantity) //test
        let cartProduct = {...product, quantity};
        element.value = ''
        console.log(quantity) //test
        
        myCart.addItem(cartProduct);
        myCart.displayCart();
    })
})

