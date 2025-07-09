import type { NavigateFunction } from "react-router-dom";
export interface Booleans {
  Modal: boolean;
  Selected: boolean;
  sideOpen: boolean;
  contentLeftBar:boolean;
}

export interface State {
  setBooleans: React.Dispatch<React.SetStateAction<Booleans>>;
  sideOpen: boolean;
}

export interface ValueSide {
  title: string;
  description: string;
  startDate: Date;
}

export interface AllDataSide extends ValueSide {
  titleId: number;
  userId: number;
}

export interface UserProfile {
  id: number;
  name: string;
  address: string;
}


export interface ContentMain {
  sideValue: ValueSide;
  createtitle: (_type: string, _value: string) => void;
  logout: (_e: React.FormEvent, _redirect: NavigateFunction) => Promise<void>;
  create: (e: React.FormEvent) => Promise<void>;
  userProfile: UserProfile;
  allDataSide:AllDataSide[]
}
