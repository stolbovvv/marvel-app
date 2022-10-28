import './character-list.scss';
import thumbnail from '../../assets/images/character-thumbnail.jpg';

function CharacterList() {
  return (
    <div className="charater-list">
      <ul className="charater-list__body">
        <li className="charater-card">
          <div className="charater-card__tumbnail">
            <img className="charater-card__tumbnail-img" src={thumbnail} alt="" />
          </div>
          <div className="charater-card__body">
            <p className="charater-card__name">Doctor Strange</p>
          </div>
        </li>
        <li className="charater-card">
          <div className="charater-card__tumbnail">
            <img className="charater-card__tumbnail-img" src={thumbnail} alt="" />
          </div>
          <div className="charater-card__body">
            <p className="charater-card__name">Doctor Strange</p>
          </div>
        </li>
        <li className="charater-card">
          <div className="charater-card__tumbnail">
            <img className="charater-card__tumbnail-img" src={thumbnail} alt="" />
          </div>
          <div className="charater-card__body">
            <p className="charater-card__name">Doctor Strange</p>
          </div>
        </li>
        <li className="charater-card">
          <div className="charater-card__tumbnail">
            <img className="charater-card__tumbnail-img" src={thumbnail} alt="" />
          </div>
          <div className="charater-card__body">
            <p className="charater-card__name">Doctor Strange</p>
          </div>
        </li>
        <li className="charater-card">
          <div className="charater-card__tumbnail">
            <img className="charater-card__tumbnail-img" src={thumbnail} alt="" />
          </div>
          <div className="charater-card__body">
            <p className="charater-card__name">Doctor Strange</p>
          </div>
        </li>
        <li className="charater-card">
          <div className="charater-card__tumbnail">
            <img className="charater-card__tumbnail-img" src={thumbnail} alt="" />
          </div>
          <div className="charater-card__body">
            <p className="charater-card__name">Doctor Strange</p>
          </div>
        </li>
        <li className="charater-card">
          <div className="charater-card__tumbnail">
            <img className="charater-card__tumbnail-img" src={thumbnail} alt="" />
          </div>
          <div className="charater-card__body">
            <p className="charater-card__name">Doctor Strange</p>
          </div>
        </li>
        <li className="charater-card">
          <div className="charater-card__tumbnail">
            <img className="charater-card__tumbnail-img" src={thumbnail} alt="" />
          </div>
          <div className="charater-card__body">
            <p className="charater-card__name">Doctor Strange</p>
          </div>
        </li>
        <li className="charater-card">
          <div className="charater-card__tumbnail">
            <img className="charater-card__tumbnail-img" src={thumbnail} alt="" />
          </div>
          <div className="charater-card__body">
            <p className="charater-card__name">Doctor Strange</p>
          </div>
        </li>
      </ul>
      <button className="charater-list__button custom-button">Load More</button>
    </div>
  );
}

export default CharacterList;
