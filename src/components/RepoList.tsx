import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories,
  );

  const onSubmit = (
    event: React.FormEvent<HTMLElement>,
  ) => {
    event.preventDefault();

    dispatch(
      actionCreators.searchRepositories(term) as any,
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h2>network error</h2>}
      {loading && <h1>loading...</h1>}
      {!error && !loading && (
        <ul>
          {data.map((names) => (
            <li key={names}>{names}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepoList;
