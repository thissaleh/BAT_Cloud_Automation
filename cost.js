

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
            newRow2[gridColumns[0].key] = 'ECPS Support Fee';
            newRow2[gridColumns[1].key] =  ' = $'+ support_fee.toFixed(2)  ;
            data.push(newRow2);
            newRow2 = {}; 
            newRow2[gridColumns[0].key] = 'Monthly Total';
            newRow2[gridColumns[1].key] =  ' = $'+  monthly_total.toFixed(2) ;
            data.push(newRow2);
            newRow2 = {}; 
            newRow2[gridColumns[0].key] = 'Annual Total' ;
            newRow2[gridColumns[1].key] = ' = $'+  annual_total.toFixed(2);
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
     
