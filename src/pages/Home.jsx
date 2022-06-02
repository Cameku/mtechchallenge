import * as React from "react";
import InformationCard from "./InformationCard";
import { useEffect, useState } from "react";
import "./HomeStyles.css";
import SearchIcon from "./Search.svg";
import FilterUser from "./FilterUser";

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
    // eslint-disable-next-line
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
    console.log(filteredPeople);
    return filteredPeople;
  }

  function searchRegisteredByName(searchTerm) {
    //const registeredPeople = await getRegistered();
    const matchedPeople = displayedPeople.filter((person) => {
      //get person's first and last name
      let fname = person.name.first;
      let lname = person.name.last;
      //change both search and person to lowercase
      let fullName = fname.concat(" ", lname).toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
    return matchedPeople;
  }

  return (
    <>
      <div className="search">
        <input
          placeholder="Search name"
          value={searchTerm}
          // value="Arron Henry"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
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

      <ul className="list">
        {/* Add the list here - below is example mark up for a user */}
        <li>
          <figure>
            <img
              src="https://bulma.io/images/placeholders/64x64.png"
              alt="Image"
            />
          </figure>
          <p>
            <span>First name, Last name</span>
          </p>
        </li>
      </ul>
      <div>
        <FilterUser />

        {/*  <p>Filter users by name:</p>
        <input type="text" /> */}
      </div>
    </>
  );
};

export default Home;
