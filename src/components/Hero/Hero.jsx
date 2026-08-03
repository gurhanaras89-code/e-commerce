import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative bg-sky-500">
      <div className="max-w-xl text-white">

  <p className="mb-4 text-lg font-semibold uppercase tracking-[3px]">
    Summer 2020
  </p>

  <h1 className="mb-8 text-6xl font-bold leading-none">
    NEW
    <br />
    COLLECTION
  </h1>

  <p className="mb-10 text-2xl leading-10 text-white/90">
    We know how large objects will act,
    <br />
    but things on a small scale.
  </p>

  <button
    className="
      rounded-md
      bg-green-500
      px-10
      py-4
      text-lg
      font-bold
      transition
      hover:bg-green-600
    "
  >
    SHOP NOW
  </button>
  <button className="absolute left-8 top-1/2 -translate-y-1/2 text-4xl text-white">
  <FaChevronLeft />
</button>

<button className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl text-white">
  <FaChevronRight />
</button>

</div>
<div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
  <div className="h-1 w-12 bg-white opacity-40"></div>
  <div className="h-1 w-12 bg-white"></div>
</div>
    </section>
  );
}

export default Hero;