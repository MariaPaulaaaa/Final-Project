import React from "react";
import photo1 from "../src/img.png"

const Main = ({ showReservation, setShowReservation }) => {
  return showReservation ? (
    <section className="reservation">
      <button onClick={() => setShowReservation(false)}>Inicio</button>
      <h1>Reserva una mesa</h1>
      <form>
        <label>Nombre</label>
        <input type="text" />
        <label>Teléfono</label>
        <input type="text" />
        <label>Correo electrónico</label>
        <input type="email" />
        <label>Número de personas</label>
        <input type="number" />
        <label>Fecha</label>
        <select>
          <option>Selecciona una fecha</option>
          <option>2024-02-25</option>
          <option>2024-02-26</option>
          <option>2024-02-27</option>
        </select>
        <label>Hora</label>
        <select>
          <option>Selecciona una hora</option>
          <option>12:00 PM</option>
          <option>1:00 PM</option>
          <option>2:00 PM</option>
          <option>7:00 PM</option>
        </select>
        <label>Notas</label>
        <textarea></textarea>
      </form>
    </section>
  ) : (
    <section className="main">
      <h1>Little Lemon</h1>
      <p>Chicago</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis odio at purus ultrices volutpat. Pellentesque lobortis quam ac ullamcorper egestas. Vivamus mollis bibendum augue at dictum. Etiam pulvinar mauris id mattis vestibulum. Suspendisse pellentesque metus et lectus ultrices condimentum.</p>
      <img src={photo1} alt="Special dishes" className="main-image" />
      
      <h2>Especiales</h2>
      <div className="specials">
        <div className="special-item">
          <img src={photo1} alt="Plato especial 1" />
          <p>Nombre del plato</p>
          <p>Descripción</p>
          <p>Precio</p>
        </div>
        <div className="special-item">
          <img src={photo1} alt="Plato especial 2" />
          <p>Nombre del plato</p>
          <p>Descripción</p>
          <p>Precio</p>
        </div>
        <div className="special-item">
          <img src={photo1} alt="Plato especial 3" />
          <p>Nombre del plato</p>
          <p>Descripción</p>
          <p>Precio</p>
        </div>
      </div>
      
      <h2>Testimonios</h2>
      <div className="testimonials">
        <div className="testi">
            <img src={photo1} alt="Testimonial 1" />
            <p>"La mejor comida que he probado!"</p>
        </div>
        <div className="testi">
            <img src={photo1} alt="Testimonial 1" />
            <p>"Excelente!"</p>
        </div>
        <div className="testi">
            <img src={photo1} alt="Testimonial 1" />
            <p>"Un ambiente increíble y un servicio excelente."</p>
        </div>
      </div>
      
      <h2>Acerca de Little Lemon</h2>
      <p>Somos un restaurante familiar con una tradición de excelencia culinaria.</p>
      <img src={photo1} alt="Acerca de Little Lemon" className="about-image" />
      
      <button onClick={() => setShowReservation(true)}>Reserva</button>
    </section>
  );
};

export default Main;