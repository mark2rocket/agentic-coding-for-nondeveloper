---
title: "1-4. 데이터와 소통 (Data & Communication)"
description: "1. 기초 개발 용어 (Categorized Flow)"
order: 4
---

### 1-4. 데이터와 소통 (Data & Communication)

정보를 주고받고 저장하는 법

#### HTTP & 요청(Request) vs 응답(Response)

**Level.1:** HTTP는 대화 규칙(한국어, 영어), 요청은 "질문", 응답은 "대답"입니다.

**Level.2:** 인터넷상에서 정보를 주고받는 약속(프로토콜)입니다. 클라이언트가 요청을 보내면 서버가 상태 코드(200 OK, 404 Error)와 함께 응답합니다.

**Level.3:** HTTP는 Stateless 프로토콜이며, Request Header/Body에 정보를 담아 보내면 Response로 결과를 받습니다.

```javascript
// HTTP 요청 보내기
fetch('https://api.example.com/data')
  .then(res => res.json())  // 응답 받기 (200 OK)
  .catch(err => console.error(err));  // 에러 처리 (404 등)
```

**한줄 요약:** "HTTP 요청이 실패했어. 응답 코드가 몇 번인지 확인해줘"라고 물어보세요.

#### API & JSON

**Level.1:** API는 점원(주문 전달자), JSON은 주문서 양식(메뉴: 피자, 수량: 1)입니다.

**Level.2:** API는 프로그램끼리 소통하는 연결 통로, JSON은 그 통로를 지날 때 데이터를 주고받는 가장 흔한 텍스트 형식입니다.

**Level.3:** API는 Interface 규약(REST API 등)이며, JSON은 Key-Value 쌍으로 이루어진 경량 데이터 포맷입니다.

```javascript
// API 호출 → JSON 응답
const response = await fetch('/api/user/123');
const data = await response.json();
// 결과: { "name": "김철수", "age": 25, "email": "kim@example.com" }
```

**한줄 요약:** "날씨 API를 연동해서 JSON 데이터를 받아와 줘"라고 하세요.

#### DB (DataBase) & CRUD

**Level.1:** DB는 도서관의 책장, CRUD는 책을 꽂고(C), 읽고(R), 수정하고(U), 버리는(D) 4가지 동작입니다.

**Level.2:** DB는 데이터를 정리해 둔 창고(MySQL 등), CRUD는 생성(Create), 조회(Read), 수정(Update), 삭제(Delete)라는 데이터 처리의 핵심 기능입니다.

**Level.3:** 영속성 데이터를 관리하는 시스템입니다. 웹 서비스의 기능은 결국 대부분 CRUD로 귀결됩니다.

```sql
CREATE: INSERT INTO posts (title, content) VALUES ('제목', '내용');
READ:   SELECT * FROM posts WHERE id = 1;
UPDATE: UPDATE posts SET title = '수정된 제목' WHERE id = 1;
DELETE: DELETE FROM posts WHERE id = 1;
```

**한줄 요약:** "게시판의 CRUD 기능을 구현해줘"라고 하면 글쓰기/읽기/수정/삭제를 다 만들어줍니다.