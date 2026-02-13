---
title: "1-5. 작업 관리와 수정 (Workflow)"
description: "1. 기초 개발 용어 (Categorized Flow)"
order: 5
---

코드를 저장하고 고치는 법


## 버그 (Bug) vs 디버깅 (Debugging)

**Level.1**: 버그는 프로그램 고장, 디버깅은 고장 난 곳을 찾아 고치는 수리 과정입니다.

**Level.2**: 버그는 코드 오류로 인한 오작동, 디버깅은 로그 등을 확인해 오류 원인을 찾고 해결하는 행위입니다.

**Level.3**: 논리적 오류나 예외 상황(Exception)을 추적하여 코드를 수정하는 프로세스입니다.

```javascript
// 버그 (오타로 인한 에러)
const total = price * quanity;  // ❌ quanity는 정의되지 않음

// 디버깅 후 수정
const total = price * quantity;  // ✅ 올바른 변수명
```

<Callout type="tip" title="💡 한줄 요약">
"버그가 발생했어. 에러 로그를 줄 테니 디버깅해줘"라고 시키세요.
</Callout>


## 깃 (Git) & 깃허브 (Github)

**Level.1**: 깃은 게임의 '세이브 포인트' 기능, 깃허브는 세이브 파일을 모아두는 '클라우드 공유 폴더'입니다.

**Level.2**: 깃은 내 컴퓨터에서 코드 변경 내역을 관리하는 프로그램, 깃허브는 깃으로 저장한 내역을 온라인에 업로드하여 협업하는 사이트입니다.

**Level.3**: Git은 분산 버전 관리 시스템(VCS)이고, Github는 Git 리포지토리 호스팅 서비스입니다.

<Callout type="tip" title="💡 한줄 요약">
"코드 수정할 때마다 깃으로 커밋하고, 깃허브에 백업해줘"라고 하세요.
</Callout>


## 커밋 (Commit), 푸시 (Push), 풀 (Pull)

**Level.1**: 커밋은 '저장 버튼', 푸시는 '업로드', 풀은 '다운로드'입니다.

**Level.2**: 커밋은 변경 사항을 기록(확정)하는 것, 푸시는 내 기록을 깃허브(원격)로 보내는 것, 풀은 깃허브의 최신 코드를 내 컴퓨터로 가져오는 것입니다.

**Level.3**: 로컬 저장소에 스냅샷을 저장(Commit)하고, 원격 저장소에 동기화(Push/Pull)하는 명령어입니다.

```bash
git add .                    # 변경사항 스테이징
git commit -m "버그 수정"     # 커밋 (로컬에 저장)
git push origin main         # 푸시 (깃허브에 업로드)
git pull origin main         # 풀 (깃허브에서 다운로드)
```

**한줄 요약**: "작업 끝났으면 커밋하고 푸시해줘"라고 하면 됩니다.