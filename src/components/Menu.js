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
                    <Card name="Banana milkshake" desc = "loremfbgibgoeo e uogwpweipgpeb pwebupge pew  bweuwepwerbuwbpwebobunipwerpwe rwebuw wp uownpwen rwep pwbipw " img ={require('./images/item-8.jpeg')}/>
                    <Card name="Banana milkshake" desc = "loremfbgibgoeo e uogwpweipgpeb pwebupge pew  bweuwepwerbuwbpwebobunipwerpwe rwebuw wp uownpwen rwep pwbipw " img ={require('./images/item-2.jpeg')}/>
                    <Card name="Banana milkshake" desc = "loremfbgibgoeo e uogwpweipgpeb pwebupge pew  bweuwepwerbuwbpwebobunipwerpwe rwebuw wp uownpwen rwep pwbipw " img ={require('./images/item-5.jpeg')}/>

                    <Card name="Banana milkshake" desc = "loremfbgibgoeo e uogwpweipgpeb pwebupge pew  bweuwepwerbuwbpwebobunipwerpwe rwebuw wp uownpwen rwep pwbipw " img ={require('./images/item-7.jpeg')}/>
                    <Card name="Banana milkshake" desc = "loremfbgibgoeo e uogwpweipgpeb pwebupge pew  bweuwepwerbuwbpwebobunipwerpwe rwebuw wp uownpwen rwep pwbipw " img ={require('./images/item-9.jpeg')}/>
                    <Card name="Banana milkshake" desc = "loremfbgibgoeo e uogwpweipgpeb pwebupge pew  bweuwepwerbuwbpwebobunipwerpwe rwebuw wp uownpwen rwep pwbipw " img ={require('./images/item-3.jpeg')}/>
                    <Card name="Banana milkshake" desc = "loremfbgibgoeo e uogwpweipgpeb pwebupge pew  bweuwepwerbuwbpwebobunipwerpwe rwebuw wp uownpwen rwep pwbipw " img ={require('./images/item-1.jpeg')}/>
                    <Card name="Banana milkshake" desc = "loremfbgibgoeo e uogwpweipgpeb pwebupge pew  bweuwepwerbuwbpwebobunipwerpwe rwebuw wp uownpwen rwep pwbipw " img ={require('./images/item-4.jpeg')}/>
                </div>
            </div>
        </div>
    )
}

export default Menu;

