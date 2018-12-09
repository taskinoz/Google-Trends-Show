<?php
// TODO: Add server root rariavle to add to the include
  include 'filesearch.php';
  echo '
  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
  <nav>
    <div class="nav-wrapper">
      <a class="brand-logo center" href="/"><img class="logo" src="/img/trends_logo.png" alt="Google trends Logo" title="Google trends Logo"></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/about/">About</a></li>
        <li><a href="/rules/">Rules</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Trends<i class="fa fa-sort-down right"></i></a></li>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="fa fa-bars"></i></a>
      </ul>
    </div>
  </nav>
  ';
?>
