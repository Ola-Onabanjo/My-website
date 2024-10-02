import { motion } from 'framer-motion';


export default function Skills(){
    return(
        <div className="skill-container">
              <motion.ul
               initial={{y:-1000}}
               animate={{y:0}}
               transition={{
                   duration: '2',
                   delay: '0.5'
               }}
              >
                <li className="list-items">HTML & CSS : Mastery in writing clean, semantic HTML and modern CSS for responsive, perfect designs.</li>
                <li className="list-items">JavaScript : Strong proficiency in JavaScript for creating dynamic, interactive interfaces and features.</li>
                <li className="list-items">React.js : Experienced in building modular, reusable components with React for fast, scalable web applications.</li>
                <li className="list-items">Version Control (Git) : Proficient in using Git for version control and collaborating effectively with teams.</li>
            </motion.ul>
        </div>
    )
}