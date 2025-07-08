import { useState } from "react";
import { ContextCredentials } from "./CreateContext";
import type { ChildrenProps } from "../interface/children.interfaces";
import type { User } from "../interface/credentials.interface";
import toast from "react-hot-toast";
import type { NavigateFunction } from "react-router-dom";

const CredentialsProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [check, setCheck] = useState<boolean>(false);
  const [allData, setAlldata] = useState<User>({
    name: "",
    email: "",
    age: "",
    address: "",
    startDate: new Date(""),
    password: "",
    picture: "",
    confirm: "",
  });

  const getData = (type: string, value: string) => {
    setAlldata((pro) => {
      return {
        ...pro,
        [type]: value,
      };
    });
  };

  //Register
  const pushData = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const request = await fetch(`http://localhost:8000/addUser`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: allData.name,
          email: allData.email,
          age: parseInt(allData.age),
          address: allData.address,
          startDate: new Date(allData.startDate),
          password: allData.password,
          picture: allData.picture,
        }),
      });

      if (!request.ok) {
        toast.error("Not Successfully Registered! ");
        throw new Error(`HTTP error! status: ${request.status}`);
      }

      toast.success("Successfully Registered!");
      setAlldata((pro) => ({
        ...pro,
        name: "",
        email: "",
        age: "",
        address: "",
        startDate: new Date(""),
        password: "",
        picture: "",
      }));
      return request;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


  const userLogin = async (e: React.FormEvent, redirect: NavigateFunction ) => {
    e.preventDefault();

    try {
      const request = await fetch(`http://localhost:8000/userLogin`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
         credentials: 'include',
        body: JSON.stringify({
          email: allData.email,
          password: allData.password
        }),
      });

      const data = await request.json();

      if(data.message === 'Invalid Credentials'){
        toast.error("Invalid Credentials! ");
        return
      }else if(data.message === 'Password are not correct! XD'){
         toast.error("Passwrod are not correct! ");
        return
      }

      toast.success("Successfully Login!");
      setAlldata((pro) => ({
        ...pro,
        password:"",
        email: "",
      }));

   redirect('content')
      return request;
    } catch (error) {
      console.log("asdadasdasd: ", error);
      throw error;
    }
  };

  return (
    <ContextCredentials.Provider
      value={{ allData, getData, setCheck, check, pushData, userLogin }}
    >
      {children}
    </ContextCredentials.Provider>
  );
};

export default CredentialsProvider;
