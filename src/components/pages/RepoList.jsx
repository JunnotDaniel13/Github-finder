import { FaEye, FaInfo, FaLink, FaStar } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-2xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos?.map((repo) => {
          return (
            <div
              key={repo.id}
              className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900 "
            >
              <div className="card-body ">
                <h3 className="mb-2 text-xl text-white font-semibold">
                  <a href={repo.html_url}>
                    <FaLink className="inline mr-1 text-white" /> {repo.name}
                  </a>
                </h3>
                {repo.description ? (
                  <p className="mb-3 text-white">{repo.description}</p>
                ) : null}
                <div>
                  <div className="mr-2 badge badge-info badge-lg">
                    <FaEye className="mr-2" /> {repo.watchers_count}
                  </div>
                  <div className="mr-2 badge badge-success badge-lg">
                    <FaStar className="mr-2" /> {repo.stargazers_count}
                  </div>
                  <div className="mr-2 badge badge-error badge-lg">
                    <FaInfo className="mr-2" /> {repo.open_issues}
                  </div>
                  <div className="mr-2 badge badge-warning badge-lg">
                    <GoRepoForked className="mr-2" /> {repo.forks}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RepoList;
