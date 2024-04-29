import React from 'react'

const Grid = () => {
    return (
        <div className=' flex justify-center'>
            <div className=" -mt-24 w-[80%] z-30">
          <div className="grid md:grid-cols-2">
            <GridItem title="Our Mission" text="We aim to improve lives with impactful interventions. Learn more about what we do and why we do it." buttonText="Read More" backgroundColor="bg-purple-600" />
            <GridItem title="Take a Pledge" text="Join us in our commitment to making a difference. Your pledge can help change lives." buttonText="Support Us" backgroundColor="bg-rose-600" />
            <GridItem title="Volunteer" text="Dedicate your time and skills to help us on the ground. Your efforts are invaluable to us." buttonText="Volunteer" backgroundColor="bg-orange-600" />
            <GridItem title="Subscribe" text="Stay updated with our latest activities and impacts. Subscribe to our newsletter today." buttonText="Subscribe" backgroundColor="bg-green-600" />
          </div>
        </div>
        </div>
      );
    }




export default Grid



const GridItem = ({ title, text, buttonText, backgroundColor }) => {
    return (
      <div className={`${backgroundColor} p-4 h-[343px] shadow-md z-30 flex flex-col justify-center items-center`}>
        <h2 className="font-bold text-3xl text-white mb-7">{title}</h2>
        <p className="mb-4 text-center text-xl text-white">{text}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    );
  }