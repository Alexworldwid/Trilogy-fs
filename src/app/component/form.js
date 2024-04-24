import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';


const Form = ({ handleCloseForm, openForm }) => {
    // initialize form state
    const { register, handleSubmit, formState: { errors } } = useForm();

    // define form submission handler
    const onSubmit = (data) => {
        console.log(data);
    }

    const handleCloseFormClick = () => {
        handleCloseForm();
    }
    
    return (
        <div id='form-container' className={`transition-all fixed top-[15%] left-0 overflow-y-auto duration-1500 ease-in-out w-full h-[70%] md:w-[500px] md:left-[15%] lg:left-[25%] xl:left-[35%]  my-auto bg-white z-50 flex flex-col justify-center items-center ${openForm ? 'flex' : 'hidden'}`}>
            <div className='mt-4 p-4 overflow-y-auto'>
                <div className='items-end flex flex-col mr-4'><FaTimes className='text-2xl' onClick={handleCloseFormClick} /></div>
                <h2 className='text-center mt-3 mb-4'>Get Started on Your <i>Financial Life Plan Today</i></h2>
                <p >Do not fill out the form below if you are an existing client.</p>
                <p className='mb-3'>Please contact your Advisor directly.</p>
            
                <form action="" method='POST' onSubmit={handleSubmit(onSubmit)} noValidate>

                    <div className='mb-3'>
                        <input className={`appearance-none block w-full border-transparent bg-slate-200 px-3 py-2 text-xl my-1 rounded-md border-solid  ${errors.firstName ? 'border-red-500 border-2 text-red-500' : ''}`}  type="text" id='firstName' placeholder='First name' {...register('firstName', { required: true })}  />
                        {errors.firstName && <p className='text-red-500'>This field is required</p>}
                    </div>
                    
                    <div className='mb-3'>
                        <input className={`appearance-none block w-full border-transparent bg-slate-200 px-3 py-2 text-xl my-1 rounded-md border-solid  ${errors.lastName ? 'border-red-500 border-2 text-red-500' : ''}`} type="text" id='lastName' placeholder='Last name' {...register('lastName', { required: true })} />
                        {errors.lastName && <p className='text-red-500'>This field is required</p>}
                    </div>
                    
                    <div className='mb-3'>
                        <input className={`appearance-none block w-full border-transparent bg-slate-200 px-3 py-2 text-xl my-1 rounded-md border-solid  ${errors.email ? 'border-red-500 border-2 text-red-500' : ''}`} type="text" id='email' placeholder='Email' {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  })} />
                        {errors.email && <p className='text-red-500'>Please enter a valid email</p>}
                    </div>
                    
                    <div className='mb-3'>
                        <input className={`appearance-none block w-full border-transparent bg-slate-200 px-3 py-2 text-xl my-1 rounded-md border-solid  ${errors.zipCode ? 'border-red-500 border-2 text-red-500' : ''}`} type="number" id='zipcode' required placeholder='Zipcode' {...register('zipCode', { required: true, pattern: /^\d{5}$/ })} />
                        {errors.zipCode && <p className='text-red-500'>enter a valid zipcode</p>}
                    </div>
                    
                    <div className='mb-3'>
                        <input className={`appearance-none block w-full border-transparent bg-slate-200 px-3 py-2 text-xl my-1 rounded-md border-solid  ${errors.city ? 'border-red-500 border-2 text-red-500' : ''}`} type="text" id='city' required placeholder='City' {...register('city', { required: true }) } />
                        {errors.city && <p className='text-red-500'>This field is required</p>}
                    </div>
                    
                    <div className='mb-3'>
                        <input className={`appearance-none block w-full border-transparent bg-slate-200 px-3 py-2 text-xl my-1 rounded-md border-solid  ${errors.state ? 'border-red-500 border-2 text-red-500' : ''}`} type="text" id='state' placeholder='State/Region'  {...register('state', { required: true, })} />
                        {errors.state && <p className='text-red-500'>This field is required</p>}
                    </div>
                    
                    <div className='mb-3'>
                        <input className={`appearance-none block w-full border-transparent bg-slate-200 px-3 py-2 text-xl my-1 rounded-md border-solid  ${errors.phoneNumber ? 'border-red-500 border-2 text-red-500' : ''}`} type="number" id='phoneNumber' placeholder='Phone number'  {...register('phoneNumber', { required: true, pattern: /^\d{10}$/ })} />
                        {errors.phoneNumber && <p className='text-red-500'>Please enter a valid phone number</p>}
                    </div>
                    
                    <div className='mb-3'>
                        <select className=' block w-full px-3 border-2 py-2 text-xl my-3 rounded-md border-solid border-black'  id="faq" {...register('faq', {required: true})}>
                            <option value="">Please Select</option>
                            <option value="financial-question-and-concerns">Financial Questions and Concerns</option>
                            <option value="icome-planning">income planning</option>
                            <option value="Wealth-and-asset-management">Wealth and Asset Mangement</option>
                            <option value="insurance">Insurance</option>
                            <option value="investment-strategies">Investment Strategies</option>
                            <option value="401k-and-retirement-planning">401k and Retirement Planning</option>
                            <option value="estate-planning-strategies">Estate Planning Strategies</option>
                            <option value="others">others</option>
                        </select>
                        {errors.faq && <p className='text-red-500'>select a option you need help with</p>}
                    </div>
                    
                    <button className='bg-green-400 transition-colors duration-500 py-2 px-5 text-white hover:bg-green-600'>Submit</button>
                </form>
            </div>
            
        </div>
    );
};

export default Form;