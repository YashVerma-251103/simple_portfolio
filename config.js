// Portfolio Configuration - All content stored in one place
const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Yash Verma",
        title: "Software Engineer & Quantitative Analyst",
        bio: "Passionate about building scalable systems and quantitative solutions. Experienced in both software development and financial modeling, with expertise in machine learning and quantitative analysis.",
        profileImage: "https://drive.google.com/file/d/1GJ8twPQdlhaXL_N1OI5Xqt3Okmpru2yE/view?usp=sharing",
        resume: {
            url: "https://drive.google.com/file/d/1ocmyYDgHL3tEgIGoRxegFDezmMmeuvod/view?usp=sharing",
            filename: "Yash_Verma_Resume.pdf"
        },
        social: {
            github: "https://github.com/YashVerma-251103",
            linkedin: "https://www.linkedin.com/in/yash-verm4/",
            twitter: "https://x.com/251103yv",
            email: "mailto:yash23610@iiitd.ac.in"
        },
        platforms: {
            competitive: {
                codeforces: {
                    url: "https://codeforces.com/profile/yash23610",
                    username: "yash23610",
                    rating: "397",
                    icon: "fas fa-code",
                    color: "#FF6B35"
                },
                leetcode: {
                    url: "https://leetcode.com/u/Rahills/",
                    username: "Rahills",
                    solved: "24",
                    icon: "fas fa-code",
                    color: "#FFA116"
                },
                codechef: {
                    url: "https://www.codechef.com/users/cuddly_bowl_61",
                    username: "cuddly_bowl_61",
                    // rating: "4★",
                    rating: "NA",
                    icon: "fas fa-code",
                    color: "#5B4638"
                }
            },
            dataScience: {
                kaggle: {
                    url: "https://www.kaggle.com/vemyish",
                    username: "Yash Verma",
                    rank: "Student",
                    icon: "fab fa-kaggle",
                    color: "#20BEFF"
                },
                numerai: {
                    url: "https://numer.ai/~vemy",
                    username: "Yash Verma",
                    rank: "Novice",
                    icon: "fas fa-chart-line",
                    color: "#FF6B6B"
                },
                hackerrank: {
                    url: "https://www.hackerrank.com/profile/yash23610",
                    username: "yash23610",
                    badges: "Problem Solving",
                    icon: "fab fa-hackerrank",
                    color: "#00EA64"
                }
            }
        }
    },

    // Skills & Expertise
    skills: [
        // {
        //     title: "Frontend Development",
        //     description: "Expert in modern JavaScript frameworks, responsive design, and user experience optimization.",
        //     level: 95,
        //     levelText: "Expert",
        //     icon: "fas fa-code"
        // },
        {
            title: "Backend Development",
            description: "Proficient in server-side development, API design, and database management. Experienced in building scalable and efficient backend systems.",
            level: 65,
            levelText: "Intermediate",
            icon: "fas fa-server"
        },
        {
            title: "Data Science & ML",
            description: "Experience in machine learning, statistical analysis, and data visualization.",
            level: 65,
            levelText: "Intermediate",
            icon: "fas fa-brain"
        },
        {
            title: "Quantitative Analysis",
            description: "Specialized in financial modeling, risk management, and algorithmic trading strategies.",
            level: 65,
            levelText: "Intermediate",
            icon: "fas fa-chart-line"
        },
        {
            title: "DevOps & Cloud",
            description: "Learning with CI/CD pipelines, cloud infrastructure, and deployment automation.",
            level: 65,
            levelText: "Intermediate",
            icon: "fas fa-cloud"
        },
        // {
        //     title: "Project Management",
        //     description: "Skilled in agile methodologies, team leadership, and technical project planning.",
        //     level: 85,
        //     levelText: "Advanced",
        //     icon: "fas fa-tasks"
        // }
    ],

    // Tech Stack Categories
    techStack: [
        {
            title: "Programming Languages",
            icon: "fas fa-code",
            technologies: ["Python", "Java", "C/C++", "SQL"]
        },
        // {
        //     title: "Frontend Frameworks",
        //     icon: "fas fa-desktop",
        //     technologies: ["React", "Vue.js", "Angular", "Next.js", "Tailwind CSS", "Sass"]
        // },
        {
            title: "Backend & APIs",
            icon: "fas fa-server",
            // technologies: ["Node.js", "Express", "Django", "FastAPI", "GraphQL", "REST APIs", "Flask"]
            technologies: ["REST APIs", "Flask"]
        },
        {
            title: "Databases",
            icon: "fas fa-database",
            technologies: ["PostgreSQL", "MySQL","SQLite","Redis", "MongoDB"]
        },
        {
            title: "Cloud & DevOps",
            icon: "fas fa-cloud",
            // technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Vercel", "Netlify"]
            technologies: ["AWS", "Docker", "Vercel"]
        },
        {
            title: "Data Science",
            icon: "fas fa-chart-bar",
            technologies: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Jupyter", "Tableau"]
        }
    ],

    // Projects
    projects: [
        {
            id: "ecommerce-platform",
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
            category: "web-development",
            tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
            image: "🛒",
            github: "https://github.com/alexchen/ecommerce-platform",
            live: "https://ecommerce-demo.vercel.app",
            gitpod: "https://gitpod.io/#https://github.com/alexchen/ecommerce-platform",
            details: {
                description: "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, and admin dashboard for inventory management.",
                features: [
                    "User authentication and authorization",
                    "Product catalog with search and filtering",
                    "Shopping cart and checkout process",
                    "Payment processing with Stripe",
                    "Admin dashboard for inventory management",
                    "Real-time inventory updates",
                    "Order tracking and management"
                ],
                technologies: ["React", "Node.js", "Express", "PostgreSQL", "Stripe API", "JWT"],
                challenges: "Implementing real-time inventory updates and ensuring secure payment processing.",
                solutions: "Used WebSocket connections for real-time updates and implemented proper security measures for payment handling."
            },
            files: [
                {
                    name: "Technical Documentation",
                    type: "pdf",
                    url: "https://example.com/docs/ecommerce-tech.pdf",
                    description: "Comprehensive technical documentation"
                },
                {
                    name: "API Documentation",
                    type: "docx",
                    url: "https://example.com/docs/ecommerce-api.docx",
                    description: "API endpoints and usage guide"
                }
            ]
        },
        {
            id: "ml-trading-bot",
            title: "ML Trading Bot",
            description: "Machine learning-powered algorithmic trading system with risk management.",
            category: "quantitative",
            tags: ["Python", "TensorFlow", "Pandas", "Financial APIs"],
            image: "🤖",
            github: "https://github.com/alexchen/ml-trading-bot",
            live: null,
            gitpod: "https://gitpod.io/#https://github.com/alexchen/ml-trading-bot",
            details: {
                description: "An algorithmic trading system that uses machine learning to predict market movements and execute trades automatically. Includes comprehensive risk management and backtesting capabilities.",
                features: [
                    "Machine learning model for price prediction",
                    "Real-time market data integration",
                    "Automated trading execution",
                    "Risk management system",
                    "Backtesting framework",
                    "Performance analytics dashboard",
                    "Portfolio optimization"
                ],
                technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "Alpaca API"],
                challenges: "Balancing model accuracy with execution speed and implementing proper risk controls.",
                solutions: "Used ensemble methods for better prediction accuracy and implemented multiple risk management layers."
            },
            files: [
                {
                    name: "Research Paper",
                    type: "pdf",
                    url: "https://example.com/papers/ml-trading-research.pdf",
                    description: "Academic research on ML trading strategies"
                },
                {
                    name: "Backtest Results",
                    type: "xlsx",
                    url: "https://example.com/data/backtest-results.xlsx",
                    description: "Comprehensive backtesting results"
                },
                {
                    name: "Model Analysis",
                    type: "ipynb",
                    url: "https://example.com/notebooks/model-analysis.ipynb",
                    description: "Jupyter notebook with model analysis"
                }
            ]
        },
        {
            id: "data-visualization-dashboard",
            title: "Data Visualization Dashboard",
            description: "Interactive dashboard for real-time data visualization and analytics.",
            category: "data-science",
            tags: ["React", "D3.js", "Python", "FastAPI"],
            image: "📊",
            github: "https://github.com/alexchen/data-dashboard",
            live: "https://data-dashboard.vercel.app",
            gitpod: "https://gitpod.io/#https://github.com/alexchen/data-dashboard",
            details: {
                description: "A real-time data visualization dashboard that connects to multiple data sources and provides interactive charts, graphs, and analytics. Features include real-time updates, custom chart types, and data export capabilities.",
                features: [
                    "Real-time data visualization",
                    "Interactive charts and graphs",
                    "Multiple data source integration",
                    "Custom dashboard layouts",
                    "Data export functionality",
                    "User authentication",
                    "Responsive design"
                ],
                technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "WebSocket"],
                challenges: "Handling real-time data updates and ensuring smooth performance with large datasets.",
                solutions: "Implemented efficient data streaming and used WebSocket for real-time updates."
            },
            files: [
                {
                    name: "Dataset Schema",
                    type: "xlsx",
                    url: "https://example.com/data/dataset-schema.xlsx",
                    description: "Database schema and data structure"
                }
            ]
        },
        {
            id: "mobile-app",
            title: "Cross-Platform Mobile App",
            description: "React Native mobile application with offline capabilities and push notifications.",
            category: "mobile-development",
            tags: ["React Native", "Firebase", "Redux", "TypeScript"],
            image: "📱",
            github: "https://github.com/alexchen/mobile-app",
            live: null,
            gitpod: "https://gitpod.io/#https://github.com/alexchen/mobile-app",
            details: {
                description: "A cross-platform mobile application built with React Native. Features include offline functionality, push notifications, user authentication, and seamless data synchronization.",
                features: [
                    "Cross-platform compatibility",
                    "Offline functionality",
                    "Push notifications",
                    "User authentication",
                    "Data synchronization",
                    "Performance optimization",
                    "App store deployment"
                ],
                technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
                challenges: "Implementing offline functionality and ensuring consistent performance across platforms.",
                solutions: "Used Redux for state management and implemented efficient caching strategies."
            },
            files: [
                {
                    name: "App Architecture",
                    type: "pdf",
                    url: "https://example.com/docs/mobile-architecture.pdf",
                    description: "Technical architecture documentation"
                }
            ]
        },
        {
            id: "blockchain-dapp",
            title: "Blockchain DApp",
            description: "Decentralized application built on Ethereum with smart contracts.",
            category: "blockchain",
            tags: ["Solidity", "Web3.js", "React", "Ethereum"],
            image: "⛓️",
            github: "https://github.com/alexchen/blockchain-dapp",
            live: "https://dapp-demo.vercel.app",
            gitpod: "https://gitpod.io/#https://github.com/alexchen/blockchain-dapp",
            details: {
                description: "A decentralized application (DApp) built on the Ethereum blockchain. Features include smart contracts for secure transactions, user wallet integration, and transparent data storage on the blockchain.",
                features: [
                    "Smart contract development",
                    "Wallet integration",
                    "Decentralized data storage",
                    "Transaction transparency",
                    "Gas optimization",
                    "Security auditing",
                    "User-friendly interface"
                ],
                technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask", "IPFS"],
                challenges: "Optimizing gas costs and ensuring smart contract security.",
                solutions: "Implemented efficient smart contract patterns and conducted thorough security audits."
            },
            files: [
                {
                    name: "Smart Contract Audit",
                    type: "pdf",
                    url: "https://example.com/audits/smart-contract-audit.pdf",
                    description: "Security audit report"
                }
            ]
        },
        {
            id: "ai-chatbot",
            title: "AI Chatbot",
            description: "Natural language processing chatbot with sentiment analysis.",
            category: "artificial-intelligence",
            tags: ["Python", "NLP", "TensorFlow", "Flask"],
            image: "🤖",
            github: "https://github.com/alexchen/ai-chatbot",
            live: "https://chatbot-demo.vercel.app",
            gitpod: "https://gitpod.io/#https://github.com/alexchen/ai-chatbot",
            details: {
                description: "An intelligent chatbot powered by natural language processing and machine learning. Features include sentiment analysis, context awareness, and integration with multiple messaging platforms.",
                features: [
                    "Natural language processing",
                    "Sentiment analysis",
                    "Context awareness",
                    "Multi-platform integration",
                    "Custom training data",
                    "Analytics dashboard",
                    "API endpoints"
                ],
                technologies: ["Python", "TensorFlow", "NLTK", "Flask", "WebSocket", "Redis"],
                challenges: "Improving response accuracy and handling complex user queries.",
                solutions: "Used advanced NLP techniques and implemented context management."
            },
            files: [
                {
                    name: "Training Dataset",
                    type: "xlsx",
                    url: "https://example.com/data/training-dataset.xlsx",
                    description: "NLP training dataset"
                },
                {
                    name: "Model Analysis",
                    type: "ipynb",
                    url: "https://example.com/notebooks/nlp-analysis.ipynb",
                    description: "NLP model analysis notebook"
                }
            ]
        }
    ],

    // Quantitative Section
    quantSection: {
        skills: [
            {
                title: "Risk Management",
                description: "Advanced risk modeling and portfolio optimization techniques.",
                level: 92,
                levelText: "Expert"
            },
            {
                title: "Algorithmic Trading",
                description: "Development of automated trading strategies and execution systems.",
                level: 88,
                levelText: "Advanced"
            },
            {
                title: "Quantitative Research",
                description: "Statistical analysis and financial modeling for investment decisions.",
                level: 90,
                levelText: "Expert"
            },
            {
                title: "ML Engineering",
                description: "Machine learning model development and deployment for financial applications.",
                level: 85,
                levelText: "Advanced"
            }
        ],
        projects: [
            {
                title: "Portfolio Optimization Engine",
                description: "Advanced portfolio optimization using modern portfolio theory and machine learning.",
                technologies: ["Python", "Scipy", "Pandas", "Scikit-learn"],
                github: "https://github.com/alexchen/portfolio-optimizer"
            },
            {
                title: "Market Microstructure Analysis",
                description: "Analysis of market microstructure and high-frequency trading patterns.",
                technologies: ["Python", "NumPy", "Matplotlib", "Financial APIs"],
                github: "https://github.com/alexchen/market-microstructure"
            },
            {
                title: "Credit Risk Model",
                description: "Machine learning-based credit risk assessment and prediction model.",
                technologies: ["Python", "TensorFlow", "Scikit-learn", "SQL"],
                github: "https://github.com/alexchen/credit-risk-model"
            },
            {
                title: "Options Pricing Engine",
                description: "Advanced options pricing using Monte Carlo simulation and Black-Scholes model.",
                technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
                github: "https://github.com/alexchen/options-pricing"
            }
        ]
    },

    // File Type Icons and Handlers
    fileTypes: {
        pdf: {
            icon: "fas fa-file-pdf",
            color: "#DC2626",
            viewer: "pdf"
        },
        docx: {
            icon: "fas fa-file-word",
            color: "#2563EB",
            viewer: "office"
        },
        xlsx: {
            icon: "fas fa-file-excel",
            color: "#059669",
            viewer: "office"
        },
        ipynb: {
            icon: "fas fa-file-code",
            color: "#7C3AED",
            viewer: "jupyter"
        },
        csv: {
            icon: "fas fa-file-csv",
            color: "#F59E0B",
            viewer: "table"
        },
        json: {
            icon: "fas fa-file-code",
            color: "#DC2626",
            viewer: "json"
        },
        model: {
            icon: "fas fa-brain",
            color: "#7C3AED",
            viewer: "model"
        }
    },

    // Animation and Interaction Settings
    animations: {
        scrollThreshold: 0.8, // When to show quant popup (80% through skills section)
        smoothScrollDuration: 1000,
        modalAnimationDuration: 300,
        popupAnimationDuration: 500
    },

    // Gitpod Configuration
    gitpod: {
        timeout: 30, // minutes
        workspaceUrl: "https://gitpod.io/#",
        defaultBranch: "main"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
} 