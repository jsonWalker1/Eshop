console.log('1');
//Budu potřebovat object, ze kterého budu mít innerHTML a bude se přes něho vykreslovat celí obsah stránky.
//1.vytvořím object s jedním produktem
//2. vytvořím loop která bude vykreslovat tolik HTML dokud bude něco v objectu
import {product} from '../moduls/product.js';

let productHTML= '';
product.forEach((product)=> {
productHTML += 
        `<div class="product">
            <div class="list-product" >
                <img src="${product.img}" alt="" class="img-product">
                <button><a href="${product.link}">${product.name}</a></button>
                <p>${product.description}</p>
            </div>
        </div>`
       })

let mainProduct = document.querySelector('.js-product-render')

mainProduct.innerHTML = productHTML;
