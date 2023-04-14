import { ADATLISTA } from "./adat.js";
import { rendez } from "./rendezes.js";
import {Delete} from "./torol.js";
import {AddNewItem} from "./Ujhozzaadasa.js";
import {megjelenit} from "./megjelenit.js";
import {EditItem } from"./modositas.js";
import { Search } from "./kereses.js";
let lista2 =ADATLISTA;
megjelenit(ADATLISTA);
rendez(lista2);
Delete();
AddNewItem(ADATLISTA);
EditItem(ADATLISTA);
Search(ADATLISTA);










    
