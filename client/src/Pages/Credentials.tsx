import Register from "../components/Register";
import Login from "../components/Login";
import { useState } from "react";

const Credentials = () => {

  const [accountAlready, setAccountAlready] = useState<boolean>(false);

  const changeCard = () => setAccountAlready(pro => !pro);

  return (
    <section className="min-h-[100vh] flex justify-center items-center p-2 background1 ">
      {/* Try to understand this ha! */}
      <div className="fixed inset-0 bg-black/15 flex items-center justify-center p-3 backdrop-blur-sm"></div>
      {!accountAlready ? <Register changeCard={changeCard} /> : <Login changeCard={changeCard}/>}
    </section>
  );
};

export default Credentials;
