import { createSelector } from 'reselect';

const selectShopDataFromStore = state => state.shopdata

export const selectShopData = createSelector(
    [selectShopDataFromStore],
    directory => directory.SHOP_DATA
)

export const selectCollectionsForPreview = createSelector(
    [selectShopData],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopData],
    collections => collections ? collections[collectionUrlParam] : null
)

export const selectIsCollectionFecthing = createSelector(
    [selectShopDataFromStore],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShopDataFromStore],
    shop => !(!!(shop.SHOP_DATA))
);