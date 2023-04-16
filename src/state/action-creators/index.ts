import axios from 'axios';
import { ActionTypes } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../action';

const searchRepositories = (term: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPO,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        },
      );

      let names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionTypes.SEARCH_REPO_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypes.SEARCH_REPO_ERROR,
        payload: err.message,
      });
    }
  };
};
