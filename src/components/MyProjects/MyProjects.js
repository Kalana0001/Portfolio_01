import React, { useState } from 'react';
import "./MyProjects.css";
import img1 from "../../Assets/Projects/police.png"
import img3 from "../../Assets/Projects/carrent.png"
import img4 from "../../Assets/Projects/music.png"
import img5 from "../../Assets/Projects/clothe.png"
import img6 from "../../Assets/Projects/food.png"
import img7 from "../../Assets/Projects/gymmange.png"
import img8 from "../../Assets/Projects/Dip.png"
import img9 from "../../Assets/Projects/smarthome.png"

function MyProjects() {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (value) => {
    setActiveFilter(value);
  };

  const galleryItems = [
    { category: 'web', image: img1, title: 'PoliceProNet Web Develepoment Project', link: 'https://github.com/Kalana0001/Car-Rental-Web.git' },
    { category: 'web', image: img4, title: 'MelorCraft web Project' , link: 'https://github.com/Kalana0001/MelorCraft.git'  },
    { category: 'web', image: img3, title: 'Wbe Project For Car Rental App' , link: 'https://github.com/Kalana0001/Car-Rental-Web.git'  },
    { category: 'web', image: img5, title: 'Clothing Web Demo' , link: 'https://github.com/Kalana0001/clothing-store-demo.git' },
    { category: 'web', image: img6, title: 'Ecommerce Food Fullstack Web' , link: 'https://github.com/Kalana0001/Ecommerce-Food-Web.git' },
    { category: 'other', image: img7, title: 'Windows Application (Gym Management System)' , link: 'https://github.com/Kalana0001/Car-Rental-Web.git' },
    { category: 'other', image: img8, title: 'Digital Image Processing (Brain Tumor Detection System)' , link: 'https://github.com/Kalana0001/Car-Rental-Web.git' },
    { category: 'other', image: img9, title: 'Smart Home System With NodeMCU' , link: 'https://github.com/Kalana0001/smarthome.git' },

  ];
  
  const filteredItems = activeFilter === '*' ? galleryItems : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="projectdiv" id='projects'>
      <section className="projectdiv2">
        <header className="section-head">
          <h1><b><span className="white">Some Of </span><span className="purple">My Projects</span></b></h1>
        </header>

        <main className="mainContainer">
          <div className="button-group">
            <button className={`projbutton ${activeFilter === '*' ? 'active' : ''}`} onClick={() => handleFilterClick('*')}>All</button>
            <button className={`projbutton ${activeFilter === 'web' ? 'active' : ''}`} onClick={() => handleFilterClick('web')}>Web</button>
            <button className={`projbutton ${activeFilter === 'development' ? 'active' : ''}`} onClick={() => handleFilterClick('development')}>Development</button>
            <button className={`projbutton ${activeFilter === 'other' ? 'active' : ''}`} onClick={() => handleFilterClick('other')}>Other</button>
          </div>

          <div className="gallery">
            {filteredItems.map((item, index) => (
            <div key={index} className={`projitem ${item.category}`}>
              <img src={item.image} alt={`Project ${index + 1}`} />
                <div className="overlay">
                <a href={item.link}>VIEW MORE</a>
                </div>
                <div className="project-details">
                  <div className="project-title">{item.title}</div>
                  </div>
              </div>
            ))}
        </div>

  
        </main>
      </section>
    </div>
  );
}


export default MyProjects;
