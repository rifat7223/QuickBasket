import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SingInGoogle from '../SingInGoogle/SingInGoogle';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()


     const { loginUser}=useAuth()
  
   const handleRegister = (data) => {
        console.log(data)
        loginUser(data.email,data.password)
        .then(result=>{
          console.log(result)
        })
        .catch(errors=>{
          console.log(errors)
        })
      }
    return (
       <div>
         <h1 className='text-3xl font-bold'>Welcome Back</h1>
            <p>Login with QuickBasket</p>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        
       <form onSubmit={handleSubmit(handleRegister)}>
                        
                        <label className="label">Email</label>
                        <input type="email" className="input" {...register('email', { required: true })} placeholder="Email" />
                        {errors.email?.type === "required" && <p className='text-red-500'>please fill up input</p>}
                        <label className="label">Password</label>
                        <input type="password" className="input" {...register('password', { required: true, minLength: 6 })} placeholder="Password" />
                        {errors.password?.type === "required" && <p className='text-red-500'>write tour password</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>write  password</p>}
                       <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 w-full">Login</button>
                        <br />
                        <br />
                        <p>Don’t have any account? <span className='text-[#acc857]'>Register</span></p>
                        <br />
                      
                    </form>
                     <SingInGoogle></SingInGoogle>
      </div>
      
        </div>
       </div>
    );
};

export default Login;