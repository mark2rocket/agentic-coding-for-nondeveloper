---
title: "6. 클로드코드 플러그인"
order: 1
---

클로드코드의 기능을 확장해주는 추가 모듈입니다. 스마트폰 앱스토어처럼 필요한 기능만 골라서 설치할 수 있습니다.

<Callout type="info" title="🔌 플러그인의 힘">
9,000개 이상의 플러그인이 존재하며, 매일 새로운 플러그인이 추가되고 있습니다. 딱 필요한 것만 골라서 클로드코드를 나만의 도구로 만드세요!
</Callout>

---

## 📦 플러그인 마켓플레이스

### 공식 마켓플레이스

**Anthropic 공식 플러그인**
- 링크: [https://github.com/anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)
- 특징: Anthropic이 직접 관리하는 고품질 플러그인
- 자동 활성화: Claude Code 실행 시 자동 연결
- 접근: `/plugin` 명령어 → Discover 탭

**Claude Marketplaces** (140+ 플러그인)
- 링크: [https://claudemarketplaces.com/](https://claudemarketplaces.com/)
- 분류: 14개 전문 분야
  - 웹 개발 (Web Development)
  - 데이터 & 분석 (Data & Analytics)
  - 마케팅 & 성장 (Marketing & Growth)
  - 재무 & 회계 (Finance & Accounting)
  - 개인 생산성 (Personal Productivity)
  - 디자인 & 창작 (Design & Creative)
- 구성: MCP 서버, 전문 에이전트, 즉시 사용 가능한 스킬

**커뮤니티 마켓플레이스**
- [claude-plugins.dev](https://claude-plugins.dev/) - 커뮤니티 레지스트리 & CLI
- [claudecodeplugins.io](https://claudecodeplugins.io/) - 스킬 허브
- [claudecodemarketplace.com](https://claudecodemarketplace.com/) - 종합 마켓플레이스

---

## ⚡ 빠른 시작

### 1단계: 마켓플레이스 접근

**터미널에서:**
```bash
# 플러그인 마켓플레이스 열기
/plugin

# Discover 탭으로 이동
# → 브라우저처럼 플러그인 검색 및 설치
```

**또는 직접 명령어:**
```bash
# 공식 마켓플레이스 추가
/plugin marketplace add anthropics/skills
```

### 2단계: 플러그인 설치

**방법 1: GUI로 설치 (추천)**
```bash
1. /plugin 실행
2. Discover 탭 클릭
3. 원하는 플러그인 검색
4. Install 버튼 클릭
```

**방법 2: 명령어로 설치**
```bash
# 공식 디렉토리에서 설치
claude plugin add @anthropic/deploy-helper

# 또는 /plugin 명령어 사용
/plugin install {plugin-name}@claude-plugin-directory

# GitHub 저장소에서 설치
claude plugin add github:username/repo

# 로컬 디렉토리에서 설치
claude plugin add ./my-plugin
```

### 3단계: 설치 확인

```bash
# 설치된 플러그인 목록
claude plugin list

# 또는
/plugin list
```

---

## 🏆 필수 플러그인 TOP 10

### 1. Chrome DevTools MCP ⭐ 가장 추천

<Callout type="success" title="🔍 실시간 브라우저 디버깅">
현재 켜진 Chrome 브라우저를 Claude가 직접 분석합니다.
</Callout>

**기능:**
- 네트워크 요청 검사
- 콘솔 에러 확인
- 실시간 페이지 디버깅
- 로그인된 세션 활용

**활용 예시:**
```bash
"왜 이 요청이 실패했어?"
"LCP를 막고 있는 게 뭐야?"
"콘솔에 뜨는 에러 고쳐줘"

→ 실제 DevTools 상태 기반으로 답변
```

**설치:**
```bash
claude plugin add @anthropic/chrome-devtools-mcp
```

---

### 2. Figma MCP Server

<Callout type="tip" title="🎨 디자인 → 코드 직접 변환">
스크린샷 대신 실제 Figma 파일을 읽습니다.
</Callout>

**기능:**
- Figma 프레임 직접 읽기
- 컴포넌트 구조 분석
- 레이아웃 데이터 추출
- 디자인 시스템 반영

**활용 예시:**
```bash
"이 Figma 링크의 디자인을 React 컴포넌트로 만들어줘"
"Figma에서 버튼 컴포넌트 스타일 가져와서 적용해줘"

→ 디자인-코드 핸드오프 자동화
```

**설치:**
```bash
claude plugin add @anthropic/figma-mcp
```

**사전 준비:**
- Figma 계정 필요
- Personal Access Token 발급

---

### 3. Repomix 플러그인 (3종 세트)

<Callout type="info" title="📦 코드베이스 분석 전문가">
전체 프로젝트를 AI가 이해할 수 있는 형태로 변환합니다.
</Callout>

**세트 구성:**
1. **repomix-mcp**: 기본 기능 (필수)
2. **repomix-commands**: 슬래시 커맨드 추가
3. **repomix-explorer**: AI 분석 기능

**기능:**
- 프로젝트 구조 시각화
- 의존성 그래프 생성
- 코드 패턴 분석
- 리팩토링 기회 탐지

**설치:**
```bash
# 3개 모두 설치 (가장 포괄적)
claude plugin add @repomix/mcp
claude plugin add @repomix/commands
claude plugin add @repomix/explorer
```

**공식 문서:**
- [https://repomix.com/guide/claude-code-plugins](https://repomix.com/guide/claude-code-plugins)

---

### 4. The Deep Trilogy (기획 → 구현 자동화)

<Callout type="success" title="🚀 아이디어 → 완성 코드 자동화">
모호한 아이디어를 체계적으로 분해하고 구현합니다.
</Callout>

**3종 세트:**
1. **/deep-project**: 프로젝트 구조 설계
2. **/deep-plan**: 상세 실행 계획 수립
3. **/deep-implement**: 계획에 따라 코드 작성

**워크플로우:**
```bash
# 1단계: 프로젝트 정의
/deep-project "블로그 만들기"

→ 프로젝트 구조, 기술 스택, 데이터 모델 제안

# 2단계: 상세 계획
/deep-plan

→ 파일 구조, 함수 시그니처, 순서 정의

# 3단계: 구현
/deep-implement

→ 실제 코드 작성, 테스트 포함
```

**공식 글:**
- [The Deep Trilogy (Medium)](https://pierce-lamb.medium.com/the-deep-trilogy-claude-code-plugins-for-writing-good-software-fast-33b76f2a022d)

---

### 5. Ralph (자율 AI 루프)

<Callout type="warning" title="🔄 멈추지 않는 AI">
PRD 완료될 때까지 자율적으로 작업을 반복합니다.
</Callout>

**기능:**
- 자율 에이전트 루프
- PRD 항목 자동 완수
- 에러 발생 시 자동 수정
- 완료될 때까지 반복

**활용 예시:**
```bash
# PRD 파일 작성 후
ralph "이 PRD대로 앱을 완성해줘"

→ 모든 항목이 체크될 때까지 자동 작업
→ 중간에 에러 나도 스스로 해결
→ 완료 시 알림
```

**주의:**
- 장시간 실행될 수 있음
- 토큰 비용 주의
- 중요한 결정은 수동 확인

---

### 6. code-review (코드 리뷰 자동화)

**기능:**
- 베스트 프랙티스 검증
- 패턴 분석
- 개선 제안
- 보안 취약점 탐지

**활용:**
```bash
/code-review src/auth.ts

→ 상세한 리뷰 리포트 생성
```

---

### 7. test-writer-fixer (테스트 자동화)

**지원 프레임워크:**
- Jest
- Vitest
- Pytest
- 기타 주요 테스트 프레임워크

**기능:**
- 유닛 테스트 자동 생성
- 실패한 테스트 자동 수정
- 커버리지 개선 제안

**활용:**
```bash
"이 함수에 대한 테스트 만들어줘"

→ 엣지 케이스 포함한 테스트 생성
```

---

### 8. debugger (고급 디버깅)

**기능:**
- 복잡한 버그 추적
- 스택 트레이스 분석
- 근본 원인 파악
- 수정 방안 제시

**활용:**
```bash
"이 에러 메시지 분석해서 고쳐줘:
[스택 트레이스 붙여넣기]"

→ 단계별 디버깅 프로세스 실행
```

---

### 9. connect-apps (500+ 앱 연동)

<Callout type="tip" title="🔗 모든 앱과 연결">
Composio 기반으로 500개 이상의 앱과 자동 연동
</Callout>

**연동 가능한 앱:**
- 이메일 (Gmail, Outlook)
- 프로젝트 관리 (Jira, Linear, Asana)
- 커뮤니케이션 (Slack, Discord, Teams)
- 문서 (Notion, Google Docs)
- 기타 500+ 앱

**활용 예시:**
```bash
"배포 완료되면 Slack #dev 채널에 메시지 보내줘"
"Jira에서 버그 라벨 달린 이슈 가져와서 우선순위 정렬해줘"
"Gmail로 주간 리포트 자동 발송해줘"

→ 인증 자동 처리
→ API 연동 자동화
```

**설치:**
```bash
claude plugin add @composio/connect-apps
```

**공식 사이트:**
- [https://composio.dev/](https://composio.dev/)

---

### 10. Context7 MCP (최신 API 문서 자동 가져오기)

<Callout type="info" title="📚 항상 최신 문서 참조">
라이브러리 버전에 맞는 정확한 문서를 자동으로 가져옵니다.
</Callout>

**기능:**
- 패키지 최신 문서 자동 검색
- 버전별 API 차이 자동 반영
- 정확한 코드 예제 제공
- 더 이상 구글링 불필요

**활용 예시:**
```bash
"React 19의 useTransition 훅 어떻게 써?"

→ Context7이 React 19 공식 문서에서 정확한 사용법 가져옴
→ 예제 코드까지 자동 생성
```

**설치:**
```bash
claude mcp add @modelcontextprotocol/server-context7
```

**공식 사이트:**
- [https://context7.dev/](https://context7.dev/)

---

### 11. frontend-design (고품질 UI 디자인)

<Callout type="success" title="🎨 AI 스럽지 않은 디자인">
뻔한 AI 디자인을 벗어나 독창적인 인터페이스를 생성합니다.
</Callout>

**특징:**
- 대담한 타이포그래피
- 독특한 컬러 팔레트
- 창의적 레이아웃
- 프로덕션급 완성도

**활용:**
```bash
"랜딩 페이지 디자인해줘.
단, 흔한 AI 디자인 말고 차별화된 느낌으로"

→ 파란 버튼 대신 독특한 인터랙션
→ 평범한 레이아웃 대신 창의적 구성
```

---

## 🌟 추가 추천 플러그인 (2026 최신)

### Playwright MCP (브라우저 테스팅 전문)

<Callout type="success" title="🎭 E2E 테스트 자동화">
웹 애플리케이션 테스트를 Claude가 직접 작성하고 실행합니다.
</Callout>

**기능:**
- E2E 테스트 코드 자동 생성
- 브라우저 자동화 스크립트
- 다중 브라우저 테스트 (Chrome, Firefox, Safari)
- 스크린샷 및 비디오 녹화

**활용 예시:**
```bash
"로그인 → 프로필 수정 → 저장 플로우 E2E 테스트 만들어줘"

→ Playwright 코드 자동 생성
→ 테스트 실행 및 결과 리포트
```

**설치:**
```bash
claude mcp add @playwright/mcp-server
```

---

### Firecrawl (웹 데이터 추출)

**기능:**
- 웹 페이지 크롤링
- 구조화된 데이터 추출
- PDF, 이미지 데이터 파싱
- JavaScript 렌더링 지원

**활용 예시:**
```bash
"이 웹사이트에서 상품 정보 100개 크롤링해줘"

→ 자동으로 데이터 수집 및 JSON 변환
```

**설치:**
```bash
claude plugin add @firecrawl/mcp-server
```

**공식 사이트:**
- [https://www.firecrawl.dev/](https://www.firecrawl.dev/)

---

### tdd-guard (TDD 자동 강제)

<Callout type="warning" title="✅ 테스트 없으면 코드 없다">
테스트를 먼저 작성하도록 강제하는 플러그인입니다.
</Callout>

**기능:**
- 테스트 우선 작성 강제
- 코드 작성 전 테스트 케이스 요구
- 테스트 커버리지 80% 이상 자동 확인
- Red-Green-Refactor 사이클 자동화

**활용 예시:**
```bash
"로그인 함수 만들어줘"

→ tdd-guard: "먼저 테스트 케이스를 작성해주세요"
→ 테스트 작성 → 구현 → 리팩토링 순서 강제
```

**설치:**
```bash
claude plugin add @tdd/guard
```

---

### CCPlugins (생산성 플러그인 모음) ⭐ GitHub 2.6k stars

<Callout type="tip" title="🚀 커뮤니티가 인정한 플러그인">
실제 개발자가 만든, 실제로 시간을 절약해주는 플러그인 모음입니다.
</Callout>

**포함된 플러그인:**
- Smart commit: 변경 사항 자동 분석해서 커밋 메시지 생성
- Quick fix: 일반적인 에러 패턴 자동 수정
- Doc generator: 함수 주석 자동 생성
- Refactor assistant: 리팩토링 제안 및 실행

**특징:**
- 일반적인 프롬프트 입력 불필요
- 컨텍스트 기반 자동 작동
- 프로덕션 환경에서 검증됨

**설치:**
```bash
claude plugin add @ccplugins/productivity-pack
```

**공식 저장소:**
- [https://github.com/ccplugins/awesome-claude-code-plugins](https://github.com/ccplugins/awesome-claude-code-plugins)

---

### Continuous-Claude-v2 (컨텍스트 관리) ⭐ GitHub 2.2k stars

<Callout type="info" title="🧠 컨텍스트 오염 방지">
에이전트 간 컨텍스트를 분리하고 효율적으로 관리합니다.
</Callout>

**기능:**
- 상태 관리 (ledgers & handoffs)
- MCP 실행 시 컨텍스트 격리
- 에이전트 오케스트레이션
- 독립적인 컨텍스트 윈도우

**활용 예시:**
```bash
# 여러 에이전트가 동시에 작업할 때
# 서로의 컨텍스트가 섞이지 않도록 관리

→ 에이전트 A: 프론트엔드 작업
→ 에이전트 B: 백엔드 작업
→ 컨텍스트 분리로 효율 증대
```

**설치:**
```bash
claude plugin add @continuous-claude/v2
```

**공식 저장소:**
- [https://github.com/continuous-claude/continuous-claude-v2](https://github.com/continuous-claude/continuous-claude-v2)

---

### Sequential Thinking MCP (고급 문제 해결)

**기능:**
- 복잡한 문제를 단계별로 분해
- 장기 컨텍스트 유지
- 구조화된 사고 프로세스
- 아키텍처 결정 지원

**활용 예시:**
```bash
"마이크로서비스 아키텍처 설계 도와줘"

→ Step 1: 요구사항 분석
→ Step 2: 서비스 경계 정의
→ Step 3: 통신 패턴 선택
→ Step 4: 데이터베이스 전략
→ Step 5: 배포 계획
```

**설치:**
```bash
claude mcp add @anthropic/sequential-thinking
```

---

## 🛠️ 플러그인 관리

### 설치된 플러그인 확인

```bash
# 목록 보기
claude plugin list

# 출력 예시:
# @anthropic/deploy-helper v1.2.0
# @anthropic/chrome-devtools-mcp v2.0.1
# @repomix/mcp v3.1.0
```

### 플러그인 업데이트

```bash
# 특정 플러그인 업데이트
claude plugin update @anthropic/deploy-helper

# 모든 플러그인 업데이트
claude plugin update --all
```

### 플러그인 제거

```bash
# 제거
claude plugin remove @anthropic/deploy-helper

# 또는
/plugin uninstall deploy-helper
```

---

## 📍 설치 범위 (Scope)

### 사용자 레벨 vs 프로젝트 레벨

**사용자 레벨 (기본)**
```bash
# 모든 프로젝트에서 사용
claude plugin add @anthropic/code-review

→ ~/.claude/plugins/ 에 설치
→ 어떤 프로젝트든 사용 가능
```

**프로젝트 레벨**
```bash
# 현재 프로젝트에만 사용
claude plugin add @anthropic/deploy-helper --project

→ .claude/plugins/ 에 설치
→ 이 프로젝트에서만 활성화
```

**언제 프로젝트 레벨을 쓰나?**
- 특정 코드베이스 전용 플러그인
- 팀원과 공유해야 하는 플러그인
- 프로젝트별 설정이 다른 경우

**언제 사용자 레벨을 쓰나?**
- 개인 취향 (코드 포맷터, 테마)
- 모든 프로젝트에서 쓰는 도구
- 개인 워크플로우 도구

---

## 👥 팀 설정

### 플러그인 공유하기

**.claude/settings.json 사용:**
```json
{
  "marketplaces": [
    "anthropics/skills",
    "myteam/custom-plugins"
  ],
  "plugins": [
    "@anthropic/code-review",
    "@anthropic/test-writer"
  ]
}
```

**팀원이 설정 받기:**
```bash
# 1. 저장소 클론
git clone https://github.com/team/project

# 2. 폴더 신뢰 설정
# (Claude Code가 자동으로 물어봄)

# 3. 플러그인 자동 설치
# → .claude/settings.json 읽고 자동 설치
```

---

## 🔍 플러그인 찾기

### 카테고리별 추천

**웹 개발**
- frontend-design: UI/UX 디자인
- tailwind-helper: TailwindCSS 자동 완성
- react-specialist: React 패턴 제안

**데이터 분석**
- pandas-helper: Pandas 코드 생성
- sql-optimizer: SQL 쿼리 최적화
- chart-generator: 차트 자동 생성

**테스트 & 품질**
- test-writer-fixer: 테스트 자동화
- code-review: 코드 리뷰
- security-scanner: 보안 스캔

**브라우저 자동화**
- playwright-helper: Playwright 스크립트
- chrome-devtools-mcp: DevTools 연동
- web-scraper: 웹 스크래핑

**통합 & 자동화**
- connect-apps: 500+ 앱 연동
- github-automation: GitHub 자동화
- slack-notifier: Slack 알림

---

## 🎓 플러그인 사용 팁

### 1. 플러그인 조합 (Combo)

**프론트엔드 개발 세트:**
```bash
claude plugin add @anthropic/figma-mcp
claude plugin add @anthropic/frontend-design
claude plugin add @anthropic/tailwind-helper

→ 디자인 → 코드 → 스타일링 자동화
```

**테스트 자동화 세트:**
```bash
claude plugin add @anthropic/test-writer-fixer
claude plugin add @anthropic/code-review
claude plugin add @anthropic/debugger

→ 테스트 → 리뷰 → 디버깅 완전 자동화
```

**프로젝트 관리 세트:**
```bash
claude plugin add @anthropic/deep-project
claude plugin add @anthropic/deep-plan
claude plugin add @anthropic/deep-implement
claude plugin add @composio/connect-apps

→ 기획 → 계획 → 구현 → 배포 알림
```

---

### 2. 플러그인 우선순위

**충돌 방지:**
```bash
# 같은 기능의 플러그인이 여러 개면
# 먼저 설치한 것이 우선

# 우선순위 변경:
.claude/settings.json에서 순서 조정
```

---

### 3. 플러그인 비활성화 (임시)

```bash
# 제거하지 않고 임시로 끄기
claude plugin disable @anthropic/heavy-plugin

# 다시 켜기
claude plugin enable @anthropic/heavy-plugin
```

---

## 📚 플러그인 개발

### 나만의 플러그인 만들기

**공식 문서:**
- [https://code.claude.com/docs/en/plugins](https://code.claude.com/docs/en/plugins)
- [https://github.com/anthropics/claude-code/blob/main/plugins/README.md](https://github.com/anthropics/claude-code/blob/main/plugins/README.md)

**튜토리얼:**
- [How to Build Claude Code Plugins (DataCamp)](https://www.datacamp.com/tutorial/how-to-build-claude-code-plugins)

**보일러플레이트:**
```bash
# 공식 템플릿 클론
git clone https://github.com/halans/cc-marketplace-boilerplate
cd cc-marketplace-boilerplate

# 커스터마이징
# → 필요에 맞게 수정

# 로컬 테스트
claude plugin add ./my-plugin

# 마켓플레이스에 공유
# → GitHub에 푸시
# → 마켓플레이스에 등록
```

---

## 🌐 마켓플레이스 모음

### 공식 & 커뮤니티

| 마켓플레이스 | 링크 | 특징 |
|------------|------|------|
| **Anthropic 공식** | [GitHub](https://github.com/anthropics/claude-plugins-official) | 공식 관리, 고품질 |
| **Claude Marketplaces** | [claudemarketplaces.com](https://claudemarketplaces.com/) | 140+ 플러그인 |
| **Claude Plugins Dev** | [claude-plugins.dev](https://claude-plugins.dev/) | 커뮤니티 레지스트리 |
| **Claude Code Plugins IO** | [claudecodeplugins.io](https://claudecodeplugins.io/) | 스킬 허브 |
| **awesome-claude-plugins** | [GitHub](https://github.com/Chat2AnyLLM/awesome-claude-plugins) | 큐레이션 리스트 |
| **Composio Plugins** | [GitHub](https://github.com/ComposioHQ/awesome-claude-plugins) | 500+ 앱 연동 |

---

## 🚨 필수 조건 (Prerequisites)

플러그인 사용 전 확인:

- [ ] **Claude Code 설치됨**
  ```bash
  claude --version
  ```

- [ ] **Node.js 18+ 설치**
  ```bash
  node --version
  # v18.0.0 이상이어야 함
  ```

- [ ] **npm 설치**
  ```bash
  npm --version
  ```

- [ ] **IDE 지원** (선택사항)
  - VS Code
  - JetBrains IDE (IntelliJ, WebStorm 등)

---

## 💡 문제 해결

### 플러그인 설치 실패

**증상:**
```
Error: Plugin installation failed
```

**해결:**
```bash
# 1. 캐시 삭제
claude plugin cache clear

# 2. 재설치
claude plugin add [plugin-name]

# 3. 여전히 안 되면 로그 확인
claude --debug plugin add [plugin-name]
```

---

### 플러그인 충돌

**증상:**
```
Warning: Multiple plugins provide the same command
```

**해결:**
```bash
# .claude/settings.json 편집
{
  "plugins": {
    "priority": [
      "preferred-plugin",
      "other-plugin"
    ]
  }
}
```

---

### 플러그인 느림

**해결:**
```bash
# 사용 안 하는 플러그인 제거
claude plugin remove [unused-plugin]

# 또는 비활성화
claude plugin disable [heavy-plugin]
```

---

## 📊 플러그인 통계 (2026년 2월 기준)

| 지표 | 수치 |
|------|------|
| 전체 플러그인 수 | 9,000+ |
| 공식 플러그인 | 140+ |
| 일평균 신규 플러그인 | 20-30개 |
| 가장 많이 설치된 플러그인 | code-review (50k+) |
| 가장 활발한 카테고리 | 웹 개발 |

---

## 🎯 마무리

<Callout type="success" title="✅ 핵심 요약">
1. `/plugin` 명령어로 마켓플레이스 접근
2. 필수 10개 플러그인 먼저 설치
3. 프로젝트별 vs 전역 설치 구분
4. 플러그인 조합으로 워크플로우 최적화
5. 막히면 공식 문서 참고
</Callout>

플러그인은 클로드코드를 10배 강력하게 만듭니다. 처음엔 필수 10개만 설치하고, 필요에 따라 하나씩 추가하세요!

**Sources:**
- [Claude Code Plugin Marketplace](https://claudemarketplaces.com/)
- [Official Plugin Discovery Docs](https://code.claude.com/docs/en/discover-plugins)
- [Anthropic Official Plugins (GitHub)](https://github.com/anthropics/claude-plugins-official)
- [awesome-claude-plugins (GitHub)](https://github.com/Chat2AnyLLM/awesome-claude-plugins)
- [Claude Tools Plugin Marketplace](https://paddo.dev/blog/claude-tools-plugin-marketplace/)
- [Repomix Claude Code Plugins Guide](https://repomix.com/guide/claude-code-plugins)
- [Top 10 Claude Code Plugins 2026](https://www.firecrawl.dev/blog/best-claude-code-plugins)
- [Claude Code Plugin Creation Guide](https://code.claude.com/docs/en/plugins)
- [Getting Started with Plugins (Skywork)](https://skywork.ai/blog/claude-code-plugin-beginner-installation-setup-guide/)
- [Claude Code Plugins README (GitHub)](https://github.com/anthropics/claude-code/blob/main/plugins/README.md)
- [How to Build Plugins Tutorial (DataCamp)](https://www.datacamp.com/tutorial/how-to-build-claude-code-plugins)
- [Improving Workflow with Plugins (Composio)](https://composio.dev/blog/claude-code-plugin)
- [Plugin Installation & Management Guide](https://claudecodeplugins.dev/article/how-to-install-and-manage-plugins)
- [The Deep Trilogy (Medium)](https://pierce-lamb.medium.com/the-deep-trilogy-claude-code-plugins-for-writing-good-software-fast-33b76f2a022d)
- [50+ Best MCP Servers](https://claudefa.st/blog/tools/mcp-extensions/best-addons)
