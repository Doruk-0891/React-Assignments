import React from "react";
import ReactDOM  from "react-dom/client";
import { HeaderComponent } from './components/Header/Header';
import { Restaurants } from './components/Restaurants/Restaurants';

const AppLayout = () => {
    return (
        <>
            <HeaderComponent />
            <Restaurants />
        </>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);