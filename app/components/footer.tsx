export default function Footer(){
    return(
        <div className="flex flex-col  footer">
        <div className="flex items-center text-center lg:text-left px-20 justify-evenly flex-col lg:flex-row">
            <div className="flex justify-center items-center"><h2 className="text-4xl font-bold lg:pr-20 text-white my-10 text-center lg:text-left">mabi</h2></div>
            <div className="flex flex-col px-10"><h6 className="font-semibold text-base text-white my-5">Product</h6>
            <p className="footer-p">Pricing</p>
            <p className="footer-p">Overview</p>
            <p className="footer-p">Browse</p>
            <p className="footer-p">Accesibility</p>
            </div>
            <div className="flex flex-col px-10"><h6 className="font-semibold text-base text-white my-5">Solutions</h6>
            <p className="footer-p">Brainstorming</p>
            <p className="footer-p">Ideation</p>
            <p className="footer-p">Wireframing</p>
            <p className="footer-p">Research</p>
            </div>
            <div className="flex flex-col px-10"><h6 className="font-semibold text-base text-white my-5">Resources</h6>
            <p className="footer-p">Help Center</p>
            <p className="footer-p">Blog</p>
            <p className="footer-p">Tutorials</p>
            <p className="footer-p">FAQs</p></div>
            <div className="flex flex-col px-10"><h6 className="font-semibold text-base text-white my-5">Support</h6>
            <p className="footer-p">Contact Us</p>
            <p className="footer-p">Developers</p>
            <p className="footer-p">Documentation</p>
            <p className="footer-p">Integartions</p>
            </div>
            <div className="flex flex-col px-10"><h6 className="font-semibold text-base text-white my-5">Company</h6>
            <p className="footer-p">About</p>
            <p className="footer-p">Press</p>
            <p className="footer-p">Events</p>
            <p className="footer-p">Request Demo</p></div>
        </div>
        <div className="border-t m-4 lg:flex">
            <div className="m-4"><p className="footer-p text-center">@ 2023 Mabi. All rights reserved.</p></div>
            <div className="flex justify-evenly px-4"><p className="p-4 footer-p">Terms</p><p className="footer-p p-4">Privacy</p><p className="footer-p p-4">Contact</p></div>
        </div>
        </div>
    )
}