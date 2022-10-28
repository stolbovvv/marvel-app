import './app-error.scss';
import imgsrc from './app-error.svg';

function AppError({ message }) {
  return (
    <div className="app-error">
      <img className="app-error__img" src={imgsrc} alt="Error" />
      <span className="app-error__message">{message}</span>
    </div>
  );
}

export default AppError;
