
const Email = () => {
    return (
    <div className="md:w-[1200px] md:h-[370px] px-5 md:px-0">
        <div className=" bg-white  md:w-[1100px] md:h-[364px]   flex flex-col md:justify-center md:items-center space-y-4 mt-10">
          <h1 className="md:w-[571px] md:text-center text-[#2A254B] font-clash md:text-[36px]  font-normal">
            Join the club and get the benefits
          </h1>
          <div className="md:text-center">
            <p>Sign up for our newsletter and receive exclusive offers on new</p>
            <p>ranges sales pop up stores and more</p>
          </div>

          <div >
          <div className="flex  md:flex-row  mt-9 ">
          <input type="text" placeholder="your@email.com" className=" w-[200px] h-[45px] text-center" />
          <span className="w-[100px] h-[45px] text-sm  bg-[#2A254B] text-white flex justify-center items-center ">
           Sign Up
          </span>
          </div>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Email;

  


