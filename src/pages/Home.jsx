import * as React from "react";
import InformationCard from "./InformationCard";
import { useEffect, useState } from "react";
import "./HomeStyles.css";
import SearchIcon from "./Search.svg";
import { Image } from "semantic-ui-react";

const Home = () => {
  const [displayedPeople, setDisplayedPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");

  const getData = async () => {
    const res = await fetch(
      "https://randomuser.me/api?results=100&nat=us,dk,fr,gb,br"
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getRegistered().then((users) => setDisplayedPeople(users));
  }, []);

  async function getRegistered() {
    let data = await getData();
    let people = data.results;
    const filteredPeople = people.filter((person) => {
      let year = new Date(person.registered.date).getFullYear();

      if (year >= 2000 && year <= 2010) {
        return true;
      }
      return false;
    });
    console.log(filteredPeople);
    return filteredPeople;
  }

  function searchRegisteredByName(searchTerm) {
    const matchedPeople = displayedPeople.filter((person) => {
      let fname = person.name.first;
      let lname = person.name.last;
      let fullName = fname.concat(" ", lname).toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
    return matchedPeople;
  }

  return (
    <>
      <div className="search">
        <input
          placeholder="Search users by name"
          value={searchTerm.trim()}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Image
          src={SearchIcon}
          alt="Search by name"
          onClick={() => {
            const foundPeople = searchRegisteredByName(searchTerm);
            setDisplayedPeople(foundPeople);
          }}
        />
      </div>
      {displayedPeople?.length > 0 ? (
        <div className="container">
          {displayedPeople.map((personDetail) => (
            <InformationCard
              key={personDetail.login.username}
              personalInfo={personDetail}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No information found</h2>
        </div>
      )}
    </>
  );
};

export default Home;
