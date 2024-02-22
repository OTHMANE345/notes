import React from "react";
import './Recedencies.css';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import img1 from "../../assets/img/bl.png";
import img2 from "../../assets/img/rr.jpeg";
import img3 from "../../assets/img/D.png";
import img4 from "../../assets/img/Dev.png";
import img5 from "../../assets/img/r.png";
import img6 from "../../assets/img/e.png";

import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

    

import { sliderSettings } from "./commons";
const Recedencies = () => {


  return (
    <sextion className=" r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head FlexColSatrt">
                <span className="orangeText">Best Projects</span>
            </div>
<Swiper {...sliderSettings}>
<Sliderbuttons/>
    <SwiperSlide key={1}>
      <div className="FlexColSatrt r-card">
      <img src={img1} alt="" />
     
      <span className="primarText">Blog System with React js and Spring Boot
</span>
      <span  className="primarText r_icons">
      <a href="https://youtu.be/opE-IQvhOa8"><FaYoutube className="r_icon_for_youtube"/></a>
      <a href="https://github.com/OTHMANE345/blog-system-with-react-js-and-spring-boot-"><FaGithub className="r_icon_for_github"/></a>
      </span>

      </div>
    </SwiperSlide>
   
   

    <SwiperSlide key={2}>
      <div className="FlexColSatrt r-card">
      <img src={img5} alt="" />
     
      <span className="primarText">Recedencies System  With React js and Spring boot
</span>
       <span  className="primarText r_icons">
      <a href="https://youtu.be/D8WCaeSIXy0"><FaYoutube className="r_icon_for_youtube"/></a>
      <a href="https://github.com/OTHMANE345/Recedencies-System-with-react-js-and-spring-boot-"><FaGithub className="r_icon_for_github"/></a>
      </span>

      </div>
    </SwiperSlide>


    <SwiperSlide key={3}>
      <div className="FlexColSatrt r-card">
      <img src={img6} alt="" />
     
      <span className="primarText">Ecommerce System With React js and Spring boot
</span>
       <span  className="primarText r_icons">
      <a href="https://youtu.be/NDiuVlMvNts"><FaYoutube className="r_icon_for_youtube"/></a>
      <a href="https://github.com/OTHMANE345/Ecommerc-System-with-react-and-spring-boot"><FaGithub className="r_icon_for_github"/></a>
      </span>

      </div>
    </SwiperSlide>

    <SwiperSlide key={4}>
      <div className="FlexColSatrt r-card">
      <img src={img4} alt="" />
     
      <span className="primarText"> A DevOps project that deploys a sample product microservice using Docker and Minikube.
</span>
     

      <span  className="primarText r_icons">
      <a href="https://github.com/OTHMANE345/Devops-project"><FaGithub className="r_icon_for_github"/></a>
      </span>

      </div>
    </SwiperSlide>
    <SwiperSlide key={5}>
      <div className="FlexColSatrt r-card">
      <img src={img2} alt="" />
     
      <span className="primarText">Estate Website with React js
</span>
      

      <span  className="primarText r_icons">
      <a href="https://www.youtube.com/watch?v=n1sw0Qlw5J0"><FaYoutube className="r_icon_for_youtube"/></a>
      <a href="https://github.com/OTHMANE345/Estaye-Website-with-react"><FaGithub className="r_icon_for_github"/></a>
      </span>

      </div>
    </SwiperSlide>

    <SwiperSlide key={6}>
      <div className="FlexColSatrt r-card">
      <img src={img3} alt="" />
     
      <span className="primarText">a Dashboard  using React js and a Machine learning model
</span>
       <span  className="primarText r_icons">
      <a href="https://youtu.be/heUbybXLdtw"><FaYoutube className="r_icon_for_youtube"/></a>
      </span>

      </div>
    </SwiperSlide>

    


    
   
</Swiper>
        </div>
    </sextion>
  );
};

export default Recedencies  ; 

const Sliderbuttons = () => {
  const swiper = useSwiper();
  return (
<div className="flexCenter r-button">
  <button onClick={()=> swiper.slidePrev()}>&lt;</button> 
   <button onClick={()=> swiper.slideNext()}>&gt;</button>

</div>
  );
};