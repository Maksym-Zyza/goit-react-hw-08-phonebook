import React from "react";

const HomeView = () => (
  <div className="wrapper">
    <h1 className="home-view-title">Phonebook</h1>
    <h2 className="home-view-subtitle">
      Your contacts in one place{" "}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h2>
    <img
      className="home-view-img"
      src="https://cdn.lifehacker.ru/wp-content/uploads/2018/01/Kak-perenesti-kontakty-s-odnogo-telefona-na-drugoJ_1516567189-1140x570.jpg"
      alt="home_view_img"
    />
  </div>
);

export default HomeView;
