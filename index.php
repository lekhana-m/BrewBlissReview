<?php
$server="localhost";
$username="root";
$password="";
$con= mysqli_connect($server,$username,$password);
if(!$con){
    die("connection failed");
    mysqli_connect_error();
}
echo "success";
$name=$_POST['name'];
$dob=$_POST['dob'];
$username=$_POST['username'];
$password=$_POST['password'];


$sql= "INSERT INTO `blissbrew`.`signin` (`name`,`dob`,`username`,`password`) VALUES ('$name','$dob','$username','$password')";
if($con->query($sql)==true){
    // echo"<center>";
    echo "<center> <h1>Success</h1> </center>";
    echo "<center><input type= 'button' value='Next' onclick='sql.html'></center>";
}
else{
    echo "error:$sql <br> $con->error";
}
$con->close();
// ?>