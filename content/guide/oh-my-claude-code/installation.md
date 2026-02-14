---
title: "5-2. 오 마이 클로드코드 설치법"
order: 2
---

오 마이 클로드코드(OMC)는 Claude Code의 공식 플러그인 시스템을 통해 설치합니다.

<Callout type="warning" title="필수 조건">
Claude Code가 먼저 설치되어 있어야 합니다. [4-2. 클로드코드 설치](/docs/guide/claude-code/installation)를 먼저 완료하세요.
</Callout>

---

## 📦 설치 방법

### 1단계: 마켓플레이스 추가

터미널에서 Claude Code를 실행한 후:

```bash
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode
```

**설명:** OMC 플러그인 마켓플레이스를 Claude Code에 등록합니다.

---

### 2단계: 플러그인 설치

```bash
/plugin install oh-my-claudecode
```

**설명:** OMC 플러그인을 설치합니다. 약 1-2분 소요됩니다.

---

### 3단계: 초기 설정

```bash
/oh-my-claudecode:omc-setup
```

**설명:** OMC의 초기 설정을 실행합니다. 이 단계에서:
- 에이전트 템플릿 설치
- 기본 설정 파일 생성
- 필요한 디렉토리 구조 생성

---

## ✅ 설치 확인

설치가 완료되었는지 확인하려면:

```bash
/plugin list
```

**출력 예시:**
```
oh-my-claudecode v4.1.2 ✓
```

또는:

```bash
/oh-my-claudecode:help
```

OMC 명령어 목록이 표시되면 설치 성공입니다.

---

## 🔧 대체 설치 방법 (로컬)

GitHub에서 직접 클론하여 설치하는 방법:

```bash
# 1. 저장소 클론
git clone https://github.com/Yeachan-Heo/oh-my-claudecode /tmp/oh-my-claudecode

# 2. 로컬 마켓플레이스로 추가
/plugin marketplace add /tmp/oh-my-claudecode

# 3. 설치
/plugin install oh-my-claudecode

# 4. 초기 설정
/oh-my-claudecode:omc-setup
```

<Callout type="tip" title="언제 로컬 설치를 사용하나요?">
- 인터넷 연결이 불안정할 때
- 특정 버전을 설치하고 싶을 때
- 개발 버전을 테스트하고 싶을 때
</Callout>

---

## 🚨 문제 해결

### 문제 1: "Plugin not found" 에러

**원인:** 마켓플레이스가 제대로 추가되지 않음

**해결:**
```bash
# 마켓플레이스 다시 추가
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode

# 캐시 삭제 후 재시도
/plugin cache clear
/plugin install oh-my-claudecode
```

---

### 문제 2: "Installation failed" 에러

**원인:** 네트워크 문제 또는 권한 문제

**해결:**
```bash
# 1. 네트워크 확인
ping github.com

# 2. 로컬 설치 방법 사용 (위 참조)

# 3. Claude Code 재시작
# 터미널 종료 후 다시 실행
```

---

### 문제 3: 설치 후 명령어가 작동하지 않음

**원인:** 설정이 완료되지 않음

**해결:**
```bash
# 초기 설정 다시 실행
/oh-my-claudecode:omc-setup

# 또는 doctor 명령어로 진단
/oh-my-claudecode:doctor
```

---

## 📊 설치 후 다음 단계

<Callout type="success" title="설치 완료!">
OMC가 성공적으로 설치되었습니다. 다음 단계로 진행하세요:
</Callout>

1. **[5-3. 기초 셋업](/docs/guide/oh-my-claude-code/setup)** - OMC 설정 및 기능 이해
2. **[5-4. 명령어](/docs/guide/oh-my-claude-code/commands)** - 주요 명령어 학습
3. **[5-5. 활용 꿀팁](/docs/guide/oh-my-claude-code/tips)** - 실전 활용법

---

## 🔄 업데이트

OMC를 최신 버전으로 업데이트하려면:

```bash
# 플러그인 업데이트
/plugin update oh-my-claudecode

# 업데이트 후 설정 재실행 (선택사항)
/oh-my-claudecode:omc-setup
```

---

## 🗑️ 제거

OMC를 제거하려면:

```bash
# 플러그인 제거
/plugin remove oh-my-claudecode

# 설정 파일 삭제 (선택사항)
rm -rf ~/.claude/.omc-config.json
rm -rf {프로젝트}/.omc/
```

---

<Callout type="tip" title="한줄 요약">
Claude Code에서 `/plugin install oh-my-claudecode` 실행 후 `/oh-my-claudecode:omc-setup`으로 설정하면 끝입니다!
</Callout>

**공식 저장소:** [https://github.com/Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)
