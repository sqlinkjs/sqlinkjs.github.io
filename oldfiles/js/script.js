const inputElement = document.getElementById('npm-install-copy-text');
inputElement.value = navigator.platform.toLowerCase().startsWith("win") ? "$ npm install -g sqlink" : "$ sudo npm install -g sqlink"

document.getElementById("default-message").style.display = "";
document.getElementById("success-message").style.display = "none";


function onCopyClick() {
    let cp_text = navigator.platform.toLowerCase().startsWith("win") ? "npm install -g sqlink" : "sudo npm install -g sqlink"
    navigator.clipboard.writeText(cp_text)
    document.getElementById("default-message").style.display = "none";
    document.getElementById("success-message").style.display = "";
    setTimeout(() => {
        document.getElementById("default-message").style.display = "";
        document.getElementById("success-message").style.display = "none";
    }, 1500);
}
