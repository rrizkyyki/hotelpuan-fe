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
    <div className="container detail">
      <div className="row">
        <div className="col">
            <h1>tipe kamar</h1>
            <p>{item.jenis_kamar}</p>
            <h1>deskripsi</h1>
            <p>{item.deskripsi}</p>
            <h1>harga</h1>
            <p>{item.deskripsi}</p>
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
          <a className="navbar-brand fw-bold" href="#">MyHotel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-semibold" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">Contact</a>
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


    {/* <div className="container detail">
      <div className="row">
        <div className="col">
            <h1>tipe kamar</h1>
            <h1>deskripsi</h1>
            <h1>harga</h1>
        </div>
      </div>
    </div> */}


    {/* <div className="container detail">
        <div className="row">
            <div className="col d-flex justify-content-center">
                <div className="card" style={{width: '18rem'}}>
                <img src="img/room3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        </div>
    </div> */}

    {data && data.map(mapItem)}



    {/* details */}
    {/* <div className="detail">
      <img src="img/room2.jpg" alt=""/>
    </div> */}


      {/* footer */}
      <footer className="text-center text-lg-start">
          <div className="text-center text-white p-3">
              © 2021 Copyright
          </div>
      </footer>
    </>
  )
}

export default Home
