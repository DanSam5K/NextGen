function fiveLine(s){
    //code here
    s = s.trim();
    var tmp = s;
    var res = [s];
    
    for (var i = 1; i < 5; i++) {
      res.push(s += tmp);
    } 
    return res.join("\n");
  }