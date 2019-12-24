const fs=require('fs');


    function rawdata(filename)  
    {  
    data=fs.readFileSync(filename);
    console.log(data);
    }

    function jsondata(filename)
    {
    data=fs.readFileSync(filename);
    data=JSON.parse(data);
    console.log(data);
    }
    


module.exports={rawdata,jsondata}
