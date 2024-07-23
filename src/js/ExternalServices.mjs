const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  let response = res.json();
  if (res.ok) {
    return response;
  } else {
    throw { name: "servicesError", message: response };
  }
}

export default class ExternalServices {
  constructor() {}

  async getSpells() {
    const response = await fetch(`${baseURL}spells`);
    const data = await convertToJson(response);
    return data;
  }

  async getHouseCharacters(house) {
    const response = await fetch(`${baseURL}characters/house/${house}`);
    const data = await convertToJson(response);

    for (const i in data) {
      data[i].ID_C = i;
    }

    return data;
  }

  async getCharacter(characterID) {
    const response = await fetch(`${baseURL}character/${characterID}`);
    const data = await convertToJson(response);
    return data;
  }
}
