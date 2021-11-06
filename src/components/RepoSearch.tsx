/** @format */
import { useState } from 'react';
import { useAppDispatch } from '../hooks/index';
import { fetchRepoData } from '../store/action/repo-action';

const RepoSearch: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchRepoData(term));
    setTerm('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepoSearch;
