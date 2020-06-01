export const addItemToCart = (cartItems, cartItemToAdd) => {
    const iTemFound = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if (iTemFound) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

