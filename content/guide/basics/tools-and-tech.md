---
title: "1-3. 개발을 돕는 도구들 (Tools & Tech)"
description: "1. 기초 개발 용어 (Categorized Flow)"
order: 3
---

### 1-3. 개발을 돕는 도구들 (Tools & Tech)

맨땅에 헤딩하지 않기 위한 도구

#### 라이브러리 (Library)

**Level.1:** 레고 블록 상자입니다. 내가 필요한 블록(바퀴, 창문)만 골라서 내 마음대로 조립합니다.

**Level.2:** 개발에 자주 쓰이는 기능(예: 차트 그리기, 날짜 계산)을 미리 만들어 모아둔 코드 묶음입니다. 필요할 때 가져다 씁니다.

**Level.3:** 개발자가 코드의 제어권을 가집니다. 대표적으로 React(UI 라이브러리), jQuery 등이 있습니다.

```javascript
// 날짜 라이브러리 사용 예시
import dayjs from 'dayjs';
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
```

**한줄 요약:** AI에게 "차트 그리는 라이브러리 써서 그래프 만들어줘"라고 하세요.

#### 프레임워크 (Framework)

**Level.1:** 모델 하우스입니다. 이미 방 구조와 배관이 다 짜여 있고, 나는 가구만 배치하면 됩니다.

**Level.2:** 뼈대와 규칙이 정해져 있는 개발 환경입니다. 내가 코드를 짤 때 이 틀의 규칙을 따라야만 작동합니다.

**Level.3:** 제어의 역전(IoC)이 일어납니다. 프레임워크가 내 코드를 호출합니다. 대표적으로 Next.js, Django가 있습니다.

```javascript
// Next.js 프레임워크 규칙에 따른 페이지 생성
export default function Home() {
  return <h1>홈페이지</h1>;  // 프레임워크가 이 함수를 호출
}
```

**한줄 요약:** "Next.js 프레임워크 기반으로 프로젝트 세팅해줘"라고 시작하세요.

#### Node.js & Next.js & Typescript

**Level.1:** Node.js는 자바스크립트를 컴퓨터에서도 돌아가게 하는 엔진, Next.js는 웹사이트 제작 키트, Typescript는 깐깐한 자바스크립트입니다.

**Level.2:** Node.js는 브라우저 밖에서 JS를 실행하는 환경(런타임), Next.js는 리액트 기반의 강력한 프레임워크, Typescript는 에러 방지를 위해 변수 타입을 미리 정하는 언어입니다.

**Level.3:** 최신 웹 개발의 표준 스택입니다. Node.js 위에서 Next.js 프레임워크를 쓰고, 언어는 안정성을 위해 Typescript를 사용합니다.

```typescript
// Typescript: 타입을 미리 지정
interface User {
  name: string;
  age: number;
}

// Next.js 페이지
export default function Page() {
  const user: User = { name: "김철수", age: 25 };
  return <div>{user.name}</div>;
}
```

**한줄 요약:** AI에게 "Node.js 환경에서 Typescript와 Next.js를 써서 개발해줘"가 가장 무난한 주문입니다.

#### MCP (Model Context Protocol)

**Level.1:** AI 비서가 여러 가지 도구를 사용할 수 있게 해주는 '만능 어댑터'입니다. 하나의 충전기로 여러 기기를 연결하듯, MCP로 AI가 다양한 프로그램을 사용할 수 있습니다.

**Level.2:** "MCP는 AI 모델이 외부 도구와 데이터 소스에 접근 가능하게 하는 표준 프로토콜"입니다. Claude가 깃허브나 노션 같은 서비스에 직접 접근할 수 있게 만들어줍니다. **탭 전환 없이 하나의 세션에서 모든 작업 완료**가 핵심입니다.

**Level.3:** Anthropic이 만든 개방형 프로토콜로, LLM이 표준화된 방식으로 외부 도구 및 데이터 소스와 통합할 수 있게 합니다. 서버-클라이언트 아키텍처로 구성되며, JSON-RPC 2.0 기반으로 통신합니다.

**CLI 설정 방법:**
```bash
# HTTP 전송 (원격 서버)
claude mcp add --transport http <name> <url>

# 예: Notion 연동
claude mcp add --transport http notion https://mcp.notion.com/mcp

# 인증 포함
claude mcp add --transport http github https://api.github.com/mcp \
  --header "Authorization: Bearer your-token"
```

**웹 앱 설정 (더 쉬운 방법):**
```
Settings → Connectors → 서버 찾기 → Configure → 권한 부여
```

**실전 활용 사례:**

| 활용 분야 | 예시 명령 |
|----------|---------|
| **이슈 추적** | "JIRA ENG-4521 기능 구현" |
| **데이터 쿼리** | "지난 주 가입자 찾기 (PostgreSQL)" |
| **디자인 통합** | "Figma 디자인 기반 이메일 템플릿" |
| **채널 분석** | "#engineering 채널 API 결정사항" |
| **PR 관리** | "이 PR 코드 검토" |

**권장 MCP 서버:**
- **GitHub**: 리포 관리, 이슈, PR, 코드 검색
- **Slack**: 채널 기록, 스레드 요약, 메시지 검색
- **Google Drive**: 구현 중 참조 문서
- **PostgreSQL/DB**: 직접 쿼리
- **Linear/Jira**: 이슈 통합

**⚠️ 보안 주의사항:**
타사 MCP 서버는 Anthropic 검증 없음 → 민감한 통합은 소스 코드 검토 필수

**한줄 요약:** MCP로 GitHub/Slack/Notion 연결하면 탭 전환 없이 모든 작업을 Claude 안에서 완료할 수 있습니다.