import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'About',
    to: '/about',
    exact: false
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: false
  },
  {
    name: 'Produk',
    to: '/products',
    exact: false
  },
  {
    name: 'Login',
    to: '/login',
    exact: false
  }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => { //MEMBUAT MenuLink AGAR REUSABLE
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        const active = match ? "active abc" : " ";
        return (
          <li className={`my-li ${active}`}>
            <Link to={to} className="my-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  )
}


class Menu extends Component {

  showMenus = (menus) => {
    let result = null;

    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (<MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
        />);
      });
    }

    return result;
  }


  render() {
    return (
      <nav className="navbar navbar-inverse">
        <p className="navbar-brand">React Router</p>
        <ul className="nav navbar-nav">

          {this.showMenus(menus)}


          {/* SEBELUM MENGGUNAKAN MenuLink DAN ARRAY Menus */}
          {/* <NavLink // MENGGUNAKAN NavLink AGAR BISA DIBUAT AKTIF DAN TIDAK NYA
            activeClassName="active-navlink" // activeClassName JUGA DAPAT DIGUNAKAN SELAIN activeStyle
            exact to="/" className="my-link" // TAMBAHKAN exact AGAR TIDAK LANGSUNG AKTIF NavLink NYA
            >
            Home
            </NavLink>  */}



          {/* <MenuLink
          label="About"
          to="/about"
          activeOnlyWhenExact={false}
        /> */}

          {/* SEBELUM MENGGUNAKAN MenuLink DAN ARRAY Menus*/}
          {/* <NavLink
            activeStyle={{
              backgroundColor: 'white',
              color: 'red'
            }}
            to="/about" className="my-link">About</NavLink> */}



          {/* <MenuLink
          label="Contact"
          to="/contact"
          activeOnlyWhenExact={false}
        /> */}

          {/* SEBELUM MENGGUNAKAN MenuLink DAN ARRAY Menus*/}
          {/* <NavLink
            activeStyle={{
              backgroundColor: 'white',
              color: 'red'
            }}
            to="/contact" className="my-link">Contact</NavLink> */}

        </ul>
      </nav>
    );
  }
}

export default Menu;
