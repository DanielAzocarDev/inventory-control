import React, { useContext } from "react";
import ItemContext from "../../context/item/itemContext";
import AddItem from "../../components/additem/AddItem";
import ItemList from "../../components/itemlist/ItemList";
import TotalDisplay from "../../components/totaldisplay/TotalDisplay";

import "./Home.scss";

const Home = () => {
  const itemContext = useContext(ItemContext);
  const { incomesTotal, unitsTotal, costsTotal } = itemContext;

  return (
    <div className="container">
      <div className="container-left">
        <div className="display-container">
          <TotalDisplay
            title="income"
            numb={incomesTotal}
            icon="fas fa-cash-register"
          />
          <TotalDisplay title="cost" numb={costsTotal} icon="fas fa-receipt" />
          <TotalDisplay
            title="units"
            numb={unitsTotal}
            icon="fas fa-dolly-flatbed"
          />
        </div>
        <div className="container-form">
          <AddItem />
        </div>
      </div>
      <ItemList />
    </div>
  );
};

export default Home;
