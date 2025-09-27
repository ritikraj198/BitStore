import React from "react";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen ">
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          {/* <div className="flex">
            <Image
              // src="/assets/icons/logo-full.svg"
              src="/assets/icons/database (4).svg"
              alt="logo"
              width={124}
              height={22}
              className="h-auto"
            />
            <b>BitStore</b>
          </div> */}

          <div className="flex items-center gap-3">
            <Image
              src="/assets/icons/database-4.svg"
              alt="BitStore logo"
              width={384}
              height={52}
              className="block h-8 w-auto shrink-0" // h-8 ≈ 32px; tweak as you like
            />
            <span className="font-extrabold leading-none tracking-tight text-2xl sm:text-3xl lg:text-4xl">
              BitStore
            </span>
          </div>

          <div className="space-y-5 ">
            <h1 className="h1">Your files. Your cloud. Simplified.</h1>
            <p className="body-1">Bring the bits. We’ll keep them</p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          {/* <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          /> */}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/icons/database-4.svg"
              alt="BitStore logo"
              width={384}
              height={52}
              className="block h-8 w-auto shrink-0" // h-8 ≈ 32px; tweak as you like
            />
            <span className="font-extrabold leading-none tracking-tight text-2xl sm:text-3xl lg:text-4xl">
              BitStore
            </span>
          </div>
        </div>

        {children}
      </section>
    </div>
  );
};

export default layout;
