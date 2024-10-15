import React from "react";

const Jewelry = () => {
  return (
    <main className="my-4 mx-4">
      <div className="min-h-screen border border-black rounded-md my-4 mx-4 flex justify-center items-center">
        <div className="my-2 mx-2 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold underline">About Me</h1>
          <p className="text-lg font-semibold my-2">
            Hi, I'm Lepharam Ramchiary, a passionate software developer with a
            B.Tech in Computer Science and Engineering from Jorhat Engineering
            College, graduated in 2023. My core expertise lies in web
            development, and I’ve had hands-on experience working with modern
            technologies such as the MERN stack (MongoDB, Express, React, and
            Node.js). I also have experience in building cross-platform projects
            using Angular and Ionic. Currently, I’m honing my skills by working
            on real-world applications and contributing to meaningful projects.
          </p>
          <p className="text-lg font-semibold my-2">
            I am continuously exploring opportunities to grow, and I’m currently
            preparing for interviews at tech companies like Granular AI and
            Google. My goal is to contribute to teams where I can use my skills
            in front-end and full-stack development, while always learning
            something new. I enjoy tackling challenges, collaborating with
            teams, and creating applications that are both efficient and
            user-friendly.
          </p>
          <h1 className="text-2xl font-bold underline my-2">
            A Simple Front-End E-Commerce Website Using Next.js and Tailwind CSS
          </h1>
          <p className="text-lg font-semibold my-2">
            As a demonstration of my front-end skills, I built a simple
            e-commerce website using Next.js for the frontend framework and
            Tailwind CSS for responsive and clean UI styling. The website
            showcases various product categories, including jewelry and fashion,
            using efficient layouts. It includes essential features like:
            <ul className="flex flex-col my-2">
              <li>
                <b>- Responsive product grids:</b> Products are displayed in a
                grid format that adjusts seamlessly to different screen sizes,
                ensuring a user-friendly experience on both desktop and mobile
                devices.
              </li>
              <li>
                <b>- Dynamic product pages:</b> Each product has its own
                dedicated page with details, allowing for deeper engagement with
                the content.
              </li>
              <li>
                <b>- Blog Section:</b> The site also features a blog section
                where users can read articles on the latest fashion trends,
                jewelry care, and styling tips.
              </li>
            </ul>
          </p>
          <p className="text-lg font-semibold my-2">
            The project highlights my ability to integrate modern front-end
            technologies to create fast, user-friendly, and aesthetically
            appealing e-commerce solutions. This combination of Next.js and
            Tailwind CSS enables the creation of scalable applications with
            performance optimizations out of the box.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Jewelry;
