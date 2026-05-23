# Manuscript — 랜딩 사이트

[**Manuscript**](https://github.com/zendy00/manuscript)의 공개 랜딩 페이지를 호스팅하는 저장소입니다. Manuscript는 DOM 인식 기반의 웹 시연·매뉴얼 저작 브라우저 확장 프로그램 (Chrome · Edge) 이며, 본 사이트는 임의의 웹 페이지에 Manuscript 투어를 임베드할 수 있는 **런타임 브리지**도 함께 제공합니다.

> English: [../README.md](../README.md)

사이트는 단일 정적 HTML 페이지로 별도 빌드·번들러가 없습니다. 본 저장소(`manuscript-pages`)는 메인 [`manuscript` 저장소](https://github.com/zendy00/manuscript/tree/main/site)의 `site/` 폴더가 GitHub Action에 의해 자동으로 미러링된 결과입니다.

## 구조

```
.
├── index.html              # 단일 페이지 랜딩 (영어 default + 한국어 토글)
├── changelog.html          # 버전별 변경사항 (영/한 모두 수록)
├── styles.css              # 디자인 토큰(studio 팔레트) + 레이아웃
├── i18n.js                 # 언어 토글, 부드러운 스크롤, TOC 하이라이트
├── manuscript-bridge.0.1.2.js  # 런타임 브리지 라이브러리 (/bridge에서 자동 동기화)
├── store-version.json      # cron 으로 스크래핑한 Chrome 웹 스토어 버전
│                           # (.github/workflows/store-version.yml 가 갱신,
│                           #  pages.yml clean-exclude 로 deploy 시 보존)
├── downloads/              # pages.yml 에서 scripts/site-zip.mjs 가 생성:
│   ├── manuscript-<버전>.zip         # 수동 설치 — 최신 dev 빌드
│   ├── manuscript-latest.zip        # 별칭, 항상 최신 버전 zip 과 동일
│   ├── manuscript-<버전>.zip.sha256  # 사이드카 체크섬
│   ├── manuscript-latest.zip.sha256
│   └── latest.json                  # { version, sha256, sizeBytes, builtAt }
│                                    #   index.html 이 이걸 읽어 SHA + 수동
│                                    #   설치 버전 chip 을 렌더
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

1. **Hero** — Manuscript 소개, Chrome 웹 스토어 CTA, 그리고 수동 `.zip`
   설치로 가는 작은 보조 링크
2. **Features** — 6가지 차별점
3. **How it works** — 5단계 저작 흐름 (picker → annotate → replay)
4. **런타임 브리지** *(v0.1.4 신규)* — 본인이 운영하는 임의의 페이지에
   Manuscript 투어를 임베드하는 방법. `manuscript-bridge.0.1.2.js`,
   `SKILL.md`, 예제 `tour-en.json` / `tour-ko.json` 제공. 페이지 언어에
   맞춰 토글되는 사용 예제 코드와 다운로드 카드 포함.
5. **Install** — 탭 UI: **웹 스토어**(추천) vs **수동 .zip**(웹 스토어
   검수 전의 dev 빌드, 보통 한두 단계 앞섬). 버전 chip 행이 런타임에
   `store-version.json` + `downloads/latest.json` 을 읽어 두 버전을
   나란히 보여주고, zip 의 SHA-256 은 클릭으로 복사할 수 있습니다.
6. **Guide** — 8 섹션 전체 사용 설명서. 7번 Recording 섹션에 v0.3
   **잠깐 멈추고 내 목소리 보태기** 흐름이 있고 (녹화 중 `Space` 로
   시연 일시정지, 녹화는 계속, `Esc` 로 종료), 8번 끝에는 **JSON 스키마
   호환표** — 어떤 .json 이 어떤 확장 버전에서 열리는지.

우하단의 **"What's new"** 토스트는 Chrome 웹 스토어에 새 버전이 올라오고
방문자가 그 버전을 아직 본 적이 없을 때 표시됩니다 (`localStorage` 로 추적).
닫기 버튼을 누르면 현재 버전을 "본 것" 으로 기록합니다.

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

`manuscript-bridge.0.1.3.js`는 메인 저장소의
[`bridge/manuscript-bridge.0.1.3.js`](https://github.com/zendy00/manuscript/tree/main/bridge)가
원본입니다. `prebuild` 단계(`npm run sync:bridge`)에서 본 폴더로 자동
복사되며, 같은 바이트가 `manuscript-bridge.0.1.2.js` 이름으로도 함께
복사됩니다 — 구버전 URL 에 고정해 둔 외부 호스트가 깨지지 않게 alias
로 유지. 어느 쪽이든 여기서 직접 편집하지 마세요 — 다음 빌드에서
덮어쓰여집니다.

## 배포

메인 `manuscript` 저장소의 두 워크플로우가 이 사이트를 구동합니다:

- **`.github/workflows/pages.yml`** — `main` 브랜치의 `site/` 또는 확장
  소스가 변경될 때마다 `npm run site:zip`(build + 버전별 zip + SHA-256
  사이드카 + `latest.json`)을 실행하고, `site/` 폴더 전체를
  `manuscript-pages` 저장소의 `main` 브랜치에 미러링합니다. GitHub
  Pages 가 이를 서빙합니다. deploy 시 `clean-exclude: store-version.json`
  으로 cron 이 갱신한 값을 보존합니다.
- **`.github/workflows/store-version.yml`** — 매일 05:13 UTC 에 cron
  으로 실행. Chrome 웹 스토어 listing 을 fetch 해 서버 렌더링된 HTML
  에서 버전을 추출하고, 변경이 있으면 `store-version.json` 을 본
  저장소(`manuscript-pages`)에 직접 커밋합니다. `PAGES_DEPLOY_TOKEN`
  시크릿을 재사용. 첫 채워넣기는
  `gh workflow run "Refresh Chrome Web Store version"` 으로 수동 트리거.

별도로 **`.github/workflows/ci.yml`** 이 `main` 의 모든 push/PR 을
검증합니다 (typecheck → vitest → build, 배포는 안 함).

이 저장소의 파일을 직접 수정하지 **않습니다** — 모든 변경은
`manuscript/site/`에서 시작합니다.

## 라이선스 · 문의

v0.4.1. 피드백은 <zendy00@gmail.com> 으로 보내주세요.
