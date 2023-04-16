enum ActionTypes {
  SEARCH_REPO = 'search_repo',
  SEARCH_REPO_SUCCESS = 'search_repo_success',
  SEARCH_REPO_ERROR = 'search_repo_error',
}

type Action =
  | SearchRepo
  | SearchRepoSuccess
  | SearchRepoError;

interface RepositoriesState {
  loading: Boolean;
  data: string[];
  error: string | null;
}

interface SearchRepo {
  type: ActionTypes.SEARCH_REPO;
}

interface SearchRepoSuccess {
  type: ActionTypes.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchRepoError {
  type: ActionTypes.SEARCH_REPO_ERROR;
  payload: string;
}

const reducer = (
  state: RepositoriesState,
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
