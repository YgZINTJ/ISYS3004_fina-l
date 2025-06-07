# Development Environment Strategy

Using LocalWP offers three core advantages over live site development for the bakery’s project.

**1. Zero Downtime During Development and Maintenance**  
By testing and modifying the website in a local environment, developers avoid exposing customers to incomplete pages or performance issues. This is especially important during the bakery’s peak hours, when uninterrupted access to the site is essential for a smooth customer experience.

**2. Secure Payment System Testing**  
LocalWP enables testing of payment plugins like WooCommerce or Stripe without the risks associated with live transactions. This eliminates potential problems such as failed payments or data breaches during integration and configuration.

**3. More Efficient Development and Debugging**  
LocalWP supports rapid development with instant page reloads and offline functionality. This allows developers to work continuously and update features—such as blog posts or weekly specials—more efficiently, reducing time to deployment.

---

# WordPress Architecture Decision

For the bakery’s content, I recommend using a combination of custom post types and default WordPress post types. Blog posts should use the built-in `post` type, while product listings and customer reviews should be structured as custom post types.

Blog posts are best handled using the default post type because they are typically time-sensitive, category-driven content that benefit from built-in SEO features, chronological archives, and simplified editing. This setup meets the needs of a conventional blog and allows for straightforward publishing workflows.

Products and customer reviews, on the other hand, require more flexibility. Products often need fields such as price, description, images, and stock status. Reviews typically contain the customer’s name, feedback text, and possibly a star rating or date. Defining these as custom post types allows for better back-end organization, easier management for non-technical staff, and tailored front-end display templates. This structure also supports future scalability—for example, adding new post types like "seasonal specials" or "custom orders" without disrupting existing content.

---

# Theme Development Planning

The theme should be structured according to WordPress’s template hierarchy to support both default and custom post types.

**For Blog Posts (Default Post Type):**  
Use the default WordPress templates:
- `single.php`: Controls the layout of individual blog posts  
- `home.php` or `index.php`: Controls the list of blog posts  
These default templates are sufficient for blog content, as they support categories, tags, and SEO optimization out of the box.

**For Products and Customer Reviews (Custom Post Types):**

*Products (`product` post type):*
- `single-product.php`: Displays individual product pages, including images, pricing, and purchase buttons  
- `archive-product.php`: Lists all products in grid or list format  

*Customer Reviews (`testimonial` post type):*
- `single-testimonial.php`: Displays individual reviews, including customer name, feedback, and rating  
- `archive-testimonial.php`: Provides a summary page for all customer testimonials

**Template Selection Logic in WordPress:**  
When a user accesses a custom post (such as a product), WordPress looks for the most specific template available, following this order: `single-product.php` → `single.php` → `index.php`. If a specific template isn’t found, the system defaults to a more general one. This hierarchy ensures that each post type can have its own layout without requiring redundant code across the theme.

