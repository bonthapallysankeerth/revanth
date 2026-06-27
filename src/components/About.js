import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  Dumbbell,
  Users,
  Trophy
} from "lucide-react";

import aboutBg from "../assets/images/aboutbackground.jpg";



const values = [

  {
    icon: Sparkles,
    title: "Skill Development",
    desc:
      "Rigorous batting, bowling, and fielding drills using high-end training gear and video analysis.",
    color: "text-cricket-gold"
  },


  {
    icon: Shield,
    title: "Discipline & Mindset",
    desc:
      "Instilling sportsmanship, focus, punctuality, and strategic thinking under pressure.",
    color: "text-cricket-vibrant"
  },


  {
    icon: Dumbbell,
    title: "Athletic Fitness",
    desc:
      "Strength, agility, speed, and endurance programs designed for modern cricket demands.",
    color: "text-cricket-gold"
  },


  {
    icon: Trophy,
    title: "Confidence & Growth",
    desc:
      "Match exposure, league participation, and mental preparation for competitive cricket.",
    color: "text-cricket-vibrant"
  }

];




function About(){



const containerVariants = {

hidden:{
opacity:0
},

visible:{

opacity:1,

transition:{
staggerChildren:0.15
}

}

};





const cardVariants = {


hidden:{

opacity:0,
y:30

},


visible:{

opacity:1,
y:0,


transition:{
type:"spring",
stiffness:60
}

}

};






return (

<section

id="about"

className="
py-24
relative
overflow-hidden
bg-cover
bg-center
"

style={{

backgroundImage:

`linear-gradient(
rgba(0,0,0,0.78),
rgba(0,0,0,0.88)
),
url(${aboutBg})`

}}


>





{/* Background Glow */}


<div

className="
absolute
top-1/2
left-1/4
w-[300px]
h-[300px]
bg-green-500/10
rounded-full
blur-[120px]
"

/>



<div

className="
absolute
bottom-0
right-10
w-[250px]
h-[250px]
bg-yellow-400/10
rounded-full
blur-[100px]
"

/>







<div

className="
max-w-7xl
mx-auto
px-5
relative
z-10
"

>





{/* Header */}



<div className="
text-center
max-w-3xl
mx-auto
mb-16
">


<motion.div


initial={{
opacity:0,
y:20
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}



className="
flex
justify-center
items-center
gap-2
mb-4
"


>


<Users className="
text-yellow-400
w-5
h-5
"/>


<span className="
text-yellow-400
font-bold
tracking-widest
uppercase
text-sm
">

About The Academy

</span>


</motion.div>








<motion.h2


initial={{
opacity:0,
y:20
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


className="
text-4xl
md:text-6xl
font-black
text-white
"


>


NURTURING THE NEXT GENERATION


</motion.h2>






<div

className="
h-1
w-28
bg-yellow-400
mx-auto
mt-6
rounded-full
"

/>


</div>








{/* Content */}




<div className="
grid
lg:grid-cols-12
gap-12
items-center
"

>







{/* Left */}



<motion.div


initial={{
opacity:0,
x:-40
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}



className="
lg:col-span-6
"


>



<h3 className="
text-3xl
font-black
text-white
mb-5
">


Professional Coaching Built Around Elite Values


</h3>






<p className="
text-gray-300
leading-relaxed
mb-6
">


Professional cricket coaching focused on skill development,
discipline, fitness, confidence and future champions.


</p>





<p className="
text-gray-400
mb-8
">


At MR Firstgen, we provide modern cricket training methods,
match exposure, fitness programs and professional guidance
to help young players achieve their goals.


</p>









{/* Founder */}



<div

className="
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-5
flex
gap-5
items-center
"


>


<div className="
flex
-space-x-3
">


<div className="
w-12
h-12
rounded-full
bg-green-700
border-2
border-yellow-400
flex
items-center
justify-center
text-white
font-bold
">

BR

</div>



<div className="
w-12
h-12
rounded-full
bg-green-700
border-2
border-yellow-400
flex
items-center
justify-center
text-white
font-bold
">

VM

</div>


</div>





<div>


<p className="
text-yellow-400
text-xs
font-bold
uppercase
">

Founded & Managed By

</p>



<h4 className="
text-white
font-bold
mt-1
">


Battula Revanth Kumar &
Vallepu Murthy


</h4>



<p className="
text-gray-400
text-xs
">


A joint initiative to inspire young cricketers.


</p>



</div>



</div>






</motion.div>









{/* Cards */}



<motion.div


variants={containerVariants}

initial="hidden"

whileInView="visible"

viewport={{
once:true
}}



className="
lg:col-span-6
grid
sm:grid-cols-2
gap-6
"


>



{

values.map((val)=> (



<motion.div


key={val.title}


variants={cardVariants}


className="
bg-white/10
backdrop-blur-lg
border
border-white/10
rounded-2xl
p-6
hover:border-yellow-400/40
transition
"


>



<div className="
p-3
bg-green-900/50
rounded-xl
w-fit
mb-4
">


<val.icon

className={`w-7 h-7 ${val.color}`}

/>


</div>





<h4 className="
text-white
font-bold
text-xl
mb-2
">


{val.title}


</h4>




<p className="
text-gray-400
text-sm
">


{val.desc}


</p>



</motion.div>



))


}





</motion.div>






</div>





</div>







</section>


);



}


export default About;