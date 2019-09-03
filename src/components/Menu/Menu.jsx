import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { menu } from '../../constants/text';
import style from './Menu.css';

export class Menu extends Component {

    render() {
    return (
        <div>
             <div className={style.menu_blc}>
                {menu.map(el => 
                    <NavLink exact to={`/${el.url}`} key={el.id}>
                        <div className={style.menu_item}>{el.name}</div>
                    </NavLink>
                    )}
             </div>
        </div>
    );
}
}