/** @format */

import { getRepo, setLoading, setError } from '../slice/repo-slice';
import axios from 'axios';
import { AppDispatch } from '../index';

export const fetchRepoData = (term: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading());
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((item: any) => {
        return item.package.name;
      });
      return names;
    };
    try {
      const repoNames = await fetchData();
      console.log(repoNames);

      dispatch(getRepo(repoNames));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading());
  };
};
