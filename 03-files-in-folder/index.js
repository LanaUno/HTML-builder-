const fs = require('fs');
const path = require('path');
const filesArr = [];


fs.readdir('./03-files-in-folder/secret-folder', {withFileTypes: true}, (err, dirEntryList) => {
    if (!err) {
        dirEntryList.forEach((dirEntry) => {
            if(dirEntry.isFile()){
                // console.log(dirEntry.name); 
                filesArr.push(dirEntry.name);
                // console.log(filesArr);
                for (let i = 0; i <= filesArr.length-1; i++){
                    // console.log(path.join('./03-files-in-folder/secret-folder',filesArr[i]));
                    const pathArr = [];
                    pathArr.push(path.join('./03-files-in-folder/secret-folder',filesArr[i]));
                    // console.log(pathArr);
                for (let i = 0; i <= pathArr.length-1; i++) {
                    const sizeArr = [];
                    fs.stat(pathArr[i], (err, stats) => {
                        if (err) {
                          console.error(err)
                        } else {
                        // console.log(stats.size);
                            sizeArr.push(stats.size);
                            // console.log(sizeArr);
                        }
                        for (let i = 0; i <= sizeArr.length-1; i++){
                            console.log(`${path.basename(pathArr[pathArr.length-1], path.extname(pathArr[pathArr.length-1]))}${' - '}${path.extname(pathArr[pathArr.length-1])}${' - '}${sizeArr[i]}${'b'}`)
                              } 
                      })
                      
                }


                }
            }   
        }) 
     } else {
        console.log(err);
    }
})



