import type { Props } from "../interface/credentials.interface";
import { useContext } from "react";
import { ContextCredentials } from "../Provider/CreateContext";


const Register: React.FC<Props> = ({ changeCard }) => {

  const {allData, getData, setCheck, check,pushData} = useContext(ContextCredentials);

  return (
    <div className="min-h-[30rem] w-[35rem] shadow-2xlcd rounded p-3 bg-white/15 backdrop-blur-md  z-10 flex flex-col justify-between gap-3">
      <p className="text-3xl text-green-300">Register</p>
      <form 
      onSubmit={e => pushData(e)}
      className="flex flex-col justify-between gap-2">
        <div className="w-[100%] flex gap-3">
          <div className="w-[100%] ">
            <p className="text-[0.9rem] mb-2 text-white">Name</p>
            <input
              type="text"
              name={allData.name}
              className="border h-[2rem] rounded w-[100%] pl-2 text-[0.9rem]"
              onChange={(e) => getData("name", e.target.value)}
            />
          </div>

          <div className="w-[100%]">
            <p className="text-[0.9rem] mb-2 text-white">Email</p>
            <input
              type="text"
              name={allData.email}
              className="border h-[2rem] rounded w-[100%] pl-2 text-[0.9rem]"
              onChange={(e) => getData("email", e.target.value)}
            />
          </div>
        </div>

        <div className="w-[100%] flex gap-3">
          <div className="w-[100%] ">
            <p className="text-[0.9rem] mb-2 text-white">Age</p>
            <input
              type="number"
              name={allData.age}
              className="border rounded h-[2rem] w-[100%] pl-2 text-[0.9rem]"
              onChange={(e) => getData("age", e.target.value)}
            />
          </div>

          <div className="w-[100%] ">
            <p className="text-[0.9rem] mb-2 text-white">Address</p>
            <input
              type="text"
              name={allData.address}
              className="border rounded h-[2rem] w-[100%] pl-2 text-[0.9rem]"
              onChange={(e) => getData("address", e.target.value)}
            />
          </div>
        </div>

        <div className="w-[100%] ">
          <p className="text-[0.9rem] mb-2 text-white">Start Date</p>
          <input
            type="date"
            name={allData.startDate}
            className="border w-[100%] h-[2rem] pl-2 pr-2 text-[0.9rem] rounded"
            onChange={(e) => getData("startDate", e.target.value)}
          />
        </div>

        <div className="w-[100%] ">
          <p className="text-[0.9rem] mb-2 text-white">Image</p>
          <input
            type="file"
            name="image"
            className="border w-[100%] h-[2rem] pl-2 text-[0.9rem] rounded"
            onChange={(e) => getData("picture", e.target.value)}
          />
        </div>

        <div className="w-[100%] ">
          <p className="text-[0.9rem] mb-2 text-white">Password</p>
          <input
            type={check? 'text':'password'}
            name={allData.password}
            className="border w-[100%] h-[2rem] pl-2 text-[0.9rem] rounded"
            onChange={(e) => getData("password", e.target.value)}
            
          />
        </div>

        <div className="w-[100%] ">
          <p className="text-[0.9rem] mb-2 text-white">Confirm Password</p>
          <input
             type={check? 'text':'password'}
            name={allData.confirm}
            className="border w-[100%] h-[2rem] pl-2 text-[0.9rem] rounded"
            onChange={(e) => getData("confirm", e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" onClick={()=> setCheck((pro:boolean) => !pro)}/>
          <span className="text-[0.7rem]">See Password?</span>
        </div>

        <div className="mt-10 flex w-[100%] justify-between items-center">
          <button className="cursor-pointer w-[7rem] h-[2rem] rounded bg-green-400 text-[0.9rem] font-bold">
            Submit
          </button>
          <p
            onClick={changeCard}
            className="text-[0.8rem] cursor-pointer hover:underline"
          >
            Have Account Already?
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
