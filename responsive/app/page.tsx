export default function Home() {
  return (
    <div>
      <h2 className="bg-cyan-500 text-center text-2xl ">Resonsive</h2>
      <div className="flex flex-col  sm:flex-row justify-center items-center gap-4">
        <div className="w-40 h-40 bg-amber-300 flex  justify-center items-center">
          1
        </div>
        <div className="w-40 h-40 bg-red-300 flex  justify-center items-center">
          2
        </div>
        <div className="w-40 h-40 bg-blue-300 flex  justify-center items-center">
          3
        </div>
      </div>
    </div>
  );
}
