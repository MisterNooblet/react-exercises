import data from "./data";
import { useState } from "react";
import Name from "./components/Name";
import Card from "./components/Card";
const names = data.map(element => element.name)
const bornInEighties = data.filter(element => {
  const birthYear = element.birthday.split('-')[2] * 1
  return birthYear < 1990 && element
})
function App() {
  const [people, setPeople] = useState(names)
  const [eightiesKids, setEightiesKids] = useState(bornInEighties)
  return (
    <>
      <div className="names">
        {people.map(person => <Name name={person} key={Math.random()} />)}
      </div>
      <div>
        {eightiesKids.map(person => {
          return (
            <Card
              key={Math.random()}
              name={person.name}
              bday={person.birthday}
              meats={person.favoriteFoods.meats.join(" ")}
              fish={person.favoriteFoods.fish.join(" ")} />
          )
        })}
      </div>
    </>
  );
}

export default App;
