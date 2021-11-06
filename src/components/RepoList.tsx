/** @format */
import { useAppSelector } from '../hooks/index';
import { RootState } from '../store';

const RepoList: React.FC = () => {
  const repoList = useAppSelector((state: RootState) => state.repo.data);
  const isLoading = useAppSelector((state: RootState) => state.repo.isLoading);
  const error = useAppSelector((state: RootState) => state.repo.error);

  return (
    <div>
      {!isLoading && (
        <ul>
          {repoList.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default RepoList;
