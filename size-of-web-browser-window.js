// What is your Browser Window size?
// developed by Tawhidur Rahman Dear, https://www.tawhidurrahmandear.com
// Live Preview available at https://www.devilhunter.net/p/size-of-web-browser-window.html


   document.addEventListener("DOMContentLoaded", () => {
    const refreshButton = document.getElementById("refreshButton");
    const browserwindow1 = document.WindowSize.browserwindow1;
    const browserwindow2 = document.WindowSize.browserwindow2;
    const browserwindow3 = document.WindowSize.browserwindow3;

    const getWinSize = () => {
      if (typeof window.innerWidth === "undefined") {
        browserwindow1.value = "N/A in this browser";
        browserwindow2.value = `${document.body.clientWidth} x ${document.body.clientHeight}`;
      } else {
        browserwindow1.value = `${window.outerWidth} x ${window.outerHeight}`;
        browserwindow2.value = `${window.innerWidth} x ${window.innerHeight}`;
      }
      browserwindow3.value = `${window.screenX || window.screenLeft}, ${window.screenY || window.screenTop}`;
    };
    getWinSize();
    refreshButton.addEventListener("click", getWinSize);
  });