---
title: "8. 클로드코드 꿀팁"
order: 1
---

클로드코드를 더욱 효율적으로 사용하는 실전 팁

## 클로드코드 프로 팁

실무에서 바로 써먹는 클로드코드 활용법을 소개합니다.

### 1. CLAUDE.md 파일 500줄 이하로 설정하기

<Callout type="warning" title="컨텍스트 오버플로우 주의">
CLAUDE.md가 너무 길면 Claude가 중요한 지시사항을 놓칠 수 있습니다.
</Callout>

**왜 500줄인가?**
- Claude의 프롬프트 처리는 앞부분과 뒷부분에 집중
- 중간 부분은 상대적으로 덜 읽힘 (Lost in the Middle 현상)
- 500줄 이하로 유지하면 모든 지시사항이 효과적으로 전달됨

**베스트 프랙티스:**
```markdown
# CLAUDE.md 구조 예시 (500줄 이하)

## 프로젝트 개요 (50줄)
- 목적, 기술 스택, 아키텍처

## 코딩 규칙 (150줄)
- 네이밍 컨벤션, 파일 구조, 스타일 가이드

## 자주 하는 작업 (200줄)
- 커밋 메시지 포맷
- 테스트 실행 방법
- 배포 프로세스

## 금지 사항 (100줄)
- 절대 하지 말아야 할 것들
- 보안 주의사항
```

**정리 팁:**
- 중복되는 내용 제거
- 구체적 예시는 별도 문서로 분리
- 핵심만 남기기

---

### 2. Skill 적극 사용해서 AI가 일정한 결과물 내게 하기

<Callout type="tip" title="일관성의 비밀">
Skill은 AI의 "템플릿"입니다. 매번 같은 품질의 결과물을 보장합니다.
</Callout>

**Skill이란?**
- 반복적인 작업을 자동화하는 커스텀 명령어
- 예: `/commit`, `/review-pr`, `/add-test`

**왜 중요한가?**
- 매번 긴 프롬프트를 입력할 필요 없음
- AI가 일관된 포맷으로 작업 수행
- 팀원 간 워크플로우 공유 가능

**실전 예시:**
```bash
# 커밋 메시지 Skill
/commit
→ 자동으로 변경사항 분석 + 컨벤셔널 커밋 생성

# PR 리뷰 Skill
/review-pr 123
→ 코드 리뷰 + 개선 제안 + 보안 체크

# 테스트 추가 Skill
/add-test src/auth.ts
→ 해당 파일에 대한 유닛 테스트 자동 생성
```

**Skill 만드는 법:**
1. 자주 반복하는 작업 식별
2. `~/.claude/skills/` 폴더에 `.md` 파일 생성
3. 프롬프트 템플릿 작성
4. `/skill-name`으로 실행

---

### 3. 작업 끝내고 /clear 쳐서 컨텍스트 비우기

<Callout type="success" title="컨텍스트 청소의 힘">
긴 대화 기록은 AI의 집중력을 떨어뜨립니다. 정기적으로 `/clear`를 사용하세요.
</Callout>

**언제 /clear 해야 하나?**
- 큰 작업이 완료되었을 때
- 전혀 다른 주제로 넘어갈 때
- AI 응답이 이상해지기 시작할 때
- 토큰이 많이 쌓였을 때 (5,000+ 메시지)

**실전 워크플로우:**
```bash
# 1. 기능 구현
"로그인 기능 추가해줘"

# 2. 테스트
"테스트 실행해줘"

# 3. 커밋
"/commit"

# 4. 컨텍스트 클리어 ✅
"/clear"

# 5. 새 작업 시작 (깨끗한 상태)
"이제 대시보드 만들어줘"
```

**주의사항:**
- `/clear` 후에는 이전 대화 내용을 참조할 수 없음
- 중요한 정보는 CLAUDE.md나 코드 주석에 기록
- 작업 중간에는 사용하지 말 것

---

### 4. 계획은 think 토큰 많이 쓰게 하고, 실행은 think 토큰 적게 쓰게 하기

<Callout type="info" title="사고의 경제학">
복잡한 계획은 깊게 생각하고, 단순 실행은 빠르게 처리하세요.
</Callout>

**Think 토큰이란?**
- Claude가 내부적으로 "생각"하는 과정
- 더 많은 think 토큰 = 더 깊은 분석 = 더 나은 결과
- 비용과 시간도 증가

**전략적 활용:**

**계획 단계 (think 토큰 많이):**
```bash
# ✅ 좋은 예시
"이 프로젝트의 아키텍처를 설계해줘.
장단점을 비교하고, 확장성과 보안을 고려해서
최선의 방법을 제안해줘. 충분히 생각하고 답변해."
```

**실행 단계 (think 토큰 적게):**
```bash
# ✅ 좋은 예시
"위에서 결정한 대로 UserService.ts 파일 만들어줘."
"README.md에 설치 방법 추가해줘."
```

**설정 방법:**
```bash
# ~/.claude/config.json
{
  "thinking_budget": "auto",  // 자동 조절
  "planning_mode": "deep",    // 계획 시 깊게 사고
  "execution_mode": "fast"    // 실행 시 빠르게
}
```

**비용 절감 팁:**
- 간단한 작업은 "빠르게 만들어줘" 추가
- 복잡한 설계는 "충분히 고민해서" 추가
- 반복 작업은 Skill로 고정

---

## 클로드코드 output 설정 팁

Claude의 응답 스타일을 커스터마이징하여 학습 효과를 극대화하세요.

### /output-style 설정 변경하기

<Callout type="tip" title="당신만의 AI 튜터">
output-style을 바꾸면 Claude의 교육 방식이 달라집니다.
</Callout>

**설정 방법:**
```bash
/output-style
```

입력 후 원하는 스타일 선택:

---

### Explanatory 모드

**특징:**
- 작업 전후에 Insights를 제공
- "왜 이렇게 했는지" 설명 포함
- 학습 효과가 높음

**언제 사용?**
- 새로운 기술을 배울 때
- 복잡한 로직을 이해하고 싶을 때
- 장기적으로 실력을 키우고 싶을 때

**예시 출력:**
```markdown
🔍 Insights (작업 전)
이 기능을 구현하려면 React Hook과 Context API를 사용합니다.
useState로 로컬 상태를 관리하고, useContext로 전역 상태를 공유합니다.

[코드 작성...]

✅ Insights (작업 후)
useCallback으로 함수를 메모이제이션했습니다.
이렇게 하면 불필요한 리렌더링을 방지할 수 있습니다.
```

---

### Learning 모드

**특징:**
- 헬스 트레이너처럼 코드를 직접 쳐보라고 유도
- AI가 답을 주지 않고 힌트만 제공
- 능동적 학습 유도

**언제 사용?**
- 코딩 실력을 진짜로 키우고 싶을 때
- 손으로 코드를 쳐보며 익히고 싶을 때
- 시험이나 면접 준비할 때

**예시 출력:**
```markdown
💪 직접 해보세요!

1단계: useState를 import 해보세요
힌트: React에서 가져와야 합니다

2단계: count 상태 만들기
힌트: 초기값은 0이어야 합니다

막히면 말씀하세요!
```

**비교표:**

| 구분 | Explanatory | Learning |
|------|-------------|----------|
| **학습 속도** | 빠름 | 느림 |
| **학습 깊이** | 보통 | 깊음 |
| **작업 속도** | 빠름 | 느림 |
| **추천 대상** | 초보자, 빠른 개발 | 중급자, 실력 향상 |

---

## Claude Code Skill 10만 개 중 진짜 살아남은 4개

Vercel과 커뮤니티에서 검증된 필수 Skill을 소개합니다.

### 1. Superpowers

<Callout type="success" title="AI 에이전트 통제의 기술">
AI가 코드부터 짜지 않게 만드는 개발 방법론
</Callout>

**핵심 철학:**
- AI는 계획을 먼저 세우고 승인을 받아야 함
- "일단 코드 짜고 보자" 방지
- 방향 설정 → 승인 → 실행 순서 강제

**사용 예시:**
```bash
"쇼핑몰 만들어줘"

# ❌ 일반 모드: 바로 코드 작성 시작
# ✅ Superpowers: 먼저 기획서 제출

1. 요구사항 분석
   - 상품 목록
   - 장바구니
   - 결제 시스템

2. 기술 스택 제안
   - Next.js + Stripe + PostgreSQL

승인하시겠습니까? (Y/N)
```

**설치:**
```bash
claude skill add superpowers
```

---

### 2. Humanizer

<Callout type="warning" title="→🙋 AI 냄새 제거기">
AI가 쓴 글에서 "AI 냄새"를 24가지로 잡아내는 필터
</Callout>

**24가지 AI 냄새:**
- "혁신적인", "획기적인" 남발
- 과도한 존댓말
- 불필요한 접속사 (따라서, 그러므로)
- 딱딱한 문어체
- 감정 표현 부족
- 예시 없는 추상적 설명

**Before (AI 냄새):**
```markdown
본 서비스는 혁신적인 기술을 통해 사용자 경험을
획기적으로 개선하는 솔루션입니다. 따라서 고객 만족도가
향상될 것으로 기대됩니다.
```

**After (Humanizer 적용):**
```markdown
이 서비스는 로딩 속도를 3초 → 0.5초로 줄였습니다.
고객들이 "진짜 빨라졌네요!"라고 반응했어요.
```

**설치:**
```bash
claude skill add humanizer
```

---

### 3. UI/UX Pro Max

<Callout type="tip" title="템플릿 티 제거 전문가">
AI가 만든 화면에서 템플릿 느낌을 없애주는 디자인 엔진
</Callout>

**AI 디자인의 문제:**
- 모든 버튼이 파란색
- 둥근 모서리만 사용
- 그림자 남발
- 개성 없는 레이아웃

**UI/UX Pro Max가 바꾸는 것:**
- 브랜드 색상 시스템 적용
- 계층 구조 명확화
- 여백과 타이포그래피 최적화
- 인터랙션 디테일 추가

**Before (AI 템플릿):**
```jsx
<button className="bg-blue-500 rounded-lg px-4 py-2">
  클릭
</button>
```

**After (Pro Max):**
```jsx
<button className="
  bg-gradient-to-r from-orange-500 to-pink-500
  hover:shadow-2xl hover:scale-105
  active:scale-95
  transition-all duration-200
  rounded-xl px-6 py-3
  font-semibold tracking-tight
">
  클릭하세요 →
</button>
```

**설치:**
```bash
claude skill add ui-ux-pro-max
```

---

### 4. Find Skills (Vercel 공식)

<Callout type="info" title="10만 Skill 생태계 검색엔진">
한 줄로 검색하고 설치하는 도구
</Callout>

**사용법:**
```bash
# 검색
claude find skill "react 테스트"

# 결과
1. React Test Generator (⭐ 4.8)
2. Jest + RTL Boilerplate (⭐ 4.6)
3. E2E Test with Playwright (⭐ 4.3)

# 설치
claude skill add react-test-generator
```

**카테고리:**
- 🎨 Frontend (React, Vue, Svelte)
- ⚙️ Backend (Node, Python, Go)
- 🧪 Testing (Jest, Cypress, Playwright)
- 🚀 DevOps (Docker, K8s, CI/CD)
- 📝 Documentation (README, API docs)

**인기 Skill TOP 5:**
1. `commit-master` - 커밋 메시지 자동 생성
2. `bug-hunter` - 버그 자동 탐지 및 수정
3. `code-reviewer` - PR 리뷰 자동화
4. `test-generator` - 유닛 테스트 생성
5. `refactor-pro` - 코드 리팩토링

---

## 웹 디자인/인터렉션 키워드

AI에게 디자인을 요청할 때 사용하는 마법의 키워드

### 기본 키워드

<Callout type="tip" title="첫인상을 바꾸는 4가지">
기본만 써도 세련된 느낌이 나옵니다.
</Callout>

**ScrollReveal (등장 효과)**
```bash
"스크롤하면 요소들이 아래에서 위로 부드럽게 나타나게 해줘"
```
- 용도: 섹션별 콘텐츠 강조
- 라이브러리: Framer Motion, AOS
- 예시: 애플 제품 페이지

**Parallax (깊이감)**
```bash
"배경은 느리게, 전경은 빠르게 움직이는 시차 효과 넣어줘"
```
- 용도: 히어로 섹션, 스토리텔링 페이지
- 라이브러리: react-parallax, rellax.js
- 예시: Stripe 홈페이지

**SmoothScroll (부드러운 스크롤)**
```bash
"페이지 스크롤을 부드럽게 만들어줘 (Lenis 스타일)"
```
- 용도: 전체 사이트 경험 개선
- 라이브러리: Lenis, Locomotive Scroll
- 예시: Awwwards 수상작들

**ScrollProgress (진행률 표시)**
```bash
"상단에 스크롤 진행률 바 추가해줘"
```
- 용도: 긴 글, 튜토리얼 페이지
- 라이브러리: react-scroll-progress
- 예시: Medium 블로그

---

### 튀는 키워드

<Callout type="success" title="포트폴리오를 돋보이게">
고급 기술로 차별화하세요.
</Callout>

**HorizontalScroll (가로 이동)**
```bash
"세로 스크롤하면 콘텐츠가 가로로 흐르게 만들어줘"
```
- 용도: 포트폴리오, 타임라인
- 라이브러리: GSAP ScrollTrigger
- 예시: Apple AirPods Max 페이지

**StickyStacking (카드 쌓기)**
```bash
"스크롤하면 카드들이 위로 쌓이는 효과 넣어줘"
```
- 용도: 제품 설명, 케이스 스터디
- 라이브러리: GSAP, Framer Motion
- 예시: Linear 홈페이지

**ImageSequence (프레임 재생)**
```bash
"스크롤에 따라 이미지 시퀀스를 동영상처럼 재생해줘"
```
- 용도: 제품 360도 뷰, 상세 설명
- 라이브러리: Canvas + GSAP
- 예시: Apple iPhone 페이지

**ScrollScrubbing (애니메이션 연동)**
```bash
"스크롤 위치에 따라 SVG 애니메이션을 정밀하게 제어해줘"
```
- 용도: 인포그래픽, 데이터 시각화
- 라이브러리: GSAP ScrollTrigger
- 예시: Stripe Annual Report

---

**조합 예시:**
```bash
"히어로 섹션에 Parallax + ScrollReveal 넣고,
다음 섹션은 HorizontalScroll로 포트폴리오 보여주고,
마지막은 StickyStacking으로 팀 소개해줘"
```

**성능 주의:**
- 모바일에서는 효과 줄이기
- Intersection Observer로 뷰포트 내에서만 실행
- 60fps 유지 필수

---

## 비용 절감 팁

Claude Code를 경제적으로 사용하는 방법

### reasoning_effort=auto 설정

<Callout type="success" title="자동 모델 선택으로 비용 50% 절감">
난이도에 따라 Haiku/Sonnet/Opus를 자동으로 선택합니다.
</Callout>

**작동 원리:**
- 간단한 작업 → Haiku (저렴)
- 중간 난이도 → Sonnet (적정)
- 복잡한 작업 → Opus (비싸지만 정확)

**설정 방법:**
```bash
# ~/.claude/config.json
{
  "reasoning_effort": "auto"
}
```

**비용 비교:**

| 작업 | 일반 모드 | auto 모드 | 절감률 |
|------|-----------|-----------|--------|
| 간단한 수정 | Opus ($15) | Haiku ($0.25) | 98% |
| 기능 추가 | Opus ($15) | Sonnet ($3) | 80% |
| 복잡한 설계 | Opus ($15) | Opus ($15) | 0% |

**평균 절감:** 50-60%

---

### Prompt Caching (90% 절감)

<Callout type="tip" title="같은 컨텍스트는 재사용">
CLAUDE.md 같은 긴 프롬프트를 캐싱하면 90% 저렴합니다.
</Callout>

**자동 활성화:**
- Claude Code는 자동으로 캐싱 활성화
- CLAUDE.md, 코드베이스 구조 등 캐싱
- 5분간 유효

**비용 비교:**
```bash
# 첫 요청 (캐싱 없음)
CLAUDE.md (5000 토큰) = $0.15

# 5분 내 재요청 (캐싱 있음)
CLAUDE.md (5000 토큰) = $0.015

절감: 90%
```

---

### Batch API (50% 더 저렴)

<Callout type="info" title="급하지 않으면 Batch로">
24시간 내 처리되는 대신 50% 할인
</Callout>

**언제 사용?**
- 대량의 테스트 생성
- 문서 일괄 번역
- 코드 리팩토링 작업

**사용법:**
```bash
claude batch add "모든 컴포넌트에 테스트 추가"
claude batch add "README 영어로 번역"
claude batch run
```

---

### 멀티 에이전트 전략

<Callout type="warning" title="역할 분담으로 품질↑ 비용↓">
리서치, 작성, 검토 에이전트를 분리하면 효율적입니다.
</Callout>

**전략:**
```bash
# 1. 리서치 에이전트 (Haiku)
"이 주제에 대해 자료 조사해줘"

# 2. 작성 에이전트 (Sonnet)
"위 자료로 블로그 글 써줘"

# 3. 검토 에이전트 (Haiku)
"문법 오류 찾아줘"
```

**비용 비교:**

| 방식 | 모델 | 비용 |
|------|------|------|
| 단일 에이전트 | Opus | $15 |
| 멀티 에이전트 | Haiku + Sonnet + Haiku | $4 |
| **절감** | - | **73%** |

---

## 클로드 코드를 잘 쓰는 5가지 방법

실무 고수들의 노하우

### 1. "너가 해라"

<Callout type="success" title="명령이 아닌 위임">
AI를 비서가 아닌 팀원으로 대하세요.
</Callout>

**❌ 나쁜 예시:**
```bash
"UserService.ts 파일 만들고
거기에 getUser, createUser, updateUser 함수 넣고
각 함수는 async/await 쓰고
에러 핸들링도 추가해"
```

**✅ 좋은 예시:**
```bash
"사용자 관리 기능을 만들어줘.
REST API 베스트 프랙티스를 따르고,
이 프로젝트의 기존 패턴을 유지해줘."
```

**차이점:**
- AI가 스스로 판단하고 결정
- 더 나은 아키텍처 제안 가능
- 놓친 부분(로깅, 테스트)도 알아서 추가

---

### 2. "시스템으로 개선시켜라"

<Callout type="tip" title="일회성이 아닌 재발 방지">
문제를 고치는 게 아니라 시스템을 개선하세요.
</Callout>

**❌ 나쁜 예시:**
```bash
"이 버그 고쳐줘"
```

**✅ 좋은 예시:**
```bash
"이 버그를 고치고, 같은 류의 버그가
다시 발생하지 않도록 시스템을 개선해줘.
린터 규칙이나 타입 가드를 추가하는 식으로."
```

**효과:**
- 근본 원인 해결
- 재발 방지
- 코드 품질 향상

---

### 3. /clear

<Callout type="warning" title="주기적 청소 필수">
앞에서 설명했지만 다시 강조합니다. 정말 중요합니다.
</Callout>

**습관화 방법:**
```bash
작업 완료 → /commit → /clear
```

**효과:**
- AI 응답 품질 유지
- 토큰 비용 절감
- 집중력 향상

---

### 4. /verify

<Callout type="info" title="검증은 필수">
AI가 만든 코드를 바로 믿지 마세요.
</Callout>

**사용 시점:**
```bash
# 기능 구현 후
"/verify 로그인 기능이 제대로 동작하는지 확인해줘"

# 배포 전
"/verify 프로덕션 배포 체크리스트 검증해줘"

# 리팩토링 후
"/verify 기존 기능이 모두 정상 작동하는지 테스트해줘"
```

**검증 항목:**
- 기능 동작
- 엣지 케이스
- 성능
- 보안

---

### 5. /mcp

<Callout type="success" title="외부 도구 연결">
Model Context Protocol로 Claude를 확장하세요.
</Callout>

**MCP란?**
- Claude가 외부 도구(DB, API, 파일시스템)에 접근
- GitHub, Slack, Linear 등 연동 가능

**설치 예시:**
```bash
# GitHub 연동
claude mcp add github

# Slack 연동
claude mcp add slack

# PostgreSQL 연동
claude mcp add postgres
```

**활용:**
```bash
"GitHub에서 오픈된 이슈 중 'bug' 라벨 달린 거
모두 가져와서 우선순위 정리해줘"

"Slack #dev 채널에 배포 완료 메시지 보내줘"

"DB에서 최근 1주일간 가입한 사용자 통계 뽑아줘"
```

---

## 마무리

<Callout type="tip" title="핵심 요약">
1. CLAUDE.md는 500줄 이하로
2. Skill 적극 활용
3. 작업 끝나면 /clear
4. 계획은 깊게, 실행은 빠르게
5. reasoning_effort=auto로 비용 절감
</Callout>

이 팁들을 활용하면 클로드코드를 10배 더 효율적으로 사용할 수 있습니다!
