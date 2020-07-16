import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForOverview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((index) => collections[index])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
