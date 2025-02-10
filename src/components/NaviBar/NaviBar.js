import { useEffect } from 'react';
import './NaviBar.css';
import "react-icons/cg";
import { IoGrid } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

function NaviBar() {
    useEffect(() => {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const navheader = document.getElementById('navheader');
    
        const showMenu = () => {
          navMenu.classList.add('show-menu');
        };
    
        const hideMenu = () => {
          navMenu.classList.remove('show-menu');
        };
    
        const handleScroll = () => {
          if (window.scrollY > 0) {
            navheader.classList.add('scrolled');
          } else {
            navheader.classList.remove('scrolled');
          }
        };
    
        if (navToggle) {
          navToggle.addEventListener('click', showMenu);
        }
    
        if (navClose) {
          navClose.addEventListener('click', hideMenu);
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          if (navToggle) {
            navToggle.removeEventListener('click', showMenu);
          }
    
          if (navClose) {
            navClose.removeEventListener('click', hideMenu);
          }
    
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
  return (
    <div className='all_navbar'>
    <navheader class="navheader" id="navheader">
        <nav class="nav container1">
            <a href="#" id='nav_items_'  class="nav__logo">Portfolio </a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#" id='nav_items_' class="nav__link">
                            <i class="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#about1" id='nav_items_' class="nav__link">
                            <i class="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#skills" id='nav_items_' class="nav__link">
                            <i class="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#projects" id='nav_items_' class="nav__link">
                            <i class="uil uil-scenery nav__icon"></i> Projects
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#certificates" id='nav_items_' class="nav__link">
                            <i class="uil uil-scenery nav__icon"></i> Certifications
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#contact" id='nav_items_' class="nav__link">
                            <i class="uil uil-message nav__icon"></i> Contact 
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" id="nav-close"><IoIosCloseCircle/></i>
            </div>

            <div class="nav__btns">
                <i class="uil uil-palette theme-customization"></i>

                <div class="nav__toggle" id="nav-toggle">
                    <i class="uil uil-apps"><IoGrid /></i>
                </div>
            </div>
        </nav>
    </navheader>
    </div>
  );
}

export default NaviBar;