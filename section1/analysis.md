# Accessibility Impact Analysis

### Violation 1 — WCAG 2.1.1: Use of Non-Semantic Elements (`<div class="link-item">`)
Using generic `<div>` tags for navigation items provides no semantic meaning to assistive technologies such as screen readers. This results in a lack of structure and clarity, making navigation difficult for users with disabilities.  
<!-- Week 1: Introduction to Web Technologies – semantic HTML and structure -->

### Violation 2 — WCAG 1.1.1: Missing `alt` Attribute on `<img>` Tag
An image without `alt` text leaves visually impaired users unable to perceive important visual content. This leads to lost context and a poor user experience, especially on e-commerce product pages.  
<!-- Week 5: Inclusive Design & Accessibility – non-text content requirements -->

### Violation 3 — WCAG 4.1.2: Emoji Used as a Button Without a Label
Using an emoji-only button without a proper label causes confusion for screen reader and keyboard users. Visually impaired users may not understand the emoji at all, and the button’s purpose becomes unclear without additional context.  
<!-- Week 5: Inclusive Design & Accessibility – role/name/label for screen reader compatibility -->

---

# Implementation with Performance Considerations

### Why CSS Grid?
- Enables precise column layouts and consistent spacing  
- More suitable than Flexbox for this type of responsive grid layout  
<!-- Week 2: Responsive CSS Design – CSS Grid vs. Flexbox comparison -->

### Media Query Breakpoints
- `600px` and `900px` breakpoints were chosen to align with common device widths and ensure the layout adapts as required:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns  
<!-- Week 2: Responsive CSS Design – breakpoint decisions based on screen size -->

### `loading="lazy"` for Images
- Optimizes loading for users on slow connections  
- Delays the loading of offscreen images until needed  
- Improves overall performance and perceived speed  
<!-- Week 6: Web Optimisation & Planning – lazy loading for faster performance -->

---

# Critical Design Decision Analysis

### Breakpoint Strategy
For mobile screens (<600px), a single-column layout ensures readability and ease of tapping. On tablets (600–899px), a two-column layout balances visibility with usability. For desktop (≥900px), a three-column layout provides efficient space utilization for browsing multiple products.  
<!-- Week 2: Responsive CSS Design – responsive strategy based on screen type -->

### Design Rationale
This layout was chosen to serve both business and user needs. It maximizes product exposure—important for sales—while maintaining a smooth, accessible experience for users, particularly on mobile devices.  
<!-- Week 2: Responsive CSS Design + Week 6: Planning for user experience and business alignment -->

---

# AI Collaboration with Course Integration

### AI Usage
AI was minimally used in this task. I asked for:
- A basic empty HTML scaffold  
- An explanation of how to support reduced motion in CSS  

AI initially suggested embedding CSS directly into the HTML file. However, I rejected this advice based on our Week 2 content, which emphasized separating CSS for better maintainability, collaboration, and reusability.  
<!-- Week 2: Code separation and maintainable structure -->

### Reduced Motion Guidance
Since motion reduction was not covered in our course materials, I consulted AI for best practices. The AI provided the appropriate `@media (prefers-reduced-motion: reduce)` CSS snippet and explained that it enhances accessibility, particularly for elderly users or those with visual sensitivity.  
<!-- Week 6: Performance optimisation for accessibility needs -->
