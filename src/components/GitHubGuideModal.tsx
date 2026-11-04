import React, { useState } from 'react';
import { X, Copy, Check, Github, Terminal, Globe, Rocket } from 'lucide-react';

interface GitHubGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubGuideModal: React.FC<GitHubGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitPushScript = `# 1. Initialize git and commit all files
git init
git add .
git commit -m "feat: Taiwan Customs Prohibited & Restricted Items Guide"

# 2. Rename branch to main
git branch -M main

# 3. Add your GitHub repository remote URL (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/taiwan-customs-guide.git

# 4. Push code to GitHub
git push -u origin main`;

  const githubActionsWorkflow = `name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              How to Upload This Website to GitHub
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Step-by-step instructions for GitHub repository setup and free GitHub Pages hosting
            </p>
          </div>
        </div>

        {/* Instructions Body */}
        <div className="space-y-6">
          
          {/* Step 1: Create Repo on GitHub */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">1</span>
                Create a Repository on GitHub.com
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-2 leading-relaxed">
              Log into your GitHub account, click <strong>"New Repository"</strong>, name it <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono text-[11px]">taiwan-customs-guide</code>, set it to <strong>Public</strong>, and leave "Initialize with README" unchecked.
            </p>
          </div>

          {/* Step 2: Push Local Code */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">2</span>
                Push Code Using Git Terminal
              </span>
              <button
                onClick={() => copyToClipboard(gitPushScript, 'git')}
                type="button"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-900"
              >
                {copiedIndex === 'git' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied Commands!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Commands</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed">
              <pre>{gitPushScript}</pre>
            </div>
          </div>

          {/* Step 3: Deploy Free with GitHub Pages */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">3</span>
                Enable Free Live Hosting (GitHub Pages)
              </span>
              <button
                onClick={() => copyToClipboard(githubActionsWorkflow, 'workflow')}
                type="button"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-900"
              >
                {copiedIndex === 'workflow' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied Workflow!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Actions YAML</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-slate-600 mb-2 leading-relaxed">
              1. In your GitHub repository, navigate to <strong>Settings</strong> &gt; <strong>Pages</strong>.<br />
              2. Under <em>Build and deployment</em> &gt; <em>Source</em>, select <strong>GitHub Actions</strong>.<br />
              3. Create the file <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono text-[11px]">.github/workflows/deploy.yml</code> with the copied workflow code, or simply run <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono text-[11px]">npm run build</code> and upload the <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono text-[11px]">dist</code> folder.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
          >
            Got It, Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
