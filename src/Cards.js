import React, { useState, useEffect } from "react";
import Card from "react-tinder-card";
import getAllDogs from "./utils/api";
import "./Cards.css";

function Cards() {
  //https://3z5e98v1ql.execute-api.us-west-2.amazonaws.com/default/getDogs

  const [dogs, setDogs] = useState({});

  useEffect(() => {
    getAllDogs()
      .then((response) => {
        if (response.data.statusCode !== 200) {
          //verify succesful call
          setDogs({ error: true });
        } else {
          setDogs(JSON.parse(response.data.body));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (Object.keys(dogs).length === 0) {
    //Waiting for property data to be returned
    return <p>LOADING DATA...</p>;
  } else if (dogs.hasOwnProperty("error")) {
    return <p>Failed to Retrieve Data</p>;
  } else {
    return (
      <div>
        <div className="cards__cardContainer">
          {dogs.map((dog) => (
            <Card
              className="swipe"
              key={dog.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${dog.profileImg})` }}
                className="card"
              >
                <h3>{dog.name}</h3>
                <p>{dog.BIO}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
