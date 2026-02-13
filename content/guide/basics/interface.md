---
title: "1-2. 화면을 만드는 재료 (Interface)"
description: "1. 기초 개발 용어 (Categorized Flow)"
order: 2
---

화면은 무엇으로 만들어지는가?


---

## HTML & CSS & Javascript

**Level.1:** HTML은 사람의 '뼈대', CSS는 입고 있는 '옷', Javascript는 걷고 뛰는 '근육(동작)'입니다.

**Level.2:** HTML은 웹페이지의 구조(제목, 본문), CSS는 디자인(색상, 간격), JS는 클릭했을 때 팝업이 뜨는 등의 동적인 기능을 담당합니다.

**Level.3:** 웹 표준 기술 3대장입니다. HTML로 마크업하고, CSS로 스타일링하며, JS로 DOM을 조작하여 상호작용합니다.

```html
<!-- HTML: 구조 -->
<button id="myBtn">클릭하세요</button>

<!-- CSS: 디자인 -->
<style>
  #myBtn { background: blue; color: white; }
</style>

<!-- Javascript: 동작 -->
<script>
  document.getElementById('myBtn').onclick = () => alert('안녕!');
</script>
```

**한줄 요약:** "HTML로 구조 잡고, CSS로 꾸미고, JS로 움직이게 해줘"라고 지시하세요.


---

## UI (User Interface) vs UX (User Experience)

**Level.1:** UI는 숟가락의 '디자인', UX는 그 숟가락으로 밥을 먹을 때 느껴지는 '편안함'입니다.

**Level.2:** UI는 화면의 레이아웃, 폰트, 색감 등 시각적인 요소이고, UX는 사용자가 서비스를 이용하며 느끼는 경험과 만족도입니다.

**Level.3:** UI는 GUI 디자인 툴(Figma)로 작업하며, UX는 사용자 리서치와 여정 지도(User Journey)를 통해 설계합니다.

**한줄 요약:** "UI는 예쁘게 하되, UX(사용성)를 해치지 않게 버튼 위치를 잡아줘"라고 명령하세요.