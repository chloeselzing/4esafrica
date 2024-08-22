import React from "react";
import { motion } from "framer-motion";
import * as Components from "@/components";

const MiniBanner = ({bannerHeading}) => {
  return (
    <div>
      <div className="w-full lg:h-[20vh] banner mini text-whiteBackground mt-[100px] flex justify-center items-center">
        <Components.ScrollYAnimation>
          <motion.div
            className="grid place-items-center gap-6 h-auto w-[87vw]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Components.LargeHeading heading={bannerHeading} />
          </motion.div>
        </Components.ScrollYAnimation>
      </div>
    </div>
  );
};

export default MiniBanner;
