import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">MyHotel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-semibold" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-semibold" href="#">Contact</a>
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

    

        <div className="container" id="contact">
            <div className="row mb-4">
                <h1>Contact Us</h1>
            </div>
            <div className="row">
                <div className="col">
                    <div className="contact-card">
                    <div className="card mb-5">
                        <form action="" method="post" className="p-3">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Nama</label>
                                <input type="text" name="nama" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" name="nama" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Message</label>
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            </div>
                            <button className="btn btn-warning text-white fw-semibold" id="contact-send" type="submit">Send</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126921.71519057851!2d106.69184216250002!3d-6.223640699999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fc66813af1%3A0x739094cdcbcb594d!2sHotel%20Raffles%20Jakarta!5e0!3m2!1sid!2sid!4v1665696084731!5m2!1sid!2sid" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" width={600} height={450} />


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
