import React, { useState } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import OrderContainer from "./components/OrderContainer";

function App() {
  const [orders, setOrders] = useState([])
  const [hidden, setHidden] = useState(true)
  const [reachedMax, setReachedMax] = useState(false)
  const manageOrder = (name, img) => {
    const idx = orders.findIndex(element => element.name === name)
    if (idx === -1 && orders.length < 5) {
      setOrders(order => [{ name: name, image: img }, ...order])
      setHidden(true)
    } else if (idx !== -1 && orders.length < 5) {
      setHidden(false)

    } else if (orders.length === 5) {
      setReachedMax(true)
    }



  }
  return (
    <>
      <Header />
      <CardContainer orderName={manageOrder} />
      <OrderContainer order={orders} />
      <h1 className={`error${hidden ? ' hidden' : ''}`}> Topping already used!</h1>
      <h1 className="error">{` ${reachedMax ? 'You have reached the maximum possible toppings!' : ''}`}</h1>
    </>
  );
}

export default App;
