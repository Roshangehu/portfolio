/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Roshan Joshi",
  title: "Roshan Joshi",
  subTitle: emoji(
    "Full Stack Developer | Software Developer | AI Enthusiast | Problem Solver | Content Creator 🚀"
  ),
  resumeLink: process.env.PUBLIC_URL + "/edoofa.pdf",
  profileImage: require("./assets/images/roshanProfile.png"),
  useProfileImage: true,
  displayGreeting: true
};

const aboutSection = {
  title: "About Me",
  subtitle: "Software Developer passionate about building real-world products",
  description:
    "I am a B.Tech student at Graphic Era Hill University, Dehradun, passionate about Full Stack Development, AI, Problem Solving, and building real-world products. I have a strong interest in Data Structures & Algorithms, Web Development, AI Applications, and Modern Software Engineering.",
  highlights: [
    "Actively work on personal projects, hackathons, and content creation.",
    "Focused on Data Structures & Algorithms, Full Stack Development, Problem Solving, AI Applications, and Software Engineering.",
    "Open to Software Development and Full Stack internship opportunities."
  ],
  display: true
};

const socialMediaLinks = {
  github: "https://github.com/Roshangehu",
  linkedin: "https://www.linkedin.com/in/roshan-joshi-96b048289/",
  gmail: "roshanjoshi127@gmail.com",
  instagram: "https://www.instagram.com/only_13you/",
  leetcode: "https://leetcode.com/u/roshanjoshi/",
  unstop: "https://unstop.com/u/roshajos5663",
  display: true
};

const codingProfilesSection = {
  title: "Coding Profiles",
  subtitle: "Explore my problem-solving journey and project contributions",
  profiles: [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/roshanjoshi/",
      icon: "leetcode",
      description: "Data Structures & Algorithms practice and contests"
    },
    {
      name: "GitHub",
      url: "https://github.com/Roshangehu",
      icon: "github",
      description: "Open-source projects and full stack repositories"
    },
    {
      name: "Codolio",
      url: "https://codolio.com/profile/ROSHANJOSHI",
      icon: "codolio",
      description: "Coding profile, contests, and DSA progress tracker"
    },
    {
      name: "Unstop",
      url: "https://unstop.com/u/roshajos5663",
      icon: "unstop",
      description: "Hackathons, competitions, and coding challenges"
    }
  ],
  display: true
};

const skillsSection = {
  title: "Skills",
  subTitle:
    "Full Stack Developer with strong foundations in DSA, software engineering, and AI applications",
  skills: [
    emoji(
      "⚡ Develop interactive front-end experiences with React, HTML, CSS, and JavaScript"
    ),
    emoji(
      "⚡ Build scalable backend systems with Node.js, Express.js, MongoDB, and REST APIs"
    ),
    emoji(
      "⚡ Strong foundation in Data Structures & Algorithms, OOP, DBMS, OS, and Computer Networks"
    ),
    emoji(
      "⚡ Explore AI applications and modern software engineering with Git, GitHub, and VS Code"
    )
  ],
  softwareSkills: [
    {skillName: "C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "html-5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "reactjs", fontAwesomeClassname: "fab fa-react"},
    {skillName: "nodejs", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Express", fontAwesomeClassname: "fas fa-server"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "GitHub", fontAwesomeClassname: "fab fa-github"},
    {skillName: "VS Code", fontAwesomeClassname: "fas fa-laptop-code"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Graphic Era Hill University, Dehradun",
      logo: require("./assets/images/gehuLogo.png"),
      subHeader: "Bachelor of Technology (B.Tech)",
      duration: "2023 – 2027",
      desc: "Pursuing B.Tech with focus on Full Stack Development, DSA, and Software Engineering.",
      descBullets: [
        "Coursework: DSA, DBMS, Operating Systems, Computer Networks, Web Development",
        "Active participation in hackathons and technical events"
      ]
    },
    {
      schoolName: "Kendriya Vidyalaya (KVS)",
      logo: require("./assets/images/kvsLogo.png"),
      subHeader: "Class XII",
      duration: "",
      desc: "Completed senior secondary education with a strong foundation in mathematics and science.",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Coding & Problem Solving", progressPercentage: "95%"},
    {Stack: "Data Structures & Algorithms", progressPercentage: "90%"},
    {Stack: "Full Stack Development", progressPercentage: "85%"},
    {Stack: "Backend Development", progressPercentage: "80%"},
    {Stack: "Frontend Development", progressPercentage: "75%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "ServiceNow Administrator Fundamentals Intern",
      company: "ServiceNow Virtual Internship",
      companylogo: require("./assets/images/servicenowLogo.png"),
      date: "Virtual Internship",
      desc: "Completed virtual internship focused on ServiceNow platform administration, workflows, user management, incidents, service catalogs, and enterprise ITSM concepts.",
      descBullets: [
        "ServiceNow platform administration and configuration",
        "Workflows, user management, and incident handling",
        "Service catalogs and enterprise ITSM fundamentals"
      ]
    },
    {
      role: "Freelance Website Developer",
      company: "Freelance Web Development",
      companylogo: require("./assets/images/freelanceWebLogo.svg"),
      date: "Freelance",
      desc: "Worked with individual clients to design and develop responsive websites, landing pages, and web solutions according to business requirements.",
      descBullets: [
        "Responsive landing pages and business websites",
        "Modern UI/UX and cross-browser compatibility",
        "Client-focused web solutions and consultation"
      ]
    },
    {
      role: "Content Manager and Creator",
      company: "Bus Click Raipur (BCR)",
      companylogo: require("./assets/images/bcrContentLogo.svg"),
      date: "Ongoing",
      desc: "Managed content strategy, social media growth, branding, and audience engagement for Bus Click Raipur — Raipur's leading bus photography and content page on Instagram.",
      descBullets: [
        "Grew the page to 10.6K+ followers with 646+ posts",
        "Achieved 165.8K+ views in the last 30 days (Professional Dashboard)",
        "Content strategy, reels, branding, and audience engagement"
      ],
      profileLink: {
        name: "View Instagram Account",
        url: "https://www.instagram.com/bus_click_raipur_bcr/"
      },
      showcaseImage: require("./assets/images/instagramDashboard.png"),
      showcaseAlt: "Instagram Professional Dashboard — 165.8K views in 30 days"
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "Real-world full stack and specialized engineering projects",
  projects: [
    {
      image: require("./assets/images/deepPacketInspectionLogo.png"),
      projectName: "Deep Packet Inspection",
      projectDesc:
        "Developed an intelligent DPI Engine capable of processing and analyzing network traffic patterns. Focused on performance, scalability, and data-driven insights.",
      techStack: "C++, Networking Concepts, Data Processing",
      footerLink: [
        {name: "Source Code", url: "https://github.com/Roshangehu"}
      ]
    },
    {
      image: require("./assets/images/devChatLogo.png"),
      projectName: "Dev Chat Application",
      projectDesc:
        "Built a modern real-time chat platform with authentication, messaging, notifications, user profiles, media sharing, and responsive design.",
      techStack: "React, Node.js, Express.js, MongoDB, Socket.io",
      footerLink: [
        {name: "GitHub", url: "https://github.com/Roshangehu"}
      ]
    },
    {
      image: require("./assets/images/servicenowLogo.png"),
      projectName: "ServiceNow Administration Platform",
      projectDesc:
        "Completed ServiceNow Virtual Internship covering platform administration, workflows, incident management, service catalogs, ATF, reports, and ITSM fundamentals.",
      techStack: "ServiceNow, ITSM, Flows, ATF, Reports",
      footerLink: [
        {name: "Certificate", url: ""}
      ]
    },
    {
      image: require("./assets/images/oracleCertificate.png"),
      projectName: "Oracle Cloud AI Foundations",
      projectDesc:
        "Oracle Cloud Infrastructure 2026 Certified AI Foundations Associate — cloud AI services, OCI fundamentals, and enterprise AI applications.",
      techStack: "Oracle Cloud, OCI, AI Foundations",
      footerLink: [
        {name: "View Certificate", url: ""}
      ]
    }
  ],
  display: true
};

const achievementHighlights = {
  title: emoji("Achievements 🏆"),
  subtitle: "Technical milestones and continuous growth",
  items: [
    "Solved Data Structures and Algorithms problems regularly.",
    "Built multiple real-world Full Stack projects.",
    "Participated in hackathons and technical events.",
    "Continuously learning AI and Software Engineering technologies."
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications 📜"),
  subtitle: "Industry certifications and professional learning",
  achievementsCards: [
    {
      title: "Oracle Cloud Infrastructure 2026 Certified AI Foundations Associate",
      subtitle:
        "Oracle Certified Foundations Associate — OCI AI services, cloud fundamentals, and enterprise AI applications. Issued January 2026.",
      image: require("./assets/images/oracleCertificate.png"),
      imageAlt: "Oracle Cloud Infrastructure AI Foundations Certificate",
      footerLink: [{name: "View Certificate", url: ""}]
    },
    {
      title: "Microsoft AI Skills Challenge",
      subtitle:
        "Completed Microsoft's AI skills challenge covering AI fundamentals and practical applications.",
      image: require("./assets/images/microsoftCertificate.png"),
      imageAlt: "Microsoft AI Skills Challenge",
      footerLink: [{name: "View Certificate", url: ""}]
    },
    {
      title: "ServiceNow Virtual Internship Program",
      subtitle:
        "ServiceNow University Virtual Internship — administration, Agentic AI, flows, ATF, reports, and CSA exam preparation. Issued June 2026.",
      image: require("./assets/images/servicenowCertificate.png"),
      imageAlt: "ServiceNow Virtual Internship Certificate",
      footerLink: [{name: "Certificate", url: ""}]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have an internship opportunity or want to discuss a project? Feel free to reach out!",
  name: "Roshan Joshi",
  number: "+91-7668096753",
  email_address: "roshanjoshi127@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  aboutSection,
  socialMediaLinks,
  codingProfilesSection,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementHighlights,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
