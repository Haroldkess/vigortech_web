import React from "react";

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto px-6 py-12 relative overflow-hidden bg-[#171615A6]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
                <div className="max-w-xs">
                    <img
                        alt="VigorTech logo with green checkmark and text"
                        className="mb-4"
                        height="50"
                        width="150"
                        src="/logo.svg"
                    />
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Empowering businesses through innovative technology solutions,
                        educational resources, and strategic investments
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6 text-sm text-gray-300">
                    <div className="space-y-3">
                        <h3 className="text-gray-400">Company</h3>
                        <ul className="space-y-2">
                            <li><a className="hover:text-white" href="#">About us</a></li>
                            <li><a className="hover:text-white" href="#">Blog</a></li>
                            <li><a className="hover:text-white" href="#">Career</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-gray-400">Products</h3>
                        <ul className="space-y-2">
                            <li><a className="hover:text-white" href="#">Technology</a></li>
                            <li><a className="hover:text-white" href="#">Education</a></li>
                            <li><a className="hover:text-white" href="#">Finance</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-gray-400">Social media</h3>
                        <ul className="space-y-2">
                            <li><a className="hover:text-white" href="#">X (Twitter)</a></li>
                            <li><a className="hover:text-white" href="#">Instagram</a></li>
                            <li><a className="hover:text-white" href="#">Facebook</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-gray-400">Support</h3>
                        <ul className="space-y-2">
                            <li><a className="hover:text-white" href="#">Contact us</a></li>
                            <li><a className="hover:text-white" href="#">Community</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="border-gray-700 my-8" />

            <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm gap-4">
                <p>©2021 Vigortech, Inc. All rights reserved</p>
                <div className="flex space-x-6 text-gray-400 text-lg">
                    <a aria-label="Facebook" className="hover:text-white" href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a aria-label="Instagram" className="hover:text-white" href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a aria-label="X Twitter" className="hover:text-white" href="#">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
