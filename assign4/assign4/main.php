<html>
	<head>
	</head>
	<body>
		<?php
			// assign GST, HST, or PST to tax variable according 
			// to provincial tax rates
			function calcTax($provinceCode)
			{
				$taxRate = '';
						
				$taxArray = array('bc' => 1.12, 'mb' => 1.12, 'ab' => 1.05, 
				'nt' => 1.05, 'nu' => 1.05, 'yt' => 1.05, 'sk' => 1.10,
				'on' => 1.13, 'nl' => 1.13, 'nb' => 1.13, 'qc' => 1.1475,
				'ns' => 1.15, 'pe' => 1.14);
				
				if(isset($taxArray[$provinceCode]))
				{
					$taxRate = $taxArray[$provinceCode];
				}
				else
				{
					print '<br>Sorry, do not have province to culculate tax.';
				}
				
				return $taxRate;
			}
			
			// assign prices to different popsicles
			$popsiclePrice = array('Orange' => 2.10, 'Cherry' => 2.05, 
				'Grape' => 2.15, 'JollyRancher' => 2.30, 'SpongeBob' => 2.35);
			
			$popsicleType = array('Orange', 'Cherry', 
								'Grape', 'JollyRancher', 'SpongeBob');
								
			$popsicleQuantity = array();
			
			// calculate extended cost
			function calcExtendedCost($quantity, $price)
			{
				$extCost = $quantity * $price;
				return ($extCost);	
			}
			
			$extendedCost = "";
			
			if($_POST["orangeQuantity"] > 0)
			{
				$extendedCost += calcExtendedCost($_POST["orangeQuantity"], 
								$popsiclePrice['Orange']);
				$popsicleQuantity['Orange'] = $_POST["orangeQuantity"];
			}
			else 
			{
				$popsicleQuantity['Orange'] = 0;	
			}
			
			if($_POST["cherryQuantity"] > 0)
			{
				$extendedCost += calcExtendedCost($_POST["cherryQuantity"], 
										$popsiclePrice['Cherry']);
				$popsicleQuantity['Cherry'] = $_POST["cherryQuantity"];
			}
			else 
			{
				$popsicleQuantity['Cherry'] = 0;	
			}

			if($_POST["grapeQuantity"] > 0)
			{
				$extendedCost += calcExtendedCost($_POST["grapeQuantity"],
										$popsiclePrice['Grape']);
				$popsicleQuantity['Grape'] = $_POST["grapeQuantity"];
			}
			else 
			{
				$popsicleQuantity['Grape'] = 0;	
			}

			if($_POST["jollyRancherQuantity"] > 0)
			{
				$extendedCost += calcExtendedCost($_POST["jollyRancherQuantity"], 
										$popsiclePrice['JollyRancher']);
				$popsicleQuantity['JollyRancher'] = 
							$_POST["jollyRancherQuantity"];
			}
			else 
			{
				$popsicleQuantity['JollyRancher'] = 0;	
			}

			if($_POST["spongeBobQuantity"] > 0)
			{
				$extendedCost += calcExtendedCost($_POST["spongeBobQuantity"],
										$popsiclePrice['SpongeBob']);
				$popsicleQuantity['SpongeBob'] = 
							$_POST["spongeBobQuantity"];
			}
			else 
			{
				$popsicleQuantity['SpongeBob'] = 0;	
			}

			if(!$extendedCost)
			{
				echo "<br><h3><font color=\"red\">
					Sorry, do not have popsicles in order</font></h3>";
			}
			else 
			{

			// calculate delivery period depends on extended cost
			$deliveryCost = '';
			$deliveryDays = '';
			if($extendedCost > 0 && $extendedCost <= 25.00)
			{
				$deliveryCost = 3.00;
				$deliveryDays = 1;
			}
			elseif ($extendedCost >= 25.01 && $extendedCost <= 50.00) 
			{
				$deliveryCost = 4.00;
				$deliveryDays = 1;
			}
			elseif ($extendedCost >= 50.01 && $extendedCost <= 75.00) 
			{
				$deliveryCost = 5.00;
				$deliveryDays = 3;	
			}
			elseif ($extendedCost > 75.00) 
			{
				$deliveryCost = 6.00;
				$deliveryDays = 4;
			}
			
			// combine all information into receipt
			$name = $_POST["firstName"] . " " . $_POST["lastName"];
			$street = $_POST["streetNumber"] . " " . $_POST["street"];
			$cityProvince = $_POST["city"] . ", " . $_POST["province"];
			$postalCode = $_POST["postalCode"];
			
			$taxOnExtendedCost = $extendedCost * 
				calcTax($_POST["province"]) - $extendedCost;
			$estimatedDeliveryDate = strtotime(date('l jS F')) + 
				24*$deliveryDays*3600;
			
			$taxOnExtendedCost = round($taxOnExtendedCost, 2);
			$totalOrder = round(($extendedCost + $deliveryCost + 
				$taxOnExtendedCost), 2);
			
			$extendedCost = number_format($extendedCost, 2, '.', ',');
			$delivery = number_format($deliveryCost, 2, '.', ',');
			$tax = number_format(calcTax($_POST["province"]), 2, '.', ',');
			$totalOrder = number_format($totalOrder, 2, '.', ',');
			 
			// receipt header
			echo "<h3><i><strong>Shiping to: </strong></i></h3>
				<table border=\"0\">
				<tr><td></td><td>$name</td></tr>
				<tr><td></td><td>$street</td></tr>
				<tr><td></td><td>$cityProvince</td></tr>
				<tr><td></td><td>$postalCode</td></tr>
				<tr></tr></table><br />";
			echo "<h3><i><strong>Order Information: </strong></i></h3>
				Your Order is Processed, Please verify the information<br />
				<table border=\"0\">
			   			<tr><td width=\"200\"></td>
			   			<td width=\"100\"><strong>Popsicle</strong></td>
			   			<td width=\"80\"><strong>Quantity</i></td>
			   			<td width=\"100\"><strong>Price per each</strong>
			   				</td></tr></table>";
			// receipt body	
			for($i=0; $i<5; $i++)
			{
				$type = $popsicleType[$i];
				$popsiclePriceFormat = 
						number_format($popsiclePrice[$type], 2, '.', ',');
			   	echo "<table border=\"0\">
			   			<tr><td width=\"200\"></td>
			   			<td width=\"100\">$popsicleType[$i]</td>
			   			<td width=\"80\"><i>$popsicleQuantity[$type]</i></td>
			   			<td width=\"100\">\$$popsiclePriceFormat</td>
			   				</tr></table>";
			}
				
			echo "<table border=\"0\">
				<tr><td></td><td colspan=\"2\"><strong>Total:</strong>
					</td></tr>
				<tr><td></td><td>Extended cost = \$$extendedCost</td></tr>
				<tr><td></td><td>Delivery = \$$delivery</td></tr>
				<tr><td></td><td>Tax = \$$taxOnExtendedCost</td></tr>
				<tr><td></td><td><strong>Total Order is: \$$totalOrder
					</strong></td></tr>
				<tr><td></td></tr>
				<tr><td><font color=\"blue\"><strong>
					Estimated Delivery Date is: " . 
					date('l jS F', $estimatedDeliveryDate) . 
					"</strong></font></td><td></td></tr>
				<tr><td></td></tr>
				</table>";
			}
		?>
	</body>
</html>