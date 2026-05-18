# Manuscript — 랜딩 사이트

[**Manuscript**](https://github.com/zendy00/manuscript)의 공개 랜딩 페이지를 호스팅하는 저장소입니다. Manuscript는 DOM 인식 기반의 웹 시연·매뉴얼 저작 Chrome 확장 프로그램입니다.

> English: [../README.md](../README.md)

사이트는 단일 정적 HTML 페이지로 별도 빌드·번들러가 없습니다. 본 저장소(`manuscript-pages`)는 메인 [`manuscript` 저장소](https://github.com/zendy00/manuscript/tree/main/site)의 `site/` 폴더가 GitHub Action에 의해 자동으로 미러링된 결과입니다.

## 구조

```
.
├── index.html              # 단일 페이지 랜딩 (영어 default + 한국어 토글)
├── styles.css              # 디자인 토큰(studio 팔레트) + 레이아웃
├── i18n.js                 # 언어 토글, 부드러운 스크롤, TOC 하이라이트
├── assets/
│   ├── icons/favicon.svg
│   ├── logo/               # 브랜드 마크
│   └── screenshots/        # 제품 캡쳐 (아래 "스크린샷 갱신" 참조)
└── ko/
    └── README.md           # 본 한국어 README
```

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
npm run capture     # dist/ 빌드 후 확장이 로드된 headed Chromium을 띄워
                    # 핵심 화면을 site/assets/screenshots/로 캡쳐합니다.
```

캡쳐된 PNG는 이를 참조하는 HTML 변경과 함께 commit합니다.

## 배포

메인 `manuscript` 저장소의 워크플로우 (`.github/workflows/pages.yml`)가 `site/` 폴더를 감시합니다. `main` 브랜치에 push되면 `site/` 내용을 본 `manuscript-pages` 저장소의 `main` 브랜치에 mirror하고, GitHub Pages가 이를 서빙합니다.

이 저장소의 파일을 직접 수정하지 **않습니다** — 모든 변경은 `manuscript/site/`에서 시작합니다.

## 라이선스 · 문의

클로즈드 베타. 피드백은 <zendy00@gmail.com> 으로 보내주세요.
