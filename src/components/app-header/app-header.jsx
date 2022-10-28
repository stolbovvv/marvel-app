import './app-header.scss';

function AppHeader() {
  return (
    <header className="app-header">
      <div className="container">
        <nav className="app-header-navbar">
          <a className="app-header-navbar__logo" href="./">
            Marvel <span>App</span>
          </a>

          <ul className="app-header-navbar__menu">
            <li className="app-header-navbar__menu-item">
              <a className="app-header-navbar__link" href="./">
                Characters
              </a>
            </li>
            <li className="app-header-navbar__menu-item">
              <a className="app-header-navbar__link" href="./">
                Comics
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
