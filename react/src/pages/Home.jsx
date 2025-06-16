import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-neutral">
      <Header />
      <div id="next-section" className="h-screen bg-neutral">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl font-bold">This is the next section!</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
