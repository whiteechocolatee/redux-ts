import React, { useState } from 'react';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');

  const onSubmit = (
    event: React.FormEvent<HTMLElement>,
  ) => {};

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button>Search</button>
    </form>
  ); 
};

export default RepoList;
