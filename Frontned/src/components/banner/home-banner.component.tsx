// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { HeaderComponent, FooterComponent } from "../common";
// import Ban from "../../../src/assets/pexels-photo-6771900.jpeg"
// declare global {
//   interface Window {
//     driftt: Drift;
//     drift: Drift;
//   }
// }
// interface Drift {
//   init?: boolean;
//   invoked?: boolean;
//   methods?: string[];
//   factory?: (method: string) => (...args: any[]) => Drift;
//   load?: (id: string) => void;
//   [key: string]: any;
// }
// const HomeBannerComponent = () => {
//   return (
//     <>
//       <HeaderComponent />
//       <div className="bg-white">
//         <div>
//           <div className="relative w-screen h-screen flex justify-center overflow-hidden items-center">
//             <p>
//               The content info is here
//             </p>
//           </div>
//         </div>
//       </div>
//       <FooterComponent />
//     </>
//   );
// };



// export default HomeBannerComponent;


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeaderComponent, FooterComponent } from "../common";
import Ban from "../../../src/assets/stock.jpg"

declare global {
  interface Window {
    driftt: Drift;
    drift: Drift;
  }
}

interface Drift {
  init?: boolean;
  invoked?: boolean;
  methods?: string[];
  factory?: (method: string) => (...args: any[]) => Drift;
  load?: (id: string) => void;
  [key: string]: any;
}

const HomeBannerComponent = () => {
  return (
    <>
     <HeaderComponent/>
      <div className="bg-gray-800">
       
        <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
          <img
            src={Ban}
            alt="Stock Market Banner"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-70" // Make the image slightly transparent
          />
          
          <div className="z-10 text-center text-white p-8 max-w-lg mx-auto">
            <h1 className="text-4xl font-bold mb-4">Your Personal Stock Market Dashboard</h1>
            <p className="text-lg mb-6">Track, analyze, and invest in the stock market like a pro. Get real-time updates and expert insights.</p>
            <a href="#cta" className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300">
              Start Investing
            </a>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default HomeBannerComponent;

