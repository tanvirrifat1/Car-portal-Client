import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../UseTittle';
import Loading from '../../Home/Loading/Loading';

const MyOrders = () => {
    useTitle('MyOrders')
    const { user } = useContext(AuthContext)

    const url = `https://final-project-server-tanvirrifat1.vercel.app/orders?email=${user?.email}`

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data
        }
    })
    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text3xl">All Options</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>location</th>
                            <th>email</th>
                            <th>originalPrice</th>
                            <th>resalePrice</th>
                            <th>phone</th>
                            <th>YearOfPurchase</th>
                            <th>condition</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.length >= 0 &&
                            orders?.map((order, i) =>
                                <tr key={order._id}>
                                    <th>{i + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.title}</td>
                                    <td>{order.date}</td>
                                    <td>{order.location}</td>
                                    <td>{order.email}</td>
                                    <td>
                                        {
                                            order.originalPrice && !order.paid && <Link
                                                to={`/dasboard/payment/${order._id}`}>
                                                <button
                                                    className='btn btn-secondary btn-sm'
                                                >Pay</button>
                                            </Link>
                                        }
                                        {
                                            order.originalPrice && order.paid && <span className='text-black font-bold'>Paid</span>
                                        }
                                    </td>
                                    <td>{order.resalePrice}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.YearOfPurchase}</td>
                                    <td>{order.condition}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;