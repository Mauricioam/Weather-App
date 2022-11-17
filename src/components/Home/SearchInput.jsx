import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { context } from "./Home";

export const API_KEY = "bb4a906819197c0bec517509eea8775a";

export default function SearchInput() {

  const setCity = useContext(context);
  const [input, setInput] = useState({});

  function handleInputSearchBar(e) {
    setInput({
      ["city"]: [e.target.value],
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${input.city && input.city[0]}&appid=${API_KEY}`)
    .then(response => setCity(response.data))
    .catch(error => console.log(error))
    
  }

  return (
    <>
      <form class="d-flex" role="search" onSubmit={handleSubmit}>
        <button class="btn btn-outline-warning" type="submit">
          Search
        </button>
        <input
          class="form-control ms-2 w-50"
          type="search"
          onChange={handleInputSearchBar}
          placeholder="Enter city..."
          aria-label="Search"
        />
      </form>
    </>
  );
}
