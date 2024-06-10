import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white">
            Subscribe to our newsletter for the latest updates in real estate.
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <a
              href="/login"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              <span>Sign Up Now</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Services
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Property Types</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Residential
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Commercial
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Land
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Resources</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Contact Support
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Contact Us</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="tel:+123456789"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                +123 456 789
              </a>
              <a
                href="mailto:info@realestate.com"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                info@nestquest.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <img
                src="https://gist.github.com/ShejanMahamud/1f2446a51e9766dc7d01b9a0115b45c1/raw/7d4e7ecfec11aeb842339981fd2ebea77c863575/logo.svg"
                alt=""
              />
            </div>
            <h1 className="text-lg font-medium text-white">NestQuest</h1>
          </div>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
            © Copyright {currentYear}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
