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
        <Card className="mt-10 w-100 relative mr-4">
          <CardHeader className="text-xl text-cyan-500 hover:text-cyan-800 no-underline hover:underline">ReconSage</CardHeader>
          <CardContent className="text-zinc-400">"Scanner which observes the target and then evaluate the behavior of it."</CardContent>
        </Card>
        <Card className="mt-10 w-100 relative">
          <CardHeader className="text-xl text-cyan-500 text-center hover:underline hover:text-cyan-800">Components</CardHeader>
          <CardContent className="text-zinc-400">
            * Waf Detections <br/>
            * Rate Limit Detections <br/>
            * Directory Scanner <br/>
            * Automatic Speed Tuning <br/>
            * Passive Fingerprint
          </CardContent>
        </Card>
      </div>
    </>
  );
}
