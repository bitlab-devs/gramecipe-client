import Navbar from "./Navbar";

const Public = () => {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen flex justify-center items-center">
        <h1 className="font-2xl text-indigo-600">Welcome to Gramicipe</h1>
      </section>
    </>
  );
};

export default Public;
