const Intro = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex mt-28 justify-between">
        <div className="max-w-lg">
          <h1 className="font-bold text-4xl mb-10">
            Hi, I am John, <br /> Creative Technologist
          </h1>
          <p className="font-normal text-base mb-9">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div>
            <a
              className="btn rounded-sm text-xl font-medium py-4 px-4 text-white"
              href="#"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div>
          <img src="images/avtar.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
