import React from "react";
import "./Chats.css";
import Chat from "./Chat"

const Chats = () => {
  return <div className="chats">
      <Chat
      name="byte"
      message="Wuff" 
      timestamp="6 mins ago" 
      profilePic="https://pawesome-project.s3-us-west-2.amazonaws.com/profile-images/puppy2.jpg"
      />
      <Chat
      name="docker"
      message="Bork" 
      timestamp="1 hr ago" 
      profilePic="https://pawesome-project.s3-us-west-2.amazonaws.com/profile-images/puppy3.jpg"/>
      <Chat
      name="sudo"
      message="bork bork bork" 
      timestamp="4 hrs ago" 
      profilePic="https://pawesome-project.s3-us-west-2.amazonaws.com/profile-images/puppy5.jpg"/>
  </div>;
};

export default Chats;
