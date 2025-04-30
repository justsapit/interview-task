// More information can be found in the Next.js docs (make sure app router is selected)
// https://nextjs.org/docs

"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">JUST SAP IT!</span>
          <br />
          <span>Interview</span> Task
        </h1>
      </div>
    </main>
  );
}
