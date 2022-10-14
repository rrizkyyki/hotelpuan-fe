import React from "react";
import type { NextPage } from 'next';
import axios from "axios";
import useSWR from "swr";
import { apiLink, apiUrl } from "../config/config";
import { fetcher } from "../helper/network";


// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const HotelItem: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className="col">
      <div className="card shadow" style={{width: '18rem'}}>
        <img src="img/room1.jpg" className="card-img-top" alt="img/facilities.jpg" />
        <div className="card-body">
          <h5 className="card-title">{item.jenis_kamar}</h5>
          <p className="card-text pt-2">Rp. {item.harga}</p>
          <p className="card-text">Sisa Kamar : {item.jumlah}</p>
          <a href="/detail" className="btn btn-warning text-white fw-semibold">Detail</a>
        </div>
      </div>
    </div>
  )
}

const Home: NextPage = () => {

  const { data, error } = useSWR(
    apiLink + '/room',
    fetcher
  );

  const mapItem = (item: any) => {
    console.log(item);
    return <HotelItem item={item}/> 
  }
  
  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">HOTELPUAN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active fw-semibold" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/register">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* banner */}
      <div className="banner"></div>

      {/* bar */}
      <div className="container d-flex justify-content-center">
        <div className="bar shadow-lg rounded-4 p-3 d-flex justify-content-center">
          <div className="row">
              <div className="col">
                <label htmlFor="">Check in</label>
                <br/>
                <input type="date"></input>
              </div>
              <div className="col">
                <label htmlFor="">Check out</label>
                <br/>
                <input type="date"></input>
              </div>
              <div className="col">
                <label htmlFor="">Tipe Kamar</label>
                <br/>
                <select name="" id="">
                  <option value="">Ekonomi</option>
                  <option value="">Standar</option>
                  <option value="">Superior</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="">Berapa Kamar</label>
                <br/>
                <input type="number"></input>
              </div>
              <div className="col mt-3">
                <a href="#" className="btn btn-warning text-white fw-semibold">Submit</a>
              </div>
          </div>
        </div>
      </div>

      {/* tipe kamar */}
      <div className="container pt-3 mb-5">
        <div className="row mb-2">
          <h1>Kamar</h1>
        </div>
        <div className="row"> 

        {data && data.map(mapItem)}
    
        </div>
      </div>

      {/* fasilitas */}

      <div className="container mb-5">
        
        <div className="row mb-2">
          <h1>Fasilitas</h1>
        </div>

        <div className="row">

          <div className="col">
            <div className="card shadow" style={{width: '18rem'}}>
              <img src="icons/wifi.svg" style={{width: '80%'}} className="card-img-top svg pt-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Wifi</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow" style={{width: '18rem'}}>
              <img src="icons/layers-half.svg" style={{width: '80%'}} className="card-img-top svg pt-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Loundry</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow" style={{width: '18rem'}}>
              <img src="icons/people-fill.svg" style={{width: '80%'}} className="card-img-top svg pt-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Ruang Tamu</h5>
              </div>
            </div>
          </div>

        </div>
        
      </div>

      {/* footer */}
      <footer className="text-center text-lg-start">
        <div className="text-center text-white p-3">
            © 2021 HOTELPUAN
        </div>
      </footer>
    </>
  )
}

export default Home
