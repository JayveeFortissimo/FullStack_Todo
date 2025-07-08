import type { Props } from "../interface/credentials.interface";
import { useContext } from "react";
import  {ContextCredentials} from "../context/CreateContext";
import { useNavigate } from "react-router-dom";
const Login: React.FC<Props> = ({ changeCard }) => {
const redirect = useNavigate();

const {getData, allData, userLogin} = useContext(ContextCredentials);

  
  return (
    <div className="min-h-[auto] w-[35rem] shadow-2xl rounded p-3 bg-white/15 backdrop-blur-md  z-10 flex flex-col  gap-3">
      <p className="text-3xl text-green-300">Login</p>
      <form 
      onSubmit={e => userLogin(e, redirect)}
      className="flex flex-col  gap-2">
        <div className="w-[100%] flex gap-3">
          <div className="w-[100%]">
            <p className="text-[0.9rem] mb-2 text-white">Email</p>
            <input
              type="text"
              className="border h-[2rem] rounded w-[100%] pl-2 text-[0.9rem]"
              onChange={e => getData("email", e.target.value)}
               value={allData.email}
            />
          </div>
        </div>

        <div className="w-[100%] ">
          <p className="text-[0.9rem] mb-2 text-white">Password</p>
          <input
            type="text"
            className="border w-[100%] h-[2rem] pl-2 text-[0.9rem] rounded"
             onChange={e => getData("password", e.target.value)}
            value={allData.password}
          />
        </div>

        <div className="mt-10 flex w-[100%] justify-between items-center">
          <button 
          type="submit"
          className="cursor-pointer w-[7rem] h-[2rem] rounded bg-green-400 text-[0.9rem] font-bold">
            Submit
          </button>
          <p
            className="text-[0.8rem] cursor-pointer hover:underline"
            onClick={changeCard}
          >
            Dont Have Account Already?
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
