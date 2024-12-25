let size =10;
for(let i=0;i<size;i++){
    let star = "*";
    for(let j=0;j<i;j++){
        star += "#";
    }
    for(let k=(size-i)*2;k>=1;k--){
        star += " ";
    }
    for(z=1;z<=i;z++){
        star += "#";
    }
    star += "*";
    console.log(star);
}