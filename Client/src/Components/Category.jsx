import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CardDisplay from "./CardDisplay";

const Category = () => {
  return (
    <div>
      <div>
        <ControlledTabsExample />
      </div>
    </div>
  );
};

function ControlledTabsExample() {
  const [data, setData] = useState([]);

  const [key, setKey] = useState("home");
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
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
      {data.map((value) => {
        const { id, category } = value;
        console.log(id, category);

        return (
          <Tab className="" eventKey={id} title={category}>
            <CardDisplay />
          </Tab>
        );
      })}
    </Tabs>
  );
}

export default Category;
