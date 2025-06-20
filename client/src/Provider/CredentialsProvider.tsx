import { useState } from "react";
import { ContextCredentials } from "./CreateContext";
import type { ChildrenProps } from "../interface/children.interfaces";
import type { user } from "../interface/credentials.interface";
import toast from "react-hot-toast";

const CredentialsProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [check, setCheck] = useState<boolean>(false);
  const [allData, setAlldata] = useState<user>({
    name: "",
    email: "",
    age: "",
    address: "",
    startDate: new Date(""),
    password: "",
    picture: "",
    confirm: "",
  });
  console.log(allData);
  const getData = (type: string, value: string) => {
    setAlldata((pro) => {
      return {
        ...pro,
        [type]: value,
      };
    });
  };

  const pushData = async (e: Event) => {
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

  return (
    <ContextCredentials.Provider
      value={{ allData, getData, setCheck, check, pushData }}
    >
      {children}
    </ContextCredentials.Provider>
  );
};

export default CredentialsProvider;
