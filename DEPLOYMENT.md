# GitHub Pages Deployment Guide

Your website is now configured for GitHub Pages deployment! Here's how to get it live:

## Step 1: Push Your Code to GitHub

1. Make sure all your changes are committed to your GitHub repository
2. Push to the `main` branch

## Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" section (or click "Pages" in the left sidebar)
4. Under "Source", select "GitHub Actions"
5. This will use the workflow we created to automatically deploy your site

## Step 3: Wait for Deployment

1. After pushing your code, go to the "Actions" tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, your site will be available at: `https://[your-username].github.io/kalenlifeos/`

## Step 4: Connect Your Custom Domain (Optional)

If you want to use your custom domain from name.com:

1. In your GitHub repository settings, go to "Pages"
2. Under "Custom domain", enter your domain name
3. Check "Enforce HTTPS"
4. Save the changes
5. Update your DNS settings at name.com to point to GitHub Pages:
   - Add a CNAME record pointing to `[your-username].github.io`
   - Or add A records pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

## Troubleshooting

- If the deployment fails, check the "Actions" tab for error messages
- Make sure your repository is public (or you have GitHub Pro for private repos)
- The site may take a few minutes to become available after deployment

## Local Development

To test locally before deploying:
```bash
npm run dev
```

To build locally:
```bash
npm run build
```

Your website should now be live on GitHub Pages! 🎉
