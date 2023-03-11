import React, { useEffect, useState } from "react";
import Card from "./Cads/CardUI";

const CardDisplay = ({ category }) => {
  console.log(category);
  const [Carddata, setCardData] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const data = await fetch("http://localhost:4000/cards");
      const unfilteredCardData = await data.json();

      setCardData(unfilteredCardData);
    };
    getCards();
    filterData();
  }, []);

  const filterData = () => {
    const filteredCardData = Carddata.filter(
      (value) => value.category === category
    );
    setCardData(filteredCardData);
  };

  console.log(Carddata);
  return (
    <div className="grid grid-cols-4 gap-2">
      {Carddata.map((value, index) => {
        return (
          <div key={index} className="">
            <Card />
          </div>
        );
      })}
    </div>
  );
};

export default CardDisplay;
