
import TextCard from '../TextCard/TextCard';
import '@coreui/coreui/dist/css/coreui.min.css';



function Offering(){

    const data=[
        {
            descript:"Starting a fundraiser on Ketto is absolutely free.",
            imgSrc:"https://cdn-icons-png.flaticon.com/128/883/883371.png"
        },

        {
            descript:"24x7 assistance from dedicated fundraiser managers throughout your fundraising journey.",
            imgSrc:"https://static.vecteezy.com/system/resources/thumbnails/047/123/304/small_2x/call-line-icon-illustration-isolated-on-white-background-vector.jpg"
        },
        {
            descript:"You can withdraw your funds at any point during the course of your fundraiser.",
            imgSrc:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS887tfBoyS0WjkevzE68fj2I2VTk0taaiaU73MSwcaEeZkGWWh"
        },
        {
            descript:"Get instant updates on your fundraiser's progress on a real-time dashboard.",
            imgSrc:"https://t4.ftcdn.net/jpg/06/52/32/93/360_F_652329305_aceoBby22AkLHJnmT7U4IHRpKloUvHsk.jpg"
        },
        {
            descript:"Accepts donations all cards, netbanking, UPI and online wallets.",
            imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5X10Yf7IHafjREEcbWZWHI9k5D6nZhDVMQ&s"
        },
        {
            descript:"You can be a part of volunteering opportunities and events.",
            imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKkjsxON-cGYT2-b6yJ_P449nTOp_1aUWSQ&s"
        }
    ]

        return (
          <>
          <h2 className="text-4xl font-bold text-center font-serif mt-[4rem] mb-[2rem]">What DAAN offers ?</h2>
           <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-yellow-500"></div>
          </div>
          <div className="container mx-auto py-5 w-[65%] sm:[45%]" >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((card, index) => (
                <TextCard key={index} imgSrc={card.imgSrc} description={card.descript} />
              ))}
            </div>
          </div>
          </>
        );
      }
      
      export default Offering;