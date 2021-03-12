import { BUY_BOOK } from "./BookType";

const initialState = {
  numberOfBooks: 100,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - action.payload,
      };
    default:
      return state;
  }
};


