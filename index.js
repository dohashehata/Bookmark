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


function closeModal() {
  boxModal.classList.add("d-none");
}
// close
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
// visitBtns = document.querySelectorAll(".btn-visit");
//   if (visitBtns) {
//     for (var l = 0; l < visitBtns.length; l++) {
//       visitBtns[l].addEventListener("click", function (e) {
//         visitWebsite(e);
//       });
//     }
//   }












// all inputs
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
    // to get base url (localhost)
var pathparts = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}
console.log(baseURL);

// to say welcome in home page
var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}

var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}




//for check inputs is empty or not
function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}





// for check email is exist
function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}



function signUp() {
    if (isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    // to store all value as object
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'

    }


}




// ============= for login================
//for check inputs is empty or not
function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}

function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', signUpArray[i].name)
            if (baseURL == '/') {
                location.replace('https://' + location.hostname + '/home.html')

            } else {
                location.replace(baseURL + '/home.html')

            }
        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }

}




// for logout
function logout() {
    localStorage.removeItem('sessionUsername')
}












































 



