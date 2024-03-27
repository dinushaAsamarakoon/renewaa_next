"use client";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import {
  useSearchParams,
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import { BsCheckCircle } from "react-icons/bs";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillCaretUp,
} from "react-icons/ai";
import { Project } from "@/components/Types";

// const projects: Project[] = [
//   {
//     id: 1,
//     image: "/assets/images/projects/one/one-main.png",
//     header: "ELECTRIC THREE-WHEELER CONVERSION PROJECT WITH LAUGFS ECO SRI",
//     content:
//       "Embark on a journey towards sustainable urban mobility with Renewaa Energy's Electric Three-Wheeler Conversion Project in collaboration with Laugfs Eco Sri. Our joint endeavor aimed at revolutionizing urban transportation by embracing electric vehicle technology, specifically focusing on the conversion of three-wheelers. At Renewaa Energy, we proudly played a pivotal role in this ambitious project, designing and supplying cutting-edge lithium battery packs tailored to the unique requirements of Laugfs Eco Sri.\n Our lithium battery solutions were meticulously engineered to optimize the performance, reliability, and energy efficiency of electric three-wheelers, leading to a substantial reduction in carbon emissions and operational costs. Leveraging our expertise in lithium battery technology, we seamlessly integrated these advanced solutions into Laugfs Eco Sri's electric vehicle conversion initiative, facilitating a smooth transition to sustainable transportation.\n The successful outcome of this collaboration is a testament to Renewaa Energy's unwavering commitment to driving innovation and sustainability in the transportation sector. By empowering partners like Laugfs Eco Sri with advanced lithium battery solutions, we collectively propel towards a cleaner, greener future. This project's resounding success exemplifies our dedication to delivering impactful solutions that not only meet but exceed the expectations of our valued partners. Join us as we continue our journey towards a more sustainable and electrified future, one project at a time.",
//     collage: [
//       "/assets/images/projects/one/one-collage-one.png",
//       "/assets/images/projects/one/one-collage-two.png",
//       "/assets/images/projects/one/one-collage-three.png",
//       "/assets/images/projects/one/one-collage-four.png",
//       "/assets/images/projects/one/one-collage-five.png",
//       "/assets/images/projects/one/one-collage-six.png",
//     ],
//   },
//   {
//     id: 2,
//     image: "/assets/images/projects/two/two-main.png",
//     header:
//       "ELECTRIC FORK LIFT BATTERY CONVERSION PROJECT WITH CEYLON TOBACCOO COMPANY",
//     content:
//       "Embark on a journey of innovation and excellence with Renewaa Energy's Electric Forklift Battery Conversion Project in collaboration with the Ceylon Tobacco Company. Witness the transformative power of lithium battery technology as we upgraded their electric forklift fleet, shifting from traditional lead-acid to advanced lithium battery packs. Our meticulous design and installation process ensured bespoke solutions tailored to the unique requirements of Ceylon Tobacco Company's electric forklifts.\n        The results speak volumes, with a remarkable improvement in performance metrics, operational efficiency, and increased uptime. Beyond the immediate gains, the adoption of lithium batteries translated into substantial long-term cost savings due to their superior durability and reduced maintenance needs. This successful project not only underscores Renewaa Energy's dedication to cutting-edge energy storage solutions but also solidifies our position as a trusted leader in lithium battery-based energy solutions. Partner with us and experience firsthand how our commitment to innovation drives sustainable growth and efficiency across diverse industries, ensuring your trust is met with exceptional outcomes",
//     collage: [
//       "/assets/images/projects/two/two-collage-one.png",
//       "/assets/images/projects/two/two-collage-two.png",
//       "/assets/images/projects/two/two-collage-three.png",
//       "/assets/images/projects/two/two-collage-four.png",
//       "/assets/images/projects/two/two-collage-five.png",
//     ],
//   },
//   {
//     id: 3,
//     image: "/assets/images/projects/three/three-main.png",
//     header:
//       "ELECTRIC VEHICLE CONVERSION PROJECTSWITH JINASENA INNOVATION AND TECHNOLOGYINSTITUTE (PVT) LTD",
//     content:
//       "Embarking on the forefront of electric vehicle innovation, Renewaa Energy proudly collaborated with Jinasena Innovation and Technology Institute (Pvt) Ltd in pioneering Electric Vehicle Conversion Projects. As a key partner in this transformative initiative, we supplied state-of-the-art lithium batteries to fuel their groundbreaking electric vehicle conversions.\n        Our lithium battery solutions were meticulously crafted to meet the stringent performance and reliability standards demanded by electric vehicles, ensuring optimal efficiency and extended range. Drawing upon our deep expertise in lithium battery technology, we empowered Jinasena Innovation and Technology Institute to expedite the adoption of electric mobility solutions across diverse applications.\n        The positive feedback received from Jinasena Innovation and Technology Institute stands as a testament to the superior quality and performance of our lithium batteries. We take pride in contributing to their success and remain steadfast in our commitment to delivering innovative energy storage solutions that foster sustainability and progress.\n        Renewaa Energy eagerly anticipates future collaborations with industry leaders like Jinasena Innovation and Technology Institute, as we collectively pave the way for a cleaner, more electrified future. Join us in the journey towards sustainable transportation and a greener tomorrow.",
//     collage: [
//       "/assets/images/projects/three/three-collage-one.png",
//       "/assets/images/projects/three/three-collage-two.png",
//       "/assets/images/projects/three/three-collage-three.png",
//       "/assets/images/projects/three/three-collage-four.png",
//       "/assets/images/projects/three/three-collage-five.png",
//     ],
//   },
//   {
//     id: 4,
//     image: "/assets/images/projects/four/four-main.png",
//     header:
//       "SUPPLY ENERGY SOLUTIONS FOR INDUSTRY LEADERSSUCH AS OREL CORPORATION & FERENTINO TYRECORPORATION.",
//     content:
//       "Embark on a journey towards sustainable urban mobility with Renewaa Energy's Electric Three-Wheeler Conversion Project in collaboration with Laugfs Eco Sri. Our joint endeavor aimed at revolutionizing urban transportation by embracing electric vehicle technology, specifically focusing on the conversion of three-wheelers. At Renewaa Energy, we proudly played a pivotal role in this ambitious project, designing and supplying cutting-edge lithium battery packs tailored to the unique requirements of Laugfs Eco Sri.\n     Our lithium battery solutions were meticulously engineered to optimize the performance, reliability, and energy efficiency of electric three-wheelers, leading to a substantial reduction in carbon emissions and operational costs. Leveraging our expertise in lithium battery technology, we seamlessly integrated these advanced solutions into Laugfs Eco Sri's electric vehicle conversion initiative, facilitating a smooth transition to sustainable transportation.\n The successful outcome of this collaboration is a testament to Renewaa Energy's unwavering commitment to driving innovation and sustainability in the transportation sector. By empowering partners like Laugfs Eco Sri with advanced lithium battery solutions, we collectively propel towards a cleaner, greener future. This project's resounding success exemplifies our dedication to delivering impactful solutions that not only meet but exceed the expectations of our valued partners. Join us as we continue our journey towards a more sustainable and electrified future, one project at a time.",
//     collage: [],
//   },
// ];

const ProjectPage = ({ params }: { params: { id: string } }) => {
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");

  // const project = projects.find((project) => project.id === Number(id));
  console.log("id: ", params.id);

  // const segments = useSelectedLayoutSegments();
  // const id = segments?.[1]; // Assuming the [id] segment is the third segment
  const [project, setProject] = useState<Project | null>(null);

  // console.log("id: ", id);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const res = await fetch(`/api/projects/${params.id}`);
        const data = await res.json();
        console.log("data: ", data);
        setProject(data.project);
      } catch (err) {
        console.error(err);
      }
    };

    if (params.id) {
      fetchProjectData();
    }
  }, [params.id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  // if (!project) {
  //   return <div>Project not found</div>;
  // }

  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      {/* Title Tag */}
      <title>
        Renewaa | Projects {project.id} - {project.title}
      </title>
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
      <div className="mb-28">
        <div
          className={`h-[40vh] flex my-24 ${
            project.id % 2 != 0 ? "flex-row-reverse" : ""
          } static max-w-[1024px] px-4 mx-auto`}
        >
          <div
            className={`flex flex-col justify-center items-center w-3/5 bg-[#1E2434] ${
              project.id % 2 != 0 ? "pr-10" : "pl-10"
            }`}
          >
            <BsCheckCircle size={50} color="#0084EC" />
            <h4 className="text-white text-center font-bold mt-3">
              {project.title}
            </h4>
          </div>
          <div className="w-2/5 bg-[#1E2434] flex justify-center items-center relative ">
            <div className="bg-[#0084EC] h-[50vh] w-[50vh] relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-full h-full bg-white ${
                  project.id % 2 === 0 ? "" : ""
                }`}
                style={{
                  clipPath:
                    project.id % 2 != 0
                      ? "polygon(0 0, 100% 0, 100% 100%)"
                      : "polygon(0 0, 0 100%, 100% 0)",
                }}
              ></div>
              <img
                src={project.mainImageUrl}
                className="absolute bottom-0 right-0 pb-3 px-1"
                style={{
                  maxWidth: "calc(100% - 0.5rem)",
                  maxHeight: "calc(100% - 0.5rem)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="static max-w-[1024px] px-4 mx-auto">
          {project.contents.map((content, index) => (
            <div key={index}>
              <p className="text-center">{content.paragraph}</p>
              <br />
              <br />
            </div>
          ))}
        </div>
        {project.imageUrls.length > 0 && (
          <div className="static max-w-[1024px] px-4 mx-auto">
            <div className="sec-title centred">
              <h2>Gallery</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 items-center bg-[#1E2434] px-2 rounded-xl">
              {project.imageUrls.map((image, index) => (
                <div key={index} className="flex justify-center p-1 col-span-1">
                  <img
                    src={image.url}
                    alt={`Project image ${index + 1}`}
                    className="object-cover w-full h-[60vh]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* <div className="flex flex-row tatic max-w-[1024px] px-4 mx-auto my-10 items-center">
          <div className="flex justify-end w-full">
            {project.id - 1 >= 1 ? (
              <Link href={`/project?id=${project.id - 1}`} scroll={false}>
                <button className="flex flex-row py-1 px-2 mx-2 rounded-xl items-center  md:py-2 md:px-4 hover:text-[#0084ec] ">
                  <AiFillCaretLeft
                    size={18}
                    color="#000000"
                    // style={{ verticalAlign: "text-bottom" }}
                  />
                  <h4 className="text-black mx-1 font-sans font-bold text-xl ">
                    Prev
                  </h4>
                </button>
              </Link>
            ) : (
              <button
                className="flex flex-row py-1 px-2 mx-2 rounded-xl items-center  md:py-2 md:px-4"
                disabled
              >
                <AiFillCaretLeft
                  size={18}
                  color="#000000"
                  // style={{ verticalAlign: "text-bottom" }}
                />
                <h4 className="text-black mx-1 font-sans font-bold text-xl">
                  Prev
                </h4>
              </button>
            )} */}

        {/* {project.id + 1 < projects.length ? (
              <Link href={`/project?id=${project.id + 1}`} scroll={false}>
                <button className="flex flex-row py-1 px-2 mx-2 rounded-xl items-baseline  md:py-2 md:px-4 hover:text-[#0084ec]">
                  <h4 className="text-black mx-1 font-sans font-bold text-xl">
                    Next
                  </h4>
                  <AiFillCaretRight
                    size={18}
                    color="#000000"
                    // style={{ verticalAlign: "text-bottom" }}
                  />
                </button>
              </Link>
            ) : (
              <button
                className="flex flex-row py-1 px-2 mx-2 rounded-xl items-center justify-center md:py-2 md:px-4"
                disabled
              >
                <h4 className="text-black mx-1 font-sans font-bold text-xl">
                  Next
                </h4>
                <AiFillCaretRight
                  size={18}
                  color="#000000"
                  // className="items-end"
                  // style={{ verticalAlign: "text-bottom" }}
                />
              </button>
            )} */}
        {/* </div>
        </div> */}
      </div>
    </>
  );
};

// const ProjectPage = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Project />
//     </Suspense>
//   );
// };

export default ProjectPage;
