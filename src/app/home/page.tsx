import Image from 'next/image'
import Link from "next/link";

export default function home()
{return (
   
    <div className=" justify-center bg-red-300 items-center">


        <table className='border-separate border-spacing-10 border-gray-400' >
            <tr>
            <td className='border-gray-300'>
            <Image src="/images/home/10.jpg" alt="Gambar Proyek" width={300} height={350} />
            </td>
            <td>
            <Image src="/images/home/3.jpg" alt="Gambar Proyek" width={300} height={350} />
            </td>
            <td>
            <Image src="/images/home/4.jpg" alt="Gambar Proyek" width={300} height={350} />
            </td>
            <td>
            <Image src="/images/home/5.jpg" alt="Gambar Proyek" width={300} height={350} />
            </td>
            <td>
            <Image src="/images/home/9.jpg" alt="Gambar Proyek" width={300} height={350} />
            </td>
            <td>
            <Image src="/images/home/7.jpg" alt="Gambar Proyek" width={300} height={350} />
            </td>    
            </tr>
            

        </table>
        <div className='flex justify-center items-center'>
            <Image src="/images/home/1.jpg" alt="Gambar Proyek" width={300} height={350} />
            <div className="bg-amber-200 p-6 rounded-lg shadow-md w-90 border-l-sky-950">
        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">
            Ini aku buat sayang untuk mengenang perjalanan kita sampai saat ini, terdiri dari 4 bagian yaitu: 
            <a className=" hover:text-blue-600 dark:hover:text-rose-400" href="../SMP"> SMP</a>, 
            <a className=" hover:text-blue-600 dark:hover:text-rose-400" href="../2020"> 2020</a>, 
            <a className=" hover:text-blue-600 dark:hover:text-rose-400" href="../PDKT"> PDKT</a>, 
            <a className=" hover:text-blue-600 dark:hover:text-rose-400" href="../PRESENT"> PRESENT</a>
            .</h2>
            <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">
                Dimana aku pertama kali mengenal feeling kepada seseorang (terlebih perempuan) sampai akhirnya feeling itu membawaku kembali kepada mu, dimana kita memiliki perjalanan hidup masing masing sampai pada akhirnya Tuhan memberi jalan untuk kita dihubungkan lagi, seperti yang pernah aku ceritakan sayang. Red string theory, dimana sejak kita remaja sering beririsan walaupun tidak saling bersinggungan, tetapi pada akhirnya rencana Tuhan yang menyatukan kita, hingga sekarang bisa membuat kita melihat moment moment tersebut menjadi terasa lebih spesial. Sayang, cintaku sama mu gaakan tergerus oleh waktu, hari hari ku jalani dengan bahagia karna aku tau ada dirimu yang cinta aku, semakin membuat aku semangat dalam hal apapun supaya kita menuju jenjang berikutnya, karna im date to marry, we date to marry ya sayang yaaa.... I LOVE YOU JELINA. I REALLY DO
            </h2>
        
        <div className="text-center mt-4 rounded-lg">
          
          <Link href="/SMP" className="text-rose-500 hover:underline cursor-pointer bg-amber-100 p-3 rounded-lg shadow-md w-80 text-2xl font-semibold text-center mb-2">Mulai Perjalanan</Link>
        
         </div>
         </div>          <Image src="/images/home/2.jpg" alt="Gambar Proyek" width={300} height={350} />

             
        </div>
     
      <table className='border-separate border-spacing-10 border-gray-400'>
        <tr>
             <td>
          <Image src="/images/home/6.jpg" alt="Gambar Proyek" width={300} height={350} />
        </td>
        <td>
          <Image src="/images/home/8.jpg" alt="Gambar Proyek" width={300} height={350} />
        </td>
        <td>
          <Image src="/images/home/15.jpg" alt="Gambar Proyek" width={300} height={350} />
        </td>
        <td>
          <Image src="/images/home/12.jpg" alt="Gambar Proyek" width={300} height={350} />
        </td>
        <td>
          <Image src="/images/home/14.jpg" alt="Gambar Proyek" width={300} height={350} />
        </td>
        <td>
          <Image src="/images/present1.jpg" alt="Gambar Proyek" width={300} height={350} />
        </td>
        </tr>
       

      </table>

    </div>
  );
}
