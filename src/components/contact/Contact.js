import React,{useState} from 'react'
import Title from '../layouts/Title'
import ContactLeft from './ContactLeft'


const Contact = () => {

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSendMessage=(e)=>{
  e.preventDefault()
  if (username === "") {
    setErrMsg("Username is required!");
  } else if (phoneNumber === "") {
    setErrMsg("Phone number is required!");
  } else if (email === "") {
    setErrMsg("Please Enter your valid Email!");
  } 
  else if (!emailValidation(email)) {
    setErrMsg("Please Enter your valid Email!");
  }
   else if (subject === "") {
    setErrMsg("Please provide your Subject!");
  } else if (message === "") {
    setErrMsg("Message is required!");
  } else {
    setSuccessMsg(
      `Thank you dear ${username}, Your Messages has been sent Successfully!`
    );
    setErrMsg("");
    setUsername("");
    setPhoneNumber("");
    setEmail("");
    setSubject("");
    setMessage("");
  }
};

  return (


    <section id='contact' className='w-full py-20 border-b-[1px] border-b-black'>
<div className='flex justify-center items-center text-center'>
<Title title ='CONTACT' des='Contact with Me'/>
</div>
<div className='w-full'>
  <div className='w-full h-auto flex justify-between'>
  <ContactLeft/>
<div className='w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8  '>
<form className='w-full flex flex-col gap-6 py-2'>
{errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
 {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
<div className='w-full flex gap-10'>
  <div className='w-1/2 flex flex-col gap-4'>
  <p className='text-sm text-gray-400 uppercase tracking-wide'>YOUR NAME</p>
  <input onChange={(e)=>setUsername(e.target.value)}
  value={username}
  className={`${
    errMsg === "Username is required!" &&
    "outline-designColor"
  } contactInput`}
  type='text'/>
  </div>
  <div className='w-1/2 flex flex-col gap-4'>
  <p className='text-sm text-gray-400 uppercase tracking-wide'>PHONE NUMBER</p>
  <input onChange={(e) => setPhoneNumber(e.target.value)}
    value={phoneNumber}
    className={`${
      errMsg === "Phone number is required!" &&
      "outline-designColor"
    } contactInput`}
  type='text'/>
  </div>
</div>
<div className='flex flex-col gap-4'>
<p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>
  <input 
   onChange={(e) => setEmail(e.target.value)}
   value={email}
   className={`${
    errMsg === "Please Enter your valid Email!" &&
    "outline-designColor"
  } contactInput`}
  type='email'/>
</div>
<div className='flex flex-col gap-4'>
<p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
  <input 
    onChange={(e) => setSubject(e.target.value)}
    value={subject}
    className={`${
      errMsg === "Please provide your Subject!" &&
      "outline-designColor"
    } contactInput`}
  type='text'/>
</div>
<div className='flex flex-col gap-4'>
<p className='text-sm text-gray-400 uppercase tracking-wide'>Message</p>
  <textarea
   onChange={(e) => setMessage(e.target.value)}
   value={message}
   className={`${
    errMsg === "Message is required!" && "outline-designColor"
  } contactTextArea`}
  cols='30' rows='8'></textarea>
</div>
<div className='w-full'>
  <button onClick={handleSendMessage} className='w-full h-12 bg-[#141518] rounded-lg text-base
  text-gray-400 tracking-wider uppercase hover:text-white duration-300
  hover:border-[1px] hover:border-designColor border-transparent'>Send Message</button>
</div>
{errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
 {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
</form>
</div>
  </div>

</div>
    </section>
  )
}

export default Contact