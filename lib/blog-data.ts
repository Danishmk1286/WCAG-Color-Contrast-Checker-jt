export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  author: string
  date: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "wcag-color-contrast-importance",
    title: "Why WCAG Color Contrast Matters: A Complete Guide to Web Accessibility",
    description:
      "Understanding the importance of color contrast in web design and how it impacts user experience for people with visual impairments.",
    content: `
# Why WCAG Color Contrast Matters: A Complete Guide to Web Accessibility

Color contrast is one of the most fundamental aspects of web accessibility, yet it's often overlooked in the design process. Understanding and implementing proper color contrast ratios isn't just about compliance—it's about creating inclusive digital experiences that work for everyone.

## What is Color Contrast?

Color contrast refers to the difference in luminance between text and its background. The Web Content Accessibility Guidelines (WCAG) provide specific ratios that ensure content is readable for users with various visual abilities, including those with color blindness, low vision, or age-related vision changes.

## WCAG Standards Explained

### Level AA (Minimum)
- **4.5:1** for normal text
- **3:1** for large text (18pt+ or 14pt+ bold)

### Level AAA (Enhanced)
- **7:1** for normal text
- **4.5:1** for large text

## Why It Matters

### 1. Legal Compliance
Many countries have laws requiring digital accessibility. The Americans with Disabilities Act (ADA) in the US and similar legislation worldwide often reference WCAG standards.

### 2. User Experience
Good contrast benefits everyone:
- Users with visual impairments
- People using devices in bright sunlight
- Aging populations with declining vision
- Anyone experiencing eye strain

### 3. Business Impact
- Larger potential audience
- Better SEO rankings
- Reduced legal risk
- Enhanced brand reputation

## Best Practices

1. **Test Early and Often**: Use tools like this contrast checker during the design phase
2. **Don't Rely on Color Alone**: Use icons, patterns, or text to convey information
3. **Consider Context**: Higher contrast may be needed for critical actions
4. **Test with Real Users**: Automated tools are helpful, but user testing is invaluable

## Common Mistakes to Avoid

- Using light gray text on white backgrounds
- Relying solely on color to indicate errors or status
- Ignoring contrast in interactive states (hover, focus)
- Not testing with actual accessibility tools

## Conclusion

Implementing proper color contrast is a simple yet powerful way to make your website more accessible. It's not just about meeting guidelines—it's about creating digital experiences that truly work for everyone.

Remember: accessibility is not a feature to be added later, but a fundamental aspect of good design that should be considered from the very beginning of any project.
    `,
    author: "Danish Khan",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["WCAG", "Accessibility", "Web Design", "Color Theory"],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
