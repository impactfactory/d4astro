
  export function hideMenu() {
    let mq = window.matchMedia("(max-width: 767px)");
    const checkbox = document.getElementById("menu-toggle");

    if (mq.matches) {
      checkbox.click();
    } else {
    }
  }
