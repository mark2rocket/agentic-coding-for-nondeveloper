---
title: "3-3. 초기 설정"
description: "3. 안티그래비티"
order: 3
---

안티그래비티를 처음 실행한 후 반드시 설정해야 할 필수 항목들을 안내합니다.

---

## 1단계: 언어 설정

초기 실행 시 영문 메뉴일 수 있으므로, 한국어로 변경하는 것이 유리합니다.

**변경 방법:**
```
1. 우측 상단 ⚙️ 아이콘 클릭
2. Settings > General > Language
3. "Korean (한국어)" 선택
4. Restart 버튼 클릭
```

<Callout type="tip" title="💡 팁">
언어 설정은 UI뿐만 아니라 **AI가 생성하는 코드 주석**도 한국어로 작성하게 합니다. 비개발자에게 매우 유용합니다.
</Callout>

---

## 2단계: 모드 선택 (Mode Selection)

안티그래비티는 두 가지 작업 모드를 제공합니다. 프로젝트 성격에 맞는 모드를 선택하세요.

### Planning Mode (기획 모드) 🎯

**특징:**
- AI가 먼저 전체 개발 계획을 수립
- 사용자의 승인(Approve)을 받은 후 코딩 시작
- 단계별로 진행 상황 확인 가능

**언제 사용:**
- 복잡한 앱을 만들 때
- 여러 기능이 얽혀있는 프로젝트
- 시행착오를 최소화하고 싶을 때

**설정 방법:**
```
Settings > Workflow > Mode > "Planning Mode" 선택
```

**예시:**
```
요청: "쇼핑몰 웹사이트 만들어줘"

Planning Mode 진행:
1단계: AI가 기능 목록 제시
  - 상품 목록 페이지
  - 장바구니 기능
  - 결제 시스템
  - 관리자 대시보드

2단계: 사용자 승인 (Approve 버튼)

3단계: 단계별 구현 시작
  → 각 기능마다 완료 후 확인 가능
```

---

### Fast Mode (고속 모드) ⚡

**특징:**
- 계획 단계 없이 즉시 코드 생성
- 빠른 프로토타입 제작 가능
- 간단한 수정에 적합

**언제 사용:**
- 간단한 기능 추가/수정
- 빠른 실험과 테스트
- 명확한 요구사항이 있을 때

**설정 방법:**
```
Settings > Workflow > Mode > "Fast Mode" 선택
```

**예시:**
```
요청: "로그인 페이지의 버튼 색깔을 파란색으로 바꿔줘"

Fast Mode 진행:
  → 즉시 코드 수정
  → 브라우저에서 결과 확인
```

---

### 모드 비교표

| 구분 | Planning Mode | Fast Mode |
|------|--------------|-----------|
| **속도** | 느림 (계획 시간 포함) | 빠름 |
| **정확도** | 높음 | 보통 |
| **적합한 작업** | 복잡한 프로젝트 | 간단한 수정 |
| **사용자 개입** | 승인 필요 | 최소화 |
| **추천 대상** | 비개발자 | 경험 있는 사용자 |

<Callout type="tip" title="💡 추천">
처음 사용한다면 **Planning Mode**를 선택하세요. AI가 무엇을 할 것인지 미리 보여주므로 안심하고 작업할 수 있습니다.
</Callout>

---

## 3단계: 작업 폴더 지정

안티그래비티가 파일을 생성하고 관리할 폴더를 지정합니다.

**설정 방법:**
```
1. File > Open Folder (또는 Ctrl/Cmd + O)
2. 작업 전용 폴더 선택
   예: C:\Users\사용자명\Documents\MyProjects
       /Users/사용자명/Documents/MyProjects
3. "Select Folder" 클릭
```

<Callout type="warning" title="⚠️ 매우 중요!">
**작업 전용 폴더를 별도로 만들어 사용**하는 것이 안전합니다. 바탕화면이나 문서 폴더를 직접 선택하면 기존 파일들이 혼재되어 관리가 어렵습니다.
</Callout>

**폴더 구조 예시:**
```
MyProjects/
  ├─ shopping-mall/     (프로젝트 1)
  ├─ blog-website/      (프로젝트 2)
  └─ portfolio/         (프로젝트 3)
```

---

## 4단계: 터미널 설정 (필수!)

**이 설정을 잘못하면 파일이 삭제될 수 있습니다!**

**반드시 확인:**
```
Settings > Terminal > Auto-execution
```

**권장 설정:**
- ✅ **"Request Review"** (추천)
- ✅ **"Off"**
- ❌ **"Turbo"** (절대 사용 금지)
- ❌ **"Auto"** (위험)

**왜 중요한가:**

| 설정 | 동작 | 위험도 |
|------|------|--------|
| Request Review | 명령어 실행 전 사용자 승인 필요 | ✅ 안전 |
| Off | 터미널 명령어 사용 안 함 | ✅ 안전 |
| Auto | AI가 자동으로 명령어 실행 | ⚠️ 위험 |
| Turbo | 승인 없이 모든 명령어 즉시 실행 | 🚨 매우 위험 |

<Callout type="danger" title="🚨 실제 사고 사례">
"Turbo" 또는 "Auto" 설정 시, AI가 사용자 동의 없이 파일 삭제 명령(`rm -rf`)을 실행하여 **드라이브 전체가 삭제**된 사례가 보고되었습니다. 모든 터미널 명령은 사용자가 눈으로 확인하고 **Approve 버튼**을 누르는 방식으로 진행해야 합니다.
</Callout>

---

## 5단계: 에이전트 설정 (선택사항)

**워크스페이스 이름 지정:**
```
Settings > Workspace > Name
→ 프로젝트명 입력 (예: "쇼핑몰 프로젝트")
```

**AI 모델 선택:**
```
Settings > Model > Default Model
- Gemini 3.0 Pro (High): 복잡한 작업 (추천)
- Gemini 3.0 Pro (Low): 간단한 작업 (빠름)
- Gemini 3.0 Deep: 고도의 추론 필요 시
```

**브라우저 설정:**
```
Settings > Browser > Default Browser
- Chrome (추천)
- Firefox
- Edge
```

---

## 6단계: 초기 설정 완료 확인

모든 설정이 완료되었는지 체크리스트로 확인하세요.

**확인 사항:**
- [ ] 언어가 한국어로 설정됨
- [ ] Planning Mode 또는 Fast Mode 선택 완료
- [ ] 작업 폴더가 지정됨
- [ ] **터미널 Auto-execution = "Request Review"**
- [ ] 구글 계정 로그인 상태

<Callout type="success" title="✅ 설정 완료!">
모든 설정이 완료되었다면 이제 안티그래비티를 사용할 준비가 끝났습니다! 다음 단계인 "3-4. 명령어"에서 실제 사용법을 배워보세요.
</Callout>

---

## 추가 팁

### 설정 백업하기
```
Settings > Export Settings
→ settings.json 파일 저장
→ 나중에 Import Settings로 복원 가능
```

### 테마 변경하기
```
Settings > Appearance > Theme
- Light (밝은 테마)
- Dark (어두운 테마, 추천)
- Auto (시스템 설정 따름)
```

### 단축키 설정하기
```
Settings > Keyboard Shortcuts
→ 자주 쓰는 기능에 단축키 지정
```
