import { BsMessenger } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_f2yifp7",
        "template_9nmqra5",
        form.current,
        "U1vdCeqSAwB8jZiiU"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-yellow-500 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5 "
          >
            <input name="name" type="text" placeholder="Your Name" required />
            <input
              type="email"
              placeholder="Your Email Address"
              name="email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              required
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            <div className="flex flex-row text-left gap-4 flex-wrap items-center">
              <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <BsMessenger />
              </div>
              <a
                href="https://m.me/chito.saba"
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-base text-sm  break-words hover:text-cyan-500 cursor-pointer"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
