---
title: "1-6. 세상에 내보내기 (Deploy)"
order: 6
---

내 컴퓨터 밖으로 서비스를 내보내는 법


## 로컬 (Local) vs 호스팅 (Hosting)

<LevelBox level={1}>

**Level.1**: 로컬은 내 방 컴퓨터, 호스팅은 인터넷상의 월세방(서버)을 빌리는 것입니다.

</LevelBox>


<LevelBox level={2}>

**Level.2**: 로컬은 개발자 개인 PC 환경(localhost), 호스팅은 24시간 켜져 있는 서버 공간을 임대해 주는 서비스입니다.

</LevelBox>


<LevelBox level={3}>

**Level.3**: 로컬은 개발 및 테스트 환경(Dev environment), 호스팅은 실제 서비스 운영을 위한 인프라 제공 서비스(AWS, Vercel 등)입니다.

</LevelBox>


```
로컬:    http://localhost:3000        (나만 볼 수 있음)
호스팅:  https://myapp.vercel.app     (전세계 누구나 접속 가능)
```

<Callout type="tip" title="한줄 요약">
"로컬에서 잘 되면 호스팅 서버에 올려줘"라고 하세요.
</Callout>


## 도메인 (Domain) & 배포 (Deploy)

<LevelBox level={1}>

**Level.1**: 도메인은 '집 주소(example.com)', 배포는 인테리어를 마친 집을 사람들에게 공개하는 '오픈식'입니다.

</LevelBox>


<LevelBox level={2}>

**Level.2**: 도메인은 숫자로 된 IP 주소를 사람이 읽기 쉬운 문자로 바꾼 것, 배포는 만든 코드를 실제 서버로 옮겨 사용자가 접속 가능하게 만드는 과정입니다.

</LevelBox>


<LevelBox level={3}>

**Level.3**: DNS를 통해 IP와 도메인을 연결하며, CI/CD 파이프라인을 통해 프로덕션 환경으로 코드를 릴리즈(배포)합니다.

</LevelBox>


```bash
# Vercel에 배포하기
vercel --prod

# 배포 완료 후
✅ Deployed to https://my-awesome-app.vercel.app
```

**한줄 요약**: "배포가 완료되면 연결된 도메인 주소를 알려줘"라고 하세요.