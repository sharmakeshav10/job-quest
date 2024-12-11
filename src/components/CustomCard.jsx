import React from "react";

const CustomCard = ({ title, content }) => {
  return (
    <div className="border sm:w-1/2 w-full p-6 px-8 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
      <h3 className="sm:text-2xl text-3xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700 dark:text-gray-400">{content}</p>
    </div>
  );
};

export default CustomCard;
