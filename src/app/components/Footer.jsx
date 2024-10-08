import Image from "next/image";
import logo from '../asset/CodeSandbox.png.png';


const Footer = () => {
    return (
        <div className="h-[300px] bg-[#160A3A] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white py-20 items-center">

            <div className="flex flex-col items-center justify-start space-y-10">
                <a className="btn btn-ghost text-xl font-medium flex items-center">
                    <Image src={logo} alt='logo' width={50} height={50} />
                    <span className="text-[34px]">CodeLearn</span>
                </a>
                <div>
                    <p className="tracking-[4px] text-sm">CONTACT</p>
                    <p className="text-[#FDDC02]">hollocode@gmail.com</p>
                </div>
            </div>

            <div className="space-y-20">
                <nav className="grid grid-flow-col gap-1">
                    <a className="link link-hover">Teachers</a>
                    <a className="link link-hover">Courses</a>
                    <a className="link link-hover">Scholarship</a>
                    <a className="link link-hover">Pricing</a>
                </nav>

                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>

            <div>
                <form>
                    <h6 className="font-bold text-base">Stay up to date</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="text-[#CFD1D6]">Stay Informed On How You Can Make a Difference
                            </span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn bg-[EAE34A] text-[#31215F] join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default Footer;