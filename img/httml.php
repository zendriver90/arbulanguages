<head>
<html lang="pl-PL">
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=iso-8859-2">
<title>Smart Angielski</title>
	  <link rel="stylesheet" type="text/css" href="styllanguage.css">
	  <link rel="stylesheet" type="text/css" href="styllanguage2.css">
	  <link rel="stylesheet" type="text/css" href="styllanguage5.css">
  <script src="https://code.jquery.com/jquery-3.2.1.js" type="text/javascript"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
<div class="bg-image">
<div class="wrapper">
<br>
<br>
<br>
<h4><span style="color: lime" style="position: center" >MÓJ JĘZYK / MY ORIGIN LANGUAGE:</span></h4>
</div>
<br>
<br>
<div class="wrapper">
<ul class="prod-gram" id="menu">
			    <li class="init" id="" id2="" data-value="1"><img src="<?php require 'menu.php'; $userData = $user->data(); if(empty($userData['language'])){
																												echo 'http://smartangielski.j.pl/img/wybierzjezyk.png';
																														} else {
																														echo $userData['language'];
																														}
																														?>" /> </li>
				<li id="http://smartangielski.j.pl/img/polski2.png" id2="http://smartangielski.j.pl/polski.png" id44="visible" id4="hidden" data-value="http://smartangielski.j.pl/img/polski.png"><img src="http://smartangielski.j.pl/img/polski.png" onclick="setTimeout('history.go(0);',200);" /> </li>
				<li id="http://smartangielski.j.pl/img/english2.png" id44="hidden" id4="visible" data-value="http://smartangielski.j.pl/img/english.png"><img src="http://smartangielski.j.pl/img/english.png" onclick="setTimeout('history.go(0);',200);" /> </li>
		</ul>
		</div>
		<br>
		<br>
		<div class="flag">
		<img src="<?php $userData = $user->data(); echo $userData['language2'];?>">
		</div>
		<br>
		<br>
		<br>

		<div class="wrapperr">
		<ul class="prod-gramnowy" id="menumenu" style="visibility: <?php if($userData["language44"] == 'visible'){ echo 'visible';}?>">
			    <li class="initnowy" id="" id2="" id3="" id4="" data-value="1"><img src="<?php require 'menu.php'; $userData = $user->data(); echo 'http://smartangielski.j.pl/img/wybierzjezyk.png';?>" /> </li>
				<li id="http://smartangielski.j.pl/spanish.png" id2="http://smartangielski.j.pl/img/english2.png" id3="http://smartangielski.j.pl/img/eng.png" id4="http://smartangielski.j.pl/img/english2.png" data-value="http://smartangielski.j.pl/eng.png"><img src="<?php $userData = $user->data();
																			echo 'http://smartangielski.j.pl/img/eng.png';
																			?>" onclick="setTimeout('history.go(0);',200);" /> </li>
				<li id="http://smartangielski.j.pl/img/nothing.png" id2="http://smartangielski.j.pl/img/hiszpanski2.png" id3="http://smartangielski.j.pl/img/es.png" id4="http://smartangielski.j.pl/img/hiszpanski2.png" data-value="http://smartangielski.j.pl/es.png"><img src="<?php $userData = $user->data();
																			echo 'http://smartangielski.j.pl/img/es.png';
																			?>" onclick="setTimeout('history.go(0);',200);" /> </li>
		</ul>
		</div>
		<div class="wrapperr">
		<ul class="prod-gramnew" id="menumenumanu" style="visibility: <?php echo $userData['language4']; ?>">
			    <li class="initnew" id="" id2="" id3="" id4="" data-value="1"><img src="<?php require 'menu.php'; $userData = $user->data(); echo 'http://smartangielski.j.pl/chooselanguage.png';
																			?>" /> </li>
				<li id="http://smartangielski.j.pl/spanish.png" id2="http://smartangielski.j.pl/img/english2.png" id3="http://smartangielski.j.pl/img/eng.png" id4="http://smartangielski.j.pl/img/english2.png" data-value="http://smartangielski.j.pl/eng.png"><img src="<?php $userData = $user->data();
																			if($userData["language"] == 'http://smartangielski.j.pl/img/english.png'){
																			echo 'http://smartangielski.j.pl/spanish.png';
																			}
																			?>" onclick="setTimeout('history.go(0);',200);" /> </li>
				<li id="http://smartangielski.j.pl/img/nothing.png" id2="http://smartangielski.j.pl/img/hiszpanski2.png" id3="http://smartangielski.j.pl/img/es.png" id4="http://smartangielski.j.pl/img/hiszpanski2.png" data-value="http://smartangielski.j.pl/es.png"><img src="<?php $userData = $user->data();
																			if($userData["language"] == 'http://smartangielski.j.pl/img/english.png'){
																			echo 'http://smartangielski.j.pl/nothing.png';
																			}
																			?>" onclick="setTimeout('history.go(0);',200);" /> </li>
		</ul>
		</div>
		<br>
		<div class="flag">
		<img src="<?php $userData = $user->data(); echo $userData['language11'];?>">
		</div>
		<script src="new.js"></script>
<br>
<br>
<div class="wrapper">
<p><h4>
		<a href="rozdzial1mix.php" class="btn btn-block btn-register"><span style="font-size: xx-large" style="color: navy"> START</a></span>
	</p>
	</div>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
</html>