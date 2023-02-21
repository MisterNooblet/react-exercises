import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
function App() {
  const [users, setUsers] = useState([])
  const [allusers, setAllUsers] = useState([])

  const fetchData = async () => {
    try {
      const respones = new Array(10).fill(0).map(element => { return axios.get("https://randomuser.me/api/") })
      const data = await Promise.all(respones);
      const users = data.map(element => {
        const person = element.data.results[0]
        const name = [person.name.title, person.name.first, person.name.last].join(' ')
        const pfp = person.picture.large
        allusers.push({
          name: name,
          picture: pfp
        })
        return {
          name: name,
          picture: pfp
        }
      })
      setAllUsers(users)
      setUsers(users)
    } catch (error) {
      console.log(error);
    }
  };

  const filterResults = (value) => {
    if (!value) {
      setUsers(allusers)
    } else {
      setUsers(allusers.filter(element => { return element.name.toLowerCase().includes(value.toLowerCase()) && element }))
    }
  }
  useEffect(() => {
    fetchData()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <input type='text' name='search' onChange={(e) => filterResults(e.target.value)} />
      <div className="cardbox">
        {
          users.map(element => <Card name={element.name} image={element.picture} />)
        }
      </div>
    </>
  );
}

export default App;
