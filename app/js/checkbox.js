let checkBoxIdBig = '#allCheckboxBig';
let classNameBig = '.checkbox--big';
let checkBoxIdMin = '#allCheckboxMin';
let classNameMin = '.checkbox--min';

checkboxChecker(checkBoxIdBig, classNameBig);
checkboxChecker(checkBoxIdMin, classNameMin);

// allCheckboxBig.addEventListener('click', () => {
//   let allCheckboxes = document.querySelectorAll('.checkbox--big');
//   allCheckboxes[0].checked === true
//     ? allCheckboxes.forEach((element) => (element.checked = true))
//     : allCheckboxes.forEach((element) => (element.checked = false));
// });

function checkboxChecker(checkBoxID, className) {
  let button = document.querySelector(checkBoxID);
  button.addEventListener('click', () => {
    let allCheckboxes = document.querySelectorAll(className);
    allCheckboxes[0].checked === true
      ? allCheckboxes.forEach((element) => (element.checked = true))
      : allCheckboxes.forEach((element) => (element.checked = false));
  });
}
