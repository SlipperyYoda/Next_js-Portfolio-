import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"; 
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {};

function ContactMe({}: Props) {
    const { 
        register, 
        handleSubmit, 
    } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:lachlan839@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. I'd just like to say ${formData.message} (${formData.email})`;
    };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
              Contact
          </h3>


      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need.{" "}
            <span className='decoration-[#F7AB0A]/50 underline'>Yo Mama.</span>
        </h4>

        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className='text-2xl'>+1234567890</p>
            </div>
        </div>

            <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className='text-2xl'>lachlan839@gmail.com</p>
        </div>

        <div>
            <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className='text-2xl'>96 Delamere St, Canley Vale</p>
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input {...register('name')} className="contactInput" type="text" placeholder='Full Name'/>
                <input {...register('email')} className="contactInput" type="text" placeholder='Email'/>
            </div>

            <input {...register('subject')} className="contactInput" type="text" placeholder="Subject"/>

            <textarea {...register('message')} placeholder="Message" className="contactInput" />
            <button placeholder="Submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
             Submit</button>
        </form>
    </div>
    </div>
  )
}

export default ContactMe