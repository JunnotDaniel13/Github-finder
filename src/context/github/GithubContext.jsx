import { createContext, useReducer } from 'react';

const GithubContext = createContext();

import githubReducer from './githubReducer';

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  async function searchUsers(text) {
    dispatch({ type: 'SET_LOADING' });
    const params = new URLSearchParams({ q: text });

    const response = await fetch(
      `https://api.github.com/search/users?${params}`
    );

    if(response.status === 404) {
      return (window.location = '/notfound');
    }


    const { items } = await response.json();

    dispatch({ type: 'GET_USERS', payload: items });
  }

  async function getUser(username) {
    dispatch({ type: 'SET_LOADING' });

    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.status === 404) {
      return (window.location = '/notfound');
    }

    const data = await response.json();

    dispatch({ type: 'GET_USER', payload: data });
  }

  async function getUserRepos(username) {
    dispatch({ type: 'SET_LOADING' });

    const params = new URLSearchParams({ sort: 'created', per_page: 10 });
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?${params}`
    );

    if (response.status === 404) {
      return (window.location = '/notfound');
    }

    const data = await response.json();

    dispatch({ type: 'GET_USER_REPOS', payload: data });
  }

  const clearUsers = () => {
    dispatch({ type: 'CLEAR_USERS' });
  };

  const context = {
    users: state.users,
    user: state.user,
    repos: state.repos,
    isLoading: state.isLoading,
    getUserRepos,
    searchUsers,
    clearUsers,
    getUser,
  };

  return (
    <GithubContext.Provider value={context}>{children}</GithubContext.Provider>
  );
};

export default GithubContext;
