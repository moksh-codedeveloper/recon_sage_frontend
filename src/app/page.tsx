import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
export default function Home() {
  return (
    <>
      <div className="mb-4">
        <Navbar />
      </div>
      <div className="mt-5 flex justify-center">
        <Card className="mt-10 w-100 absolute">
          <CardHeader className="text-xl text-cyan-500">ReconSage</CardHeader>
          <CardContent className="text-zinc-400">Scanner which observes the target and then evaluate the behavior of it.</CardContent>
        </Card>
      </div>
    </>
  );
}
