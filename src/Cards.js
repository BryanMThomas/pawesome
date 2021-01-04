import React, { useState, useEffect } from "react";
import Card from "react-tinder-card";
import "./Cards.css";

function Cards() {

  //https://3z5e98v1ql.execute-api.us-west-2.amazonaws.com/default/getDogs
  
  const [people, setPeople] = useState([
    { name: "fluffy", url: "https://thehappypuppysite.com/wp-content/uploads/2019/06/Mini-Shiba-Inu-HP-long.jpg" },
    { name: "sparky", url: "https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg" },
  ]);

  // useEffect(() => {
  //   const unsubscribe = setPeople([...people])
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [people]);

  return (
    <div>
      <div className="cards__cardContainer">
        {people.map((person) => (
          <Card
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
