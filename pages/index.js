import FeaturedPost from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-next-js",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-next-js2",
    title: "Getting Started with NextJS 2",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework",
    date: "2022-02-10",
  },
];

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </div>
  );
};

export default HomePage;
