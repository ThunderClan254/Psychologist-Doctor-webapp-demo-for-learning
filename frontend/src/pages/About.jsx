import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            At Mindease, we believe that taking care of your mind should be as
            natural and accessible as taking care of your body. Our platform was
            created to connect individuals seeking emotional and psychological
            support with qualified mental health professionals — in a private,
            safe, and welcoming space. Whether you’re dealing with anxiety,
            stress, relationship challenges, or just need someone to talk to,
            Mindease makes finding help simple and judgment-free.
          </p>
          <p>
            We designed Mindease to be more than just a booking system — its a
            bridge between people who care and those who need care. Our mission
            is to empower individuals to take charge of their mental well-being
            by offering access to compassionate psychologists, personalized
            support categories, and an easy-to-use interface that encourages
            openness and self-reflection. Every feature of Mindease is built
            with empathy at its core, helping you take the first step toward
            healing and growth.
          </p>
          <b className="text-gray-800">🌱 Our Vision</b>
          <p>
            Our vision is to create a world where mental health support is
            easily accessible to everyone, everywhere. We aim to normalize
            conversations about emotional wellness and build a community where
            people can seek guidance without stigma or fear. By harnessing
            technology, compassion, and collaboration, Mindease strives to make
            mental wellness an integral part of everyday life — fostering a
            future where every mind feels understood, valued, and supported.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20" >
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer" >
          <b>Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer" >
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer" >
          <b>PERSONALIZATION</b>
          <p>Customized care plans that cater to your unique needs and preferences.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
