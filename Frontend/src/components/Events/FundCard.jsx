import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Typography, IconButton } from '@material-tailwind/react';
import { differenceInDays, parse, isAfter } from 'date-fns';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function FundCard(props) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isLive, setIsLive] = useState(props.isLive);

  useEffect(() => {
    const endDate = parse(props.endDate, 'yyyy-MM-dd', new Date());
    const today = new Date();
    if (isAfter(today, endDate)) {
      setIsLive(false);
    }
  }, [props.endDate]);

  const startDate = parse(props.strtDate, 'yyyy-MM-dd', new Date());
  const endDate = parse(props.endDate, 'yyyy-MM-dd', new Date());
  const daysLeft = differenceInDays(endDate, startDate);
  const progress = (props.amtCollected / props.amt) * 100;

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...';
    }
    return description;
  };

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };


  if (!isLive) {
    return null;
  }

  return (
    <Card className="w-full max-w-[20rem] shadow-lg max-h-auto cursor-pointer hover:scale-[1.025]">
      <CardHeader floated={false} color="blue-gray" className="h-[150px] md:h-auto">
        <img
          src={props.img}
          alt="fund"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
          onClick={handleHeartClick}
        >
          <FontAwesomeIcon
            icon={isHeartClicked ? faHeartSolid : faHeartRegular}
            className="h-6 w-6"
          />
        </IconButton>
      </CardHeader>
      <CardBody>
        <Typography color="black" className="font-semibold text-lg text-ellipsis">
          {truncateDescription(props.description)}
        </Typography>
        <div className="mt-4 flex justify-between items-center">
          <Typography color="red" className="font-semibold text-xl">
          {formatCurrency(props.amt)} raised
          </Typography>
          <Typography color="gray" className="text-sm">
            by {props.fundRaiser}
          </Typography>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex gap-1 mt-2">
          <FontAwesomeIcon icon={faClock} className="mt-2 p-1" />
          <Typography color="gray" className="text-sm mt-2 flex p-1">
            {daysLeft} days left
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export default FundCard;