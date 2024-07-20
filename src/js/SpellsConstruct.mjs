function drawBodyTable(data) {
  let table = "";

  data.forEach((spell) => {
    table += `<tr>
        <td>${spell.name}</td>
        <td>${spell.description}</td>
        </tr>`;
  });

  return table;
}

export default class SpellsConstruct {
  constructor(dataSource) {
    this.spells = [];
    this.dataSource = dataSource;
  }

  async init() {
    this.spells = await this.dataSource.getSpells();

    this.renderProductDetails("#spells-body");
  }

  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
      "afterBegin",
      drawBodyTable(this.spells),
    );
  }
}
