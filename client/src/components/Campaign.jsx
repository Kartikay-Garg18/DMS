import { differenceInDays, parse } from 'date-fns';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock ,faBuildingColumns} from "@fortawesome/free-solid-svg-icons";

function Campaign(props) {
    const imgObj = {
      beneficiary: props.beneficiaryImage,
      qr: props.qrImage
    };
    
  const amtCollected=props.amount*.25;
  const progress = (amtCollected / props.amount) * 100;
  const startDate = parse(props.startDate, 'yyyy-MM-dd', new Date());
  const endDate = parse(props.endDate, 'yyyy-MM-dd', new Date());
  const daysLeft = differenceInDays(endDate, startDate);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(amount);
      };
    
      const handleDonate = () => {
        const paymentDetailsElement = document.getElementById('paymentDetails');
        if (paymentDetailsElement) {
          paymentDetailsElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      
    return (
      <div className='flex flex-col gap-5 mx-[5vw] justify-center items-center'>
        <div className="flex flex-col gap-2 items-center mt-5 mx-2 box-border">
            <h1 className="text-2xl md:text-3xl font-bold text-wrap text-center mx-2">{props.MainCause}</h1>
            <div className="flex flex-col justify-center items-center lg:flex-row ">
                <div className="flex items-center justify-center my-3 w-full md:w-[85%] lg:w-[70%]">
                    <img src={imgObj.beneficiary.name!=""?imgObj.beneficiary.name:"../../public/images/fundraiserPlaceholderImg.jpg"}
                        alt="Beneficiary Cover Photo"
                        className="h-auto w-[90%] rounded-md shadow-md object-fill "
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-[90%] md:w-[85%] lg:w-[40%] gap-3 my-2 shadow-xl bg-gray-100 p-3">
                
                <button className="mt-2 p-3 rounded-lg bg-red-400 text-xl font-semibold text-white hover:bg-pink-400 w-[50%] " onClick={handleDonate}>Donate Now</button>
                <h2 className=" text-3xl">{formatCurrency(props.amount)}</h2>
                <p className="text-lg text-gray-600">Collected <span className="font-semibold text-black">{formatCurrency(amtCollected)}</span> of goal </p>
                <div className="bg-blue-100 rounded-full h-2.5  w-[70%]">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
        <div className="flex gap-1 ">
          <FontAwesomeIcon icon={faClock} className="mt-2.5 p-1" />
          <p color="gray" className="text-md mt-2 flex p-1 ">
            {daysLeft} days left
          </p>
        </div>
        <div className='p-2 rounded-lg w-auto bg-yellow-200 text-center border-black  font-semibold'>Campaigner: <span className='text-pink-400'>{props.username}</span> </div>
        <div className='p-2 rounded-lg w-auto bg-yellow-200 text-center border-black  font-semibold'>Benificiary: <span className='text-pink-400'>{props.firstName+" "+ props.lastName}</span> </div>
        </div>
                
            </div>
            
        </div>

        <div className='flex- flex-col gap-3 justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-2xl font-bold text-center'>About the Fundraiser</h2>
                <p className='text-[17px] text-gray-700 text-center lg:w-[70%]'>{props.about} </p>
            </div>
            <div className='flex flex-col justify-center items-center rounded-lg shadow-lg mt-5 lg:w-[70vw]
            lg:mx-auto ' id='paymentDetails'>
                <h2 className='p-2 text-2xl '>Payment Methods</h2>
                <div className="flex justify-center mb-3">
            <div className="h-1 w-24 bg-yellow-500"></div>
        </div>
                <div id="payViaBank" className='flex flex-col items-center p-3'>
                    <h6 className='text-wrap text-center text-lg'>Transfer directly to the Bank account of this Fundraiser. Only INR transfers are allowed.
                    </h6>
                    <FontAwesomeIcon icon={faBuildingColumns} className='h-24 w-24 mb-4'/>
                        <div className='flex flex-col items-start'>
                        <p className='text-lg'><span className='font-serif font-semibold'>Bank Name:</span> {props.BankName}</p>
                        <p className='text-lg'><span className='font-serif font-semibold'>A/C Number</span> {props.BankAcc}</p>
                        <p className='text-lg'><span className='font-serif font-semibold'>IFSC:</span>  {props.ifsc}</p>
                        </div>
                </div>
                {props.upi!="" ?<div id="payViaUPI" className='flex flex-col items-center p-3'>
                <h6 className='text-wrap text-center text-lg'>You can also pay via Paytm/UPI QR code
                </h6>
                {props.upi!=""?
                        <p className='text-lg'><span className='font-serif font-semibold'>UPI:</span>  {props.upi}</p>:null}
                { imgObj.qr.name!=""?<p>Scan the QR code from the app and make payment.</p>:null}
                { imgObj.qr.name!=""? <img src={imgObj.qr.name!=""?imgObj.qr.name:null} alt="QR Code" className='h-48 w-48'/>:null}
                </div>:null}
            </div>
        </div>
      </div>
    );
  }
  
  export default Campaign;