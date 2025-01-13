import type { MDXComponents } from 'mdx/types'

export function MDXComponent(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}