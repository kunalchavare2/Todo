function getParentComp(element, className) {
  let linkItem = element;
  /*
        It will check if the clicked item is "header__navitem" class
        If yes then it will event target to linkItem else it will
        go to parent node check for same thing if it is not found that class
        it go two level upword
       */

  while (linkItem !== document.body) {
    if (linkItem.classList.contains(className)) {
      return linkItem;
    } else {
      linkItem = linkItem.parentNode;
    }
  }

  return linkItem;

  // while (element !== document) {}
}

export default getParentComp;
