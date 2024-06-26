import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:pratamabusiness@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-12 m-auto pl-6 text-center text-xl uppercase tracking-[20px] text-gray-500 md:pl-0 md:text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-10 pt-[4.5rem] md:pt-0">
        <h4 className="text-center text-lg font-semibold md:text-4xl xl:text-4xl">
          I have got just what you need.{" "}
          <span className="animate-pulse underline decoration-[#F7AB0A]/50">
            Lets Talk.
          </span>
        </h4>

        <div className="space-y-1 md:space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <a
              target="_blank"
              href="https://wa.link/fg4vns"
              rel="noopener noreferrer"
            >
              <p>+62-859-7326-1973</p>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p>pratamabusiness@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p>Banjarbaru, South Kalimantan.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-full flex-col space-y-1"
        >
          {/* <div className='flex md:flex-col space-x-2 '> */}
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
          {/* </div> */}

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="animate-pulse rounded-md bg-[#F7AB0A] px-10 py-3 text-lg font-bold text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
