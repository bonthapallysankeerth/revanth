import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  User,
  Calendar,
  Navigation
} from "lucide-react";


function Contact() {


  const [formData,setFormData] = useState({
    name:"",
    age:"",
    mobile:""
  });



  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };





  const openWhatsApp = ()=>{


    const message = 
`Hello MR Firstgen Cricket Academy 🏏

I'm interested to start training.

Name: ${formData.name}
Age: ${formData.age}
Mobile: ${formData.mobile}`;



    const whatsappURL =
    `https://wa.me/918897874006?text=${encodeURIComponent(message)}`;


    window.open(
      whatsappURL,
      "_blank"
    );


  };




  return (


<section

id="contact"

className="
py-24
min-h-screen
bg-gradient-to-b
from-black
via-green-950
to-black
"


>



<div className="
max-w-6xl
mx-auto
px-5
">





{/* Heading */}


<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

className="text-center mb-16"

>


<h2 className="
text-4xl
md:text-6xl
font-black
text-white
">

START YOUR JOURNEY

</h2>


<p className="
text-gray-300
mt-4
">

Book your free cricket trial today

</p>


</motion.div>







<div className="
grid
lg:grid-cols-2
gap-10
">







{/* LEFT CONTACT */}



<motion.div

initial={{opacity:0,x:-40}}

whileInView={{opacity:1,x:0}}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
"

>


<h3 className="
text-2xl
font-bold
text-white
mb-8
">

Academy Location

</h3>





<div className="space-y-6">



{/* Address */}


<div className="
flex
gap-4
text-white
">


<MapPin className="text-yellow-400"/>


<div>


<h4 className="font-bold">

MR Firstgen Cricket Academy

</h4>


<p className="
text-gray-300
text-sm
">

Sri Ramnagar Colony,
Suraram Village,
Hyderabad - 500055

</p>


</div>


</div>







{/* Phone */}


<div className="
flex
gap-4
text-white
">


<Phone className="text-yellow-400"/>


<p>

8897874006

</p>


</div>







{/* Google Map Button */}



<a


href="
https://www.google.com/maps/search/?api=1&query=MR+Firstgen+Cricket+Academy+Suraram+Hyderabad
"


target="_blank"

rel="noreferrer"


className="
w-full
py-4
rounded-full
bg-yellow-400
text-black
font-bold
flex
items-center
justify-center
gap-3
hover:scale-105
transition
"


>


<Navigation/>

Open Google Maps


</a>







{/* Map */}



<div className="
mt-6
rounded-2xl
overflow-hidden
border
border-white/10
">


<iframe


title="Academy Location"


src="
https://www.google.com/maps?q=Suraram+Hyderabad&output=embed
"


width="100%"


height="260"


style={{
border:0
}}


allowFullScreen=""


loading="lazy"


></iframe>



</div>





</div>



</motion.div>









{/* RIGHT FORM */}





<motion.div


initial={{opacity:0,x:40}}

whileInView={{opacity:1,x:0}}


className="
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
"


>



<h3 className="
text-2xl
font-bold
text-white
mb-6
">


Book Free Trial


</h3>






{/* Name */}


<div className="mb-5">


<label className="text-gray-300">

Name

</label>



<div className="
flex
items-center
bg-black/40
rounded-xl
mt-2
">


<User className="ml-4 text-yellow-400"/>


<input


name="name"


onChange={handleChange}


placeholder="Enter your name"


className="
w-full
bg-transparent
text-white
p-4
outline-none
"


/>


</div>



</div>









{/* Age */}



<div className="mb-5">


<label className="text-gray-300">

Age

</label>



<div className="
flex
items-center
bg-black/40
rounded-xl
mt-2
">


<Calendar className="ml-4 text-yellow-400"/>



<input


name="age"


onChange={handleChange}


placeholder="Enter age"


className="
w-full
bg-transparent
text-white
p-4
outline-none
"


/>


</div>


</div>








{/* Mobile */}




<div className="mb-8">


<label className="text-gray-300">

Mobile Number

</label>



<div className="
flex
items-center
bg-black/40
rounded-xl
mt-2
">


<Phone className="ml-4 text-yellow-400"/>


<input


name="mobile"


onChange={handleChange}


placeholder="Mobile number"


className="
w-full
bg-transparent
text-white
p-4
outline-none
"


/>



</div>


</div>








{/* WhatsApp */}




<button


onClick={openWhatsApp}


className="
w-full
py-4
rounded-full
bg-[#25D366]
text-white
font-bold
flex
items-center
justify-center
gap-3
hover:scale-105
transition
"


>


<MessageCircle/>


I'm Interested To Start Training


</button>





</motion.div>





</div>


</div>


</section>


  );

}



export default Contact;