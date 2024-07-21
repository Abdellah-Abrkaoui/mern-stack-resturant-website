import Hero from "../../components/hero/Hero";
import CategoryWrapper from "../category/CategoryWrapper";

export const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWrapper />
      </div>
    </div>
  );
};
