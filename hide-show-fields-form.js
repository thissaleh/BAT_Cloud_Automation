// Wrap every letter in a span

var ecps_fee = ''
var m_total = ''
var a_total = ''


var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
 
anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



		  // Wrap every letter in a span
		  var textWrapper = document.querySelector('.ml11 .letters');
		  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
		  
		  anime.timeline({loop: true})
			.add({
			  targets: '.ml11 .line',
			  scaleY: [0,1],
			  opacity: [0.5,1],
			  easing: "easeOutExpo",
			  duration: 700
			})
			.add({
			  targets: '.ml11 .line',
			  translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
			  easing: "easeOutExpo",
			  duration: 700,
			  delay: 100
			}).add({
			  targets: '.ml11 .letter',
			  opacity: [0,1],
			  easing: "easeOutExpo",
			  duration: 600,
			  offset: '-=775',
			  delay: (el, i) => 34 * (i+1)
			}).add({
			  targets: '.ml11',
			  opacity: 0,
			  duration: 1000,
			  easing: "easeOutExpo",
			  delay: 1000
			});
		  
		  
		  

			


  var ml4 = {};
  ml4.opacityIn = [0,1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 3;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;
  
  anime.timeline({loop: true})
	.add({
	  targets: '.ml4 .letters-1',
	  opacity: ml4.opacityIn,
	  scale: ml4.scaleIn,
	  duration: ml4.durationIn
	}).add({
	  targets: '.ml4 .letters-1',
	  opacity: 0,
	  scale: ml4.scaleOut,
	  duration: ml4.durationOut,
	  easing: "easeInExpo",
	  delay: ml4.delay
	}).add({
	  targets: '.ml4 .letters-2',
	  opacity: ml4.opacityIn,
	  scale: ml4.scaleIn,
	  duration: ml4.durationIn
	}).add({
	  targets: '.ml4 .letters-2',
	  opacity: 0,
	  scale: ml4.scaleOut,
	  duration: ml4.durationOut,
	  easing: "easeInExpo",
	  delay: ml4.delay
	}).add({
	  targets: '.ml4 .letters-3',
	  opacity: ml4.opacityIn,
	  scale: ml4.scaleIn,
	  duration: ml4.durationIn
	}).add({
	  targets: '.ml4 .letters-3',
	  opacity: 0,
	  scale: ml4.scaleOut,
	  duration: ml4.durationOut,
	  easing: "easeInExpo",
	  delay: ml4.delay
	}).add({
	  targets: '.ml4',
	  opacity: 0,
	  duration: 500,
	  delay: 500
	});
  
  
  




$("#platform").change(function() {
		switch ($(this).val()){
				case "none":
					
					 
					 
					 
					 
					$('#azcode02').hide();
					$('#azcode03').hide();
					$('#azcode04').hide();
					$('#azcode05').hide();
					$('#azcode01').hide();
					$('#code02').hide();
					$('#code03').hide();
					$('#code04').hide();
					$('#code05').hide();
					$('#code01').hide();
					$('#awsForm').hide();
					$('#costForm').hide();
					$('#filecostForm').hide();
					$('#buttonForm').hide();
					$('#azForm').hide();
			 
					$("#azgrid1").hide();
					$('#RequestHere').show();

					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
					document.getElementById("region01").value = "none";
					document.getElementById("region02").value = "none";
					document.getElementById("region03").value = "none";
					document.getElementById("region04").value = "none";
					document.getElementById("azregion01").value = "none";
					document.getElementById("azregion02").value = "none";
					document.getElementById("azregion03").value = "none";
					document.getElementById("azregion04").value = "none";
					document.getElementById("wrap").style.backgroundColor = "white";
					document.getElementById("wrap").style.opacity = "0.7";
					break; 
				case "aws":
					$('#RequestHere').hide();
					
					$('#code02').hide();
					$('#code03').hide();
					$('#code04').hide();
					$('#code05').hide();
					$('#code01').show();
				
					$('#costForm').hide();
					$('#filecostForm').hide();
					$('#buttonForm').hide();
					$('#azForm').hide();
				 
					$("#azgrid1").hide();
					$('#awsForm').show();
					 
					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
					document.getElementById("region01").value = "none";
					document.getElementById("region02").value = "none";
					document.getElementById("region03").value = "none";
					document.getElementById("region04").value = "none";
					document.getElementById("azregion01").value = "none";
					document.getElementById("azregion02").value = "none";
					document.getElementById("azregion03").value = "none";
					document.getElementById("azregion04").value = "none";
					document.getElementById("code").value = "none";
					document.getElementById("azcode").value = "none";
					document.getElementById("wrap").style.backgroundColor = "#FF9900"; // #ffbb00 #FFB900
					document.getElementById("wrap").style.opacity = "0.7";
					document.getElementById("wrap").style.color = "black";
					 
					 
					break;  
			  	case "azure":
					$('#RequestHere').hide();

					$('#azcode02').hide();
					$('#azcode03').hide();
					$('#azcode04').hide();
					$('#azcode05').hide();
					$('#azcode01').show();
				 
					$('#awsForm').hide();
					$('#costForm').hide();
					$('#filecostForm').hide();
					$('#buttonForm').hide();
				 
				 
					$("#azgrid1").hide();
					$('#azForm').show();
					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
				 
					document.getElementById("region01").value = "none";
					document.getElementById("region02").value = "none";
					document.getElementById("region03").value = "none";
					document.getElementById("region04").value = "none";
					document.getElementById("azregion01").value = "none";
					document.getElementById("azregion02").value = "none";
					document.getElementById("azregion03").value = "none";
					document.getElementById("azregion04").value = "none";
					document.getElementById("code").value = "none";
					document.getElementById("azcode").value = "none";
					document.getElementById("wrap").style.backgroundColor = "#008AD7"; // #00a2ed #00A4EF #007FFF
					document.getElementById("wrap").style.opacity = "0.8";
					document.getElementById("wrap").style.color = "black";
					 
					break;			
			}
		});
		$("#platform").trigger("change");
		$("#code").trigger("change");
		$("#azcode").trigger("change");
		

		
$("#code").change(function() {
			switch ($(this).val()){
				case "none":
					$('#costForm').hide();
					$('#filecostForm').hide();
					$('#buttonForm').hide();
					$('#code02').hide();
					$('#code03').hide();
					$('#code04').hide();
					$('#code05').hide();
					$('#code06').hide();
					$('#code01').hide();
					$("#result").hide(); 
					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
					break;
				case "0001":
					 
					$('#code02').hide();
					$('#code03').hide();
					$('#code04').hide();
					$('#code05').hide();
					$('#code06').hide();
					$('#code01').show();
					$('#costForm').show();
					$('#buttonForm').show();
					$("#result").hide(); 
					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
					
					break;

				case "0002":
				 
					$('#code01').hide();
					$('#code03').hide();
					$('#code04').hide();
					$('#code05').hide();
					$('#code06').hide();
					$('#code02').show();
					$('#costForm').hide();
					$('#buttonForm').show();
					$("#result").hide(); 
					$('#filecostForm').show();
					$('#input').show();
					document.getElementById("cost").value = "none";
					break;

				case "0003":
				 
					$('#code01').hide();
					$('#code02').hide();
					$('#code04').hide();
					$('#code05').hide();
					$('#code06').hide();
					$('#code03').show();
					$('#costForm').show();
					$('#buttonForm').show();
					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
					break;
					 
					
				case "0004":
				 
					$('#code01').hide();
					$('#code02').hide();
					$('#code03').hide();
					$('#code05').hide();
					$('#code06').hide();
					$('#code04').show();
					$('#costForm').show();
					$('#buttonForm').show();
					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
					break;
				 
					 
				
					
			}
			
		});
		$("#code").trigger("change");
		 


		$("#azcode").change(function() {
			switch ($(this).val()){
				case "none":
					$('#costForm').hide();
					$('#filecostForm').hide();
					$('#buttonForm').hide();
					$('#azcode02').hide();
					$('#azcode03').hide();
					$('#azcode04').hide();
					$('#azcode05').hide();
					$('#azcode06').hide();
					$('#azcode01').hide();
					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
					break;
				case "0001":
					 
					$('#azcode02').hide();
					$('#azcode03').hide();
					$('#azcode04').hide();
					$('#azcode05').hide();
					$('#azcode06').hide();
					$('#azcode01').show();
					$('#costForm').show();
					$('#buttonForm').show();
					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
					break;

				case "0002":
				 
					$('#azcode01').hide();
					$('#azcode03').hide();
					$('#azcode04').hide();
					$('#azcode05').hide();
					$('#azcode06').hide();
					$('#azcode02').show();
					$('#costForm').hide();
					$('#buttonForm').show();
					$('#filecostForm').show();
					$('#input').show();
					document.getElementById("cost").value = "none";
					break;

				case "0003":
				 
					$('#azcode01').hide();
					$('#azcode02').hide();
					$('#azcode04').hide();
					$('#azcode05').hide();
					$('#azcode06').hide();
					$('#azcode03').show();
					$('#costForm').show();
					$('#buttonForm').show();
					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
					break;
					 
					
				case "0004":
				 
					$('#azcode01').hide();
					$('#azcode02').hide();
					$('#azcode03').hide();
					$('#azcode05').hide();
					$('#azcode06').hide();
					$('#azcode04').show();
					$('#costForm').show();
					$('#buttonForm').show();
					$('#filecostForm').hide();
					$('#input').hide();
					document.getElementById("cost").value = "none";
					break;
				case "0005":
				 
						$('#azcode01').hide();
						$('#azcode02').hide();
						$('#azcode03').hide();
						$('#azcode04').hide();
						$('#azcode06').hide();
						$('#azcode05').show();
						$('#costForm').show();
						$('#buttonForm').show();
						$('#filecostForm').hide();
						$('#input').hide();
						document.getElementById("cost").value = "none";
					break;
				case "0006":
				 
						$('#azcode01').hide();
						$('#azcode02').hide();
						$('#azcode03').hide();
						$('#azcode05').hide();
						$('#azcode05').hide();
						$('#azcode06').show();
						$('#costForm').show();
						$('#buttonForm').show();
						$('#filecostForm').hide();
						$('#input').hide();
						document.getElementById("cost").value = "none";
						break;
					 
				
					
			}
			
		});
		$("#azcode").trigger("change");

		$("#cost").change(function() {
			switch ($(this).val()){

				case "No":
					$('#filecostForm').hide();
					$('#input').hide();
					break;

				case "Yes":
					$('#filecostForm').show();
					$('#input').show();
					break;

			}
			
		});
		$("#cost").trigger("change");
		 

		 







		  function myFunction01() {
			 
			on();
			 
			var Platform = document.getElementById("platform").value;
			var RequestCode = document.getElementById("code").value;
			var RegionId = document.getElementById("region01").value;
			var RG = document.getElementById("RG01").value;
		 
		
				$.ajax({
					method: 'POST',
					url: 'https://uvia6atgl7.execute-api.us-east-1.amazonaws.com/dev/request',
					
					data: JSON.stringify({
						"Platform": Platform,
						  "RequestCode": RequestCode,
						  "RequestName": "Create Resource Group",
						  "RegionId": RegionId, 
						   
						 
						  "StackName": "RG-stack"
					 
					}),
					contentType: 'application/json'
					 
					 
				});
		   
		  }

		  function myFunction02() {
		
			on();
			var Platform = document.getElementById("platform").value;
			var RequestCode = document.getElementById("code").value;
			 
			var RegionId = document.getElementById("region02").value;
			var RGName = document.getElementById("RG02").value;
			var vmName = document.getElementById("VM02").value;
		
				$.ajax({
					method: 'POST',
					url: 'https://uvia6atgl7.execute-api.us-east-1.amazonaws.com/dev/request',
					
					data: JSON.stringify({
						"Platform": Platform,
						  "RequestCode": RequestCode,
						  "RequestName": "Create VM",
						  "RegionId": RegionId, 
						  "RGName": RGName,
						  "vmName": vmName,
						  "StackName": "VM-stack"
					 
					}),
					contentType: 'application/json' 
				});
		   
		  }

		 


		  function myFunction03() {
		
			on();
			var Platform = document.getElementById("platform").value;
			
			var RequestCode = document.getElementById("code").value;
			 
			var RegionId = document.getElementById("region03").value;
			var RGName = document.getElementById("RG03").value;
			var  VPCBlock= document.getElementById("VPC03").value;
			var CidrBlock= document.getElementById("Cidr03").value;
		
				$.ajax({
					method: 'POST',
					url: 'https://uvia6atgl7.execute-api.us-east-1.amazonaws.com/dev/request',
					
					data: JSON.stringify({
						"Platform": Platform,
						
						  "RequestCode": RequestCode,
						  "RequestName": "Create VNet",
						  "RegionId": RegionId, 
						  "RGName": RGName,
						  "VPCBlock": VPCBlock,
						  "CidrBlock": CidrBlock,
						  "StackName": "VPC-stack"
					 
					}),
					contentType: 'application/json' 
					 
				});
		   
		  }


		  function myFunction04() {
		
			on();
			var Platform = document.getElementById("platform").value;
			var RequestCode = document.getElementById("code").value;
			 
			var RegionId = document.getElementById("region04").value;
			var RGName = document.getElementById("RG04").value;
			var BucketName = document.getElementById("Bucket04").value;
		
				$.ajax({
					method: 'POST',
					url: 'https://uvia6atgl7.execute-api.us-east-1.amazonaws.com/dev/request',
					
					data: JSON.stringify({
						"Platform": Platform,
						  "RequestCode": RequestCode,
						  "RequestName": "Create Storage",
						  "RegionId": RegionId, 
						  "RGName": RGName,
						  "BucketName": BucketName,
						  "StackName": "Bucket-stack"
					 
					}),
					contentType: 'application/json' 
				});
		   
		  }







		  function azmyFunction01() {
			 
			on();
			 
			var Platform = document.getElementById("platform").value;
			var RequestCode = document.getElementById("azcode").value;
			var RegionId = document.getElementById("azregion01").value;
			var RG = document.getElementById("azRG01").value;
		 
		
				$.ajax({
					method: 'POST',
					url: 'https://uvia6atgl7.execute-api.us-east-1.amazonaws.com/dev/request',
					
					data: JSON.stringify({
						"Platform": Platform,
						  "RequestCode": RequestCode,
						  "RequestName": "Create Resource Group",
						  "RegionId": RegionId, 
						   
						 
						  "StackName": "RG-stack"
					 
					}),
					contentType: 'application/json' 
					 
				});
		   
		  }

		  function azmyFunction02() {
		
			on();
			var Platform = document.getElementById("platform").value;
			var RequestCode = document.getElementById("azcode").value;
			 
			var RegionId = document.getElementById("azregion02").value;
			var RGName = document.getElementById("azRG02").value;
			var vmName = document.getElementById("azVM02").value;
		      
				$.ajax({
					method: 'POST',
					url: 'https://uvia6atgl7.execute-api.us-east-1.amazonaws.com/dev/request',
					
					data: JSON.stringify({
						"Platform": "Azure",
						  "RequestCode": RequestCode,
						  "RequestName": "create VM",
						  "RegionId": "North Europe", 
						  "RGName": RGName,
						  "vmName": vmName,
						  "StackName": "VM-stack",
						  "ECPSFee": ecps_fee,
						  "MonthlyTotal": m_total ,
						  "AnnualTotal": a_total ,

					 
					}),
					contentType: 'application/json' 
				});
		   
		  }

		 


		  function azmyFunction03() {
		
			on();
			var Platform = document.getElementById("platform").value;
			var RequestCode = document.getElementById("azcode").value;
			 
			var RegionId = document.getElementById("azregion03").value;
			var RGName = document.getElementById("azRG03").value;
			var  VPCBlock= document.getElementById("azVPC03").value;
			var CidrBlock= document.getElementById("azCidr03").value;
		
				$.ajax({
					method: 'POST',
					url: 'https://uvia6atgl7.execute-api.us-east-1.amazonaws.com/dev/request',
					
					data: JSON.stringify({
						  "Platform": Platform,
						  "RequestCode": RequestCode,
						  "RequestName": "Create VNet",
						  "RegionId": RegionId, 
						  "RGName": RGName,
						  "VPCBlock": VPCBlock,
						  "CidrBlock": CidrBlock,
						  "StackName": "VPC-stack"
					 
					}),
					contentType: 'application/json' 
				});
		   
		  }


		  function azmyFunction04() {
		
			on();
			var Platform = document.getElementById("platform").value;
			var RequestCode = document.getElementById("azcode").value;
			 
			var RegionId = document.getElementById("azregion04").value;
			var RGName = document.getElementById("azRG04").value;
			var BucketName = document.getElementById("azbucket04").value;
		
				$.ajax({
					method: 'POST',
					url: 'https://uvia6atgl7.execute-api.us-east-1.amazonaws.com/dev/request',
					
					data: JSON.stringify({
						"Platform": Platform,
						  "RequestCode": RequestCode,
						  "RequestName": "Create Storage",
						  "RegionId": RegionId, 
						  "RGName": RGName,
						  "VMName": BucketName,
						  "StackName": "Bucket-stack"
					 
					}),
					contentType: 'application/json' 
				});
		   
		  }






		  function azmyFunction06() {
		
			on();
			var Platform = document.getElementById("platform").value;
			var RequestCode = document.getElementById("azcode").value;
			 
			var RegionId = document.getElementById("azregion04").value;
			var RGName = document.getElementById("azRG04").value;
			var ADGroup = document.getElementById("azADgroup06").value;
		
				$.ajax({
					method: 'POST',
					url: 'https://uvia6atgl7.execute-api.us-east-1.amazonaws.com/dev/request',
					
					data: JSON.stringify({
						"Platform": Platform,
						  "RequestCode": RequestCode,
						  "RequestName": "Grant Access",
						  "RegionId": RegionId, 
						  "RGName": RGName,
						  "ADGroup": ADGroup
						  
					 
					}),
					contentType: 'application/json' 
				});
		   
		  }

		  var myVar;

		  function myFunction22() {
			myVar = setTimeout(showPage, 9000);
			
		  }
		  
		  function showPage() {
			  
			document.getElementById("loader").style.display = "none";
			document.getElementById("myDiv").style.display = "block";
			myVar2 = setTimeout(off, 9000);
		  }
	
		  function on() {
			document.getElementById("myDiv").style.display = "none";
			
			document.getElementById("overlay").style.display = "block";
			document.getElementById("loader").style.display = "block";
			myFunction22() ;
		  }
		  
		  function off() {
		
			document.getElementById("overlay").style.display = "none";
			
		
			clearPage();
		  }

		  function clearPage() {
			document.getElementById("platform").value = "none";
			            $('#RequestHere').show();
						$('#azcode02').hide();
						$('#azcode03').hide();
						$('#azcode04').hide();
						$('#azcode05').hide();
						$('#azcode01').hide();
						$('#code02').hide();
						$('#code03').hide();
						$('#code04').hide();
						$('#code05').hide();
						$('#code01').hide();
						$('#awsForm').hide();
						$('#costForm').hide();
						$('#filecostForm').hide();
						$('#buttonForm').hide();
						$('#azForm').hide();
						$("#grid1").hide();
						$("#azgrid1").hide();
						 
						document.getElementById("wrap").style.backgroundColor = "white";
						document.getElementById("wrap").style.opacity = "0.7";
		  }





 


  

  function submitClick() {

	var Platform = document.getElementById("platform").value;
	var awsCode = document.getElementById("code").value;
	var azCode = document.getElementById("azcode").value;
     
		switch (Platform){
				case "none":
					
					
	
				break; 
				case "aws":
				    
                        switch (awsCode){
                            case "none":
                               
                                break;
                            case "0001":
                                myFunction01() ; 
         
                                break;
            
                            case "0002":
                                myFunction02();
                               
                                break;
            
                            case "0003":
                                myFunction03();
                               
                                break;
                                 
                                
                            case "0004":
                                myFunction04();
                               
                                break;
							case "0005":
								myFunction05();
								   
								break;
							case "0006":
								myFunction06();
									   
								break;
							}
				break;  

			  	case "azure":
				   
                        switch (azCode){
                            case "none":
                               
                                break;
                            case "0001":
                                azmyFunction01();
                               
                                break;
            
                            case "0002":
                             
                                azmyFunction02();
                                break;
            
                            case "0003":
                             
                                azmyFunction03();
                                break;
                                 
                                
                            case "0004":
                                azmyFunction04();
                               
                                break;

							case "0005":
								azmyFunction05();
								   
								break;
							case "0006":
								azmyFunction06();
									   
								break;
                                   
                        }
				break;			
			}
         
    
    

  }
  
function redirectFunction() {
  location.replace("https://www.w3schools.com")
}
 

















$(function () {
   
      
    $("#input").on("change", function () {
        
        var excelFile,

        fileReader = new FileReader();

       
        fileReader.onload = function (e) {
            var buffer = new Uint8Array(fileReader.result);

            $.ig.excel.Workbook.load(buffer, function (workbook) {
                var column, row, cellValue, columnIndex, i,
                    worksheet = workbook.worksheets(0),
                    columnsNumber = 0,
                    gridColumns = [],
                    gridColumns2 = [],
                    data = [],
                    data2 = [],
                    worksheetRowsCount;
                
                var mTotal=0;
                var aTotal=0;

                 





                gridColumns.push({ headerText: "Service", key: 1 });
                gridColumns.push({ headerText: "Cost", key: 2 });
                
                var x=3 ;

            for (rowIndex = 3; rowIndex < 333; rowIndex++) {
            
                newRow1 = {};
                serviceValue = worksheet.rows(rowIndex).getCellText(0);
                costValue = worksheet.rows(rowIndex).getCellText(4);
                newRow1[gridColumns[0].key] = serviceValue;
                newRow1[gridColumns[1].key] =   costValue ;
                if (costValue.substring(0,1) == "$") {
                costValue_str = costValue.substring(1);
                }
                else {costValue_str = costValue;}
            
            
                mTotal+=   parseFloat(costValue_str.replace(',','')) ;
               
                if (serviceValue === "Support") { break; }
                data.push(newRow1);
            }
                         
                       
 



            

        

            
           
            var cost = parseFloat(mTotal);
            var support_fee = parseFloat((cost / 100) * 20);
            var monthly_total = cost + support_fee;
            var annual_total = (monthly_total * 12);

            var newRow2 = {};    
            //newRow2[gridColumns[0].key] = 'mTotal' ;
            //newRow2[gridColumns[1].key] = mTotal.toFixed(2);  ;
            newRow2[gridColumns[0].key] = '';
            newRow2[gridColumns[1].key] = '';
            data.push(newRow2);  
            newRow2 = {};
			ecps_fee = ' = $'+ support_fee.toFixed(2)  ;
            newRow2[gridColumns[0].key] = 'BAT ECPS Support Fee';
            newRow2[gridColumns[1].key] =  ecps_fee  ;
            data.push(newRow2);
            newRow2 = {}; 
			m_total = ' = $'+  monthly_total.toFixed(2) ;
            newRow2[gridColumns[0].key] = 'Monthly Total';
            newRow2[gridColumns[1].key] =  m_total ;
            data.push(newRow2);
            newRow2 = {}; 
			a_total = ' = $'+  annual_total.toFixed(2);
            newRow2[gridColumns[0].key] = 'Annual Total' ;
            newRow2[gridColumns[1].key] = a_total ;
            data.push(newRow2);
                

                    
             
            
            createGrid(data, gridColumns);




            }, function (error) {
                $("#result").text("The excel file is corrupted.");
                $("#result").show(1000);
            });
        }

        if (this.files.length > 0) {
            excelFile = this.files[0];
            if (excelFile.type === "application/vnd.ms-excel" || excelFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || (excelFile.type === "" && (excelFile.name.endsWith("xls") || excelFile.name.endsWith("xlsx")))) {
                fileReader.readAsArrayBuffer(excelFile);
            } else {
                $("#result").text("The format of the file you have selected is not supported. Please select a valid Excel file ('.xls, *.xlsx').");
                $("#result").show(1000);
                 
            }
        }
        
    });

    $("#input").on("change", function () {
        $("#result").show(); 
        $("#grid1").show(); 
    });
    
});


function createGrid(data, gridColumns) {
    if ($("#grid1").data("igGrid") !== undefined) {
        $("#grid1").igGrid("destroy");
    }
   
    $("#grid1").igGrid({
        columns: gridColumns,
        autoGenerateColumns: true,
        dataSource: data,
        width: "70%",
        hight: "100%",
      
    });
    
    
}
     