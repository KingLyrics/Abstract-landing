const Footer = () => {
  return (
    <div className=" bg-black text-white w-full p-7 lg:p-10 space-y-14 ">
      <div className="grid grid-cols-2  lg:flex lg:flex-row md:mt-4 lg:space-x-11">
        <div className="space-y-3">
          <h1 className="font-bold text-2xl">Abstract</h1>
          <ul>
            <li>Start trial</li>
            <li>Pricing</li>
            <li>Download</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-2xl">Resources</h1>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release</li>
            <li>Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="space-y-3 mt-6 md:mt-0">
          <h1 className="font-bold text-2xl">Community</h1>
          <ul className="space-y-1">
            <li>Twitter</li>
            <li>LinkedLn</li>
            <li>Facebook</li>
            <li>Dribble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h1 className="font-bold text-2xl">Company</h1>
          <ul className="space-y-1 mt-3">
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
          <div className="mt-14">
            <h1 className="font-bold ">Contact us</h1>
            <p>info@abstract.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
