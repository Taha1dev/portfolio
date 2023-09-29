import { useEffect, useRef, useState } from 'react';
import HyperOne from '../customH1/HyperOne';
import emailjs from '@emailjs/browser';
export default function ContactMe() {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_cnuk8aj',
        'template_klyj8ri',
        form.current,
        'lio_aMUhSkOeURXu0'
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    if (isMessageSent) {
      setTimeout(() => {
        setMessageSent(false); 
      }, 3000);
    }
  }, [isMessageSent]);
  return (
    <>
      <style jsx>{`
        .popup {
          position: fixed;
          top: 7%;
          right: 0;
          background-color: rgba(0, 0, 0, 0.6);
          padding:20px;
          color: var(--textColor)
          padding: 16px;
          border-radius: 4px;
        }
      `}</style>
      <div className="my-16">
        <HyperOne value={'Contact me'} />
      </div>
      <main
        id="contact"
        className="container mx-auto flex flex-col sm:flex-row justify-center items-center"
      >
        <section className="mx-8 sm:mx-16 flex flex-col max-w-xl">
          <h1 className="text-white font-bold text-5xl sm:text-7xl">
            Let&apos;s Connect!👉
          </h1>
          <p className="text-lg text-white mt-4">
            Together, we can transform your dreams into reality. Whether you
            have a groundbreaking idea or need assistance in building a project,
            I&apos;m here to bring your vision to life.
          </p>
        </section>
        <section className="flex flex-col mx-8 sm:mx-16 mt-8 sm:mt-0">
          <form ref={form} className="max-w-md mx-auto" onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                htmlFor="user_name"
                className="text-white font-semibold mb-2"
              >
                Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                className="w-full px-4 py-2 bg-mainBg text-white outline-none  border-transparent border-2 transition focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="from_name"
                className="text-white font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="from_name"
                type="email"
                name="from_name"
                className="w-full px-4 py-2 bg-mainBg text-white outline-none  border-transparent border-2 transition focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-white font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 bg-mainBg text-white outline-none  border-transparent border-2 transition focus:border-primary"
                rows="4"
                name="message"
              ></textarea>
            </div>
            <input
              className="bg-primary cursor-pointer text-white font-semibold py-2 px-4 "
              type="submit"
              value="Send Message"
            />
          </form>
        </section>
      </main>
      {isMessageSent && (
        <div className="popup">
          <p className="text-white">Message sent successfully! 💚✅</p>
        </div>
      )}
    </>
  );
}
