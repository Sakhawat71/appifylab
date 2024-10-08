
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import SuccessCard from "./components/SuccessCard";

export default function Home() {
    return (
        <div className="">
            <Navbar />
            <Banner />
            <SuccessCard />
            <Skills />
            <Categories />
            <Courses />
        </div>
    );
}
