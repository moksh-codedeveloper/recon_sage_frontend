import Navbar from "@/components/Navbar";
import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const components = [
    "WAF Detection",
    "Rate Limit Detection",
    "Directory Scanner",
    "Adaptive Speed Tuning (AIMD)",
    "Passive Fingerprinting",
  ];

  const upcoming = [
    "Fuzzy Similarity Clustering",
    "Tor / Proxy Awareness",
    "JS-based Fingerprinting",
    "Auto Report Generation",
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="mt-20 flex flex-col items-center text-center gap-6 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          ReconSage
        </h1>

        <p className="max-w-2xl text-zinc-400 text-lg">
          ReconSage is an intelligent reconnaissance scanner that
          observes a target’s behavior before deciding how to scan it.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/project">
            <Button className="bg-cyan-500 hover:bg-cyan-600">
              How It Works
            </Button>
          </Link>

          <Link href="https://github.com/moksh-codedeveloper/Recon_sage" target="_blank">
            <Button variant="outline">
              View Source
            </Button>
          </Link>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="mt-20 flex flex-col md:flex-row gap-6 justify-center px-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-xl font-semibold text-cyan-400">
            Core Capabilities
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-zinc-400 space-y-1">
              {components.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="max-w-md w-full">
          <CardHeader className="text-xl font-semibold text-cyan-400">
            Philosophy
          </CardHeader>
          <CardContent className="text-zinc-400">
            ReconSage does not blindly attack targets.
            It learns, adapts, and respects defensive signals
            before increasing scan intensity.
          </CardContent>
        </Card>
      </section>

      {/* ROADMAP */}
      <section className="mt-20 flex justify-center px-4">
        <Card className="max-w-3xl w-full">
          <CardHeader className="text-xl font-semibold text-cyan-400">
            Upcoming Modules
          </CardHeader>
          <CardDescription className="px-6 text-zinc-500">
            Actively under development
          </CardDescription>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-2 text-zinc-400">
              {upcoming.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* DOWNLOADS */}
      <section className="mt-20 mb-20 flex justify-center px-4">
        <Card className="max-w-3xl w-full">
          <CardHeader className="text-xl font-semibold text-cyan-400">
            Get ReconSage
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4">
            <Link href="https://hub.docker.com/r/mokshmalde/reconsage" target="_blank">
              <Button variant="outline" className="w-full">
                Docker Image
              </Button>
            </Link>

            <Link href="https://aur.archlinux.org/packages/reconsage-git" target="_blank">
              <Button variant="outline" className="w-full">
                Arch (AUR)
              </Button>
            </Link>

            <Link href="https://github.com/moksh-codedeveloper/Recon_sage" target="_blank">
              <Button variant="outline" className="w-full">
                GitHub Repo
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
