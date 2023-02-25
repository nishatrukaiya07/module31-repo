const friends =['joy', 'joya', 'jui', 'jahan', 'mona'];
const oddLength = (friend)=>{
    let newArr =[];
    for(i=0; i<friends.length; i++){
        if(friends[i].length%2!=0)
        newArr.push(friends[i]);
    }
    return newArr;
}
const result =oddLength(friends);
console.log(result);