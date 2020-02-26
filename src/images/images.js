const host = "https://tom.imgix.net/artsy/";
const imageArray = [];
let imgixAPI = "w=600&h=600&auto=format,compress&cs=tinysrgb&fit=crop&crop=faces,entropy&ar=1:1";
let images = new Array(25);
for (let i = 0; i < images.length; i++) {
  imageArray.push(host + (i+1) + ".jpg?" + imgixAPI);
};

export default imageArray;
