<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import katex from 'katex'
import hljs from 'highlight.js'

// Import highlight.js CSS theme - using a VSCode-like theme
import 'highlight.js/styles/vs.css'

const route = useRoute()
const slug = route.params.slug
const content = ref('Loading...')

// Configure marked to use highlight.js
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (err) {
        console.error('Highlight.js error:', err)
      }
    }
    return hljs.highlightAuto(code).value
  }
})

const postFiles = import.meta.glob('@/db/*.md', { as: 'raw' })

function parseMarkdownWithMath(raw) {
  // Block math: $$...$$
  raw = raw.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) =>
    `<div class="math-block">${katex.renderToString(math, { throwOnError: false, displayMode: true })}</div>`
  )
  
  // Inline math: $...$
  raw = raw.replace(/\$([^\n$]+?)\$/g, (_, math) =>
    katex.renderToString(math, { throwOnError: false })
  )
  
  return marked.parse(raw)
}

function addLineNumbers() {
  const codeBlocks = document.querySelectorAll('pre code')
  
  codeBlocks.forEach(block => {
    const lines = block.innerHTML.split('\n')
    const numberedLines = lines.map((line, index) => {
      const lineNumber = index + 1
      const isLastLine = index === lines.length - 1
      // Skip empty last line (common in code blocks)
      if (isLastLine && line.trim() === '') return ''
      
      return `<span class="line-number" data-line="${lineNumber}"></span><span class="line-content">${line}</span>`
    }).filter(line => line !== '').join('\n')
    
    block.innerHTML = numberedLines
    block.parentElement.classList.add('line-numbers')
  })
}

onMounted(async () => {
  const path = `/src/db/${slug}.md`
  const loader = postFiles[path]
  
  if (!loader) {
    content.value = 'Post not found.'
    return
  }
  
  try {
    const raw = await loader()
    content.value = parseMarkdownWithMath(raw)
    
    // Highlight code blocks after content is rendered
    await nextTick()
    hljs.highlightAll()
    
    // Add line numbers to code blocks
    addLineNumbers()
  } catch (err) {
    content.value = 'Failed to load post.'
    console.error(err)
  }
})
</script>

<template>
  <main class="p-2.5 pt-0 md:p-5 md:pt-0">
    <article class="prose lg:prose-xl max-w-none" v-html="content" />
  </main>
</template>

<style>
/* Import VSCode-like font */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

article :is(h1, h2, h3, h4, h5, h6, p, ul, ol, li, pre, code, blockquote, table, img, div.math-block) {
  padding: 0.625rem 0;
}

/* VSCode-like code block styling */
pre {
  background: #ffffff !important;
  border: 1px solid #e1e4e8 !important;
  border-radius: 8px !important;
  margin: 1.5rem 0 !important;
  padding: 0 !important;
  overflow-x: auto;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
}

pre code {
  background: none !important;
  padding: 1rem !important;
  display: block;
  font-family: inherit !important;
  font-size: inherit !important;
  line-height: inherit !important;
  color: #24292f !important;
}

/* Line numbers styling */
.line-numbers {
  position: relative;
  padding-left: 3.5rem !important;
}

.line-numbers code {
  counter-reset: line-number;
}

.line-number {
  display: inline-block;
  width: 2.5rem;
  margin-left: -3.5rem;
  margin-right: 1rem;
  text-align: right;
  color: #8b949e !important;
  font-weight: 400 !important;
  user-select: none;
  position: relative;
}

.line-number::before {
  content: counter(line-number);
  counter-increment: line-number;
}

.line-content {
  display: inline-block;
  width: calc(100% - 1rem);
}

/* Inline code styling */
:not(pre) > code {
  background: #f6f8fa !important;
  padding: 0.125rem 0.375rem !important;
  border-radius: 4px !important;
  font-size: 0.875em !important;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace !important;
  color: #d73a49 !important;
  font-weight: 500 !important;
}

/* Ensure proper spacing for each line */
.line-numbers code .line-number + .line-content {
  min-height: 1.5em;
  display: inline-block;
}

/* Handle empty lines */
.line-content:empty::before {
  content: ' ';
}

/* Custom scrollbar for code blocks */
pre::-webkit-scrollbar {
  height: 8px;
}

pre::-webkit-scrollbar-track {
  background: #f1f3f4;
  border-radius: 4px;
}

pre::-webkit-scrollbar-thumb {
  background: #c1c7cd;
  border-radius: 4px;
}

pre::-webkit-scrollbar-thumb:hover {
  background: #a8b1bb;
}
</style>