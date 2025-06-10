import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.{" "}
          </p>
          <ul className="pizzas">
            {pizzaData.map((Piza) => (
              <Pizza PizzaObj={Piza} key={Piza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato and ricotta cheese"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
};

function Pizza({ PizzaObj }) {
  // if (PizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${PizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={PizzaObj.photoName} alt={PizzaObj.name} />
      <div>
        <h3>{PizzaObj.name}</h3>
        <p>{PizzaObj.ingredients}</p>
        <span>{PizzaObj.soldOut ? "SOLD OUT" : PizzaObj.price} </span>

        {/* {PizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{PizzaObj.price}</span>
        )} */}
      </div>
    </li>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= 12 && hour <= closeHour) alert("We're  Currently open");
  // else alert("we are closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.{" "}
        </p>
      )}
    </footer>
  );
};

const Order = ({ closeHour }) => {
  return (
    <div>
      <p>We are open until {closeHour}:00, Come visit us or order online! </p>
      <button className="btn">Order</button>
    </div>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
