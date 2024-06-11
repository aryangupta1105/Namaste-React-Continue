
const Contact = () =>{
    return(
        <div className=" w-10/12 max-w-[1440px] mx-auto flex flex-col items-center justify-center  " >
            <h1 className="w-full mt-5 font-bold text-[3rem] text-center mx-auto">Contact Us</h1>
            <div className="flex my-10 rounded-lg  gap-10 p-5 bg-yellow-400">
                <img src="https://th.bing.com/th/id/OIP.IuiDuwoWmTUj4kIZrM4ikQHaFV?rs=1&pid=ImgDetMain"></img>
            <form action="" className="form mx-auto w-[500px] flex flex-col items-center justify-center my-5 ">
                <div className="w-full text-lg p-2 flex border-b text-gray-600 shadow-lg mb-3  gap-5 bg-[#f0f0f0df]">
                    <label for="name" className="text-xl font-bold w-4/12">Name </label>
                    <input type="text" className="bg-transparent w-8/12 px-5 outline-none" placeholder="Enter Your Name" id="name"></input>
                </div>
                <div className="w-full text-lg p-2 flex border-b text-gray-600 shadow-lg mb-3  gap-5 bg-[#f0f0f0df]">
                    <label for="Email" className="text-xl font-bold w-4/12">Email </label>
                    <input type="text" className="bg-transparent w-8/12 px-5 outline-none" placeholder="Enter Your Email" id="Email"></input>
                </div>
                <div className="w-full text-lg p-2 flex border-b text-gray-600 shadow-lg mb-3  gap-5 bg-[#f0f0f0df]">
                    <label for="contactno" className="text-xl font-bold w-4/12">Contact Number </label>
                    <input type="text" className="bg-transparent w-8/12 px-5 outline-none" placeholder="Enter Your contact number" id="contactno"></input>
                </div>
                <div className="w-full text-lg p-2 flex border-b text-gray-600 shadow-lg mb-3 items-center gap-5 bg-[#f0f0f0df]">
                    <label for="Message" className="text-xl font-bold w-4/12">Message </label>
                    <textarea  rows="10" className=" w-8/12 px-5 bg-transparent outline-none" placeholder="Enter Your Message" id="Message"></textarea>
                </div>
                <button type="submit"
                className="border p-2 px-4 bg-black rounded-lg transition-all duration-300  hover:bg-white text-white hover:text-black ">Submit</button>
            </form>
            
            </div>
        </div>

    )
} 


export default Contact;