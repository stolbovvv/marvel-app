import './app-sceleton.scss';

const AppSceleton = () => {
  return (
    <div className="app-skeleton">
      <p className="app-skeleton__text">Please select a character to see information</p>
      <div className="pulse app-skeleton__header">
        <div className="pulse app-skeleton__circle"></div>
        <div className="app-skeleton__name">
          <div className="pulse app-skeleton__mini"></div>
          <div className="pulse app-skeleton__mini"></div>
        </div>
      </div>
      <div className="pulse app-skeleton__block"></div>
      <div className="pulse app-skeleton__block"></div>
      <div className="pulse app-skeleton__block"></div>
      <div className="pulse app-skeleton__block"></div>
      <div className="pulse app-skeleton__block"></div>
    </div>
  );
};

export default AppSceleton;
