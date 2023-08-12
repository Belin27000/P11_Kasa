import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Error, Home, APropos, HomeDetails } from './index.js';

import Layout from '../../Layouts/Layout.js';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/homeDetails/:hid" element={<HomeDetails />} />

                <Route path="*" element={<Error />} />
            </Route>


        </Routes>
    );
};

export default PublicRouter;