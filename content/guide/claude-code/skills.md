---
title: "4-5. 클로드코드 스킬"
description: "4. 클로드코드"
order: 5
---

**설명**: 클로드코드에게 반복적인 업무 수행 방법이나 외부 도구 사용법을 가르치는 '업무 매뉴얼'입니다. "Skill은 Claude에게 특정 작업 방법을 가르치는 마크다운 파일"로, 패턴을 학습하고 자동으로 적용합니다.

**저장 위치**:
```bash
# 사용자 레벨 (모든 프로젝트에 적용)
~/.claude/skills/your-skill-name/SKILL.md

# 프로젝트 레벨 (특정 프로젝트만)
.claude/skills/your-skill-name/SKILL.md
```

**SKILL.md 기본 구조**:
```yaml
---
name: code-review-standards
description: PR 검토나 개선사항 제안 시 팀 표준 적용
---

# 코드 리뷰 표준
1. 가독성: 명확한 변수명 사용
2. 성능: O(n) 이하 복잡도 유지
3. 테스트: 새 함수마다 유닛테스트 작성
4. 문서화: 복잡한 로직에 주석 필수
```

**핵심 포인트**:
- **Description이 중요**: Claude가 Skill 적용 여부를 결정할 때 사용
- **컨텍스트 절약**: 초기에는 이름과 설명만 로드(~100토큰), 필요할 때만 전체 로드
- **참고 파일 추가 가능**: 긴 자료는 별도 파일로 분리

**활용 사례**:
- 커밋 메시지 컨벤션 (Conventional Commits)
- 데이터베이스 쿼리 패턴
- API 문서 형식
- 회의 노트 템플릿
- 개인 워크플로우

<Callout type="tip" title="💡 한줄 요약">
자주 시키는 일은 'SKILL.md'로 만들어서 AI에게 장착시키세요. 업무 효율이 10배 오릅니다.
</Callout>

---

## 🏆 추천 스킬 TOP 10 (2026)

<Callout type="success" title="✅ 즉시 사용 가능">
아래 스킬들은 커뮤니티에서 검증된 생산성 향상 스킬입니다. 복사해서 바로 사용하세요!
</Callout>

### 1. Commit Message Convention (커밋 메시지 표준화)

**저장 위치:** `~/.claude/skills/commit-convention/SKILL.md`

```yaml
---
name: commit-convention
description: Git 커밋 메시지를 Conventional Commits 표준으로 작성
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
description: 코드 리뷰 시 팀 표준 적용
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
description: 회의록을 구조화된 형식으로 작성
---

# Meeting Notes Template

## 📅 회의 정보
- **날짜:** YYYY-MM-DD
- **참석자:** 이름1, 이름2, 이름3
- **주제:** 회의 제목

## 🎯 안건
1. 안건 1
2. 안건 2
3. 안건 3

## 📝 논의 내용

### 안건 1: [제목]
- 논의 사항
- 결정 사항
- 액션 아이템

### 안건 2: [제목]
- 논의 사항
- 결정 사항
- 액션 아이템

## ✅ 액션 아이템
| 담당자 | 할 일 | 기한 |
|--------|------|------|
| 이름1 | 작업 내용 | YYYY-MM-DD |
| 이름2 | 작업 내용 | YYYY-MM-DD |

## 📌 다음 회의
- **날짜:** YYYY-MM-DD
- **안건:** 다음 회의 주제
```

---

### 4. API Documentation (API 문서화)

**저장 위치:** `~/.claude/skills/api-docs/SKILL.md`

```yaml
---
name: api-documentation
description: RESTful API 문서를 OpenAPI 3.0 형식으로 작성
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
description: 효율적인 데이터베이스 쿼리 작성 가이드
---

# Database Query Best Practices

## 원칙
1. **인덱스 활용**: WHERE, JOIN 컬럼에 인덱스 생성
2. **SELECT *피하기**: 필요한 컬럼만 명시
3. **N+1 문제 방지**: JOIN 또는 Eager Loading 사용
4. **페이지네이션**: LIMIT, OFFSET 또는 커서 기반

## Good Practices

### ✅ 좋은 예
```sql
SELECT id, name, email
FROM users
WHERE status = 'active'
  AND created_at >= '2026-01-01'
ORDER BY created_at DESC
LIMIT 20;
```

### ❌ 나쁜 예
```sql
SELECT * FROM users;  -- 모든 컬럼 불필요
```

## ORM 사용 시
```javascript
// ✅ Eager Loading
const users = await User.findAll({
  include: [{ model: Post }]
});

// ❌ N+1 문제
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
description: 주간 업무 리포트 작성
---

# Weekly Summary Template

## 📆 기간
YYYY-MM-DD ~ YYYY-MM-DD

## ✅ 완료한 작업
1. **[프로젝트명]**
   - 작업 내용 1
   - 작업 내용 2
   - 성과: (정량적 지표)

2. **[프로젝트명]**
   - 작업 내용
   - 성과: (정량적 지표)

## 🚧 진행 중인 작업
1. 작업명 (진행률: 60%)
2. 작업명 (진행률: 30%)

## 📝 다음 주 계획
1. 할 일 1 (예상 소요: 2일)
2. 할 일 2 (예상 소요: 3일)

## 🚨 이슈 & 블로커
- 이슈 1: 해결 방법 또는 도움 요청
- 이슈 2: 해결 방법 또는 도움 요청

## 📊 지표
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
description: 에러 처리 베스트 프랙티스
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
description: 일일 습관 체크 및 주간 리뷰
---

# Daily Habit Tracker

## 📅 날짜: YYYY-MM-DD

### ✅ 오늘의 습관
- [ ] 운동 (30분)
- [ ] 독서 (30분)
- [ ] 코딩 (2시간)
- [ ] 물 2L 마시기
- [ ] 명상 (10분)

### 📊 주간 현황 (월~일)
| 습관 | 월 | 화 | 수 | 목 | 금 | 토 | 일 | 완료율 |
|-----|---|---|---|---|---|---|---|----|
| 운동 | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | 86% |
| 독서 | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | 71% |

### 💡 인사이트
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
description: 새 프로젝트 시작 시 체크리스트
---

# Project Setup Checklist

## 📦 초기 설정
- [ ] Git 저장소 생성
- [ ] .gitignore 설정
- [ ] README.md 작성
- [ ] LICENSE 선택

## 🔧 개발 환경
- [ ] Node.js / Python 버전 명시
- [ ] 패키지 매니저 (npm, yarn, pnpm)
- [ ] ESLint / Prettier 설정
- [ ] EditorConfig 추가

## 🧪 테스트
- [ ] 테스트 프레임워크 설치
- [ ] CI/CD 파이프라인 설정
- [ ] 코드 커버리지 도구

## 📚 문서화
- [ ] API 문서
- [ ] 기여 가이드 (CONTRIBUTING.md)
- [ ] 코드 오브 컨덕트 (CODE_OF_CONDUCT.md)

## 🔐 보안
- [ ] 환경 변수 (.env.example)
- [ ] 시크릿 관리 (GitHub Secrets, Vault)
- [ ] 의존성 취약점 검사

## 🚀 배포
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
description: 주간 일정 템플릿 및 시간 배분
---

# Weekly Schedule Template

## 📆 주간 계획: YYYY-MM-DD ~ YYYY-MM-DD

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

## 🎯 주간 목표
1. 목표 1
2. 목표 2
3. 목표 3

## ⏰ 시간 배분 원칙
- **딥워크:** 하루 3-4시간 (가장 중요한 작업)
- **회의:** 하루 2시간 이하
- **학습:** 주당 4시간 이상
- **휴식:** 매 2시간마다 15분
```

---

## 📥 스킬 설치 방법

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

## 💡 스킬 활용 팁

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
