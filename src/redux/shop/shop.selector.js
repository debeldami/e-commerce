import { createSelector } from 'reselect';

const selectShopDataFromStore = state => state.shopdata

export const selectShopData = createSelector(
    [selectShopDataFromStore],
    directory => directory.SHOP_DATA
)

export const selectCollectionsForPreview = createSelector(
    [selectShopData],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopData],
    collections => collections[collectionUrlParam]
)