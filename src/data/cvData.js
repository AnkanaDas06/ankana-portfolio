/**
 * Academic CV Data - Single Source of Truth
 * Exactly transcribed from Ankana Das's Curriculum Vitae
 * Department of CSE, Adamas University, Kolkata
 */

import photoUrl from '../assets/ankana-photo.jpg';

export const cvData = {
  personal: {
    name: "Ankana Das",
    title: "Computer Science & AI/ML Researcher",
    headline: "Undergraduate Researcher in Artificial Intelligence & Machine Learning",
    department: "Department of Computer Science & Engineering",
    institution: "Adamas University",
    city: "Kolkata",
    state: "West Bengal",
    postalCode: "700036",
    country: "India",
    phone: "+91 9434987543",
    email: "dasankana410@gmail.com",
    portfolioUrl: "https://ankana-portfolio.vercel.app",
    customDomain: "ankanadas.com",
    githubUrl: "https://github.com/AnkanaDas06",
    linkedinUrl: "https://www.linkedin.com/in/ankana-das2006",
    scholarUrl: "https://scholar.google.com",
    photo: photoUrl,
    statement: "Exploring reliable intelligent systems across automated software engineering, deep facial biometrics, high-performance C++ systems, and environmental data science.",
    overview: "Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning at Adamas University, with research interests spanning automated software engineering, deep face biometrics, modern C++ systems architecture, and environmental data science. Experienced in developing machine learning pipelines for large-scale multi-sensor datasets, curating continuous atmospheric time series, and contributing to open-source developer tooling. Passionate about advancing reliable, scalable, and mathematically rigorous intelligent systems through the tight integration of academic research and robust systems engineering."
  },

  currently: {
    role: "Lead Student Researcher",
    group: "Applied ML & Environmental Analytics",
    institution: "Adamas University, Kolkata",
    period: "Aug 2025 – Present"
  },

  researchAreas: [
    {
      index: "01",
      title: "AI for Software Engineering",
      topics: "Neural Code Representations, CodeBERT, AST Semantic Parsing, Automated Defect Localization & Repair, LLMs for Code Intelligence.",
      summary: "Investigating intermediate graph abstractions and structural syntax representations (ASTs) coupled with transformer-based language models to automatically identify semantic anti-patterns, localize security flaws, and generate syntactically sound patch candidates.",
      keywords: ["CodeBERT", "AST Parsing", "Defect Localization", "Patch Synthesis", "PyTorch"]
    },
    {
      index: "02",
      title: "Computer Vision",
      topics: "Deep Metric Embeddings (FaceNet 512-D), FAISS Vector Indexing, Real-Time Edge Video Analytics, Robust Facial Biometrics.",
      summary: "Developing low-latency biometric inference architectures designed for embedded edge hardware. Leveraging Euclidean hypersphere triplet loss embeddings and billion-scale vector similarity indexing to attain sub-50ms identification across unconstrained illumination conditions.",
      keywords: ["FaceNet 512-D", "FAISS Indexing", "Edge Analytics", "FastAPI", "OpenCV"]
    },
    {
      index: "03",
      title: "High-Performance Computing",
      topics: "Modern C++20 STL Architecture, Cache-Conscious Data Structures, Custom Memory Pool Allocators, Concurrency & Systems.",
      summary: "Engineering deterministic, zero-cost abstractions and cache-aligned memory models. Implementing specialized fixed-block memory allocators and lock-free thread synchronizations to eliminate fragmentation and sustain deterministic O(log N) latencies under extreme algorithmic throughput.",
      keywords: ["C++20", "Memory Pools", "Cache Alignment", "Valgrind", "GTest"]
    },
    {
      index: "04",
      title: "Environmental Data Science",
      topics: "Atmospheric Data Science, Time Series Forecasting, Model Interpretability (SHAP, Feature Attribution), Sensor Analytics.",
      summary: "Modeling complex atmospheric photochemical interactions and criteria pollutant trajectories using multi-station continuous monitoring networks. Utilizing game-theoretic Shapley value attributions to decouple meteorological confounders from urban emission regimes.",
      keywords: ["Time Series", "CAAQMS", "SHAP Attribution", "XGBoost", "LSTMs"]
    }
  ],

  researchExperience: [
    {
      role: "Lead Student Researcher",
      lab: "Applied ML & Environmental Analytics",
      institution: "Adamas University, Kolkata, India",
      period: "Aug 2025 – Present",
      entries: [
        {
          label: "Dataset & Preprocessing",
          detail: "Curated continuous ambient air quality monitoring (CAAQMS) datasets across multi-station deployments; engineered pipeline with timestamp alignment, KNN imputation, and Hampel / IQR outlier filtering."
        },
        {
          label: "ML Benchmarking",
          detail: "Evaluated benchmark architectures including Linear Regression, Decision Trees, SVR, Random Forest, XGBoost, and recurrent neural networks (LSTMs); achieved optimal non-linear predictive mapping for criteria pollutants."
        },
        {
          label: "Atmospheric Dynamics & Interpretability",
          detail: "Analyzed diurnal trends, seasonal photochemical regimes, and ozone-titration dynamics; implemented SHAP (SHapley Additive exPlanations) for transparent feature importance attribution."
        },
        {
          label: "Publication Output",
          detail: "Co-authored research manuscripts currently under active peer-review and preparation for indexed journal submissions."
        }
      ]
    }
  ],

  publications: [
    {
      type: "Manuscript in Preparation (2026)",
      title: "Empirical Machine Learning Benchmarks and Interpretability Analysis for High-Resolution Urban Air Quality Forecasting",
      authors: "Ankana Das, Research Collaborators, Faculty Advisor",
      venue: "Manuscript in preparation for submission, 2026.",
      status: "Under Active Preparation",
      summary: "Comprehensive comparative evaluation of classical, ensemble, and recurrent neural architectures on continuous urban sensor networks, with model-agnostic feature attribution uncovering diurnal and seasonal photochemical drivers."
    },
    {
      type: "Manuscript in Preparation (2026)",
      title: "Deep Abstract Syntax Tree Representations and Transformer-Based Semantic Parsing for Automated Software Defect Localization",
      authors: "Ankana Das, Research Collaborators",
      venue: "Manuscript in preparation for submission, 2026.",
      status: "Under Active Preparation",
      summary: "Proposes an integrated AST-to-sequence neural representation pipeline fine-tuning CodeBERT to identify subtle semantic vulnerabilities and generate automated candidate patches with high precision."
    }
  ],

  projects: [
    {
      id: "code-quality-engine",
      title: "AI-Driven Code Quality Engine",
      domain: "AI Systems",
      tech: ["Python", "PyTorch", "ASTs", "CodeBERT"],
      shortSummary: "Static analyzer parsing ASTs with fine-tuned CodeBERT for semantic defect detection.",
      problem: "Detecting subtle semantic bugs and security anti-patterns that bypass traditional regex-based and rule-driven static linters.",
      approach: "Parsed Abstract Syntax Trees (ASTs) of source files to extract semantic control-flow graphs, feeding sequence representations into a fine-tuned CodeBERT model for defect detection and automated patch generation.",
      technology: "Python, PyTorch, LibCST, CodeBERT, Hugging Face Transformers, Linux.",
      results: "Achieved 89.4% precision with automated patch synthesis."
    },
    {
      id: "sandhan-biometrics",
      title: "SANDHAN — AI Facial Biometrics Platform",
      domain: "Deep Learning & Edge Systems",
      tech: ["FastAPI", "OpenCV", "FaceNet", "FAISS", "Docker"],
      shortSummary: "Edge biometric system with 96.4% Top-1 verification accuracy and sub-42ms vector search.",
      problem: "Deploying scalable, highly accurate real-time facial verification under edge compute constraints and unconstrained ambient illumination.",
      approach: "Engineered an end-to-end edge pipeline deploying FaceNet (512-dimensional metric embeddings) paired with Facebook AI Similarity Search (FAISS) vector indexing over an asynchronous FastAPI microservice containerized in Docker.",
      technology: "FastAPI, OpenCV, FaceNet (512-D), FAISS, NumPy, Docker, Linux.",
      results: "96.4% Top-1 verification accuracy; sub-42ms FAISS vector search across 50k+ records. Recognized as Top 10 National Finalist at Smart India Hackathon (SIH)."
    },
    {
      id: "valuation-engine",
      title: "Predictive Real Estate Valuation Engine",
      domain: "MLOps & Applied Statistics",
      tech: ["Python", "Scikit-Learn", "XGBoost", "Docker"],
      shortSummary: "End-to-end regression pipeline on 20k+ records with IQR outlier pruning and automated CI/CD.",
      problem: "Non-linear asset valuation prone to extreme regional price volatility and multi-collinear spatial features.",
      approach: "Built an automated end-to-end regression pipeline processing 20k+ property transactions with robust IQR outlier pruning, feature cross-engineering, SHAP attribution, and containerized CI/CD pipelines.",
      technology: "Python, Scikit-Learn, XGBoost, Pandas, NumPy, SHAP, Docker, GitHub Actions.",
      results: "R² of 0.912, MAE reduced by 28.4%; containerized with automated CI/CD and SHAP transparency."
    },
    {
      id: "algovault-stl",
      title: "AlgoVault — High-Performance STL Algorithms",
      domain: "High-Perf. C++ & Systems",
      tech: ["C++20", "STL", "GTest", "Valgrind", "CMake"],
      shortSummary: "Framework implementing 250+ algorithmic structures with custom memory pool allocators.",
      problem: "High heap memory fragmentation and non-deterministic allocation latency in compute-intensive algorithmic workloads.",
      approach: "Developed a modern C++20 framework implementing 250+ standard and advanced algorithmic structures, coupled with custom fixed-block memory pool allocators, CMake build chains, and Valgrind memory leak verification.",
      technology: "Modern C++20, STL, Google Test (GTest), Valgrind, CMake, Linux.",
      results: "Sustained deterministic O(log N) operations while cutting heap fragmentation by 35% with zero memory leaks."
    }
  ],

  openSource: {
    role: "Open Source Contributor & Module Maintainer",
    organization: "GirlScript Summer of Code (GSSoC 2026)",
    period: "Mar 2026 – Present",
    contributions: [
      {
        title: "Large-Scale Codebase Maintenance",
        detail: "Contributed to open-source developer tooling and web infrastructure modules; authored 40+ merged pull requests resolving UI component rendering bugs, accessibility flaws, and responsive layout refactoring."
      },
      {
        title: "CI/CD Automation Pipelines",
        detail: "Engineered GitHub Actions automation workflows integrating automated linting, unit testing, and build verification, reducing pull request validation turnaround by 40%."
      },
      {
        title: "Quality Assurance Standards",
        detail: "Enforced strict semantic PR audit guidelines, pre-commit formatting hooks, and automated regression test suites across community contributions."
      },
      {
        title: "Developer Mentorship",
        detail: "Guided 25+ aspiring first-time open-source contributors through Git workflows, issue reproduction, and clean commit standards."
      }
    ]
  },

  education: [
    {
      period: "2025–2029",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "Adamas University, Kolkata, India",
      gpa: "CGPA: 8.13 / 10.00",
      semesters: "Semester 1: 8.45 · Semester 2: 7.81",
      honors: "Top 5% Merit Scholarship recipient; Dean's Honor List distinction for Semester 1 and Semester 2.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Discrete Mathematics",
        "Linear Algebra",
        "Probability & Statistics"
      ]
    },
    {
      period: "2023–2025",
      degree: "Higher Secondary Education (Class XII)",
      institution: "West Bengal Council of Higher Secondary Education (WBCHSE), Kolkata, India",
      score: "Score: 81.6%",
      stream: "Pure Science (Physics, Chemistry, Mathematics, Computer Science – PCMB/CS)",
      honors: "First Division with Distinction."
    },
    {
      period: "2021–2023",
      degree: "Secondary Education (Class X)",
      institution: "West Bengal Board of Secondary Education (WBBSE), Kolkata, India",
      score: "Score: 89.0% (623 / 700)",
      honors: "First Division with Top Academic Honors in Science and Mathematics."
    }
  ],

  achievements: [
    {
      year: "2025–2026",
      title: "Smart India Hackathon (SIH) — National Finalist",
      recognition: "Top 10 National Finalist across university submissions; presented Project SANDHAN before national jury."
    },
    {
      year: "2026",
      title: "AI Impact Summit Buildathon — Finalist & Merit Award",
      recognition: "Awarded by HCL GUVI for real-time AI solution developed under a 36-hour sprint with ngrok tunneling."
    },
    {
      year: "2025",
      title: "Urban Vision Hackathon — Certificate of Achievement",
      recognition: "Recognized by Ministry of Education, Govt. of India & IISc Bangalore for data-driven urban infrastructure analytics."
    },
    {
      year: "2025",
      title: "Clash of Coders 2.0 — Finalist",
      recognition: "Finalist in algorithmic problem-solving and software design brainstorming competition."
    },
    {
      year: "2025",
      title: "Coding Premier League — Top 5",
      recognition: "Secured Top 5 finish in competitive algorithmic coding rounds in C++ and Python."
    }
  ],

  codingProfiles: [
    {
      platform: "LeetCode",
      metric: "400+ DSA Problems Solved",
      focus: "Trees, Graphs, Dynamic Programming"
    },
    {
      platform: "HackerRank",
      metric: "5-Star Problem Solving & 5-Star C++",
      focus: "Advanced C++ & Algorithm Specialization"
    }
  ],

  leadership: [
    {
      period: "2025–Pres.",
      role: "Technical Coordinator & Mentor",
      organization: "ACM Student Chapter, Adamas University",
      description: "Conducted C++ STL and Data Structures workshops for 150+ students; founded 'Women in Tech' problem-solving circle and organized monthly HackerRank competitions attracting 300+ submissions."
    },
    {
      period: "2025–Pres.",
      role: "Student Coordinator",
      organization: "IETE Student Chapter, Adamas University",
      description: "Coordinated technical symposiums, hackathons, and guest lectures on emerging tech trends; managed chapter membership databases and served as primary student-faculty liaison."
    },
    {
      period: "2025–Pres.",
      role: "Class Representative (CR)",
      organization: "Department of CSE, Adamas University",
      description: "Represented 60+ computer science undergraduates, advocating academic resources, resolving administrative concerns, and coordinating peer study groups and laboratory schedules."
    }
  ],

  academicExposure: [
    {
      year: "2026",
      type: "Quantum Lab Visit",
      institution: "TCG CREST Quantum Lab Visit (CQuERE)",
      description: "Academic visit exploring quantum computing algorithms, qubit simulation environments, and experimental quantum information research."
    },
    {
      year: "2025",
      type: "Data Centre Visit",
      institution: "CTRLS Enterprise Data Centre Visit",
      description: "Industrial visit gaining direct exposure to enterprise Tier-4 server infrastructure, cloud architecture, power redundancy, and distributed networking."
    }
  ],

  certifications: [
    {
      year: "2026",
      title: "DeepLearning.AI: Machine Learning Specialization",
      provider: "Coursera / Stanford Online, Prof. Andrew Ng"
    },
    {
      year: "2026",
      title: "AI Impact Summit Buildathon Certificate",
      provider: "HCL GUVI"
    },
    {
      year: "2025",
      title: "Urban Vision Hackathon 2025 Certificate of Achievement",
      provider: "Ministry of Education, Govt. of India & IISc Bangalore"
    },
    {
      year: "2025",
      title: "Data Structures & Algorithms using C++",
      provider: "DevTown (Comprehensive STL, Graph Algorithms, DP)"
    },
    {
      year: "2025",
      title: "Full Stack Web Development Training",
      provider: "DevTown"
    },
    {
      year: "2025",
      title: "Competitive Programming Course",
      provider: "DevTown"
    }
  ],

  technicalProfile: {
    programming: ["C++20", "Python", "C", "SQL", "JavaScript", "Bash", "LaTeX"],
    machineLearning: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "Hugging Face Transformers", "Pandas", "NumPy", "XGBoost", "SHAP"],
    systemsAndCS: ["Data Structures & Algorithms (DSA)", "OOP (C++)", "Operating Systems", "DBMS", "Computer Networks", "System Design"],
    devOpsAndTools: ["Git", "GitHub Actions", "Docker", "Linux", "FastAPI", "Flask", "PyTest", "Google Test (GTest)", "Valgrind", "Postman", "CMake"]
  },

  languages: [
    { name: "English", level: "Fluent (C1/C2)" },
    { name: "Bengali", level: "Native, Mother Tongue" },
    { name: "Hindi", level: "Professional (C1)" },
    { name: "German", level: "Elementary (A1)" }
  ]
};
