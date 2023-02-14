function odd_even(x){
    let n=0;
    let temp=0;
    while(x>0){
         temp=x%10;
        n+=temp;
        x=Math.floor(x/10);

    }
    if(n%2==0){
        console.log( "evenish");
    }
    else{
        console.log( "oddish");
    }
}

odd_even(57);