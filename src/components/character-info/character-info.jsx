import './character-info.scss';
import thumbnail from '../../assets/images/character-thumbnail.jpg';

function CharacterInfo() {
  return (
    <div className="character-info">
      <div className="character-info__head">
        <div className="character-info__thumbnail">
          <img className="character-info__thumbnail-img" src={thumbnail} alt="" />
        </div>
        <div className="character-info__bio">
          <p className="character-info__name">Doctor Strange</p>
          <a className="character-info__link custom-link" href="./">
            <span>Go to</span> homepage
          </a>
          <a className="character-info__link custom-link" href="./">
            <span>Go to</span> wiki
          </a>
        </div>
      </div>
      <div className="character-info__body">
        <p className="character-info__descr">
          Marvel Studios' "Doctor Strange in the Multiverse of Madness"—a thrilling ride through the Multiverse with
          Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. "Doctor Strange in the
          Multiverse of Madness" opens in U.S. theaters on May 6, 2022.
        </p>
        <ul className="character-info__comics-list">
          <li className="character-info__comics-item">All-Winners Squad: Band of Heroes (2011) #3</li>
          <li className="character-info__comics-item">Alpha Flight (1983) #50</li>
          <li className="character-info__comics-item">Amazing Spider-Man (1999) #503</li>
          <li className="character-info__comics-item">Amazing Spider-Man (1999) #504</li>
          <li className="character-info__comics-item">
            AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
          </li>
          <li className="character-info__comics-item">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
          <li className="character-info__comics-item">
            Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
          </li>
          <li className="character-info__comics-item">Vengeance (2011) #4</li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterInfo;
