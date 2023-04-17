import React from 'react';
import "./menu.css";
import Card from './card';
import data from '../data';


const Menu = () => {
    return (
        <div>
            <div className="whole-page">
                <div className="heading">
                    <h2>MENU-CARD</h2>
                    <hr />
                </div>
                <div className="menu-box">
                    <Card name="Chocolate 1 kg" desc = "Lotus, rose , caramel, hazelnut, peanut butter, Halawa, berry compote, tiramissu & brownies " img ={require('./images/Platform Crafter Menu/Chocolate Profiterole.webp')}/>
                    <Card name="White Chocolate Pistachio Profiterole -Box of 24" desc = "Profiterole filled with white chocolatre & pistachio Paste" img ={require('./images/Platform Crafter Menu/Classic Fatayer.webp')}/>
                    <Card name="Mini chicken Sando Sandwich -6 pcs box of 6 " desc = "Toast bread stuffed with chicken & sundried tomato, pesto & parmesiano cheese " img ={require('./images/Platform Crafter Menu/Mini chicken Sando Sand.webp')}/>

                    <Card name="Croissant Muffin - Box of 12" desc = "A mix of Croissant and Muffins ( custard Filllings with blueberries ans strawberries)" img ={require('./images/Platform Crafter Menu/Croissant Muffins.webp')}/>
                    <Card name="Mini chicken Sando Sandwich - 12 pcs box of 12" desc = "Toast bread stuffed with chicken & sundried tomato, pesto & parmesiano cheese" img ={require('./images/Platform Crafter Menu/Mini Mix sandwich.webp')}/>
                    <Card name="Penne pasta arabiatta" desc = "Penne Pasta served with Red Sause and Parmesan Cheese " img ={require('./images/Platform Crafter Menu/penne pasta arabiata.jpg')}/>
                    <Card name="Vegeterian Pasta" desc = "Marrow and eggplant with mixed Capsicum topped with black olives, Mozarella cheese " img ={require('./images/Platform Crafter Menu/vegetable pasta with breaded chicken.jpg')}/>
                    <Card name="Three cheese" desc = "Mozarella, white cheddar and yellow cheddar cheese served with black olive pest" img ={require('./images/Platform Crafter Menu/Tiramisu Profiterole.webp')}/>
                </div>
            </div>
        </div>
    )
}

export default Menu;

