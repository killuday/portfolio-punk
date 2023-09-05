import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const services = [
  {
    name: "Responsive Web Design",
    description:
      "Create visually appealing and user-friendly websites that adapt seamlessly to different devices and screen sizes.",
    link: "learn more",
  },
  {
    name: "Frontend Development",
    description:
      "Build interactive and dynamic user interfaces using the latest web technologies like HTML, CSS, and JavaScript frameworks.",
    link: "learn more",
  },
  {
    name: "UI/UX Design",
    description:
      "Craft intuitive and engaging user experiences through wireframing, prototyping, and user testing.",
    link: "learn more",
  },
  {
    name: "Performance Optimization",
    description:
      "Optimize website speed and performance to ensure fast loading times and smooth user interactions.",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <div id="services" className="section">
      <div className="container mx-auto mt-20">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat h-[860px]  mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6">What I do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
            I am an enthusiastic front-end developer .
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
           className="flex-1">
            <div>
              {services &&
                services.map((items, index) => {
                  const { name, description, link } = items;
                  return (
                    <div
                      className="border-b border-white/20 h-[146px] mb-[38px] flex"
                      key={index}
                    >
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking-wider font-primary  font-semibold mb-6">
                          {name}
                        </h4>
                        <p className="font-secondary leading-tight ">
                          {description}
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">
                        <a
                          href="#"
                          className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        >
                          <BsArrowUpRight />
                        </a>
                        <a href="#" className="text-gradient text-sm ">
                          {link}
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
