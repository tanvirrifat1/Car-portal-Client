import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Home/Loading/Loading';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user } = useContext(AuthContext)

    const imageHostKey = process.env.REACT_APP_imgbb_key

    const navigate = useNavigate()

    const { data: addProduct, isLoading } = useQuery({
        queryKey: ['addProduct'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addProduct');
            const data = await res.json();
            return data
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const product = {
                        name: data.name,
                        email: data.email,
                        addProduct: data.addProduct,
                        image: imgData.data.url
                    }
                    // save products
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success('added successFully', { autoClose: 500 })
                            navigate('/dasboard/manageProduct')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h3 className="text-3xl">Add A Products</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text  text-black">Name</span> </label>
                    <input type="text"
                        {...register("name")}
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text  text-black">Email</span> </label>
                    <input type="email"
                        {...register("email", {
                            required: 'Email is required'
                        })}
                        className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.email && <p className='text-error'>{errors?.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text  text-black">AddProducts</span> </label>
                    <select
                        {...register('addProduct')}
                        className="select select-primary w-full max-w-xs text-black">
                        {
                            addProduct?.map(addPd => <option
                                key={addPd._id}
                                value={addPd.name}
                            >{addPd.name}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-black">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value='Add Product' type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;