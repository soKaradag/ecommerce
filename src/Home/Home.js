import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "./Card";
import items from "../DummyData/Dummy";

function Home() {
  const [sayfaNumarasi, setSayfaNumarasi] = useState(1);
  const [gosterilenOgeler, setGosterilenOgeler] = useState([]);

  useEffect(() => {
    const yeniOgeler = items.slice(
      (sayfaNumarasi - 1) * 8,
      sayfaNumarasi * 8
    );

    setGosterilenOgeler((prevOgeler) => [...prevOgeler, ...yeniOgeler]);
  }, [sayfaNumarasi]);


  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
      ) {
        setSayfaNumarasi((prevSayfaNumarasi) => prevSayfaNumarasi + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <div className="row">
        {gosterilenOgeler.map((item, index) => (
          <div className="column" key={index}>
            <Card
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
