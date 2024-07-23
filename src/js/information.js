import { loadFooter, loadHeader, getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import Information from "./Information.mjs";

loadFooter();
loadHeader();

const character = getParam("character");
const dataSource = new ExternalServices();
const info = new Information(dataSource, character);

info.init();