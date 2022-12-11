const random = () => {
  return (Math.floor(Math.random() * 2 + 1) + Math.random()) * 1000;
};

const wait = (msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(msg != 2) {
            reject("error")
        }
      resolve(msg);
    }, random());
  });
};

wait("1").then(response => console.log(response)).catch(e => console.log(e))
