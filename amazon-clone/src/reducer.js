export const initialState = {
    basket: [{
        id:"3254354345",
                title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)",
                price: 598.99,
                rating: 5,
                image: "https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
    },
],
  user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);
function reducer(state, action) {
    switch(action.type) {
        case "SET_USER": 
            return {
                ...state,
                user: action.user
            }

        case 'Add_To_Basket':
            // logic for adding to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
            
        case 'REMOVE_FROM_BASKET':
            // logic for removing from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id == action.id)

            if (index >=0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    'Cannot remove product (id: $(action.id) as it is not in the basket');
            }
            return {...state, basket: newBasket };
        default:
            return state; 
    }
};

export default reducer;