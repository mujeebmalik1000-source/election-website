import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./CampaignSection.css";
import { FaHandHoldingHeart, FaUsers, FaBullhorn } from "react-icons/fa";
import React from "react";

const CampaignSection = () => {
  const cards = [
    { icon: <FaHandHoldingHeart />, title: "MAKE DONATION", text: "Your generous donation be which to great can the help make provide to those in lorem.", color: "blue" },
    { icon: <FaUsers />, title: "BECOME A VOLUNTEER", text: "Your generous to the make donation and can help provide food, shelter, and in need lorem.", color: "red" },
    { icon: <FaHandHoldingHeart />, title: "MAKE DONATION", text: "Your generous kind for creat and this donation help provide the can food, and the to those lorem.", color: "red" },
    { icon: <FaBullhorn />, title: "OUR CAMPAIGN", text: "Your generous fak the donation can food  shelter, and creat to those the in to the need lorem.", color: "blue" },
   
  ];
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="campaign-wrapper">
      <h2 className="campaign-title">Our Campaigns</h2>
      <Slider {...settings}>
        {cards.map((card, i) => (
          <div className="campaign-card" key={i}>
            <div className={`icon-circle ${card.color}`}>
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <button className="details-btn">DETAILS</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CampaignSection;

