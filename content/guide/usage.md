---
title: "사용 방법"
description: "문서 작성 및 관리 방법"
order: 2
---

# 사용 방법

## 새 문서 추가

1. `content/` 디렉토리에 새 마크다운 파일 생성
2. Frontmatter 작성
3. 내용 작성
4. `navigation.json`에 추가

## 노션에서 Import

노션 페이지를 export하고 import 스크립트를 실행하세요:

```bash
npm run import-notion -- path/to/notion-export.zip
```

## 배포

프로젝트를 빌드하고 배포하세요:

```bash
npm run build
npm start
```
