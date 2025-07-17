<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import katex from 'katex'

const route = useRoute()
const slug = route.params.slug
const content = ref('Loading...')

// Import all .md files from /src/db as raw text
const postFiles = import.meta.glob('@/db/*.md', { as: 'raw' })

// Add KaTeX support for $...$ and $$...$$
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
article :is(h1, h2, h3, h4, h5, h6, p, ul, ol, li, pre, code, blockquote, table, img, div.math-block) {
  padding: 0.625rem 0;
}
</style>
