<?php
 /**
  * The template for displaying all pages
  * Template Name: OOP CALCULATOR
  * This is the template that displays all pages by default.
  * Please note that this is the WordPress construct of pages
  * and that other 'pages' on your WordPress site may use a
  * different template.
  *
  * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
  *
  * @package cyberize-app-dev
  */

 get_header();
?>
<?php

 if (isset($_POST['digit_one'])) {
  $digit_one = $_POST['digit_one'];
 }
 if (empty($_POST['digit_one'])) {
  $digit_one = 0;
 }

 if (isset($_POST['digit_two'])) {
  $digit_two = $_POST['digit_two'];
 }
 if (empty($_POST['digit_two'])) {
  $digit_two = 0;
 }

 if (isset($_POST['math'])) {
  $math_op = $_POST['math'];
 }
 if (empty($_POST['math'])) {
  $math_op = 'plus';
 }

 $calculator = new My_Calculator($digit_one, $digit_two, $math_op);
 $add        = new My_Add_Numbers($digit_one, $digit_two, $math_op);
 $minus      = new My_Minus_Numbers($digit_one, $digit_two, $math_op);
 $multiply   = new My_Multiply_Numbers($digit_one, $digit_two, $math_op);
 $divide     = new My_Divide_Numbers($digit_one, $digit_two, $math_op);

?>

<main id="primary" class="site-main container">

  <header id="header-test" class="site-header container py-5 text-center">

    <h1 class="text-center">OOP CALCULATOR</h1>

    <form action="" method="POST">
      <input type="text" name="digit_one" id="">
      <select name="math" id="" style="padding: 1rem;">
        <option value="plus">Plus</option>
        <option value="minus">Minus</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <input type="text" name="digit_two" id="">
      <input type="submit" value="Submit">
    </form>

    <div class="card bg-light mt-5 p-2">
      <?php $calculator->display_numbers()?>
      <?php $calculator->display_status()?>
    </div>

    <div class="card bg-light mt-5">
      <?php

       switch ($math_op) {
        case 'plus':
         echo "<h3>RESULT IS: " . $add->get_result() . "</h3>";
         $add->display_status();

         break;
        case 'minus':
         echo "<h3>RESULT IS: " . $minus->get_result() . "</h3>";
         $minus->display_status();

         break;
        case 'multiply':
         echo "<h3>RESULT IS: " . $multiply->get_result() . "</h3>";
         $multiply->display_status();

         break;
        case 'divide':
         echo "<h3>RESULT IS: " . $divide->get_result() . "</h3>";
         $divide->display_status();

         break;

        default:
         echo 'Error!';
       }

      ?>
      <?php ?>
    </div>

  </header><!-- #masthead -->

</main><!-- #main -->

<?php
get_footer();