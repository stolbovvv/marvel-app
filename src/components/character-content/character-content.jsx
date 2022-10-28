import CharacterInfo from '../character-info/character-info';
import CharacterList from '../character-list/character-list';
import './character-content.scss';

function CharacterContent() {
  return (
    <section className="character-content">
      <div className="container">
        <div className="character-content__head">
          <h2 className="character-content__title">Choose your character</h2>
        </div>
        <div className="character-content__body">
          <CharacterList />
          <CharacterInfo />
        </div>
      </div>
    </section>
  );
}

export default CharacterContent;
