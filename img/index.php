<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="pl-PL">
<head>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=iso-8859-2">
  <title>Smart Angielski</title>



  <link rel="stylesheet" type="text/css" href="styl.css">
    <link rel="stylesheet" type="text/css" href="styl7.css">
<link rel="stylesheet" type="text/css" href="styl40.css">
<link rel="stylesheet" type="text/css" href="styl45.css">

  <script src="http://code.jquery.com/jquery-1.9.0.min.js" type="text/javascript"></script>
  <script>
$(document).ready(function() {
var boxMargin = 15;
var boxLeft = $("#animabox").position().left; var containerHeight = $("#animabox").closest("#content").height();
var containerOffset = $("#animabox").closest("#content").offset().top;
var height = $("#animabox").outerHeight();
$(window).scroll(function() {
$("#animabox").each(function() {
var windowScroll = $(window).scrollTop();
if (windowScroll < containerOffset) {
$(this).removeClass("fixed bottom");
} else if (windowScroll > containerHeight + containerOffset - height - 2*boxMargin) {
$(this).removeClass("fixed").addClass("bottom").css({"left": ""});
} else {
var leftValue = boxLeft + $(this).closest("#content").offset().left;
$(this).removeClass("bottom").addClass("fixed").css({"left": leftValue});
}
});
});
});
  </script>
  <script>
$(document).ready(function() {
var boxMargin = 15;
var boxLeft = $("#animabox2").position().left; var containerHeight = $("#animabox2").closest("#content").height();
var containerOffset = $("#animabox2").closest("#content").offset().top;
var height = $("#animabox2").outerHeight();
$(window).scroll(function() {
$("#animabox2").each(function() {
var windowScroll = $(window).scrollTop();
if (windowScroll < containerOffset) {
$(this).removeClass("fixed bottom");
} else if (windowScroll > containerHeight + containerOffset - height - 2*boxMargin) {
$(this).removeClass("fixed").addClass("bottom").css({"left": ""});
} else {
var leftValue = boxLeft + $(this).closest("#content").offset().left;
$(this).removeClass("bottom").addClass("fixed").css({"left": leftValue});
}
});
});
});
  </script>
</head>
<body>
<br>
<?php 

require 'includes/config.php';
require 'includes/header.php';
require 'includes/menu44.php';

if(isset($_POST['a'])){

if($row[1] == "zaznaczony")
{
$aa = "brak";
}
else {
$aa = "zaznaczony";
}
} else{
$aa = $row[1];}
?>
<div id="wrap">
<div id="header"></div>

<div id="content">
<div class="dropdown">
    <input type="checkbox" id="checkbox-toggle">
    <label for="checkbox-toggle"><?php echo'&#9786;'; $userData = $user->data(); $userData['login']; echo'&#8681;'; ?> </label>
    <ul>
        <li><a href="logout.php">Wyloguj</a></li>
        <li><a href="profile.php?id='.$userData['id'].'">Profil</a></li>
        <li><a href="#">Ustawienia</a></li>
        <li><a href="#">Test poziomu</a></li>
    </ul>
</div>
</td>
</tr>
<tr>
</p>
<br>
<br>
<br>
<br>
(The) guy catch (the) cat and hug him.
<br>
<br>
<br>
<div class="item">
<div>
    <img id=""33" src="http://smartangielski.j.pl/img/1amix.jpg"/>
    <span class="caption">W lenym gaju jest gajowy, który jest fajnym gociem</span>
</div>
<form action="" method="POST" form id="formName">
<?php if($row[1] != "brak"){?>
<input type="submit" name="a" value="<?php $row[1] ?>" style="background-image:url("http://smartangielski.j.pl/img/1amix.jpg");width:99px;height:32px;" >
<?php } else { ?>
<input type="submit" name="a" value="<?php $row[1] ?>" style="background-image:url("http://smartangielski.j.pl/img/1bmix.jpg");width:99px;height:32px;" >
<?php } ?>
</form>
  <img src="http://www.smartangielski.j.pl/menu.png" alt="" style="height: 40px; width: 70px;" />
  </div>
<div class="item">
<div>
    <img id=""33" src="http://smartangielski.j.pl/img/1bmix.jpg"/>
    <span class="caption">Kaczyński łapie motyle</span>
</div>
  <img src="http://www.smartangielski.j.pl/menu.png" alt="" style="height: 40px; width: 70px;" />
  </div>
<div class="item">
<div>
    <img id=""33" src="http://smartangielski.j.pl/img/1cmix.jpg"/>
    <span class="caption">Katarzyna Caryca miała osobistego kata, który ucinał głowy kotom</span>
</div>
<img src="http://www.smartangielski.j.pl/menu.png" alt="" style="height: 40px; width: 70px;" />
</div>
<div class="item">
<div>
    <img id=""33" src="http://smartangielski.j.pl/img/1dmix.jpg"/>
    <span class="caption">Endriu wydziela endorfiny i ćwiczy to i to i to, aby było więcej endorfin i wyczekuje końca treningu</span>
</div>
<img src="http://www.smartangielski.j.pl/menu.png" alt="" style="height: 40px; width: 70px;" />
</div>
<div class="item">
<div>
    <img id=""33" src="http://smartangielski.j.pl/img/1emix.jpg"/>
    <span class="caption">W miecie Haga wszyscy się przytulajš</span>
</div>
<img src="http://www.smartangielski.j.pl/menu.png" alt="" style="height: 40px; width: 70px;" />
</div>
<div class="item">
<div>
    <img id=""33" src="http://smartangielski.j.pl/img/1fmix.pg"/>
    <span class="caption">Ludzie powiedzieli, że jeżeli pewien gociu wspišł się na szczyt to Himalaje sš jego</span>
</div>
<img src="http://www.smartangielski.j.pl/menu.png" alt="" style="height: 40px; width: 70px;" />
</div>
<table align="center" border="0" width="1280" height="2000">

<div id="aside">
<script type="text/javascript">
function shBlock(id)
{
var item;
item = document.getElementById(id);
if( item.style.display == 'none' || item.style.display == '')
{
item.style.display = 'block';
}
else
{
item.style.display = 'none';
}
}
</script>
<div id="animabox"><iframe id="iframe" width="560" height="650" src="ramkanowa.php">
</iframe></div>
<div style="font-weight: bold;" id="animabox2"><a href="javascript:shBlock('animabox')" ;="">
<img src="menu.png" width="93" height="41"></a>
</div>

<div id="footer"></div>

</div>

</div>

</div>

</div>

</body>
</html>
