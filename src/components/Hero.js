import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";

import cricketVideo from "../assets/images/cricket-video.mp4";


function Hero() {


  const handleScrollTo = (id) => {

    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }

  };


  return (

    <section
      id="home"
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      "
    >


      {/* Video Background */}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      >

        <source
          src={cricketVideo}
          type="video/mp4"
        />

      </video>



      {/* Overlay */}

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
            y:50
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

        >


          <h1
            className="
            text-5xl
            md:text-7xl
            font-black
            text-white
            "
          >

            MR FIRSTGEN

            <br/>

            <span className="text-yellow-400">

              CRICKET ACADEMY

            </span>


          </h1>



          <p
            className="
            mt-6
            text-xl
            text-gray-200
            "
          >

            Where Future Champions Are Built 🏆

          </p>




          <div
            className="
            flex
            gap-5
            mt-10
            flex-wrap
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
              gap-2
              "

            >

              Join Now

              <ChevronRight size={20}/>

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
              gap-2
              "

            >

              <Calendar size={20}/>

              Book Free Trial


            </button>



          </div>



        </motion.div>


      </div>



    </section>

  );

}


export default Hero;