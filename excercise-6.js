function meleeRangedGrouping (str) {
 
  var groups = [];
//   var indeks = 0;
  var temp = '';

  for (var i = 0; i < str.length; i++) {
      if(str[i] === ',') {
        groups.push(temp);
        // groups.push([]);
        // indeks++;
        temp = '';
      } 
     else if (i === str.length-1) {
         temp += str[i];
        groups.push(temp);
    }
      else {
          temp += str[i];       
      }
      
  }
  console.log(groups);
  var groupSplit = [[]];
//   var indeks = 0;
  var temp2 = '';
  for (var i = 0; i < temp.length; i++) {
      for (var j = 0; j < temp[i].length; j++) {
          if (temp[i][j] === '-') {
            groupSplit[i].push(temp2);
            // groupSplit.push([]);
            // indeks++;
            temp2 = '';
          } else if (j === temp[i].length-1){
              temp2 += temp[i][j];
              groupSplit[i].push(temp2);
              temp2 = '';
          }
          else {
              temp2 += temp[i][j];
          }
      }
      if (i === temp.length-1) {
        break;
      }
      groupSplit.push([]);
  }
  console.log(groupSplit);
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []