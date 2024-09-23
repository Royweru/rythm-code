import React from "react";
import { Button } from "./ui/button";

export const DetailsSection = () => {
  return (
    <section className="py-12 bg-white  lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-blue-dark1 sm:text-4xl xl:text-5xl  font-gothic">
            Services we offer
          </h2>
          <p className="mt-2 text-base leading-7 tracking-wide text-gray-500 ">
            We got you sorted!
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 lg:mt-12">
          <div className="md:p-8 lg:p-14">
            <svg
              className="mx-auto"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
                fill="#D4D4D8"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
                fill="#D4D4D8"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-blue-dark2 ">
              Get that assignmet done on time
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Need help with your coding assignment? We ensure it's completed on
              time and the right way
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <svg
              className="mx-auto"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 27H19V45H27V27Z"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 37H1V45H9V37Z"
                fill="#D4D4D8"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M45 17H37V45H45V17Z"
                fill="#D4D4D8"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 17L15 7L23 15L37 1"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 1H37V10"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-blue-dark2 font-pj">
              Projects
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We're committed to helping you build stunning, user-friendly
              website projects that not only meet your goals but captivate your
              audience. With our expertise, we'll ensure your site is visually
              appealing, highly functional, and truly stands out in the digital
              world.{" "}
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <svg
              className="mx-auto"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41 1H1V41H41V1Z"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 7H7V20H18V7Z"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 26H7V35H18V26Z"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35 7H24V35H35V7Z"
                fill="#D4D4D8"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-blue-dark2 font-pj">
              Thesis for students
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We specialize in crafting high-quality theses for college
              students, focusing on software and website development. Our expert
              team is dedicated to delivering comprehensive, well-researched,
              and professionally written projects that meet academic standards
              and stand out for their technical accuracy. Whether it's
              developing custom software solutions or designing cutting-edge
              websites, we ensure your thesis is not only polished and
              insightful but also showcases your understanding of the subject
              with precision and clarity.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <svg
              className="mx-auto"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                fill="#D4D4D8"
              />
              <path
                d="M9 9H33"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 17H33"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 25H13V31H29V25H41"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-blue-dark2 font-pj">
              Editing assigment
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We are passionate about assisting students pursuing technology
              courses by offering top-notch assignment editing services. Our
              goal is to refine your work to ensure clarity, accuracy, and
              professionalism, helping you present polished, high-quality
              assignments that meet academic standards. Whether it's fine-tuning
              technical details or improving overall structure, we're here to
              enhance your success for cheaper prices.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <svg
              className="mx-auto"
              width="46"
              height="42"
              viewBox="0 0 46 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                fill="#D4D4D8"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                stroke="#161616"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl   font-bold text-blue-dark2 font-pj">
              Quality
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Get top-tier code and exceptional work for all your projects. We
              ensure high-quality, efficient solutions tailored to meet your
              specific needs, delivering results that exceed expectations and
              stand out for their precision and performance.
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-4 sm:mt-6 md:mt-7 w-full flex items-center justify-center px-8">
        <Button variant="secondary" size="lg">
          Learn more..
        </Button>
      </div>
    </section>
  );
};
