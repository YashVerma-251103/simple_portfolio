# Customization Guide - Platforms & Resume

## 📄 Resume Setup

### Google Drive Resume Link
1. Upload your resume to Google Drive
2. Right-click → "Get link" → "Copy link"
3. Replace `YOUR_RESUME_ID` in `config.js` with your actual Google Drive file ID
4. Update the filename in `config.js`:

```javascript
resume: {
    url: "https://drive.google.com/uc?export=download&id=YOUR_ACTUAL_FILE_ID",
    filename: "Your_Name_Resume.pdf"
}
```

## 🏆 Platform Profiles Setup

### Competitive Programming Platforms

Update your profiles in `config.js`:

```javascript
platforms: {
    competitive: {
        codeforces: {
            url: "https://codeforces.com/profile/YOUR_USERNAME",
            username: "YOUR_USERNAME",
            rating: "YOUR_RATING",
            icon: "fas fa-code",
            color: "#FF6B35"
        },
        leetcode: {
            url: "https://leetcode.com/YOUR_USERNAME",
            username: "YOUR_USERNAME",
            solved: "YOUR_SOLVED_COUNT",
            icon: "fas fa-code",
            color: "#FFA116"
        },
        codechef: {
            url: "https://www.codechef.com/users/YOUR_USERNAME",
            username: "YOUR_USERNAME",
            rating: "YOUR_RATING",
            icon: "fas fa-code",
            color: "#5B4638"
        }
    },
    dataScience: {
        kaggle: {
            url: "https://www.kaggle.com/YOUR_USERNAME",
            username: "YOUR_USERNAME",
            rank: "YOUR_RANK",
            icon: "fab fa-kaggle",
            color: "#20BEFF"
        },
        numerai: {
            url: "https://numer.ai/YOUR_USERNAME",
            username: "YOUR_USERNAME",
            rank: "YOUR_RANK",
            icon: "fas fa-chart-line",
            color: "#FF6B6B"
        },
        hackerrank: {
            url: "https://www.hackerrank.com/YOUR_USERNAME",
            username: "YOUR_USERNAME",
            badges: "YOUR_BADGE_COUNT",
            icon: "fab fa-hackerrank",
            color: "#00EA64"
        }
    }
}
```

### Available Platform Icons

- `fas fa-code` - General coding
- `fab fa-kaggle` - Kaggle
- `fab fa-hackerrank` - HackerRank
- `fas fa-chart-line` - Numerai/Data Science
- `fas fa-trophy` - Competitions
- `fas fa-medal` - Achievements

### Custom Colors

You can use any hex color codes:
- `#FF6B35` - Orange
- `#FFA116` - LeetCode Orange
- `#20BEFF` - Kaggle Blue
- `#00EA64` - HackerRank Green
- `#FF6B6B` - Red
- `#5B4638` - Brown

## 🎨 Adding New Platforms

To add a new platform:

1. **Add to config.js**:
```javascript
yourPlatform: {
    url: "https://yourplatform.com/username",
    username: "yourusername",
    rating: "your_rating",
    icon: "fas fa-icon",
    color: "#YOUR_COLOR"
}
```

2. **Add display name** in `app.js`:
```javascript
const platformNames = {
    // ... existing platforms
    yourPlatform: 'Your Platform Name'
};
```

## 📱 Mobile Optimization

The platforms section is already optimized for mobile with:
- Responsive grid layout
- Smaller icons on mobile
- Adjusted padding and spacing
- Touch-friendly card sizes

## 🔧 Customization Tips

1. **Hide platforms you don't use**: Simply remove them from the config
2. **Add custom stats**: Modify the stats logic in `createPlatformCard()`
3. **Change colors**: Update the color values for each platform
4. **Add more icons**: Use Font Awesome icons (fas/fab classes)

## 🚀 Deployment

After customizing:
1. Test locally with `python -m http.server 8000`
2. Deploy to Vercel/GitHub Pages/Netlify
3. Verify all links work correctly

## 📊 Example Platform Data

Here's what your actual data might look like:

```javascript
codeforces: {
    url: "https://codeforces.com/profile/alexchen",
    username: "alexchen",
    rating: "1800+",
    icon: "fas fa-code",
    color: "#FF6B35"
},
leetcode: {
    url: "https://leetcode.com/alexchen",
    username: "alexchen", 
    solved: "500+",
    icon: "fas fa-code",
    color: "#FFA116"
}
```

Replace with your actual usernames, ratings, and achievements! 