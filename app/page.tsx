import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="flex">
      <div className=" ml-19 mt-10 w-140">
    <p className="text-5xl font-bold mt-9 ml-10">Read, Sell, Repeat</p>
    <p className="text-2xl mt-3 ml-10">Find buy or sell used books among students</p>
    <p  className="text-2xl mt-3 ml-10">All courses books from Grade 1 to Graduations also available</p>
    <button className="bg-blue-600 text-white mt-5 text-2xl p-1 rounded-xl border w-40 ml-12">Browse</button>
    <button className="mt-5 text-2xl p-1 rounded-xl border w-40 ml-12">Add Books</button>
    </div>
    <div className="ml-80">
<Image src="/background.png" width={350} height={300} alt="image"/>
    </div>
    </div>
   </div>
  );
}
