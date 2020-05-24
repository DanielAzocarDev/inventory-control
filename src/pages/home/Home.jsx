import React, { useContext } from "react";
import ItemContext from "../../context/item/itemContext";
import AddItem from "../../components/additem/AddItem";
import ItemList from "../../components/itemlist/ItemList";
import TotalDisplay from "../../components/totaldisplay/TotalDisplay";

const Home = () => {
  const itemContext = useContext(ItemContext);
  const { incomesTotal, unitsTotal, costsTotal } = itemContext;

  return (
    <div className="container">
      <div className="form-container">
        <div className="display-container">
          <TotalDisplay title="income" numb={incomesTotal} />
          <TotalDisplay title="cost" numb={costsTotal} />
          <TotalDisplay title="units" numb={unitsTotal} />
        </div>
        <AddItem />
      </div>
      <ItemList />
    </div>
  );
};

export default Home;
