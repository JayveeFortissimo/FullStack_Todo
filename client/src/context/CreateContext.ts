import { createContext } from "react";
import type { CreateContext } from "../interface/credentials.interface";
import type { ContentMain } from "../interface/content.interface";

const ContextCredentials = createContext<CreateContext>({
  check: false,
  getData: (_type: string, _value: string) => {},
  allData: {
    name: "",
    email: "",
    age: "",
    address: "",
    startDate: new Date(""),
    password: "",
    picture: "",
    confirm: "",
  },
  setCheck: () => {},
  pushData: async (_e: React.FormEvent) => {
    throw new Error("pushData function not implemented");
  },
  userLogin: async (_e: React.FormEvent, _redirect: (to: string) => void) => {
    throw new Error("userLogin function not implemented");
  },
});

const contextContent = createContext<ContentMain>({
  sideValue: {
    title: "",
    description: "",
    startDate: new Date(),
  },
  createtitle: (_type: string, _value: string) => {},
  logout: async(_e: React.FormEvent, _redirect: (to: string) => void) => {
    throw new Error("Logout not Successfully!");
  },

  create: async(_e: React.FormEvent) =>{  throw new Error("Create Title Successfully!!")},
  userProfile: [{
    id: 0,
    name:'',
    address:''
  }]
});

export { ContextCredentials, contextContent };
