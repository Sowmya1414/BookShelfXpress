import React from "react";
import UndrawBooks from '../Assets/Librarybro.png'


const Landing = () => {
    return (
        <div>
            <section id="landing">
<header>
    <div className="header__container">
        <h1>India's most awarded online library platform</h1>
        <h2>Find your dream book with <span className="purple">Library</span></h2>
        <a href="/#features">
            <button className="btn">
                Browse Books
                </button>
                </a>
          </div>
    <figure className="header__img--wrapper">
                <img src={UndrawBooks} alt="" />
            </figure>
        </header>
            </section>
        </div>
    )
}
export default Landing;