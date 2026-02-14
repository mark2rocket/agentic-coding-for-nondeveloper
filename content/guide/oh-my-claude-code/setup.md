---
title: "5-3. 오 마이 클로드코드 기초 셋업"
order: 3
---

**설명**: 확장팩이 제공하는 설정 파일을 내 입맛에 맞게 수정합니다.

**예시**: `config.json` 파일을 열어서 `auto_save: true` (자동 저장 켜기), `language: "ko"` (한국어 설정) 등으로 바꿉니다.

**부연 설명**: 기본 설정만 써도 훌륭하지만, 설정을 만지면 나만의 비서를 완벽하게 커스터마이징 할 수 있습니다. 예를 들어, 특정 모델(Opus, Sonnet)을 고정하거나, 토큰 사용량을 제한하는 등의 설정을 할 수 있습니다.

<Callout type="tip" title="한줄 요약">
설정 파일에서 언어와 자동 저장 옵션만 켜도 충분합니다.
</Callout>

---

## 🚀 오 마이 클로드코드 핵심 기능

<Callout type="success" title="멀티 에이전트 오케스트레이션">
오 마이 클로드코드(OMC)는 Claude Code를 멀티 에이전트 시스템으로 변환합니다. 32개의 전문 에이전트, 40+ 스킬, 그리고 지능형 워크플로우를 제공합니다.
</Callout>

### 핵심 특징

**1. 32개 전문 에이전트**
- `executor`: 코드 구현 전문
- `architect`: 시스템 설계 전문
- `debugger`: 버그 추적 전문
- `planner`: 실행 계획 수립
- `verifier`: 완료 검증
- `test-engineer`: 테스트 전략
- `security-reviewer`: 보안 검토
- `designer`: UI/UX 디자인
- 그 외 24개 전문 에이전트

**2. 5가지 실행 모드**

#### Autopilot (자율 주행)
- 완전 자율적 실행
- 단일 스레드 방식
- 아이디어 → 완성 코드 자동화

```bash
/oh-my-claudecode:autopilot "블로그 만들어줘"
```

#### Ultrapilot (병렬 자율 주행) ⭐ 3-5배 빠름
- 5개 워커 병렬 실행
- 파일 소유권 분할
- 대규모 프로젝트에 최적

```bash
/oh-my-claudecode:ultrapilot "전자상거래 플랫폼 만들어줘"
```

#### Ultrawork (최대 병렬 처리)
- 무제한 병렬 에이전트
- 고속 작업 완료
- 복잡한 태스크 자동 분산

```bash
/oh-my-claudecode:ultrawork "API + 프론트엔드 + 테스트 동시 작업"
```

#### Ralph (완료될 때까지 반복)
- 자기 참조 루프
- 에러 자동 수정
- 완료될 때까지 멈추지 않음

```bash
/oh-my-claudecode:ralph "이 PRD대로 완성해줘"
```

#### Ecomode (토큰 효율)
- Haiku + Sonnet 조합
- 비용 절감 모드
- 간단한 작업에 최적

```bash
/oh-my-claudecode:ecomode "README 작성해줘"
```

---

### 주요 기능

**3. 자동 병렬화**
- 독립적인 작업 자동 감지
- 동시 실행으로 시간 절약
- 최대 5개 작업 병렬 처리

**4. 토큰 사용량 최적화**
- 자동 비용 추적
- 작업별 토큰 분석
- 최적 모델 자동 선택

**5. 영구 Python REPL**
- 세션 간 변수 유지
- 데이터 분석 작업 연속성
- 실험 결과 자동 저장

**6. 자동 스킬 학습**
- 대화 패턴 자동 감지
- 재사용 가능한 스킬 생성
- 워크플로우 자동화

**7. 컨텍스트 관리**
- 상태 파일 기반 관리
- 에이전트 간 데이터 전달
- 메모리 효율적 운영

---

## ⚙️ 기본 설정

### 설정 파일 위치

```bash
~/.claude/.omc-config.json
```

### 기본 설정 예시

```json
{
  "defaultExecutionMode": "ultrawork",
  "tokenBudget": {
    "daily": 100000,
    "perTask": 10000
  },
  "parallelism": {
    "maxConcurrent": 5,
    "autoDetect": true
  },
  "logging": {
    "level": "info",
    "saveTranscripts": true
  },
  "language": "ko"
}
```

---

## 🎯 사용 시나리오

### 시나리오 1: 대규모 프로젝트 (Ultrapilot)

```bash
/oh-my-claudecode:ultrapilot "
풀스택 블로그 플랫폼 만들어줘:
- Next.js 프론트엔드
- Express.js 백엔드
- PostgreSQL 데이터베이스
- JWT 인증
- 마크다운 에디터
- 댓글 시스템
"

→ 5개 에이전트가 병렬로 작업
→ 소요 시간: 약 15분 (일반적으론 1-2시간)
```

---

### 시나리오 2: 버그 수정 (Ralph)

```bash
/oh-my-claudecode:ralph "
production 브랜치에서 발견된 로그인 버그 고쳐줘:
- 에러 재현
- 원인 분석
- 수정
- 테스트
- PR 생성
"

→ 완료될 때까지 자동 반복
→ 에러 나도 스스로 해결
```

---

### 시나리오 3: 빠른 작업 (Ecomode)

```bash
/oh-my-claudecode:ecomode "
README.md 업데이트해줘:
- 설치 방법
- 사용 예제
- API 문서
"

→ Haiku 사용으로 비용 절감
→ 간단한 작업에 최적
```

---

## 📊 성능 비교

| 모드 | 속도 | 비용 | 적합한 작업 |
|------|-----|------|----------|
| **기본 Claude Code** | 1x | 보통 | 단순 작업 |
| **Autopilot** | 1.5x | 보통 | 자율 실행 |
| **Ultrapilot** | 3-5x | 높음 | 대규모 프로젝트 |
| **Ultrawork** | 2-3x | 높음 | 병렬 작업 |
| **Ralph** | 변동 | 높음 | 완료 보장 |
| **Ecomode** | 1x | 낮음 | 간단한 작업 |

---

## 💡 설정 팁

<Callout type="tip" title="최적 설정 가이드">
**초보자:**
- `defaultExecutionMode: "autopilot"`
- `maxConcurrent: 2`
- 기본 설정 사용

**중급자:**
- `defaultExecutionMode: "ultrawork"`
- `maxConcurrent: 3-5`
- 토큰 예산 설정

**고급자:**
- 프로젝트별 모드 선택
- 커스텀 에이전트 생성
- 워크플로우 자동화
</Callout>

---

## 🔍 상태 파일 위치

OMC는 작업 상태를 다음 위치에 저장합니다:

```bash
{프로젝트}/.omc/state/

# 파일 목록
- autopilot-state.json
- ultrawork-state.json
- ralph-state.json
- notepad.md
- project-memory.json
```

---

## 🚨 주의사항

1. **토큰 비용**: 병렬 모드는 더 많은 토큰을 사용합니다
2. **작업 범위**: 너무 큰 프로젝트는 분할하세요
3. **검증**: 자동 완료된 작업도 항상 확인하세요
4. **백업**: 중요한 작업 전 Git 커밋

---

## 📚 추가 학습

**공식 문서:**
- [https://ohmyclaudecode.com/](https://ohmyclaudecode.com/)
- [GitHub 저장소](https://github.com/oh-my-claudecode/oh-my-claudecode)

**커뮤니티:**
- Discord: OMC 커뮤니티
- GitHub Discussions

---

**Sources:**
- [oh-my-claudecode: Boost Claude Code with Multi‑Agent Automation](https://aibit.im/blog/post/oh-my-claudecode-boost-claude-code-with-multi-agent-automation)
- [oh-my-claudecode Official Site](https://ohmyclaudecode.com/)
- [GitHub - ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)
