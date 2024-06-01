const Breadcrumb = ({
  title,
  isShowContactButton,
}: Readonly<{
  title: string;
  isShowContactButton?: boolean;
}>) => {
  return (
    <div
      className="bg-[url('https://conteneurjd.com/wp-content/uploads/2023/06/separator.jpg')] bg-no-repeat bg-cover bg-center
        h-[180px] w-full flex items-center"
      data-aos="fade-up"
    >
      <div className="flex justify-between w-full">
        <p className="text-[40px] text-white uppercase ml-12">{title}</p>
        {isShowContactButton && (
          <div
            className=" border-white  flex justify-center items-center mr-12 px-8 bg-white text-black cursor-pointer hover:bg-primary hover:text-white"
            style={{
              clipPath: 'polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0% 0%)',
            }}
          >
            <button>Contact</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
