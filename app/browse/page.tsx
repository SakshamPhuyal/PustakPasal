import { HiMagnifyingGlass } from "react-icons/hi2";
export default function Browse(){
    return(
        <div>
            <div>
            <p className="text-3xl font-bold ml-15 mt-15">Browse Books</p>
            </div>
             <div className="mt-10 ml-100 w-full max-w-2xl">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Search books..."
                        className="flex-grow border  border-gray-400 rounded-l-xl px-4 py-2 text-lg focus:outline-blue-500"
                      />
                      <button className="bg-green-600 text-white px-4 py-2 rounded-r-xl text-lg flex items-center gap-2">
                        <HiMagnifyingGlass size={20} />
                        Search
                      </button>
                    </div>
                  </div>
                  <div>
                     <div className="flex mt-25 mb-10">
      <div className="w-100 h-95 rounded-xl border ml-20">
      
      </div>
      <div className="w-100 h-95 rounded-xl border ml-20">

      </div>
      <div className="w-100 h-95 rounded-xl border ml-20">

      </div>
      </div>
       <div className="flex mt-5 mb-10">
      <div className="w-100 h-95 rounded-xl border ml-20">
      
      </div>
      <div className="w-100 h-95 rounded-xl border ml-20">

      </div>
      <div className="w-100 h-95 rounded-xl border ml-20">

      </div>
      </div>
       <div className="flex mt-5 mb-10">
      <div className="w-100 h-95 rounded-xl border ml-20">
      
      </div>
      <div className="w-100 h-95 rounded-xl border ml-20">

      </div>
      <div className="w-100 h-95 rounded-xl border ml-20">

      </div>
      </div>
                  </div>
        </div>
    );

}