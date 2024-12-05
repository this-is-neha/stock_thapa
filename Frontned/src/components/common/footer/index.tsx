import { ReactNode } from "react";
import { FaFacebook, FaGithub, FaHeartbeat, FaLinkedin, FaYoutube } from 'react-icons/fa';

const FooterComponent = (): ReactNode => {
  const socialHandles = [
    { media: "Facebook", url: "https://www.facebook.com" },
    { media: "Youtube", url: "https://www.youtube.com" },
    { media: "Linkedin", url: "https://www.linkedin.com" },
    { media: "Github", url: "https://www.github.com" }
  ];

  const socialIconStyle = "text-2xl mx-4 hover:scale-110 hover:cursor-pointer transition-all duration-300";

  return (
    <footer style={{ backgroundColor: '#A599B5' }} className="text-white min-h-[25vh] w-full text-center flex flex-col justify-around items-center py-6">
    
      <span className="text-sm font-bold text-white">
        <b className="font-main text-theme-b text-black font-bold text-xl">Connect</b>
      </span>

      <div className="flex flex-row justify-evenly items-center mx-auto my-4">
        {socialHandles.map(({ media, url }) => (
          <a key={media} href={url} target="_blank" rel="noopener noreferrer" className={socialIconStyle}>
            {media === "Facebook" && <FaFacebook className="hover:text-blue-600" />}
            {media === "Youtube" && <FaYoutube className="hover:text-red-600" />}
            {media === "Linkedin" && <FaLinkedin className="hover:text-blue-400" />}
            {media === "Github" && <FaGithub className="hover:text-theme-w-alt" />}
          </a>
        ))}
      </div>

      <hr className="w-[60%] border-theme-b mb-4" />

      <span className="font-light text-md text-white">
        Designed with <FaHeartbeat className="inline-block text-red-700 font-bold text-xl" /> | All copyright reserved @2024
      </span>

      <span className="text-sm font-light text-white">Powered by <b>React</b> | Hosted on <b>Vercel</b></span>

      <div className="text-center text-gray-500 text-lg mt-6 text-white">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
