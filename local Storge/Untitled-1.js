function saveUsername(username){
    localStorage.setItem("username",username);
    updateUsernameDisplay();

}
function updateUsernameDisplay(){
    const username=localStorage.getItem("username");
    document.getElementById("usernameDisplay");
    updateUsernameDisplay.textContent=username ? username : "ضيف";

}
document.getElementById("creatAccount-Btn").addEventListener("click", ()=>{ const newUser=prompt("ادخل اسم المستخدم لانشاء حساب:");
    if(newUsername){
        saveUsername(newUsername);
        alert("تم انشاء الحساب بنجاح");
    }
});
document.getElementById("loginBtn").add-EventListener("click",()=>{ const existingUsername=prompt("ادخل اسم المستخدم لتسجيل الدخول");
    if(existingUsername){
        saveUsername(existingUsername);
        alert("تم تسجيل الدخول بنجاح");   
    }
});
window.onload=updateUsernameDisplay;