import { useEffect, useRef } from "react";

export function Hero415(){
    return (
        <section className="relative h-100 overflow-hidden bg-linear-to-br from-slate-700 to-stone-900 text-white mb-4
        bg-[url('/textures/moon.jpg')] bg-size-[1500px] bg-position-[650px_700px] bg-opacity-[0.9]
        transition-all duration-10000 hover:bg-position-[700px_650px] ease-in-out">
            <div id="title header" className="flex flex-row items-center justify-center max-w-full h-24">
                <h1 className="text-8xl! font-monorama bg-[url('/textures/ink_splash_duotone.jpg')] bg-size-[500px] bg-clip-text text-transparent">415 INDUSTRIES</h1>
            </div>
        </section>
    );
}