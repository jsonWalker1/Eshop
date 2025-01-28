export class Cart {
    constructor() {
        // Načítání košíku z localStorage, pokud existuje
        this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
    }

    addItem(cartProduct) {
        // Zkontroluj, zda produkt už v košíku je
        const existingItem = this.items.find(item => item.size === cartProduct.size);

        if (existingItem) {
            // Pokud už produkt v košíku je, zvýšíme jeho množství
            existingItem.quantity += cartProduct.quantity;
        } else {
            // Pokud produkt není v košíku, přidáme nový
            this.items.push(cartProduct);
        }

        // Uložíme aktualizovaný košík do localStorage
        localStorage.setItem('cartItems', JSON.stringify(this.items));

        // Log pro potvrzení
        console.log(`${cartProduct.name} ${cartProduct.size} ${cartProduct.price} bylo přidáno do košíku.`);
    }

    displayCart() {
        if (this.items.length === 0) {
            console.log('Košík je prázdný.');
        } else {
            console.log('Obsah košíku:');
            this.items.forEach(item => {
                console.log(`${item.name} ${item.size} - ${item.quantity} ks - ${item.price} za kus`);
            });
        }
    }
}
