import { useEffect, useState } from "react";
import "./Preloader.css"; 

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return <div id="preloader"></div>;
};

export default Preloader;
