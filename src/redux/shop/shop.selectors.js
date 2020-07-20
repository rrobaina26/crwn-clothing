import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForOverview = createSelector(
  [selectCollections],
  (collections) =>
    collections
      ? Object.keys(collections).map((index) => collections[index])
      : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsLoading = createSelector([selectShop], (shop) => shop.isLoading);
