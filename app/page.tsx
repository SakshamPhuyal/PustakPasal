import Image from "next/image";
import Link from "next/link";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function Home() {
  return (
    <div>
    <div className="flex">
      <div className=" ml-19 mt-10 w-140">
    <p className="text-5xl font-bold mt-9 ml-10">Read, Sell, Repeat</p>
    <p className="text-2xl mt-3 ml-10">Find buy or sell used books among students</p>
    <p  className="text-2xl mt-3 ml-10" >All courses books from Grade 1 to Graduations also available</p>
    <Link href="/browse">
    <button className="bg-blue-600 text-white mt-5 text-2xl p-1 rounded-xl border w-40 ml-12 cursor-pointer">Browse</button>
     </Link>
     <Link href="/addbooks">
    <button className="mt-5 text-2xl p-1 rounded-xl border w-40 ml-12 cursor-pointer">Add Books</button>
    </Link>
    </div>
    <div className="ml-80">
<Image src="/background.png" width={350} height={300} alt="image"/>
    </div>
    </div>
    <div className="mt-10 ml-100 w-full max-w-2xl">
        <div className="flex">
          <input
            type="text"
            placeholder="Search books..."
            className="flex-grow border  border-gray-400 rounded-l-xl px-4 py-2 text-lg focus:outline-blue-500"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-r-xl cursor-pointer text-lg flex items-center gap-2">
            <HiMagnifyingGlass size={20} />
            Search
          </button>
        </div>
      </div>
      <div>
      <p className="ml-22 mt-5 font-bold text-2xl">Featured Books</p>
      </div>
      <div className="flex mt-5 mb-10">
      <div className="w-100 h-95 rounded-xl border ml-20 pl-15 pt-5">
      <Image src="https://imgs.search.brave.com/HXmle3srs2vRnKWap8iIOEZO7B9aV0vFDAJKejAxMZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kM2xt/aDZ2eDkxbHJ3OC5j/bG91ZGZyb250Lm5l/dC9jYXRhbG9nL3By/b2R1Y3QvY2FjaGUv/NGUwMGMxZmE2ZTQ0/M2Q4ODIwYmIwYjQ4/OWNjN2VjYWUvbS9h/L21haGFiaXItcHVu/LWZfMS5qcGVn"
      width={170} height={100} />
      </div>
      <div className="w-100 h-95 rounded-xl border ml-20">

      </div>
      <div className="w-100 h-95 rounded-xl border ml-20">

      </div>
      </div>
   </div>
  );
}
