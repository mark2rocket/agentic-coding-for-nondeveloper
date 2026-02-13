---
title: "🎓 튜토리얼 2: MCP로 GitHub 연동하기 (20분)"
description: "5. 실전 튜토리얼 (Step-by-Step)"
order: 2
---

**목표**: Claude가 직접 GitHub 이슈 읽고 PR 만들기
**난이도**: ⭐⭐ 중급
**준비물**: GitHub 계정, 클로드코드


---

## Step 1: GitHub 토큰 발급

```
1. github.com → Settings
2. Developer settings → Personal access tokens
3. Tokens (classic) → Generate new token
4. 권한 선택:
   ✅ repo (전체)
   ✅ read:org
5. 토큰 복사 (한 번만 보임!)
```


---

## Step 2: MCP 서버 추가

```bash
claude mcp add --transport http github https://api.github.com/mcp \
  --header "Authorization: Bearer YOUR_TOKEN"
```

**또는 웹 앱에서:**
```
Settings → Connectors → Add GitHub → 토큰 입력
```


---

## Step 3: Claude에게 명령

```
"내 GitHub 리포지토리 목록 보여줘"

"my-first-todo 리포의 열린 이슈 목록 가져와"

"이슈 #5번 내용 읽고 코드 수정해줘"

"수정한 내용으로 PR 만들어줘.
제목: Fix #5 - Add dark mode toggle
설명: 다크모드 토글 버튼 추가했습니다."
```


---

## Step 4: 검증

```
1. GitHub에서 PR 생성 확인
2. 코드 변경 내용 확인
3. 머지 또는 추가 수정 요청
```

**🎉 탭 전환 없이 모든 작업 완료!**

---