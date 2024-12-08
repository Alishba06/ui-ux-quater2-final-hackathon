
const Feauter = () => {
    return (
      <div className="w-full h-auto flex flex-col md:flex-row bg-white">
       
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-[#2A254B] font-clash text-2xl md:text-3xl font-medium mb-4">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-[#6C6A7A] font-satoshi text-base leading-relaxed mb-6">
            When we started Avion the idea was simple. Make high quality furniture
            affordable and available for the mass market.
          </p>
          <p className="text-[#6C6A7A] font-satoshi text-base leading-relaxed mb-6">
            Handmade and lovingly crafted furniture and homeware is what we do. From
            bespoke pieces to timeless collections our Chelsea boutique became the
            hotbed for the London interior design community.
          </p>
          <button className="bg-white border w-[150px] h-[56px] rounded-sm  text-black left-[84px] mt-20">
          Get in touch
        </button>
        </div>
  
       
        <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <img
            src="/Features.png"
            alt="Sofa and Decoration"
            className="w-[700px] h-[500px] object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default Feauter;
  