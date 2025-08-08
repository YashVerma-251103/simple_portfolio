// Utility Functions for Portfolio Website

class PortfolioUtils {
    constructor() {
        this.config = PORTFOLIO_CONFIG;
    }

    // File Detection and Display
    detectFileType(filename) {
        const extension = filename.split('.').pop().toLowerCase();
        return this.config.fileTypes[extension] || {
            icon: "fas fa-file",
            color: "#6B7280",
            viewer: "default"
        };
    }

    createFileDisplay(file) {
        const fileType = this.detectFileType(file.name);
        
        const fileDisplay = document.createElement('div');
        fileDisplay.className = 'file-display';
        fileDisplay.innerHTML = `
            <div class="file-header">
                <div class="file-icon" style="background-color: ${fileType.color}">
                    <i class="${fileType.icon}"></i>
                </div>
                <div class="file-info">
                    <h4>${file.name}</h4>
                    <p>${file.description}</p>
                </div>
            </div>
            <div class="file-actions">
                <a href="${file.url}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View File
                </a>
                <button class="btn btn-secondary" onclick="portfolioUtils.previewFile('${file.url}', '${fileType.viewer}')">
                    <i class="fas fa-eye"></i>
                    Preview
                </button>
            </div>
        `;
        
        return fileDisplay;
    }

    previewFile(url, viewerType) {
        switch (viewerType) {
            case 'pdf':
                window.open(url, '_blank');
                break;
            case 'office':
                // Use Microsoft Office Online or Google Docs
                const officeUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
                window.open(officeUrl, '_blank');
                break;
            case 'jupyter':
                // Use nbviewer for Jupyter notebooks
                const nbviewerUrl = `https://nbviewer.jupyter.org/url/${encodeURIComponent(url)}`;
                window.open(nbviewerUrl, '_blank');
                break;
            case 'table':
                // For CSV files, open in new tab
                window.open(url, '_blank');
                break;
            case 'json':
                // For JSON files, open in new tab
                window.open(url, '_blank');
                break;
            case 'model':
                // For ML models, show info dialog
                this.showModelInfo(url);
                break;
            default:
                window.open(url, '_blank');
        }
    }

    showModelInfo(url) {
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="modal-title">Machine Learning Model</div>
            <div class="modal-description">
                <p>This is a trained machine learning model file. For security reasons, model files cannot be previewed directly in the browser.</p>
                <p><strong>Model Information:</strong></p>
                <ul>
                    <li>File Type: Trained ML Model</li>
                    <li>Framework: TensorFlow/PyTorch</li>
                    <li>Usage: Download and load in your ML environment</li>
                </ul>
            </div>
            <div class="modal-actions">
                <a href="${url}" download class="btn btn-primary">
                    <i class="fas fa-download"></i>
                    Download Model
                </a>
                <button class="btn btn-secondary" onclick="portfolioUtils.closeModal()">
                    Close
                </button>
            </div>
        `;
        
        this.showModal();
    }

    // DOM Manipulation
    createElement(tag, className, innerHTML) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    }

    addClass(element, className) {
        if (element && !element.classList.contains(className)) {
            element.classList.add(className);
        }
    }

    removeClass(element, className) {
        if (element && element.classList.contains(className)) {
            element.classList.remove(className);
        }
    }

    toggleClass(element, className) {
        if (element) {
            element.classList.toggle(className);
        }
    }

    // Animation Utilities
    animateElement(element, animation, duration = 300) {
        return new Promise((resolve) => {
            element.style.animation = `${animation} ${duration}ms ease-out`;
            element.addEventListener('animationend', () => {
                element.style.animation = '';
                resolve();
            }, { once: true });
        });
    }

    fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        setTimeout(() => {
            element.style.transition = `opacity ${duration}ms ease-out`;
            element.style.opacity = '1';
        }, 10);
    }

    fadeOut(element, duration = 300) {
        return new Promise((resolve) => {
            element.style.transition = `opacity ${duration}ms ease-out`;
            element.style.opacity = '0';
            
            setTimeout(() => {
                element.style.display = 'none';
                resolve();
            }, duration);
        });
    }

    // Smooth Scrolling
    smoothScrollTo(element, duration = 1000) {
        const targetPosition = element.offsetTop - 100;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        this.ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    }

    // Modal Management
    showModal() {
        const modal = document.getElementById('projectModal');
        modal.style.display = 'block';
        this.fadeIn(modal, this.config.animations.modalAnimationDuration);
    }

    closeModal() {
        const modal = document.getElementById('projectModal');
        this.fadeOut(modal, this.config.animations.modalAnimationDuration);
    }

    // Loading Management
    showLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.style.display = 'flex';
    }

    hideLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.style.display = 'none';
    }

    // Scroll Detection
    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    getScrollProgress(element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (rect.top > windowHeight) return 0;
        if (rect.bottom < 0) return 1;
        
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        return visibleHeight / elementHeight;
    }

    // Debounce Function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle Function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Local Storage Management
    setLocalStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('Failed to save to localStorage:', e);
        }
    }

    getLocalStorage(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn('Failed to read from localStorage:', e);
            return defaultValue;
        }
    }

    // URL Parameter Management
    getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    setUrlParameter(name, value) {
        const url = new URL(window.location);
        url.searchParams.set(name, value);
        window.history.replaceState({}, '', url);
    }

    // Gitpod Integration
    openGitpodWorkspace(repoUrl) {
        const gitpodUrl = `${this.config.gitpod.workspaceUrl}${repoUrl}`;
        const newWindow = window.open(gitpodUrl, '_blank');
        
        // Set timeout for Gitpod session
        setTimeout(() => {
            if (newWindow && !newWindow.closed) {
                newWindow.postMessage({
                    type: 'GITPOD_TIMEOUT',
                    timeout: this.config.gitpod.timeout * 60 * 1000 // Convert to milliseconds
                }, '*');
            }
        }, 5000);
    }

    // Performance Monitoring
    measurePerformance(name, fn) {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        
        console.log(`${name} took ${(end - start).toFixed(2)}ms`);
        return result;
    }

    // Error Handling
    handleError(error, context = '') {
        console.error(`Error in ${context}:`, error);
        
        // Show user-friendly error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #EF4444;
                color: white;
                padding: 15px;
                border-radius: 8px;
                z-index: 10000;
                max-width: 300px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            ">
                <strong>Error:</strong> ${error.message || 'Something went wrong'}
                <button onclick="this.parentElement.remove()" style="
                    float: right;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    font-size: 18px;
                ">&times;</button>
            </div>
        `;
        
        document.body.appendChild(errorMessage);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (errorMessage.parentElement) {
                errorMessage.remove();
            }
        }, 5000);
    }

    // Accessibility
    makeAccessible(element, role, label) {
        if (element) {
            element.setAttribute('role', role);
            element.setAttribute('aria-label', label);
        }
    }

    // Keyboard Navigation
    handleKeyboardNavigation(event, elements, currentIndex) {
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                event.preventDefault();
                return Math.min(currentIndex + 1, elements.length - 1);
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                return Math.max(currentIndex - 1, 0);
            case 'Enter':
            case ' ':
                event.preventDefault();
                elements[currentIndex].click();
                return currentIndex;
            default:
                return currentIndex;
        }
    }

    // Mobile Detection
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    // Network Status
    isOnline() {
        return navigator.onLine;
    }

    // Device Orientation
    getDeviceOrientation() {
        return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    }

    // Screen Size Detection
    getScreenSize() {
        const width = window.innerWidth;
        if (width < 768) return 'mobile';
        if (width < 1024) return 'tablet';
        return 'desktop';
    }
}

// Initialize utilities
const portfolioUtils = new PortfolioUtils();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioUtils;
} 