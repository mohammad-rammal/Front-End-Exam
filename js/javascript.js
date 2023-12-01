function addItemToList(input, list, category, alertClass = "") {
    var listItem = document.createElement("div");
    listItem.classList.add("d-flex", "justify-content-center");
    var alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", alertClass);
    var label = document.createElement("label");
    label.classList.add("res");
    label.textContent = category + "! - " + input;
    alertDiv.appendChild(label);
    listItem.appendChild(alertDiv);
    list.appendChild(listItem);

}
function adsToHisKind(input, kind) {
    var list;
    var alertClass;

    if (kind === "Fruits") {
        list = document.querySelector(".list-3");
        alertClass = "alert-primary";
    } else if (kind === "Legumes") {
        list = document.querySelector(".list-1");
        alertClass = "alert-danger";
    }

    addItemToList(input, list, kind, alertClass);
}

function deleteItems() {
    var searchInput = document.getElementById("searchForL").value.toLowerCase();
    var allLists = document.querySelectorAll(".list");

    allLists.forEach(function (list) {
        var alertDivs = list.querySelectorAll(".alert");

        alertDivs.forEach(function (alertDiv) {
            var label = alertDiv.querySelector(".res");
            var itemText = label.textContent.toLowerCase();
            var listItem = alertDiv.closest(".d-flex");

            if (itemText.includes(searchInput)) {
                listItem.remove();
            }
        });
    });
}
document.getElementById("delete").addEventListener("click", deleteItems);

function gnlistClk() {
    var addItemInput = document.getElementById("additem").value;
    var radioFt = document.getElementById("fruits");
    var radioLg = document.getElementById("legamotes");
    var list2 = document.querySelector(".list-2");

    if (radioFt.checked) {
        addItemToList(addItemInput, list2, "Fruits", "alert-success");
    } else if (radioLg.checked) {
        addItemToList(addItemInput, list2, "Legamotes", "alert-success");
    } else {
        alert("Please select Fruits or Legamotes");
    }
}

document.getElementById("gnlist").addEventListener("click", gnlistClk);
function searchBtn() {
    var searchInput = document.getElementById("searchForL").value.toLowerCase();
    var allLists = document.querySelectorAll(".list");

    allLists.forEach(function (list) {
        var alertDivs = list.querySelectorAll(".alert");

        alertDivs.forEach(function (alertDiv) {
            var label = alertDiv.querySelector(".res");
            var itemText = label.textContent.toLowerCase();
            var listItem = alertDiv.closest(".d-flex");

            if (itemText.includes(searchInput)) {
                alertDiv.style.backgroundColor = "red";
            } else {
                alertDiv.style.backgroundColor = "";
            }
        });
    });
}

document.getElementById("search").addEventListener("click", searchBtn);

function splistClk() {
    var addItemInput = document.getElementById("additem").value;
    var radioFt = document.getElementById("fruits");
    var radioLg = document.getElementById("legamotes");

    if (addItemInput != "" || (radioFt.checked && radioLg.checked)) {
        if (radioFt.checked) {
            adsToHisKind(addItemInput, "Fruits");
        } else if (radioLg.checked) {
            adsToHisKind(addItemInput, "Legumes");
        } else {
            alert("Please select Fruits or Legumes");
        }

    }
    else {
        alert('Please write kind of Fruits or Legumes')
    }
    document.getElementById('additem').value = "";
    radioFt.checked = false;
    radioLg.checked = false;
}

document.getElementById("splist").addEventListener("click", splistClk);

function serachClk() {
    var searchInput = document.getElementById("searchForL").value.toLowerCase();
    var allLists = [
        fruitsListContent,
        fruitsLegumesListContent,
        legumesListContent,
    ];

    allLists.forEach(function (listContent, index) {
        listContent.forEach(function (itemText) {
            var listItem = document
                .querySelectorAll(".list")
            [index].querySelectorAll(".d-flex");
            var alertDiv =
                listItem[listContent.indexOf(itemText)].querySelector(".alert");

            if (itemText.toLowerCase().includes(searchInput)) {
                alertDiv.style.backgroundColor = "red";

                setTimeout(function () {
                    alertDiv.style.backgroundColor = "";
                }, 3000);
            } else {
                alertDiv.style.backgroundColor = "";
            }
        });
    });
}

document.getElementById("search").addEventListener("click", serachClk);

function addToList(input, list) {
    addItemToList(input, list, "Fruits", "alert-success");
}

function gnlistClk() {
    var addItemInput = document.getElementById("additem").value;
    var radioFt = document.getElementById("fruits");
    var radioLg = document.getElementById("legamotes");
    if (addItemInput != "" || radioFt.checked & radioLg.checked) {
        if (radioFt.checked) {
            addItemToList(
                addItemInput,
                document.querySelector(".list-2"),
                "Fruits",
                "alert-primary"
            );
        } else if (radioLg.checked) {
            addItemToList(
                addItemInput,
                document.querySelector(".list-2"),
                "Legumes",
                "alert-success"
            );
        } else {
            alert("Please select Fruits or Legumes");
        }
    }
    else {
        alert('Please select Fruits or Legamotes.')
    }
    document.getElementById('additem').value = "";
    radioFt.checked = false;
    radioLg.checked = false;
}

document.getElementById("gnlist").addEventListener("click", gnlistClk);

document.querySelectorAll(".list-2 .alert").forEach(function (alertDiv) {
    alertDiv.addEventListener("click", function () {
        var labelText = alertDiv.querySelector(".res").textContent.trim();
        var category = labelText.split("!")[0].trim();

        if (category === "Fruits") {
            alertDiv.classList.add("opacity-transition");
            setTimeout(function () {
                alertDiv.remove();
                addItemToList(
                    labelText.split("-")[1].trim(),
                    document.querySelector(".list-3"),
                    "Fruits",
                    "alert-primary"
                );
            }, 500);
        } else if (category === "Legumes") {
            alertDiv.classList.add("opacity-transition");
            setTimeout(function () {
                alertDiv.remove();
                addItemToList(
                    labelText.split("-")[1].trim(),
                    document.querySelector(".list-1"),
                    "Legumes",
                    "alert-danger"
                );
            }, 500);
        }
    });
});
