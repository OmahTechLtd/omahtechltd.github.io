import React, { useEffect, useState } from "react";
import agentsData from "../data/agents.json";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AISolutionsLab = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
const latestAgents = agentsData.slice(-4).reverse();
setAgents(latestAgents);
}, []);

const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
  {
    breakpoint: 2000, // desktops
    settings: { slidesToShow: 2 }
  },
  {
    breakpoint: 1024,
    settings: { slidesToShow: 1 }
  },
  {
    breakpoint: 768,
    settings: { slidesToShow: 1 }
  }
]
  };
    return (
        <section id="ai-solutions-lab" className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
        AI Solutions Lab
      </h2>
      <p className="text-center text-gray-300 mb-8">
        Discover our AI Agents designed to automate complex workflows, reduce human effort, and unlock powerful insights from data and information.
      </p>

        <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {agents.map((agent) => (
            <div key={agent.id} className="px-4">
                <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl min-h-[250px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 border border-gray-800">
                    <h3 className="text-xl font-semibold mb-2 text-green-400">{agent.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{agent.description}</p>
            <Link
                to={`/agents/${agent.id}`}
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium text-center inline-block w-fit self-start border border-gray-600 transition duration-300"
            >
                Explore Agent
            </Link>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    );
}

export default AISolutionsLab;
