import React, { useEffect, useState } from "react";

const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("you entered in the right place");
    const getData = async () => {
      const reqdata = await fetch("http://localhost:4000/category");
      const recievedData = await reqdata.json();
      setData(recievedData);
    };

    getData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 ">
        {data.map((value) => {
          return (
            <li className="list-none border border-red-500">
              {value.category}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
