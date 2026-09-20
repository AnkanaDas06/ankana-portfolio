import photoUrl from '../assets/ankana-photo.jpg';

export const portfolioData = {
  personal: {
    name: "Ankana Das",
    domain: "ankanadas.com",
    university: "Adamas University",
    role: "Computer Science & Engineering (AI/ML) at Adamas University",
    subtitles: [
      "AI & ML Enthusiast",
      "Competitive Programmer",
      "B.Tech CSE @ Adamas University",
      "Full-Stack Web Developer",
      "Problem Solver"
    ],
    bio: "A passionate Computer Science and Engineering student at Adamas University with a strong enthusiasm for coding, Artificial Intelligence, and Machine Learning. I am driven by curiosity and a desire to turn ideas into practical, technology-driven solutions. I enjoy learning new concepts, solving programming problems, and exploring AI/ML applications. I aim to strengthen my technical expertise while actively contributing to collaborative projects and the wider computing community.",
    location: "West Bengal, India",
    photo: photoUrl,
    email: "dasankana410@gmail.com",
    phone: "+91 9434987543",
    whatsapp: "https://wa.me/919434987543",
    linkedin: "https://www.linkedin.com/in/ankana-das2006?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/AnkanaDas06",
    x: "https://x.com/Ankana100406",
    instagram: "https://www.instagram.com/ankana__006?stkn=MWh5dTRvaGh4OWw5Zg==",
    resumeLink: "#",
  },

  stats: [
    { label: "1st Sem SGPA", value: "8.45", sub: "Adamas University", icon: "GraduationCap" },
    { label: "2nd Sem SGPA", value: "7.81", sub: "Adamas University", icon: "TrendingUp" },
    { label: "Coding Premier League", value: "4th Place", sub: "Algorithmic Showdown", icon: "Trophy", highlight: true },
    { label: "WBBSE (10th)", value: "89.0%", sub: "623 / 700 Marks", icon: "Award" },
  ],

  academics: [
    {
      degree: "B.Tech in Computer Science and Engineering (AI & ML)",
      institution: "Adamas University",
      period: "2024 - Present (Currently in 2nd Year)",
      score: "1st Sem: 8.45 SGPA | 2nd Sem: 7.81 SGPA",
      status: "In Progress",
      description: "Specializing in Artificial Intelligence and Machine Learning at Adamas University. Coursework includes Data Structures, Design & Analysis of Algorithms, Object-Oriented Programming, Discrete Mathematics, Database Systems, and AI/ML foundations.",
      badge: "8.45 Sem 1 | 7.81 Sem 2",
      type: "degree"
    },
    {
      degree: "Higher Secondary Examination (Class XII)",
      institution: "West Bengal Council of Higher Secondary Education (WBCHSE)",
      period: "Completed",
      score: "81.6% (408 / 500)",
      status: "Distinction",
      description: "Science stream with Physics, Chemistry, Mathematics, and Computer Science. Built deep analytical foundation and problem-solving prowess.",
      badge: "81.6% (408/500)",
      type: "school"
    },
    {
      degree: "Secondary Examination (Class X)",
      institution: "West Bengal Board of Secondary Education (WBBSE)",
      period: "Completed",
      score: "89.0% (623 / 700)",
      status: "Outstanding",
      description: "Demonstrated academic consistency and strong foundation across Mathematics, Physical Sciences, and Life Sciences.",
      badge: "89.0% (623/700)",
      type: "school"
    }
  ],

  skills: {
    programming: [
      { name: "C", level: 90, color: "from-blue-500 to-cyan-400", desc: "Procedural programming & memory management" },
      { name: "C++", level: 92, color: "from-blue-600 to-indigo-500", desc: "STL, object-oriented concepts & DSA" },
      { name: "Java", level: 85, color: "from-red-500 to-amber-500", desc: "OOP, collections framework & multithreading" },
      { name: "Python", level: 94, color: "from-emerald-400 to-teal-500", desc: "AI/ML, automation & scripting" }
    ],
    webDevelopment: [
      { name: "React.js", level: 88, color: "from-cyan-400 to-blue-500", desc: "Components, hooks, virtual DOM & state" },
      { name: "HTML5", level: 95, color: "from-orange-500 to-amber-400", desc: "Semantic markup & modern web standards" },
      { name: "CSS3", level: 90, color: "from-blue-400 to-indigo-500", desc: "Flexbox, Grid, keyframe animations" },
      { name: "JavaScript (ES6+)", level: 88, color: "from-yellow-400 to-amber-500", desc: "Asynchronous JS, modern APIs & DOM" },
      { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500", desc: "Modern utility-first styling & responsiveness" }
    ],
    aiAndData: [
      { name: "Machine Learning", level: 84, color: "from-purple-500 to-pink-500", desc: "Supervised & unsupervised learning models" },
      { name: "Scikit-Learn", level: 82, color: "from-orange-400 to-yellow-500", desc: "Model training, evaluation & metrics" },
      { name: "Pandas & NumPy", level: 88, color: "from-blue-500 to-emerald-400", desc: "Data wrangling, matrix manipulation & analysis" },
      { name: "Neural Networks Basics", level: 78, color: "from-indigo-500 to-purple-600", desc: "Perceptrons, forward/backpropagation" }
    ],
    csFundamentals: [
      { name: "Data Structures & Algorithms", level: 90, color: "from-emerald-400 to-cyan-500", desc: "Trees, Graphs, DP, Sorting & Searching" },
      { name: "Object-Oriented Programming (OOP)", level: 92, color: "from-cyan-400 to-blue-600", desc: "Inheritance, Polymorphism, Abstraction" },
      { name: "DBMS & SQL", level: 82, color: "from-violet-400 to-purple-500", desc: "Relational queries, joins, schema design" },
      { name: "Git & GitHub", level: 88, color: "from-red-400 to-orange-500", desc: "Version control, branching & collaboration" }
    ]
  },

  achievements: [
    {
      title: "Coding Premier League - 4th Position",
      organization: "Competitive Programming Championship",
      period: "Featured Competition",
      icon: "Trophy",
      color: "from-amber-400 to-yellow-500",
      accentGlow: "rgba(245, 158, 11, 0.4)",
      badge: "Top 4 Rank",
      description: "Secured prestigious 4th rank in the highly competitive Coding Premier League, solving algorithmic, data structure, and dynamic programming challenges against elite student developers.",
      tags: ["Algorithms", "Data Structures", "Speed Coding", "C++ / Python"]
    },
    {
      title: "Consistently High Academic SGPA",
      organization: "Adamas University • B.Tech CSE (AI/ML)",
      period: "University Semesters",
      icon: "Award",
      color: "from-cyan-400 to-blue-500",
      accentGlow: "rgba(6, 182, 212, 0.4)",
      badge: "8.45 SGPA",
      description: "Maintained exceptional academic rigor with 8.45 SGPA in 1st Semester and 7.81 SGPA in 2nd Semester at Adamas University, excelling in foundational engineering, calculus, and programming logic.",
      tags: ["Adamas University", "Academic Excellence", "Computer Science"]
    },
    {
      title: "Double Board Examination Distinction",
      organization: "WBBSE & WBCHSE",
      period: "School Milestones",
      icon: "Medal",
      color: "from-purple-400 to-indigo-500",
      accentGlow: "rgba(168, 85, 247, 0.4)",
      badge: "89% & 81.6%",
      description: "Scored 89.0% (623/700) in 10th WBBSE and 81.6% (408/500) in 12th WBCHSE Science stream, establishing deep discipline and STEM proficiency.",
      tags: ["STEM Merit", "State Board Distinction"]
    }
  ],

  projects: [
    {
      title: "AI Medical Diagnostic & Health Risk Predictor",
      category: "AI / ML",
      description: "An intelligent healthcare diagnostics assistant developed using Python, Scikit-learn, and Streamlit. Implements classification algorithms to evaluate clinical metrics and predict disease risk with comprehensive feature importance visualizations.",
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "Healthcare AI"],
      github: "https://github.com/AnkanaDas06/ai-health-predictor",
      demo: "#",
      featured: true,
      stats: "94.2% Model Accuracy"
    },
    {
      title: "Algorithm Visualizer 3D",
      category: "Web & Core CS",
      description: "Interactive 3D and 2D visualizer for fundamental sorting, graph traversal (Dijkstra, BFS/DFS), and dynamic programming techniques. Built to help students intuitive grasp algorithm mechanics.",
      tags: ["React.js", "Three.js", "Algorithms", "Tailwind CSS", "Data Structures"],
      github: "https://github.com/AnkanaDas06/algo-visualizer-3d",
      demo: "#",
      featured: true,
      stats: "Interactive 3D Mode"
    },
    {
      title: "Smart Vision: Real-Time Object & Gesture Detector",
      category: "AI / ML",
      description: "Computer vision application that utilizes OpenCV and pre-trained deep learning models to perform multi-class object detection and hand gesture tracking with live webcam input.",
      tags: ["Python", "OpenCV", "Deep Learning", "NumPy"],
      github: "https://github.com/AnkanaDas06/smart-vision-detector",
      demo: "#",
      featured: false,
      stats: "60 FPS Real-time"
    },
    {
      title: "Student Academic & Grade Analytics Hub",
      category: "Web Development",
      description: "Full-stack web application designed for university students to track semester SGPA/CGPA trends, calculate target grades, and generate performance analytics reports.",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/AnkanaDas06/academic-grade-hub",
      demo: "#",
      featured: false,
      stats: "Live Grade Estimator"
    }
  ],

  pillars: [
    {
      title: "AI & Machine Learning Focus",
      icon: "Cpu",
      description: "Dedicated to unraveling how mathematical models and neural systems transform raw data into intelligent, automated insights."
    },
    {
      title: "Algorithmic Problem Solving",
      icon: "Code2",
      description: "Passionate about competitive programming, data structure optimizations, and breaking complex logic into elegant code."
    },
    {
      title: "Practical Solution Builder",
      icon: "Rocket",
      description: "Turning theoretical computing concepts into usable web applications, interactive tools, and impactful software."
    },
    {
      title: "Curiosity & Team Collaboration",
      icon: "Users",
      description: "Always excited to learn new frameworks, contribute to group hackathons, and engage with the wider tech community."
    }
  ]
};
