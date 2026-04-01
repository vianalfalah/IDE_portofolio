# Assets Directory

Place your static assets here.

## 📁 Structure

```
public/assets/
├── images/          # Portfolio images, project screenshots, profile photo
│   ├── profile/     # Your profile picture
│   ├── projects/    # Project screenshots
│   └── banners/     # Hero/banner images
└── documents/       # Downloadable files
    ├── cv.pdf       # Your CV/Resume
    └── other.pdf    # Other documents
```

## 📸 Images

Add your images to the appropriate folder:

- `images/profile/` - Profile photo for about page
- `images/projects/` - Screenshots of your projects
- `images/banners/` - Hero/background images

## 📄 Documents

Add your CV and other documents:

- `documents/cv.pdf` - Your resume/CV

## 🔗 How to Use

```tsx
// Images
<Image src="/assets/images/profile/photo.jpg" alt="Profile" width={200} height={200} />
// or
<img src="/assets/images/project-screenshot.png" alt="Project" />

// Documents (for download link)
<a href="/assets/documents/cv.pdf" download>Download CV</a>
```

## ✅ Next.js Public Folder

Files in `public/` are served at the root URL:
- `public/assets/images/logo.png` → `https://yourdomain.com/assets/images/logo.png`
