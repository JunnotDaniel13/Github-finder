import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);
  if (alert) {
    return (
      <div className="absolute top-24 right-4 bg-red-500 px-4 py-2 rounded-md shadow-md transition">
        <h1 className="text-white">{alert.msg}</h1>
      </div>
    );
  }

  return null;
}

export default Alert;
