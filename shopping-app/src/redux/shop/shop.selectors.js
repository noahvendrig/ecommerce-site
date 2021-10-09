import { createSelector } from 'reselect';

import memoize from 'lodash.memoize';

export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections],
        collections => 
            collections[collectionUrlParam]
    )
);

const selectShop = state => state.shop;
 
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);