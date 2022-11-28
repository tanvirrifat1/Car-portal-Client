import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Home/Loading/Loading';

const ManageProducts = () => {
    // const [deleteProduct, setDeleteProduct] = useState(null)
    const { user } = useContext(AuthContext)
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['myproduct'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                console.log(data)
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/products/${product?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('DeleteConfirmed', { autoClose: 500 })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">Manage Products {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>original_price</th>
                            <th>resalePrice</th>
                            <th>YearOfPurchase</th>
                            <th>condition</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={product?.image_url} alt='' />
                                        </div>

                                    </div></td>
                                    <td>{product.title}</td>
                                    <td>{product.email}</td>
                                    <td>{product.original_price}</td>
                                    <td>{product.resalePrice}</td>
                                    <td>{product.YearOfPurchase}</td>
                                    <td>{product.condition}</td>
                                    <td><button onClick={() => handleDeleteProduct(product)} className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button></td>
                                    {/* <td>{product.details}</td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;