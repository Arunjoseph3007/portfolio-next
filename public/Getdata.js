import celloAPI from "./assets/celloAPI.PNG";
import celloSVG from "./assets/celloSVG.PNG";
import gitbase from "./assets/gitbase.jpg";

export const AllProjects = [
  {
    id: 1,
    title: "Gitbase",
    link: "http://gitbase.sytes.net",
    image: gitbase,
    description:
      "A simple Github clone. A platform where you can store repositories and collaborate with others",
    stack: ["ReactJS", "NextJS", "Django", "GCP", "TailwindCSS"],
  },

  {
    id: 0,
    title: "Cello SVG",
    link: "http://cello-svg.vercel.app",
    image: celloSVG,
    description:
      "An awesome Random SVG generating app with many features. If you are a  Designers or a frontend developers you will love this website for the those amazing designs and great inspirations for your next project. It has about a dozen Awesome Generators covering all major design trends like Blobs, Waves, Polygons, Grids and so much more. ",
    stack: ["ReactJS", "NextJS", "D3.js"],
  },

  {
    id: 2,
    title: "Cello APIs",
    link: "http://celloapis.vercel.app",
    image: celloAPI,
    description:
      "A web version of Postman (a service used for api testing). Includes all basic and advanced features. You can change body content, add headers, params, configure multiple requests, save sessions to local storage and a lot more.",
    stack: ["React", "NextJS", "tailwind CSS"],
  },
];
