let search = 
["риба",
"людина",
"яблуко",
"дерево",
"земля",
"диван"];
let searchImages = 
["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Rhodeus_amarus_2008_G1.jpg/800px-Rhodeus_amarus_2008_G1.jpg",
"https://cdn.britannica.com/07/192107-050-CE043374/anatomy-charts-human-body-muscle-systems-skeletal.jpg?w=400&h=300&c=crop",
"https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg",
"https://upload.wikimedia.org/wikipedia/commons/5/56/Sequoiadendron_giganteum_at_Kenilworth_Castle.jpg",
"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2022/04/earth/24035530-2-eng-GB/Earth_pillars.jpg",
"https://pufetto.s3.amazonaws.com/newitems/matteo/c/1/reticolo-20.jpg"];

function searching(){
  console.log("Function work");
  let input = document.getElementById("input");
  console.log("Input = "+String(input.value));
  if(search.includes(String(input.value).toLowerCase())){
    let link = searchImages[search.indexOf(input.value.toLowerCase())];
    document.getElementById("sectionForImage").innerHTML = "<img src='"+link+"'>"; 
  }
}