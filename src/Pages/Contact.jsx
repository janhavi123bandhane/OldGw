import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
let Contact = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center mt-[-10rem]">
          <img
            src="Genzaire_Wardrobe-removebg-preview.png"
            className=" w-50 h-50 position:sticky"
          ></img>
        </div>
        <span className="flex justify-center">
          <div className="text-xl text-[#454411]  mt-[-6rem] font-abc">
            Contact Us
          </div>
        </span>
        <div className="font-abc">
          <div className="xl:flex xl:flex-row xl:justify-center  lg:flex lg:flex-row lg:justify-center  md:flex md:flex-row md:justify-center  flex flex-row justify-center  pt-8 text-[#42412a] ml-[2rem]">
            <BsInstagram className="text-6xl hover:scale-110"></BsInstagram>
            <BsWhatsapp className="text-6xl md:ml-[15rem] ml-[3rem]  hover:scale-110"></BsWhatsapp>
            <HiOutlineMail className="text-7xl md:ml-[15rem] ml-[3rem] mt-[-0.3rem]  hover:scale-110"></HiOutlineMail>
          </div>
          <div className="flex justify-center mt-20">
            <div className="bg-[#d9d9d9] md:w-[60rem] md:h-96 h-[58rem] text-[#454411] ">
              <p className="md:ml-[3rem] md:mr-[3rem] ml-[1rem] mr-[1rem] mt-[2rem]">
                Connect with Genzaire Wardrobe instantly through WhatsApp for
                quick and efficient support. Whether you have questions about
                our products, need assistance with an order, or just want to
                chat, our team is ready to assist you on WhatsApp.
              </p>
              <p className="md:ml-[3rem] md:mr-[3rem] ml-[1rem] mr-[1rem] mt-[2rem]">
                Drop Genzaire Wardrobe an email at [insert email address] for a
                more detailed inquiry or if you prefer a written communication.
                Our team monitors our email inbox regularly and will get back to
                you as soon as possible with the information or assistance you
                need.
              </p>
              <p className="md:ml-[3rem] md:mr-[3rem] ml-[1rem] mr-[1rem] mt-[2rem] ">
                Follow Genzaire Wardrobe on Instagram and send us a direct
                message for a social touch. Stay updated on our latest
                collections, promotions, and interact with us on a platform you
                love. Our Instagram handle is [insert handle].
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
