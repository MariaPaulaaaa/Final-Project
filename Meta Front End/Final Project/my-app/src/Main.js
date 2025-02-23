import React from "react";

const Main = ({ showReservation, setShowReservation }) => {
  return showReservation ? (
    <section className="text-center my-6">
      <h1 className="text-2xl font-bold">Reserva una mesa</h1>
      <form className="text-left mt-4">
        <label>Nombre</label>
        <input type="text" className="block border p-2 w-full mb-2" />
        <label>Teléfono</label>
        <input type="text" className="block border p-2 w-full mb-2" />
        <label>Correo electrónico</label>
        <input type="email" className="block border p-2 w-full mb-2" />
        <label>Número de personas</label>
        <input type="number" className="block border p-2 w-full mb-2" />
        <label>Fecha</label>
        <select className="block border p-2 w-full mb-2">
          <option>Selecciona una fecha</option>
          <option>2024-02-25</option>
          <option>2024-02-26</option>
          <option>2024-02-27</option>
        </select>
        <label>Hora</label>
        <select className="block border p-2 w-full mb-2">
          <option>Selecciona una hora</option>
          <option>12:00 PM</option>
          <option>1:00 PM</option>
          <option>2:00 PM</option>
          <option>7:00 PM</option>
        </select>
        <label>Notas (ocasión especial, preferencia de ubicación...)</label>
        <textarea className="block border p-2 w-full mb-2"></textarea>
      </form>
    </section>
  ) : (
    <section className="text-center my-6">
      <h1 className="text-2xl font-bold">Little Lemon</h1>
      <p>Chicago</p>
      <button 
        className="bg-pink-300 px-4 py-2 mt-2 rounded" 
        onClick={() => setShowReservation(true)}
      >
        Reserva
      </button>
    </section>
  );
};

export default Main;