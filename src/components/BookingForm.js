import React, { useState } from 'react';

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-96 shadow-lg relative">
                <h2 className="text-2xl font-semibold mb-4">Book a Stay at {house.name}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Number of Guests:</label>
                        <input 
                            type="number" 
                            name="guests" 
                            value={formData.guests} 
                            onChange={handleChange} 
                            required 
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Guest Names:</label>
                        <textarea 
                            name="guestNames" 
                            value={formData.guestNames} 
                            onChange={handleChange} 
                            required 
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Check-in Date:</label>
                        <input 
                            type="date" 
                            name="checkIn" 
                            value={formData.checkIn} 
                            onChange={handleChange} 
                            required 
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Check-out Date:</label>
                        <input 
                            type="date" 
                            name="checkOut" 
                            value={formData.checkOut} 
                            onChange={handleChange} 
                            required 
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>
                    <div className="flex justify-between mt-6">
                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            Submit Booking
                        </button>
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
