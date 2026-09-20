import photoUrl from '../assets/ankana-photo.jpg';

export const cvData = {
  personal: {
    name: "Ankana Das",
    title: "B.Tech CSE (AI & ML) Student",
    headline: "2nd Year B.Tech CSE (AI/ML) Student at Adamas University",
    department: "Department of Computer Science & Engineering",
    institution: "Adamas University",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    phone: "+91 9434987543",
    email: "dasankana410@gmail.com",
    whatsapp: "https://wa.me/919434987543",
    portfolioUrl: "https://ankana-portfolio.vercel.app",
    customDomain: "ankanadas.com",
    githubUrl: "https://github.com/AnkanaDas06",
    linkedinUrl: "https://www.linkedin.com/in/ankana-das2006?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    xUrl: "https://x.com/Ankana100406",
    instagramUrl: "https://www.instagram.com/ankana__006?stkn=MWh5dTRvaGh4OWw5Zg==",
    photo: photoUrl,
    statement: "A passionate Computer Science and Engineering student at Adamas University with a strong enthusiasm for coding, Artificial Intelligence, and Machine Learning. I am driven by curiosity and a desire to turn ideas into practical, technology-driven solutions. I enjoy learning new concepts, solving programming problems, and exploring AI/ML applications.",
    semesters: {
      sem1: "8.45 SGPA",
      sem2: "7.81 SGPA",
      cgpa: "8.13 / 10.00",
      year: "2nd Year Undergraduate",
      wbbse: "89.0% (623 / 700)",
      wbchse: "81.6% (408 / 500)"
    }
  },

  skills: {
    languages: ["C", "C++", "Java", "Python"],
    web: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    core: ["Data Structures & Algorithms", "DBMS & SQL", "Machine Learning", "Git & GitHub"]
  },

  achievements: [
    {
      title: "Coding Premier League (CPL) — 4th Position",
      issuer: "Competitive Programming Championship",
      badge: "4th Place Rank",
      desc: "Secured prestigious 4th rank in the Coding Premier League showdown, solving complex algorithmic and data structure problems with speed and precision."
    },
    {
      title: "HCL GUVI Hackathon",
      issuer: "HCL & GUVI",
      badge: "Hackathon Recognition",
      desc: "Recognized for innovative software problem-solving and rapid prototype development in the competitive HCL GUVI hackathon."
    },
    {
      title: "Academic SGPA Distinction",
      issuer: "Adamas University, Kolkata",
      badge: "8.45 Sem 1 · 7.81 Sem 2",
      desc: "Consistently demonstrated strong academic performance in foundational engineering, computer programming, mathematics, and data structures."
    },
    {
      title: "State Board Examination Merit",
      issuer: "WBBSE & WBCHSE",
      badge: "89.0% & 81.6%",
      desc: "Scored 89.0% (623/700) in 10th WBBSE and 81.6% (408/500) in 12th WBCHSE Science stream."
    }
  ],

  projects: [
    {
      id: "yolo-vision",
      title: "Real-Time Object Detection & Spatial Tracking (YOLOv8)",
      tags: ["Computer Vision", "YOLOv8", "PyTorch", "OpenCV", "Deep Learning"],
      github: "https://github.com/AnkanaDas06/yolo",
      summary: "Custom real-time multi-class object detection and spatial tracking engine implementing YOLOv8 architecture with PyTorch, OpenCV, and high-FPS bounding box estimation.",
      tech: "Python, YOLOv8, PyTorch, OpenCV, CUDA"
    },
    {
      id: "facial-biometrics-emotion",
      title: "Facial Biometrics & Real-Time Emotion Recognition",
      tags: ["Computer Vision", "FaceNet", "OpenCV", "Deep Learning", "MediaPipe"],
      github: "https://github.com/AnkanaDas06",
      summary: "Deep learning computer vision system for facial landmark alignment, 512-D biometric vector verification, and multi-class real-time facial expression and emotion classification.",
      tech: "Python, OpenCV, DeepFace, FaceNet, MediaPipe"
    },
    {
      id: "autonomous-lane-detection",
      title: "Autonomous Perception: Lane & Obstacle Detection Pipeline",
      tags: ["Computer Vision", "Autonomous AI", "OpenCV", "CNN", "Edge AI"],
      github: "https://github.com/AnkanaDas06",
      summary: "Vision pipeline for self-driving perception utilizing perspective geometry transforms, Hough space line tracking, edge filtering, and real-time vehicular obstacle segmentation.",
      tech: "Python, OpenCV, NumPy, Convolutional Neural Networks"
    },
    {
      id: "gesture-vision-controller",
      title: "Interactive AI Gesture Recognition & Virtual Controller",
      tags: ["Computer Vision", "MediaPipe", "OpenCV", "HCI", "Gesture AI"],
      github: "https://github.com/AnkanaDas06",
      summary: "Touchless human-computer interaction system tracking 21 3D hand landmarks in real-time to translate dynamic hand gestures into virtual interface commands and spatial drawing controls.",
      tech: "Python, MediaPipe, OpenCV, Scikit-Learn"
    }
  ]
};
