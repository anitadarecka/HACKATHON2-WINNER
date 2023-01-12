import React, { useEffect, useState, useRef } from "react";
import "./addCar.scss";
import Header from "@components/Header";
import Button from "@components/Button";
import addPhotoIcon from "@assets/icons/galleryadd.png";
import { useCompany } from "../contexts/companyContext";
import axios from "axios";
import rightArrow from "../assets/icons/arrowright.png";

function AddCar() {
  const inputRef = useRef(null);
  const [carMakes, setCarMakes] = useState([]);
  const [price, setPrice] = useState(50);
  const [year, setYear] = useState(2020);
  const [milleage, setMilleage] = useState(30000);
  const { company, setCompany } = useCompany();

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleMilleage = (e) => {
    setMilleage(e.target.value);
  };
  const fetchMakes = () => {
    axios
      .get("http://localhost:8000/api/car/makes")
      .then((response) => setCarMakes(response.data));
  };
  const handleSubmit = (e) => {

    
    e.preventDefault();

  };


  useEffect(() => {
    fetchMakes();
  }, []);
  return (
    <div className="addCar">
      <Header value="Add a vehicule" back />
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="addCar__form">
        <div className="addCar__photoWrap">
          <img className="addCar__icon" src={addPhotoIcon} alt="" />
          <input
            ref={inputRef}
            className="addCar__addPic"
            type="file"
            name="picture"
            id=""
          />
        </div>
        <select name="make" id="">
          <option value="">Select a make</option>
          {carMakes.map((el) => (
            <option value={el.make_name}>{el.make_name}</option>
          ))}
        </select>
        <select>
          <option value="">Select your vehicule</option>
          <option value="Sedan">Sedan</option>
          <option value="Convertible">Convertible</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Coupe">Coupe</option>
        </select>
        <div className="addCar__rangeWrap">
          <label htmlFor="price">Price/day</label>
          <span className="addCar__state">{price}$</span>
          <input
            onChange={handlePrice}
            min="10"
            max="150"
            step="5"
            className="addCar__price"
            id="price"
            type="range"
          />
        </div>
        <div className="addCar__rangeWrap">
          <label htmlFor="year">Year of construction</label>
          <span className="addCar__state">{year}</span>

          <input
            onChange={handleYear}
            min="1970"
            max="2023"
            id="year"
            type="range"
          />
        </div>
        <div className="addCar__rangeWrap">
          <label htmlFor="milleage">Milleage</label>
          <span className="addCar__state">{milleage}Km</span>

          <input
            onChange={handleMilleage}
            min="5000"
            step="1000"
            max="300000"
            id="milleage"
            type="range"
          />
        </div>
        <select name="fuel" id="fuel">
          <option value="">fuel</option>
          <option value="gasoline">gasoline</option>
          <option value="electric">electric</option>
          <option value="diesel">desiel</option>
        </select>
        <select name="seats" id="seats">
          <option value="">Number of seats</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <Button value="Add" className="btn" />
      </form>
    </div>
  );
}

export default AddCar;
