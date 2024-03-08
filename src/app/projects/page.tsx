import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Link from "next/link";

type Project = {
  id: number;
  image: string;
  header: string;
  content: string;
  collage: string[];
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      image: "/assets/images/projects/one/one-main.png",
      header: "ELECTRIC THREE-WHEELER CONVERSION PROJECT WITH LAUGFS ECO SRI",
      content:
        "Embark on a journey towards sustainable urban mobility with Renewaa Energy's Electric Three-Wheeler Conversion Project in collaboration with Laugfs Eco Sri. Our joint endeavor aimed at revolutionizing urban transportation by embracing electric vehicle technology, specifically focusing on the conversion of three-wheelers. At Renewaa Energy, we proudly played a pivotal role in this ambitious project, designing and supplying cutting-edge lithium battery packs tailored to the unique requirements of Laugfs Eco Sri.\n     Our lithium battery solutions were meticulously engineered to optimize the performance, reliability, and energy efficiency of electric three-wheelers, leading to a substantial reduction in carbon emissions and operational costs. Leveraging our expertise in lithium battery technology, we seamlessly integrated these advanced solutions into Laugfs Eco Sri's electric vehicle conversion initiative, facilitating a smooth transition to sustainable transportation.\n The successful outcome of this collaboration is a testament to Renewaa Energy's unwavering commitment to driving innovation and sustainability in the transportation sector. By empowering partners like Laugfs Eco Sri with advanced lithium battery solutions, we collectively propel towards a cleaner, greener future. This project's resounding success exemplifies our dedication to delivering impactful solutions that not only meet but exceed the expectations of our valued partners. Join us as we continue our journey towards a more sustainable and electrified future, one project at a time.",
      collage: [
        "/assets/images/projects/one/one-collage-one.png",
        "/assets/images/projects/one/one-collage-two.png",
        "/assets/images/projects/one/one-collage-three.png",
        "/assets/images/projects/one/one-collage-four.png",
        "/assets/images/projects/one/one-collage-five.png",
        "/assets/images/projects/one/one-collage-six.png",
      ],
    },
    {
      id: 2,
      image: "/assets/images/projects/two/two-main.png",
      header:
        "ELECTRIC FORK LIFT BATTERY CONVERSION PROJECT WITH CEYLON TOBACCOO COMPANY",
      content:
        "Embark on a journey of innovation and excellence with Renewaa Energy's Electric Forklift Battery Conversion Project in collaboration with the Ceylon Tobacco Company. Witness the transformative power of lithium battery technology as we upgraded their electric forklift fleet, shifting from traditional lead-acid to advanced lithium battery packs. Our meticulous design and installation process ensured bespoke solutions tailored to the unique requirements of Ceylon Tobacco Company's electric forklifts.\n        The results speak volumes, with a remarkable improvement in performance metrics, operational efficiency, and increased uptime. Beyond the immediate gains, the adoption of lithium batteries translated into substantial long-term cost savings due to their superior durability and reduced maintenance needs. This successful project not only underscores Renewaa Energy's dedication to cutting-edge energy storage solutions but also solidifies our position as a trusted leader in lithium battery-based energy solutions. Partner with us and experience firsthand how our commitment to innovation drives sustainable growth and efficiency across diverse industries, ensuring your trust is met with exceptional outcomes",
      collage: [
        "/assets/images/projects/two/one-collage-one.png",
        "/assets/images/projects/two/one-collage-two.png",
        "/assets/images/projects/two/one-collage-three.png",
        "/assets/images/projects/two/one-collage-four.png",
        "/assets/images/projects/two/one-collage-five.png",
      ],
    },
    {
      id: 3,
      image: "/assets/images/projects/three/three-main.png",
      header:
        "ELECTRIC VEHICLE CONVERSION PROJECTSWITH JINASENA INNOVATION AND TECHNOLOGYINSTITUTE (PVT) LTD",
      content:
        "Embarking on the forefront of electric vehicle innovation, Renewaa Energy proudly collaborated with Jinasena Innovation and Technology Institute (Pvt) Ltd in pioneering Electric Vehicle Conversion Projects. As a key partner in this transformative initiative, we supplied state-of-the-art lithium batteries to fuel their groundbreaking electric vehicle conversions.\n        Our lithium battery solutions were meticulously crafted to meet the stringent performance and reliability standards demanded by electric vehicles, ensuring optimal efficiency and extended range. Drawing upon our deep expertise in lithium battery technology, we empowered Jinasena Innovation and Technology Institute to expedite the adoption of electric mobility solutions across diverse applications.\n        The positive feedback received from Jinasena Innovation and Technology Institute stands as a testament to the superior quality and performance of our lithium batteries. We take pride in contributing to their success and remain steadfast in our commitment to delivering innovative energy storage solutions that foster sustainability and progress.\n        Renewaa Energy eagerly anticipates future collaborations with industry leaders like Jinasena Innovation and Technology Institute, as we collectively pave the way for a cleaner, more electrified future. Join us in the journey towards sustainable transportation and a greener tomorrow.",
      collage: [
        "/assets/images/projects/three/one-collage-one.png",
        "/assets/images/projects/three/one-collage-two.png",
        "/assets/images/projects/three/one-collage-three.png",
        "/assets/images/projects/three/one-collage-four.png",
        "/assets/images/projects/three/one-collage-five.png",
      ],
    },
    {
      id: 4,
      image: "/assets/images/projects/four/four-main.png",
      header:
        "SUPPLY ENERGY SOLUTIONS FOR INDUSTRY LEADERSSUCH AS OREL CORPORATION & FERENTINO TYRECORPORATION.",
      content:
        "Embark on a journey towards sustainable urban mobility with Renewaa Energy's Electric Three-Wheeler Conversion Project in collaboration with Laugfs Eco Sri. Our joint endeavor aimed at revolutionizing urban transportation by embracing electric vehicle technology, specifically focusing on the conversion of three-wheelers. At Renewaa Energy, we proudly played a pivotal role in this ambitious project, designing and supplying cutting-edge lithium battery packs tailored to the unique requirements of Laugfs Eco Sri.\n     Our lithium battery solutions were meticulously engineered to optimize the performance, reliability, and energy efficiency of electric three-wheelers, leading to a substantial reduction in carbon emissions and operational costs. Leveraging our expertise in lithium battery technology, we seamlessly integrated these advanced solutions into Laugfs Eco Sri's electric vehicle conversion initiative, facilitating a smooth transition to sustainable transportation.\n The successful outcome of this collaboration is a testament to Renewaa Energy's unwavering commitment to driving innovation and sustainability in the transportation sector. By empowering partners like Laugfs Eco Sri with advanced lithium battery solutions, we collectively propel towards a cleaner, greener future. This project's resounding success exemplifies our dedication to delivering impactful solutions that not only meet but exceed the expectations of our valued partners. Join us as we continue our journey towards a more sustainable and electrified future, one project at a time.",
      collage: [],
    },
  ];

  const collage: string[] = [
    "/assets/images/projects/ex-collage-one.png",
    "/assets/images/projects/ex-collage-two.png",
    "/assets/images/projects/ex-collage-three.png",
    "/assets/images/projects/ex-collage-four.png",
    "/assets/images/projects/ex-collage-five.png",
  ];
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      {/* Title Tag */}
      <title>Renewaa | Projects - Works Across the Company</title>
      {/* Meta Description Tag */}
      <meta
        name="description"
        content="Welcome to Renewaa, your premier destination for cutting-edge lithium battery solutions. Explore our innovative products and services today!"
      />
      {/* Canonical Tag */}
      <link rel="canonical" href="https://www.renewaa.com/" />
      {/* Fav Icon */}
      <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
      {/* Open Graph Tags */}
      <meta
        property="og:title"
        content="Renewaa | Home - Your Premier Destination for Cutting-Edge Lithium Battery Solutions"
      />
      <meta
        property="og:description"
        content="Welcome to Renewaa, your premier destination for cutting-edge lithium battery solutions. Explore our innovative products and services today!"
      />
      <meta
        property="og:image"
        content="/assets/images/banner/Banner-one.jpg"
      />
      <meta property="og:url" content="https://www.renewaa.com/" />
      <meta property="og:type" content="website" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Renewaa | Home - Your Premier Destination for Cutting-Edge Lithium Battery Solutions"
      />
      <meta
        name="twitter:description"
        content="Welcome to Renewaa, your premier destination for cutting-edge lithium battery solutions. Explore our innovative products and services today!"
      />
      <meta
        name="twitter:image"
        content="/assets/images/banner/Banner-one.jpg"
      />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />

      <div className="flex flex-col h-full w-full">
        <section
          className="page-title"
          style={{
            backgroundImage: "url(/assets/images/background/projects.png)",
          }}
        >
          <div className="auto-container">
            <div className="content-box clearfix">
              <div className="title">
                <h1>Projects</h1>
              </div>
              <ul className="bread-crumb clearfix pull-right">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>About</li>
                <li>Company</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-style-three sec-pad pb-0">
          <div className="auto-container">
            <div className="sec-title centred">
              <div className="title-top">
                <div className="shape-box">
                  <span className="shape shape-1">//</span>
                  <span className="shape shape-2">\\</span>
                </div>
                <h6>See Our Capabilities</h6>
              </div>
              <h2>
                Get a glimpse into our world with a showcase of select standout
                projects
              </h2>
            </div>
          </div>
        </section>

        {projects.map((project, index) => (
          <div key={index} className="">
            <div
              className={`flex h-[100vh] md:h-[40vh] flex-col md:flex-row my-24 ${
                index % 2 != 0 ? "md:flex-row-reverse" : ""
              } static max-w-[1024px] px-4 mx-auto`}
            >
              {/* image part */}
              <div className="w-full md:w-2/5 bg-[#1E2434] flex justify-center items-center relative">
                <div className="wrapper-project-image bg-[#0084EC] h-[50vh] md:h-[50vh] w-full md:w-[50vh] relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-white"
                    style={{
                      clipPath:
                        index % 2 === 0
                          ? "polygon(0 0, 100% 0, 100% 100%)"
                          : "polygon(0 0, 0 100%, 100% 0)",
                    }}
                  ></div>
                  <img
                    src={project.image}
                    className={`absolute bottom-0 md:right-0 pb-3 px-1 ${
                      index % 2 != 0 ? "left-0" : "right-0"
                    }`}
                    style={{
                      maxWidth: "calc(100% - 0.5rem)",
                      maxHeight: "calc(100% - 0.5rem)",
                    }}
                  />
                </div>
              </div>
              {/* text part */}
              <div
                className={`flex flex-col py-5 justify-center items-center w-full md:w-3/5 bg-[#1E2434] px-5 md:${
                  index % 2 === 0 ? "px-0 pr-10 py-0" : "px-0 pl-10 py-0"
                }`}
              >
                <BsCheckCircle size={50} color="#0084EC" />
                <h4 className="text-white text-center font-bold mt-3">
                  {project.header}
                </h4>
                <Link href={`/project?id=${project.id}`}>
                  <button className="bg-[#0084EC] rounded-xl px-4 py-2 mt-3">
                    <h6 className="text-white font-bold">See More...</h6>
                  </button>
                </Link>
              </div>
            </div>
            {index < projects.length - 1 && (
              <div className="flex justify-center">
                <img
                  src="/assets/images/icons/project-seperator.png"
                  className="w-20 h-20"
                />
              </div>
            )}
          </div>
        ))}
        <div className="sec-title centred mt-20">
          <h2>Powering Progress</h2>
        </div>
        <div className="pb-56 pt-20 w-full bg-gradient-to-b from-[#0084EC] to-white">
          <div className="flex justify-center pb-10">
            <img
              src="/assets/images/icons/hand-shake.png"
              className="flex h-20"
            />
          </div>
          <div className="flex flex-wrap static max-w-[1024px] mx-auto bg-gradient-to-tr from-[#1E2434] to-white p-4">
            <img src={collage[0]} className="w-1/2 h-auto pr-4 pb-4" />
            <img src={collage[1]} className="w-1/2 h-auto pb-4" />
            <img src={collage[2]} className="w-3/5 h-auto pr-4" />
            <div className="w-2/5 flex flex-col">
              <img src={collage[3]} className="w-full h-1/2 pb-4" />
              <img src={collage[4]} className="w-full h-1/2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
