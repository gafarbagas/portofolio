'use client'

import Image from "next/image";

export default function Project() {
    return (
      <section id="project" className="py-24">
        <div className="text-[32px] md:text-[40px] leading-[36px] md:leading-[50px] font-bold mt-10">
          MY LATEST <br /> PROJECT
        </div>
        <div className="mt-14">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 xl:w-1/3">
              <Image
                src="/project-metafora-sd.png"
                alt="Metafora SD Majalengka"
                title="Metafora SD Majalengka"
                className="w-full rounded-xl h-60 object-cover object-top"
                width={300}
                height={300}
              />
            </div>
            <div className="md:w-3/5 xl:w-2/3 md:ml-12 xl:ml-24 mt-4 md:mt-0">
              <div className="flex flex-col items-baseline md:flex-row md:justify-between md:items-center mt-2 mb-4">
                <div className="text-[28px] md:text-[36px] font-bold">
                  Metafora SD
                  </div>
                <a href="https://metaforasd.majalengkakab.go.id/" className="text-white font-light rounded-full text-sm px-4 py-2 text-center border border-white hover:opacity-80 self-start md:self-auto" target="_blank">
                  <div className="flex items-center">
                    <Image src="/arrow_outward.svg" alt="mail" className="h-5 w-5" width={300} height={300} />
                  </div>
                </a>
              </div>

              <p className="mb-4">
                Metafora SD is a website designed for managing elementary schools. It is specifically used in Majalengka.
              </p>

              <div className="flex flex-wrap space-x-3 space-x-reverse gap-y-3">
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full mr-3">Laravel</div>
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full">MySQL</div>
              </div>
            </div>
          </div>

          <hr className="w-3/4 mx-auto my-12 border-gray-600" />

          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 xl:w-1/3">
              <Image
                src="/project-voi-id.png"
                alt="voi.id"
                title="VOI.ID"
                className="w-full rounded-xl h-60 object-cover object-top"
                width={300}
                height={300}
              />
            </div>
            <div className="md:w-3/5 xl:w-2/3 md:ml-12 xl:ml-24 mt-4 md:mt-0">
              <div className="flex flex-col items-baseline md:flex-row md:justify-between md:items-center mt-2 mb-4">
                <div className="text-[28px] md:text-[36px] font-bold">
                  VOI.ID
                </div>
                <a href="https://voi.id" className="text-white font-light rounded-full text-sm px-4 py-2 text-center border border-white hover:opacity-80 self-start md:self-auto" target="_blank">
                  <div className="flex items-center">
                    <Image src="/arrow_outward.svg" alt="mail" className="h-5 w-5" width={300} height={300} />
                  </div>
                </a>
              </div>

              <p className="mb-4">
                VOI is a news portal in Indonesia known for its tagline &quot;Waktunya Merevolusi Pemberitaan&quot; that offers a wide range of news and articles covering topics such as politics, economics, technology, and lifestyle.
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
            <div className="md:w-2/5 xl:w-1/3">
              <Image
                src="/project-era-id.png"
                alt="ERA.ID"
                title="ERA.ID"
                className="w-full rounded-xl h-60 object-cover object-top"
                width={300}
                height={300}
              />
            </div>
            <div className="md:w-3/5 xl:w-2/3 md:ml-12 xl:ml-24 mt-4 md:mt-0">
              <div className="flex flex-col items-baseline md:flex-row md:justify-between md:items-center mt-2 mb-4">
                <div className="text-[28px] md:text-[36px] font-bold">
                  ERA.ID
                </div>
                <a href="https://era.id" className="text-white font-light rounded-full text-sm px-4 py-2 text-center border border-white hover:opacity-80 self-start md:self-auto" target="_blank">
                  <div className="flex items-center">
                    <Image src="/arrow_outward.svg" alt="mail" className="h-5 w-5" width={300} height={300} />
                  </div>
                </a>
              </div>

              <p className="mb-4">
                Era is an online news platform in Indonesia that provides diverse content, including national and international news, lifestyle articles, and multimedia content like videos and podcasts.
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
            <div className="md:w-2/5 xl:w-1/3">
              <Image
                src="/project-samratulangi-clinic.png"
                alt="Klinik Samratulangi"
                title="Klinik Samratulangi"
                className="w-full rounded-xl h-60 object-cover object-top"
                width={300}
                height={300}
              />
            </div>
            <div className="md:w-3/5 xl:w-2/3 md:ml-12 xl:ml-24 mt-4 md:mt-0">
              {/* <div>May 2022 - June 2022</div> */}

              <div className="flex flex-col items-baseline md:flex-row md:justify-between md:items-center mt-2 mb-4">
                <div className="text-[28px] md:text-[36px] font-bold">
                  Samratulangi Clinic
                </div>
                <a href="https://kliniksamratulangi.com" className="text-white font-light rounded-full text-sm px-4 py-2 text-center border border-white hover:opacity-80 self-start md:self-auto" target="_blank">
                  <div className="flex items-center">
                    <Image src="/arrow_outward.svg" alt="mail" className="h-5 w-5" width={300} height={300} />
                  </div>
                </a>
              </div>

              <p className="mb-4">
                Samratulangi Clinic is a beauty and obgyn clinic in Surakarta. This site aims to provide online services for making appointments with doctors and also for managing medical records.
              </p>

              <div className="flex flex-wrap space-x-3 space-x-reverse gap-y-3">
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full mr-3">Laravel</div>
                <div className="bg-[#FFFFFF33] px-4 py-2 rounded-full">MySQL</div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }