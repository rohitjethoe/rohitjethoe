<script setup>
import { computed } from 'vue'
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
    // Check if already processed
    if (block.classList.contains('line-numbers-added')) return
    
    const lines = block.innerHTML.split('\n')
    const numberedLines = lines.map((line, index) => {
      const lineNumber = index + 1
      const isLastLine = index === lines.length - 1
      // Skip empty last line (common in code blocks)
      if (isLastLine && line.trim() === '') return ''
      
      return `<div class="code-line"><span class="line-number">${lineNumber}</span><span class="line-content">${line}</span></div>`
    }).filter(line => line !== '').join('')
    
    block.innerHTML = numberedLines
    block.classList.add('line-numbers-added')
    block.parentElement.classList.add('has-line-numbers')
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

const isHome = computed(() => route.path === '/')
const isJournal = computed(() => route.path.startsWith('/journal'))
</script>

<template>
  <main class="px-2.5 md:px-5">
    <article class="prose lg:prose-xl max-w-none" v-html="content" />
  </main>
  <div class="lg:hidden flex py-8">
    <div class="w-12"></div>
    <ul>
        <li class="font-inter tracking-tighter transition-all hover:text-black py-1" :class="isHome ? 'text-black font-medium' : 'text-neutral-500'">
            <a href="/">Index</a>
        </li>
        <li class="font-inter tracking-tighter transition-all hover:text-black py-1" :class="isJournal ? 'text-black font-medium' : 'text-neutral-500'">
            <a href="/journal">Weekly Journal</a>
        </li>
    </ul>
</div>
</template>

<style>
/* Import VSCode-like font */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

article :is(h1, h2, h3, h4, h5, h6, p, ul, ol, li, pre, code, blockquote, table, img, div.math-block) {
  padding: 0.3125rem 0;
}

article :is(h1, h2, h3, h4, h5, h6, p, li, table) {
    letter-spacing: -0.025em;
}

article :is(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
}

article :is(a) {
    color: blue;
    text-decoration: underline;
}

article :is(ol) {
    list-style-type: decimal;
    margin-left: 1rem;
}

article :is(ul) {
    list-style-type: circle;
    margin-left: 1rem;
}

/* Table styling */
article :is(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  margin: 0.625rem 0;
  border: 1px solid #e1e4e8;
  border-radius: 8px !important;
}

article :is(thead) {
  border-bottom: 1px solid #dee2e6;
}

article :is(thead th) {
  padding: 0.625rem;
  text-align: left;
  font-weight: 500;
  color: black;
  font-size: 0.875rem;
}

article :is(tbody) {
  background-color: #ffffff;
}

article :is(tbody tr) {
  border-bottom: 1px solid #f1f3f4;
  transition: background-color 0.2s ease;
}

article :is(tbody tr:hover) {
  background-color: #f8f9fa;
}

article :is(tbody tr:last-child) {
  border-bottom: none;
}

article :is(tbody td) {
  padding: 0.625rem;
  /* color: #737373; */
  vertical-align: middle;
}

article :is(th, td) {
  border-right: 1px solid #f1f3f4;
}

article :is(th:last-child, td:last-child) {
  border-right: none;
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
.has-line-numbers {
  position: relative;
}

.has-line-numbers code {
  padding-left: 4rem !important;
}

.code-line {
  position: relative;
  display: block;
  min-height: 1.5em;
}

.line-number {
  position: absolute;
  left: -3.5rem;
  width: 3rem;
  text-align: right;
  color: #8b949e !important;
  font-weight: 400 !important;
  user-select: none;
  padding-right: 1rem;
}

.line-content {
  display: inline-block;
  width: 100%;
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
.code-line {
  position: relative;
  display: block;
  min-height: 1.5em;
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