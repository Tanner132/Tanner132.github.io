import { motion } from "framer-motion"
import { styles } from "../styles"

interface SectionWrapperProps {
    Component: React.FC,
}

const SectionWrapper = (Component: any, idName: string) => 
    function HOC() {
        return (
            <motion.section
                variants={
                    {
                        hidden: {},
                        show: {
                            transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0,
                            },
                        }
                    }
                }
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>&nbsp;</span>
                <Component />
            </motion.section>
        )
    };

export default SectionWrapper