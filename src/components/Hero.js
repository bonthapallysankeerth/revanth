import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";

import cricketImage from "../assets/images/cricket-player.jpg";


function Hero() {


  const handleScrollTo = (id) => {

    const section = document.querySelector(id);

    if(section){
      section.scrollIntoView({
        behavior:"smooth"
      });
    }

  };


  return (

    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >


      {/* Hero Background Image */}

      <img
        src={cricketImage}
        alt="Cricket Player"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />



      {/* Dark Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-black/70
        "
      />




      {/* Content */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        w-full
        "
      >



        <motion.div

          initial={{
            opacity:0,
            y:60
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.9
          }}

          className="
          max-w-3xl
          "
        >



          <h1
            className="
            text-5xl
            md:text-7xl
            font-black
            text-white
            leading-tight
            "
          >

            MR FIRSTGEN

            <br/>

            <span
              className="
              text-yellow-400
              "
            >

              CRICKET ACADEMY

            </span>


          </h1>





          <p
            className="
            mt-6
            text-xl
            md:text-2xl
            text-gray-200
            "
          >

            Where Future Champions Are Built 🏆


          </p>





          {/* Buttons */}


          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-5
            mt-10
            "
          >



            <button

              onClick={() => handleScrollTo("#contact")}

              className="
              px-8
              py-4
              rounded-full
              bg-yellow-400
              text-black
              font-bold
              flex
              items-center
              justify-center
              gap-2
              hover:scale-105
              transition
              "

            >

              Join Now

              <ChevronRight
                size={20}
              />


            </button>







            <button

              onClick={() => handleScrollTo("#contact")}

              className="
              px-8
              py-4
              rounded-full
              border
              border-white
              text-white
              font-bold
              flex
              items-center
              justify-center
              gap-2
              hover:bg-white
              hover:text-black
              transition
              "

            >


              <Calendar
                size={20}
              />


              Book Trial


            </button>




          </div>




        </motion.div>



      </div>




    </section>

  );

}


export default Hero;