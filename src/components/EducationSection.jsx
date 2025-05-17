const EducationSection = () => {
  return (
    <section id="education" className="py-10">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-zinc-300 mt-8 mb-8 md:mb-10">
        My Education
      </h2>
      <div className="flex justify-center items-center">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {/* University */}
          <li className="ms-4 mb-8">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
              2019 – 2024
            </time>
            <h3 className="text-xl font-semibold dark:text-white">
              Islamic University, Kushtia
            </h3>
            <p className="text-base font-normal text-gray-300 dark:text-gray-400">
              B.Sc. in Computer Science and Engineering
            </p>
          </li>

          {/* HSC */}
          <li className="ms-4 mb-8">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
              2017
            </time>
            <h3 className="text-xl font-semibold dark:text-white">
            Govt. Shaheed Bulbul Collage, Pabna
            </h3>
            <p className="text-base font-normal text-gray-300 dark:text-gray-400">
              Higher Secondary Certificate (Science)
            </p>
          </li>

          {/* SSC */}
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
              2015
            </time>
            <h3 className="text-xl font-semibold dark:text-white">
            Rajapur High School, Natore
            </h3>
            <p className="text-base font-normal text-gray-300 dark:text-gray-400">
              Secondary School Certificate (Science)
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default EducationSection;

