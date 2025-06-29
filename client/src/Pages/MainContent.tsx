import ContentBar from "../components/ContentBar";
// import ContentContain from "../components/ContentContain";
import NoContent from "../components/NotExist";
const MainContent = () => {
  return (
  <div className="min-h-[100vh] flex justify-center items-center p-3">
    <div className="min-h-[100vh] w-[100%] shadow-2xl flex gap-2">
   <ContentBar/>
   {/* <ContentContain/> */}
   <NoContent/>
    </div>
  </div>
  )
}

export default MainContent;