import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';


class App extends Component {
  componentShouldUpdate() {
    return false
  }
  
  componentDidMount() {
    const Menu = (function() {
      let burger = document.querySelector('.burger');
      const menu = document.querySelector('.menu');
      const menuList = document.querySelector('.menu__list');
      const brand = document.querySelector('.menu__brand');
      const menuItems = document.querySelectorAll('.menu__item');
      
      let active = false;
      
      let toggleMenu = function() {
        if (!active) {
          menu.classList.add('menu--active');
          menuList.classList.add('menu__list--active');
          brand.classList.add('menu__brand--active');
          burger.classList.add('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.add('menu__item--active');
          }
          
          active = true;
        } else {
          menu.classList.remove('menu--active');
          menuList.classList.remove('menu__list--active');
          brand.classList.remove('menu__brand--active');
          burger.classList.remove('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.remove('menu__item--active');
          }
          
          active = false;
        }
      };
      
      let bindActions = function() {
        burger.addEventListener('click', toggleMenu, false);
      };
      
      let init = function() {
        bindActions();
      };
      
      return {
        init: init
      };
      
    }());
    
    Menu.init();
  }

  render() {
    return (
      <div>
        <header className="header">
            <div className="burger">
              <div className="burger__patty"></div>
              <div className="burger__patty"></div>
              <div className="burger__patty"></div>
            </div>

            <nav className="menu">
              <div className="menu__brand">
                <Link to=""><div className="logo"></div></Link>
              </div>
              <ul className="menu__list">
                <li className="menu__item"><Link to="" className="menu__link">Work</Link></li>
                <li className="menu__item"><Link to="" className="menu__link">About</Link></li>
                <li className="menu__item">
                  <Link to="#" target="_blank" className="menu__link menu__link--social"><i className="fa fa-twitter"></i></Link>
                </li>
                <li className="menu__item">
                  <Link to="#" target="_blank" className="menu__link menu__link--social">
                    <i className="fa fa-dribbble"></i></Link>
                </li>
              </ul>
            </nav>
          </header>

          <main>
            <h1><Link to="#" target="_blank">Ettrics</Link></h1>
            <h2>A Full-Screen Menu, showcasing your brand and website navigation.</h2>
            <p className="support">With support for IE10 & latest versions of Chrome, Safari, and Firefox.</p>
          </main>
      </div>
    );
  }
}

export default App;
