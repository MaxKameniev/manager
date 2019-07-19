import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { menu } from '../../constants/text';
import './Menu.css';

export class Menu extends Component {

    render() {
    return (
        <div>
             <div className="menu_blc">
                {menu.map(el => 
                    <NavLink exact to={`/${el.url}`} key={el.id}>
                        <div className="menu_item">{el.name}</div>
                    </NavLink>
                    )}
             </div>
        </div>
    );
}
}