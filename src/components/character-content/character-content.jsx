import { Component } from 'react';
import CharacterInfo from '../character-info/character-info';
import CharacterList from '../character-list/character-list';
import './character-content.scss';

class CharacterContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCaracter: null,
    };
  }

  chooseCharacter = (id) => {
    this.setState({ selectedCaracter: id });
  };

  render() {
    return (
      <section className="character-content">
        <div className="container">
          <div className="character-content__head">
            <h2 className="character-content__title">Choose your character</h2>
          </div>
          <div className="character-content__body">
            <CharacterList onChooseCharacter={this.chooseCharacter} />
            <CharacterInfo characterID={this.state.selectedCaracter} />
          </div>
        </div>
      </section>
    );
  }
}

export default CharacterContent;
