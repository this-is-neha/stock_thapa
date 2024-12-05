import { ReactNode } from "react";
import { FooterComponent, HeaderComponent, HomeBannerComponent } from "../../components/common";
import LoginPage from "../auth/login";
import ban from "../../assets/pexels-photo-6771900.jpeg"
const LandingPage = (): ReactNode => {
  return (
    <>
      <body className="bg-white text-gray-800">
       <LoginPage/>
      </body>
    </>
  );
};

export default LandingPage;
