
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse,faUserGraduate ,faPaw,faHandsHoldingChild,faMoneyBillWheat,faDollarSign} from '@fortawesome/free-solid-svg-icons';
function SideBar({ setSelectedCategory }){
    
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
    
    return (
      <>
          <Card className="fixed top-0 left-0 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#406b81]">
            <div className="mb-2 p-4">
              <Typography variant="h5" className='text-black text-2xl' color=""
  >
               Events
              </Typography>
            </div>
            <List>
              <ListItem className='text-[#212121] font-semibold cursor-pointer' onClick={() => handleCategoryClick('HealthCare')}>
              <FontAwesomeIcon icon={faHeartPulse} className='mx-2' />
                HeathCare
              </ListItem>
              <ListItem className="text-[#212121] font-semibold cursor-pointer" onClick={() => handleCategoryClick('Education Aid')}>
              <FontAwesomeIcon icon={faUserGraduate} className='mx-2' />
              Education Aid
              </ListItem >
              <ListItem className="text-[#212121] font-semibold cursor-pointer" onClick={() => handleCategoryClick('Animal Welfare')}>
              <FontAwesomeIcon icon={faPaw} className='mx-2' />
                Animal Welfare
              </ListItem>
              <ListItem className="text-[#212121] font-semibold cursor-pointer" onClick={() => handleCategoryClick('Orphan Care')}>
              <FontAwesomeIcon icon={faHandsHoldingChild} className='mx-2' />
                Orphan Care
              </ListItem>
              <ListItem className="text-[#212121] font-semibold cursor-pointer" onClick={() => handleCategoryClick('Food Banks')}>
              <FontAwesomeIcon icon={faMoneyBillWheat} className='mx-2' />
                Food Banks
              </ListItem>
              <ListItem className="text-[#212121] font-semibold cursor-pointer" onClick={() => handleCategoryClick('Other')}>
              <FontAwesomeIcon icon={faDollarSign} className='mx-2' />
                Other
              </ListItem>
            </List>
          </Card>
        
        </>
    );
}

export default SideBar;