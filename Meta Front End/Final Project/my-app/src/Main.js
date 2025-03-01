import React from "react";
import { useState } from "react";
import photo1 from "../src/img.png"

const Main = ({ showReservation, setShowReservation }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        people: "",
        date: "",
        time: "",
        notes: "",
    });
    const [errors, setErrors] = useState({});
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = "Teléfono inválido (10 dígitos)";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Correo inválido";
        if (!formData.people || formData.people <= 0) newErrors.people = "Ingrese un número válido de personas";
        if (!formData.date) newErrors.date = "Seleccione una fecha";
        if (!formData.time) newErrors.time = "Seleccione una hora";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          alert("Reserva enviada con éxito");
          setShowReservation(false);
        }
    };
    return (
        <section className="reservation">
          <button onClick={() => setShowReservation(false)}>Inicio</button>
          <h1>Reserva una mesa</h1>
          <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}
    
            <label>Teléfono</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}
    
            <label>Correo electrónico</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
    
            <label>Número de personas</label>
            <input type="number" name="people" value={formData.people} onChange={handleChange} />
            {errors.people && <p className="error">{errors.people}</p>}
    
            <label>Fecha</label>
            <select name="date" value={formData.date} onChange={handleChange}>
              <option value="">Selecciona una fecha</option>
              <option value="2024-02-25">2024-02-25</option>
              <option value="2024-02-26">2024-02-26</option>
              <option value="2024-02-27">2024-02-27</option>
            </select>
            {errors.date && <p className="error">{errors.date}</p>}
    
            <label>Hora</label>
            <select name="time" value={formData.time} onChange={handleChange}>
              <option value="">Selecciona una hora</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
            </select>
            {errors.time && <p className="error">{errors.time}</p>}
    
            <label>Notas</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
    
            <button type="submit">Reservar</button>
          </form>
        </section>
    ) ; (
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