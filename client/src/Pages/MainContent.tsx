import ContentBar from "../components/ContentBar";
// import ContentContain from "../components/ContentContain";
import NoContent from "../components/NotExist";
import Creation from "../components/modals/Creation";
import { useState } from "react";
import type { Booleans } from "../interface/content.interface";

const MainContent = () => {

  const [booleans,setBooleans] = useState<Booleans>({
     Modal: false,
     Selected:false
  })
  
  return (
  <div className="min-h-[100vh] flex justify-center items-center p-3">
    <div className="min-h-[100vh] w-[100%] shadow-2xl flex justify-center items-center gap-2">
   <ContentBar/>
   {/* <ContentContain/> */}
   <NoContent/>
   
{/* Modal */}
   <Creation/>
    </div>
  </div>
  )
}

export default MainContent;