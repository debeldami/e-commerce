export const addItemToCart = (cartItems, cartItemToAdd) => {
    const iTemFound = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if (iTemFound) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const iTemFound = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (iTemFound.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id);
    }

    return cartItems.map(item =>
        item.id === cartItemToRemove.id ? { ...item, quantity: --item.quantity } : item
    )
}
