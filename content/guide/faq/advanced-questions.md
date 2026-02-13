---
title: "🎓 고급 질문"
description: "7. 자주 묻는 질문 (FAQ)"
order: 3
---

## Q8: Subagent는 언제 써야 하나요?

**사용 시기 (신호):**

**1. 컨텍스트 과부하**
```
증상:
- 대화 길이 45% 초과
- AI가 이전 내용 잊어버림
- /compact 후에도 품질 저하

해결: Explore/Plan Subagent로 분리
```

**2. 독립적인 작업**
```
예시:
- 코드 리뷰 (Security Reviewer)
- 테스트 작성 (Test Runner)
- 문서 생성 (Documentation Writer)

해결: 커스텀 Subagent 생성
```

**3. 역할 분담 필요**
```
예시:
- 대규모 리팩토링
- 여러 파일 동시 수정
- 복잡한 디버깅

해결: General-purpose Subagent
```

**사용 예시:**
```
"Explore Subagent로 인증 관련 파일 찾아줘"
"Security Subagent로 XSS 취약점 검사해줘"
"Test Runner Subagent로 테스트 실행해줘"
```

---


---

## Q9: MCP는 필수인가요?

**필수 아님**: MCP 없이도 충분히 개발 가능

**있으면 매우 좋은 경우:**

**1. GitHub 헤비 유저**
```
✅ 이슈/PR 자주 관리
✅ 여러 리포지토리 작업
✅ 코드 리뷰 많음

효과: 탭 전환 제거, 30% 시간 절약
```

**2. 팀 협업**
```
✅ Slack으로 소통
✅ Jira로 이슈 관리
✅ Notion으로 문서화

효과: 통합 워크플로우
```

**3. 데이터 중심 작업**
```
✅ DB 쿼리 자주 실행
✅ API 테스트 반복
✅ 데이터 분석

효과: 직접 연동, 검증 자동화
```

**선택 가이드:**
```
초보자: MCP 건너뛰기 → 기본 학습에 집중
중급자: GitHub MCP만 설정 → 효과 체험
고급자: 여러 MCP 통합 → 워크플로우 최적화
```

---


---

## Q10: 혼자 배우기 힘든데요?

**커뮤니티 & 리소스:**

**한국어 커뮤니티:**
- Discord: [Claude Code 한국 사용자 모임]
- 카카오톡: [에이전틱 코딩 오픈챗]
- 슬랙: [AI 코딩 크루]

**영어 커뮤니티:**
- Reddit: r/ClaudeCode
- GitHub Discussions: anthropics/claude-code
- Discord: Claude Official Server

**학습 자료:**
- YouTube: "Claude Code Tutorial"
- GitHub: awesome-claude-skills (5.5k stars)
- 블로그: claude.ai/blog

**1:1 도움:**
- Anthropic 공식 지원: support@anthropic.com
- Stack Overflow: [claude-code] 태그

**오프라인 모임:**
- 판교/강남 코딩 모임
- 대학 AI 동아리
- 스타트업 커뮤니티

**멘토링:**
- 오프소스 기여로 시작
- Code Review 요청
- 페어 프로그래밍 연습

---