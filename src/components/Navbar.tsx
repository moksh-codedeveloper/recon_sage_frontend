"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Navbar() {
    return (
        <>
            <div className="p-3 m-5 h-10 flex justify-center items-center sticky">
                <div className="bg-cyan-200 rounded-3xl p-3 border-cyan-300 mt-6">
                    <Button className="m-3 rounded-3xl"><Link href={"/"}>Home</Link></Button>
                    <Button className="m-3 rounded-3xl"><Link href={"/contact"}>Contact us</Link></Button>
                    <Button className="m-3 rounded-3xl"><Link href={"/project"}>About Project</Link></Button>
                    <Button className="m-3 rounded-3xl"><Link href={"/premiums"}>Premium section</Link></Button>
                </div>
            </div >
        </>
    );
}
