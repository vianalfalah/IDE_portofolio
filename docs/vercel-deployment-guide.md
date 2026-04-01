# Deploying to Vercel - Step-by-Step Guide

## Prerequisites
- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Your project code ready

---

## Step 1: Push Your Code to GitHub

### 1.1 Initialize Git (if not already done)
```bash
git init
```

### 1.2 Stage All Files
```bash
git add .
```

### 1.3 Create Your First Commit
```bash
git commit -m "Initial commit: Next.js IDE portfolio"
```

### 1.4 Create a New Repository on GitHub
1. Go to [github.com](https://github.com)
2. Click **+** → **New repository**
3. Repository name: `ide-portfolio` (or your preferred name)
4. Set to **Public** or **Private** (Vercel works with both)
5. **Don't** initialize with README (we already have code)
6. Click **Create repository**

### 1.5 Connect Your Local Repo to GitHub
Copy the commands from GitHub and run them:

```bash
# Add remote repository (replace with YOUR username)
git remote add origin https://github.com/YOUR_USERNAME/ide-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 2: Connect Vercel to GitHub

### 2.1 Sign Up/Log In to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** or **Log In**
3. Choose **Continue with GitHub** (recommended)

### 2.2 Authorize Vercel
1. Click **Authorize Vercel** when GitHub asks
2. Select **All repositories** or **Only select repositories**
3. Click **Install & Authorize**

---

## Step 3: Import Your Project

### 3.1 Click "Add New Project"
1. On Vercel dashboard, click **Add New...** → **Project**
2. You'll see your GitHub repositories list

### 3.2 Select Your Repository
1. Find `ide-portfolio` in the list
2. Click **Import**

### 3.3 Configure Project Settings
Vercel will auto-detect Next.js. Verify these settings:

| Setting | Value |
|---------|-------|
| Framework Preset | **Next.js** |
| Root Directory | `./` |
| Build Command | `npm run build` (default) |
| Output Directory | `.next` (default) |
| Install Command | `npm install` (default) |

### 3.4 Environment Variables (Optional)
If you have a `.env.local` file with secrets:
1. Scroll to **Environment Variables**
2. Add each variable:
   - Name: `YOUR_VAR_NAME`
   - Value: `your-secret-value`
3. Click **Add**

### 3.5 Deploy
Click **Deploy** button

---

## Step 4: Wait for Deployment

You'll see:
- **Installing dependencies** (~1-2 min)
- **Building** (~1-2 min)
- **Uploading** (~30 sec)

When complete, you'll see:
> ✅ **Your deployment is ready**

---

## Step 5: Get Your URL

Your portfolio is now live at:
```
https://your-project-name.vercel.app
```

For example: `https://ide-portfolio.vercel.app`

---

## Step 6: Set Custom Domain (Optional)

### 6.1 Buy a Domain (Optional)
- Purchase from: Namecheap, GoDaddy, Google Domains, etc.

### 6.2 Add Domain in Vercel
1. Go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain: `yourdomain.com`
4. Click **Add**

### 6.3 Update DNS
Vercel will show you DNS records to add to your domain provider:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Automatic Deployments (Git-based Deploy)

After first deployment, Vercel will **automatically deploy** when you:

```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push
```

✅ Vercel detects push → Builds → Deploys!

---

## Common Issues & Solutions

### Issue: Build Fails
**Solution:** Check build logs for errors
- Click **Deployments** → Click failed deployment → **Build Logs**

### Issue: Wrong Branch Deployed
**Solution:**
1. Go to **Settings** → **Git**
2. Change **Production Branch** from `main` to your branch

### Issue: Environment Variables Missing
**Solution:**
1. Go to **Settings** → **Environment Variables**
2. Re-add your variables
3. Trigger new deployment

### Issue: Portfolio Shows Old Content
**Solution:** Clear browser cache or do hard refresh (Cmd+Shift+R)

---

## Quick Reference Commands

```bash
# After making changes
git add .
git commit -m "Your commit message"
git push

# Check deployment status
# Go to Vercel Dashboard → Deployments
```

---

## Need Help?

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
