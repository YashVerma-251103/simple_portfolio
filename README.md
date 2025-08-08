# Personal Portfolio Website

A modern, interactive portfolio website with developer and quantitative analysis themes. Features smooth animations, automated file detection, and Gitpod integration for hands-on project experience.

## 🚀 Features

### Core Features
- **Minimal Tech Stack**: HTML, CSS, JavaScript - no complex dependencies
- **Modular Architecture**: Object-oriented design with clear separation of concerns
- **Single Data Source**: All content stored in `config.js` for easy maintenance
- **Responsive Design**: Mobile-first approach with smooth animations
- **Accessibility**: WCAG compliant with keyboard navigation support

### Interactive Elements
- **Collapsible Navigation**: Quarter-circle menu with smooth transitions
- **Smooth Scrolling**: In-place transitions when scrolling down
- **Project Modals**: Anki-style flashcard experience for project details
- **Gitpod Integration**: 30-minute sandbox sessions for hands-on experience
- **Quant Section**: Hidden quantitative analysis section with thematic transitions

### Automated File Detection
- **PDF Files**: Direct browser viewing
- **Office Documents**: Microsoft Office Online integration
- **Jupyter Notebooks**: nbviewer integration
- **Datasets**: CSV/Excel file handling
- **ML Models**: Secure download with information display

### Developer Experience
- **Performance Monitoring**: Built-in performance tracking
- **Error Handling**: Graceful error management with user feedback
- **Local Storage**: User preferences and session management
- **Keyboard Navigation**: Full keyboard accessibility

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Comprehensive styling and animations
├── config.js           # All portfolio content and configuration
├── utils.js            # Utility functions and helpers
├── app.js              # Main application logic
└── README.md          # This file
```

## 🛠️ Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

### Local Development

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Start Local Server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open Browser**
   Navigate to `http://localhost:8000`

### Customization

#### 1. Personal Information
Edit `config.js` to update your personal details:

```javascript
personal: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio description",
    profileImage: "path/to/your/image.jpg",
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        email: "mailto:your.email@example.com"
    }
}
```

#### 2. Skills & Expertise
Add or modify skills in the `skills` array:

```javascript
skills: [
    {
        title: "Your Skill",
        description: "Skill description",
        level: 90,
        levelText: "Expert",
        icon: "fas fa-code"
    }
]
```

#### 3. Tech Stack
Update technology categories:

```javascript
techStack: [
    {
        title: "Category Name",
        icon: "fas fa-icon",
        technologies: ["Tech1", "Tech2", "Tech3"]
    }
]
```

#### 4. Projects
Add your projects with detailed information:

```javascript
projects: [
    {
        id: "project-id",
        title: "Project Title",
        description: "Project description",
        category: "category-name",
        tags: ["Tag1", "Tag2"],
        image: "🛒",
        github: "https://github.com/username/repo",
        live: "https://demo-url.com",
        gitpod: "https://gitpod.io/#https://github.com/username/repo",
        details: {
            description: "Detailed description",
            features: ["Feature 1", "Feature 2"],
            technologies: ["Tech1", "Tech2"],
            challenges: "Project challenges",
            solutions: "How you solved them"
        },
        files: [
            {
                name: "Document Name",
                type: "pdf",
                url: "https://example.com/file.pdf",
                description: "File description"
            }
        ]
    }
]
```

#### 5. Quantitative Section
Customize the quant section content:

```javascript
quantSection: {
    skills: [
        {
            title: "Quant Skill",
            description: "Skill description",
            level: 90,
            levelText: "Expert"
        }
    ],
    projects: [
        {
            title: "Quant Project",
            description: "Project description",
            technologies: ["Python", "NumPy"],
            github: "https://github.com/username/repo"
        }
    ]
}
```

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** and your site will be live!

### GitHub Pages Deployment

1. **Create Repository**
   - Create a new GitHub repository
   - Upload all files to the repository

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source branch (usually `main`)
   - Save

3. **Your site will be available at**
   `https://username.github.io/repository-name`

### Netlify Deployment

1. **Drag and Drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag your project folder to the deploy area

2. **Or use Git**
   - Connect your GitHub repository
   - Netlify will auto-deploy on pushes

## 🎨 Customization Guide

### Colors and Themes
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4F46E5;
    --secondary-color: #7C3AED;
    --accent-color: #06B6D4;
    /* Add more custom colors */
}
```

### Animations
Adjust animation settings in `config.js`:

```javascript
animations: {
    scrollThreshold: 0.8,
    smoothScrollDuration: 1000,
    modalAnimationDuration: 300,
    popupAnimationDuration: 500
}
```

### File Type Support
Add new file types in `config.js`:

```javascript
fileTypes: {
    yourtype: {
        icon: "fas fa-file-yourtype",
        color: "#YOURCOLOR",
        viewer: "yourviewer"
    }
}
```

## 🔧 Advanced Features

### Gitpod Integration
The portfolio automatically integrates with Gitpod for hands-on project experience:

- Projects with `gitpod` URLs will open in Gitpod workspace
- 30-minute timeout for free sessions
- Automatic workspace setup

### File Detection System
Automated file type detection and appropriate viewing:

- **PDF**: Direct browser viewing
- **Office Documents**: Microsoft Office Online
- **Jupyter Notebooks**: nbviewer integration
- **Datasets**: CSV/Excel handling
- **ML Models**: Secure download with info

### Performance Optimizations
- Lazy loading of content
- Debounced scroll events
- Throttled resize handlers
- Efficient DOM manipulation
- Memory leak prevention

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly interactions
- Optimized navigation for mobile
- Adaptive layouts for all screen sizes

## ♿ Accessibility

Built with accessibility in mind:
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus management

## 🐛 Troubleshooting

### Common Issues

1. **Files not loading**
   - Check file URLs in `config.js`
   - Ensure files are publicly accessible
   - Verify CORS settings

2. **Animations not working**
   - Check browser compatibility
   - Ensure JavaScript is enabled
   - Verify CSS is loading properly

3. **Gitpod not opening**
   - Check repository URLs
   - Ensure repositories are public
   - Verify Gitpod integration

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inter font family
- Modern CSS features
- Intersection Observer API

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the documentation

---

**Built with ❤️ for developers and quantitative analysts** "# simple_portfolio" 
