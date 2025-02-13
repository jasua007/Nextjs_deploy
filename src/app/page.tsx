

export default function LoginPage() {
  return (
    <div className="flex h-screen justify-center items-center bg-rose-100">
      <div className="bg-rose-200 p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-800">Login 
        </h2>
        <input
          type="text"
          placeholder="Nama Anakmu"
          className="w-full p-2 border rounded mb-3 "

        />
        <input
          type="password"
          placeholder="tanggal jadiannn"
          className="w-full p-2 border rounded mb-3"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" >
          Login
        </button>
      </div>
    </div>
  );
}
