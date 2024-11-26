import React, {useState, useEffect} from "react";
import FundCard from "./FundCard";
import { getCampaigns } from "../../services/campaigns";

const data=[
  {
    id:"1",
    img:"https://kettocdn.gumlet.io/media/campaign/947000/947926/image/wid66ee777aa4163.jpg?w=300&dpr=1.3",
    fundRaiser:"Chetna Raina",
    strtDate:"2024-11-01",
    endDate:"2024-11-30",
    amt: 100000,
    amtCollected:34000,
    category:"HealthCare",
    description:"My Father Is Suffering From Kidney (renal) Failure. We Need Your Help To Provide For His Treatment",
    isLive:true

  },
  {
    id:"2",
    img:"https://kettocdn.gumlet.io/media/campaigns/950000/950882/image/7m9WItdy0Iq8tFnnHVYfDByqHaj60521f1TH7mGN.jpg?w=300&dpr=1.3",
    fundRaiser:"Darshan Harshad Vyas",
    strtDate:"2024-10-03",
    endDate:"2024-12-25",
    amt: 500000,
    amtCollected:3000,
    category:"HealthCare",
    description:"Support Baby of Mogra to get a healthy Life",
    isLive:true

  },
  {
    id:"3",
    img:"https://kettocdn.gumlet.io/media/campaign/959000/959310/image/wid67287695afae6.jpg?w=300&dpr=1.3",
    fundRaiser:"Pramod Dubey",
    strtDate: "2024-11-10",
    endDate: "2024-12-01",
    amt: 50000,
    amtCollected:30000,
    category:"Education Aid",
    description:"Stand with Pramod’s Family: Donate for Their Future",
    isLive:true

  },
  {
    id:"4",
    img:"https://kettocdn.gumlet.io/media/campaign/871000/871970/image/6659c1b0c3d70.jpg?w=768&dpr=1.3",
    fundRaiser:"SHALINI MEMORIAL SEWA SANSTHAN",
    strtDate:"7-9-24",
    endDate:"31-12-24",
    amt: 655000,
    amtCollected:250000,
    category:"Education Aid",
    description:"Classroom Support Program for Slum children in Lucknow",
    isLive:true

  },
]

const MainContent = ({selectedCategory}) => {
  
  // const [campaigns, setCampaigns] = useState([]);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getCampaigns();
  //       console.log(response.data);
  //       setCampaigns(response.data);
  //     } catch (error) {
  //       console.error('Error fetching campaigns:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const isLive = (fund) => {
  //   const currentDate = new Date();
  //   const startDate = new Date(fund.startDate);
  //   const endDate = new Date(fund.endDate);

  //   return currentDate >= startDate && currentDate <= endDate;
  // };
  // console.log(selectedCategory+"asha");
  

  const filteredData = selectedCategory
    ? data.filter(fund => fund.category === selectedCategory)
    : data.filter(fund => fund.isLive);
    

  return(
    <div className="w-full">
        <h2 className="text-4xl font-bold text-center font-serif mt-[2rem] mb-[1rem]">Active Fundraisers</h2>
        <div className="flex justify-center mb-3">
            <div className="h-1 w-24 bg-yellow-500"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 xl:justify-around">
       {filteredData.map((fund) => (
          <div key={fund._id} className="w-full sm:w-1/2 md:w-auto xl: p-1">
            <FundCard
              img={fund.img}
              fundRaiser={fund.fundRaiser}
              strtDate={fund.strtDate}
              endDate={fund.endDate}
              amt={fund.amt}
              amtCollected={fund.amtCollected}
              category={fund.category}
              description={fund.description}
              isLive={fund.isLive}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainContent;