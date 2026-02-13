---
title: "4-3. 클로드코드 기초 셋업"
description: "4. 클로드코드"
order: 3
---

**설명**: 설치 후 앤스로픽 계정으로 로그인하고, 작업할 폴더를 연결하는 과정입니다.

**예시**:

```bash
# 터미널에 입력
claude login                    # 브라우저 인증
mkdir my-project               # 폴더 생성
cd my-project                  # 폴더 진입
claude                         # 실행
```

**부연 설명**: 로그인은 최초 1회만 하면 됩니다. 중요한 것은 '폴더 위치'입니다. 클로드 코드는 현재 터미널이 위치한 폴더를 자신의 '작업실'로 인식합니다. 따라서 엉뚱한 곳에서 실행하지 않도록, 항상 `cd` 명령어로 내가 작업할 폴더로 이동한 뒤에 `claude`를 실행해야 합니다. 실행하면 "무엇을 도와드릴까요?"라고 묻는데, 이때부터 한국어로 대화를 시작하면 됩니다.

<Callout type="tip" title="💡 한줄 요약">
로그인하고, 작업할 폴더로 들어가서, 'claude'라고 이름을 부르면 준비 끝입니다.
</Callout>

---

## 🔌 필수 MCP 서버 설정 (선택사항, 추천)

MCP(Model Context Protocol) 서버는 Claude Code가 외부 도구와 연결되어 더 강력한 기능을 사용할 수 있게 해줍니다.

<Callout type="info" title="💡 MCP란?">
MCP는 Claude Code를 GitHub, 데이터베이스, 브라우저 등 외부 서비스와 연결해주는 다리입니다. 설치하면 Claude가 이런 서비스들을 직접 조작할 수 있습니다.
</Callout>

### TOP 7 필수 MCP 서버

#### 1. GitHub MCP ⭐ 가장 추천

**기능:**
- GitHub 저장소 직접 조작
- 이슈, PR 자동 생성
- CI/CD 워크플로우 관리

**설치:**
```bash
claude mcp add @anthropic/github
```

---

#### 2. Context7 MCP (최신 문서 자동 가져오기)

**기능:**
- 라이브러리 최신 문서 자동 검색
- API 사용법 정확한 예제 제공
- 버전별 차이 자동 반영

**활용 예시:**
```bash
"React 19의 useTransition 훅 사용법 알려줘"
→ Context7이 최신 공식 문서를 가져와서 정확한 예제 제공
```

**설치:**
```bash
claude mcp add @modelcontextprotocol/server-context7
```

---

#### 3. File System MCP

**기능:**
- 로컬 파일 관리
- 세밀한 권한 제어
- 복잡한 리팩토링 지원

**설치:**
```bash
claude mcp add @anthropic/filesystem
```

---

#### 4. Playwright MCP (브라우저 자동화)

**기능:**
- 웹 애플리케이션 E2E 테스트
- 브라우저 자동화
- 웹 워크플로우 자동화

**활용 예시:**
```bash
"로그인 → 대시보드 → 프로필 수정 E2E 테스트 만들어줘"
→ Playwright 코드 자동 생성 및 실행
```

**설치:**
```bash
claude mcp add @playwright/mcp-server
```

---

#### 5. PostgreSQL MCP

**기능:**
- 자연어로 데이터베이스 쿼리
- 스키마 자동 분석
- 쿼리 최적화 제안

**설치:**
```bash
claude mcp add @anthropic/postgresql
```

---

#### 6. Brave Search MCP

**기능:**
- 웹 검색 통합
- 최신 정보 실시간 조회
- API 한도 없는 검색

**설치:**
```bash
claude mcp add @brave/search-mcp
```

---

#### 7. Sequential Thinking MCP (고급 문제 해결)

**기능:**
- 복잡한 문제를 단계별로 분해
- 장기 컨텍스트 유지
- 아키텍처 결정 및 디버깅에 탁월

**활용 예시:**
```bash
"마이크로서비스 아키텍처 설계 도와줘"
→ 단계별 사고 과정을 거쳐 체계적인 설계 제안
```

**설치:**
```bash
claude mcp add @anthropic/sequential-thinking
```

---

### MCP 설정 파일

설치한 MCP는 다음 위치에 저장됩니다:

```bash
~/.claude/mcp_settings.json
```

**예시 설정 파일:**
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-github"],
      "env": {
        "GITHUB_TOKEN": "your_token_here"
      }
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-context7"]
    }
  }
}
```

---

### 사용 팁

<Callout type="tip" title="💡 MCP 선택 가이드">
**초보자:**
- GitHub MCP
- Context7 MCP
- File System MCP

→ 이 3개만 설치해도 충분합니다!

**중급자:**
- 위 3개 + Playwright MCP
- PostgreSQL MCP (데이터베이스 사용 시)

**고급자:**
- 모든 MCP + Sequential Thinking
</Callout>

**주의사항:**
- MCP를 너무 많이 설치하면 Claude Code 시작이 느려질 수 있습니다
- 필요한 것만 선택적으로 설치하세요
- 평균적으로 2-3개 정도가 적당합니다

---

**Sources:**
- [Top 10 Essential MCP Servers for Claude Code](https://apidog.com/blog/top-10-mcp-servers-for-claude-code/)
- [Best MCP Servers for Claude Code](https://mcpcat.io/guides/best-mcp-servers-for-claude-code/)
- [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp)
