#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const EXCLUDED_DIRS = ['node_modules', '.git', '.next', 'out'];
const EXCLUDED_FILES = ['DOCUMENTATION.md', 'docs.md', 'docs.js', 'package-lock.json', '.gitignore'];
const INCLUDE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.json', '.md'];

// Project structure storage
let projectStructure = [];
let fileCount = 0;

// Function to check if a path should be excluded
function shouldExclude(itemPath) {
  const baseName = path.basename(itemPath);
  
  // Check excluded directories
  if (EXCLUDED_DIRS.includes(baseName)) return true;
  
  // Check excluded files
  if (EXCLUDED_FILES.includes(baseName)) return true;
  
  // Check file extensions
  const ext = path.extname(itemPath);
  if (fs.statSync(itemPath).isFile() && !INCLUDE_EXTENSIONS.includes(ext)) {
    return true;
  }
  
  return false;
}

// Function to generate tree structure
function generateTree(dir, prefix = '', isLast = true) {
  const items = fs.readdirSync(dir);
  const validItems = items.filter(item => !shouldExclude(path.join(dir, item)));
  
  validItems.forEach((item, index) => {
    const itemPath = path.join(dir, item);
    const isLastItem = index === validItems.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    
    projectStructure.push(prefix + connector + item);
    fileCount++;
    
    if (fs.statSync(itemPath).isDirectory()) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      generateTree(itemPath, newPrefix, isLastItem);
    }
  });
}

// Function to read file content with line numbers
function readFileWithLineNumbers(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    return lines.map((line, index) => `${(index + 1).toString().padStart(4)}: ${line}`).join('\n');
  } catch (error) {
    return `Error reading file: ${error.message}`;
  }
}

// Function to generate file documentation
function generateFileDocs(dir) {
  let docs = '';
  
  function processDirectory(currentDir, depth = 0) {
    const items = fs.readdirSync(currentDir);
    const validItems = items.filter(item => !shouldExclude(path.join(currentDir, item)));
    
    validItems.forEach(item => {
      const itemPath = path.join(currentDir, item);
      const relativePath = path.relative(process.cwd(), itemPath);
      
      if (fs.statSync(itemPath).isDirectory()) {
        docs += `\n${'#'.repeat(depth + 2)} 📁 ${item}\n\n`;
        docs += `**Path:** \`${relativePath}\`\n\n`;
        processDirectory(itemPath, depth + 1);
      } else {
        const ext = path.extname(item);
        const icons = {
          '.js': '📄',
          '.jsx': '⚛️',
          '.ts': '📘',
          '.tsx': '⚛️📘',
          '.css': '🎨',
          '.json': '📋',
          '.md': '📖'
        };
        
        docs += `\n${'#'.repeat(depth + 2)} ${icons[ext] || '📄'} ${item}\n\n`;
        docs += `**Path:** \`${relativePath}\`\n\n`;
        docs += '```' + (ext.slice(1) || 'text') + '\n';
        docs += readFileWithLineNumbers(itemPath) + '\n';
        docs += '```\n\n';
        docs += '---\n';
      }
    });
  }
  
  processDirectory(dir);
  return docs;
}

// Main function
function generateDocumentation() {
  console.log('📚 Generating project documentation...\n');
  
  const projectRoot = process.cwd();
  const outputFile = 'DOCUMENTATION.md';
  
  // Generate project structure
  projectStructure = ['📦 Project Structure', '```', '.'];
  generateTree(projectRoot);
  projectStructure.push('```');
  
  // Generate documentation content
  let documentation = `# Lumivora Project Documentation\n\n`;
  documentation += `*Generated on: ${new Date().toLocaleString()}*\n\n`;
  documentation += `## Project Overview\n\n`;
  documentation += `Lumivora is a premium e-commerce website built with Next.js, featuring beauty tools and home gadgets.\n\n`;
  
  // Add project structure
  documentation += `## 📁 Project Structure\n\n`;
  documentation += `Total files documented: ${fileCount}\n\n`;
  documentation += projectStructure.join('\n') + '\n\n';
  
  // Add file contents
  documentation += `## 📄 File Contents\n\n`;
  documentation += generateFileDocs(projectRoot);
  
  // Add project summary
  documentation += `## 📊 Project Summary\n\n`;
  documentation += `- **Framework**: Next.js 14\n`;
  documentation += `- **Styling**: Custom CSS with CSS Variables\n`;
  documentation += `- **Components**: React Functional Components\n`;
  documentation += `- **Architecture**: App Router (Next.js 13+)\n`;
  documentation += `- **Responsive**: Mobile-first design\n\n`;
  
  documentation += `## 🚀 Key Features\n\n`;
  documentation += `- Premium e-commerce design\n`;
  documentation += `- Responsive layout\n`;
  documentation += `- Product catalog\n`;
  documentation += `- Category pages\n`;
  documentation += `- Customer testimonials\n`;
  documentation += `- Brand storytelling\n\n`;
  
  // Write documentation file
  fs.writeFileSync(outputFile, documentation);
  
  console.log(`✅ Documentation generated successfully!`);
  console.log(`📁 Output file: ${outputFile}`);
  console.log(`📊 Total files documented: ${fileCount}`);
  console.log(`🗂️  Project structure saved`);
  console.log(`\n📖 Open ${outputFile} to view the complete documentation.`);
}

// Run the documentation generator
generateDocumentation();
