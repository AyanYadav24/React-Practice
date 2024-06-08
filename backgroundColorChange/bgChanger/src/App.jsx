import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <h1 className='justify-center text-center text-7xl pt-10'>This is {color} Background</h1>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg rounded-2xl bg-white px-3 py-2'>
            <button className='outline-none px-4 bg-orange-400 rounded-full' onClick={() => setColor("orange")}>Orange</button>
              <button className='outline-none px-4 bg-red-600 rounded-full'  onClick={() => setColor("red")}>Red</button>
              <button className='outline-none px-4 bg-yellow-300 rounded-full'  onClick={() => setColor("yellow")}>Yellow</button>
              <button className='outline-none px-4 bg-green-900 rounded-full'  onClick={() => setColor("green")}>Green</button>
              <button className='outline-none px-4 bg-blue-600 rounded-full'  onClick={() => setColor("blue")}>Blue</button>
              <button className='outline-none px-4 bg-violet-600 rounded-full'  onClick={() => setColor("violet")}>Violet</button>
              <button className=' text-white outline-none px-4 bg-black rounded-full'  onClick={() => setColor("black")}>Black</button>
              <button className='outline-none px-4 bg-pink-400 rounded-full'  onClick={() => setColor("pink")}>Pink</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
