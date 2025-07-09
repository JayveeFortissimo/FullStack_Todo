import { contextContent } from "./CreateContext";
import { useState, useEffect } from "react";
import type {
  ValueSide,
  UserProfile,
  AllDataSide,
} from "../interface/content.interface";
import type { ChildrenProps } from "../interface/children.interfaces";
import toast from "react-hot-toast";
import type { NavigateFunction } from "react-router-dom";

const ContentProvider: React.FC<ChildrenProps> = ({ children }) => {
  
  const [allDataSide, setAllDataSide] = useState<AllDataSide[]>([]);

  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 0,
    name: "",
    address: "",
  });

  const [sideValue, setTitles] = useState<ValueSide>({
    title: "",
    description: "",
    startDate: new Date(""),
  });

  const createtitle = (type: string, value: string) => {
    setTitles((pro) => {
      return {
        ...pro,
        [type]: value,
      };
    });
  };

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const request = await fetch(`http://localhost:8000/titleCreate`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: sideValue.title,
          description: sideValue.description,
          startDate: sideValue.startDate,
          userId: userProfile.id,
        }),
      });

      if (!request.ok) {
        toast.error("Cannot Proceeed have a problem");
        throw new Error(`HTTP error! status: ${request.status}`);
      }

      toast.success("Successfull Added!");
    } catch (error) {
      toast.error("Server Error!");
      console.log(error);
    }
  };

  async function userProfiles() {
    try {
      const response = await fetch(`http://localhost:8000/userProfile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status} JB`);

      setUserProfile(data.profile);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserSideValues() {
    try {
      const response = await fetch(`http://localhost:8000/sideValue`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      setAllDataSide(data);
      console.log("TITE:", data);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status} JB`);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userProfiles();
    getUserSideValues();
  }, []);

  //!LOGOUT
  const logout = async (e: React.FormEvent, redirect: NavigateFunction) => {
    e.preventDefault();
    try {
      const request = await fetch(`http://localhost:8000/logout`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!request.ok) {
        throw new Error(`HTTP error! status: ${request.status}`);
      }

      redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <contextContent.Provider
      value={{
        sideValue,
        createtitle,
        create,
        logout,
        userProfile,
        allDataSide,
      }}
    >
      {children}
    </contextContent.Provider>
  );
};

export default ContentProvider;
