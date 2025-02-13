import Link from "next/link";

export default function LoginPage() {
  return (
   
    <div className="flex h-screen justify-center items-center ">
      <div className="bg-amber-200 p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">SELAMAT HARI VALENTINE SAYANGKU JELINA</h2>
        
        <div className="text-center mt-4 rounded-lg">
          
          <Link href="/home" className="text-rose-500 hover:underline cursor-pointer bg-amber-100 p-3 rounded-lg shadow-md w-80 text-2xl font-semibold text-center mb-2">CLICK AKUH</Link>
        </div>
      </div>
    </div>
  );
}
