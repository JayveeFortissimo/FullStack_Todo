import type { NavigateFunction } from "react-router-dom";

export interface Props{
  changeCard: () => void;
}

export interface User{
    name: string;
    email: string;
    age: string;
    address: string;
    startDate: Date;
    password: string;
    picture: string;
    confirm:string;
}

export interface CreateContext {
  check: boolean;
  getData: (_type: string, _value: string) => void;
  allData: User;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  pushData: (_e: React.FormEvent) => Promise<Response>;
  userLogin: (_e: React.FormEvent, _redirect: NavigateFunction) => Promise<Response | undefined>;
}

