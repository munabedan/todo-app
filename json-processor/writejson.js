const fs=require('fs');


    function writejson(structure,filename)  
    {  
 
 
    let data = JSON.stringify(structure,null,2);
    fs.writeFileSync(filename, data);
    }

 
    


module.exports={writejson}
