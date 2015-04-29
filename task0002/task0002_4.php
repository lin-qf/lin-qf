<?php 
	$a=["Text001","Textsak","Texsk","Txsk","xbsja","xbsjw","sbakbdhg","textska"];
	$q=$_GET["name"];
	if (strlen($q) > 0)
  {
  $hint="";
  for($i=0; $i<count($a); $i++)
    {
    if (strtolower($q)==strtolower(substr($a[$i],0,strlen($q))))
      {
      if ($hint=="")
        {
        $hint=$a[$i];
        }
      else
        {
        $hint=$hint.",".$a[$i];
        }
      }
    }
  }
	echo $hint;
 ?>