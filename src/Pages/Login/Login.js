import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../Hooks/useToken';
import Loading from '../Home/Loading/Loading';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleSignIn, loading } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)
                toast.success('Login successful', { autoClose: 500 })
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }


    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(user.email)
            })
            .catch(err => console.error(err))
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7872.jpg?w=826&t=st=1673842762~exp=1673843362~hmac=0893f2158a6d494cebeb5845b4411c1108f252bb6c714fadb3fd84ba371ec62f" alt='' className="max-w-sm rounded-lg shadow-2xl" />

                    <div className='h-[800px] flex justify-center items-center'>
                        <div className='w-96 p-7'>
                            <h2 className='text-xl text-center'>Login</h2>
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input type="text"
                                        {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                        className="input input-bordered w-full max-w-xs" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Password</span></label>
                                    <input type="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                        })}
                                        className="input input-bordered w-full max-w-xs" />
                                    <label className="label"> <span className="label-text">Forget Password?</span></label>
                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                </div>
                                <input className='btn btn-primary w-full' value="Login" type="submit" />
                                <div>
                                    {loginError && <p className='text-red-600'>{loginError}</p>}
                                </div>
                            </form>
                            <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary w-full"><FaGoogle className='mr-2 text-2xl'></FaGoogle> CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;










