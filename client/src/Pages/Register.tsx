const Register = () => {
  return (
    <section className="min-h-[100vh] flex justify-center items-center p-2 background1 ">
         {/* Try to understand this ha! */}
      <div className="fixed inset-0 bg-black/15 flex items-center justify-center p-3 backdrop-blur-sm"></div>
      
      <div className="min-h-[30rem] w-[35rem] shadow-2xl rounded p-3 bg-white/15 backdrop-blur-md  z-10 flex flex-col justify-between gap-3">
        <p className="text-3xl text-green-300">Register</p>
        <form className="flex flex-col justify-between gap-2">
          <div className="w-[100%] flex gap-3">
            <div className="w-[100%] ">
              <p className="text-[0.9rem] mb-2 text-white">Name</p>
              <input type="text" className="border h-[2rem] rounded w-[100%] pl-2 text-[0.9rem]" />
            </div>

            <div className="w-[100%]">
              <p className="text-[0.9rem] mb-2 text-white">Email</p>
              <input type="text" className="border h-[2rem] rounded w-[100%] pl-2 text-[0.9rem]" />
            </div>
          </div>

          <div className="w-[100%] flex gap-3">
            <div className="w-[100%] ">
              <p className="text-[0.9rem] mb-2 text-white">Age</p>
              <input
                type="number"
                className="border rounded h-[2rem] w-[100%] pl-2 text-[0.9rem]" 
              />
            </div>

            <div className="w-[100%] ">
              <p className="text-[0.9rem] mb-2 text-white">Address</p>
              <input type="text" className="border rounded h-[2rem] w-[100%] pl-2 text-[0.9rem]" />
            </div>
          </div>

          <div className="w-[100%] ">
            <p className="text-[0.9rem] mb-2 text-white">Start Date</p>
            <input type="date" className="border w-[100%] h-[2rem] pl-2 pr-2 text-[0.9rem] rounded" />
          </div>

          <div className="w-[100%] ">
            <p className="text-[0.9rem] mb-2 text-white">Image</p>
            <input
              type="file"
              name="images"
              className="border w-[100%] h-[2rem] pl-2 text-[0.9rem] rounded"
            />
          </div>

          <div className="w-[100%] ">
            <p className="text-[0.9rem] mb-2 text-white">Password</p>
            <input type="text" className="border w-[100%] h-[2rem] pl-2 text-[0.9rem] rounded" />
          </div>

          <div className="w-[100%] ">
            <p className="text-[0.9rem] mb-2 text-white">Confirm Password</p>
            <input type="text" className="border w-[100%] h-[2rem] pl-2 text-[0.9rem] rounded" />
          </div>

          <div className="mt-10 flex w-[100%] justify-between items-center">
            <button className="cursor-pointer w-[7rem] h-[2rem] rounded bg-green-400 text-[0.9rem] font-bold">Submit</button>
            <p className="text-[0.8rem] cursor-pointer">Have Account Already?</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
