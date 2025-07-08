import { Pen } from "lucide-react";
import { X } from "lucide-react";
import type { State } from "../../interface/content.interface";
import { useContext } from "react";
import { contextContent } from "../../context/CreateContext";

const Creation: React.FC<State> = ({ setBooleans }) => {
  const { sideValue, createtitle, create } = useContext(contextContent);

  return (
    <div className="min-h-[60vh]  w-[90%] md:w-[70%]  lg:w-[50%] bg-white fixed  rounded shadow-2xl p-5 z-50">
      <div className="h-[3rem]">
        <X
          className="cursor-pointer"
          onClick={() => setBooleans((pro) => ({ ...pro, Modal: false }))}
        />
      </div>
      <form onSubmit={(e) => create(e)} className="flex flex-col gap-4">
        <div>
          <p className="text-[1.4rem] md:text-2xl">Create Title</p>
          <input
            type="text"
            onChange={(e) => createtitle("title", e.target.value)}
            className="h-[3rem] border w-[100%] pl-3 pr-3 text-[1.3rem] mt-3 rounded"
            value={sideValue.title}
          />
        </div>

        <div>
          <p className="text-[1.4rem] md:text-2xl">Description</p>
          <textarea
            name="Description"
            onChange={(e) => createtitle("description", e.target.value)}
            className="border w-[100%] h-[8rem] p-2 mt-3 rounded"
            value={sideValue.description}
          ></textarea>
        </div>

        <div>
          <p className="text-[1.4rem] md:text-2xl">Start Date</p>
          <input
            type="date"
            onChange={(e) => createtitle("startDate", e.target.value)}
            className="h-[3rem] border w-[100%] pl-3 pr-3 text-[1.3rem] mt-3 rounded"
          />
        </div>

        <div>
          <button
            type="submit"
            className="h-[3rem] w-[8rem] shadow-2xl rounded cursor-pointer flex justify-center items-center gap-4 bg-amber-400 hover:bg-amber-500"
          >
            Create
            <Pen />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Creation;
