import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUsers, FaUserFriends, FaCode, FaStore } from 'react-icons/fa';

import Spinner from '../layout/Spinner';
import RepoList from './RepoList';

import GithubContext from '../../context/github/GithubContext';

function User() {
  const { getUser, getUserRepos, repos, user, isLoading } =
    useContext(GithubContext);

  const { username } = useParams();

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(username);
    getUserRepos(username);
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className="w-full mx-auto lg:w-12/10">
      <Link to={'/'} className="mb-4">
        Go back to search
      </Link>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-6">
        <div className="col-span-1">
          <div className="relative rounded-4xl shadow-sm w-full h-full">
            <figure className="opacity-[.6] bg-green-300 w-full h-full">
              <img src={avatar_url} alt="" />
            </figure>
            <div className="absolute bottom-4 left-4 items-center justify-end">
              <h2 className="card-title text-white">{name}</h2>
              <p className="text-white">{login}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-4">
            <h1 className="text-3xl mb-4 card-title">
              {name} <div className="badge badge-success mx-2">{type}</div>
              {hireable ? (
                <div className="badge badge-info mx-2">hireable</div>
              ) : null}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 card-actions">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="capitalize btn btn-outline"
              >
                View Github profile
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="col-span-1">
              {location ? (
                <div className="stat p-0">
                  <div className="stat-title">Location</div>
                  <div className="stat-value text-lg">{location}</div>
                </div>
              ) : null}
            </div>

            <div className="col-span-1">
              {blog ? (
                <div className="stat p-0">
                  <div className="stat-title pr-4 capitalize">website</div>
                  <div className="stat-value pr-4 text-lg">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="col-span-1">
              {twitter_username ? (
                <div className="stat p-0">
                  <div className="stat-title pr-4 capitalize">Twitter</div>
                  <div className="stat-value pr-4 text-lg">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-100 w-full">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl md:text-xl" />
          </div>
          <div className="stat-title pr-4 capitalize">followers</div>
          <div className="stat-value pr-4 capitalize">{followers}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl md:text-xl" />
          </div>
          <div className="stat-title pr-4 capitalize">following</div>
          <div className="stat-value pr-4 capitalize">{following}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCode className="text-3xl md:text-xl" />
          </div>
          <div className="stat-title pr-4 capitalize">public repos</div>
          <div className="stat-value pr-4 capitalize">{public_repos}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaStore className="text-3xl md:text-xl" />
          </div>
          <div className="stat-title pr-4 capitalize">public gists</div>
          <div className="stat-value pr-4 capitalize">{public_gists}</div>
        </div>
      </div>
      <RepoList repos={repos} />
    </div>
  );
}

export default User;
