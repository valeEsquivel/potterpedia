function drawCards(data) {
  let numberOfCharacters = data.length;
  let groups = Math.ceil(numberOfCharacters / 3);
  let cards = "";

  let image = "";

  for (let i = 0; i < groups; i++) {
    cards += `<div class="character-row">`;
    for (let j = 0; j < 3; j++) {
      let character = data[i * 3 + j];
      if (character) {
        if (character.image === "") {
          if (character.gender === "male") {
            image = "../images/wizard.jpg";
          } else {
            image = "../images/witch.jpg";
          }
        } else {
          image = character.image;
        }

        cards += `
        <div class="character-card col${j + 1}" id="${character.id}">
          <a href="/pages/information.html?character=${character.id}">
            <img src="${image}" alt="${character.name}" />
            <h3>${character.name}</h3>
          </a>
        </div>`;
      }
    }
    cards += `</div>`;
  }

  //   data.forEach((character) => {
  //     cards += `<div class="character-card" id="${character.id}">
  //                 <img src="${character.image}" alt="${character.name}" />
  //                 <h3>${character.name}</h3>
  //             </div>`;
  //   });

  return cards;
}

export default class House {
  constructor(dataSource, house) {
    this.characters = [];
    this.house = house;
    this.dataSource = dataSource;
  }

  async init() {
    this.replaceTitle();

    this.characters = await this.dataSource.getHouseCharacters(this.house);

    this.renderCharacters("#characters-list");
  }

  renderCharacters(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML("afterBegin", drawCards(this.characters));
  }

  replaceTitle() {
    const title = document.querySelector("#house-name");
    // first letter to uppercase
    this.house = this.house.charAt(0).toUpperCase() + this.house.slice(1);
    title.textContent = this.house;
  }
}
