import React, { useState } from 'react'

export default function ContactForm() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [desc, setDesc] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch(`/api/postcontact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname, lname, phone, email, desc
            })
        })
        .then(response => response.text())
        .then(data => {
            alert("Thanks for contacting us!! Your message was successfully sent!");
            setFname('');
            setLname('');
            setPhone('');
            setEmail('');
            setDesc('');
        })
        .catch((err) => {
            alert("Oops! There was an error sending your message. Please try again later!")
        })
    }
    
    const handleChange = (e) => {
        if(e.target.name === 'fname') {
            setFname(e.target.value);
        } else if(e.target.name === 'lname') {
            setLname(e.target.value);
        } else if(e.target.name === 'phone') {
            setPhone(e.target.value);
        } else if(e.target.name === 'email') {
            setEmail(e.target.value)
        } else if(e.target.name === 'desc') {
            setDesc(e.target.value)
        }
    }

  return (
    <>
    <h1 className='italic text-2xl'>We would love to hear from you</h1>
    <form className="w-full max-w-lg text-center m-auto block" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="fname">
                First Name
            </label>
            <input required id="fname" name="fname" type="text" value={fname} placeholder="Jane" onChange={handleChange} className="appearance-none block w-full bg-gray-300 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="lname">
                Last Name
            </label>
            <input name="lName" id="lname" type="text" value={lname} placeholder="Doe" onChange={handleChange} className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="phone" >
                Phone
            </label>
            <input type="phone" pattern="[0-9]{10}" name="phone" id="phone" value={phone} placeholder="8253909049" onChange={handleChange} className="appearance-none block w-full bg-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
            <p className="text-xs italic">Your 10 digit phone number without country code</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="email" >
                E-mail
            </label>
            <input required id="email" type="email" name="email" value={email} placeholder="abc@gmail" onChange={handleChange} className="appearance-none block w-full bg-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
            <p className="text-xs italic">We will never share your email with others.</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="desc">
                Message
            </label>
            <textarea id="desc" name="desc" value={desc} onChange={handleChange} className="no-resize appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"></textarea>
            <p className="text-xs italic">Anything you want to say to us.</p>
            </div>
        </div>
        <button className="shadow bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-8 rounded" type="submit">
            Send
        </button>
    </form>
    </>
  )
}
