import { useFormik } from 'formik'
import type { NextPage } from 'next'
import { v4 as uuidv4 } from 'uuid';

import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import SelectInput from '../components/input/SelectInput'
import TextInput from '../components/input/TextInput'
import StringController from '../util/StringController'
import { ValidationSchema } from '../validation/validation'
import UbiScoreCarousel from '../components/Carousel';
import UniscoreLogo from '../components/Logo';
import FlexiButton from '../components/FlexiButton';

const initialValues = {
  organization_website: '',
  work_email: '',
  name:'',
  questionaire_about_us:''
};

const selectOptions = [{id:uuidv4(),value:'google'},{id:uuidv4(),value:'facebook'}]
const Home: NextPage = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const formik = useFormik({
    initialValues,
    validationSchema:ValidationSchema,
    validateOnBlur: true,
    onSubmit: (values) =>
      handleSubmitToServer(StringController.sanitizeObject(values, ['password'])),
  });

  const { handleSubmit, isValid, handleReset } = formik;
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * send the form body to the server using fetch | axios | graphql mutation
   * @param values 
   */
  const handleSubmitToServer = (values:Record<string, unknown>) => {
    setIsLoading(true);
    // remove trailing spaces from key value pairs
   const body = StringController.sanitizeObject(values)
    setTimeout(() => {
      console.log(body)
      setIsSubmitted(true)
      setIsLoading(false);

    },3000)
  
  };

  const goBack = (e:any)=>{
    setIsSubmitted(false)
    handleReset(e);
  }

  return (
    <div>
      <Head>
        <title>Uniscore challenge - Submittion by Aniefiok Akpan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

   
      <main>
      <div className="w-full flex flex-col md:flex-row  ">
      <div className='md:w-2/4 md:min-h-screen py-6  bg-th-primary 
      conical-image bg-no-repeat md:px-10 px-2 md:pt-12 pt-6 w-full'>
        <div className='flex pt-20  md:pb-4 mb-12 md:pl-12 ml-2 flex-col md:items-center  md:flex-row
          md:space-x-3.5 space-y-2.5 md:w-4/5'>
                 
       <UbiScoreCarousel />

      </div>
      </div>
      <div className='md:w-2/4 mx-auto md:px-12 md:pt-0 md:pb-4 pb-12 w-11/12 '>
        <div className='bg-white rounded-b-xl  drop-shadow-xl md:filter-none md:px-6 px-4 md:pt-10 pb-6 py-8'>
          <div className='w-3/4 pb-8 md:pb-12 md:pl-4' >
          <UniscoreLogo />
          </div>
        {!isSubmitted ?<div className='w-3/4 pb-4 md:pb-8 md:pl-4 space-y-2' >
          <h1 className='text-black text-2xl font-bold'>Signup</h1>
          <p className='text-black opacity-50 font-outfit 
          font-normal md:text-sm'>Amet minim mollit non deserunt ullamco est sit aliqua dolor </p>
        </div>:
        (<div className='w-3/4 pb-4 md:pb-8 md:pl-4 space-y-2' >
          <h1 className='text-black text-2xl font-bold'>Thank You...</h1>
          <p className='text-black opacity-50 font-outfit 
          font-normal md:text-sm pt-10'>Amet minim mollit non deserunt ullamco est sit aliqua dolor </p>
          <FlexiButton onClick={(e)=>goBack(e)} className="hover:bg-blue-400 Get started text-center
      hover:text-white text-xs mt-3 text-white bg-button w-3/5">
        Back to Home
      </FlexiButton>

         <div className="text-label text-xs font-normal tracking-tight space-x-2">
          <span>Questions? Email us </span>   
            <a className={`text-blue-400 underline underline-offset-1`}>
            help@ubiscore.com
           </a>
           
          </div>
        </div>)
        }

          
       { !isSubmitted && <form className='w-full space-y-3 px-2' onSubmit={handleSubmit}>
        <TextInput
          type={'text'}
          name={'organization_website'}
          formik={formik}
          placeholder={'https://www.example.com'}
          label={'Organization Website URL'}
        />
        <TextInput
          type={'text'}
          name={'work_email'}
          formik={formik}
          placeholder={'mario.rossi@ubiscore.com'}
          label={'Work Email'}
        />
         <TextInput
          type={'text'}
          name={'name'}
          formik={formik}
          placeholder={'Mario Rossi'}
          label={'name'}
        />

        <SelectInput
          name={'questionaire_about_us'}
          formik={formik}
          options={selectOptions}
          label={'How did you hear about us?'}
        />

      <div className="flex pb-4">
        <label className="md:w-2/3 text-gray-500 font-bold cursor-pointer  flex">
          <input className="opacity-0 hidden
           " type="checkbox"/>
           <div className="bg-white border mr-2
           rounded-sm border-label w-5 h-5 flex flex-shrink-0 justify-center items-center 
            focus-within:border-label ">
            <svg className="fill-current hidden w-3 h-3 text-success-600 pointer-events-none" 
            version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-9 -11)" fill="#ABABAB" fillRule="nonzero">
              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
              </g>
            </g>
            </svg>
	        </div>
          <span className="text-label text-xs font-normal tracking-tight space-x-2">
          <span>Read and agree</span>   
          <Link href={'/terms'}>
            <a className={`text-blue-400 underline underline-offset-1`}>
              Terms and Conditions.
           </a>
            </Link>
           
          </span>
        </label>
      </div>


      <FlexiButton 
      type={'submit'}
      disabled={!isValid}
      isLoading={isLoading}
      className="hover:bg-blue-400 Get started text-center
      hover:text-white text-xs mt-3 text-white bg-button w-3/5">
        Get started now
      </FlexiButton>

         <div className="text-label text-xs font-normal tracking-tight space-x-2">
          <span>Already have an account? </span>   
          <Link href={'/login'}>
            <a className={`text-blue-400 underline underline-offset-1`}>
            LogIn
           </a>
            </Link>
           
          </div>

      <br />

    
    </form>
       }
        </div>
     </div>
      </div>          
      </main>
    </div>
  )
}

export default Home
