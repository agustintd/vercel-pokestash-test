"use client"
import Link from "next/link";

export default function Nav() { 
    return (
        <div className="w-[100%] h-[70px] scolor centerxy mr-auto ml-auto text-xl"> 
            <div id="desktop-nav" className="w-[50%] h-[75%] min-w-[500px] max-w-[1500px] centerxy gap-20">
                <div className=""> <Link href="/"><p> Logo</p></Link> </div>
                <div className=""> <Link href="/sets"><p> SETS </p></Link></div>
                <div className=""> <Link href="/cards"><p> CARDS </p></Link></div>
                <div className=""> <p> BUSQUEDA </p></div>
            </div>
        </div>
    );  
}