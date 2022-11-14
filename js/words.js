function countOccurrences(str,word)
    {
        // split the string by spaces in a
    let a = str.split(" ");
  
    // search for pattern in a
    let count = 0;
    for (let i = 0; i < a.length; i++)
    {
    // if match found increase count
    if (word==(a[i]))
        count++;
    }
  
    return count;
    }
    // Driver code
    let str = "GeeksforGeeks A computer science portal for geeks ";
    let word = "ee";
    console.log(countOccurrences(str, word));