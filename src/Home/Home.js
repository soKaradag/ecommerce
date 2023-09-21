import React from "react";
import "./Home.css";
import Card from "./Card";
import Carrot from "../images/carrot.jpg";
import Orange from "../images/orange.jpg";
import Strawberry from "../images/strawberry.jpg";
import Tomato from "../images/tomato.jpg";

function Home() {
    const items = [
        {
            name: "Carrot",
            category: "Grocery",
            price: 25.99,
            image: Carrot,
        },
        {
            name: "Orange",
            category: "Grecory",
            price: 19.99,
            image: Orange,
        },
        {
            name: "Strawberry",
            category: "Grocery",
            price: 25.99,
            image: Strawberry,
        },
        {
            name: "Tomato",
            category: "Grecory",
            price: 19.99,
            image: Tomato,
        },
        {
            name: "Carrot",
            category: "Grocery",
            price: 25.99,
            image: Carrot,
        },
        {
            name: "Orange",
            category: "Grecory",
            price: 19.99,
            image: Orange,
        },
        {
            name: "Strawberry",
            category: "Grocery",
            price: 25.99,
            image: Strawberry,
        },
        {
            name: "Tomato",
            category: "Grecory",
            price: 19.99,
            image: Tomato,
        },
        {
            name: "Carrot",
            category: "Grocery",
            price: 25.99,
            image: Carrot,
        },
        {
            name: "Orange",
            category: "Grecory",
            price: 19.99,
            image: Orange,
        },
        {
            name: "Strawberry",
            category: "Grocery",
            price: 25.99,
            image: Strawberry,
        },
        {
            name: "Tomato",
            category: "Grecory",
            price: 19.99,
            image: Tomato,
        },
        {
            name: "Carrot",
            category: "Grocery",
            price: 25.99,
            image: Carrot,
        },
        {
            name: "Orange",
            category: "Grecory",
            price: 19.99,
            image: Orange,
        },
        {
            name: "Strawberry",
            category: "Grocery",
            price: 25.99,
            image: Strawberry,
        },
        {
            name: "Tomato",
            category: "Grecory",
            price: 19.99,
            image: Tomato,
        },
        {
            name: "Carrot",
            category: "Grocery",
            price: 25.99,
            image: Carrot,
        },
        {
            name: "Orange",
            category: "Grecory",
            price: 19.99,
            image: Orange,
        },
        {
            name: "Strawberry",
            category: "Grocery",
            price: 25.99,
            image: Strawberry,
        },
        {
            name: "Tomato",
            category: "Grecory",
            price: 19.99,
            image: Tomato,
        },
        {
            name: "Carrot",
            category: "Grocery",
            price: 25.99,
            image: Carrot,
        },
        {
            name: "Orange",
            category: "Grecory",
            price: 19.99,
            image: Orange,
        },
        {
            name: "Strawberry",
            category: "Grocery",
            price: 25.99,
            image: Strawberry,
        },
        {
            name: "Tomato",
            category: "Grecory",
            price: 19.99,
            image: Tomato,
        },
        {
            name: "Carrot",
            category: "Grocery",
            price: 25.99,
            image: Carrot,
        },
        {
            name: "Orange",
            category: "Grecory",
            price: 19.99,
            image: Orange,
        },
        {
            name: "Strawberry",
            category: "Grocery",
            price: 25.99,
            image: Strawberry,
        },
        {
            name: "Tomato",
            category: "Grecory",
            price: 19.99,
            image: Tomato,
        },
        {
            name: "Carrot",
            category: "Grocery",
            price: 25.99,
            image: Carrot,
        },
        {
            name: "Orange",
            category: "Grecory",
            price: 19.99,
            image: Orange,
        },
        {
            name: "Strawberry",
            category: "Grocery",
            price: 25.99,
            image: Strawberry,
        },
        {
            name: "Tomato",
            category: "Grecory",
            price: 19.99,
            image: Tomato,
        },
        {
            name: "Carrot",
            category: "Grocery",
            price: 25.99,
            image: Carrot,
        },
        {
            name: "Orange",
            category: "Grecory",
            price: 19.99,
            image: Orange,
        },
        {
            name: "Strawberry",
            category: "Grocery",
            price: 25.99,
            image: Strawberry,
        },
        {
            name: "Tomato",
            category: "Grecory",
            price: 19.99,
            image: Tomato,
        },
        {
            name: "Carrot",
            category: "Grocery",
            price: 25.99,
            image: Carrot,
        },
        {
            name: "Orange",
            category: "Grecory",
            price: 19.99,
            image: Orange,
        },
        {
            name: "Strawberry",
            category: "Grocery",
            price: 25.99,
            image: Strawberry,
        },
        {
            name: "Tomato",
            category: "Grecory",
            price: 19.99,
            image: Tomato,
        },
        
    ];

  const column1 = [];
  const column2 = [];
  const column3 = [];
  const column4 = [];

  for (let i = 0; i < items.length; i++) {
    if (i % 4 === 0) {
      column1.push(items[i]);
    } else if (i % 4 === 1) {
      column2.push(items[i]);
    } else if (i % 4 === 2) {
      column3.push(items[i]);
    } else if (i % 4 === 3) {
      column4.push(items[i]);
    }
  }

  return (
    <div className="Home">
      <div className="row">
        <div className="column">
          {column1.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <div className="column">
          {column2.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <div className="column">
          {column3.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <div className="column">
          {column4.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
