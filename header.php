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

</head>

<body <?php body_class();?>>
    <?php wp_body_open();?>
    <div class="site">
        <a class="skip-link screen-reader-text"
            href="#primary"><?php esc_html_e('Skip to content', 'cyberize-app-dev');?></a>

        <header id="" class="site-header">
            <!-- MRH IDX TOP BUTTON HEADER -->
            <section id="mrh-top-button-header">
                <div class="row">
                    <div class="col-md-6 left-box">
                        <p class="phone-number-heading text-center">
                            <a class="top-phone-number" href="tel:+18005222781" target="_blank"
                                style="outline: none;">800.522.2781</a>
                            <span class="fw-light">HOUSTON</span> <span class="fw-bold text-muted">DALLAS</span> <span
                                class="fw-light">FORT WORTH</span>
                        </p>
                    </div>
                    <div class="col-md-6 right-box">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item red">LANDLORDS</li>
                            <li class="list-group-item black">TENANTS</li>
                            <li class="list-group-item black">AGENTS</li>
                            <li class="list-group-item gray">INSIGHTS</li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- Moose_Framework_2 NAVIGATION GOES HERE -->
            <div class="main-navigation">
                <div class="main-navbar container-fluid">

                    <div class="row">
                        <div class="col-md-4">

                            <a href="/">
                                <figure class="logo-container">
                                    <img class="logo" src="/wp-content/uploads/2024/03/LogoMRH.png" alt="">
                                </figure>
                            </a>

                        </div>
                        <div class="col-md-8">

                            <?php
wp_nav_menu(array(
    'theme_location' => 'menu-1', // Defined when registering the menu
    'menu_id' => 'primary-menu',
    'container' => 'div',
    'container_class' => 'main-nav',
    // 'menu_class'     => 'mx-auto', //CENTER ALIGN
    'menu_class' => 'ms-auto', //RIGHT ALIGN
    // 'menu_class' => 'me-auto', //LEFT ALIGN
));
?>
                        </div>
                    </div>


                </div>
            </div>


            <!-- Moose_Framework_2 NAVIGATION ENDS HERE -->

        </header><!-- #masthead -->





        <!-- #masthead -->
        <hr class="bg-danger">