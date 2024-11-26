import React, {useState, useEffect} from "react";
import FundCard from "./FundCard";
import { getCampaigns } from "../../services/campaigns";




const MainContent = ({selectedCategory}) => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCampaigns();
        console.log(response.data);
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchData();
  }, []);

  const isLive = (fund) => {
    const currentDate = new Date();
    const startDate = new Date(fund.startDate);
    const endDate = new Date(fund.endDate);

    return currentDate >= startDate && currentDate <= endDate;
  };
  console.log(selectedCategory);
  

  const filteredData = selectedCategory
    ? campaigns.filter(fund => fund.category === selectedCategory)
    : campaigns.filter(fund => isLive(fund));

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
              fundRaiser={fund.benificiaryName}
              strtDate={fund.startDate}
              endDate={fund.endDate}
              amt={fund.targetAmount}
              amtCollected={fund.raisedAmount}
              category={fund.category}
              description={fund.description}
              // isLive={fund.isLive}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainContent;