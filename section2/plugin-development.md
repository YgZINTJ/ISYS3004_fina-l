### Part A
## Custom Solution Architecture
To implement the “Weekly Special” feature, I would use a custom post type called weekly_special. This post type would be managed through the WordPress dashboard and customized using Advanced Custom Fields (ACF) or a similar plugin.
# Data Structure
Each weekly_special post would include the following custom fields:
<?php>
function register_weekly_special_post_type() {
    register_post_type('weekly_special', array(
        'labels' => array(
            'name' => 'Weekly Specials',
            'singular_name' => 'Weekly Special',
            'add_new' => 'Add New Special',
            'add_new_item' => 'Add New Weekly Special',
            'edit_item' => 'Edit Weekly Special',
            'new_item' => 'New Weekly Special',
            'view_item' => 'View Special',
            'search_items' => 'Search Specials',
            'not_found' => 'No specials found',
        ),
        'public' => true,
        'has_archive' => true,
        'menu_position' => 20,
        'menu_icon' => 'dashicons-star-filled',
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'register_weekly_special_post_type');

# User Interface for Non-Technical Staff
-- 
Making Specials Management Easy
I  use ACF with simple dropdown menus and date pickers so even non-technical staff can:

Add new specials without coding
Edit existing offers safely
Schedule promotions in advance

For example, they can:
    Create a "Summer Ice Cream Special" in June
    Set it to automatically publish on July 1st
    Have it expire on August 31st
All without touching any code or worrying about breaking the site.

# Handling Expired Specials
To prevent showing expired specials, there are a couple straightforward ways to handle it. The first option is to use WP_Query to check each offer's end date against today's date, only displaying ones that are still current. This happens in real-time whenever someone visits the page. The other approach would be to set up an automated CRON job that runs daily to check for expired specials and either unpublish them or move them to an archive. Both methods get the job done - the WP_Query way is more immediate while the CRON job approach might be slightly more efficient for sites with lots of specials. Really just depends which fits better with how the site is set up.

# Security Considerations
When handling any form data on the site, I need to properly clean and secure all input and output. WordPress provides built-in functions like sanitize_text_field for cleaning up user input, esc_html for safely displaying content, and wp_nonce_field to protect forms from misuse. While ACF automatically handles much of this security for its fields, any custom metaboxes or shortcodes I create need to follow WordPress security standards - specifically using these validation and escaping functions. This matches the security best practices covered in the Week 7 lecture, ensuring I don't accidentally leave openings for malicious code or data leaks. The key is being consistent - every time I take in user data or output content, I run it through the appropriate security functions first.

### Part B
## Plugin vs. Theme Function Decision
This should be built as a custom plugin rather than being part of the theme. The main reason is future-proofing (Week 8 Consideration of choosing a plugin) - if the bakery ever decides to change their theme for a redesign or rebrand, having the weekly specials and POS integration in a plugin means they won't lose any of that functionality when switching themes. It also follows WordPress's recommended approach where plugins handle the functional logic while themes focus on presentation. On the maintenance side, keeping it as a plugin means I can update or fix the specials feature without touching the theme code, making changes safer and easier to test. If I built this into the theme instead, the bakery would risk losing these features completely if they ever needed to update or change their theme.

