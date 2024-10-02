import { motion } from 'framer-motion';


export default function Featured(){
    return(
        <motion.div
        initial={{y:-1000}}
        animate={{y:0}}
        transition={{
            duration: '3',
            delay: '0.5'
        }}
         className="featured-container">
            <p className="heading">Personal Website</p>
            <ul>
                <li className="list-item">A personal website to showcase my skills, projects, and contact information. It features responsive design, smooth navigation, and interactive elements.</li>
                <li  className="list-item">Technologies: HTML, CSS, JavaScript, React</li>
            </ul>

            <p className="heading">Food App</p>
            <ul>
                <li  className="list-item">An app designed to view the different types of food which displays the recipe, ingredients, price per plate, time taken to prepare and so on.</li>
                <li  className="list-item">Technologies: HTML, CSS, JavaScript, React, Spoonacular API</li>
            </ul>

            <p className="heading">Guess Game</p>
            <ul>
                <li  className="list-item">The app is designed to test the guessing ability of the player.</li>
                <li  className="list-item">Technologies: HTML, CSS, JavaScript</li>
            </ul>

            <p className="heading">Forms</p>
            <ul>
                <li  className="list-item">I have created multiple forms for different purposes.</li>
                <li  className="list-item">Technologies: HTML, CSS, JavaScript, React</li>
            </ul>

            <p className="heading">The above stated are few projects i created on my own amongst many others.</p>
        </motion.div>
    )
}