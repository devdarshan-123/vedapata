import React from "react";

const courses = [
  { title: "What are Vedas ?", tag: "Complementary", color: "bg-[#a85a24]" },
  { title: "Swaragnana Patha", tag: "Complementary", color: "bg-[#a85a24]" },
  { title: "Ganapati Mantram", tag: "Complementary", color: "bg-[#a85a24]" },
  { title: "Saraswati Mantram", tag: "Complementary", color: "bg-[#a85a24]" },
  { title: "Medha Suktam - Learning", tag: "LIVE", color: "bg-red-500" },
  { title: "Medha Suktam - eBook", tag: "PDF", color: "bg-red-400" },
  { title: "Medha Suktam - Practice", tag: "Recorded", color: "bg-red-500" },
  { title: "Medha Suktam - Brief", tag: "PDF", color: "bg-red-400" },
  { title: "Kshama Yachana Mantra", tag: "Complementary", color: "bg-[#a85a24]" },
];

const CourseContent = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-14 font-[Vidaloka]">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-lg sm:text-xl md:text-2xl text-[#5a4634] mb-6 md:mb-8">
          Course Content
        </h2>

        <div className="divide-y divide-[#ded6cc]">

          {courses.map((course, index) => (
            <div
              key={index}
              className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              py-4 md:py-5
              gap-2
              "
            >

              {/* Left Content */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4">

                <span className="text-[#6b5746] text-lg">⌄</span>

                <span className="text-[#5a4634] text-sm md:text-base">
                  {course.title}
                </span>

                <span
                  className={`text-xs md:text-sm text-white px-2 py-1 rounded ${course.color}`}
                >
                  {course.tag}
                </span>

              </div>

              <div className="text-xs md:text-sm text-[#61554C]">
                3 Lectures | 10 mins
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CourseContent;