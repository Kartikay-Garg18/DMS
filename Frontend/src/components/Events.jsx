
import React, { useState, useEffect } from 'react';
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";
import { PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon } from "@heroicons/react/24/solid";

function Events() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsSidebarVisible(false);
    } else {
      setIsSidebarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex">
      {isSidebarVisible && (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#607d8b]" >
          <div className="mb-2 p-4">
            <Typography variant="h5" className='text-[#b2ebf2] text-2xl' color=""
>
             Events
            </Typography>
          </div>
          <List>
            <ListItem className='text-[#212121] font-semibold'>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5 text-[#212121]" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <ListItem className='text-[#212121] font-semibold'>
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5 text-[#212121]" />
              </ListItemPrefix>
              Orders
            </ListItem >
            <ListItem className='text-[#212121] font-semibold'>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5 text-[#212121]" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem className='text-[#212121] font-semibold'>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5 text-[#212121]" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem className='text-[#212121] font-semibold'>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5 text-[#212121]" />
              </ListItemPrefix>
              Inbox
            </ListItem>
            <ListItem className='text-[#212121] font-semibold'>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5 text-[#212121]" />
              </ListItemPrefix>
              Logout
            </ListItem>
          </List>
        </Card>
      )}
      <div className="flex-1 p-4">
        <Typography variant="h4" color="blue-gray">
          Main Content
        </Typography>
        {/* Add your main content here */}
      </div>
    </div>
  );
}

export default Events;

