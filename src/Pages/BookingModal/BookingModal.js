import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ bookingCar, setBookingCar }) => {
    const { title, author, resalePrice, originalPrice, categoryName, location, YearOfPurchase, condition } = bookingCar
    const { user } = useContext(AuthContext)

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value

        const booking = {
            date,
            name,
            title,
            originalPrice,
            resalePrice,
            email,
            phone,
            location,
            YearOfPurchase,
            condition
        }

        console.log(booking)

        setBookingCar(null)
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    toast.success('Booking Confirmed', { autoClose: 500 })
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-3">{title}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} placeholder="Type here" className="input input-bordered input-primary w-full" />
                        <input name='resalePrice' type="text" placeholder="Type here" value={resalePrice} className="input input-bordered input-primary mt-2 w-full" />
                        <input name='originalPrice' type="text" placeholder="Type here" value={originalPrice} className="input input-bordered input-primary mt-2 w-full" />
                        <input name='categoryName' type="text" placeholder="Type here" value={categoryName} className="input input-bordered input-primary mt-2 w-full" />
                        <input name='categoryName' type="text" placeholder="Type here" value={location} className="input input-bordered input-primary mt-2 w-full" />
                        <input name='YearOfPurchase' type="text" placeholder="Type here" value={YearOfPurchase} className="input input-bordered input-primary mt-2 w-full" />
                        <input name='condition' type="text" placeholder="Type here" value={condition} className="input input-bordered input-primary mt-2 w-full" />

                        <input name='email' type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered input-primary mt-2 w-full" readOnly />
                        <input name='name' type="text" placeholder="name" defaultValue={user?.displayName} className="input input-bordered input-primary mt-2 w-full" />
                        <input name='phone' type="text" placeholder="phone" className="input input-bordered input-primary mt-2 w-full" />
                        <input className="btn btn-active btn-secondary w-full mt-2" type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;