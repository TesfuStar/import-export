import React from "react";
import { Link } from "react-router-dom";
import two from "../assets/2.webp";
import { Input, Textarea } from "@chakra-ui/react";
import { IoLogoTwitter } from "react-icons/io";
const Contact = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${two})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "270px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
        <div className="absolute z-30 top-1/4 flex flex-col items-start w-full">
          <div className="max-w-6xl mx-auto  w-full grid grid-cols-1 md:grid-cols-2 gap-3 space-y-2 p-5 ">
            <div className="flex flex-col items-start space-y-2">
              <h1 className="font-semibold text-white text-4xl">Contact Us</h1>
              <p className="text-dark-gray font-medium text-sm">
                <Link to="/home" className="text-secondary-color">
                  Home
                </Link>{" "}
                /Contact Us
              </p>
            </div>
            <div className="flex items-start justify-start md:items-end md:justify-end max-w-lg">
              <p className="text-white font-medium text-lg text-start md:text-end">
                We freight all over the world.The best logistics company,{" "}
                <span className="text-main-color">FAST</span> and{" "}
                <span className="text-main-color">SAFELY</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* we are allway with you */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 py-10 p-5">
        <div className="md:col-span-8 flex flex-col items-start space-y-4 w-full">
          <div className="flex flex-col items-start space-y-2 w-full">
            <h1 className="font-medium text-dark-color text-lg md:text-xl">
              We are always with <span className="text-main-color">you :)</span>
            </h1>
            <img src={two} alt="" className="w-full h-64 object-cover" />
          </div>
          {/* form */}
          <div className="w-full">
            <div className="flex flex-col items-start space-y-1">
              <h1 className="font-medium uppercase text-xl md:text-2xl text-dark-color">
                Quick feedback form
              </h1>
              <div className="w-16 h-[3px] bg-main-bg" />
            </div>
            <form
              action=""
              className="w-full pt-3 flex flex-col items-start space-y-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                <Input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your Name"
                  fontWeight={500}
                  color={"#737b8b"}
                />
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Company"
                  fontWeight={500}
                  color={"#737b8b"}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                <Input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your Email"
                  fontWeight={500}
                  color={"#737b8b"}
                />
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone"
                  fontWeight={500}
                  color={"#737b8b"}
                />
              </div>
              <Textarea
                placeholder="Your Message"
                fontWeight={500}
                color={"#737b8b"}
              ></Textarea>
              <button
                className="font-medium bg-main-bg p-2 px-5
               text-white rounded-md hover:opacity-80"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* grid two */}
        <div className="md:col-span-4 bg-[#f7f7f7] rounded-md h-fit pb-5">
          <div className="bg-main-bg p-2 rounded-t-md">
            <h1 className="font-medium text-white">Main Office</h1>
          </div>
          <div className="flex flex-col items-start space-y-2 p-3">
            <div className="flex items-start space-x-2">
              <IoLogoTwitter className="text-main-color" />
              <div className="flex flex-col items-start ">
                <p className="font-medium text-dark-color">Address</p>
                <p className="text-sm text-dark-gary">
                  Addis Ababa - Ethiopia Dembel City Center - Second Floor
                </p>
              </div>
            </div>
            {/* email */}
            <div className="flex items-start space-x-2">
              <IoLogoTwitter className="text-main-color" />
              <div className="flex flex-col items-start ">
                <p className="font-medium text-dark-color">Email</p>
                <p className="text-sm text-dark-gary">
                 admin@gmail.com
                </p>
              </div>
            </div>
            {/* phone */}
            <div className="flex items-start space-x-2">
              <IoLogoTwitter className="text-main-color" />
              <div className="flex flex-col items-start ">
                <p className="font-medium text-dark-color">Phone</p>
                <p className="text-sm text-dark-gary">
               +251944719460
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="flex items-center justify-center p-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.797199594374!2d38.784172653678205!3d8.990800446543043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d3e5f25f15%3A0x81f8b24b65d0a26d!2sAfrosweden%20Real%20Estate!5e0!3m2!1sam!2set!4v1657196923630!5m2!1sam!2set"
          width="100%"
          height="400"
          allowfullscreen=""
          loading="lazy"
          title="map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
