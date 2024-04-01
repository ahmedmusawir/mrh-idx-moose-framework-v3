<?php

function add_cors_http_header()
{
 header("Access-Control-Allow-Origin: *");
 header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS, READ');
 header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token,authorization,XMLHttpRequest, user-agent, accept, x-requested-with');
 header("Access-Control-Allow-Credentials: true");

 if ('OPTIONS' == $_SERVER['REQUEST_METHOD']) {
  status_header(200);
  exit();
 }
}

add_action('init', 'add_cors_http_header');

// ENABLE WP APPLICATION PASSWORD ON HTTP -- NON SSL OR HTTPS
add_filter('wp_is_application_passwords_available', '__return_true');

/**
 * Theme Setup Functions
 */
require get_template_directory() . '/_functions/theme-setup.php';

/**
 * Widget Setup Functions
 */
require get_template_directory() . '/_functions/widget-setup.php';

/**
 * Enqueue scripts and styles.
 */
require get_template_directory() . '/_functions/scripts-setup.php';

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/*
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
 require get_template_directory() . '/inc/jetpack.php';
}

/*======================================
=            MOOSE INCLUDES            =
======================================*/

/**
 * Bootstrap 4 Nav Walker
 */
// require get_template_directory() . '/_functions/bootstrap-navwalker.php';
// require get_template_directory() . '/_functions/moose-navwalker.php';
/**
 * Helper Functions
 */
require get_template_directory() . '/_functions/helpers-setup.php';

/*
 *
 * React App Setup
 *
 */
// require get_template_directory() . '/_functions/react-setup.php';

/*
 *
 * Adding Breadcrums
 *
 */

// require get_template_directory() . '/_functions/breadcrum-function.php';

/*
 *
 * CUSTOMIZING THE LOGIN SCREEN
 *
 */

// require get_template_directory() . '/_functions/wp-logon-screen.php';

/*
 * COMPOSER CLASS LOADS
 */

// require __DIR__ . '/vendor/autoload.php';