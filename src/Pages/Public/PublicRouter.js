import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout, Home, APropos, HomeDetails } from './index.js';

import Error from './404/PageError.js'

//PublicRouter nous permet de clean App Toutes les route seront géré ici après etre passé par Layout
// Et le resultat est renvoyé dans App

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/homeDetails" element={<HomeDetails />} />


                <Route path="*" element={<Error />} />{/*Renvoi vers la page error 404 si aucune route n'est trouvé */}
            </Route>


        </Routes>
    );
};

export default PublicRouter;