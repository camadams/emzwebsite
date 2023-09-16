import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-4">
      <Image src="/logo.png" alt="Emz" width={500} height={500} />
      <div>Emz Bakery</div>
      <div>Email Emz if you want some amazing vegan pasteries 🥐</div>
      <div>emzveganbaking@gmail.com</div>
    </div>
  );
}
