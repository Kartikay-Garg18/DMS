
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse,faUserGraduate ,faPaw,faHandsHoldingChild,faMoneyBillWheat,faDollarSign} from '@fortawesome/free-solid-svg-icons';
function SideBar(){
    
    
    return (
      <>
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#406b81]" >
            <div className="mb-2 p-4">
              <Typography variant="h5" className='text-black text-2xl' color=""
  >
               Events
              </Typography>
            </div>
            <List>
              <ListItem className='text-[#212121] font-semibold'>
              <FontAwesomeIcon icon={faHeartPulse} className='mx-2' />
                HeathCare
              </ListItem>
              <ListItem className='text-[#212121] font-semibold'>
              <FontAwesomeIcon icon={faUserGraduate} className='mx-2' />
              Education Aid
              </ListItem >
              <ListItem className='text-[#212121] font-semibold'>
              <FontAwesomeIcon icon={faPaw} className='mx-2' />
                Animal Welfare
              </ListItem>
              <ListItem className='text-[#212121] font-semibold'>
              <FontAwesomeIcon icon={faHandsHoldingChild} className='mx-2' />
                Orphan Care
              </ListItem>
              <ListItem className='text-[#212121] font-semibold'>
              <FontAwesomeIcon icon={faMoneyBillWheat} className='mx-2' />
                Food Banks
              </ListItem>
              <ListItem className='text-[#212121] font-semibold'>
              <FontAwesomeIcon icon={faDollarSign} className='mx-2' />
                Other
              </ListItem>
            </List>
          </Card>
        
        </>
    );
}

export default SideBar;