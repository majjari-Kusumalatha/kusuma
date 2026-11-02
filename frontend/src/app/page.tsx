import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <section className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Medicover Hospitals
          </h1>

          <p className="mt-4 text-gray-600">
            Your blog articles will appear here.
          </p>
        </div>
      </section>
      <Footer />
    </div>

  );
}

