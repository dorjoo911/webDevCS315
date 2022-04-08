window.onload = function () {
  const addBtn = document.getElementById("btn");
  const removeBtn = document.getElementById("remove");
  const tableCheckbox = document.getElementById("table");
  const listCheckbox = document.getElementById("list");

  const siteName = document.getElementById("siteName");
  const siteAddress = document.getElementById("url");
  const siteKeywords = document.getElementById("keywords");

  const validationTag = document.getElementsByClassName("validation")[0];
  const site = document.getElementsByTagName("th")[0];
  console.log("site :>> ", site);
  let checked = { isTableChecked: false, isListChecked: false };

  const tableData = [];
  const listData = [];

  function isValid() {
    if (!siteName.value || !siteAddress.value || !siteKeywords.value) {
      return false;
    }
    return true;
  }

  function createList() {
    const listContainer = document.getElementById("listAll");
    listContainer.innerHTML = "";

    listData.forEach((value) => {
      const keywordList = value.siteKeywords.split(",");
      let list = "";

      keywordList.forEach((element) => {
        list += `<li>${element}</li>`;
      });

      listContainer.innerHTML += `<a href="${value.siteAddress}">${value.siteName}</a>${list}</ul>`;
      if (value.siteName == "amazon") {
        listContainer.style.color = "green";
      }
    });
  }

  function createTable() {
    const tableContainer = document.getElementById("myTable");
    tableContainer.innerHTML = "";

    tableContainer.innerHTML = "<tr><th>Site Name</th><th>Keywords</th></tr>";

    tableData.forEach((value) => {
      tableContainer.innerHTML += `<tr>
        <td>
        <a href="${value.siteAddress}">${value.siteName}</a>
        </td>
        <td>${value.siteKeywords}</td>
      `;
    });
  }

  addBtn.addEventListener("click", function (e) {
    if (isValid() && (checked.isTableChecked || checked.isListChecked)) {
      validationTag.style.display = "none";
      siteName.style.borderColor = "black";
      const siteNameVal = siteName.value;
      const siteAddressVal = siteAddress.value;
      const siteKeywordsVal = siteKeywords.value;

      const temp = {
        siteName: siteNameVal,
        siteAddress: siteAddressVal,
        siteKeywords: siteKeywordsVal,
      };

      if (checked.isTableChecked && checked.isListChecked) {
        tableData.push(temp);
        listData.push(temp);

        createList();
        createTable();
      } else if (checked.isListChecked) {
        listData.push(temp);
        createList();
      } else if (checked.isTableChecked) {
        tableData.push(temp);
        createTable();
      }
    } else {
      validationTag.style.display = "block";
      siteName.style.borderColor = "red";
    }
  });

  tableCheckbox.addEventListener("change", function (e) {
    if (e.target.checked) {
      checked.isTableChecked = true;
    } else {
      checked.isTableChecked = false;
    }
  });

  listCheckbox.addEventListener("change", function (e) {
    if (e.target.checked) {
      checked.isListChecked = true;
    } else {
      checked.isListChecked = false;
    }
  });

  removeBtn.addEventListener("click", function (e) {
    let promptValue = prompt("Insert removal item name here:");
    tableData.forEach(function (element) {
      if (promptValue == element.siteName) {
        element.remove();
      }
    });
  });

  site.addEventListener("click", function (e) {
    tableData.sort();
  });
};
