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
      id: "code-quality-engine",
      title: "AI-Driven Code Quality Engine",
      highlight: "89.4% Precision · Automated Patch Synthesis",
      tags: ["AI Systems", "Python", "PyTorch", "CodeBERT", "ASTs"],
      github: "https://github.com/AnkanaDas06",
      summary: "Static analyzer parsing Abstract Syntax Trees (ASTs) with fine-tuned CodeBERT to detect semantic bugs, security anti-patterns, and synthesize automated patches with high precision.",
      tech: "Python, PyTorch, LibCST, CodeBERT, Hugging Face Transformers"
    },
    {
      id: "sandhan-biometrics",
      title: "SANDHAN — AI Facial Biometrics Platform",
      highlight: "96.4% Verification Accuracy · SIH Top 10 National Finalist",
      tags: ["Computer Vision", "FastAPI", "OpenCV", "FaceNet", "FAISS", "Docker"],
      github: "https://github.com/AnkanaDas06",
      summary: "Real-time edge biometric verification platform combining 512-D FaceNet embeddings with sub-42ms FAISS vector indexing across 50k+ records. Recognized as Top 10 National Finalist at Smart India Hackathon (SIH).",
      tech: "FastAPI, OpenCV, FaceNet (512-D), FAISS, Docker, Linux"
    },
    {
      id: "valuation-engine",
      title: "Predictive Real Estate Valuation Engine",
      highlight: "R² 0.912 · 28.4% MAE Reduction · CI/CD",
      tags: ["MLOps", "Scikit-Learn", "XGBoost", "SHAP", "Docker"],
      github: "https://github.com/AnkanaDas06",
      summary: "End-to-end regression pipeline trained on 20k+ property transactions with robust IQR outlier pruning, spatial feature engineering, SHAP model transparency, and containerized CI/CD workflows.",
      tech: "Python, Scikit-Learn, XGBoost, Pandas, SHAP, Docker, GitHub Actions"
    },
    {
      id: "algovault-stl",
      title: "AlgoVault — High-Performance STL Algorithms",
      highlight: "Deterministic O(log N) · 35% Memory Fragmentation Cut",
      tags: ["C++20", "STL", "GTest", "Valgrind", "CMake"],
      github: "https://github.com/AnkanaDas06",
      summary: "Modern C++20 algorithmic framework implementing 250+ standard and advanced structures with custom fixed-block memory pool allocators and zero memory leaks verified with Valgrind.",
      tech: "Modern C++20, STL, Google Test (GTest), Valgrind, CMake, Linux"
    },
    {
      id: "yolo-vision",
      title: "YOLO Real-Time Object Detection & Vision Pipeline",
      highlight: "Real-Time Neural Inference & Multi-Class Detection",
      tags: ["Computer Vision", "YOLO", "PyTorch", "OpenCV", "CUDA"],
      github: "https://github.com/AnkanaDas06/yolo",
      summary: "Custom real-time multi-class object detection and spatial neural inference pipeline implementing YOLO architectures with PyTorch and OpenCV for high-frame-rate bounding and classification.",
      tech: "Python, YOLO, PyTorch, OpenCV, CUDA"
    }
  ]
};
