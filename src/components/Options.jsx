import { useState } from "react";
import { RxCross1 } from "react-icons/rx";


let Options=()=>{
    
        // const [ContentVisible, setContentVisible] = useState(true);
    
        // const handleToggleContent = () => {
        //     setContentVisible(!ContentVisible);
        // };
    
    return(
        <>
        <div className={`absolute w-full h-[100rem] bg-[#d9d9d9] mt-[3.5rem] bg-opacity-70 text-[#454411] font-semibold font-abc`} >
            <span className=""  > 
        <RxCross1 className="text-3xl"></RxCross1>   
       
           </span>
          
         <div className="flex flex-col items-center text-4xl" >
        
          <a className="mt-48">New Stock</a>
          <a className="mt-10">Old Stock</a>
          <a className="mt-10">About Us</a>
          <p className="mt-10">Contact</p>
         </div>

        </div>
        </>
    )
}
export default Options;