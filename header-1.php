<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cyberize-app-dev
 */

?>
<!doctype html>
<html <?php language_attributes();?>>

<head>
  <meta charset="<?php bloginfo('charset');?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head();?>
<!-- Google tag (gtag.js) --> <script async src=https://www.googletagmanager.com/gtag/js?id=G-477QV46XYG></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-477QV46XYG'); </script>
</head>

<body <?php body_class();?>>
  <?php wp_body_open();?>
  <div class="site">
    <a class="skip-link screen-reader-text"
      href="#primary"><?php esc_html_e('Skip to content', 'cyberize-app-dev');?></a>

    <header id="" class="site-header">
      <!-- Moose_Framework_2 NAVIGATION GOES HERE -->

      <div class="main-navigation">
        <div class="main-navbar container">

          <div class="row">
            <div class="col-md-3">

              <a href="/">
                <figure class="logo-container">
                  <img class="logo" src="/wp-content/uploads/2022/08/House-For-Purchce-Logo.png" alt="">
                </figure>
              </a>

            </div>
            <div class="col-md-9">

              <?php
wp_nav_menu(array(
    'theme_location' => 'menu-1', // Defined when registering the menu
    'menu_id' => 'primary-menu',
    'container' => 'div',
    'container_class' => 'main-nav',
    // 'menu_class'     => 'mx-auto', //CENTER ALIGN
    'menu_class' => 'ml-auto', //RIGHT ALIGN
    // 'menu_class'     => 'mr-auto', //LEFT ALIGN
));
?>
            </div>
          </div>


        </div>
      </div>


      <!-- Moose_Framework_2 NAVIGATION ENDS HERE -->

    </header><!-- #masthead -->

    <!-- SELFLIST LOGO HEADER -->
    <!-- <header id="header-list-preview" class="site-header container mt-5 mb-2 text-center">



    </header> -->
    <!-- #masthead -->
    <hr class="bg-danger">