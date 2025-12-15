// contexts/app-context.jsx
'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';
import { products } from '@/data/products';

// Initial state
const initialState = {
  cart: [],
  wishlist: [],
  searchQuery: '',
  filteredProducts: products,
  user: null,
  isCartOpen: false,
  isWishlistOpen: false,
  isSearchOpen: false,
};

// Action types
const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY: 'UPDATE_CART_QUANTITY',
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  FILTER_PRODUCTS: 'FILTER_PRODUCTS',
  SET_USER: 'SET_USER',
  TOGGLE_CART: 'TOGGLE_CART',
  TOGGLE_WISHLIST: 'TOGGLE_WISHLIST',
  TOGGLE_SEARCH: 'TOGGLE_SEARCH',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_FROM_LOCALSTORAGE: 'LOAD_FROM_LOCALSTORAGE',
};

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      const existingCartItem = state.cart.find(item => item.id === action.payload.id);
      
      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
        };
      }
      
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: action.payload.quantity || 1 }],
      };

    case ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case ACTION_TYPES.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case ACTION_TYPES.ADD_TO_WISHLIST:
      if (state.wishlist.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case ACTION_TYPES.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
      };

    case ACTION_TYPES.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case ACTION_TYPES.FILTER_PRODUCTS:
      const query = action.payload.toLowerCase();
      if (!query) {
        return {
          ...state,
          filteredProducts: products,
        };
      }
      
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.some(desc => desc.toLowerCase().includes(query))
      );
      
      return {
        ...state,
        filteredProducts: filtered,
      };

    case ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case ACTION_TYPES.TOGGLE_WISHLIST:
      return {
        ...state,
        isWishlistOpen: !state.isWishlistOpen,
      };

    case ACTION_TYPES.TOGGLE_SEARCH:
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen,
      };

    case ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case ACTION_TYPES.LOAD_FROM_LOCALSTORAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

// Create context
const AppContext = createContext();

// Provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('app-state');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        dispatch({
          type: ACTION_TYPES.LOAD_FROM_LOCALSTORAGE,
          payload: {
            cart: parsedState.cart || [],
            wishlist: parsedState.wishlist || [],
            user: parsedState.user || null,
          },
        });
      } catch (error) {
        console.error('Error loading state from localStorage:', error);
      }
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    const stateToSave = {
      cart: state.cart,
      wishlist: state.wishlist,
      user: state.user,
    };
    localStorage.setItem('app-state', JSON.stringify(stateToSave));
  }, [state.cart, state.wishlist, state.user]);

  // Actions
  const actions = {
    addToCart: (product, quantity = 1) => {
      dispatch({
        type: ACTION_TYPES.ADD_TO_CART,
        payload: { ...product, quantity },
      });
    },

    removeFromCart: (productId) => {
      dispatch({
        type: ACTION_TYPES.REMOVE_FROM_CART,
        payload: productId,
      });
    },

    updateCartQuantity: (productId, quantity) => {
      if (quantity < 1) {
        actions.removeFromCart(productId);
        return;
      }
      dispatch({
        type: ACTION_TYPES.UPDATE_CART_QUANTITY,
        payload: { id: productId, quantity },
      });
    },

    addToWishlist: (product) => {
      dispatch({
        type: ACTION_TYPES.ADD_TO_WISHLIST,
        payload: product,
      });
    },

    removeFromWishlist: (productId) => {
      dispatch({
        type: ACTION_TYPES.REMOVE_FROM_WISHLIST,
        payload: productId,
      });
    },

    setSearchQuery: (query) => {
      dispatch({
        type: ACTION_TYPES.SET_SEARCH_QUERY,
        payload: query,
      });
      dispatch({
        type: ACTION_TYPES.FILTER_PRODUCTS,
        payload: query,
      });
    },

    toggleCart: () => {
      dispatch({ type: ACTION_TYPES.TOGGLE_CART });
    },

    toggleWishlist: () => {
      dispatch({ type: ACTION_TYPES.TOGGLE_WISHLIST });
    },

    toggleSearch: () => {
      dispatch({ type: ACTION_TYPES.TOGGLE_SEARCH });
    },

    clearCart: () => {
      dispatch({ type: ACTION_TYPES.CLEAR_CART });
    },

    setUser: (user) => {
      dispatch({
        type: ACTION_TYPES.SET_USER,
        payload: user,
      });
    },
  };

  // Computed values
  const cartTotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = state.cart.reduce((count, item) => count + item.quantity, 0);
  const wishlistCount = state.wishlist.length;
  const isInWishlist = (productId) => state.wishlist.some(item => item.id === productId);
  const isInCart = (productId) => state.cart.some(item => item.id === productId);

  const value = {
    ...state,
    ...actions,
    cartTotal,
    cartItemsCount,
    wishlistCount,
    isInWishlist,
    isInCart,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}