import * as React from "react";
import "./homeStyles.css";

 const Home = () => {
	const [myData, setMyData] = React.useState([]);

	const getData = async () => {
		const res = await fetch("https://randomuser.me/api?results=100&nat=us,dk,fr,gb,br");
		const data = await res.json();
		return data;
	};
  
  return (
    <>
      <ul className="list">
        {/* Add the list here - below is example mark up for a user */}
        <li>
          <figure>
            <img src="https://bulma.io/images/placeholders/64x64.png" />
          </figure>
          <p><span>First name, Last name</span></p>
        </li>
      </ul>
      <div>
        <p>Filter users by name:</p>
        <input type="text" />
      </div>
    </>
  );
}

export default Home;