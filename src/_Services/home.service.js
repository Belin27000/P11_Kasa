//Ce service recupère les différentes data des logements du fichier json

import data from '../assets/data.json'

let getAllData = () => {
    return data
}

let getHome = (id) => {
    return data.get('/id')
}

export const homeService = {
    getAllData, getHome
}