export class Cart {
    constructor() {
        this.items = [];
    }

    addItem(cartProduct) {
        // Zkontroluj, zda produkt už v košíku je
        const existingItem = this.items.find(item => item.cartProduct.product.size === cartProduct.product.size);


        if (existingItem) {
            existingItem.quantity += items.quantity; // Zvýšení množství
        } else {
            this.items.push(cartProduct); // Přidání nového produktu s množstvím
        }

        console.log(`${cartProduct.name} ${cartProduct.size} ${cartProduct.price}bylo přidáno do košíku.`);
    }

    displayCart() {
        if (this.items.length === 0) {
            console.log('Košík je prázdný.');
        } else {
            console.log('Obsah košíku:');
            this.items.forEach((item, index=> {
                console.log(`${item.cartProduct.name} ${item.cartProduct.size} - ${item.cartProduct.quantity} ks - ${item.cartProduct.price} za kus`);
                console.log(this.items)
            }));
        }
    }
}
