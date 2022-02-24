const btnOpen = document.querySelector(`#button`);
btnOpen.addEventListener("click", function(){
    let email,passwor;
    email = document.getElementById(`userEmail`).value;
    passwor = document.getElementById(`userPassword`).value;
    document.getElementById(`icon`).classList.remove(`basarili`,`basarisiz`,`fa-circle-xmark`,`fa-circle-check`)
    let alertContent = document.getElementById(`alertText`).innerHTML = ``
    document.getElementById("alert").style.display = "flex";;
    document.getElementById("container").style.opacity = "0.1";;
    if(email == "muhammed@gmail.com" && passwor == "123"){
        document.getElementById(`icon`).classList.add(`basarili`,`fa-circle-check`)
        let alertContent = document.getElementById(`alertText`).innerHTML = `GIRIS BASARILI`
    }
    else{
        document.getElementById(`icon`).classList.add(`basarisiz`,`fa-circle-xmark`)
        let alertContent = document.getElementById(`alertText`).innerHTML = `GIRIS BASARISIZ`
    }
  });
  function closeAlert(){
    document.getElementById("container").style.opacity = "1";;
    document.getElementById("alert").style.display = "none";;
  }
