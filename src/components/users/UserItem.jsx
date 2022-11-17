import { Link } from 'react-router-dom';

export default function UserItem({ user: { login, avatar_url, id } }) {
  return (
    <div className="card shadow-xl compact side bg-base-300 ">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="Profile Picture" />
          </div>
        </div>
        <div>
          <Link to={`/user/${login}`}>
            <h2 className="card-title">{login}</h2>
          </Link>
          <Link
            to={`/user/${login}`}
            className="text-base-content text-opacity-40"
          >
            Visite Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
