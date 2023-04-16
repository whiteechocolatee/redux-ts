import { ActionTypes } from '../action-types';
import { Action } from '../action';

interface RepositoriesState {
  loading: Boolean;
  data: string[];
  error: string | null;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action,
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPO:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPO_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionTypes.SEARCH_REPO_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
