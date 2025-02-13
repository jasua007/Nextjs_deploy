import Image from 'next/image'
import Link from 'next/link'

export default function PDKT()
{return(
    <div className=" flex justify-center items-center bg-emerald-300">

        <div className='md:table-fixed '>
            <table className="border-separate border-spacing-10">
                <tr>
                    <td className=" border-spacing-2">
                    <Image src="/images/PDKT/1.jpg" alt="Gambar Proyek" width={300} height={350} />
                    </td>
                    <td className=" border-spacing-2">
                    <div className="bg-emerald-400 p-6 rounded-lg shadow-md w-80">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">EHH tiba tiba kita dekat lagi, Dirimu yang buka hati dengan aku sayang, aku merasa diatas awann.. persis seperti fotomu di bromo ini, sejukkk</h2>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td className=" border-spacing-2">
                     <div className="bg-emerald-500 p-6 rounded-lg shadow-md w-80">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">Jelina keterima kerja di Tangerangg.. seneng sih, akhirnya yang diimpikannya tercapai yaitu jadi kartab, walau masih kontrak atleast gak magang lagi atehh sayangg</h2>
                    </div>
                    </td>
                    <td className=" border-spacing-2">
                    <Image src="/images/pdkt/2.jpg" alt="Gambar Proyek" width={300} height={350} />
                    </td>
                </tr>
                <tr>
                    <td className=" border-spacing-2">
                    <Image src="/images/PDKT/3.jpg" alt="Gambar Proyek" width={300} height={350} />
                    </td>
                    <td className=" border-spacing-2">
                    <div className="bg-emerald-600 p-6 rounded-lg shadow-md w-80">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">Hari hari dirimu lewati dengan berat, mulai dari lingkungan yang masih sulit dirasanya untuk beradaptasi, juga atasannya yang jauh berbeda dengan apa yang dirasakannya di halodoc</h2>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td className=" border-spacing-2">
                     <div className="bg-teal-600 p-6 rounded-lg shadow-md w-80">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">Karna kita berjauhan satu satunya affection yang bisa kita rasakan wujutnya hanyalah memberi hadiah untuk satu sama lain.. happy kali kalo dirimu senang dengan apa yg kuberi sayang</h2>
                    </div>
                    </td>
                    <td className=" border-spacing-2">
                    <Image src="/images/PDKT/4.jpg" alt="Gambar Proyek" width={300} height={350} />
                    </td>
                </tr>
                <tr>
                    <td className=" border-spacing-2">
                    <Image src="/images/PDKT/5.jpg" alt="Gambar Proyek" width={300} height={350} />
                    </td>
                    <td className=" border-spacing-2">
                    <div className="bg-emerald-500 p-6 rounded-lg shadow-md w-80">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">Masa dimana aku masih kerja proyek sekalian fokus CPNS, dirimu support aku penuh, aku belajar dibuatkan timeline, bener bener tertata jadwal belajarku, walau akhirnya ga rezeki, dirimu tetap bangga sama ku, im so gredefull to have you sayang</h2>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td className=" border-spacing-2">
                     <div className="bg-green-600 p-6 rounded-lg shadow-md w-80">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">Sampai dimana dirimu pertama jumpain Family ku di jakarta, aku mikir, gamungkin gajadi ini mahh, harus diperjuangin Boru Lubis ini, harus pesta kami ini.. gaada lagi waktu main main inii</h2>
                    </div>
                    </td>
                    <td className=" border-spacing-2">
                    <Image src="/images/PDKT/6.jpg" alt="Gambar Proyek" width={300} height={350} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className='border-spacing-2'>
                    <Link href='/PRESENT' className='text-rose-500 hover:underline cursor-pointer bg-amber-100 p-3 rounded-lg shadow-md w-80 text-2xl font-semibold text-center mb-2'>Tanpa pikir panjang aku memilih untuk ke JAWIRRRRR</Link>

                    </td>
                </tr>

            </table>
            <div className='text-center mt-4 rounded-lg'>
          
        </div>
        </div>
    </div>
    
);
}