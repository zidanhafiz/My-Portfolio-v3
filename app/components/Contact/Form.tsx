'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import './form.scss';
import { RiSendPlaneFill } from 'react-icons/ri';
import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';
import emailjs from '@emailjs/browser';
import { useModal } from '@/context/showModal';
import { inter } from '@/utils/fonts';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID_EMAIL || 's';
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAIL || 's';
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAIL || 's';

type Input = {
  name: string;
  email: string;
  message: string;
};

const Form = ({ variants }: { variants: Variants }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Input>();

  const { setIsShow, setIsSuccess } = useModal();

  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      const response = await emailjs.send(serviceId, templateId, data, { publicKey });
      console.log(response.text);
      setIsShow(true);
      setIsSuccess(true);
    } catch (error) {
      setIsShow(true);
      setIsSuccess(false);
      console.error(error);
    }
  };

  return (
    <div className='form__container'>
      <motion.form
        className='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <motion.input
          className='form__input-name'
          type='text'
          placeholder='Your Name'
          variants={variants}
          disabled={isSubmitting}
          {...register('name', {
            required: 'Your name is required',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters long',
            },
            maxLength: {
              value: 22,
              message: 'Message must not exceed 22 characters',
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: 'Invalid input: Only letters are allowed',
            },
          })}
        />
        {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
        <motion.input
          className='form__input-email'
          type='email'
          placeholder='Your Email Address'
          variants={variants}
          disabled={isSubmitting}
          {...register('email', {
            required: 'Your email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
        <motion.textarea
          className={`${inter.className} form__input-message`}
          placeholder='Your Message'
          variants={variants}
          disabled={isSubmitting}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters long',
            },
            maxLength: {
              value: 200,
              message: 'Message must not exceed 200 characters',
            },
          })}
        />
        {errors.message && <ErrorMsg>{errors.message?.message}</ErrorMsg>}
        <motion.button
          type='submit'
          variants={variants}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Wait'
          ) : (
            <>
              <RiSendPlaneFill />
              Send
            </>
          )}
        </motion.button>
      </motion.form>
    </div>
  );
};

const ErrorMsg = ({ children }: { children: ReactNode }) => {
  return <span className='error-message'>{children}!</span>;
};

export default Form;
