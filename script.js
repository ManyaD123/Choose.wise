// Data arrays for dynamic content
const careersData = [
    {
        title: "AI Engineer",
        description: "Design and develop artificial intelligence systems and machine learning models.",
        skills: ["Python", "TensorFlow", "Machine Learning", "Deep Learning"],
        roadmap: ["Learn Python & Math", "Study ML Algorithms", "Practice with TensorFlow", "Build AI Projects", "Get ML Certification"]
    },
    {
        title: "Data Scientist",
        description: "Analyze complex data to help organizations make informed decisions.",
        skills: ["Python", "R", "Statistics", "SQL", "Visualization"],
        roadmap: ["Master Statistics", "Learn Python/R", "Practice SQL", "Create Dashboards", "Build Portfolio"]
    },
    {
        title: "Cybersecurity Specialist",
        description: "Protect organizations from digital threats and security breaches.",
        skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"],
        roadmap: ["Learn Networking", "Study Security Basics", "Practice Ethical Hacking", "Get Certified", "Join Security Team"]
    },
    {
        title: "Cloud Architect",
        description: "Design and manage cloud computing strategies and infrastructure.",
        skills: ["AWS", "Azure", "Docker", "Kubernetes", "DevOps"],
        roadmap: ["Learn Cloud Basics", "Get AWS/Azure Certified", "Master Docker", "Practice Kubernetes", "Design Solutions"]
    },
    {
        title: "Blockchain Developer",
        description: "Build decentralized applications and blockchain solutions.",
        skills: ["Solidity", "Web3", "Smart Contracts", "Cryptocurrency"],
        roadmap: ["Understand Blockchain", "Learn Solidity", "Build Smart Contracts", "Create DApps", "Join Blockchain Projects"]
    },
    {
        title: "Web Developer",
        description: "Create and maintain websites and web applications.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        roadmap: ["Master HTML/CSS", "Learn JavaScript", "Study React/Vue", "Backend with Node.js", "Deploy Projects"]
    }
];

const coursesData = [
    {
        name: "Coursera",
        description: "University-level courses from top institutions worldwide",
        url: "https://www.coursera.org",
        recommendations: [
            { title: "Machine Learning by Stanford", link: "https://www.coursera.org/learn/machine-learning" },
            { title: "Python for Everybody", link: "https://www.coursera.org/specializations/python" },
            { title: "Google Data Analytics Certificate", link: "https://www.coursera.org/professional-certificates/google-data-analytics" }
        ]
    },
    {
        name: "Udemy",
        description: "Practical skills courses taught by industry experts",
        url: "https://www.udemy.com",
        recommendations: [
            { title: "Complete Web Development Bootcamp", link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/" },
            { title: "React - The Complete Guide", link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
            { title: "AWS Certified Solutions Architect", link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/" }
        ]
    },
    {
        name: "NPTEL",
        description: "Free online courses by Indian Institutes of Technology",
        url: "https://nptel.ac.in",
        recommendations: [
            { title: "Programming in Java", link: "https://nptel.ac.in/courses/106105151" },
            { title: "Data Structures and Algorithms", link: "https://nptel.ac.in/courses/106104128" },
            { title: "Database Management System", link: "https://nptel.ac.in/courses/106106093" }
        ]
    },
    {
        name: "freeCodeCamp",
        description: "Free coding bootcamp with hands-on projects",
        url: "https://www.freecodecamp.org",
        recommendations: [
            { title: "Responsive Web Design", link: "https://www.freecodecamp.org/learn/responsive-web-design/" },
            { title: "JavaScript Algorithms and Data Structures", link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
            { title: "Front End Development Libraries", link: "https://www.freecodecamp.org/learn/front-end-development-libraries/" }
        ]
    },
    {
        name: "edX",
        description: "University courses from Harvard, MIT, and other top institutions",
        url: "https://www.edx.org",
        recommendations: [
            { title: "CS50's Introduction to Computer Science", link: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x" },
            { title: "MIT Introduction to Programming in Python", link: "https://www.edx.org/course/introduction-to-computer-science-and-programming-7" },
            { title: "Microsoft Azure Fundamentals", link: "https://www.edx.org/course/microsoft-azure-fundamentals-az-900" }
        ]
    }
];

const jobsData = [
    {
        title: "Senior Software Engineer",
        company: "Google",
        location: "Bangalore, India"
    },
    {
        title: "Data Scientist",
        company: "Microsoft",
        location: "Hyderabad, India"
    },
    {
        title: "AI/ML Engineer",
        company: "Amazon",
        location: "Chennai, India"
    },
    {
        title: "Cloud Solutions Architect",
        company: "IBM",
        location: "Pune, India"
    },
    {
        title: "Cybersecurity Analyst",
        company: "Infosys",
        location: "Mumbai, India"
    },
    {
        title: "Full Stack Developer",
        company: "TCS",
        location: "Delhi, India"
    }
];

// Theme toggle functionality
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

// Navigation active link highlighting
function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load careers data
function loadCareers() {
    const careersGrid = document.getElementById('careersGrid');
    if (!careersGrid) return;
    
    careersGrid.innerHTML = careersData.map((career, index) => `
        <div class="card" data-career="${index}" style="cursor: pointer;">
            <h3>${career.title}</h3>
            <p>${career.description}</p>
            <div style="margin-top: 1rem;">
                <strong>Key Skills:</strong>
                <div style="margin-top: 0.5rem;">
                    ${career.skills.map(skill => 
                        `<span class="skill-tag">${skill}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers for career cards
    document.querySelectorAll('.card[data-career]').forEach(card => {
        card.addEventListener('click', () => {
            const careerIndex = card.getAttribute('data-career');
            updateRoadmap(careersData[careerIndex]);
            
            // Remove active class from all cards
            document.querySelectorAll('.card[data-career]').forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');
        });
    });
}

// Update roadmap based on selected career
function updateRoadmap(career) {
    const roadmapTitle = document.querySelector('.career-roadmap h3');
    const roadmapSteps = document.querySelector('.roadmap-steps-mini');
    
    if (roadmapTitle && roadmapSteps) {
        roadmapTitle.innerHTML = `🗺️ ${career.title} Path`;
        roadmapSteps.innerHTML = career.roadmap.map((step, index) => 
            `<div class="step-mini">${index + 1}. ${step}</div>`
        ).join('');
    }
    
    // Store for roadmap page
    localStorage.setItem('selectedCareer', JSON.stringify(career));
}

// Load courses data with recommendations
function loadCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;
    
    coursesGrid.innerHTML = coursesData.map(course => `
        <div class="card">
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <div style="margin: 1rem 0;">
                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 0.9rem;">📚 Recommended Courses:</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    ${course.recommendations.map(rec => `
                        <li style="margin-bottom: 0.25rem;">
                            <a href="${rec.link}" target="_blank" style="color: var(--secondary-color); text-decoration: none; font-size: 0.85rem; display: block; padding: 0.25rem 0; border-bottom: 1px solid var(--border-color);">
                                ${rec.title} →
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <a href="${course.url}" target="_blank" class="btn btn-primary" style="margin-top: 1rem; display: inline-block;">
                Visit Platform
            </a>
        </div>
    `).join('');
}

// Load jobs data
function loadJobs() {
    const jobsList = document.getElementById('jobsList');
    if (!jobsList) return;
    
    jobsList.innerHTML = jobsData.map(job => `
        <div class="job-card">
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <div class="job-location">📍 ${job.location}</div>
        </div>
    `).join('');
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`);
        this.reset();
    });
}

// Login modal functionality
function initLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const loginForm = document.getElementById('loginForm');
    const signupBtn = document.getElementById('signupBtn');
    
    if (!loginBtn || !loginModal) return;
    
    // Open modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
        setTimeout(() => loginModal.classList.add('show'), 10);
    });
    
    // Close modal
    function closeModal() {
        loginModal.classList.remove('show');
        setTimeout(() => loginModal.style.display = 'none', 300);
    }
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality would be implemented here!');
        closeModal();
    });
    
    // Signup button
    signupBtn.addEventListener('click', () => {
        alert('Signup functionality would be implemented here!');
    });
}

// Update roadmap based on selected career
function updateRoadmapPage(career) {
    // Store selected career in localStorage for roadmap page
    localStorage.setItem('selectedCareer', JSON.stringify(career));
}

// Career-specific roadmap data
const careerRoadmaps = {
    "AI Engineer": {
        emoji: "🤖",
        motivationalQuote: "Building the future, one algorithm at a time! 🚀",
        beginner: {
            title: "🌱 Foundation Building",
            emoji: "🎯",
            steps: ["🐍 Learn Python Programming", "📊 Master Mathematics & Statistics", "🏗️ Understand Data Structures"],
            projects: ["📈 Linear Regression Model", "📊 Data Visualization Dashboard", "🧠 Basic Neural Network"]
        },
        intermediate: {
            title: "⚡ Core AI Skills",
            emoji: "🔥",
            steps: ["🤖 Study Machine Learning Algorithms", "🔧 Practice with TensorFlow/PyTorch", "🧠 Learn Deep Learning Concepts"],
            projects: ["📸 Image Classification Model", "💬 Natural Language Processing App", "⭐ Recommendation System"]
        },
        advanced: {
            title: "🎯 AI Mastery",
            emoji: "👑",
            steps: ["🚀 Advanced Neural Networks", "⚙️ MLOps & Model Deployment", "🔬 Research & Innovation"],
            projects: ["👁️ Computer Vision System", "🤖 AI-Powered Chatbot", "📝 Research Paper Implementation"]
        }
    },
    "Data Scientist": {
        emoji: "📊",
        motivationalQuote: "Turning data into insights, insights into impact! 📈",
        beginner: {
            title: "📚 Data Fundamentals",
            steps: ["📊 Master Statistics & Probability", "🐍 Learn Python/R Programming", "🗄️ Database & SQL Skills"],
            projects: ["🔍 Exploratory Data Analysis", "📋 Statistical Report", "💾 Database Query Project"]
        },
        intermediate: {
            title: "🔬 Analysis & Modeling",
            steps: ["📈 Advanced Analytics Techniques", "🤖 Machine Learning Models", "📊 Data Visualization Mastery"],
            projects: ["🔮 Predictive Analytics Model", "📊 Interactive Dashboard", "⚖️ A/B Testing Analysis"]
        },
        advanced: {
            title: "🎯 Strategic Impact",
            steps: ["🌐 Big Data Technologies", "🚀 Advanced ML & AI", "💼 Business Strategy Integration"],
            projects: ["⚡ Real-time Analytics Pipeline", "🔧 Advanced ML Pipeline", "📊 Business Intelligence System"]
        }
    },
    "Web Developer": {
        emoji: "💻",
        motivationalQuote: "Building the web, one line of code at a time! 🌐",
        beginner: {
            title: "🌱 Web Basics",
            steps: ["🎨 Master HTML & CSS", "⚡ Learn JavaScript Fundamentals", "📱 Responsive Design Principles"],
            projects: ["💼 Personal Portfolio Website", "📱 Responsive Landing Page", "🎮 Interactive Web App"]
        },
        intermediate: {
            title: "🚀 Modern Development",
            steps: ["⚛️ Frontend Frameworks (React/Vue)", "🔧 Backend Development (Node.js)", "💾 Database Integration"],
            projects: ["📱 Single Page Application", "🌐 Full-Stack Web App", "🔗 RESTful API Development"]
        },
        advanced: {
            title: "🎯 Professional Development",
            steps: ["🔧 Advanced Frameworks & Tools", "🚀 DevOps & Deployment", "⚡ Performance Optimization"],
            projects: ["🏗️ Microservices Architecture", "📱 Progressive Web App", "🏢 Enterprise-Level Application"]
        }
    }
};

// Load dynamic roadmap based on selected career
function loadDynamicRoadmap() {
    const selectedCareer = JSON.parse(localStorage.getItem('selectedCareer') || 'null');
    const roadmapTitle = document.getElementById('roadmapTitle');
    const roadmapDescription = document.getElementById('roadmapDescription');
    const roadmapTimeline = document.getElementById('roadmapTimeline');
    const selectCareerBtn = document.getElementById('selectCareerBtn');
    
    if (!roadmapTimeline) return;
    
    if (selectedCareer && careerRoadmaps[selectedCareer.title]) {
        // Update header
        if (roadmapTitle) roadmapTitle.textContent = `${selectedCareer.title} Roadmap`;
        if (roadmapDescription) roadmapDescription.textContent = `Your personalized path to becoming a ${selectedCareer.title}`;
        
        // Load career-specific roadmap
        const roadmap = careerRoadmaps[selectedCareer.title];
        
        // Add motivational header if available
        let motivationalHeader = '';
        if (roadmap.emoji && roadmap.motivationalQuote) {
            motivationalHeader = `
                <div class="motivational-header">
                    <div class="career-emoji">${roadmap.emoji}</div>
                    <div class="motivational-quote">${roadmap.motivationalQuote}</div>
                </div>
            `;
        }
        
        roadmapTimeline.innerHTML = motivationalHeader + Object.entries(roadmap)
            .filter(([key]) => !['emoji', 'motivationalQuote'].includes(key))
            .map(([level, data], index) => `
            <div class="roadmap-level">
                <h2>${data.title}</h2>
                <div class="roadmap-steps">
                    ${data.steps.map(step => `<div class="step">${step}</div>`).join('')}
                </div>
                <div class="suggested-projects">
                    <h3>💡 Suggested Projects:</h3>
                    <ul>
                        ${data.projects.map(project => `<li>${project}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    } else {
        // Default generic roadmap
        roadmapTimeline.innerHTML = `
            <div class="roadmap-level">
                <h2>Choose Your Career Path</h2>
                <div class="roadmap-steps">
                    <div class="step">Visit the Careers page to select your desired tech career</div>
                    <div class="step">Get a personalized roadmap based on your choice</div>
                    <div class="step">Follow the step-by-step learning path</div>
                </div>
                <div class="suggested-projects">
                    <h3>Get Started:</h3>
                    <ul>
                        <li><a href="careers.html">Explore Career Options</a></li>
                        <li><a href="assessment.html">Take Career Assessment</a></li>
                        <li><a href="courses.html">Browse Learning Resources</a></li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    // Setup career selector button
    if (selectCareerBtn) {
        selectCareerBtn.addEventListener('click', () => {
            window.location.href = 'careers.html';
        });
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initSmoothScroll();
    loadCareers();
    loadCourses();
    loadJobs();
    initContactForm();
    initChatbot();
    initLoginModal();
    loadDynamicRoadmap();
});

// Enhanced chatbot with comprehensive responses
const chatbotKnowledge = {
    careers: {
        'ai engineer': 'AI Engineers design intelligent systems using machine learning and deep learning. Skills: Python, TensorFlow, PyTorch, Mathematics. Salary: ₹8-25 LPA. Growth: High demand, emerging field.',
        'data scientist': 'Data Scientists extract insights from data to drive business decisions. Skills: Python, R, SQL, Statistics, Tableau. Salary: ₹6-20 LPA. Growth: Excellent prospects.',
        'web developer': 'Web Developers create websites and applications. Skills: HTML, CSS, JavaScript, React, Node.js. Salary: ₹3-15 LPA. Growth: Steady demand.',
        'cybersecurity': 'Cybersecurity specialists protect digital assets from threats. Skills: Network security, ethical hacking, compliance. Salary: ₹5-18 LPA. Growth: Critical need.',
        'cloud architect': 'Cloud Architects design scalable cloud solutions. Skills: AWS, Azure, Docker, Kubernetes. Salary: ₹10-30 LPA. Growth: Very high demand.',
        'blockchain': 'Blockchain Developers build decentralized applications. Skills: Solidity, Web3, Smart contracts. Salary: ₹6-25 LPA. Growth: Emerging technology.'
    },
    learning: {
        'beginner': 'Start with: 1) Choose a programming language (Python/JavaScript recommended) 2) Learn basics through online courses 3) Build simple projects 4) Practice daily coding',
        'intermediate': 'Focus on: 1) Frameworks and libraries 2) Database management 3) Version control (Git) 4) Build portfolio projects 5) Contribute to open source',
        'advanced': 'Master: 1) System design 2) Cloud technologies 3) DevOps practices 4) Leadership skills 5) Specialized domain knowledge',
        'programming': 'Popular languages: Python (AI/Data), JavaScript (Web), Java (Enterprise), C++ (Systems), Go (Cloud). Choose based on your career goal.',
        'projects': 'Beginner: Calculator, To-do list, Portfolio. Intermediate: E-commerce site, Blog platform, API. Advanced: Microservices, Real-time apps, ML models.'
    },
    platforms: {
        'coursera': 'University courses from top institutions. Great for: Computer Science fundamentals, specializations. Free audit available.',
        'udemy': 'Practical skill-based courses. Great for: Specific technologies, hands-on learning. Frequent sales.',
        'nptel': 'Free courses by IITs/IISc. Great for: Engineering fundamentals, Indian context. Certificates available.',
        'skillup': 'Free emerging technology courses. Great for: Latest trends, quick upskilling.',
        'youtube': 'Free tutorials and lectures. Great for: Quick learning, diverse content. Channels: freeCodeCamp, Traversy Media.'
    },
    companies: {
        'google': 'Product-based company. Hiring: Software engineers, data scientists, product managers. Process: Online test, interviews, focus on algorithms.',
        'microsoft': 'Technology giant. Hiring: Developers, cloud architects, AI specialists. Process: Coding rounds, system design, behavioral interviews.',
        'amazon': 'E-commerce and cloud leader. Hiring: SDE, DevOps, data engineers. Process: Online assessment, technical interviews, leadership principles.',
        'startup': 'Fast-paced environment, diverse roles, equity options. Good for: Learning, growth, impact. Consider: Funding stage, team, product-market fit.',
        'service': 'Companies like TCS, Infosys, Wipro. Good for: Freshers, training programs, diverse projects. Process: Aptitude, technical, HR rounds.'
    },
    general: {
        'salary': 'Factors: Role, experience, location, company type. Ranges: Fresher ₹3-8 LPA, Mid-level ₹8-20 LPA, Senior ₹20+ LPA. Negotiate based on skills.',
        'interview': 'Prepare: Data structures, algorithms, system design, behavioral questions. Practice: LeetCode, HackerRank, mock interviews. Research company culture.',
        'resume': 'Include: Contact info, summary, skills, projects, experience, education. Tips: Quantify achievements, use action verbs, tailor for each role.',
        'networking': 'Build connections: LinkedIn, tech meetups, conferences, online communities. Engage: Share knowledge, help others, stay active.',
        'freelancing': 'Platforms: Upwork, Fiverr, Freelancer. Skills needed: Communication, time management, portfolio. Start small, build reputation.'
    }
};

function findBestResponse(input) {
    const query = input.toLowerCase();
    
    // Check all knowledge categories
    for (const [category, items] of Object.entries(chatbotKnowledge)) {
        for (const [key, response] of Object.entries(items)) {
            if (query.includes(key) || key.includes(query.split(' ')[0])) {
                return response;
            }
        }
    }
    
    // Fallback responses for common question patterns
    if (query.includes('how') && query.includes('start')) {
        return 'To start in tech: 1) Choose your interest area 2) Learn relevant skills 3) Build projects 4) Apply for jobs/internships. What specific field interests you?';
    }
    if (query.includes('which') && (query.includes('language') || query.includes('technology'))) {
        return 'Popular choices: Python (versatile), JavaScript (web), Java (enterprise), C++ (systems). What type of development interests you most?';
    }
    if (query.includes('job') || query.includes('career')) {
        return 'Tech careers offer great growth! Popular roles: Software Developer, Data Scientist, DevOps Engineer, Product Manager. What role interests you?';
    }
    if (query.includes('learn') || query.includes('study')) {
        return 'Learning path: Online courses → Practice projects → Build portfolio → Apply skills. Check our Courses and Roadmap pages for detailed guidance!';
    }
    
    return 'I can help with careers, learning paths, programming languages, companies, salaries, interviews, and more! Try asking about specific topics like "AI engineer" or "how to start programming".';
}

function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const window = document.getElementById('chatbotWindow');
    const messages = document.getElementById('chatbotMessages');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');
    
    if (!toggle) return;
    
    toggle.addEventListener('click', () => {
        window.style.display = window.style.display === 'flex' ? 'none' : 'flex';
    });
    
    function addMessage(text, isUser = false) {
        const message = document.createElement('div');
        message.className = `message ${isUser ? 'user' : 'bot'}`;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }
    
    function getBotResponse(userInput) {
        return findBestResponse(userInput);
    }
    
    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        
        addMessage(text, true);
        input.value = '';
        
        setTimeout(() => {
            addMessage(getBotResponse(text));
        }, 500);
    }
    
    send.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply animation to cards when they load
    setTimeout(() => {
        document.querySelectorAll('.card, .job-card, .roadmap-level').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100);
});