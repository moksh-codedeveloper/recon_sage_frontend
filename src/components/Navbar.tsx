"use client";
import React from "react";
import { Button } from "./ui/button";
export default function Navbar() {
    return (
        <>
            <div className="p-3 m-5 h-10 max-w-full flex justify-center items-center">
                <div className="bg-cyan-200 rounded-2xl p-3 border-cyan-300 mt-6">
                    <Button className="m-3">Home</Button>
                    <Button className="m-3">Contact us</Button>
                    <Button className="m-3">About project</Button>
                    <Button className="m-3">Premium version</Button>
                </div>
            </div >
        </>
    );
}
