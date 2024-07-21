import { loadFooter, loadHeader, getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import House from "./House.mjs";

loadFooter();
loadHeader();

const house = getParam("house");
const dataSource = new ExternalServices();
const houseCharacters = new House(dataSource, house);

houseCharacters.init();