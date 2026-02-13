---
title: "3-2. 안티그래비티 설치"
description: "3. 안티그래비티"
order: 2
---

## 1단계: 설치 파일 다운로드

공식 웹사이트에 접속하여 OS에 맞는 설치 파일을 다운로드합니다.

**공식 사이트:**
```
https://antigravity.google/
```

**지원 운영체제:**
- Windows 10 이상
- macOS 11 (Big Sur) 이상
- Linux (Ubuntu 20.04+ 권장)

<Callout type="info" title="💾 파일 크기">
설치 파일은 약 500MB~1GB 정도입니다. 안정적인 인터넷 연결에서 다운로드하세요.
</Callout>

---

## 2단계: 설치 프로그램 실행

다운로드한 설치 파일을 실행합니다.

### Windows
```
1. antigravity-setup.exe 더블클릭
2. "이 앱이 디바이스를 변경하도록 허용하시겠습니까?" → 예
3. 설치 경로 선택 (기본값 권장: C:\Program Files\Antigravity)
4. 설치 진행 (약 2-3분 소요)
```

### macOS
```
1. antigravity.dmg 더블클릭
2. Antigravity 아이콘을 Applications 폴더로 드래그
3. 처음 실행 시 "확인되지 않은 개발자" 경고 → 시스템 환경설정 > 보안 및 개인 정보 보호 > "확인 없이 열기"
4. 설치 완료
```

### Linux
```bash
# .deb 파일 (Debian/Ubuntu)
sudo dpkg -i antigravity-linux.deb
sudo apt-get install -f

# .rpm 파일 (Fedora/RHEL)
sudo rpm -i antigravity-linux.rpm
```

<Callout type="tip" title="💡 간편 설치 팁">
설치 과정은 매우 간소화되어 있으며, **대부분 기본값(Default)으로 진행**하면 됩니다. 특별한 이유가 없다면 설정을 변경하지 마세요.
</Callout>

---

## 3단계: 구글 계정 로그인

설치 완료 후 안티그래비티를 실행하면 구글 계정 로그인을 요청합니다.

**로그인 절차:**
```
1. 안티그래비티 실행
2. "Sign in with Google" 버튼 클릭
3. 브라우저에서 구글 계정 선택
4. 권한 승인:
   - 파일 읽기/쓰기
   - 브라우저 제어
   - 이미지 생성 (Nanobana)
5. 로그인 완료
```

<Callout type="warning" title="⚠️ 계정 권한">
안티그래비티는 강력한 권한이 필요합니다. 반드시 **개인 계정** 또는 **개발 전용 계정**을 사용하세요. 회사 계정 사용 시 보안 정책에 따라 제한될 수 있습니다.
</Callout>

---

## 4단계: 플랜 선택 (선택사항)

안티그래비티는 무료 플랜으로도 사용 가능하지만, 유료 플랜 구독 시 사용량 제한(Quota)이 완화됩니다.

| 플랜 | 월 비용 | 사용량 제한 | 추천 대상 |
|------|---------|------------|---------|
| **Free** | $0 | 월 50시간 | 개인 프로젝트, 학습용 |
| **AI Pro** | $20 | 월 200시간 | 프리랜서, 소규모 팀 |
| **AI Ultra** | $100 | 무제한 | 기업, 대규모 프로젝트 |

**사용량 확인:**
```
설정 > Account > Usage
→ 현재 사용 시간과 남은 할당량 확인
```

<Callout type="tip" title="💰 무료 플랜 활용 팁">
무료 플랜으로 시작하여 필요성을 느끼면 유료 플랜으로 업그레이드하세요. 대부분의 개인 프로젝트는 월 50시간으로 충분합니다.
</Callout>

---

## 5단계: 설치 확인

설치가 정상적으로 완료되었는지 확인합니다.

**확인 방법:**
```
1. 안티그래비티 실행
2. 좌측 상단에 "Antigravity" 로고 표시 확인
3. 우측 상단에 구글 계정 프로필 사진 표시 확인
4. 하단 상태바에 "Ready" 표시 확인
```

**간단한 테스트:**
```
채팅창에 입력:
"hello world를 출력하는 Python 스크립트 만들어줘"

→ AI가 자동으로 hello.py 파일 생성
→ 터미널에서 실행 결과 확인
```

---

## 설치 문제 해결

### Windows: "설치 실패" 오류
```
원인: 관리자 권한 부족
해결: 설치 파일 우클릭 → "관리자 권한으로 실행"
```

### macOS: "손상된 파일" 경고
```
원인: Gatekeeper 보안 설정
해결:
  터미널에서 실행:
  sudo xattr -r -d com.apple.quarantine /Applications/Antigravity.app
```

### Linux: 의존성 오류
```
원인: 필수 라이브러리 누락
해결:
  sudo apt-get install -f  # Debian/Ubuntu
  sudo dnf install antigravity  # Fedora
```

### 로그인 실패
```
원인: 방화벽 또는 프록시 설정
해결:
  1. 방화벽에서 antigravity.google 도메인 허용
  2. 프록시 사용 시: 설정 > Network > Proxy 설정
```

---

## 시스템 요구사항

**최소 사양:**
- CPU: Intel i5 / AMD Ryzen 5 이상
- RAM: 8GB 이상
- 저장공간: 5GB 이상 여유 공간
- 인터넷: 상시 연결 필수

**권장 사양:**
- CPU: Intel i7 / AMD Ryzen 7 이상
- RAM: 16GB 이상
- 저장공간: 10GB 이상 여유 공간
- 인터넷: 광대역 (10Mbps 이상)

<Callout type="success" title="✅ 설치 완료!">
설치가 완료되었다면 다음 단계인 "3-3. 초기 설정"으로 이동하여 안티그래비티를 사용할 준비를 마치세요.
</Callout>
