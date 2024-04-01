<?php
// THE USER QUERY ARGS
$args = [
 'role'   => 'subscriber',
 'number' => 5,
];

// THE USER QUERY
$user_query = new WP_User_Query($args);

echo '<h3 class="font-weight-bold">Total Number of Subscribers: ' . $user_query->get_total() . '</h3>';
echo '<h3 class="font-weight-bold">Total Number of Customers: ' . $user_query->get_total() . '</h3>';
echo '<hr>';

// THE USER LOOP
if (!empty($user_query->get_results())) {
 foreach ($user_query->get_results() as $user) {

  // ACF PREFIX & FIELD DATA
  $acf_user_id   = 'user_' . $user->ID;
  $user_phone    = get_field('your_profile_phone', $acf_user_id);
  $user_website  = get_field('your_profile_site', $acf_user_id);
  $user_facebook = get_field('your_profile_facebook', $acf_user_id);

  echo '<h3>' . $user->display_name . '</h3>';
  echo '<h6>MEMBER TYPE: <span class="text-danger">' . $user->roles[0] . '</span></h6>';
  echo '<h6>MEMBER EMAIL: <span class="text-danger">' . $user->user_email . '</span></h6>';
  echo '<h6>MEMBER SINCE: <span class="text-danger">' . $user->user_registered . '</span></h6>';

  echo '<div class="card bg-light p-4">';
  echo '<p>ADDITIONAL INFO:</p>';
  echo '<p>Phone: <span class="text-danger">' . $user_phone . '</span></p>';
  echo '<p>Website: <span class="text-danger">' . $user_website . '</span></p>';
  echo '<p>Facebook: <span class="text-danger">' . $user_facebook . '</span></p>';
  echo '</div>';

  echo '<pre>';
  // print_r($user);
  echo '</pre>';
  echo '<hr>';
 }
}