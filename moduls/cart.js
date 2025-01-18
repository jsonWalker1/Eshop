export const cart = [] 

export function addCart (quantity, selectedItem) {
    cart.push({quantity, selectedItem} )
    console.log(cart)
} 

