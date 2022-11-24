import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ bookingCar }) => {
    const { title, author, resalePrice, originalPrice, categoryName } = bookingCar
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value

        console.log(name, email, phone)
    }

    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-3">{title}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={author.published_date} placeholder="Type here" className="input input-bordered input-primary w-full" />
                        <input type="text" placeholder="Type here" value={resalePrice} className="input input-bordered input-primary mt-2 w-full" />
                        <input type="text" placeholder="Type here" value={originalPrice} className="input input-bordered input-primary mt-2 w-full" />
                        <input type="text" placeholder="Type here" value={categoryName} className="input input-bordered input-primary mt-2 w-full" />

                        <input name='name' type="text" placeholder="Type here" defaultValue={user?.displayName} className="input input-bordered input-primary mt-2 w-full" />
                        <input name='email' type="text" placeholder="Type here" defaultValue={user?.email} className="input input-bordered input-primary mt-2 w-full" readOnly />
                        <input name='phone' type="text" placeholder="Type here" className="input input-bordered input-primary mt-2 w-full" />
                        <input className="btn btn-active btn-secondary w-full mt-2" type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;