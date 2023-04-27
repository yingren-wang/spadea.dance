const gallery = document.querySelector(".gallery");

const picture_directory = "../spadea.dance.github.io/assets/images/sp23_member/";

// TODO: automate adding pictures:

const pictures = [
  { 
    title: "Yingren", 
    src: "../spadea.dance.github.io/assets/images/sp23_member/yingren/yingren_cover.jpg",
    description: "A beautiful view of Nancy" 
  },
  { 
    title: "Nanxi", 
    src: "../spadea.dance.github.io/assets/images/sp23_member/nanxi/nanxi_cover.JPG",
    description: "A stunning view of Paris" 
  }
  // add more picture data here
];

// loop through the pictures array and create a div element for each picture
pictures.forEach(picture => {
  const memberDiv = document.createElement("div");
  memberDiv.className = "member";
  
  const image = document.createElement("img");
  image.src = picture.src;
  image.alt = picture.title;
  memberDiv.appendChild(image);
  
  const title = document.createElement("div");
  title.className = "title";
  title.textContent = picture.title;
  memberDiv.appendChild(title);
  
  // add a click event listener to the pictureDiv to show the pop-up element
  memberDiv.addEventListener("click", () => {
    const popup = document.querySelector(".popup");
    popup.classList.remove("hidden");
    const closeButton = document.querySelector(".popup-close");

    // add an event listener to the close button to hide the popup
    closeButton.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
  });
  
  gallery.appendChild(memberDiv);
});

// get the close button element


