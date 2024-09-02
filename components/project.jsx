'use client'

export default function Project() {
    return (
      <section id="project" className="py-24">
        <div className="text-[32px] md:text-[40px] leading-[36px] md:leading-[50px] font-bold">
          MY LATEST <br /> PROJECT
        </div>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src="/project1.png"
                alt="project"
                className="w-full rounded-xl h-60 object-cover object-top"
              />
            </div>
            <div className="md:w-2/3 md:ml-24 mt-4 md:mt-0">
              <div className="text-gray-300">June 2022 - Now</div>
              <div className="text-[28px] md:text-[36px] font-bold mt-2 mb-4">
                VOI.ID
              </div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-wrap space-x-3 space-x-reverse gap-y-3">
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full mr-3">Laravel</div>
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full">Next.js</div>
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full">REST API</div>
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full">PostgreSQL</div>
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full">SEO</div>
              </div>
            </div>
          </div>

          <hr className="w-3/4 mx-auto my-12 border-gray-600" />

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src="/project2.png"
                alt="project"
                className="w-full rounded-xl h-60 object-cover object-top"
              />
            </div>
            <div className="md:w-2/3 md:ml-24 mt-4 md:mt-0">
              <div className="text-gray-300">June 2022 - Now</div>
              <div className="text-[28px] md:text-[36px] font-bold mt-2 mb-4">
                ERA.ID
              </div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-wrap space-x-3 space-x-reverse gap-y-3">
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full mr-3">Laravel</div>
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full">PostgreSQL</div>
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full">SEO</div>
              </div>
            </div>
          </div>

          <hr className="w-3/4 mx-auto my-12 border-gray-600" />

          <div className="flex flex-col md:flex-row mb-16">
            <div className="md:w-1/3">
              <img
                src="/project1.png"
                alt="project"
                className="w-full rounded-xl h-60 object-cover object-top"
              />
            </div>
            <div className="md:w-2/3 md:ml-24 mt-4 md:mt-0">
              <div>June 2022</div>
              <div className="text-[28px] md:text-[36px] font-bold mt-2 mb-4">
                Project 1
              </div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-wrap space-x-3 space-x-reverse gap-y-3">
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full mr-3">Laravel</div>
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full">PostgreSQL</div>
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full">SEO</div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }