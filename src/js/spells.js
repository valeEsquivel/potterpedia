import { loadFooter, loadHeader } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import SpellsConstruct from "./SpellsConstruct.mjs";

loadFooter();
loadHeader();

const dataSource = new ExternalServices();
const spellsConstruct = new SpellsConstruct(dataSource);

spellsConstruct.init();