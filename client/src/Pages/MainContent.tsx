import ContentSideBar from "../components/ContentSideBar";
import IsExist from "../components/IsExist";
import NotExist from "../components/NotExist";
import CreationModal from "../components/modals/CreationModal";
import { useState } from "react";
import type { Booleans } from "../interface/content.interface";
import { useContext } from "react";
import { contextContent } from "../context/CreateContext";
import ContentLeftBar from "../components/ContentLeftBar";

const MainContent = () => {
  const { allDataSide } = useContext(contextContent);

  const [booleans, setBooleans] = useState<Booleans>({
    Modal: false,
    Selected: false,
    sideOpen: false,
    contentLeftBar: true,
  });

  return (
    <div
      className={`min-h-[100vh] flex justify-center items-center relative ${
        booleans.sideOpen && "z-50"
      }}`}
    >
      {booleans.Modal || booleans.sideOpen ? (
        <div className=" fixed w-full h-full left-0 right-0 bg-neutral-700 opacity-80 z-20"></div>
      ) : undefined}

      <div
        className={`min-h-[100vh] w-[100%] shadow-2xl flex justify-center items-center gap-2 pl-5 pr-5`}
      >
        <ContentSideBar
          setBooleans={setBooleans}
          sideOpen={booleans.sideOpen ?? false}
        />

        {/* <ContentContain/> */}

        {booleans.contentLeftBar ? (
          <ContentLeftBar />
        ) : allDataSide.length <= 0 ? (
          <NotExist
            setBooleans={setBooleans}
            sideOpen={booleans.sideOpen ?? false}
          />
        ) : (
          <IsExist />
        )}

        {/* Modal */}
        {booleans.Modal ? (
          <CreationModal
            setBooleans={setBooleans}
            sideOpen={booleans.sideOpen ?? false}
          />
        ) : undefined}
      </div>
    </div>
  );
};

export default MainContent;
