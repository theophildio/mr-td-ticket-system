import Env from "../../assets/e.png";
import Fb from "../../assets/fb.png";
import In from "../../assets/in.png";
import X from "../../assets/x.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-neutral text-neutral-content py-5 md:py-10">
        <div className="w-11/12 mx-auto grid md:grid-cols-5 gap-5 md:gap-20">
          <div>
            <h6 className="footer-title text-lg">TD - Ticket System </h6>
            <p>
              <small>
                TD-Ticket System is a simple helpdesk platform that helps teams
                track, manage, and resolve customer support tickets efficiently
                in one place.
              </small>
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-xs">
            <h6 className="footer-title text-lg">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Us</a>
          </nav>
          <nav className="flex flex-col gap-2 text-xs">
            <h6 className="footer-title text-lg">Services</h6>
            <a className="link link-hover">Products & Services</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav className="flex flex-col gap-2 text-xs">
            <h6 className="footer-title text-lg">Information</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className="flex flex-col gap-2 text-xs">
            <h6 className="footer-title text-lg">Social Links</h6>
            <a className="link link-hover flex gap-1 items-center"><img src={X} alt="X" />@TD - Ticket System</a>
            <a className="link link-hover flex gap-1 items-center"><img src={In} alt="X" />@TD - Ticket System</a>
            <a className="link link-hover flex gap-1 items-center"><img src={Fb} alt="X" />@TD - Ticket System</a>
            <a className="link link-hover flex gap-1 items-center"><img src={Env} alt="X" />@TD - Ticket System</a>
          </nav>
        </div>
      </footer>
      <footer className="bg-neutral text-neutral-content border-base-300 px-4 md:px-16 py-4">
        <div className="border-t w-full py-5">
          <p className="text-center text-sm">© 2026 TD - Ticket System | All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
