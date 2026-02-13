---
title: "🎓 튜토리얼 3: Subagent로 복잡한 프로젝트 (60분)"
description: "5. 실전 튜토리얼 (Step-by-Step)"
order: 3
---

**목표**: 블로그 시스템 만들기 (기획 → 구현 → 테스트)
**난이도**: ⭐⭐⭐ 고급
**준비물**: 클로드코드, 오마이클로드 설치


---

## Step 1: 플랜 모드로 시작

```bash
# Shift + Tab + Tab 누르기
/plan "마크다운 기반 블로그 시스템 만들기"
```

**Claude의 계획서 예시:**
```
1. 프로젝트 구조 설계
2. 마크다운 파서 구현
3. 블로그 포스트 목록 페이지
4. 개별 포스트 페이지
5. 다크모드 + 반응형 디자인
6. 검색 기능
```


---

## Step 2: Subagent 활용

**Explore로 참고 코드 분석:**
```
"Next.js 블로그 예제 코드를 Explore Subagent로 분석해줘.
특히 마크다운 렌더링 부분을 집중적으로."
```

**Implementer로 구현:**
```
"Plan에 따라 파일 구조 만들고 기본 코드 작성해줘.
General-purpose Subagent 사용해서 진행."
```

**Test Runner로 검증:**
```
"작성한 코드에 대해 테스트 케이스 작성하고 실행해줘."
```


---

## Step 3: Skill 생성

```yaml
# .claude/skills/blog-conventions/SKILL.md
---
name: blog-conventions
description: 블로그 포스트 작성 규칙
---

# 블로그 포스트 규칙
1. 파일명: YYYY-MM-DD-title.md
2. Frontmatter 필수:
   - title
   - date
   - tags
   - description
3. 이미지는 /public/images/ 저장
4. 코드 블록은 언어 명시
```


---

## Step 4: 통합 및 배포

```bash
# 모든 기능 테스트
npm run dev

# 문제 발생 시
/compact
"에러 로그: [에러 메시지 붙여넣기]
Security Subagent로 보안 검토도 해줘"

# 배포
vercel --prod
```

**🎉 완성된 블로그 시스템!**

**학습 포인트:**
- ✅ 플랜 모드로 체계적 접근
- ✅ Subagent로 역할 분담
- ✅ Skill로 일관성 유지
- ✅ 단계별 검증

---