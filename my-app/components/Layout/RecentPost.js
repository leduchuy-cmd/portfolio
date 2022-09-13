const RecentPost = () => {
  return (
    <>
      <div className="bg-post mt-20">
        <div className="py-7 max-w-5xl mx-auto">
          <div className="flex justify-between">
            <p className="recent text-2xl font-normal mb-7">Recent posts</p>
            <a href="#" className="view font-normal mb-7">
              View all
            </a>
          </div>
          <div className="flex justify-around">
            <div className="bg-white mr-5 rounded">
              <div className="py-5 px-6">
                <h3 className="font-bold text-3xl mb-8">
                  Making a design system from scratch
                </h3>
                <p className="mb-6 text-2xl">
                  12 Feb 2020 <span className="mx-6">|</span> Design, Pattern
                </p>
                <p className="font-normal mb-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="bg-white rounded">
              <div className="py-5 px-6">
                <h3 className="font-bold text-3xl mb-8">
                  Making a design system from scratch
                </h3>
                <p className="mb-6 text-2xl">
                  12 Feb 2020 <span className="mx-6">|</span> Design, Pattern
                </p>
                <p className="font-normal mb-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
