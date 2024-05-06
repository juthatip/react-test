import React, { useEffect, useState, useRef } from "react";
import "../App.css";

// https://github.com/7-solutions/frontend-assignment/blob/main/README.md
type ItemType = "Fruit" | "Vegetable";

interface Item {
  type: ItemType;
  name: string;
}

const initialItems: Item[] = [
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Vegetable",
    name: "Broccoli",
  },
  {
    type: "Vegetable",
    name: "Mushroom",
  },
  {
    type: "Fruit",
    name: "Banana",
  },
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Mango",
  },
  {
    type: "Fruit",
    name: "Pineapple",
  },
  {
    type: "Vegetable",
    name: "Cucumber",
  },
  {
    type: "Fruit",
    name: "Watermelon",
  },
  {
    type: "Vegetable",
    name: "Carrot",
  },
];

const TodoList: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [typeItems, setTypeItems] = useState<Record<ItemType, Item[]>>({
    Fruit: [],
    Vegetable: [],
  });

  let clickTimer: any = undefined;

  const handleClickItems = (item: Item) => {
    clearTimeout(clickTimer);
    console.log("clickTimer 1", clickTimer);
    clickTimer = setTimeout(() => console.log("clickTimer 2"), 2000);

    setItems((prevItems) => prevItems.filter((i) => i.name !== item.name));

    // setTimeout(() => removeItem(item), 5000);

    setTimeout(() => removeItem(item), 5000);

    setTypeItems((prevItems) => ({
      ...prevItems,
      [item.type]: [...prevItems[item.type], item],
    }));
  };

  const removeItem = (item: Item) => {
    setTypeItems((prevTypeItems) => ({
      ...prevTypeItems,
      [item.type]: prevTypeItems[item.type].filter((i) => i.name !== item.name),
    }));

    setItems((prevItems) => [...prevItems, item]);
  };

  //   console.log("typeItems", typeItems);
  //   console.log("items", items);
  return (
    <div className="container">
      <div className="column">
        {items.map((item, index) => (
          <button key={index} onClick={() => handleClickItems(item)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="column border">
        <h2>Fruits</h2>
        {typeItems.Fruit.map((item, index) => (
          <button key={index} onClick={() => removeItem(item)} className="item">
            {item.name}
          </button>
        ))}
      </div>
      <div className="column border">
        <h2>Vegetables</h2>
        {typeItems.Vegetable.map((item, index) => (
          <button key={index} onClick={() => removeItem(item)} className="item">
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
