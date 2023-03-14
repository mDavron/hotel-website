import React, { useContext } from "react";
import { useParams } from "react-router-dom";
//components
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
//scroll top component
import ScrollToTop from "../components/ScrollToTop";
//context
import { RoomContext } from "../context/RoomContext";
//icons
import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  //get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  console.log(room);
  return <div className="bg-pink-200">RoomDetails</div>;
};

export default RoomDetails;
