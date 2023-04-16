import { ActionTypes } from '../action-types';

export type Action =
  | SearchRepo
  | SearchRepoSuccess
  | SearchRepoError;

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
