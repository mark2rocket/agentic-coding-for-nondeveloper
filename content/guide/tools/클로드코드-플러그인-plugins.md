---
title: "3-4. 클로드코드 플러그인 (Plugins)"
description: "3. 에이전틱 코딩 툴"
order: 4
---

### 3-4. 클로드코드 플러그인 (Plugins)

**설명:** 클로드코드의 기능을 확장해주는 추가 모듈입니다. 스마트폰 앱스토어처럼 필요한 기능만 골라서 설치할 수 있습니다.

**플러그인 명령어:**
```bash
# 마켓플레이스 검색
/plugin marketplace

# 플러그인 설치
/plugin install plugin-name

# 공식 Skills 플러그인 추가
/plugin marketplace add anthropics/skills

# 설치된 플러그인 목록
/plugin list

# 플러그인 제거
/plugin uninstall plugin-name
```

**인기 플러그인 예시:**
- **이미지 생성**: DALL-E, Midjourney 통합
- **데이터 분석**: Pandas, Matplotlib 자동 실행
- **문서 변환**: PDF, Excel, CSV 처리
- **코드 포매터**: Prettier, Black 자동 적용

**공식 리소스:**
- GitHub: `github.com/anthropics/claude-plugins-official`
- Skills 저장소: `github.com/anthropics/skills` (46.9k stars)
- 커뮤니티: `awesome-claude-skills` (5.5k stars)

**부연 설명:** 필요한 기능만 골라서 설치할 수 있어 가볍고 효율적입니다. 공식 마켓플레이스나 커뮤니티에서 유용한 플러그인을 찾아 설치하면 됩니다.

**한줄 요약:** /plugin marketplace로 앱스토어처럼 필요한 기능만 골라서 추가하세요.