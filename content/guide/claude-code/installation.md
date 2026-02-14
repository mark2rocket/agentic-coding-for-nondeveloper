---
title: "4-2. 클로드코드 설치"
order: 2
---

클로드코드를 설치하는 가장 쉬운 방법부터 단계별로 안내합니다.

<Callout type="success" title="2025년 업데이트: 설치가 훨씬 쉬워졌습니다!">
이제 **Node.js 없이도** 설치 가능하며, Windows는 **클릭 한 번**으로 설치할 수 있습니다.
</Callout>

---

## 운영체제 선택

설치 방법이 OS마다 다르므로, 자신의 운영체제를 먼저 확인하세요.

| OS | 확인 방법 | 권장 설치 방법 |
|-----|----------|--------------|
| **Windows 10/11** | 시작 > 설정 > 시스템 > 정보 | ⭐ GUI 설치 프로그램 (가장 쉬움) |
| **macOS** | 🍎 메뉴 > 이 Mac에 관하여 | Homebrew 또는 공식 스크립트 |
| **Linux** | `uname -a` 터미널 명령어 | 공식 스크립트 |

---

## Windows 설치 (가장 쉬움! ⭐)

<Callout type="tip" title="초보자 강력 추천">
Windows 사용자라면 **방법 1: GUI 설치 프로그램**을 사용하세요. 클릭 몇 번으로 끝납니다!
</Callout>

### 방법 1: GUI 설치 프로그램 (ClaudeCodeInstaller.exe) ⭐⭐⭐

**누구에게 추천:** 터미널을 한 번도 안 써본 완전 초보자

**설치 과정:**

<LevelBox>

**1단계: 설치 파일 다운로드**
- GitHub 릴리스 페이지 방문
- ClaudeCodeInstaller.exe 다운로드

**2단계: 설치 프로그램 실행**
- 다운로드한 파일 더블클릭
- "이 앱이 디바이스를 변경하도록 허용하시겠습니까?" → 예

**3단계: 설치 옵션 선택**

```text
┌──────────────────────────────────────┐
│ Claude Code Installer                │
│                                      │
│ 설치할 위치를 선택하세요:             │
│ ☑ Terminal (터미널에서 사용)         │
│ ☑ VSCode (VSCode에서 사용)          │
│                                      │
│          [Install 시작]               │
└──────────────────────────────────────┘
```

**4단계: 설치 완료 대기 (약 2-3분)**
- 설치 진행률: ████████████████ 100%

**5단계: 설치 완료!**
- 터미널 또는 VSCode에서 바로 사용 가능

</LevelBox>

**확인 방법:**

<LevelBox>

**1. Win + R 키 누르기**

**2. "cmd" 입력 후 Enter**

**3. 명령 프롬프트에 입력:**

```bash
claude --version
```

**4. 버전 정보가 표시되면 성공!**
- 예: `Claude Code v0.2.1`

</LevelBox>

<Callout type="success" title="설치 성공 화면 예시">
```text
C:\Users\사용자명> claude --version
Claude Code v0.2.1

C:\Users\사용자명> claude
Welcome to Claude Code!
Type '/help' for a list of commands.

>
```
</Callout>

---

### 방법 2: winget (Windows Package Manager) ⭐⭐

**누구에게 추천:** 터미널을 조금 써본 사람, 자동 업데이트를 원하는 사람

**사전 요구사항:**
- Windows 10 1809 이상 또는 Windows 11
- winget이 설치되어 있어야 함 (Windows 11은 기본 설치됨)

**설치 과정:**

<LevelBox>

**1단계: PowerShell 열기**
- Win + X 키 누르기
- "Windows PowerShell" 또는 "터미널" 선택
- (관리자 권한 불필요!)

**2단계: 설치 명령어 입력**

**터미널 입력 예시:**
```powershell
┌────────────────────────────────────────────────────────┐
│ Windows PowerShell                                     │
│ Copyright (C) Microsoft Corporation. All rights reserved.│
├────────────────────────────────────────────────────────┤
│                                                        │
│ PS C:\Users\사용자명> winget install claude-code      │
│                                                        │
│ 검색 중: claude-code                                   │
│ Found Claude Code [Anthropic.ClaudeCode]              │
│ Version: 0.2.1                                        │
│                                                        │
│ ⏳ Downloading...                                      │
│ ████████████████ 100% (45.2 MB)                       │
│                                                        │
│ ⚙️ Installing...                                       │
│ ████████████████ 100%                                 │
│                                                        │
│ ✅ Successfully installed Claude Code                  │
│                                                        │
│ PS C:\Users\사용자명>                                  │
└────────────────────────────────────────────────────────┘
```

</LevelBox>

**자동 업데이트:**
```powershell
# 업데이트 확인 및 설치
winget upgrade claude-code

# 또는 모든 프로그램 업데이트
winget upgrade --all
```

---

### 방법 3: PowerShell 스크립트 (한 줄 설치) ⭐

**누구에게 추천:** 빠르게 설치하고 싶은 사람

**설치 과정:**

<LevelBox>

**1단계: PowerShell 열기**
- Win + X → "Windows PowerShell"

**2단계: 아래 명령어 복사해서 붙여넣기**

**터미널 입력 예시:**
```powershell
┌────────────────────────────────────────────────────────┐
│ Windows PowerShell                                     │
├────────────────────────────────────────────────────────┤
│ PS C:\Users\사용자명>                                  │
│                                                        │
│ # 이 명령어를 복사해서 붙여넣으세요 (Ctrl+V)           │
│ irm https://claude.ai/install.ps1 | iex               │
│                                                        │
│ 실행 정책 변경 확인...                                 │
│ Claude Code 다운로드 중...                             │
│ 설치 중... ████████████████ 100%                       │
│ ✅ 설치 완료!                                          │
│                                                        │
│ PS C:\Users\사용자명>                                  │
└────────────────────────────────────────────────────────┘
```

</LevelBox>

<Callout type="info" title="복사-붙여넣기 팁">
- 복사: Ctrl + C
- PowerShell에 붙여넣기: **마우스 우클릭** 또는 Ctrl + V
- Enter 키로 실행
</Callout>

---

## macOS 설치

### 방법 1: Homebrew (권장) ⭐⭐⭐

**설치 과정:**

<LevelBox>

**1단계: 터미널 열기**
- Spotlight 검색 (Cmd + Space)
- "터미널" 입력 후 Enter

**2단계: Homebrew가 있는지 확인**

**터미널 입력 예시:**
```bash
┌────────────────────────────────────────────────────────┐
│ zsh                                        사용자명@MacBook │
├────────────────────────────────────────────────────────┤
│ ~ % brew --version                                     │
│ Homebrew 4.2.1                                        │
│                                                        │
│ # Homebrew가 없다면 먼저 설치:                          │
│ ~ % /bin/bash -c "$(curl -fsSL https://raw.githubus...│
│                                                        │
│ # Claude Code 설치                                     │
│ ~ % brew install anthropic-ai/tap/claude-code         │
│                                                        │
│ 🍺 Downloading anthropic-ai/tap/claude-code           │
│ ████████████████ 100% (32.1 MB)                       │
│                                                        │
│ 🍺 Pouring claude-code--0.2.1.arm64_sonoma.bottle...  │
│ 🍺 claude-code 0.2.1 installed ✅                      │
│                                                        │
│ ~ %                                                    │
└────────────────────────────────────────────────────────┘
```

</LevelBox>

---

### 방법 2: 공식 설치 스크립트 ⭐⭐

**터미널 입력 예시:**
```bash
┌────────────────────────────────────────────────────────┐
│ ~ % curl -fsSL https://claude.ai/install.sh | bash    │
│                                                        │
│ Claude Code Installer v0.2                            │
│ Detecting system... macOS 14.2 (arm64)                │
│ Downloading... ████████████████ 100%                  │
│ Installing to /usr/local/bin/claude                   │
│ ✅ Installation complete!                              │
│                                                        │
│ Run 'claude' to get started.                          │
│                                                        │
│ ~ % claude --version                                   │
│ Claude Code v0.2.1                                    │
└────────────────────────────────────────────────────────┘
```

---

## Linux 설치

### 방법 1: 공식 스크립트 (권장) ⭐⭐⭐

**터미널 입력 예시:**
```bash
┌────────────────────────────────────────────────────────┐
│ user@linux:~$ curl -fsSL https://claude.ai/install.sh | bash │
│                                                        │
│ Claude Code Installer v0.2                            │
│ Detecting system... Ubuntu 22.04 (x86_64)             │
│ Checking dependencies...                              │
│ ✓ curl found                                          │
│ ✓ git found                                           │
│                                                        │
│ Downloading Claude Code...                            │
│ ████████████████ 100% (28.5 MB)                       │
│                                                        │
│ Installing to /usr/local/bin/claude                   │
│ Setting permissions...                                │
│ ✅ Installation complete!                              │
│                                                        │
│ user@linux:~$ claude --version                        │
│ Claude Code v0.2.1                                    │
└────────────────────────────────────────────────────────┘
```

---

### 방법 2: 패키지 매니저

**Debian/Ubuntu:**
```bash
┌────────────────────────────────────────────────────────┐
│ $ sudo apt update                                      │
│ $ sudo apt install claude-code                        │
└────────────────────────────────────────────────────────┘
```

**Fedora/RHEL:**
```bash
┌────────────────────────────────────────────────────────┐
│ $ sudo dnf install claude-code                         │
└────────────────────────────────────────────────────────┘
```

---

## 설치 확인 (모든 OS 공통)

설치가 제대로 되었는지 확인하는 4단계:

### 1단계: 버전 확인

**터미널 입력:**
```bash
claude --version
```

**성공 시 출력:**
```text
Claude Code v0.2.1
```

---

### 2단계: 도움말 확인

**터미널 입력:**
```bash
claude --help
```

**성공 시 출력:**
```text
┌────────────────────────────────────────────────────────┐
│ Claude Code - AI-powered coding assistant              │
│                                                        │
│ Usage:                                                 │
│   claude [command] [options]                          │
│                                                        │
│ Commands:                                              │
│   login         Login to your Anthropic account       │
│   logout        Logout from your account              │
│   chat          Start a coding session                │
│   --version     Show version number                   │
│   --help        Show this help message                │
│                                                        │
│ Examples:                                              │
│   claude login                                         │
│   claude chat                                          │
│   claude --version                                     │
└────────────────────────────────────────────────────────┘
```

---

### 3단계: 로그인

**터미널 입력:**
```bash
claude login
```

**동작 과정:**
```text
┌────────────────────────────────────────────────────────┐
│ > claude login                                         │
│                                                        │
│ Opening browser for authentication...                 │
│ Browser opened at: https://claude.ai/auth             │
│                                                        │
│ ⏳ Waiting for authentication...                       │
│                                                        │
│ ✅ Successfully logged in as: user@example.com         │
│ Account type: Pro                                     │
│                                                        │
│ You're all set! Run 'claude chat' to start coding.   │
└────────────────────────────────────────────────────────┘
```

**브라우저에서:**

<LevelBox>

**1. 자동으로 브라우저 열림**

**2. Anthropic 계정으로 로그인**

**3. "Authorize Claude Code" 버튼 클릭**

**4. 터미널로 돌아가서 확인**

</LevelBox>

---

### 4단계: 첫 실행

**터미널 입력:**
```bash
claude chat
```

**성공 시 화면:**
```text
┌────────────────────────────────────────────────────────┐
│ Welcome to Claude Code! 🤖                             │
│                                                        │
│ I'm Claude, your AI coding assistant.                 │
│ I can help you write code, debug, refactor, and more. │
│                                                        │
│ Type '/help' for commands or start chatting!         │
│                                                        │
│ > Hello!                                               │
│                                                        │
│ 🤖 Hi! I'm ready to help you with your coding.        │
│ What would you like to work on today?                 │
│                                                        │
│ >                                                      │
└────────────────────────────────────────────────────────┘
```

<Callout type="success" title="설치 완료!">
이제 Claude Code를 사용할 준비가 끝났습니다! 다음 단계인 **"4-3. 기초 셋업"**으로 이동하세요.
</Callout>

---

## 문제 해결 (Troubleshooting)

### Windows 문제

**문제 1: "claude를 인식할 수 없습니다"**

<LevelBox>

**해결 방법:**

**1. PowerShell 완전히 종료 후 재시작**

**2. 또는 컴퓨터 재시작**

**3. 그래도 안 되면:**
- 제어판 > 시스템 > 고급 시스템 설정
- 환경 변수 > Path 확인
- `C:\Program Files\Claude Code\bin` 추가

</LevelBox>

**문제 2: "실행 정책" 오류**

**터미널 입력:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

</LevelBox>

---

### macOS 문제

**문제 1: "보안 경고" 표시**

<LevelBox>

**해결 방법:**

**1. 시스템 환경설정 > 보안 및 개인 정보 보호**

**2. "확인 없이 열기" 버튼 클릭**

**3. 다시 claude 실행**

</LevelBox>

**문제 2: "brew 명령어를 찾을 수 없습니다"**

**Homebrew 먼저 설치:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

</LevelBox>

---

### Linux 문제

**문제 1: 권한 오류**

```bash
sudo chmod +x /usr/local/bin/claude
```

**문제 2: 의존성 오류**

**Debian/Ubuntu:**
```bash
sudo apt-get install -f
```

**Fedora:**
```bash
sudo dnf install --allowerasing
```

---

## 네이티브 설치 vs Node.js 설치 비교

<Callout type="info" title="어떤 방법이 나에게 맞을까?">
**2025년 이후 권장:** 네이티브 설치 방법을 사용하세요!
</Callout>

| 구분 | 네이티브 설치 (권장) | Node.js 설치 (구버전) |
|------|-------------------|-------------------|
| **설치 난이도** | ⭐ 매우 쉬움 | ⭐⭐⭐ 어려움 |
| **필요한 사전 지식** | 없음 | Node.js, npm 이해 필요 |
| **설치 시간** | 2-3분 | 10-15분 |
| **Node.js 필요** | ❌ 불필요 | ✅ 필수 |
| **자동 업데이트** | ✅ 지원 (winget, brew) | ❌ 수동 |
| **관리자 권한** | ❌ 불필요 (Windows) | ✅ 필요 |
| **추천 대상** | 모든 사용자 | 개발자 (레거시) |

---

## 참고 자료

이 가이드는 다음 공식 문서를 참고하여 작성되었습니다:

- [Set up Claude Code - Official Docs](https://code.claude.com/docs/en/setup)
- [Claude Code Native Windows Installation Guide 2026](https://smartscope.blog/en/generative-ai/claude/claude-code-windows-native-installation/)
- [How to Install Claude Code on Windows 11 - InterWorks](https://interworks.com/blog/2026/01/27/how-to-install-claude-code-on-windows-11/)
- [How To Install Claude Code on Windows: Complete Guide 2025 - ITECS](https://itecsonline.com/post/how-to-install-claude-code-on-windows)
- [Claude Code Installation: Windows, Mac & Linux Setup](https://claudefa.st/blog/guide/installation-guide)

---

## 다음 단계

✅ 설치 완료했다면:
→ **4-3. 클로드코드 기초 셋업**으로 이동하여 초기 설정을 완료하세요!
