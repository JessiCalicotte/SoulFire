# GitHub Push Instructions for SoulFire App

## Prerequisites
- Git installed on your computer
- GitHub account with access to the repository
- Terminal/Command Prompt access

## Step-by-Step Instructions

### 1. Clone the Repository (if not already done)
```bash
git clone https://github.com/JessiCalicotte/SoulFire.git
cd SoulFire
```

### 2. Check Current Status
```bash
git status
git branch
```

### 3. Create a New Branch (recommended)
```bash
git checkout -b typography-update
```

### 4. Stage All Changes
```bash
git add .
```

### 5. Commit Changes
```bash
git commit -m "Update typography system with Cinzel and EB Garamond fonts

- Added font family constants to Colors.ts
- Updated home screen typography in index.tsx
- Modified PhaseCard component with new fonts
- Updated reveal.tsx with typography hierarchy
- Applied font system to expand.tsx"
```

### 6. Push to GitHub
```bash
git push origin typography-update
```

### 7. Create Pull Request (Optional but Recommended)
1. Go to https://github.com/JessiCalicotte/SoulFire
2. Click "Compare & pull request" button
3. Add description and create pull request
4. Merge when ready

### 8. Alternative: Push Directly to Main
```bash
git checkout main
git merge typography-update
git push origin main
```

## Verify Upload
- Check GitHub repository online
- Ensure all modified files are updated
- Test the app builds successfully

## Next Steps
After pushing, we can continue building out:
- Additional screens and features
- Enhanced UI components
- Data persistence
- User authentication
- More meditation practices