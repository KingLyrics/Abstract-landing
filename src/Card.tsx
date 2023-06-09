type card = {
  src: string;
  title: string;
};

const Card = ({ src, title }: card) => {
  return (
    <div className="flex items-center max-w-xl mx-auto gap-3">
      <div>
        <img src={src} alt="" className="h-[60px] w-[60px]" />
      </div>
      <div className="text-lg md:text-xl">
        <h1 className="font-bold w-[220px] md:w-[300px]">{title}</h1>
        <p className="w-72">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex autem ad
          porro?
        </p>
        <h2 className="text-lightBlue flex items-center mt-7">
          Learn More
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Card;
