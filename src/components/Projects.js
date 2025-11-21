import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import modelsData from "../data/models.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const latestModels = modelsData.slice(-4).reverse();
    setModels(latestModels);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    },
  },
],
  };

  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
        Daily Machine Learning Models
      </h2>
      <p className="text-center text-gray-300 mb-8">
        Explore our featured AI models, updated regularly to inspire your next project.
      </p>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {models.map((model) => (
            <div key={model.id} className="px-4">
              <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl min-h-[250px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 border border-gray-800">
                <h3 className="text-xl font-semibold mb-2 text-green-400">{model.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{model.description}</p>
        <Link
            to={`/models/${model.id}`}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium text-center inline-block w-fit self-start border border-gray-600 transition duration-300"
        >
          Explore Model
        </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/models"
          className="inline-block px-6 py-3 rounded-lg font-semibold text-white bg-gray-900 border border-gray-700 hover:border-blue-500 transition duration-300"
        >
          View All Models
        </Link>
      </div>
    </section>
  );
};

export default Projects;