import { motion } from "framer-motion";
import { ReactElement } from "react";
const animationConfiguration = {initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,    
  },
};
const Transitions = (props:{ children?:JSX.Element | JSX.Element[] }) => (
    <motion.div
        variants={(animationConfiguration as any)}
        initial="initial"
        animate="animate"
         exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
    >
        {props.children}
    </motion.div>
);
export default Transitions;