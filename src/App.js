import "./App.css";
import SearchIcon from "./Search.svg";
import InformationCard from "./InformationCard";
import { useEffect, useState } from "react";

const Api_Url = "https://randomuser.me/api?results=100&nat=us,dk,fr,gb,br";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");

  const getData = async () => {
    const res = await fetch(`${Api_Url}`);
    const data = await res.json();
    //console.log(data);
    // console.log(new Date(data.results[0].registered.date).getFullYear());
    //console.log(JSON.parse(data));
    //setMyData(data.results);
    return data;
  };

  useEffect(() => {
    getRegistered().then((users) => setMyData(users));
  }, []);

  async function getRegistered() {
    let data = await getData();
    let people = data.results;
    //console.log(people);
    const filteredPeople = people.filter((person) => {
      let year = new Date(person.registered.date).getFullYear();

      if (year >= 2000 && year <= 2010) {
        return true;
      }
      return false;
    });
    return filteredPeople;
  }

  return (
    <div className="App">
      <h1>What God cannot do does not exist!</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search information"
        />
        <img
          src={SearchIcon}
          alt="Search information"
          onClick={() => getData(searchTerm)}
        />
      </div>

      {myData?.length > 0 ? (
        <div className="container">
          {myData.map((personDetail) => (
            <InformationCard personalInfo={personDetail} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No information found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
