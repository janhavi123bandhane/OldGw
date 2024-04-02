import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
function Footer(){
       
    function click(){
        
       
    }

    return(
        <>
        <div className="bg-[#d9d9d9]  w-[47.8rem] md:w-[79em] lg:w-[119rem] xl:w-[120rem] md:h-[35rem] h-[50rem] font-abc">
                <div className="xl:flex xl:flex-row xl:justify-center  lg:flex lg:flex-row lg:justify-center  md:flex md:flex-row md:justify-center  flex flex-wrap justify-between  text-[#42412a] ml-[2rem] ">
                   <div>
                       <div className="text-2xl font-semibold mb-4 md:pt-20 pt-10">Explore</div>
                       <a href="#" className="">Old collection</a><br/>
                       <a href="">New collection</a><br/>
                   </div>
                   <div>
                       <div className="text-2xl font-semibold md:ml-24  mb-4 md:pt-20 pt-10">About Us</div>
                       <a href="#" className="md:ml-24">About Brand</a><br/>
                       <a href="#"className="md:ml-24">Insta handle</a><br/>
                      
                   </div>
                
                <div>
                       <div className="text-2xl font-semibold md:ml-24  mb-4 md:pt-20 pt-10">Contact Us</div>
                       <a href="" className="md:ml-24">Contact Us</a><br/>
                       <a href="" className="md:ml-24">Insta handle</a><br/>
                       <a href="" className="md:ml-24">Email</a><br/>
                       <a href="" className="md:ml-24">Phone No.</a><br/>
                   </div>
                    
                   <div>
                       <div className="text-2xl font-semibold md:ml-24  mb-4 md:pt-20 pt-10">Help</div>
                       <a href="" className="md:ml-24">Contact Us</a><br/>
                       <a href="" className="md:ml-24">Insta handle</a><br/>
                       <a href="" className="md:ml-24">Email</a><br/>
                       <a href="" className="md:ml-24">Phone No.</a><br/>
                   </div>

                   </div>
                   <div className="xl:flex xl:flex-row xl:justify-center  lg:flex lg:flex-row lg:justify-center  md:flex md:flex-row md:justify-center flex flex-wrap pt-24 text-[#42412a] ml-[2rem]" >
                   <a className="text-3xl font-semibold">Social Media Handles</a>
                   </div>
                   <div className="xl:flex xl:flex-row xl:justify-center  lg:flex lg:flex-row lg:justify-center  md:flex md:flex-row md:justify-center  sm:flex sm:flex-col pt-8 text-[#42412a] ml-[2rem]" >
                   <a href="https://www.instagram.com/genzaire.wardrobe?igsh=NnQxZ2gyMGZkeXN1"><BsInstagram className="text-2xl ml-[0.2rem] hover:scale-150"></BsInstagram></a>
                   <a href="https://wa.me//9322560897"> <BsWhatsapp className="text-2xl md:ml-20 md:mt-[0.1rem] mt-[1rem] hover:scale-150"></BsWhatsapp></a>
                   <HiOutlineMail className="text-3xl md:mt-[-0.2rem] md:ml-20 mt-[1rem] hover:scale-150"></HiOutlineMail>
                  
                   </div>
                <div className="flex justify-center mt-16">
                      <p className="text-[0.8rem]">Copyright <a>&#169;</a> Genzaire Wardrobe All rights reserved</p>
                </div>
                
        </div>
        </>
    )
}
export default Footer;