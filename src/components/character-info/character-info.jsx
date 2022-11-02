import './character-info.scss';
import { Component } from 'react';
import MarvelServis from '../../services/marvel-service';
import AppError from '../app-error/app-error';
import AppSpinner from '../app-spinner/app-spinner';
import AppSceleton from '../app-sceleton/app-sceleton';

function CharacterInfoView({ data: { thumbnail, name, description, homepage, wiki, comics } }) {
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
      <div className="character-info__head">
        <div className="character-info__thumbnail">
          <img className="character-info__thumbnail-img" style={stylesThumb} src={thumbnail} alt="" />
        </div>
        <div className="character-info__bio">
          <p className="character-info__name">{name}</p>
          <a className="character-info__link custom-link" href={homepage}>
            <span>Go to</span> homepage
          </a>
          <a className="character-info__link custom-link" href={wiki}>
            <span>Go to</span> wiki
          </a>
        </div>
      </div>
      <div className="character-info__body">
        <p className="character-info__descr">{stringDescr}</p>
        <ul className="character-info__comics-list" style={comics.length === 0 ? { padding: '12px 16px' } : null}>
          {comics.length === 0 ? 'This is no comics with character' : null}
          {comics.map((item, i) => {
            if (i > 4) return null;

            return (
              <li className="character-info__comics-item" key={i}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

class CharacterInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
      isLoading: false,
      isError: false,
    };
    this.service = new MarvelServis();
  }

  onCharaterLoaded = (character) => {
    this.setState({
      character: character,
      isLoading: false,
    });
  };

  onCharaterLoading = () => {
    this.setState({
      isLoading: true,
    });
  };

  onCharacterError = () => {
    this.setState({
      isLoading: false,
      isError: true,
    });
  };

  updateCharacter = () => {
    const { characterID } = this.props;

    if (!characterID) return;

    this.onCharaterLoading();
    this.service
      .getCharacter(characterID)
      .then((res) => this.onCharaterLoaded(res))
      .catch(() => this.onCharacterError());
  };

  componentDidMount() {
    this.updateCharacter();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.characterID !== prevProps.characterID) {
      this.updateCharacter();
    }
  }

  render() {
    const { character, isLoading, isError } = this.state;

    const error = isError ? <AppError message={'An error occurred while loading the character...'} /> : null;
    const spinner = isLoading ? <AppSpinner /> : null;
    const contnet = !isLoading && !isError && character ? <CharacterInfoView data={character} /> : null;
    const sceleton = !isLoading && !isError && !character ? <AppSceleton /> : null;

    return (
      <div className="character-info">
        {error}
        {spinner}
        {contnet}
        {sceleton}
      </div>
    );
  }
}

export default CharacterInfo;
