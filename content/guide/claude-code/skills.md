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
