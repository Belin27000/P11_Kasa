//Ce service recupère les différentes data des logements du fichier json

import data from '../assets/data.json'

let getAllData = () => {
    return data
}

//recois en parametre l'id du logement selectionné puis retourne l'objet contenant toutes les infos
// pour gerer l'affichage
let getHome = (hid) => {

    const homeFind = (hid, data) => data.find(val => val.id === hid);

    let homeClick = homeFind(hid, data);
    return (homeClick)
}

export const homeService = {
    getAllData, getHome
}