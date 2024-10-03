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
                <li className="list-items"><b>HTML & CSS :</b> Mastery in writing clean, semantic HTML and modern CSS for responsive, perfect designs.</li>
                <li className="list-items"><b>JavaScript :</b> Strong proficiency in JavaScript for creating dynamic, interactive interfaces and features.</li>
                <li className="list-items"><b>React.js :</b> Experienced in building modular, reusable components with React for fast, scalable web applications.</li>
                <li className="list-items"><b>Version Control (Git) :</b> Proficient in using Git for version control and collaborating effectively with teams.</li>
            </motion.ul>
        </div>
    )
}