import React from "react";
import { Typography } from "@material-tailwind/react";


function MainContent() {
  return(
    <div className="flex-1 p-4">
        <Typography variant="h4" color="blue-gray">
          Main Content
        </Typography>
        {/* Add your main content here */}
      </div>
  )
}

export default MainContent;