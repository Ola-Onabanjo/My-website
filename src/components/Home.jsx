import { motion } from 'framer-motion';

export default function Home(){
    return(
        <div className="home-container">
            <motion.h1
            initial={{x:-1000}}
            animate={{x:0}}
            transition={{
                duration: '2',
                delay: '0.5'
            }}
            >CODE WITH LEXZY💻</motion.h1>
        </div>
    )
}