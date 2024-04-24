'use client';
import styles from './page.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RiSendPlaneFill } from 'react-icons/ri';
import { ReactNode } from 'react';
import emailjs from '@emailjs/browser';
import { useModal } from '@/context/showModal';
import { inter, righteous } from '@/utils/fonts';

import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const contactList = [
  {
    name: 'Whatsapp',
    link: 'https://wa.me/6285333416372',
    icon: () => <FaWhatsapp />,
  },
  {
    name: 'Email',
    link: 'mailto:hrofiyani@gmail.com',
    icon: () => <MdOutlineEmail />,
  },
];

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID_EMAIL as string;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAIL as string;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAIL as string;

type Input = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
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
    <div className={styles['contact']}>
      <h2 className={righteous.className}>Contact Me</h2>
      <div className={styles['contact-list']}>
        {contactList.map((list) => (
          <a
            key={list.name}
            className={styles['list']}
            href={list.link}
            target='_blank'
          >
            {list.icon()}
            <span>{list.name}</span>
          </a>
        ))}
      </div>
      <div className={styles['separator']}>
        <div></div>
        <span> or </span>
        <div></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Your Name'
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
        <input
          type='email'
          placeholder='Your Email Address'
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
        <textarea
          className={inter.className}
          placeholder='Your Message'
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
        <button
          type='submit'
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
        </button>
      </form>
    </div>
  );
};

const ErrorMsg = ({ children }: { children: ReactNode }) => {
  return <span className={styles['err-message']}>{children}!</span>;
};

export default Contact;
