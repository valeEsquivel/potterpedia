function drawCard(info) {
    let image = "";

    if (info.image === "") {
        if (info.gender === 'male') {
          image = "../images/wizard.jpg";
        } else {
          image = "../images/witch.jpg";
        }
      } else {
        image = info.image;
      }

    return `
        <div class="card-imageIC">
            <img src="${image}" alt="${info.name}" class="card-img-character">
        </div>
        <div class="card-body">
            <p class="card-text">House: ${info.house}</p>
            <p class="card-text">Date of Birth: ${info.dateOfBirth || '-'}</p>
            <p class="card-text">Patronus: ${info.patronus || '-'}</p>
            <p class="card-text">Ancestry: ${info.ancestry || '-'}</p>
            <p class="card-text">Eye Color: ${info.eyeColour || '-'}</p>
            <p class="card-text">Hair Color: ${info.hairColour || '-'}</p>
            <p class="card-text">Wand:
                <ul>
                    <li> Wood: ${info.wand.wood || '-'}</li>
                    <li> Core: ${info.wand.core || '-'}</li>
                    <li> Length: ${info.wand.length || '-'}</li>
                </ul>
            </p>
            <p class="card-text">Hogwarts Student: ${info.hogwartsStudent ? 'Yes' : 'No'}</p>
            <p class="card-text">Hogwarts Staff: ${info.hogwartsStaff ? 'Yes' : 'No'}</p>
            <p class="card-text">Alternate Names:
                <ul>
                    ${info.alternate_names.map((name) => `<li>${name}</li>`).join("")}
                </ul>
            </p>
            <p class="card-text">Actor: ${info.actor || '-'}</p>
        </div>
    `;

}

export default class Information {
    constructor(dataSource, characterID) {
      this.information = [];
      this.characterID = characterID;
      this.dataSource = dataSource;
    }
  
    async init() {
        this.information = await this.dataSource.getCharacter(this.characterID);
        this.replaceTitle();
  
      this.renderInformation("#personal-info");
    }
  
    renderInformation(selector) {
      const element = document.querySelector(selector);
      element.insertAdjacentHTML("afterBegin", drawCard(this.information[0]));
    }
  
    replaceTitle() {
      const title = document.querySelector("#character-name");
      title.textContent = this.information[0].name;
    }
  }