var arr = [
    "#39c5bb",
    "#f14747",
    "#f1a247",
    "#f1ee47",
    "#b347f1",
    "#1edbff",
    "#ed709b",
    "#5636ed",
  ],
  idx = 0;
function changeColor() {
  if (
    "dark" ==
    document.getElementsByTagName("html")[0].getAttribute("data-theme")
  ) {
    document.getElementById("site-name") &&
      (document.getElementById("site-name").style.textShadow =
        arr[idx] + " 0 0 15px"),
      document.getElementById("site-title") &&
        (document.getElementById("site-title").style.textShadow =
          arr[idx] + " 0 0 15px"),
      document.getElementById("site-subtitle") &&
        (document.getElementById("site-subtitle").style.textShadow =
          arr[idx] + " 0 0 10px"),
      document.getElementById("post-info") &&
        (document.getElementById("post-info").style.textShadow =
          arr[idx] + " 0 0 5px");
    try {
      (document.getElementsByClassName(
        "author-info__name"
      )[0].style.textShadow = arr[idx] + " 0 0 12px"),
        (document.getElementsByClassName(
          "author-info__description"
        )[0].style.textShadow = arr[idx] + " 0 0 12px");
    } catch {}
    8 == ++idx && (idx = 0);
  } else {
    document.getElementById("site-name") &&
      (document.getElementById("site-name").style.textShadow =
        "#1e1e1ee0 1px 1px 1px"),
      document.getElementById("site-title") &&
        (document.getElementById("site-title").style.textShadow =
          "#1e1e1ee0 1px 1px 1px"),
      document.getElementById("site-subtitle") &&
        (document.getElementById("site-subtitle").style.textShadow =
          "#1e1e1ee0 1px 1px 1px"),
      document.getElementById("post-info") &&
        (document.getElementById("post-info").style.textShadow =
          "#1e1e1ee0 1px 1px 1px");
    try {
      (document.getElementsByClassName(
        "author-info__name"
      )[0].style.textShadow = ""),
        (document.getElementsByClassName(
          "author-info__description"
        )[0].style.textShadow = "");
    } catch {}
  }
}
window.onload = setInterval(changeColor, 1200);
// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}
// 复制提醒
document.addEventListener("copy", function () {
  debounce(function () {
      new Vue({
          data: function () {
              this.$notify({
                  title: "哎嘿！复制成功🍬",
                  message: "若要转载最好保留原文链接哦！",
                  position: 'top-left',
                  offset: 50,
                  showClose: true,
                  type: "success",
                  duration: 5000
              });
          }
      })
  }, 300);
})