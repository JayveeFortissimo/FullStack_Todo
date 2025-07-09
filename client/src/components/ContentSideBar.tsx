import { Pen } from "lucide-react";
import { LogOut } from "lucide-react";
import type { State } from "../interface/content.interface";
import { useContext } from "react";
import { contextContent } from "../context/CreateContext";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const ContentBar: React.FC<State> = ({ setBooleans, sideOpen }) => {
  const { logout, userProfile, allDataSide } = useContext(contextContent);
  const redirect = useNavigate();

  return (
    <div>
      <div className=" md:hidden absolute top-[2rem]">
        <Menu
          onClick={() =>
            setBooleans((pro) => ({ ...pro, sideOpen: !pro.sideOpen }))
          }
          size={40}
          className="cursor-pointer"
        />
      </div>
      <aside
        className={`min-h-[100vh] w-[17rem] shadow-2xl  md:block ${
          sideOpen ? "block" : "hidden"
        } z-50`}
      >
        {/* Header */}
        <div className="h-[15rem]  flex justify-center items-center p-5">
          <div className="w-[100%] h-[15rem] flex justify-center items-center  shadow-2xl">
            <p className="text-5xl">
              {userProfile ? userProfile.name.charAt(0) : "Loaading........."}
            </p>
          </div>
        </div>

        <div className="h-[5rem] flex justify-center items-center p-5 mt-10">
          <button
            onClick={() => setBooleans((pro) => ({ ...pro, Modal: true }))}
            className="h-[3rem] w-[100%] shadow-2xl rounded cursor-pointer bg-amber-400 hover:bg-amber-500 flex justify-center items-center gap-4"
          >
            Create
            <Pen />
          </button>
        </div>
        {/* Content Side */}
        <div className=" h-[30rem] p-5 flex flex-col gap-3">
          {allDataSide.map((pro) => {
            console.log(pro.title);
            return (
              <div
                key={pro.titleId}
                className="w-[100%] h-[3rem] border p-3 flex justify-center items-center rounded bg-stone-600 hover:bg-amber-400 text-white"
              >
                <p> {pro.title}</p>
              </div>
            );
          })}
        </div>

        {/* Logout */}

        <div className="mt-10 h-[4rem] flex justify-center items-center p-5">
          <button
            onClick={(e) => logout(e, redirect)}
            className="shadow-2xl w-[100%] h-[2rem] rounded cursor-pointer bg-stone-600 hover:bg-amber-500 text-white flex justify-center items-center "
          >
            <LogOut />
          </button>
        </div>
      </aside>
    </div>
  );
};

export default ContentBar;
