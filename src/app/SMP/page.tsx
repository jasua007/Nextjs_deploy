import Image from 'next/image'
import Link from "next/link";

export default function SMP()
{return(
    <div className=" flex justify-center items-center bg-rose-300">
        

        <div className='md:table-fixed '>
            <table className="border-separate border-spacing-10">
                <tr>
                    <td className=" border-spacing-2">
                    <Image src="/images/home/smp1.jpg" alt="Gambar Proyek" width={300} height={350} />
                    </td>
                    <td className=" border-spacing-2">
                    <div className="bg-pink-300 p-6 rounded-lg shadow-md w-80">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">Masa SMP dimana kita belum tau satu sama lain itu siapa, bahkan terkesan mau tau terkadang wkwkkw.. dimana u have ur life as a dicipline girl and i have mine as a trouble maker.</h2>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td className=" border-spacing-2">
                     <div className="bg-pink-400 p-6 rounded-lg shadow-md w-80">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">Anehnya, banyak yang bilang dulu kita banyakan musuhannya daripada temenannya, kek dirimu sering merepet sama ku karna bising atau lasak, aku yang sering gangguin atau ngejek dirimu.. namanyaaa juga bocil sayang.. at least there is a contact wkwk.</h2>
                    </div>
                    </td>
                    <td className=" border-spacing-2">
                    <Image src="/images/SMP/1.jpg" alt="Gambar Proyek" width={300} height={350} />
                    </td>
                </tr>
                <tr>
                    <td className=" border-spacing-2">
                    <Image src="/images/SMP/5.jpg" alt="Gambar Proyek" width={300} height={350} />
                    </td>
                    <td className=" border-spacing-2">
                    <div className="bg-pink-500 p-6 rounded-lg shadow-md w-80">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">Masa SMP dimana kita belum tau satu sama lain itu siapa, bahkan terkesan mau tau terkadang wkwkkw.. dimana u have ur life as a dicipline girl and i have mine as a trouble maker.</h2>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td className=" border-spacing-2">
                     <div className="bg-pink-400 p-6 rounded-lg shadow-md w-80">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">Sampailah dimana moment dimana si Jelina membuat seorang Josua sadar suatu hal yang akan mengubah cara pandangnya terhadap segala hal, momen dimana dirimu nangis didepanku dan aku gaktau harus berbuat apa.</h2>
                    </div>
                    </td>
                    <td className=" border-spacing-2">
                    <Image src="/images/SMP/6.jpg" alt="Gambar Proyek" width={300} height={350} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className='border-spacing-2'>
                    <Link href="/2020" className="text-rose-500 hover:underline cursor-pointer bg-amber-100 p-3 rounded-lg shadow-md w-80 text-2xl font-semibold text-center mb-2">Immajo tusi ateh.. lanjut ma hita tu 2020</Link>

                    </td>
                </tr>
            </table>
            <div className="text-center mt-4 rounded-lg">
          
        </div>
        </div>
    </div>
    
);
}