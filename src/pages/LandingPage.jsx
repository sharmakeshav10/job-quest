import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";
import CustomCard from "@/components/CustomCard";

const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col gap-10 py-10 sm:py-20">
        {/* heading and subheading */}
        <div className="text-center">
          <h1 className="flex flex-col items-center justify-center text-2xl sm:text-5xl lg:text-7xl font-bold tracking-tighter">
            Your Path to the Perfect Career{" "}
            <span>
              Starts Here at{" "}
              <span className="underline decoration-sky-500">JobQuest</span>
            </span>
          </h1>
          <p className="text-xs sm:text-xl mt-4 text-gray-700">
            Find top talent, showcase your skills, and connect with leading
            professionals and companies.
          </p>
        </div>

        {/* buttons */}
        <div className="flex gap-4 justify-center">
          <Link to={"/jobs"}>
            <Button variant="purple" size="lg">
              Find Jobs
            </Button>
          </Link>
          <Link to={"/post-job"}>
            <Button variant="lime" size="lg">
              Post a Job
            </Button>
          </Link>
        </div>

        {/* carousel */}
        <Carousel
          className="w-full py-12 "
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="flex justify-center gap-4 items-center sm:gap-20">
            {companies.map(({ name, path, id }) => {
              return (
                <CarouselItem className="basis-1/3 lg:basis-1/6">
                  <img
                    src={path}
                    alt={name}
                    className="h-12 sm:h-16 object-contain"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* cards */}
        <div className="flex flex-col gap-6 sm:flex-row justify-between ">
          {/* first */}

          <CustomCard
            title={"For Job Seekers"}
            content={"Search and apply for jobs, track applications, and more."}
          />
          {/* second */}
          <CustomCard
            title={"For Employers"}
            content={
              "Post jobs, manage applications, and find the best candidates."
            }
          />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
