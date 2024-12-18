let size = 10;
for(let i=0;i<size;i++){
    let line = " ";
    //add spaces
    for(let j=0;j<=size-i-1;j++){//9//8//7
       line += ' ';
    }

    //add stars
    for(let k=1;k<i*2;k++){
        line += '*';
    }
    console.log(line);
}