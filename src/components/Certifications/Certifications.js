import React, { useEffect } from 'react';
import "./Certifications.css";
import postman from "../../Assets/postman.png"
import micorsoft1 from "../../Assets/microsoft1.svg"
import micorsoft2 from "../../Assets/microsoft2.svg"
import micorsoft3 from "../../Assets/microsoft3.svg"
import Certificate from '../Certificate/Certificate';


const Certifications = () => {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const btns = document.querySelectorAll(".wrapper i");
    const carouselChildren = [...carousel.children];
    const wrapper = document.querySelector(".wrapper");

    const cardWidth = carousel.querySelector(".card").offsetWidth;
    let isDragging = false,
      startX,
      startScrollLeft,
      isAutoPlay = true,
      timeoutId;

    const cardsPerView = 5; // Show 5 cards at a time

    // Duplicate the last and first cards to enable infinite scrolling
    carouselChildren
      .slice(-cardsPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    carouselChildren.slice(0, cardsPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -cardWidth : cardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      } else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }

      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      timeoutId = setTimeout(() => {
        carousel.scrollLeft += cardWidth;
      }, 2500);
    };

    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);

    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
      wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseleave", autoPlay);
    };
  }, []);

  return (
    <div>
        <header className="section-head">
          <h1><b><span className="white">Certifications </span><span className="purple">And Achievements</span></b></h1>
        </header>
    <div className="CertiContainer">
      <Certificate />
    </div>
    <div className='certify'>
      <div className="wrapper">
        <i className="fas fa-angle-left" id="left"></i>
        <ul className="carousel">

          <li className="card">
            
            <div className="img">
              <img className='cimg' src={postman}  alt="" draggable="false" />
            </div>
            <h2>Amelia</h2>
            <span>Web Developer</span>
          </li>
          <li className="card">
            <div className="img">
              <img className='cimg' src={micorsoft1}  alt="" draggable="false" />
            </div>
          </li>
          <li className="card">
            <div className="img">
            <img className='cimg' src={micorsoft2}  alt="" draggable="false" />
            </div>
          </li>
          <li className="card">
            <div className="img">
              <img className='cimg' src={micorsoft3}  alt="" draggable="false" />
            </div>
          </li>
          <li className="card">
            <div className="img">
              <img className='cimg' src={micorsoft3}  alt="" draggable="false" />
            </div>
          </li>
        </ul>
        <i className="fas fa-angle-right" id="right"></i>
      </div>
    </div>
    </div>
  );
};

export default Certifications; 