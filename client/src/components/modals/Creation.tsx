import { Pen } from 'lucide-react';
import { X } from 'lucide-react';
const Creation = () => {
  return (
    <div className="min-h-[60vh] w-[45rem] bg-white fixed  rounded shadow-2xl p-5">
        <div className='h-[3rem] '>
    <X />
        </div>
        <form  className='flex flex-col gap-4'>
            <div>
                <p className="text-3xl">Create Title</p>
                <input type="text" className="h-[3rem] border w-[100%] pl-3 pr-3 text-[1.3rem] mt-3"/>
            </div>

             <div>
                <p className="text-3xl">Description</p>
                <textarea name="Description" className='border w-[100%] h-[8rem] p-2 mt-3'></textarea>
            </div>


             <div>
                <p className="text-3xl">Start Date</p>
                <input type="date" className="h-[3rem] border w-[100%] pl-3 pr-3 text-[1.3rem] mt-3"/>
            </div>


             <div>
               <button className="h-[3rem] w-[8rem] shadow-2xl rounded cursor-pointer flex justify-center items-center gap-4 bg-amber-400 hover:bg-amber-500">
            Create
            <Pen />
          </button>
            </div>

        </form>
    </div>
  )
}

export default Creation