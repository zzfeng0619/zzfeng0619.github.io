var d = new Date();
(m = d.getMonth() + 1),
  (dd = d.getDate()),
  (y = d.getFullYear()),
  9 == m &&
    18 == dd &&
    (document
      .getElementsByTagName("html")[0]
      .setAttribute("style", "filter: grayscale(60%);"),
    "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire(
        "今天是九一八事变" +
          (y - 1931).toString() +
          "周年纪念日\n🪔勿忘国耻，振兴中华🪔"
      ),
      sessionStorage.setItem("isPopupWindow", "1"))),
  7 == m &&
    7 == dd &&
    (document
      .getElementsByTagName("html")[0]
      .setAttribute("style", "filter: grayscale(60%);"),
    "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire(
        "今天是卢沟桥事变" +
          (y - 1937).toString() +
          "周年纪念日\n🪔勿忘国耻，振兴中华🪔"
      ),
      sessionStorage.setItem("isPopupWindow", "1"))),
  12 == m &&
    13 == dd &&
    (document
      .getElementsByTagName("html")[0]
      .setAttribute("style", "filter: grayscale(60%);"),
    "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire(
        "今天是南京大屠杀" +
          (y - 1937).toString() +
          "周年纪念日\n🪔勿忘国耻，振兴中华🪔"
      ),
      sessionStorage.setItem("isPopupWindow", "1"))),
  8 == m &&
    14 == dd &&
    (document
      .getElementsByTagName("html")[0]
      .setAttribute("style", "filter: grayscale(60%);"),
    "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("今天是世界慰安妇纪念日\n🪔勿忘国耻，振兴中华🪔"),
      sessionStorage.setItem("isPopupWindow", "1"))),
  10 == m &&
    dd <= 3 &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("祝祖国" + (y - 1949).toString() + "岁生日快乐！"),
    sessionStorage.setItem("isPopupWindow", "1")),
  8 == m &&
    15 == dd &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("小日子已经投降" + (y - 1945).toString() + "年了😃"),
    sessionStorage.setItem("isPopupWindow", "1")),
  1 == m &&
    1 == dd &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire(y.toString() + "年元旦快乐！🎉"),
    sessionStorage.setItem("isPopupWindow", "1")),
  3 == m &&
    8 == dd &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("各位女神们，妇女节快乐！👩"),
    sessionStorage.setItem("isPopupWindow", "1")),
  (l = [
    "非常抱歉，因为不可控原因，博客将于明天停止运营！",
    "好消息，日本没了！",
    "美国垮了，原因竟然是川普！",
    "微软垮了！",
    "你的电脑已经过载，建议立即关机！",
    "你知道吗？站长很喜欢你哦！",
    "一分钟有61秒哦",
    "你喜欢的人跟别人跑了！",
  ]),
  4 == m &&
    1 == dd &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire(l[Math.floor(Math.random() * l.length)]),
    sessionStorage.setItem("isPopupWindow", "1")),
  5 == m &&
    1 == dd &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("劳动节快乐\n为各行各业辛勤工作的人们致敬！"),
    sessionStorage.setItem("isPopupWindow", "1")),
  5 == m &&
    4 == dd &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("青年节快乐\n青春不是回忆逝去,而是把握现在！"),
    sessionStorage.setItem("isPopupWindow", "1")),
  5 == m &&
    20 == dd &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("今年是520情人节\n快和你喜欢的人一起过吧！💑"),
    sessionStorage.setItem("isPopupWindow", "1")),
  7 == m &&
    1 == dd &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("祝中国共产党" + (y - 1921).toString() + "岁生日快乐！"),
    sessionStorage.setItem("isPopupWindow", "1")),
  9 == m &&
    10 == dd &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("各位老师们教师节快乐！👩‍🏫"),
    sessionStorage.setItem("isPopupWindow", "1")),
  12 == m &&
    25 == dd &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("圣诞节快乐！🎄"), sessionStorage.setItem("isPopupWindow", "1")),
  ((2023 == y && 4 == m && 5 == dd) ||
    (2024 == y && 4 == m && 4 == dd) ||
    (2025 == y && 4 == m && 4 == dd)) &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("清明时节雨纷纷,一束鲜花祭故人💐"),
    sessionStorage.setItem("isPopupWindow", "1")),
  ((2023 == y && 12 == m && 22 == dd) ||
    (2024 == y && 12 == m && 21 == dd) ||
    (2025 == y && 12 == m && 21 == dd)) &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("冬至快乐\n快吃上一碗热热的汤圆和饺子吧🧆"),
    sessionStorage.setItem("isPopupWindow", "1"));
var lunar = calendarFormatter.solar2lunar();
(("正月" == lunar.IMonthCn && "初六" == lunar.IDayCn) ||
  ("正月" == lunar.IMonthCn && "初五" == lunar.IDayCn) ||
  ("正月" == lunar.IMonthCn && "初四" == lunar.IDayCn) ||
  ("正月" == lunar.IMonthCn && "初三" == lunar.IDayCn) ||
  ("正月" == lunar.IMonthCn && "初二" == lunar.IDayCn) ||
  ("正月" == lunar.IMonthCn && "初一" == lunar.IDayCn) ||
  ("腊月" == lunar.IMonthCn && "三十" == lunar.IDayCn) ||
  ("腊月" == lunar.IMonthCn && "廿九" == lunar.IDayCn)) &&
  "1" != sessionStorage.getItem("isPopupWindow") &&
  (Swal.fire(y.toString() + "年新年快乐\n🎊祝你心想事成，诸事顺利🎊"),
  sessionStorage.setItem("isPopupWindow", "1")),
  "正月" == lunar.IMonthCn &&
    "十五" == lunar.IDayCn &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("元宵节快乐\n送你一个大大的灯笼🧅"),
    sessionStorage.setItem("isPopupWindow", "1")),
  "五月" == lunar.IMonthCn &&
    "初五" == lunar.IDayCn &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("端午节快乐\n请你吃一条粽子🍙"),
    sessionStorage.setItem("isPopupWindow", "1")),
  "七月" == lunar.IMonthCn &&
    "初七" == lunar.IDayCn &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("七夕节快乐\n黄昏后,柳梢头,牛郎织女来碰头"),
    sessionStorage.setItem("isPopupWindow", "1")),
  "八月" == lunar.IMonthCn &&
    "十五" == lunar.IDayCn &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("中秋节快乐\n请你吃一块月饼🍪"),
    sessionStorage.setItem("isPopupWindow", "1")),
  "九月" == lunar.IMonthCn &&
    "初九" == lunar.IDayCn &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire("重阳节快乐\n独在异乡为异客，每逢佳节倍思亲"),
    sessionStorage.setItem("isPopupWindow", "1"));
