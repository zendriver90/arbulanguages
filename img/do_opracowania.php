<style>
<?php include 'style2.css'; ?>
</style>

<?php
require 'includes/config.php';

if(isset($_SESSION['user_id'])){
	if ($userID === null) {
		$userID = $_SESSION['user_id'];
}}
if(isset($_POST['a'])){		

 { 	
$rezultat4 = $db->query("SELECT * FROM `userss` WHERE id=".($userID));
 {
	 
if(isset($_POST['a'])){
if($rooow2[0] == "zaznaczony")
{
$aa = "brak";
}
else {
$aa = "zaznaczony";
}
} else{
$aa = $rooow2[0];}

$rezultat4 = $db->query("UPDATE `userss` SET `wybor1`='".$aa." WHERE id=".($userID));
$rezultat = $db->query("SELECT * FROM `userss` WHERE id=".($userID));
{
?>
<form action="" method="POST" form id="formName">
<?php if($row[0] != "brak"){?>
<input type="submit" name="a" value="<?php $row[0] ?>" style="background-image:url('/img/1amix.jpg');width:99px;height:100px;" >a
<?php } else { ?>
<input type="submit" name="a" value="<?php $row[0] ?>" style="background-image:url('/img/1bmix.jpg');width:99px;height:100px;" >
<?php } ?>
</form>

<?php
}}}}
else
{
 { 	
$rezultat = $db->query("SELECT * FROM `userss` WHERE id=".($userID));
{
?>
<form action="" method="POST" form id="formName">
<?php if($row[0] != "brak"){?>
<input type="submit" name="a" value="<?php $row[0] ?>" style="background-image:url('/img/1amix.jpg');width:99px;height:70px;" >a
<?php } else { ?>
<input type="submit" name="a" value="<?php $row[0] ?>" style="background-image:url('/img/1bmix.jpg');width:99px;height:70px;">
<?php } ?>

</form>

<?php
}}}
echo $wybor1;
?>