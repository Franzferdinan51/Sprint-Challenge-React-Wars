import React, { useState, useEffect } from "react";
import axios from "axios";
import SwCard from "./SwCard"
import "./App.css";
import { Container, Row } from "reactstrap";


export default function Swcards() {
    const [card, setCard] = useState([]);




//needs API call and mapping but cant figure it out 