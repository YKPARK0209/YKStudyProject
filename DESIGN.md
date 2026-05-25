# DESIGN.md — 디자인 시스템 & 작업 가이드

> **이 파일의 역할**: PPT 제작·슬라이드 추가/수정/삭제 요청이 들어왔을 때  
> Claude가 어떻게 대응해야 하는지를 정의하는 **전역 가이드**.  
> 특정 프레젠테이션의 스타일 기록은 각 폴더의 `meta.json["design"]` 블록을 참조한다.

---

## meta.json 스키마

모든 프레젠테이션 폴더에는 `meta.json`이 있어야 한다.  
코드(`Home.jsx`, `index.jsx`)와 Claude 모두 이 파일을 참조한다.

```json
{
  "title":     "프레젠테이션 제목",
  "subtitle":  "부제목",
  "author":    "발표자명",
  "createdAt": "YYYY-MM-DD",
  "updatedAt": "YYYY-MM-DD",
  "part":      "섹션 레이블 (Home 카드에 표시)",
  "count":     슬라이드 수 (정수),
  "tags":      ["태그1", "태그2"],

  "design": {
    "theme":       "테마 이름 (자유 문자열, 예: dark-tech)",
    "background":  "#배경색 hex",
    "surface":     "#카드·패널 배경색 hex",
    "colorAccent": "#주 강조색",
    "colorAccent2":"#보조 강조색",
    "colorWarm":   "#포인트 색",
    "colorText":   "#기본 텍스트색",
    "colorMuted":  "#보조 텍스트색",
    "fontDisplay": "대제목에 쓰는 font-family 이름",
    "fontHeading": "소제목에 쓰는 font-family 이름",
    "fontBody":    "본문에 쓰는 font-family 이름",
    "fontSerif":   "인용·강조에 쓰는 serif 폰트",
    "fontMono":    "코드 블록에 쓰는 폰트",
    "notes":       "자유 텍스트 — 레이아웃 패턴, 애니메이션 방식, 특이사항 기록"
  }
}
```

### 코드에서 사용되는 필드
| 필드 | 사용처 |
|------|--------|
| `title` | `index.jsx` → `PresentationViewer`의 하단 제목바, `Home` 카드 |
| `subtitle`, `part`, `count`, `tags` | `Home` 카드 |
| `design.*` | 슬라이드 추가·수정 시 Claude 참조용 (코드에서 직접 소비 안 함) |

### 슬라이드 수(`count`) 관리 규칙
슬라이드를 추가하거나 삭제할 때 `count` 값도 함께 업데이트한다.  
`updatedAt`도 작업 당일 날짜로 갱신한다.

---

## 프레젠테이션별 스타일 유지 규칙

슬라이드를 추가·수정·삭제할 때 Claude는 다음 순서로 스타일을 결정한다:

1. **명시적 지시 우선** — 요청에 "이 폰트 써줘", "이 색 써줘" 등 지시가 있으면 그것을 따른다.
2. **`meta.json["design"]` 참조** — 지시가 없으면 해당 프레젠테이션의 design 블록을 읽어 동일한 폰트·색상·레이아웃 패턴을 유지한다.
3. **DESIGN.md 기본값** — design 블록에도 없으면 아래 전역 기본값을 사용한다.

---

## 전역 기본 폰트 역할

| CSS 변수 | 기본 폰트 | 사용처 |
|----------|----------|--------|
| `--font-display`  | `RixHead`          | 대제목, 히어로 텍스트 |
| `--font-heading`  | `YoonGothic`       | 슬라이드 h1/h2 |
| `--font-base`     | `KoPubWorldDotum`  | 본문 기본 |
| `--font-serif`    | `KoPubWorldBatang` | 인용, 강조 블록 |
| `--font-mono`     | `KoPubDotum`       | 코드 블록 |

### 등록된 폰트 전체 목록 (`src/styles/fonts.css`)

| font-family | 파일 | 웨이트 |
|-------------|------|--------|
| `KoPubBatang`      | KoPub Batang *.ttf      | 300 / 400 / 700 |
| `KoPubDotum`       | KoPub Dotum *.ttf       | 300 / 400 / 700 |
| `KoPubWorldBatang` | KoPubWorld Batang *.ttf | 300 / 400 / 700 |
| `KoPubWorldDotum`  | KoPubWorld Dotum *.ttf  | 300 / 400 / 700 |
| `Moebius`          | Moebius_*_kor.ttf       | 400 / 700 |
| `RixHead`          | RixHeadB.ttf            | 700 |
| `RixVita`          | RixVitaB.ttf            | 700 |
| `YoonGothic`       | 윤고딕320~350.ttf       | 300 / 400 / 500 / 700 |
| `YoonMyeongjo`     | 윤명조 330.TTF          | 400 |

> 새 폰트 추가: `src/styles/fonts/`에 TTF 추가 → `src/styles/fonts.css`에 `@font-face` 블록 추가

---

## 전역 기본 색상 팔레트

| CSS 변수 | 값 | 용도 |
|----------|----|------|
| `--color-primary`   | `#080c14` | 배경 기본 |
| `--color-secondary` | `#0f1523` | 카드·패널 |
| `--color-accent`    | `#00d4ff` | 주 강조 (시안) |
| `--color-accent2`   | `#7c3aed` | 보조 강조 (퍼플) |
| `--color-warm`      | `#f59e0b` | 포인트 (앰버) |
| `--color-text`      | `#e2e8f0` | 기본 텍스트 |
| `--color-muted`     | `#64748b` | 보조 텍스트 |

---

## 슬라이드 레이아웃 원칙

- 1 슬라이드 = 1 JSX 파일 (`Slide01.jsx`, `Slide02.jsx` …)
- 1 PPT 주제 = `src/presentations/<id>/` 폴더
- 슬라이드는 `position: fixed; inset: 0` 전체 화면
- 모든 UI는 **마우스 호버 시에만 노출** (Auto-hide)
- 슬라이드 전환 시 컴포넌트가 리마운트되어 CSS 애니메이션 자동 재실행

---

## PPT 제작 요청 템플릿

```
[주제]: ...
[슬라이드 수]: N장
[폰트 지시]: (없으면 meta.json design 또는 DESIGN.md 기본값)
[색상 테마]: (없으면 기본 팔레트)
[특이사항]: ...
```

## 새 프레젠테이션 생성 체크리스트

1. `src/presentations/<id>/` 폴더 생성
2. `meta.json` 작성 (위 스키마 참고, `design` 블록 포함)
3. `Slide01.jsx` … `SlideNN.jsx` 작성
4. `index.jsx` 작성 — `meta.json` import 후 `meta.title` 사용
5. `src/App.jsx`에 라우트 추가
6. `meta.json`의 `count` 값 확인
