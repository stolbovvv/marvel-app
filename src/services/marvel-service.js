class MarvelServis {
  constructor() {
    this._apihost = 'https://gateway.marvel.com:443/v1/public';
    this._apikey = 'e3d5971519104048e242dfe93fbb9ab0';
    this._characfter_offset = 210;
  }

  getData = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    } else {
      return await res.json();
    }
  };

  _transformCharacter = (character) => {
    return {
      id: character.id,
      name: character.name,
      thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
      description: character.description,
      homepage: character.urls[0].url,
      wiki: character.urls[1].url,
      comics: character.comics.items,
    };
  };

  getCharacterList = async (offset = this._characfter_offset) => {
    const res = await this.getData(`${this._apihost}/characters?limit=9&offset=${offset}&apikey=${this._apikey}`);
    return res.data.results.map((item) => this._transformCharacter(item));
  };

  getCharacter = async (id) => {
    const res = await this.getData(`${this._apihost}/characters/${id}?apikey=${this._apikey}`);
    return this._transformCharacter(res.data.results[0]);
  };
}

export default MarvelServis;
