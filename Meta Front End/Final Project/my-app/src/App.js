import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  const [showReservation, setShowReservation] = useState(false);

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <Header />
      <Nav />
      <Main showReservation={showReservation} setShowReservation={setShowReservation} />
      <Footer />
    </div>
  );
};

export default App;