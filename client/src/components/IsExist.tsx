import { NotebookPen } from 'lucide-react';
// import { Pen } from 'lucide-react';

const IsExist: React.FC = () => {
    
  return (
  <div className="w-[100%] min-h-[100%] flex justify-center items-center">
      <div className="min-h-[20rem] p-5 flex flex-col items-center gap-[2rem]">
         <NotebookPen size={70}/>
          <p className="text-4xl text-center">No title selected</p>
          <p className='text-[1.2rem] text-center'>Please select title, click the button below</p>
          {/* <button 
      
          className="h-[3rem] w-[8rem] shadow-2xl rounded cursor-pointer flex justify-center items-center gap-4 bg-amber-400 hover:bg-amber-500">
           Titles
            <Pen />
          </button> */}
      </div>
    </div>
  )
}

export default IsExist;