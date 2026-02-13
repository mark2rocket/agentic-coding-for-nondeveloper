---
title: "4-7. 클로드코드 훅"
description: "4. 클로드코드"
order: 7
---

**설명**: 특정 이벤트가 발생하면 자동으로 반응하는 스크립트입니다. 반복적인 작업을 자동화하여 실수를 줄여줍니다.

**위치**:
```bash
~/.claude/hooks/          # 전역 훅
.claude/hooks/            # 프로젝트별 훅
```

**주요 Hooks 종류**:

| Hook | 실행 시점 | 활용 예시 |
|------|---------|---------|
| **pre-commit** | 커밋 전 | 린트/포맷 자동 실행 |
| **post-save** | 파일 저장 후 | 테스트 자동 실행 |
| **on-error** | 에러 발생 시 | 에러 로깅 |
| **session-start** | 세션 시작 시 | 환경 설정 |

**예시 - pre-commit 훅**:
```bash
# .claude/hooks/pre-commit.sh
#!/bin/bash
echo "🔍 린트 검사 실행 중..."
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ 린트 에러 발견. 커밋 취소."
  exit 1
fi
echo "✅ 린트 통과"
```

<Callout type="tip" title="💡 한줄 요약">
Hooks로 린트, 테스트, 포맷을 자동화하면 AI가 알아서 챙겨줍니다.
</Callout>
