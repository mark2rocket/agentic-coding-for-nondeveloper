---
title: "🏗️ 에이전트 오케스트레이션 아키텍처"
description: "4. 에이전트 오케스트레이션"
order: 3
---

### 🏗️ 에이전트 오케스트레이션 아키텍처

```mermaid
graph TB
    subgraph "👤 사용자 레이어"
        USER[사용자<br/>"블로그 만들어줘"]
    end

    subgraph "🎯 매니저 레이어"
        MANAGER[매니저 에이전트<br/>Task 분배 & 조율]
    end

    subgraph "🤖 작업 에이전트 레이어"
        PLANNER[📋 Planner<br/>기획 & 요구사항]
        ARCHITECT[🏛️ Architect<br/>구조 설계]
        EXECUTOR[⚙️ Executor<br/>코드 작성]
        REVIEWER[🔍 Reviewer<br/>코드 검증]
        TESTER[🧪 Tester<br/>테스트 실행]
    end

    subgraph "📦 도구 레이어"
        GIT[Git<br/>버전관리]
        NPM[NPM<br/>패키지 설치]
        BUILD[Build<br/>빌드 시스템]
        DEPLOY[Deploy<br/>배포]
    end

    USER --> MANAGER

    MANAGER --> PLANNER
    MANAGER --> ARCHITECT
    MANAGER --> EXECUTOR
    MANAGER --> REVIEWER
    MANAGER --> TESTER

    PLANNER -.->|기획서| ARCHITECT
    ARCHITECT -.->|설계도| EXECUTOR
    EXECUTOR -->|코드| REVIEWER
    REVIEWER -.->|피드백| EXECUTOR
    REVIEWER -->|승인| TESTER

    EXECUTOR --> GIT
    EXECUTOR --> NPM
    TESTER --> BUILD
    TESTER --> DEPLOY

    MANAGER -->|최종 결과| USER

    style USER fill:#e1f5ff
    style MANAGER fill:#ffe1e1
    style PLANNER fill:#fff4e1
    style ARCHITECT fill:#fff4e1
    style EXECUTOR fill:#fff4e1
    style REVIEWER fill:#e1ffe1
    style TESTER fill:#e1ffe1
```

**아키텍처 설명:**

| 레이어 | 역할 | 특징 |
|-------|------|------|
| 👤 **사용자** | 최종 의사결정 | "무엇을" 만들지만 지시 |
| 🎯 **매니저** | 작업 분배 & 조율 | Context 관리, 에이전트 간 통신 |
| 🤖 **작업 에이전트** | 전문 작업 수행 | 각자 역할에 집중 (Single Responsibility) |
| 📦 **도구** | 실제 실행 | Git, NPM, Build 등 시스템 명령 |

---