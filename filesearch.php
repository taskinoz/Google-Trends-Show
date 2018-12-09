<?php
$jsonDir = "json/";
$divider = 0;
echo '<ul id="dropdown1" class="dropdown-content">';
foreach (glob($jsonDir."*.{json}", GLOB_BRACE) as $filename) {

  $replacethis = array("-", ".json", $jsonDir);
  $withthis   = array(" ", "", "");
  $jsonname = str_replace($replacethis, $withthis, $filename);
  $filename = str_replace(".json","",$filename);
  if ($divider>0) {
    echo '<li class="divider"></li>'."\n";
  }
  else {
    $divider++;
  }
  echo '<li><a href=/'.str_replace($jsonDir,"",$filename).'>'.str_replace("Vs","vs",ucwords($jsonname)).'</a></li>';
}
echo "</ul>";
?>
