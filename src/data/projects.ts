export const fullStackProjects = [
  {
    title: "Health Monitoring Web App",
    description:
      "Front-end application for health tracking with real-time data visualization and patient dashboards.",
    fullDescription:
      "Developed the front-end interface for a health monitoring platform, focusing on real-time vital signs display and medication tracking. Implemented responsive dashboards using React and Chart.js, integrating APIs and WebSocket endpoints provided by the instructor. Delivered an intuitive and accessible UI optimized for both patients and healthcare providers.",
    image: "health-app.jpg",
    tags: ["React", "Chart.js", "JavaScript", "REST API", "WebSocket"],
    links: [
      { label: "Live Demo", url: "https://health-monitor-demo.vercel.app" },
      {
        label: "GitHub",
        url: "https://github.com/nassim051/unshakeable-health",
      },
    ],
    features: [
      "Real-time vital signs visualization using WebSocket data",
      "Interactive analytics dashboard with customizable charts",
      "Responsive design optimized for tablets and mobile devices",
      "Integrated teacher-provided REST and WebSocket APIs",
      "User-friendly interface for patients and healthcare providers",
    ],
    challenges: [
      "Integrating live data streams on the front end",
      "Ensuring responsive and accessible UI design",
      "Handling asynchronous API data and updating charts dynamically",
    ],
    duration: "1 month",
    team: "Pair project",
  },
];

export const dataScienceProjects = [
  {
    title: "Short Video Recommendation System (KUAIREC)",
    description:
      "In this project, we designed and evaluated multiple recommendation system approaches for short-form videos using the KUAIREC dataset.",
    fullDescription:
      "We conducted an in-depth analysis of user–video interaction data over a 3-month period and engineered a normalized engagement score based on watch ratios and video duration. Multiple recommendation strategies were implemented and compared, including content-based filtering using tags and text embeddings (SBERT), user profiling with vectorized tag representations, item-item similarity with Jaccard and cosine similarity, and collaborative filtering methods such as KNN with Pearson similarity and matrix factorization (SVD). The system was evaluated using Precision@N, Recall@N, NDCG@N, RMSE, and MAE to compare performance across approaches.",
    image: "recommendation-system.png?auto=compress&cs=tinysrgb&w=800",
    tags: [
      "Content-Based Filtering",
      "Collaborative Filtering",
      "SBERT",
      "Sentence Transformers",
      "SVD",
      "KNN",
    ],
    links: [
      {
        label: "Google Drive (Dataset)",
        url: "https://drive.google.com/drive/folders/1amJ6MOlUdjU5wvW1HEGmFyjzMDIM6ZfZ?usp=sharing",
      },
      {
        label: "Google Colab",
        url: "https://colab.research.google.com/drive/1D2l9ZZbcupWoZLPquCV1vbJP2J6kgNwZ?usp=sharing",
      },
    ],
    features: [
      "Exploratory analysis of large-scale user–video interaction data",
      "Custom engagement score modeling from watch ratios",
      "Content-based recommendation using video tags (Jaccard similarity)",
      "Text-based recommendation with SBERT embeddings (cosine similarity)",
      "User profiling via vectorized tag thresholds",
      "Item-item similarity precomputation for fast inference",
      "Collaborative filtering with KNN (Pearson similarity)",
      "Matrix factorization using SVD (Surprise library)",
      "Evaluation using Precision@N, Recall@N, NDCG@N, RMSE, and MAE",
    ],
    challenges: [
      "Designing a meaningful engagement score that balances video completion and repetition",
      "Scaling similarity computations for large sets of videos",
      "Selecting appropriate evaluation metrics for ranking-based recommendations",
      "Iteratively implementing and refining multiple recommendation approaches to identify limitations and improve performance",
      "Fairly comparing content-based and collaborative filtering approaches",
    ],
    duration: "4 weeks",
    team: "Team of 4",
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
];
