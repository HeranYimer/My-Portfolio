import img1 from "../assets/images/netflix.jpeg";
import img2 from "../assets/images/amazon2.png";
import img3 from "../assets/images/logoev.png";

const portfolioData = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "A streaming platform UI built with React and TMDB API.",
    image: img1,
    demoLink: "https://heranyimer-net-flix-clone.netlify.app/",
    codeLink: "https://github.com/HeranYimer/Netflix-Project",
    techIcons: ["react", "tmdb", "css"],
  },
  {
    id: 2,
    title: "Amazon Clone",
    description:
      "An e-commerce clone built with React, Firebase, and Context API.",
    image: img2,
    demoLink: "https://amazonfrontend-clone-heran.netlify.app/",
    codeLink: "https://github.com/HeranYimer/Amazon-Clone",
    techIcons: ["react", "node", "firebase", "css"],
  },
  {
    id: 3,
    title: "Evangadi Forum",
    description:
      "Forum platform for Q&A and collaboration built with MERN stack.",
    image: img3,
    demoLink: "https://evangadi-forum-heran-yimer.netlify.app/",
    codeLink: "https://github.com/HeranYimer/Evangadi-Forum",
    techIcons: ["react", "node", "mysql", "express"],
  },
];

export default portfolioData;
