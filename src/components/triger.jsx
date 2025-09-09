import { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 } // dispara quando 20% do elemento aparece
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
