const initialState = {
  users: []
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD":
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    case "DELETE":
      return {
        ...state,
        users: state.users.filter((_, i) => i !== action.payload)
      };

    case "EDIT":
      return {
        ...state,
        users: state.users.map((el, i) =>
          i === action.payload.index
            ? { ...el, username: action.payload.value }
            : el
        )
      };

    default:
      return state;
  }
};