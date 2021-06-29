//? selecting all required elements
const dropArea = document.querySelector('.drag-area');
const dragText = document.querySelector('header');
const button = document.querySelector('button');
const input = document.querySelector('input');

//? this is a global variable and we'll use it inside multiple functions
let file; 

button.addEventListener('click', () => {
  //? if user click on the button then the input also clicked
  input.click();
})

input.addEventListener('change', () => {
  file = input.files[0];
  
  showFile(file);
})

//? If user Drag File Over DragArea
dropArea.addEventListener('dragover', (event) => {
  //? preventing from default behaviour
  event.preventDefault();
  dropArea.classList.add('active');
  dragText.textContent = "Release to Upload File"
})

//? If user leave dragged File from DragArea
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('active');
  dragText.textContent = "Drag & Drop to Upload File"
})

//? If user drop File on DropArea
dropArea.addEventListener('drop', (event) => {
  //? preventing from default behaviour
  event.preventDefault(); 
  
  //? getting user select file and [0] this means if user select multiple files than we'll select only the first one
  file = event.dataTransfer.files[0];

  showFile(file);
})

//! function : showing Img File in div-box
function showFile(file){
  let fileType = file.type;
  
  //? adding some valid image extensions in array
  let validExtensions = ["image/jpeg", "imgae/jpg", "image/png"]; 

  if(validExtensions.includes(fileType)){
    //? if user selected file is an image file

    //? creating new FileReader object
    let fileReader = new FileReader(); 

    fileReader.onload = () => {
      //? passing user file source is fileURL variable
      // console.log(fileReader)
      let fileURL = fileReader.result;
      // console.log(fileURL);

      //? creating an img tag and padding user selected file source inside src attribute
      let imgTag = `<img src="${fileURL}" alt="">`;
      dropArea.innerHTML = imgTag; 
    }
    fileReader.readAsDataURL(file);
    dropArea.classList.add('active');
  }else{
    alert("This is an not Image File")
    dropArea.classList.remove('active');
  }
}