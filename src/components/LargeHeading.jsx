import React from "react";

const LargeHeading = ({ heading, color }) => {
  return (
    <div
     
      className={`lg:text-5xl text-${color} text-4xl font-bold mb-4 text-center`}
    >
      {heading}
    </div>
  );
};

export default LargeHeading;
