import { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { toast } from "react-toastify";
import Hello from "../assets/hello.png";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return toast.error("All Fields should be filled");
    } else {
      setSent(true);
    }
  };

  return (
    <div className="px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] mt-[8em] pb-[20px] ">
      <h2 className="text-center mb-[1em] text-2xl font-bold text-zinc-600">
        Reach Out To Us Today
      </h2>
      <div
        className="flex justify-center w-[95%]  sm:w-[70%] m-auto"
        id="contact"
      >
        <div className="w-full">
          <div className="flex justify-center gap-[4em] flex-wrap">
            <div className="flex items-center justify-center gap-[15px] mb-[30px] hover:text-[#037ca8]">
              <AiOutlineMail className="text-2xl" />
              <a href="mailto:dita@dayatar.ac.ke">Email Us</a>
            </div>
            <div className="flex items-center justify-center gap-[15px] mb-[30px] hover:text-[#037ca8]">
              <AiOutlinePhone className="text-2xl" />
              <a href="tel:+254 708 569409">Call Us</a>
            </div>
          </div>
          {sent ? (
            <div className="my-[30px]">
              <div className="flex justify-center">
                <img src={Hello} alt="" />
              </div>
              <div>
                <h2 className="text-center my-[15px] text-xl font-bold">
                  Hello {name && name}. Thank you For Reaching out
                </h2>
                <p className="text-center">
                  We shall get back to you through your email
                </p>
              </div>
            </div>
          ) : (
            <form className=" w-full" onSubmit={handleSend}>
              <div className="flex flex-col gap-[15px] mb-[20px]">
                <label htmlFor="name" className="text-lg text-zinc-500">
                  Enter Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  id="name"
                  className="bg-transparent border-2 border-zinc-600 rounded-md p-[8px]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength={4}
                  maxLength={16}
                />
              </div>
              <div className="flex flex-col gap-[15px] mb-[20px]">
                <label htmlFor="email" className="text-lg text-zinc-500">
                  Enter Your Email
                </label>
                <input
                  type="email"
                  placeholder="email"
                  id="email"
                  className="bg-transparent border-2 border-zinc-600 rounded-md p-[8px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  minLength={4}
                  maxLength={18}
                />
              </div>
              <div className="flex flex-col gap-[15px] mb-[20px]">
                <label htmlFor="message" className="text-lg text-zinc-500">
                  Enter Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="2"
                  placeholder="your message"
                  className="bg-transparent border-2 border-zinc-600 rounded-md p-[8px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  minLength={5}
                  maxLength={150}
                ></textarea>
              </div>
              <button
                className="bg-[#037ca8] w-full p-[9px] rounded-lg text-zinc-100 hover:rounded-2xl"
                onClick={handleSend}
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
