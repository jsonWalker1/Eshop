console.log('1');
//Budu potřebovat object, ze kterého budu mít innerHTML a bude se přes něho vykreslovat celí obsah stránky.
//1.vytvořím object s jedním produktem
//2. vytvořím loop která bude vykreslovat tolik HTML dokud bude něco v objectu

const product = [{
    name: 'Nipl R - type 308',
    img: 'IMG/fit1.jpg',
    description: 'Přivařovací vnější kónický závit',
},
{
    name: 'Nipl G - type 309',
    img: 'IMG/fit1.jpg',
    description: 'Celozávitová vsuvka s válcovým závitem',
},
{
    name: 'dvojnipl typ 310',
    img: 'IMG/fit1.jpg',
    description: 'vsuvka dvojita strandartni delka'
}]
let productHTML= '';
product.forEach((product)=> {
productHTML += 
        `<div class="product">
            <div class="list-product" >
                <img src="${product.img}" alt="" class="img-product">
                <button><a href="">${product.name}</a></button>
                <p>${product.description}</p>
            </div>
        </div>`
        let mainProduct = document.querySelector('.js-product-render')
        console.log(mainProduct)
        mainProduct.innerHTML = productHTML;
        console.log(productHTML)
})
