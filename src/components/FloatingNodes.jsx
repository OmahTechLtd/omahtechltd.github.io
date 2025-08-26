import { useEffect, useRef } from "react";

export default function FloatingNodes() {
  const containerRef = useRef(null);

  useEffect(() => {
    const nodes = [];
    const colors = ["#00FF7F", "#FFA500", "#1E90FF"];
    const container = containerRef.current;

    const createNodes = () => {
      for (let i = 0; i < 15; i++) {
        const node = document.createElement("div");
        const size = Math.random() * 12 + 4;
        node.style.width = `${size}px`;
        node.style.height = `${size}px`;
        node.style.borderRadius = "50%";
        node.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        node.style.position = "absolute";
        node.style.top = `${Math.random() * 100}%`;
        node.style.left = `${Math.random() * 100}%`;
        node.style.opacity = 0;
        node.style.pointerEvents = "none";
        node.style.transition = "transform 10s linear, opacity 5s ease-in-out";
        container.appendChild(node);
        nodes.push(node);

        const move = () => {
          node.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;
        };
        move();
        setInterval(move, 8000 + Math.random() * 4000);

        let fadeIn = true;
        const fade = () => {
          node.style.opacity = fadeIn ? (Math.random() * 0.5 + 0.3) : 0;
          fadeIn = !fadeIn;
        };
        fade();
        setInterval(fade, 4000 + Math.random() * 3000);
      }
    };

    createNodes();

    return () => {
      nodes.forEach((n) => container.removeChild(n));
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden"></div>;
}