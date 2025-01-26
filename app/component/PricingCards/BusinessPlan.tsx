'use client'

const BusinessPlan = () => (
<div className="flex flex-col justify-between p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
<h3 className="mb-4 text-2xl font-semibold">Business</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Για μεγαλύτερες επιχειρήσεις</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold"> 750 €</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
          </svg>
          <span>Απο 4 μέχρι 7 σελίδες</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
          </svg>
          <span>Gallery με φωτογραφίες & Έργα</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
          </svg>
          <span>Domain</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
          </svg>
          <span>Επαγγελματικό Email info@businessname.gr</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
          </svg>
          <span>Βέλτιστες πρακτικές για SEO</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
          </svg>
          <span>24/7 Support</span>
        </li>
        
      </ul>
      <a
    href="#contact"
    className="font-bold text-black dark:text-white hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black bg-transparent border border-black dark:border-white px-4 py-2 rounded transition-all duration-300 mt-auto"
  >
        Ξεκινήστε
      </a>
    </div>
  );
  
  export default BusinessPlan;
  