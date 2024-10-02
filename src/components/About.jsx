import Img from '../Images/Img1.jpg';
import { motion } from 'framer-motion';
export default function About(){
    return(
        <div className='about-container'>
            <motion.h1 
             initial={{x:-1000}}
             animate={{x:0}}
             transition={{
                 duration: '2.5',
                 delay: '0.5'
             }}
            className='about'>About Lexzy</motion.h1>
            <div className='img-about'>
            <motion.img 
            initial={{x: -1000}}
            animate={{x: 0}}
            transition={{
              duration: '3',
              delay: '0.5'
          }}
             className='img1' src={ Img } alt="Ola" />
            <motion.p 
            initial={{x: 1000}}
            animate={{x: 0}}
            transition={{
              duration: '4',
              delay: '0.5'
          }}
          className='about-paragraph'>Hi, I’m Olawale, a passionate frontend developer with a keen eye for design and a drive for creating seamless user experiences. With a background in web technologies and a strong focus on building responsive, accessible, and interactive websites, I aim to bridge the gap between design and functionality. My goal is to deliver digital solutions that not only look great but perform efficiently across all devices.
            </motion.p>
            </div>
        </div>
    )
}