# Manuscript — 랜딩 사이트

[**Manuscript**](https://github.com/zendy00/manuscript)의 공개 랜딩 페이지를 호스팅하는 저장소입니다. Manuscript는 DOM 인식 기반의 웹 시연·매뉴얼 저작 Chrome 확장 프로그램이며, 본 사이트는 임의의 웹 페이지에 Manuscript 투어를 임베드할 수 있는 **런타임 브리지**도 함께 제공합니다.

> English: [../README.md](../README.md)

사이트는 단일 정적 HTML 페이지로 별도 빌드·번들러가 없습니다. 본 저장소(`manuscript-pages`)는 메인 [`manuscript` 저장소](https://github.com/zendy00/manuscript/tree/main/site)의 `site/` 폴더가 GitHub Action에 의해 자동으로 미러링된 결과입니다.

## 구조

```
.
├── index.html              # 단일 페이지 랜딩 (영어 default + 한국어 토글)
├── styles.css              # 디자인 토큰(studio 팔레트) + 레이아웃
├── i18n.js                 # 언어 토글, 부드러운 스크롤, TOC 하이라이트
├── manuscript-bridge.0.1.2.js  # 런타임 브리지 라이브러리 (/bridge에서 자동 동기화)
├── downloads/
│   ├── manuscript-latest.zip    # 확장 빌드
│   └── manuscript-0.1.4.zip
├── tours/
│   ├── tour-en.json        # 본 랜딩 페이지 8 스텝 투어 (영어)
│   ├── tour-ko.json        # 같은 투어, 한국어 narration
│   └── SKILL.md            # agent 스킬 — Claude/Cursor 등에 던지면
│                           #   임의 URL에 대해 투어 JSON 자동 생성
├── assets/
│   ├── icons/favicon.svg
│   ├── logo/               # 브랜드 마크
│   └── screenshots/        # 제품 캡쳐 (아래 "스크린샷 갱신" 참조)
└── ko/
    └── README.md           # 본 한국어 README
```

## 페이지 구성

랜딩 페이지는 6개 섹션으로 구성됩니다:

1. **Hero** — Manuscript 소개와 다운로드 CTA
2. **Features** — 6가지 차별점
3. **How it works** — 5단계 저작 흐름 (picker → annotate → replay)
4. **런타임 브리지** *(v0.1.4 신규)* — 본인이 운영하는 임의의 페이지에
   Manuscript 투어를 임베드하는 방법. `manuscript-bridge.0.1.2.js`,
   `SKILL.md`, 예제 `tour-en.json` / `tour-ko.json` 제공. 페이지 언어에
   맞춰 토글되는 사용 예제 코드와 다운로드 카드 포함.
5. **Install** — 3분 안에 끝나는 압축 해제 확장 설치
6. **Guide** — 8 섹션 전체 사용 설명서

우하단의 **"투어 시작"** 플로팅 pill이 Manuscript 확장 설치를 자동 감지하고,
클릭 시 현재 페이지 언어(EN/KO)에 맞는 투어(`tour-en.json` 또는
`tour-ko.json`)를 재생합니다.

## 로컬 미리보기

정적 사이트이므로 어떤 정적 서버든 사용 가능합니다.

```bash
npx serve site
# 또는
python -m http.server -d site 8080
```

브라우저로 `http://localhost:3000` (또는 표시된 포트)을 엽니다.

## 스크린샷 갱신

`assets/screenshots/`의 제품 캡쳐는 메인 저장소의 Playwright 스크립트로 생성합니다.

```bash
# manuscript 저장소에서:
npm run capture           # 핵심 화면 — popup, panel, replay, prompter
npm run capture:bridge    # 브리지 런처 + standalone 재생
```

두 명령 모두 `dist/`를 빌드하고 확장이 로드된 headed Chromium을 띄워
`site/assets/screenshots/`에 PNG를 저장합니다. 캡쳐된 PNG는 이를 참조하는
HTML 변경과 함께 commit합니다.

## 브리지 라이브러리 — 단일 소스

`manuscript-bridge.0.1.2.js`는 메인 저장소의
[`bridge/manuscript-bridge.0.1.2.js`](https://github.com/zendy00/manuscript/tree/main/bridge)가
원본입니다. `prebuild` 단계(`npm run sync:bridge`)에서 자동으로 본 폴더로
복사되므로 여기서 직접 편집하지 마세요 — 다음 빌드에서 덮어쓰여집니다.

## 배포

메인 `manuscript` 저장소의 워크플로우 (`.github/workflows/pages.yml`)가
`site/` 폴더를 감시합니다. `main` 브랜치에 push되면 `site/` 내용을 본
`manuscript-pages` 저장소의 `main` 브랜치에 mirror하고, GitHub Pages가
이를 서빙합니다.

이 저장소의 파일을 직접 수정하지 **않습니다** — 모든 변경은
`manuscript/site/`에서 시작합니다.

## 라이선스 · 문의

클로즈드 베타 · v0.1.4. 피드백은 <zendy00@gmail.com> 으로 보내주세요.
