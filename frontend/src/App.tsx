import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    // TEST 1: If background isn't Dark Blue/Gray, index.css directives are missing
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 transition-colors duration-500">
      
      {/* TEST 2: If no border or shadow, PostCSS might not be processing utilities */}
      <div className="relative group bg-slate-900 border-2 border-indigo-500/30 p-12 rounded-[2rem] shadow-[0_0_50px_-12px_rgba(79,70,229,0.5)] text-center max-w-lg w-full overflow-hidden">
        
        {/* Decorative background blur (Checks if 'blur' and 'opacity' work) */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>

        {/* TEST 3: Gradient Text - Checks if 'bg-clip-text' is working */}
        <h1 className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 mb-4">
          Tailwind Status
        </h1>

        <div className="space-y-4 mb-10">
          <p className="text-slate-300 text-lg font-medium">
            Status: <span className="text-emerald-400 animate-pulse">Checking Systems...</span>
          </p>
          <p className="text-slate-500 text-sm leading-relaxed px-4">
            If you see a <span className="text-indigo-400 underline decoration-indigo-500/50 underline-offset-4">Pulse Animation</span> and 
            <span className="text-purple-400"> Gradient Text</span>, your configuration is live.
          </p>
        </div>

        {/* TEST 4: Interaction - Checks 'ring', 'hover', and 'transform' */}
        <button 
          onClick={() => setCount((prev) => prev + 1)}
          className="relative px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl 
                     transition-all duration-200 transform hover:scale-105 active:scale-95 
                     ring-4 ring-indigo-500/20 hover:ring-indigo-500/40 shadow-xl shadow-indigo-900/40"
        >
          Active Probes: {count}
        </button>

        {/* TEST 5: Border-t - Checks if layout utilities work */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex justify-center gap-4">
          <span className="h-2 w-2 rounded-full bg-slate-700"></span>
          <span className="h-2 w-2 rounded-full bg-slate-700"></span>
          <span className="h-2 w-2 rounded-full bg-slate-700"></span>
        </div>
      </div>
    </div>
  )
}

export default App