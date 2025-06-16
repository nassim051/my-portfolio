export const fullStackProjects = [
  {
    title: "Health Monitoring Web App",
    description:
      "Comprehensive health tracking platform with real-time monitoring, analytics dashboard, and patient management system.",
    fullDescription:
      "A full-stack healthcare solution designed to monitor patient vitals, track medication schedules, and provide healthcare professionals with comprehensive analytics. The platform features real-time data synchronization, secure patient data management, and intuitive dashboards for both patients and healthcare providers.",
    image: "health-app.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
    links: [
      { label: "Live Demo", url: "https://health-monitor-demo.vercel.app" },
      {
        label: "GitHub",
        url: "https://github.com/nassim051/unshakeable-health",
      },
    ],
    features: [
      "Real-time vital signs monitoring with WebSocket integration",
      "Secure patient data management",
      "Interactive analytics dashboard with customizable charts",
      "Medication reminder system with push notifications",
      "Multi-role access control for patients and healthcare providers",
      "Responsive design optimized for tablets and mobile devices",
    ],
    challenges: [
      "Implementing real-time data synchronization across multiple clients",
      "Ensuring data security and privacy best practices",
      "Optimizing database queries for performance",
      "Designing intuitive UX for users with varying technical expertise",
    ],
    duration: "1 month",
    team: "Pair project",
  },
];

export const dataScienceProjects = [
  {
    title: "Market Real Volume Analysis & Automated Trading Bot",
    description:
      "Data pipeline and trading system to identify genuine market volumes and execute trades on promising pairs using reliable exchange data.",
    fullDescription:
      "A long-term project focused on building a scalable solution that fetches market data from multiple exchanges, filters out artificial volume to calculate real trading activity, and engineers features to highlight valuable trading pairs. The data is stored efficiently in SQLite for analysis. The project also includes an automated trading bot that leverages these insights to perform real-time trades with risk controls. Emphasizes data accuracy, robustness, and maintainability for consistent market analysis and automated execution.",
    image:
      "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: [
      "Python",
      "SQLite3",
      "Pandas",
      "NumPy",
      "ccxt",
      "REST API",
      "WebSocket",
      "Trading Bot",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yourusername/exchange-market-analysis",
      },
    ],
    features: [
      "Real-time and historical market data aggregation from multiple sources",
      "Advanced filtering techniques to exclude fake or inflated volume",
      "Feature engineering to detect promising trading pairs",
      "Efficient data storage and querying using SQLite",
      "Automated trading bot implementing strategy based on data signals",
      "Focus on data integrity and robustness across exchanges",
    ],
    challenges: [
      "Detecting and filtering artificial trading volumes",
      "Building a scalable, reliable data pipeline for large data sets",
      "Optimizing database performance under frequent updates",
      "Designing automated strategies with risk management",
      "Maintaining data consistency across diverse APIs",
    ],
    duration: "2 years (ongoing)",
    team: "Solo project",
  },
  {
    title: "Gesture-Controlled Nao Robot in Webots",
    description:
      "Human gesture recognition system to control a simulated Nao robot in Webots using real-time webcam input and machine learning.",
    fullDescription:
      "As part of a multidisciplinary semester project, we developed a full pipeline for controlling a virtual Nao robot through body gestures captured via webcam. Using MediaPipe to extract joint positions, we collected a dataset of user-defined gestures, trained classification models (Random Forest and later MLP in Keras), and deployed the best model in the robot's Python controller within the Webots simulation. The gestures allow the user to trigger robot actions like walking, turning, or waving, enabling intuitive human-robot interaction. This project combines computer vision, machine learning, and real-time robotics control with an emphasis on interface design and responsiveness.\n\n—\n\nProjet pluridisciplinaire (SC S8) visant à contrôler un robot Nao simulé dans Webots via des gestes humains captés par webcam. Après la définition d’un jeu de gestes, nous avons utilisé MediaPipe pour extraire les coordonnées articulaires, entraîné des modèles de classification (Random Forest puis MLP avec Keras), et intégré le modèle final dans le contrôleur Python du robot. Le robot peut ainsi répondre à des gestes comme avancer, tourner ou saluer. Le projet mêle vision par ordinateur, apprentissage automatique et interaction homme-robot en temps réel.",
    image: "nao_room.jpg?auto=compress&cs=tinysrgb&w=800",
    tags: [
      "Python",
      "MediaPipe",
      "Webots",
      "Machine Learning",
      "Keras",
      "OpenCV",
      "Human-Robot Interaction",
      "Nao",
      "Random Forest",
      "MLP",
    ],
    links: [
      {
        label: "Google Drive",
        url: "https://drive.google.com/drive/folders/1ST5u0oPeBGpI81VdsbMqvCFwfWW-10vR?usp=drive_link",
      },
      {
        label: "Google Colab",
        url: "https://colab.research.google.com/drive/1b7UjChcqZFlg6XpcOqxf_jJbPFkUyDhE?usp=sharing",
      },
    ],
    features: [
      "Real-time gesture recognition using webcam input",
      "Joint position tracking using MediaPipe",
      "Custom dataset collection and preprocessing pipeline",
      "Model training with Random Forest and MLP (Keras)",
      "Integration into Webots simulation with Nao controller",
      "Triggering robot actions based on recognized gestures",
    ],
    challenges: [
      "Collecting clean and diverse gesture data",
      "Selecting discriminative features from body landmarks",
      "Tuning model performance for real-time use",
      "Maintaining gesture recognition accuracy in varied lighting/backgrounds",
      "Synchronizing prediction and robot control without lag",
    ],
    duration: "1 week",
    team: "Team of 4",
  },
];
