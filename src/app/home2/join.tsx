import Image from "next/image";

const Join = () => {
    return (
        <div className="relative">
            <Image src={'/join.png'} alt="joinimage" width={1440} height={360} />
            <div className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[40px] flex">
                <input type="text" placeholder="your@email.com" className="h-full w-2/3 text-center" />
                <span className="w-1/3 text-sm bg-[#2A254B] text-white flex justify-center items-center">
                    Sign Up
                </span>
            </div>
        </div>
    );
};

export default Join;

  