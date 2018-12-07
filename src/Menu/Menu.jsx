import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {

    state = {
        menu: [
            {name: "Orders", id: "1", url: ''},
            {name: "Tasks", id: "2", url: 'tasks'},
            {name: "Tracking", id: "3", url: 'tracking'}
        ]
    }

    render() {
    return (
        <div>
             <div className="menu_blc">
                {this.state.menu.map(el => 
                    <NavLink exact to={`/${el.url}`} key={el.id}>
                        <div className="menu_item">{el.name}</div>
                    </NavLink>
                    )}
             </div>
        </div>
    );
}
}

export default Menu;