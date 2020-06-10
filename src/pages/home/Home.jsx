import React, { useContext } from "react";
import ItemContext from "../../context/item/itemContext";
import AddItem from "../../components/additem/AddItem";
import ItemList from "../../components/itemlist/ItemList";
import TotalDisplay from "../../components/totaldisplay/TotalDisplay";

import "./Home.scss";

const Home = () => {
  const itemContext = useContext(ItemContext);
  const { incomesTotal, unitsTotal, costsTotal, sellsTotal } = itemContext;

  return (
    <div className="container">
      <div className="display-container">
        <TotalDisplay
          title="Sells"
          numb={sellsTotal}
          icon="fas fa-cash-register"
        />
        <TotalDisplay
          title="capital"
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
      <div className="inventory">
        <div className="inventory-add">
          <AddItem />
        </div>
        <ItemList />
      </div>
    </div>
  );
};

export default Home;
