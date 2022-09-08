import Image from "next/image";

const Banner = () => {
  return (
    <>
      <Image
        src="/images/test.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  );
};

export default Banner;
