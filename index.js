const name = [ 'Lisa', 'Kaitlin', 'Jan' ];

const writeCards = (name) => {
  const thanks = []
  for (let i = 0; i < name.length; i++)
  thanks.push (`Thank you, ${name[i]}, for the wonderful surprise gift!`);
return thanks

 
}
writeCards(name)


const countDown = () =>{
 let countup = 0;
while (countup < 11) {
  console.log(countup++);
}
}