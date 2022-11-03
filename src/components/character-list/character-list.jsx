import './character-list.scss';
import { Component } from 'react';
import PropTypes from 'prop-types';
import MarvelServis from '../../services/marvel-service';
import AppError from '../app-error/app-error';
import AppSpinner from '../app-spinner/app-spinner';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isError: false,
      isLoading: true,
      isAddLoading: false,
      listOffset: 210,
      listEnded: false,
    };
    this.service = new MarvelServis();
  }

  onCharactersLoaded = (data) => {
    this.setState(({ characters, listOffset }) => ({
      characters: [...characters, ...data],
      isError: false,
      isLoading: false,
      isAddLoading: false,
      listOffset: listOffset + 9,
      listEnded: data.length < 9,
    }));
  };

  onCharactersLoading = () => {
    this.setState({
      isAddLoading: true,
    });
  };

  onCharactersError = () => {
    this.setState({
      isLoading: false,
    });
  };

  updateCharacters = (offset) => {
    this.onCharactersLoading();
    this.service
      .getCharacterList(offset)
      .then((res) => this.onCharactersLoaded(res))
      .catch(() => this.onCharactersError());
  };

  componentDidMount() {
    this.updateCharacters();
  }

  render() {
    const { characters, isLoading, isAddLoading, isError, listOffset, listEnded } = this.state;
    const { onChooseCharacter } = this.props;

    const error = isError ? <AppError message={'An error occurred while loading the characters...'} /> : null;

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
          {content}
        </ul>
        <button
          className="charater-list__button custom-button"
          style={{ display: listEnded ? 'none' : 'block' }}
          disabled={isAddLoading}
          data-is-add-loading={isAddLoading}
          onClick={() => this.updateCharacters(listOffset)}>
          {isAddLoading ? <AppSpinner /> : 'Load More'}
        </button>
      </div>
    );
  }
}

CharacterList.propTypes = {
  onChooseCharacter: PropTypes.func.isRequired,
};

export default CharacterList;
