var bookName = document.getElementById("bookmarkName")
var bookUrl = document.getElementById("bookmarkURL")
var btnSubmit = document.getElementById("submitBtn")
var visitBtns ;
var boxModal = document.querySelector(".box-info");
var closeBtn = document.getElementById("closeBtn");
var booKMarks = []
// localStorage
if (localStorage.getItem("list") !=null) {
 booKMarks = JSON.parse(localStorage.getItem("list"));
 showData()

  }


// add

 function addBoook() {

    var book = {
        name : bookName.value,
       url: bookUrl.value
    }
    if (
      bookName.classList.contains("is-valid") &&
      bookUrl.classList.contains("is-valid")
    ) {
    booKMarks.push(book)
    localStorage.setItem("list",JSON.stringify(booKMarks))
    showData()
    clearBtn()
    deleteBook(x)
    } else {
      boxModal.classList.remove("d-none");
    }


 
   
 }
//  show
 function showData() {
  
    var temp = '';
    for (var i = 1; i < booKMarks.length; i++ ){
       
        temp += `   <tr>
        <td>`+ i +`</td>
                <td>${booKMarks[i].name}</td>              
                      
        <td>
        <a  href="${booKMarks[i].url}" target="_blank" class="btn btn-visit" data-index="0">
            <i class="fa-solid fa-eye pe-2" data-index="0"></i>Visit
            </a>
        
        </td>


        <td>
          <button  onclick="deleteBook(`+i+`)"  class="btn btn-delete pe-2" data-index="0">
            <i class="fa-solid fa-trash-can" data-index="0"></i>
            Delete
          </button>
        </td>
    </tr>`
    }
   
    document.getElementById("tableContent").innerHTML=temp
 }

// delete
 function deleteBook(x) {
 booKMarks.splice(x,1)
 showData()
 localStorage.setItem("list",JSON.stringify(booKMarks))
 }

//  clear
 function clearBtn() {
  bookName.value = ""
 bookUrl.value = ""
 }

// Regex
 var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

bookName.addEventListener("input", function () {
  validate(bookName, nameRegex);
});

bookUrl.addEventListener("input", function () {
  validate(bookUrl, urlRegex);
});

function validate(element, regex) {
  var testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}

// close
function closeModal() {
  boxModal.classList.add("d-none");
}
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeModal();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("box-info")) {
    closeModal();
  }
});

// visit
visitBtns = document.querySelectorAll(".btn-visit");
  if (visitBtns) {
    for (var l = 0; l < visitBtns.length; l++) {
      visitBtns[l].addEventListener("click", function (e) {
        visitWebsite(e);
      });
    }
  }

























































 



