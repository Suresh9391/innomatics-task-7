import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Submitted', formData);
      alert('Form submitted successfully!');
      // Reset the form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="registration-section pt-5 pb-5 ">
     <div class="container">
      <div class="row">
        <div class="col-12">
         <div classname="text-center">
           <h1 classname="registration">Contact Us</h1>
           <form onSubmit={handleSubmit}>
             <input
             type="text"
             name="name"
             placeholder="Name"
             onChange={handleChange}
             value={formData.name}
             className="form-control"
             />
             {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}<br></br>

             <input
             type="email"
             name="email"
             placeholder="Email"
             onChange={handleChange}
             value={formData.email}
             className="form-control"
             />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}<br></br>

            <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            value={formData.message}
            className="form-control mb-3"
            ></textarea>
           {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

           <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
        </div>
      </div>
     </div> 
    </div>

  );
}

export default Contact;

