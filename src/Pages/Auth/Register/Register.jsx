import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SingInGoogle from '../SingInGoogle/SingInGoogle';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const{registerUser}=useAuth()
    const handleRegister = (data) => {
        console.log(data)
        registerUser(data.email,data.password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(errors=>{
            console.log(errors)
        })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold'>Create an Account</h1>
            <p>Register with QuickBasket</p>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <div className="card-body">

                    <form onSubmit={handleSubmit(handleRegister)}>
                        <label className="label">your name</label>
                        <input type="text" className="input" placeholder="name" />
                        <label className="label">Email</label>
                        <input type="email" className="input" {...register('email', { required: true })} placeholder="Email" />
                        {errors.email?.type === "required" && <p className='text-red-500'>please fill up input</p>}
                        <label className="label">Password</label>
                        <input type="password" className="input" {...register('password', { required: true, minLength: 6 })} placeholder="Password" />
                        {errors.password?.type === "required" && <p className='text-red-500'>write tour password</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>write  password</p>}

                        <button className="btn btn-neutral mt-4 w-full">Register</button>
                        <p>Already have an account? Login</p>
                      <SingInGoogle></SingInGoogle>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;