import Image from "next/image";
import Link from "next/link"


export default function Home() {
  return (
    <main className="h-screen flex w-full bg-gray-100 flex-wrap">
      <div className="h-auto w-full bg-indigo-500 flex items-center justify-center flex-wrap">
        <h1 className="text-4xl font-bold text-white">CraftGan.ai</h1>
      </div>

      {/* left: how to use this webapp */}
      <section className="left bg-white w-full p-8 flex flex-col justify-center items-center shadow-lg">
        <h2 className="text-gray-800 text-2xl font-bold mb-4">How to Use This Webapp</h2>
        <ul className="list-disc list-inside">
          <p className="text-gray-600 mb-2">1. Choose an option from the below section.</p>
          <p className="text-gray-600 mb-2">2. Follow the on-screen instructions.</p>
          <p className="text-gray-600 mb-2">3. Enjoy the results!</p>
        </ul>
      </section>

      {/* middle: 2 options: 1. Pic2Anime 2. Make Captcha More Secure*/}
      <section className="middle h-1/3 bg-indigo-500 w-full p-8 flex flex-row flex-wrap justify-evenly items-center shadow-lg">
        <h2 className="text-white text-xl font-bold ml-4">Choose an Option</h2>
          <Link href="/pic2cartoon" className="bg-white text-indigo-500 p-4 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300">
            Pic2Cartoon
          </Link>

          <Link href="/captcha" className="bg-white text-indigo-500 p-4 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300">
            Captcha
          </Link>

          <Link href="/augmentation" className="bg-white text-indigo-500 p-4 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300">
            Data Augmentation
          </Link>
      </section>

      {/* right: advantages */}
      <section className="right bg-white w-full p-8 flex flex-col justify-center items-center shadow-lg">
        <h2 className="text-gray-800 text-2xl font-bold mb-4">Advantages</h2>
        <ul className="text-gray-600 list-disc list-inside">
          <li className="mb-2">Easy to use</li>
          <li className="mb-2">Fast processing in no time</li>
          <li className="mb-2">Multiple Optional Models (Pic2Anime)</li>
          <li className="mb-2">Solves the issue of cleaver bots</li>
        </ul>

      </section>
    </main>
  );
}
