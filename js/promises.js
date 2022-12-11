const random = () => {
  return (Math.floor(Math.random() * 2 + 1) + Math.random()) * 1000;
};

const wait = (msg) => {
  setTimeout(() => {
    console.log({ msg });
  }, random());
};


wait(1);
wait(2);
wait(3);
wait(4);