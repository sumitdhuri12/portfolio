import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "../models/Avatar";
import { Perf } from "r3f-perf";
import Fox from "../models/Fox";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="wrapper bg-darkgray h-screen">
        <div className="pt-12 pb-4">
          <p className="section_title text-center uppercase text-lightgray">
            Contact
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="left w-full h-[300px] md:h-auto md:w-6/12">
            <Canvas
              className=""
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-3, 1.5, 4],
              }}
            >
              <Fox />
            </Canvas>
          </div>
          <div className="text-gray w-6/12 actor-regular pl-10 pt-6">
            <div className="email-content">
              <h6 className="text-4xl">Email</h6>
              <p className="text-2xl pt-2">sumit.sunil.dhuri@gmail.com</p>
            </div>
            <div className="email-content pt-10">
              <h6 className="text-4xl">Contact</h6>
              <p className="text-2xl pt-2">+91 8097429877</p>
            </div>
            <div className="social-content pt-10">
              <h6 className="text-4xl">Social</h6>
              <div className="social-icons flex gap-6 pt-4 pb-16">
                <a href="https://www.linkedin.com/in/sumitdhuri/" target="blank">
                  <img src="/images/linkedin_logo.png" alt="" />
                </a>
                <a href="mailto:sumit.sunil.dhuri@gmail.com">
                  <img src="/images/gmail_logo.png" alt="" />
                </a>
                <a href="https://codepen.io/sumit-dhuri" target="blank">
                  <img src="/images/codepen_logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright absolute pb-4">
          <p className="actor-regular text-md text-center text-lightgray">
            Copyright @2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
