import { motion } from "framer-motion";
import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
 
const Transitions = (props:{ key?:string,children?:JSX.Element | JSX.Element[] }) => {
  const location = useLocation()
console.log(location.pathname);
  return (
    <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    key={props.key??location.pathname} 
      
    transition={{ duration: 1 }} className="overflow-clip z-10"
    >
        {props.children}
    </motion.div>
)};
export default Transitions;