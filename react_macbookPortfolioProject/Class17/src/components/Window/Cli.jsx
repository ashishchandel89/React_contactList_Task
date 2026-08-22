import React from "react";
import MacWindow from "./MacWindow";
import * as TerminalPackage from "react-console-emulator";
import "./cli.scss"

const Terminal = TerminalPackage.default.default;

const Cli = ({windowName,setWindowState}) => {
   const commands = {
    about: {
        description: 'About me',
        usage: 'about',
        fn: () => `Hi! I'm Ashish Chandel 

I'm a Computer Science Engineering student and aspiring
Full Stack Developer passionate about building modern,
interactive and responsive web applications.

Currently, I'm focusing on the MERN stack and improving
my skills in React, Node.js, Express.js and MongoDB.

I also have experience with Java, C/C++, MySQL and Android development.`
    },

    skills: {
        description: 'List technical skills',
        usage: 'skills',
        fn: () => `Languages: C, C++, Java, JavaScript
Frontend: HTML, CSS, JavaScript, React, Tailwind CSS, Sass
Backend: Node.js, Express.js
Databases: MySQL, MongoDB
Android: Android Studio, Java, Volley, RecyclerView
Tools: Git, GitHub, Vite, VS Code
Currently Learning: MERN Stack, Docker, Kubernetes, AI`
    },

    projects: {
        description: 'View my projects',
        usage: 'projects',
        fn: () => `1. Portfolio Website
   React + Vite + SCSS
   Interactive macOS-style portfolio

2. Stylish Real Calling Android App
   Java + Android Studio
   Custom calling interface and features

3. ShakeLoc / Safe Mobile Protector
   Android + Java
   Shake-based emergency and location features

4. StaffShifter
   Web-based staff scheduling application

5. Banking System
   C
   Console-based banking management system

6. Library Management System
   C++
   Console-based library management application`
    },

    experience: {
        description: 'Display my experience',
        usage: 'experience',
        fn: () => `Education:
B.Tech - Computer Science & Engineering
Ch. Devi Lal State Institute of Engineering &
Technology (CDLSIET), Panniwala Mota, Sirsa

Currently focusing on:
  - Full Stack Web Development
  - MERN Stack
  - React & Modern Frontend Development
  - Backend Development with Node.js & Express
  - Database Management
  - Java & DSA`
    },

    contact: {
        description: 'Get contact information',
        usage: 'contact',
        fn: () => `PhoneNo: 8221876090
        Email: chandel078ashish@gmail.com
        GitHub: github.com/ashishchandel89
        LinkedIn: linkedin.com/in/ashish-chandel-3908b9302
        
Feel free to reach out! 🚀`
    },
    whatsapp: {
    description: 'Open WhatsApp',
    usage: 'whatsapp',
    fn: () => {
        window.open(
            'https://wa.me/918221876090?text=Hello%20Ashish%2C%20I%20visited%20your%20portfolio!',
            '_blank'
        )
        return 'Opening WhatsApp... 💬'
    }
},
    email:{
         description: 'Open Email',
        usage: 'email',
        fn: () => {
          window.open('mailto:chandel078ashish@gmail.com')
            return 'Opening Email... 📧'
        }
    },
    github: {
        description: 'Open GitHub profile',
        usage: 'github',
        fn: () => {
            window.open('https://github.com/ashishchandel89', '_blank')
            return 'Opening GitHub... ⚡'
        }
    },
    linkedin:{
        description: 'Open Linkedin profile',
        usage: 'linkedin',
        fn:()=>{
            window.open('https://linkedin.com/in/ashish-chandel-3908b9302','_blank')
            return 'Opening Linkedin... 💼'
        }
    },


    resume: {
        description: 'Open my resume',
        usage: 'resume',
        fn: () => {
            window.open('/resume.pdf', '_blank')
            return 'Opening resume... 📄'
        }
    },

    social: {
        description: 'View social media links',
        usage: 'social',
        fn: () => `
        Instagram: instagram.com/the_ashish_chandel
        GitHub: github.com/ashishchandel89
        LinkedIn: linkedin.com/in/ashish-chandel-3908b9302
        Portfolio: This Website 🚀`
    },

    echo: {
        description: 'Echo a passed string',
        usage: 'echo <string>',
        fn: (...args) => args.join(' ')
    }
}
    const welcomeMessage = `
    ╔══════════════════════════════════════╗
    ║------ Welcome to Ashish's CLI! ------║
    ╚══════════════════════════════════════╝
   Hey! I'm Ashish Chandel — a Computer Science Engineering student
and an aspiring Full Stack Developer.

Welcome to my little corner of the web! 

This is an interactive portfolio terminal where you can
explore my skills, projects, experience, and more
using simple CLI commands.

Try these commands to get started:

  about       → A little about me
  skills      → My technical skills
  projects    → Things I've built
  experience  → My education & experience
  contact     → Get in touch
  github      → Visit my GitHub
  linkedin    → Connect with me
  resume      → View my resume

Not sure where to start? Just type 'help'.

Have fun exploring! 

    Happy exploring! 
`;
    return (
        <MacWindow windowName={windowName}
        setWindowState={setWindowState}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    
                    promptLabel="ashishChandel:~$-  "
                    promptLabelStyle ={{ color: '#00ff00' }}
                    autoFocus='true'
                    
                   
                />
            </div>
        </MacWindow>
    );
};

export default Cli;