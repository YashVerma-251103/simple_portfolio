// Main Portfolio Application
class PortfolioApp {
    constructor() {
        this.config = PORTFOLIO_CONFIG;
        this.currentFilter = 'all';
        this.quantSectionVisible = false;
        this.quantPopupShown = false;
        this.init();
    }

    init() {
        this.measurePerformance('Portfolio Initialization', () => {
            this.setupEventListeners();
            this.loadPersonalInfo();
            this.loadSkills();
            this.loadTechStack();
            this.loadPlatforms();
            this.loadProjects();
            this.setupScrollAnimations();
            this.setupNavigation();
            this.hideLoading();
            

        });
    }



    setupEventListeners() {
        // Navigation toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                portfolioUtils.toggleClass(navMenu, 'active');
            });
        }

        // Modal
        document.getElementById('closeModal').addEventListener('click', () => {
            portfolioUtils.closeModal();
        });

        // Quant popup
        document.getElementById('showQuant').addEventListener('click', () => {
            this.showQuantSection();
            this.hideQuantPopup();
        });

        document.getElementById('dismissQuant').addEventListener('click', () => {
            this.hideQuantPopup();
        });

        // Close modal on outside click
        document.getElementById('projectModal').addEventListener('click', (e) => {
            if (e.target.id === 'projectModal') {
                portfolioUtils.closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                portfolioUtils.closeModal();
                this.hideQuantPopup();
            }
        });

        // Scroll events - optimized for performance
        window.addEventListener('scroll', portfolioUtils.throttle(() => {
            this.handleScroll();
        }, 150), { passive: true });

        // Resize events
        window.addEventListener('resize', portfolioUtils.debounce(() => {
            this.handleResize();
        }, 250));

        // Close navigation when clicking outside
        document.addEventListener('click', (e) => {
            const navMenu = document.getElementById('navMenu');
            const navToggle = document.getElementById('navToggle');
            
            if (navMenu && navToggle && 
                !navMenu.contains(e.target) && 
                !navToggle.contains(e.target)) {
                portfolioUtils.removeClass(navMenu, 'active');
            }
        });
    }

    loadPersonalInfo() {
        const personal = this.config.personal;
        
        document.getElementById('name').textContent = personal.name;
        document.getElementById('title').textContent = personal.title;
        document.getElementById('bio').textContent = personal.bio;
        document.getElementById('profileImage').src = personal.profileImage;
        
        // Social links
        Object.keys(personal.social).forEach(platform => {
            const link = document.getElementById(platform);
            if (link) {
                link.href = personal.social[platform];
            }
        });

        // Resume download
        const resumeDownload = document.getElementById('resumeDownload');
        if (resumeDownload && personal.resume) {
            resumeDownload.href = personal.resume.url;
            resumeDownload.download = personal.resume.filename;
        }
    }

    loadSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        skillsGrid.innerHTML = '';

        this.config.skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.innerHTML = `
                <div class="skill-title">
                    <i class="${skill.icon}"></i>
                    ${skill.title}
                </div>
                <div class="skill-description">${skill.description}</div>
                <div class="skill-level">
                    <div class="skill-level-bar">
                        <div class="skill-level-fill" style="width: 0%"></div>
                    </div>
                    <span class="skill-level-text">${skill.levelText}</span>
                </div>
            `;
            
            skillsGrid.appendChild(skillCard);
        });

        // Animate skill levels
        this.animateSkillLevels();
    }

    animateSkillLevels() {
        const skillLevels = document.querySelectorAll('.skill-level-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const level = entry.target.parentElement.nextElementSibling.textContent;
                    const levelMap = { 'Expert': 95, 'Advanced': 85, 'Intermediate': 75 };
                    const width = levelMap[level] || 80;
                    
                    setTimeout(() => {
                        entry.target.style.width = `${width}%`;
                    }, 200);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillLevels.forEach(level => observer.observe(level));
    }

    loadTechStack() {
        const techCategories = document.getElementById('techCategories');
        techCategories.innerHTML = '';

        this.config.techStack.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'tech-category';
            categoryElement.innerHTML = `
                <div class="category-title">
                    <div class="category-icon">
                        <i class="${category.icon}"></i>
                    </div>
                    ${category.title}
                </div>
                <div class="tech-list">
                    ${category.technologies.map(tech => 
                        `<span class="tech-item">${tech}</span>`
                    ).join('')}
                </div>
            `;
            
            techCategories.appendChild(categoryElement);
        });
    }

    loadProjects() {
        this.createProjectFilters();
        this.renderProjects();
    }

    loadPlatforms() {
        const personal = this.config.personal;
        
        // Load competitive programming platforms
        const competitiveContainer = document.getElementById('competitivePlatforms');
        if (competitiveContainer && personal.platforms.competitive) {
            competitiveContainer.innerHTML = '';
            Object.keys(personal.platforms.competitive).forEach(platformKey => {
                const platform = personal.platforms.competitive[platformKey];
                const platformCard = this.createPlatformCard(platformKey, platform);
                competitiveContainer.appendChild(platformCard);
            });
        }

        // Load data science platforms
        const dataScienceContainer = document.getElementById('dataSciencePlatforms');
        if (dataScienceContainer && personal.platforms.dataScience) {
            dataScienceContainer.innerHTML = '';
            Object.keys(personal.platforms.dataScience).forEach(platformKey => {
                const platform = personal.platforms.dataScience[platformKey];
                const platformCard = this.createPlatformCard(platformKey, platform);
                dataScienceContainer.appendChild(platformCard);
            });
        }
    }

    createPlatformCard(platformKey, platform) {
        const card = document.createElement('a');
        card.className = 'platform-card';
        card.href = platform.url;
        card.target = '_blank';
        
        // Get platform display name
        const platformNames = {
            codeforces: 'Codeforces',
            leetcode: 'LeetCode',
            codechef: 'CodeChef',
            kaggle: 'Kaggle',
            numerai: 'Numerai',
            hackerrank: 'HackerRank'
        };

        // Get stats based on platform type
        let stats = [];
        if (platform.rating) stats.push({ label: 'Rating', value: platform.rating });
        if (platform.solved) stats.push({ label: 'Solved', value: platform.solved });
        if (platform.rank) stats.push({ label: 'Rank', value: platform.rank });
        if (platform.badges) stats.push({ label: 'Badges', value: platform.badges });

        card.innerHTML = `
            <div class="platform-icon" style="background-color: ${platform.color}">
                <i class="${platform.icon}"></i>
            </div>
            <div class="platform-info">
                <h4>${platformNames[platformKey] || platformKey}</h4>
                <p>@${platform.username}</p>
                <div class="platform-stats">
                    ${stats.map(stat => 
                        `<span class="platform-stat">${stat.label}: ${stat.value}</span>`
                    ).join('')}
                </div>
            </div>
        `;

        return card;
    }

    createProjectFilters() {
        const filtersContainer = document.getElementById('projectFilters');
        const categories = [...new Set(this.config.projects.map(p => p.category))];
        
        // Add "All" filter
        const allFilter = document.createElement('button');
        allFilter.className = 'filter-btn active';
        allFilter.textContent = 'All';
        allFilter.onclick = () => this.filterProjects('all');
        filtersContainer.appendChild(allFilter);

        // Add category filters
        categories.forEach(category => {
            const filter = document.createElement('button');
            filter.className = 'filter-btn';
            filter.textContent = this.formatCategoryName(category);
            filter.onclick = () => this.filterProjects(category);
            filtersContainer.appendChild(filter);
        });
    }

    formatCategoryName(category) {
        return category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    renderProjects(filter = 'all') {
        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = '';

        const filteredProjects = filter === 'all' 
            ? this.config.projects 
            : this.config.projects.filter(p => p.category === filter);

        filteredProjects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => this.showProjectModal(project);
        
        card.innerHTML = `
            <div class="project-image">
                ${project.image}
            </div>
            <div class="project-content">
                <div class="project-title">${project.title}</div>
                <div class="project-description">${project.description}</div>
                <div class="project-tags">
                    ${project.tags.map(tag => 
                        `<span class="project-tag">${tag}</span>`
                    ).join('')}
                </div>
            </div>
        `;

        return card;
    }

    filterProjects(category) {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');

        this.currentFilter = category;
        this.renderProjects(category);
    }

    showProjectModal(project) {
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="modal-title">${project.title}</div>
            <div class="modal-description">
                <p>${project.details.description}</p>
                
                <h4>Key Features:</h4>
                <ul>
                    ${project.details.features.map(feature => 
                        `<li>${feature}</li>`
                    ).join('')}
                </ul>
                
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                    ${project.details.technologies.map(tech => 
                        `<span class="project-tag">${tech}</span>`
                    ).join('')}
                </div>
                
                <h4>Challenges & Solutions:</h4>
                <p><strong>Challenge:</strong> ${project.details.challenges}</p>
                <p><strong>Solution:</strong> ${project.details.solutions}</p>
                
                ${project.files && project.files.length > 0 ? `
                    <h4>Related Files:</h4>
                    <div class="project-files">
                        ${project.files.map(file => 
                            portfolioUtils.createFileDisplay(file).outerHTML
                        ).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="modal-actions">
                <a href="${project.github}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i>
                    View on GitHub
                </a>
                ${project.live ? `
                    <a href="${project.live}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                ` : ''}
                <button class="btn btn-primary" onclick="portfolioApp.openGitpodWorkspace('${project.github}')">
                    <i class="fas fa-play"></i>
                    Get Hands-on Experience
                </button>
            </div>
        `;
        
        portfolioUtils.showModal();
    }

    openGitpodWorkspace(repoUrl) {
        portfolioUtils.openGitpodWorkspace(repoUrl);
        portfolioUtils.closeModal();
    }

    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all sections for animation
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
            observer.observe(section);
        });
    }

    setupNavigation() {
        // Smooth scrolling for navigation links
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close navigation menu
                    portfolioUtils.removeClass(document.getElementById('navMenu'), 'active');
                    
                    // Smooth scroll to target
                    this.smoothScrollToSection(targetElement);
                }
            });
        });
    }

    smoothScrollToSection(targetElement) {
        try {
            // Use native smooth scrolling for better performance
            targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        } catch (error) {
            console.error('Smooth scroll failed, using instant scroll:', error);
            // Fallback to instant scroll
            targetElement.scrollIntoView({ 
                block: 'start' 
            });
        }
    }

    handleScroll() {
        // Check for quant popup trigger
        if (!this.quantPopupShown && !this.quantSectionVisible) {
            const skillsSection = document.getElementById('skills');
            const progress = portfolioUtils.getScrollProgress(skillsSection);
            
            if (progress >= this.config.animations.scrollThreshold) {
                this.showQuantPopup();
            }
        }

        // Update navigation active state
        this.updateActiveNavigation();
    }

    updateActiveNavigation() {
        const sections = document.querySelectorAll('.section');
        const navItems = document.querySelectorAll('.nav-item');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section.id;
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }

    showQuantPopup() {
        if (this.quantPopupShown) return;
        
        const popup = document.getElementById('quantPopup');
        popup.style.display = 'block';
        this.quantPopupShown = true;
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            this.hideQuantPopup();
        }, 10000);
    }

    hideQuantPopup() {
        const popup = document.getElementById('quantPopup');
        popup.style.display = 'none';
    }

    showQuantSection() {
        this.quantSectionVisible = true;
        
        // Show quant navigation
        document.querySelector('.quant-nav').style.display = 'block';
        
        // Load quant content
        this.loadQuantContent();
        
        // Smooth scroll to quant section
        const quantSection = document.getElementById('quant-section');
        quantSection.style.display = 'block';
        this.smoothScrollToSection(quantSection);
    }

    loadQuantContent() {
        const quantSkills = document.getElementById('quantSkills');
        const quantProjects = document.getElementById('quantProjects');
        
        // Load quant skills
        quantSkills.innerHTML = '';
        this.config.quantSection.skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'quant-skill-item';
            skillElement.innerHTML = `
                <h4>${skill.title}</h4>
                <p>${skill.description}</p>
                <div class="skill-level">
                    <div class="skill-level-bar">
                        <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                    </div>
                    <span class="skill-level-text">${skill.levelText}</span>
                </div>
            `;
            quantSkills.appendChild(skillElement);
        });

        // Load quant projects as cards with flashcard functionality
        quantProjects.innerHTML = '';
        this.config.quantSection.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card quant-project-card';
            projectCard.onclick = () => this.showQuantProjectModal(project);
            
            projectCard.innerHTML = `
                <div class="project-image">
                    📊
                </div>
                <div class="project-content">
                    <div class="project-title">${project.title}</div>
                    <div class="project-description">${project.description}</div>
                    <div class="project-tags">
                        ${project.technologies.map(tech => 
                            `<span class="project-tag">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
            quantProjects.appendChild(projectCard);
        });
    }

    showQuantProjectModal(project) {
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="modal-title">${project.title}</div>
            <div class="modal-description">
                <p>${project.description}</p>
                
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                    ${project.technologies.map(tech => 
                        `<span class="project-tag">${tech}</span>`
                    ).join('')}
                </div>
                
                <h4>Quantitative Focus:</h4>
                <ul>
                    <li>Advanced statistical analysis</li>
                    <li>Financial modeling and risk assessment</li>
                    <li>Machine learning for financial applications</li>
                    <li>Algorithmic trading strategies</li>
                </ul>
            </div>
            <div class="modal-actions">
                <a href="${project.github}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i>
                    View on GitHub
                </a>
                <button class="btn btn-primary" onclick="portfolioApp.openGitpodWorkspace('${project.github}')">
                    <i class="fas fa-play"></i>
                    Get Hands-on Experience
                </button>
            </div>
        `;
        
        portfolioUtils.showModal();
    }

    handleResize() {
        // Handle responsive behavior
        const screenSize = portfolioUtils.getScreenSize();
        
        if (screenSize === 'mobile') {
            // Mobile-specific adjustments
            document.querySelectorAll('.section').forEach(section => {
                section.style.padding = '60px 0';
            });
        } else {
            // Desktop adjustments
            document.querySelectorAll('.section').forEach(section => {
                section.style.padding = '80px 0';
            });
        }
    }

    measurePerformance(name, fn) {
        return portfolioUtils.measurePerformance(name, fn);
    }

    hideLoading() {
        portfolioUtils.hideLoading();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Handle window load events
window.addEventListener('load', () => {
    // Additional initialization after all resources are loaded
    console.log('Portfolio website loaded successfully!');
});

// Handle beforeunload for cleanup
window.addEventListener('beforeunload', () => {
    // Cleanup any ongoing processes
    console.log('Portfolio website unloading...');
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
} 