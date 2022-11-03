import './app.scss';
import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import CharacterRandom from '../character-random/character-random';
import CharacterContent from '../character-content/character-content';
import ErrorBoundary from '../error-boundary/error-boundary';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main className="app-main">
        <section className="app-masthead">
          <div className="container">
            <div className="app-masthead__inner">
              <h1 className="app-masthead__title">MARVEL CHARACTERS</h1>
              <p className="app-masthead__description">
                Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!
              </p>
            </div>
          </div>
        </section>

        <ErrorBoundary>
          <CharacterRandom />
        </ErrorBoundary>
        <CharacterContent />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;

