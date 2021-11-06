/** @format */

import RepoList from './RepoList';
import RepoSearch from './RepoSearch';

function App() {
  return (
    <div>
      <h1>Search For a NPM Package</h1>
      <RepoSearch />
      <RepoList />
    </div>
  );
}

export default App;
