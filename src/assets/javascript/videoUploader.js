//! Get Element By ID
const FileInput = document.getElementById("fileuploadinput");
const formError = document.getElementById("formError");
const fileForm = document.getElementById("fileForm");
const formbtn = document.getElementById("formbtn");
const videoTitle = document.getElementById("videoTitle");
const videoDescription = document.getElementById("videoDescription");

//! Form Event Handler
fileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let result = isAllPresent();
  if (!result) {
  } else {
    formbtn.innerText = `Uploading Assignment...`;
    let formData = new FormData();
    let imageFile = FileInput.files[0];

    formData.append("fileuploadinput", imageFile);
    formData.append("videoTitle", videoTitle.value);
    formData.append("videoDescription", videoDescription.value);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    axios
      .post("/upload", formData, {
        header: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        if (result.data.success) {
          emptyValues();
          alertify.success("Successfully uploaded to the server");
        } else {
          emptyValues();
          alertify.error(result.data.error);
          formError.innerText = "Error Occurred";
        }
      })
      .catch((error) => {
        emptyValues();
        alertify.error("internal Goes Wrong");
        formError.innerText = "internal Occurred";
      });
  }
});

function isAllPresent() {
  if (FileInput.files.length == 0) {
    formError.style.display = "block";
    formError.innerText = "Upload your video";
    return false;
  } else if (videoTitle.value == "") {
    formError.style.display = "block";
    formError.innerText = "Fill your video title ";
    return false;
  } else if (videoDescription.value == "") {
    formError.style.display = "block";
    formError.innerText = "Fill your Video Description";
    return false;
  } else {
    return true;
  }
}

function emptyValues() {
  return (
    (videoTitle.value = ""),
    (videoDescription.value = ""),
    (FileInput.value = ""),
    (formbtn.innerText = `Upload Video`)
  );
}
