import { Carousel, IconButton } from "@material-tailwind/react";

function CarouselCustomNavigation(props) {
  return (
    <Carousel
    className={` h-[90vh] ${props.className}`}
    prevArrow={({ handlePrev }) => (
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handlePrev}
        disabled={props.disable}
        className={`!absolute top-2/4 left-4 -translate-y-2/4 ${props.hidden}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </IconButton>
    )}
    nextArrow={({ handleNext }) => (
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handleNext}
        disabled={props.disable}
        className={`!absolute top-2/4 !right-4 -translate-y-2/4 ${props.hidden}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </IconButton>
    )}
      autoplay={true} 
      autoplayDelay={3000} 
      loop={true} 
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-8 left-2/4 z-40 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D"
        alt="image 1"
        className="h-full w-full object-fit"
      />
      <img
        src="https://images.gofundme.com/VDivmXwnw5CJK2zkJjHlVCR6mO0=/1200x800/https://d2g8igdw686xgo.cloudfront.net/56384756_1619456772543172_r.jpeg"
        alt="image 2"
        className="h-full w-full object-fit"
      />
      <img
        src="http://chetanrana.in/wp-content/uploads/2022/03/pexels-photo-6647119.jpeg"
        alt="image 3"
        className="h-full w-full object-fit"
      />
      <img
        src="https://cleanwaterinternational.org/wp-content/uploads/2021/11/addtext_com_MDEzNzE5MTY5NjM-min.jpg"
        alt="image 4"
        className="h-full w-full object-fit"
      />
    </Carousel>
  );
}

export default CarouselCustomNavigation;
