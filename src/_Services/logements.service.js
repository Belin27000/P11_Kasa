//Ce service recupère les différentes data des logements du fichier json

import data from '../assets/Api/data.json'

let getAllData = () => {
    return data;
}

//recois en parametre l'id du logement selectionné puis retourne l'objet contenant toutes les infos
// pour gerer l'affichage
let getHome = async (hid) => {
    const OneLogement = await data.find(logement => logement.id === hid);
    return OneLogement;
}

export const homeService = {
    getAllData,
    getHome
}

export default homeService