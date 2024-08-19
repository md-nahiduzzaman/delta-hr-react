const Heading = ({ heading }) => {
  return (
    <div>
      <div className="mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
