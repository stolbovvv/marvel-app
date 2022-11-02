import './character-list.scss';
import { Component } from 'react';
import MarvelServis from '../../services/marvel-service';
import AppError from '../app-error/app-error';
import AppSpinner from '../app-spinner/app-spinner';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isLoading: true,
      isError: false,
      offset: 210,
    };
    this.service = new MarvelServis();
  }

  onCharactersLoaded = (data) => {
    this.setState(({ characters, offset }) => ({
      characters: [...characters, ...data],
      isLoading: false,
      offset: offset + 9,
    }));
  };

  onCharactersError = () => {
    this.setState({
      isLoading: false,
      isError: true,
    });
  };

  updateCharacters = () => {
    console.log();
    this.service
      .getCharacterList(9, this.state.offset)
      .then((res) => this.onCharactersLoaded(res))
      .catch(() => this.onCharactersError());
  };

  componentDidMount() {
    this.updateCharacters();
  }

  render() {
    const { characters, isLoading, isError } = this.state;
    const { onChooseCharacter } = this.props;

    const error = isError ? <AppError message={'An error occurred while loading the characters...'} /> : null;
    const spinner = isLoading ? <AppSpinner /> : null;

    let content = null;

    if (!isLoading && !isError) {
      content = characters.map(({ id, thumbnail, name }) => {
        let stylesThumb = null;

        if (/image_not_available/.test(thumbnail)) {
          stylesThumb = { objectPosition: 'left bottom' };
        } else {
          stylesThumb = { objectPosition: 'center' };
        }

        return (
          <li className="charater-card" key={id} onClick={() => onChooseCharacter(id)}>
            <div className="charater-card__tumbnail">
              <img className="charater-card__tumbnail-img" style={stylesThumb} src={thumbnail} alt="" />
            </div>
            <div className="charater-card__body">
              <p className="charater-card__name">{name}</p>
            </div>
          </li>
        );
      });
    }

    return (
      <div className="charater-list">
        <ul className="charater-list__body">
          {error}
          {spinner}
          {content}
        </ul>
        <button className="charater-list__button custom-button" onClick={() => this.updateCharacters()}>
          Load More
        </button>
      </div>
    );
  }
}

export default CharacterList;
