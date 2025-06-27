const ContentBar = () => {
  return (
    <aside className="min-h-[100vh] w-[20rem] shadow-2xl ">
      {/* Header */}
      <div className="h-[15rem]  flex justify-center items-center p-5">
        <div className="w-[100%] h-[15rem] flex justify-center items-center  shadow-2xl">
          <p className="text-5xl">J</p>
        </div>
      </div>

      <div className="h-[5rem] flex justify-center items-center p-5 mt-10">
        <button className="h-[3rem] w-[100%] border rounded cursor-pointer">
          Create
        </button>
      </div>
   {/* Content Side */}
      <div className=" h-[30rem] p-5">
       <div className="w-[100%] h-[30rem] border">
        asdad
       </div>
      </div>

      {/* Logout */}
      
     <div className="mt-10 h-[4rem] flex justify-center items-center p-5">
         <button className="border w-[100%] h-[2rem] rounded cursor-pointer">Logout</button>
     </div>
    </aside>
  );
};

export default ContentBar;
