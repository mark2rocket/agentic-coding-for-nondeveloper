---
title: "4-5. 클로드코드 스킬"
order: 5
---

## 스킬이란? -- "업무 매뉴얼 & 도구"

<Callout type="info" title="회사 조직으로 이해하기">

회사에 새 직원이 입사하면 **업무 매뉴얼(SOP)** 을 받죠.

"이 업무는 이렇게 처리하세요"라고 적힌 절차서가 있으면, 매번 설명하지 않아도 **일관된 품질**로 업무를 수행할 수 있습니다.

스킬이 바로 이 **"업무 매뉴얼"** 입니다.

- 반복되는 작업의 **표준 절차서(SOP)**
- 특정 도구 사용법을 정리한 **가이드북**
- 한 번 만들어두면 **계속 재사용** 가능

</Callout>

**공식 정의**: Skill은 Claude에게 특정 작업 방법을 가르치는 **마크다운 파일**입니다. 패턴을 학습하고 필요할 때 자동으로 적용합니다.

---

## 왜 스킬이 필요한가?

<LevelBox title="스킬 없이 매번 지시하면?">

매번 이렇게 말해야 합니다:

- "커밋 메시지는 feat, fix, docs 같은 접두사를 붙이고, 50자 이하로 쓰고, 본문은 72자에서 줄바꿈하고..."
- "회의록은 참석자, 안건, 논의 내용, 액션 아이템 순서로 정리하고..."
- "블로그 글은 서론-본론-결론 구조로, 소제목마다 핵심 요약을 넣고..."

**반복 낭비**가 엄청나죠.

</LevelBox>

<LevelBox title="스킬을 만들어두면?">

한 마디면 됩니다:

- "커밋 메시지 작성해줘" -- 스킬이 형식을 알아서 적용
- "회의록 정리해줘" -- 스킬이 템플릿대로 정리
- "블로그 글 써줘" -- 스킬이 톤과 구조를 자동 적용

한 번 만들어두면 **매번 설명할 필요 없이** 일관된 품질이 나옵니다.

</LevelBox>

---

## 스킬의 똑똑한 비밀: 토큰 절약

<Callout type="success" title="필요할 때만 꺼내 쓰는 매뉴얼">

여러분 회사 책상에 매뉴얼이 20권 있다고 상상해 보세요.

- 20권을 항상 펼쳐놓으면? 책상이 난장판 (= 컨텍스트 낭비)
- 평소에는 **제목만 기억**하고, 필요할 때 해당 매뉴얼만 꺼내면? 깔끔!

스킬도 동일합니다:
- 처음에는 **이름과 설명만 로드** (약 100토큰, 매우 적음)
- AI가 "이 작업에 이 스킬이 필요하겠다" 판단하면 **그때 전체 내용을 로드**
- 불필요한 스킬은 로드하지 않아 **비용과 성능 모두 최적화**

</Callout>

---

## 스킬 저장 위치

```bash
# 사용자 레벨 (모든 프로젝트에 적용) -- 개인 업무 매뉴얼
~/.claude/skills/your-skill-name/SKILL.md

# 프로젝트 레벨 (특정 프로젝트만) -- 팀 업무 매뉴얼
.claude/skills/your-skill-name/SKILL.md
```

---

## SKILL.md 기본 구조

```yaml
---
name: code-review-standards
---

# 코드 리뷰 표준
1. 가독성: 명확한 변수명 사용
2. 성능: O(n) 이하 복잡도 유지
3. 테스트: 새 함수마다 유닛테스트 작성
4. 문서화: 복잡한 로직에 주석 필수
```

**핵심 포인트**:
- **Description이 중요**: Claude가 Skill 적용 여부를 결정할 때 제목과 설명을 봅니다
- **컨텍스트 절약**: 초기에는 이름과 설명만 로드(약 100토큰), 필요할 때만 전체 로드
- **참고 파일 추가 가능**: 긴 자료는 별도 파일로 분리해서 같은 폴더에 넣으면 됩니다

---

## 비개발자를 위한 활용 사례

<Callout type="tip" title="이런 용도로 스킬을 만들어 보세요">

**일상 업무 자동화:**
- PPT/슬라이드 구조 자동 생성
- 노션 페이지 정리 템플릿
- PDF 분석 후 요약 보고서 작성
- 이메일 답장 톤 가이드

**콘텐츠 제작:**
- 블로그 글 작성 형식
- SNS 포스팅 톤앤매너
- 뉴스레터 템플릿
- 유튜브 대본 구조

**팀 협업:**
- 회의록 작성 표준
- 주간 리포트 형식
- 업무 인수인계 체크리스트
- 고객 응대 스크립트

</Callout>

---

## 스킬 + 서브에이전트 + 훅의 조합

<Callout type="success" title="세 가지가 함께 작동하는 실전 시나리오">

**시나리오: "이번 달 마케팅 리포트 만들어줘" 한마디로 완성**

1. **스킬(업무 매뉴얼)**: "마케팅 리포트 스킬"이 형식, 포함 항목, 톤을 정의
2. **서브에이전트(전문가 직원)**: 데이터 분석 담당이 수치를 정리하고, 글작가가 인사이트 작성
3. **훅(자동 장치)**: 리포트 완성 시 팀 슬랙 채널에 자동 공유

스킬이 **"어떻게 만들지"를 정의**하고, 서브에이전트가 **"누가 만들지"를 담당**하고, 훅이 **"만든 후 뭘 할지"를 자동화**합니다.

</Callout>

---

<Callout type="tip" title="한줄 요약">
자주 시키는 일은 'SKILL.md'로 만들어서 AI에게 장착시키세요. 업무 효율이 10배 오릅니다.
</Callout>

---

## 추천 스킬 TOP 10 (2026)

<Callout type="success" title="즉시 사용 가능">
아래 스킬들은 커뮤니티에서 검증된 생산성 향상 스킬입니다. 복사해서 바로 사용하세요!
</Callout>

### 1. Commit Message Convention (커밋 메시지 표준화)

**저장 위치:** `~/.claude/skills/commit-convention/SKILL.md`

```yaml
---
name: commit-convention
---

# Commit Message Convention

커밋 메시지는 다음 형식을 따릅니다:

```
[type]([scope]): [subject]

[body]

[footer]
```

## Type (필수)
- feat: 새 기능
- fix: 버그 수정
- docs: 문서 변경
- style: 코드 포맷팅 (기능 변경 없음)
- refactor: 코드 리팩토링
- test: 테스트 추가/수정
- chore: 빌드 작업, 설정 변경

## Examples
- `feat(auth): add login with Google`
- `fix(api): handle null response`
- `docs: update README with installation steps`

## Rules
- Subject는 50자 이하
- Body는 72자에서 줄바꿈
- Footer에 이슈 번호 포함 (예: Closes #123)
```

---

### 2. Code Review Standards (코드 리뷰 기준)

**저장 위치:** `~/.claude/skills/code-review/SKILL.md`

```yaml
---
name: code-review-standards
---

# Code Review Standards

## 체크리스트

### 1. 가독성
- [ ] 변수명이 명확한가?
- [ ] 함수는 하나의 역할만 하는가?
- [ ] 복잡한 로직에 주석이 있는가?

### 2. 성능
- [ ] 불필요한 반복문이 없는가?
- [ ] 메모리 누수 가능성은?
- [ ] 캐싱이 필요한가?

### 3. 보안
- [ ] 사용자 입력 검증이 있는가?
- [ ] SQL 인젝션 방지가 되어있는가?
- [ ] 민감 정보가 로그에 노출되지 않는가?

### 4. 테스트
- [ ] 유닛 테스트가 있는가?
- [ ] 엣지 케이스 테스트는?
- [ ] 테스트 커버리지 80% 이상인가?

### 5. 문서화
- [ ] README 업데이트 필요한가?
- [ ] API 문서가 있는가?
- [ ] 주요 함수에 JSDoc/Docstring이 있는가?
```

---

### 3. Meeting Notes Template (회의록 템플릿)

**저장 위치:** `~/.claude/skills/meeting-notes/SKILL.md`

```yaml
---
name: meeting-notes
---

# Meeting Notes Template

## 회의 정보
- **날짜:** YYYY-MM-DD
- **참석자:** 이름1, 이름2, 이름3
- **주제:** 회의 제목

## 안건
1. 안건 1
2. 안건 2
3. 안건 3

## 논의 내용

### 안건 1: [제목]
- 논의 사항
- 결정 사항
- 액션 아이템

### 안건 2: [제목]
- 논의 사항
- 결정 사항
- 액션 아이템

## 액션 아이템
| 담당자 | 할 일 | 기한 |
|--------|------|------|
| 이름1 | 작업 내용 | YYYY-MM-DD |
| 이름2 | 작업 내용 | YYYY-MM-DD |

## 다음 회의
- **날짜:** YYYY-MM-DD
- **안건:** 다음 회의 주제
```

---

### 4. API Documentation (API 문서화)

**저장 위치:** `~/.claude/skills/api-docs/SKILL.md`

```yaml
---
name: api-documentation
---

# API Documentation Format

## Endpoint Template

```yaml
paths:
  /api/resource:
    get:
      summary: 리소스 목록 조회
      description: 모든 리소스를 페이지네이션하여 반환
      parameters:
        - name: page
          in: query
          required: false
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          required: false
          schema:
            type: integer
            default: 20
      responses:
        200:
          description: 성공
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Resource'
                  meta:
                    type: object
                    properties:
                      total:
                        type: integer
                      page:
                        type: integer
        400:
          description: 잘못된 요청
        401:
          description: 인증 실패
```

## 필수 포함 사항
- HTTP 메서드 (GET, POST, PUT, DELETE)
- 엔드포인트 경로
- 요청 파라미터
- 요청 바디 (POST, PUT)
- 응답 형식
- 에러 코드
```

---

### 5. Database Query Patterns (데이터베이스 쿼리 패턴)

**저장 위치:** `~/.claude/skills/db-queries/SKILL.md`

```yaml
---
name: database-query-patterns
---

# Database Query Best Practices

## 원칙
1. **인덱스 활용**: WHERE, JOIN 컬럼에 인덱스 생성
2. **SELECT *피하기**: 필요한 컬럼만 명시
3. **N+1 문제 방지**: JOIN 또는 Eager Loading 사용
4. **페이지네이션**: LIMIT, OFFSET 또는 커서 기반

## Good Practices

### 좋은 예
```sql
SELECT id, name, email
FROM users
WHERE status = 'active'
  AND created_at >= '2026-01-01'
ORDER BY created_at DESC
LIMIT 20;
```

### 나쁜 예
```sql
SELECT * FROM users;  -- 모든 컬럼 불필요
```

## ORM 사용 시
```javascript
// Eager Loading
const users = await User.findAll({
  include: [{ model: Post }]
});

// N+1 문제
const users = await User.findAll();
for (const user of users) {
  const posts = await Post.findAll({ where: { userId: user.id } });
}
```
```

---

### 6. Weekly Summary (주간 리포트)

**저장 위치:** `~/.claude/skills/weekly-summary/SKILL.md`

```yaml
---
name: weekly-summary
---

# Weekly Summary Template

## 기간
YYYY-MM-DD ~ YYYY-MM-DD

## 완료한 작업
1. **[프로젝트명]**
   - 작업 내용 1
   - 작업 내용 2
   - 성과: (정량적 지표)

2. **[프로젝트명]**
   - 작업 내용
   - 성과: (정량적 지표)

## 진행 중인 작업
1. 작업명 (진행률: 60%)
2. 작업명 (진행률: 30%)

## 다음 주 계획
1. 할 일 1 (예상 소요: 2일)
2. 할 일 2 (예상 소요: 3일)

## 이슈 & 블로커
- 이슈 1: 해결 방법 또는 도움 요청
- 이슈 2: 해결 방법 또는 도움 요청

## 지표
- 배포 횟수: N회
- 해결한 버그: N개
- 작성한 테스트: N개
- 코드 리뷰: N개
```

---

### 7. Error Handling (에러 처리 패턴)

**저장 위치:** `~/.claude/skills/error-handling/SKILL.md`

```yaml
---
name: error-handling
---

# Error Handling Patterns

## 원칙
1. **명시적 에러 처리**: try-catch 사용
2. **에러 타입 구분**: 복구 가능 vs 불가능
3. **로깅**: 에러 스택, 컨텍스트 포함
4. **사용자 친화적 메시지**: 기술 용어 피하기

## JavaScript/TypeScript
```typescript
async function fetchUser(id: string): Promise<User> {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new NotFoundError(`User ${id} not found`);
    }
    if (error.response?.status >= 500) {
      logger.error('Server error', { error, userId: id });
      throw new ServerError('서비스 일시적 장애');
    }
    throw error;
  }
}
```

## Python
```python
def fetch_user(user_id: str) -> User:
    try:
        response = api.get(f"/users/{user_id}")
        response.raise_for_status()
        return User(**response.json())
    except requests.HTTPError as e:
        if e.response.status_code == 404:
            raise UserNotFoundError(f"User {user_id} not found")
        elif e.response.status_code >= 500:
            logger.error("Server error", exc_info=True, extra={"user_id": user_id})
            raise ServerError("서비스 일시적 장애")
        raise
```
```

---

### 8. Habit Tracking (습관 추적)

**저장 위치:** `~/.claude/skills/habit-tracking/SKILL.md`

```yaml
---
name: habit-tracking
---

# Daily Habit Tracker

## 날짜: YYYY-MM-DD

### 오늘의 습관
- [ ] 운동 (30분)
- [ ] 독서 (30분)
- [ ] 코딩 (2시간)
- [ ] 물 2L 마시기
- [ ] 명상 (10분)

### 주간 현황 (월~일)
| 습관 | 월 | 화 | 수 | 목 | 금 | 토 | 일 | 완료율 |
|-----|---|---|---|---|---|---|---|----|
| 운동 | O | O | X | O | O | O | O | 86% |
| 독서 | O | X | O | O | O | X | O | 71% |

### 인사이트
- 잘한 점:
- 개선할 점:
- 다음 주 목표:
```

---

### 9. Project Setup Checklist (프로젝트 초기 설정)

**저장 위치:** `~/.claude/skills/project-setup/SKILL.md`

```yaml
---
name: project-setup
---

# Project Setup Checklist

## 초기 설정
- [ ] Git 저장소 생성
- [ ] .gitignore 설정
- [ ] README.md 작성
- [ ] LICENSE 선택

## 개발 환경
- [ ] Node.js / Python 버전 명시
- [ ] 패키지 매니저 (npm, yarn, pnpm)
- [ ] ESLint / Prettier 설정
- [ ] EditorConfig 추가

## 테스트
- [ ] 테스트 프레임워크 설치
- [ ] CI/CD 파이프라인 설정
- [ ] 코드 커버리지 도구

## 문서화
- [ ] API 문서
- [ ] 기여 가이드 (CONTRIBUTING.md)
- [ ] 코드 오브 컨덕트 (CODE_OF_CONDUCT.md)

## 보안
- [ ] 환경 변수 (.env.example)
- [ ] 시크릿 관리 (GitHub Secrets, Vault)
- [ ] 의존성 취약점 검사

## 배포
- [ ] 배포 플랫폼 선택 (Vercel, AWS, GCP)
- [ ] 도메인 연결
- [ ] HTTPS 설정
- [ ] 모니터링 도구 (Sentry, DataDog)
```

---

### 10. Weekly Schedule (주간 일정 관리)

**저장 위치:** `~/.claude/skills/weekly-schedule/SKILL.md`

```yaml
---
name: weekly-schedule
---

# Weekly Schedule Template

## 주간 계획: YYYY-MM-DD ~ YYYY-MM-DD

### 월요일
- **09:00-10:00** 주간 계획 수립
- **10:00-12:00** 집중 작업 (딥워크)
- **13:00-14:00** 회의
- **14:00-17:00** 개발 작업
- **17:00-18:00** 코드 리뷰 & 피드백

### 화요일
- **09:00-12:00** 집중 작업 (딥워크)
- **13:00-15:00** 개발 작업
- **15:00-16:00** 1:1 미팅
- **16:00-18:00** 개발 작업

### 수요일
- **09:00-12:00** 집중 작업 (딥워크)
- **13:00-14:00** 팀 회의
- **14:00-18:00** 개발 작업

### 목요일
- **09:00-12:00** 집중 작업 (딥워크)
- **13:00-18:00** 개발 작업

### 금요일
- **09:00-12:00** 개발 작업
- **13:00-15:00** 배포 및 테스트
- **15:00-16:00** 주간 회고
- **16:00-18:00** 학습 & 실험

## 주간 목표
1. 목표 1
2. 목표 2
3. 목표 3

## 시간 배분 원칙
- **딥워크:** 하루 3-4시간 (가장 중요한 작업)
- **회의:** 하루 2시간 이하
- **학습:** 주당 4시간 이상
- **휴식:** 매 2시간마다 15분
```

---

## 스킬 설치 방법

### 방법 1: 수동 생성 (추천)

```bash
# 1. 스킬 폴더 생성
mkdir -p ~/.claude/skills/commit-convention

# 2. SKILL.md 파일 생성
touch ~/.claude/skills/commit-convention/SKILL.md

# 3. 위 내용을 복사해서 붙여넣기
```

### 방법 2: 커뮤니티 스킬 설치

```bash
# 스킬 마켓플레이스에서 검색
# (아직 공식 마켓플레이스는 플러그인만 지원, 스킬은 수동 설치)
```

---

## 스킬 활용 팁

<Callout type="tip" title="효과적인 스킬 사용법">

1. **처음엔 5개만**: 모든 스킬을 한 번에 추가하지 마세요
2. **프로젝트별 커스터마이징**: 팀 규칙에 맞게 수정하세요
3. **정기적 업데이트**: 사용하면서 계속 개선하세요
4. **팀과 공유**: `.claude/skills/`을 Git에 커밋해서 팀원과 공유

</Callout>

---

**Sources:**
- [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)
- [awesome-claude-skills (GitHub)](https://github.com/ComposioHQ/awesome-claude-skills)
- [Best Productivity Skills 2026](https://ohmyopenclaw.ai/blog/best-openclaw-productivity-skills-2026/)
