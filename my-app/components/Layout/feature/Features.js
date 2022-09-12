// import infoFeature from "../../../pages/title";

const Features = (props) => {
  // console.log(props);

  return (
    <>
      <div className={`max-w-5xl mx-auto`}>
        <h3 className="mb-6 text-2xl">Featured works</h3>
        <div className="flex">
          <div>
            <img src={props.image} alt="" />
          </div>
          <div className="ml-5">
            <h3 className="font-bold text-3xl mb-6">Designing Dashboards</h3>
            <div className="mb-6">
              <span className="text-lg font-black text-white bg-black rounded-2xl py-1 px-2">
                2020
              </span>
              <span className="text-slate-300 text-xl font-normal">
                Dashboard
              </span>
            </div>

            <p className="text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
