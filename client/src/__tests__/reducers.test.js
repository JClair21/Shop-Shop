//import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

//import our reducer
import { reducer } from '../utils/reducers';

//create a sample of what our global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
};

Test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });
    })

    test('UPDATE_PRODUCTS', () => {
        let newState = reducer(initialState, {
            type: UPDATE_PRODUCTS,
        });
    })
