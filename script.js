const AddButton = document.getElementById('addButton');
const RemoveButton = document.getElementById('removeButton');

const formButton = document.getElementById('add');
const formremoveButton = document.getElementById('remove');

var cityName = document.getElementById('CityName');
var cityNameDelete = document.getElementById('CityNameD');

var cityDescription = document.getElementById('Description');

const image_input = document.getElementById("Image");

var uploaded_image = "";


formButton.addEventListener('click',cityAdd);

formremoveButton.addEventListener('click',cityRemove);



cityName.addEventListener('input',event => {

    

    cityName.textContent = event.data;
    

})


cityDescription.addEventListener('input',event =>{

    cityDescription.textContent = event.data;
})

cityNameDelete.addEventListener('input',event => {

    cityNameDelete.textContent = event.data;

})

AddButton.addEventListener('click', () => {

  const form = document.getElementById('form-add');

  if (form.style.display === 'none') {

    form.style.display = 'block';

    AddButton.textContent = 'Close';

  } else {

    form.style.display = 'none';

    AddButton.textContent = 'Add a city';
  }
});


RemoveButton.addEventListener('click', () => {

    const form = document.getElementById('form-remove');
  
    if (form.style.display === 'none') {
      form.style.display = 'block';

      RemoveButton.textContent = 'Close';

    } else {

      form.style.display = 'none';

      RemoveButton.textContent = 'Remove a city';
    }
  });

const AddCreate = document.getElementById('add');

function cityAdd(){

  if(document.getElementById(cityName.value)){

    alert("This city already exist , try another one.");
  }

  else{

    const reader = new FileReader();

    var cityImage = document.getElementById("Image").files[0];

    var gridDiv = document.getElementById('gridcontainer');

    var newElement = document.createElement("article");
    newElement.className += "capitals-list";
    
    newElement.id += cityName.value;

    gridDiv.appendChild(newElement);
    gridDiv = document.getElementById(cityName.value);

    var pictureTitle = document.createElement("a");
    pictureTitle.className += "capital-title";
    pictureTitle.href = "#";
    pictureTitle.textContent = cityName.value;
    

    var cityTitle = document.createElement("h4");
    cityTitle.contentEditable = "true";
    cityTitle.textContent = cityName.value;
    cityTitle.className += "glow";

    var newDiv = document.createElement("div");
    newDiv.className += "capital-image";

    var newImage = document.createElement("img");

    reader.addEventListener("load",function(){
      
      newImage.src = reader.result;
    },false);

    
    newImage.src = reader.readAsDataURL(cityImage);

    newImage.width = "300";
    newImage.height = "150";


    newDiv.appendChild(newImage);
    gridDiv.appendChild(cityTitle);
    gridDiv.appendChild(newDiv);
    gridDiv.appendChild(pictureTitle);

    var cityInfo = document.createElement("h4");
    cityInfo.contentEditable = "true";
    cityInfo.textContent = cityDescription.value;
    cityInfo.className += "glow";

    gridDiv.appendChild(cityInfo);

    document.getElementById("Image").value = "";


  }

}

    

function cityRemove(){
  if(document.getElementById(cityNameDelete.value)){

    var divRemove = document.getElementById(cityNameDelete.value);
    divRemove.remove();
    
  }
  else{

    alert("This city doesn't exist.");
    
  }
}

