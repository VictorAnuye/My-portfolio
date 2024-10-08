const Footer = () => {
    return (
        <div>
            <footer>
            <div className="flex justify-end">
                    <div>
                        <Image 
                        width={100}
                        height={100}
                        src={mylogo}
                        alt="brand logo"/>
                    </div>
                </div>

                <div className="flex justify-end gap-6">
                    <div className="flex text-white md:text-xl text-sm hover:text-[#B7B7B7] hover:scale-110 hover:shadow-lg transition duration-800">
                       <a href="">Home</a>
                    </div>
                    <div className="flex text-white md:text-xl text-sm hover:text-[#B7B7B7] hover:scale-110 hover:shadow-lg transition duration-800">
                       <a href="">About Us</a>
                    </div>
                    <div className="flex text-white md:text-xl text-sm hover:text-[#B7B7B7] hover:scale-110 hover:shadow-lg transition duration-800">
                        <a href="https://wa.link/ll7sld">Contact Us</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
 
export default Footer;