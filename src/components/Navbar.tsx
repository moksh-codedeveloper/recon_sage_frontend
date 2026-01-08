"use client";
import React from "react";
import { Button } from "./ui/button";
export default function Navbar() {
    return (
        <>
            <div className="p-3 m-5 h-10 flex justify-center items-center sticky">
                <div className="bg-cyan-200 rounded-3xl p-3 border-cyan-300 mt-6">
                    <Button className="m-3 rounded-3xl">Home</Button>
                    <Button className="m-3 rounded-3xl">Contact us</Button>
                    <Button className="m-3 rounded-3xl">About project</Button>
                    <Button className="m-3 rounded-3xl">Premium version</Button>
                </div>
            </div >
        </>
    );
}
