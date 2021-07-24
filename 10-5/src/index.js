import "./index.css";

//  ------------- Panel相關 -------------
const plusBtn = document.getElementById("plus-btn");
const msgBtn = document.getElementById("msg-btn");
const notificationBtn = document.getElementById("notification-btn");
const moreBtn = document.getElementById("more-btn");

const plusPanel = document.getElementById("plus-panel");
const msgPanel = document.getElementById("msg-panel");
const notificationPanel = document.getElementById("notification-panel");
const morePanel = document.getElementById("more-panel");

const panels = [plusPanel, msgPanel, notificationPanel, morePanel];

function openPanel(index) {
  panels.forEach((p, idx) => {
    if (index === idx) {
      p.classList.remove("hidden");
      return;
    }

    if (p.classList.contains("hidden")) {
      return;
    }

    p.classList.add("hidden");
  });
}

window.addEventListener("click", function () {
  openPanel(-1);
});

plusBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  openPanel(0);
});

msgBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  openPanel(1);
});

notificationBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  openPanel(2);
});

moreBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  openPanel(3);
});

// 取消告訴window被點的情況

plusPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});

msgPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});

notificationPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});

morePanel.addEventListener("click", function (event) {
  event.stopPropagation();
});

//  ------------- 左側相關 -------------

const leftBlock = document.getElementById("left-block");

function renderLeftItem(name, imageUrl) {
  const item = `
    <div
      class="
        flex
        items-center
        justify-items-center
        w-full
        p-2
        mb-1
        rounded
        hover:bg-fb-input
        cursor-pointer
      "
    >
      <div class="w-[32px] overflow-hidden rounded-full mr-4">
        <img src="${imageUrl}" alt="" />
      </div>
      <p class="text-white text-[.9rem]">${name}</p>
    </div>
  `;

  return item;
}

function renderLeftBlock() {
  const leftArr = [
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "活動",
      img: "https://bruce-fe-fb.web.app/image/left/activity.svg",
    },
    {
      name: "天氣",
      img: "https://bruce-fe-fb.web.app/image/left/cloudy.png",
    },
    {
      name: "災害應變中心",
      img: "https://bruce-fe-fb.web.app/image/left/dynamic.svg",
    },
    {
      name: "新冠病毒資訊中心",
      img: "https://bruce-fe-fb.web.app/image/left/facemask.svg",
    },
    {
      name: "社團",
      img: "https://bruce-fe-fb.web.app/image/left/friend.svg",
    },
    {
      name: "企業管理平台",
      img: "https://bruce-fe-fb.web.app/image/left/job.png",
    },
    {
      name: "Messenger",
      img: "https://bruce-fe-fb.web.app/image/left/messenger.svg",
    },
    {
      name: "近期廣告動態",
      img: "https://bruce-fe-fb.web.app/image/left/pay.png",
    },
    {
      name: "朋友名單",
      img: "https://bruce-fe-fb.web.app/image/left/sale.png",
    },
    {
      name: "最愛",
      img: "https://bruce-fe-fb.web.app/image/left/star.svg",
    },
    {
      name: "Marketplace",
      img: "https://bruce-fe-fb.web.app/image/left/store.svg",
    },
    {
      name: "Watch",
      img: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg",
    },
  ];
  let htmStr = "";
  // for (let i = 0; i < 5; i++) {
  //   htmStr = htmStr + renderLeftItem()
  // }
  leftArr.forEach(obj => {
    htmStr = htmStr + renderLeftItem(obj.name, obj.img)
  })
  leftBlock.innerHTML = htmStr;
}

renderLeftBlock();
