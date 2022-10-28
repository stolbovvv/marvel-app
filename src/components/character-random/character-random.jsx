import './character-random.scss';
import { Component } from 'react';
import MarvelServis from '../../services/marvel-service';
import AppSpinner from '../app-spinner/app-spinner';
import AppError from '../app-error/app-error';

function CharacterView({ character }) {
  const { thumbnail, name, description, homepage, wiki } = character;

  let stylesThumb = null;
  let stringDescr = null;

  if (/image_not_available/.test(thumbnail)) {
    stylesThumb = { objectPosition: 'left bottom' };
  } else {
    stylesThumb = { objectPosition: 'center' };
  }

  if (!description) {
    stringDescr = 'Description not found';
  } else if (description.length > 400) {
    stringDescr = description.substr(0, 400).trim() + '...';
  } else {
    stringDescr = description;
  }

  return (
    <>
      <div className="character-random__thumbnail">
        <img className="character-random__thumbnail-img" style={stylesThumb} src={thumbnail} alt="Random character" />
      </div>
      <div className="character-random__information">
        <h3 className="character-random__name">{name}</h3>
        <p className="character-random__description">{stringDescr}</p>
        <div className="character-random__links">
          <a className="custom-link" href={homepage}>
            <span>Go to</span> homepage
          </a>
          <a className="custom-link" href={wiki}>
            <span>Go to</span> wiki
          </a>
        </div>
      </div>
    </>
  );
}

class CharacterRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      isLoading: true,
      isError: false,
    };
    this.service = new MarvelServis();
    this.upadeteChracter();
  }

  onCharaterLoaded = (character) => {
    this.setState({
      character: character,
      isLoading: false,
    });
  };

  onCharacterError = () => {
    this.setState({
      isLoading: false,
      isError: true,
    });
  };

  upadeteChracter = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.service
      .getCharacter(id)
      .then((res) => this.onCharaterLoaded(res))
      .catch(() => this.onCharacterError());
  };

  render() {
    const { character, isLoading, isError } = this.state;

    const error = isError ? <AppError message={'An error occurred while loading the character...'} /> : null;
    const spinner = isLoading ? <AppSpinner /> : null;
    const content = !isError && !isLoading ? <CharacterView character={character} /> : null;

    return (
      <section className="character-random">
        <div className="container">
          <div className="character-random__head">
            <h2 className="character-random__title">Random character for today!</h2>
            <p className="character-random__question">Do you want to get to know him better?</p>
            <button className="character-random__button custom-button">Try it</button>
          </div>
          <div className="character-random__body">
            {error}
            {spinner}
            {content}
          </div>
        </div>
      </section>
    );
  }
}

export default CharacterRandom;
