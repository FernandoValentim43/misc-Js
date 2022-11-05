function permutations(str) {
    if (str.length === 1) {
      return str;
    }
    var permut = [];
    for (var i = 0; i < str.length; i++) {
      var s = str[0];
      var _new = permutations(str.slice(1, str.length));
      for (var j = 0; j < _new.length; j++) {
        permut.push(s + _new[j]);
      }
      str = str.substr(1, str.length - 1) + s;
    }
    return permut;
  }
  

  let nome = "abcde"
  if(nome == undefined || nome.length === 2) {
    console.log("sem resposta")
  } else {
    let resposta = permutations("abcde")
    resposta = resposta.sort()
    resposta = resposta[1]
    return resposta
  }
  
  