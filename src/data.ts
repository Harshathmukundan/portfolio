export const DATA = {
  name: "Harshath Mukundan",
  initials: "HM",
  location: "Chennai, India",
  about: "Final-year Computer Science (AI&ML) student with hands-on experience building Machine Learning, Deep Learning, and Generative AI systems using Python and SQL. Skilled in developing computer vision, spatiotemporal forecasting, fraud detection, and hybrid RAG solutions.",
  skills: [
    "Python", "SQL", "Java", "C++", "JavaScript",
    "Machine Learning", "Deep Learning", "Generative AI", "LangChain", "LangGraph", "RAG",
    "OpenCV", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "Django", "Flask", "React", "Node.js", "Express.js",
    "MongoDB", "PostgreSQL", "Neo4j", "ChromaDB",
    "AWS", "Docker", "Jenkins", "CI/CD", "MLflow", "Git"
  ],
  experience: [
    {
      company: "iBrits Business Solutions",
      title: "Document Processing Automation Intern",
      location: "Hosur",
      start: "Dec 2025",
      end: "Mar 2026",
      description: "Built an OCR + OpenCV pipeline to automate extraction of structured data from scanned documents, replacing manual data entry. Validated extraction outputs across varied formats and layouts, fixing preprocessing failure cases.",
      logo: "/ibrits.png"
    },
    {
      company: "AAD Technology",
      title: "Supply Chain Digitalization Intern",
      location: "Remote",
      start: "Dec 2024",
      end: "Mar 2025",
      description: "Tested and validated data-exchange integrity for a cloud-based NGAVS integration across MIPO, ASN, GRN, and invoice workflows. Traced and documented root causes of data-sync discrepancies.",
      logo: "/aad.png"
    }
  ],
  education: [
    {
      school: "SRM Institute of Science and Technology",
      degree: "B.Tech — Computer Science and Engineering (AI & ML)",
      location: "Chennai",
      start: "2023",
      end: "2027",
      description: "CGPA: 8.80/10",
      logo: "/srm.png"
    }
  ],
  projects: [
    {
      title: "Fishing Zone Recommendation System",
      dates: "2025",
      description: "Designed a hybrid U-Net + ConvLSTM architecture for spatial segmentation and 7-day spatio-temporal forecasting of fishing zones using CMEMS satellite data. Deployed a Flask web app with Leaflet.js.",
      tags: ["Python", "PyTorch", "U-Net", "ConvLSTM", "Flask", "Leaflet.js"],
      link: "https://github.com/Harshathmukundan/potential-fishing-zone",
      live: "https://potential-fishing-zone.vercel.app/",
      image: "/proj1.png"
    },
    {
      title: "Smart Invoice Validation & Fraud Detection",
      dates: "2025",
      description: "Co-built a cloud-based GST invoice fraud detection system using Isolation Forest and Random Forest. Implemented MLOps pipeline with MLflow, Jenkins CI/CD, and Docker on AWS EC2.",
      tags: ["Python", "Django", "MySQL", "Jenkins", "Docker", "MLflow"],
      link: "https://github.com/Harshathmukundan/invoice-fraud-detection",
      image: "/proj2.png"
    },
    {
      title: "FinGraph — AI Financial Document Analyst",
      dates: "2026",
      description: "Built a hybrid RAG system combining ChromaDB semantic search with Neo4j knowledge-graph traversal for SEC financial filings, orchestrated with LangGraph and Google Gemini.",
      tags: ["React", "FastAPI", "LangChain", "Gemini", "ChromaDB", "Neo4j"],
      link: "https://github.com/Harshathmukundan/FinGraph-AI",
      image: "/proj3.png"
    },
    {
      title: "AI Smart Surveillance & Face Recognition",
      dates: "2024",
      description: "Built a real-time face detection and recognition pipeline using dlib’s ResNet-based face-recognition model on live CCTV feeds, achieving sub-200ms per-frame inference.",
      tags: ["Python", "OpenCV", "dlib", "SQLite", "Docker", "Flask"],
      link: "https://github.com/Harshathmukundan/AI-Smart-Surveillance-Face-Recognition",
      image: "/proj4.png"
    },
    {
      title: "GoTurf - Turf Booking System",
      dates: "2026",
      description: "Built a full-stack turf booking and management system featuring real-time socket.io chat, dynamic pricing (weather and peak hours), team registration, and an admin dashboard.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "TailwindCSS"],
      link: "https://github.com/Harshathmukundan/Goturf",
      live: "https://goturf.vercel.app/",
      image: "/proj5.png"
    }
  ],
  certifications: [
    { title: "SAP Certified – Generative AI Developer" },
    { title: "SAP Certified – Data Analyst, SAP Analytics Cloud" },
    { title: "NPTEL – Programming in Java" },
    { title: "NPTEL – Introduction to Machine Learning" },
    { title: "MongoDB – Associate Developer" },
    { title: "Coursera – Supervised ML: Regression & Classification" }
  ],
  volunteering: [
    {
      organization: "Institution of Engineers India (IEI)",
      title: "Member, Professional Bodies",
      location: "Chennai, India",
      start: "Present",
      end: "",
      logo: "/iei.png"
    }
  ],
  achievements: [
    {
      title: "Top 5",
      organization: "Hack Trax, Alexa Developers SRM",
      date: "2024",
      description: "Secured Top 5 position in Hack Trax hackathon organized by Alexa Developers SRM, demonstrating strong problem-solving and development skills.",
      logo: "/alexa.png"
    }
  ],
  contact: {
    email: "harshathmsg18@gmail.com",
    tel: "+919952144961",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/Harshathmukundan" },
      LinkedIn: { name: "LinkedIn", url: "https://linkedin.com/in/harshathmukundan" }
    }
  }
};
