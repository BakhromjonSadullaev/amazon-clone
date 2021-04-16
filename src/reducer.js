export const initialState = {
  basket: [],
  user: null,
  category: "",
  wishlist: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product ${action.id}`);
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "REMOVE_FROM_WISHLIST":
      const wishIndex = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === action.id
      );

      let newWishlist = [...state.wishlist];

      if (wishIndex >= 0) {
        newWishlist.splice(wishIndex, 1);
      } else {
        console.warn(`Cant remove product ${action.id}`);
      }

      return {
        ...state,
        wishlist: newWishlist,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.wished],
      };

    default:
      return state;
  }
};

export default reducer;
