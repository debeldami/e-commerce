import { createSelector } from 'reselect';

const selectCart = state => state.cartState;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cart => cart.reduce((acc, cur) => acc + cur.quantity, 0)
);