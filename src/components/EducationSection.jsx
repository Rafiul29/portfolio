const EducationSection = () => {
  return (
    <section id="eudcation" className="">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-zinc-300 mt-8 mb-8 md:mb-10 ">
        Education
      </h2>
      <div className="flex justify-center items-center">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 ">
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">
              Present
            </time>
            <h3 className="text-xl font-semibold dark:text-white">
              Islamic University, Kushtia
            </h3>
            <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
              Department of Computer Science and Engineering
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default EducationSection;
