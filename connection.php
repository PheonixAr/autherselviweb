<?php 
	if ($_SERVER['REQUEST_METHOD'] == 'POST') { 
		
		function get_data() { 
			$datae = array(); 
			$datae[] = array( 
				'fname' => $_POST['fname'], 
				'lname' => $_POST['lname'], 
				'email' => $_POST['emailid'], 
                'password'=>$_POST['password']
			); 
			return json_encode($datae); 
		} 
		
		$name = "gfg"; 
		$file_name = $name . '.json'; 
	
		if(file_put_contents( 
			"$file_name", get_data())) { 
				echo $file_name .' file created'; 
			} 
		else { 
			echo 'There is some error'; 
		} 
	} 
?> 
