import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ house, onClose }) => {
     // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: '',
        guestNames: '',
        checkIn: '',
        checkOut: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission 
        console.log('Booking Form Data:', formData);
        onClose(); // Close the booking form after submission
    };

    return (
        <div className="booking-form">
            <h2>Book a Stay at {house.name}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <label>
                    Number of Guests:
                    <input type="number" name="guests" value={formData.guests} onChange={handleChange} required />
                </label>
                <label>
                    Guest Names:
                    <textarea name="guestNames" value={formData.guestNames} onChange={handleChange} required />
                </label>
                <label>
                    Check-in Date:
                    <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
                </label>
                <label>
                    Check-out Date:
                    <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
                </label>
                <button type="submit">Submit Booking</button>
                <button type="button" onClick={onClose}>Close</button>
            </form>
        </div>
    );
};

export default BookingForm;
