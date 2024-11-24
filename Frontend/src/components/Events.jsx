import React, { useState ,useEffect} from 'react';
import SideBar from './Events/SideBar';
import MainContent from './Events/MainContent';

function Events() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');

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
      <div className="flex">
      {isSidebarVisible && (
        <SideBar setSelectedCategory={setSelectedCategory} />
      )}
      <div className={`flex-1 ${isSidebarVisible ? 'ml-[20rem]' : ''}`}>
      <MainContent selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default Events;

