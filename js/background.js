const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"]; //폴더 안에 있는 파일과 같은 이름 사용

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img"); //이미지 요소 만들기

// bgImage.src = `img/${chosenImage}`; //<img src="img/0.jpg"/>
// bgImage.classList.add("background");

// document.body.appendChild(bgImage) //body에 html 추가

document.body.background = `img/${chosenImage}`;
document.body.style.backgroundSize = "cover";