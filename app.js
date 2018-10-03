window.onload = function() {
    main();
    function main(){
        var error_massage = document.getElementById('arr');
        var suminfo = document.getElementById('sumdata');
        var binaryinfo = document.getElementById('binarydata');
        var start = prompt("Enter where you want to start:", " ");
        start = parseInt(start,10);
        var end = prompt("Enter where you want to end:", " ");
        end = parseInt(end,10);
        var step = prompt("Enter the increments:", " ");
        step= parseInt(step,10);
        try {
            if(isNaN(start)) throw "error";
            if(isNaN(end)) throw "error";
            if(isNaN(step)) throw "error";
            else {
                var arr = myFunction(start,end,step);
                var total = sum(arr);
                var p = binarycover(arr);
                console.log("sum function",total);
                console.log("arr function",arr);
                console.log("convert function",p);
                error_massage.innerHTML = 'The generated array is : ' + arr +', ';
                suminfo.innerHTML = 'The sum is : '+ total;
                binaryinfo.innerHTML = 'The binary of absolute element values are : ' + p + ', ' ;
            }
        }
        catch(err) {
            error_massage.innerHTML = 'Invalid integer input, Please reload and try again' ;
        }
     };
     }
     function myFunction(start,end,step)
     {
        var myarr =[];
        myarr[0]= start;
        console.log(start,end,step);
        var i=-1;
        var temp= start;
        if(step>0){
        while(temp<=end){
            myarr[++i]=temp;
            temp= myarr[i]+ step;
     }
    }
    else{
        while(temp>=end) 
        {
            myarr[++i]=temp;
            temp = myarr[i]+ step;
        }
    }
    return myarr;
}
function sum(myarr){
    var total =0;
    for(i=0 ; i<myarr.length ;i++)
    {
        total = total + myarr[i];
    }
    return total;
}
function binarycover(myarr)
{
    var bin= [];
    for(i=0 ; i<myarr.length ; i++){
        bin[i]=(myarr[i] >>> 0).toString(2);
}
return bin;
}