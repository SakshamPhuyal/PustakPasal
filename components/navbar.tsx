import Link from "next/link";
import Image from "next/image";
export const Navbar=()=>{
    return (
    <nav className="flex items-center justify-between p-4 text-2xl border-b border:black">
<div className="ml-15">
    
   <Link className="flex" href="/"><Image src="/book.png" alt="book" width={60} height={30}/> PustakPasal</Link> 
</div>
<div className="flex ml-150 gap-10">
    <Link href="/">Home</Link>
    <Link href="/browse">Browse</Link>
    <Link href="/AddBooks">Add Books</Link>
</div>
<div>

</div>
    </nav>
    );
};