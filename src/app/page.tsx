import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-blue-200 flex min-h-screen flex-row items-center justify-center">
      {/* Right panel */}
      <div className="bg-red-500 w-screen max-w-[25rem] h-screen max-h-[40rem] border-black border-solid border-2 rounded-t-lg rounded-bl-lg">
        {/* <svg className="h-24 w-56">
          <polyline
            points="0,75 70,75 90,38 224,38"
            style={{fill: "none", stroke: "black", strokeWidth: 2, width: "100%"}}
          />
        </svg> */}
        <div className="w-full border-b-black border-solid border-b-2 flex flex-row">
          <div className="m-[1.2rem] w-14 h-14 bg-white rounded-full flex justify-center items-center border-black border-solid border-2">
            <div className="w-11 h-11 bg-blue-400 rounded-full border-black border-solid border-2"></div>
          </div>
          <div className=" pt-5 w-16 flex flex-row justify-between">
            <div className="w-4 h-4 bg-red-700 rounded-full border-black border-solid border-2"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full border-black border-solid border-2"></div>
            <div className="w-4 h-4 bg-green-700 rounded-full border-black border-solid border-2"></div>
          </div>
        </div>
        
        {/* Screen main */}
        <div className="py-5 px-9">
          <div className="py-2 px-7 bg-zinc-200 border-black border-solid border-2">
            <div className="py-1 w-auto grid grid-flow-col justify-center gap-5">
              <div className="w-2 h-2 bg-red-900 border-black border-solid border-2 rounded-full"></div>
              <div className="w-2 h-2 bg-red-900 border-black border-solid border-2 rounded-full"></div>
            </div>
            <div className="bg-emerald-300 border-black border-solid border-2 flex justify-center">
              <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="pikachu" width={200} height={200} />
            </div>
            <div className="pt-2 flex flex-row justify-between">
              <div className="w-5 h-5 bg-red-700 rounded-full border-black border-solid border-2"></div>
              <div className="flex flex-col gap-0.5">
                <div className="w-5 border-black border-solid border-b-2"></div>
                <div className="w-5 border-black border-solid border-b-2"></div>
                <div className="w-5 border-black border-solid border-b-2"></div>
                <div className="w-5 border-black border-solid border-b-2"></div>
                <div className="w-5 border-black border-solid border-b-2"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Botões 1 */}
        <div>Botões 1</div>
        {/* Botões 2 */}
        <div>Botões 2</div>
      </div>
      {/* Left Panel */}
      <div className="mt-24 bg-red-500 w-screen max-w-[25rem] h-screen max-h-[34rem] border-black border-solid border-2 border-l-0 rounded-br-lg">LEFT</div>
    </main>
  )
}
