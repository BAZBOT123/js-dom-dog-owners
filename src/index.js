function createDogListItem(dog) {
  const li = document.createElement("li");
  const dogContainer = document.querySelector(".main");

  li.className = "dogs-list__button";
  li.innerText = dog.name;

  // (1)

  li.addEventListener("click", function () {
    const container = createDogCard(dog)
    const section = document.querySelector("section")
    if (section != null)
      section.remove()
    dogContainer.append(container)
  })

  //TODO: Here, add a click event listener
  //on to the li element. Inside that listener,o
  //call the createDogCard method and pass
  //the dog variable as a parameter. You will
  //also need to remove any existing dog card
  //from the dogContainer

  return li;
};

function createSection() {
  const section = document.createElement("section");
  section.className = "main__dog-section";
  return section;
};

const createDogCardDesc = (bio) => {
  const div = document.createElement("div");
  div.className = "main__dog-section__desc";

  //(2)
  const header = document.createElement("h3")
  header.innerText = "bio"
  console.log(bio)
  const text = document.createElement("p")
  text.innerText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
  minima voluptates libero cumque rerum consequatur optio aliquid sint
  eum maxime illo laborum omnis quo ab rem cupiditate nulla
  perspiciatis ipsum!`

  //TODO: Update this section to create new elements
  //for the bio header and the bio text. Add those
  //elements to the div.
  div.append(header);
  div.append(text);

  return div;
};


function createDogCardBottomSection(dog) {
  const button = document.createElement("button");
  const text = document.createElement("p");
  const div = document.createElement("div");

  div.className = "main__dog-section__btn";

  // (6)
if (isGoodDog === true) {
  return "Bad Dog"
} else return false}

  //TODO: If the isGoodDog flag is true, set
  //the button text to "Bad Dog". If false,
  //set it to "Good Dog"

  div.append(text, button);
  return div;
};

const createDogCard = (dog) => {
  const section = createSection();
  const header = document.createElement("h2");
  header.innerText = dog.name;

  // (3)
  const picture = document.createElement("img");
  picture.setAttribute("src", dog.image)

  //TODO: Update this section to create a new image
  //element and add it to the dog card. Set the source of 
  //the image to the image path on the dog object

  const desc = createDogCardDesc(dog.bio);
  const bottomSection = createDogCardBottomSection(dog);

  section.append(header, picture, desc, bottomSection);


  return section;
};

function createForm() {
  const form = document.createElement("form");

  const nameInput = createInput("name");
  const imgInput = createInput("image", "url");
  const bioInput = createInput("bio", "textarea");
  const submitInput = createInput("submit", "submit", "Let's add a dog!");

  const nameLabel = createLabel("name", "Dog's name");
  const imgLabel = createLabel("image", "Dog's picture");
  const bioLabel = createLabel("bio", "Dog's bio");

  form.className = "form";
  submitInput.className = "form__button";

  //(5)

  form.addEventListener("submit", function(event) {
    event.preventDefault()
    const newDog = document.querySelector("#name")

    const name = newDog.value
    if(name.length === 0) {
      return
    }

    const dogPicture = document.querySelector('#image') 
    const image = dogPicture.value

    const dogsBio = document.querySelector('#bio') 
    const bio = dogsBio.value

    const newDoggo = {
      formName: name,
      formNicture: image,
      fromBio: bio
  }

    dogPicture.value = ""
    newDog.value = ""
    dogsBio.value = ""
     
    dog.push(newDoggo)

    renderMainForm()
  })

  //TODO: Add an event listener on to the form to capture the
  //submit event. In the submit event, add an item to the
  //list of dogs at the top of the page, and add a new object
  //in to the dogs array with the data captured from the form.

  form.append(
    nameLabel,
    nameInput,
    imgLabel,
    imgInput,
    bioLabel,
    bioInput,
    submitInput
  );
  return form;
};

function createInput(idName, type = "text", value) {
  let input = null;

  if (type === "textarea") {
    input = document.createElement("textarea");
    input.setAttribute("rows", "5");
  } else {
    input = document.createElement("input");
    input.setAttribute("type", type);
  }

  input.setAttribute("id", idName);
  input.setAttribute("name", idName);

  if (value) input.setAttribute("value", value);

  return input;
}

function createLabel(forAttr, text) {
  const label = document.createElement("label");
  label.attributes.for = forAttr;
  label.innerText = text;

  return label;
};

function renderMainForm() {
  const section = createSection();
  const form = createForm();
  const h2 = document.createElement("h2");

  h2.innerText = "Add a new Dog";

  section.append(h2, form);

  return section;
};

function renderDogList(dogsArr) {
  const listContainer = document.querySelector(".dogs-list");
  for (const dog of dogsArr) {
    const item = createDogListItem(dog);
    listContainer.append(item);
  }
};

renderDogList(data);

const formButton = document.querySelector(".dogs-list__button--add");
const dogContainer = document.querySelector(".main");

// (4)
formButton.addEventListener('click', function () {
  const section = document.querySelector('section')
  section.remove()
  const mainForm = renderMainForm()
  dogContainer.append(mainForm)

})
//TODO: Add an event listener on to form button so that
//when the user clicks the button, the form is displayed.
//the renderMainForm method will return an element that
//contains the form, so you only need to add it to the 
//dogContainer and remove any existing children.
