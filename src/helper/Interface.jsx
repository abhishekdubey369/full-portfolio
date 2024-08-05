import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useRef , useState , useEffect} from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  const anim = useRef();
  const hire = useRef();
  useGSAP(()=>{
    gsap.to(anim.current,{
      x:20,
      duration:0.4,
      yoyo:true,
      repeat:-1,
      delay:0.2
    })
    gsap.to(hire.current,{
      y:10,
      duration:0.4,
      yoyo:true,
      repeat:-1,
      delay:0.2
    })
  })
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <div ref={anim} className="bg-transparent px-1 italic">Abhishek Dubey</div>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I write code the way no one else can.
        <br />
        come explore who am I?
      </motion.p>
      <motion.button
        ref={hire}
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Hire
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Web / React , Next , Node ",
    level: 90,
  },
  {
    title: "App / Java , Kotlin , React Native",
    level: 70,
  },
  {
    title: "C , C++ , Python , Typescript",
    level: 90,
  },
  {
    title: "Cyber Security , ML",
    level: 50,
  },
  {
    title: "Database , Cloud",
    level: 40,
  },
  {
    title: "Assembly , OS , Embedded",
    level: 80,
  },
  {
    title: "3d Modelling , Blender , Unreal",
    level: 40,
  },
];

const SkillsSection = () => {
  const svgRef = useRef()
  const [centerWidth, setCenterWidth] = useState(window.innerWidth / 2);
  const pathd = `M 0 40 Q 100 40 200 40`
  const mouseMove = (dets,ref)=>{
    let path = `M 0 40 Q 100 ${dets.clientX} 200 40`;

      gsap.to(svgRef.current,{
        attr:{d:path},
        ease:"power3.out"
      })
  }
  const mouseExit = (dets,ref)=>{
    let path = `M 0 40 Q 100 ${dets.clientX} 200 40`;

      gsap.to(svgRef.current,{
        attr:{d:pathd},
        duration:0.8,
        ease:"elastic.out(1,0.2)"
      })
  }
  
  useEffect(() => {
    const handleResize = () => {
      setCenterWidth(window.innerWidth / 2);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Skills</h2>
        <div className="flex w-full"  onMouseLeave={(dets)=>mouseExit(dets,svgRef)} onMouseMove={(dets)=>mouseMove(dets,svgRef)}>
        <svg  className="w-full" height={80} preserveAspectRatio="none">
          <path ref={svgRef} d={pathd} stroke="black" fill="transparent" />
        </svg>
        </div>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const svgRef = useRef();
  const [centerWidth, setCenterWidth] = useState(window.innerWidth / 2);
  const pathd = `M 40 40 Q ${centerWidth} 40 ${2*centerWidth-100} 40`
  const mouseMove = (dets,ref)=>{
    let path = `M 40 40 Q ${centerWidth} ${dets.clientX} ${2*centerWidth - 100} 40`;

      gsap.to(svgRef.current,{
        attr:{d:path},
        ease:"power3.out"
      })
  }
  const mouseExit = (dets,ref)=>{
    let path = `M 40 40 Q ${centerWidth} ${dets.clientX} ${2*centerWidth - 100} 40`;

      gsap.to(svgRef.current,{
        attr:{d:pathd},
        duration:0.8,
        ease:"elastic.out(1,0.2)"
      })
  }
  
  useEffect(() => {
    const handleResize = () => {
      setCenterWidth(window.innerWidth / 2);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section>
      <div className="fixed w-full items-center justify-center">
      <div className="flex w-full items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
      </div>
      <div className="flex w-full"  onMouseLeave={(dets)=>mouseExit(dets,svgRef)} onMouseMove={(dets)=>mouseMove(dets,svgRef)}>
        <svg  className="w-full" height={80} preserveAspectRatio="none">
          <path ref={svgRef} d={pathd} stroke="black" fill="transparent" />
        </svg>
      </div>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const svgRef = useRef();
  const [centerWidth, setCenterWidth] = useState(window.innerWidth / 2);
  const pathd = `M 0 40 Q 150 40 300 40`;
  
  const mouseMove = (dets, ref) => {
    let path = `M 0 40 Q 150 ${dets.clientX} 300 40`;
    gsap.to(svgRef.current, {
      attr: { d: path },
      ease: "power3.out"
    });
  };

  const mouseExit = (dets, ref) => {
    let path = `M 0 40 Q 150 ${dets.clientX} 300 40`;
    gsap.to(svgRef.current, {
      attr: { d: pathd },
      duration: 0.8,
      ease: "elastic.out(1,0.2)"
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setCenterWidth(window.innerWidth / 2);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [state, handleSubmit] = useForm("mayzgjbd");

  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="flex w-full" onMouseLeave={(dets) => mouseExit(dets, svgRef)} onMouseMove={(dets) => mouseMove(dets, svgRef)}>
        <svg className="w-full" height={80} preserveAspectRatio="none">
          <path ref={svgRef} d={pathd} stroke="black" fill="transparent" />
        </svg>
      </div>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <div>
            <p className="text-gray-900 text-center">Thanks for your message!</p>
            <p className="text-gray-900 text-center"> Sorry , deploying Backend wasn't free :)</p>
            <p className="text-gray-900 text-center">Reach Out to me!</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="mailto:abhishek.d.pro@gmail.com" className="text-blue-600 hover:text-red-200">Email</a>
              <a href="https://www.linkedin.com/in/asdts" className="text-blue-600 hover:text-red-200">LinkedIn</a>
              <a href="https://github.com/abhishekdubey369" className="text-blue-600 hover:text-red-200">GitHub</a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              htmlFor="message"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};