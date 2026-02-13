---
title: "5-4. 오 마이 클로드코드 명령어"
order: 4
---

OMC는 강력한 워크플로우 명령어를 제공합니다. 자연언어로 요청하면 자동으로 적절한 모드가 실행됩니다.

<Callout type="success" title="✨ Magic Keywords">
OMC는 특정 키워드를 감지하면 자동으로 해당 모드를 실행합니다. 명령어를 외울 필요가 없습니다!
</Callout>

---

## 🚀 워크플로우 명령어

### autopilot (자율 실행)

**키워드:** `autopilot`, `build me`, `I want a`

**설명:** 아이디어부터 완성 코드까지 자율적으로 실행합니다.

**사용 예시:**
```bash
autopilot: "블로그 만들어줘"
autopilot: "To-Do 앱 만들어줘"

# 또는 자연언어로
"I want a todo app with authentication"
```

**특징:**
- 완전 자율 실행
- 단일 스레드 방식
- 초보자에게 가장 추천

---

### ultrapilot (병렬 자율 실행) ⭐ 3-5배 빠름

**키워드:** `ultrapilot`, `parallel build`

**설명:** 5개 워커가 병렬로 작업하여 3-5배 빠른 속도로 실행합니다.

**사용 예시:**
```bash
ultrapilot: "전자상거래 플랫폼 만들어줘"
ultrapilot: "대시보드 앱 만들어줘"
```

**특징:**
- 5개 워커 병렬 실행
- 파일 소유권 분할
- 대규모 프로젝트에 최적

---

### ralph (완료될 때까지 반복)

**키워드:** `ralph`, `don't stop`, `must complete`

**설명:** PRD(요구사항 문서) 완료될 때까지 자동으로 반복 작업합니다.

**사용 예시:**
```bash
ralph: "이 PRD대로 앱 완성해줘"
ralph: "버그 모두 고쳐줘"

# 또는
"don't stop until all tests pass"
```

**특징:**
- 자기 참조 루프
- 에러 자동 수정
- 완료될 때까지 멈추지 않음

---

### ulw / ultrawork (최대 병렬 처리)

**키워드:** `ulw`, `ultrawork`, `fast`, `parallel`

**설명:** 무제한 병렬 에이전트로 최고 속도 실행합니다.

**사용 예시:**
```bash
ulw: "API + 프론트엔드 + 테스트 동시 작업"
ultrawork: "모든 에러 고쳐줘"

# 또는
"fast: fix all errors in parallel"
```

**특징:**
- 무제한 병렬 처리
- 고속 작업 완료
- 복잡한 태스크 자동 분산

---

### eco / ecomode (토큰 효율)

**키워드:** `eco`, `ecomode`, `budget`

**설명:** Haiku + Sonnet 조합으로 비용 절감 모드 실행합니다.

**사용 예시:**
```bash
eco: "README 작성해줘"
ecomode: "코드 포맷팅 해줘"

# 또는
"budget: add comments to code"
```

**특징:**
- 비용 절감
- 간단한 작업에 최적
- Haiku와 Sonnet 자동 선택

---

### team (팀 오케스트레이션)

**키워드:** `team`, `coordinated team`

**설명:** N개 에이전트가 협업하여 작업합니다.

**사용 예시:**
```bash
/oh-my-claudecode:team 3:executor "에러 고쳐줘"
/oh-my-claudecode:team 5:architect "시스템 설계해줘"

# 또는
"team: build frontend with 3 agents"
```

**특징:**
- 에이전트 수 지정 가능
- 작업 분배 자동화
- 협업 모드

---

### plan (전략적 계획)

**키워드:** `plan this`, `plan the`

**설명:** 실행 전 전략적 계획을 수립합니다.

**사용 예시:**
```bash
plan: "API 설계해줘"
plan the authentication system

# Shift+Tab으로도 진입 가능
```

**특징:**
- 6단계 자동 파이프라인
- consensus 모드 지원
- review 모드 지원

---

## 🛠️ 유틸리티 명령어

### omc wait (Rate Limit 관리)

**설명:** API Rate Limit을 자동으로 관리합니다.

**사용 예시:**
```bash
# 상태 확인
omc wait

# 자동 재개 데몬 시작
omc wait --start

# 데몬 중지
omc wait --stop
```

**언제 사용하나요?**
- Rate Limit 에러가 발생했을 때
- 장시간 작업 시 자동으로 대기하고 싶을 때

---

### omc doctor (문제 해결)

**설명:** OMC 설치 및 설정 문제를 진단하고 해결합니다.

**사용 예시:**
```bash
/oh-my-claudecode:doctor
```

**진단 항목:**
- 플러그인 설치 상태
- 설정 파일 유효성
- 캐시 문제
- 의존성 확인

---

### cancel (모드 취소)

**설명:** 실행 중인 OMC 모드를 취소합니다.

**사용 예시:**
```bash
/oh-my-claudecode:cancel

# 강제 취소 (모든 상태 파일 삭제)
/oh-my-claudecode:cancel --force
```

---

## 📋 명령어 치트 시트

| 상황 | 명령어 | 속도 | 비용 |
|------|--------|------|------|
| **간단한 작업** | `eco: 작업` | 보통 | 낮음 |
| **일반 작업** | `autopilot: 작업` | 보통 | 보통 |
| **빠른 실행** | `ulw: 작업` | 빠름 | 높음 |
| **대규모 프로젝트** | `ultrapilot: 작업` | 매우 빠름 | 높음 |
| **완료 보장** | `ralph: 작업` | 변동 | 높음 |
| **계획 먼저** | `plan: 작업` | - | 낮음 |

---

## 💡 명령어 선택 가이드

<Callout type="tip" title="어떤 명령어를 써야 할까?">
**초보자:**
- `autopilot` 또는 `eco` 사용
- 자연언어로 요청하면 자동 감지

**중급자:**
- 작업 크기에 따라 선택
- 작은 작업: `eco`
- 중간 작업: `autopilot`
- 큰 작업: `ultrapilot`

**고급자:**
- 상황에 맞는 모드 직접 선택
- `ralph`로 완료 보장
- `team`으로 협업 최적화
</Callout>

---

## 🔄 모드 전환

실행 중에도 모드를 전환할 수 있습니다:

```bash
# autopilot 실행 중
"이제 ralph 모드로 전환해서 계속해줘"

→ 자동으로 ralph 모드로 전환
```

---

## 📚 상세 사용법

각 명령어의 고급 기능은 다음 페이지에서 확인하세요:
- [5-5. 활용 꿀팁](/docs/guide/oh-my-claude-code/tips) - 실전 활용 예시

---

<Callout type="success" title="✅ 핵심 요약">
1. **자연언어 사용**: 키워드만 포함하면 자동 실행
2. **상황별 선택**: 작업 크기와 예산에 맞게 선택
3. **걱정 없이 시도**: 언제든 `cancel`로 취소 가능
</Callout>

**공식 문서:** [https://ohmyclaudecode.com/](https://ohmyclaudecode.com/)
