import './character-random.scss';
import thumbnail from '../../assets/images/character-thumbnail.jpg';

function CharacterRandom() {
  return (
    <section className="character-random">
      <div className="container">
        <div className="character-random__head">
          <h2 className="character-random__title">Random character for today!</h2>
          <p className="character-random__question">Do you want to get to know him better?</p>
          <button className="character-random__button custom-button">Try it</button>
        </div>

        <div className="character-random__body">
          <div className="character-random__thumbnail">
            <img className="character-random__thumbnail-img" src={thumbnail} alt="" />
          </div>
          <div className="character-random__information">
            <h3 className="character-random__name">Doctor Strange</h3>
            <p className="character-random__description">
              Marvel Studios' "Doctor Strange in the Multiverse of Madness"—a thrilling ride through the Multiverse with
              Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. "Doctor Strange in the
              Multiverse of Madness" opens in U.S. theaters on May 6, 2022.
            </p>
            <div className="character-random__links">
              <a className="custom-link" href="./">
                <span>Go to</span> homepage
              </a>
              <a className="custom-link" href="./">
                <span>Go to</span> wiki
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharacterRandom;
