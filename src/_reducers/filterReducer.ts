interface FilterState {
  searchTerm: string;
  typeFilter: string[];
  generationFilter: number;
}

interface FilterAction {
  type: string;
  payload: any;
}

export const initialState: FilterState = {
  searchTerm: "",
  typeFilter: [],
  generationFilter: 1,
};

const filterReducer = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_TYPE_FILTER":
      return {
        ...state,
        typeFilter: action.payload,
      };
    case "SET_GENERATION_FILTER":
      return {
        ...state,
        generationFilter: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
