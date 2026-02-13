---
title: "3. 검증 및 수정 (Iteration)"
order: 3
---

**설명**: 만들어진 결과물을 실제로 실행해보고, 오류를 고치거나 부족한 기능을 더하는 '대화의 반복' 단계입니다.

**예시**:

```
"방금 만든 화면에서 모바일로 보니까 글씨가 깨져.
그리고 추천 버튼이 작동을 안 하는데 에러 로그 확인해서 고쳐줘.
에러 메시지는 이거야: Error: Button is not defined..."
```

**부연 설명**: 개발 과정에서 에러는 필연적입니다. 비개발자는 빨간색 에러 메시지를 보면 겁을 먹지만, 에이전틱 코딩에서는 그 에러 메시지가 AI에게 줄 '먹이'가 됩니다. 에러 로그를 그대로 복사해서 AI에게 던져주면, AI는 원인을 분석하고 스스로 코드를 수정합니다. "디자인이 좀 촌스러운 것 같아" 같은 추상적인 피드백도 가능합니다. 한 번에 완벽한 결과물을 기대하기보다, 찰흙으로 도자기를 빚듯이 AI와 계속 대화하며 결과물을 다듬어 나가는 과정이 바로 이 단계의 핵심입니다.

<Callout type="tip" title="💡 한줄 요약">
에러 메시지는 내 문제가 아닙니다. 그대로 복사해서 AI에게 던지고 '고쳐(Fix it)'라고 말하세요.
</Callout>

---

## 🎯 클로드코드로 5분 실습하기

<Callout type="success" title="✅ 실습 목표">
AI에게 수정 요청하는 방법과 에러를 해결하는 과정을 직접 체험합니다.
</Callout>

### Step 1: 이전 단계에서 만든 웹사이트 열기

Generation 단계에서 만든 자기소개 웹사이트를 브라우저에서 엽니다.

```bash
# 프로젝트 폴더로 이동
cd ~/agentic-practice

# 클로드코드 실행 (이어서 작업)
claude code
```

---

### Step 2: 디자인 수정 요청하기

채팅창에 입력:

```
방금 만든 웹사이트 디자인을 수정해줘.

변경 사항:
- 배경 그라데이션을 핑크 → 오렌지로 변경
- 제목 폰트 크기를 더 크게
- 카드에 그림자 효과 추가
- 버튼 호버 시 살짝 커지는 애니메이션
```

**AI 작업:**
```
✓ Updating style.css...
✓ Modified gradient colors
✓ Increased font size
✓ Added box-shadow
✓ Added hover animation
```

**소요 시간**: 10초

---

### Step 3: 기능 추가하기

```
연락 버튼을 클릭하면 이메일 주소만 보여주는 게 아니라,
아래에 간단한 메시지 입력창이 나타나게 해줘.

입력창:
- 이름 입력
- 이메일 입력
- 메시지 입력
- 전송 버튼 (클릭하면 "메시지가 전송되었습니다" 알림)
```

**AI 작업:**
```
✓ Updating index.html...
✓ Updating script.js...
✓ Added form elements
✓ Added form validation
✓ Added submit handler
```

**소요 시간**: 20초

---

### Step 4: 의도적으로 에러 발생시키기

브라우저 개발자 도구를 열고 (F12 또는 Cmd+Option+I) 콘솔을 확인합니다.

만약 에러가 보이지 않으면, 직접 요청해서 에러를 만들어봅시다:

```
전송 버튼을 클릭했을 때 콘솔에
sendMessage() 함수를 호출하게 해줘.
근데 이 함수는 정의하지 마.
```

**결과**: 브라우저 콘솔에 에러 발생
```
Uncaught ReferenceError: sendMessage is not defined
```

---

### Step 5: 에러 수정 요청하기

에러 메시지를 복사해서 AI에게 전달:

```
이 에러가 발생했어. 고쳐줘:

Uncaught ReferenceError: sendMessage is not defined
    at HTMLButtonElement.onclick (index.html:25)
```

**AI 작업:**
```
✓ Analyzing error...
✓ Found missing function definition
✓ Adding sendMessage() function to script.js...
✓ Error fixed
```

**결과**: 에러 해결, 버튼 정상 작동

**소요 시간**: 15초

---

### Step 6: 모바일 반응형 확인 및 수정

브라우저 창 크기를 줄여서 모바일 화면 시뮬레이션:

```
모바일(작은 화면)에서 보니까 글씨가 너무 작아.
화면 크기에 따라 자동으로 조절되게 해줘.

추가로:
- 모바일에서는 카드 여백을 줄여줘
- 버튼을 전체 너비로 늘려줘
```

**AI 작업:**
```
✓ Adding media queries to style.css...
✓ Adjusted font sizes
✓ Modified card padding
✓ Set button width to 100% on mobile
```

**소요 시간**: 15초

---

### Step 7: 최종 결과 확인

1. 데스크톱 화면으로 확인
2. 모바일 화면으로 확인 (브라우저 개발자 도구에서 디바이스 시뮬레이션)
3. 모든 버튼과 입력창 테스트
4. 에러 메시지가 없는지 콘솔 확인

---

### 💡 실습에서 배운 점

<Callout type="tip" title="Iteration의 핵심 원칙">
1. **완벽을 처음부터 기대하지 마세요**
   - 첫 결과물은 80% 정도만 완성된다고 생각
   - 나머지 20%는 대화로 다듬기

2. **에러는 성장의 기회입니다**
   - 빨간 에러 메시지 = AI에게 줄 정보
   - 복사-붙여넣기-"고쳐줘" 3단계면 해결

3. **구체적으로 수정 요청하세요**
   - ❌ "디자인 예쁘게 해줘" (모호함)
   - ✅ "배경색을 파란색으로, 버튼을 둥글게" (구체적)

4. **여러 번 수정해도 괜찮습니다**
   - AI는 지치지 않음
   - 마음에 들 때까지 계속 요청 가능
</Callout>

---

### 🔄 반복 패턴

에이전틱 코딩의 실제 작업 흐름:

```
1. 만들기 (Generation)
   ↓
2. 확인하기 (브라우저/콘솔)
   ↓
3. 문제 발견 (디자인/기능/에러)
   ↓
4. 수정 요청 (Iteration) ← 여기서 반복
   ↓
5. 다시 확인
   ↓
만족할 때까지 3-5 반복
```

**평균 반복 횟수**: 3-5회
**총 소요 시간**: 10-30분 (프로젝트 크기에 따라)

---

**소요 시간**: 5분
**다음 단계**: [프로세스 플로우 다이어그램](/docs/guide/process/process-flow)에서 전체 프로세스를 시각적으로 확인하세요.

---

<AgenticProcessDiagram />