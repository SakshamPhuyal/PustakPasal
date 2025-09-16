import Image from "next/image";
import Link from "next/link";

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
  
      
      <div className="mt-10 ml-20 mr-20">
  <p className="font-bold text-2xl text-center mb-8">Why Choose Us?</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
  
    <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
      <Image src="https://img.icons8.com/color/96/money-bag.png?utm_source=chatgpt.com" width={50} height={50} alt="Save Money" />
      <h3 className="text-xl font-semibold mt-4">Save Money</h3>
      <p className="text-gray-600 mt-2">
        Buy second-hand books at affordable prices and save up to 70%.
      </p>
    </div>

    <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
      <Image src="https://img.icons8.com/color/96/checklist.png?utm_source=chatgpt.com" width={50} height={50} alt="Easy to Use" />
      <h3 className="text-xl font-semibold mt-4">Easy to Use</h3>
      <p className="text-gray-600 mt-2">
        Post your books in just a few clicks and reach students instantly.
      </p>
    </div>

  
    <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
      <Image src="https://img.icons8.com/color/96/conference.png?utm_source=chatgpt.com" width={50} height={50} className="text-center" alt="Student Community" />
      <h3 className="text-xl font-semibold mt-4">Student Community</h3>
      <p className="text-gray-600 mt-2">
        Connect with fellow students and exchange knowledge along with books.
      </p>
    </div>
    
  </div>
</div>
   </div>
  );
}
