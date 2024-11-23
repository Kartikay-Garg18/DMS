import React, { useState ,useEffect} from 'react';
import SideBar from './Events/SideBar';
import MainContent from './Events/MainContent';

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
  
    return(
        <>
            <div className="flex">
                {isSidebarVisible && (
                    <SideBar></SideBar>)
                }
                <MainContent></MainContent>
            </div>
        </>
  );
}

export default Events;

