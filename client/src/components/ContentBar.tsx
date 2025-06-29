import { Pen } from "lucide-react";
import { LogOut } from "lucide-react";
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
        <button className="h-[3rem] w-[100%] shadow-2xl rounded cursor-pointer bg-amber-400 hover:bg-amber-500 flex justify-center items-center gap-4">
          Create
          <Pen />
        </button>
      </div>
      {/* Content Side */}
      <div className=" h-[30rem] p-5">
        <div className="w-[100%] h-[30rem] border p-3">asdad</div>
      </div>

      {/* Logout */}

      <div className="mt-10 h-[4rem] flex justify-center items-center p-5">
        <button className="shadow-2xl w-[100%] h-[2rem] rounded cursor-pointer bg-stone-600 hover:bg-amber-500 text-white flex justify-center items-center ">
          <LogOut />
        </button>
      </div>
    </aside>
  );
};

export default ContentBar;
