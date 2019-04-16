document.getElementById("transferStatus").addEventListener("click", function () {
  this.classList.remove("hidden-form-section");
});

document.getElementById("transferGuarantees").addEventListener("click", function () {
  this.classList.remove("hidden-form-section");
});

document.getElementById("policyTransferInput").addEventListener("input", function () {
  document.getElementById("transferStatus").classList.remove("hidden-form-section");
  document.getElementById("successMessageBasics").classList.remove("hide");
  document.getElementById("successMessageBasics").classList.add("message-success");
});

document.getElementById("divorce-no").addEventListener("click", function () {
  document.getElementById("transferGuarantees").classList.remove("hidden-form-section");
  document.getElementById("successMessageGuarantees").classList.remove("hide");
  document.getElementById("help-box").classList.remove("hide");
  document.getElementById("successMessageGuarantees").classList.add("message-success");
});

document.getElementById("guarantees-4").addEventListener("click", function () {
    document.getElementById("guarantees-1").classList.toggle("hide");
    document.getElementById("guarantees-2").classList.toggle("hide");
    document.getElementById("guarantees-3").classList.toggle("hide");
});

document.getElementById("benefits-5").addEventListener("click", function () {
    document.getElementById("benefits-1").classList.toggle("hide");
    document.getElementById("benefits-2").classList.toggle("hide");
    document.getElementById("benefits-3").classList.toggle("hide");
    document.getElementById("benefits-4").classList.toggle("hide");
});

document.getElementById("benefits-5").addEventListener("click", function () {
  document.getElementById("review-link").classList.toggle("hidden-form-section");
});


function addValues() {
    var valueCurrent = parseInt(document.getElementById("valueCurrent").innerHTML, 10);
    var valueTransferInput = parseInt(document.getElementById("valueTransferInput").value, 10);
    var sum = (valueCurrent + valueTransferInput).toLocaleString();
    document.getElementById("toValueTransfer").classList.remove("hide");
    document.getElementById("toValueTotal").classList.remove("hide");
    document.getElementById("valueTransfer").innerHTML = (valueTransferInput).toLocaleString();
    document.getElementById("valueNew").innerHTML = sum;
};