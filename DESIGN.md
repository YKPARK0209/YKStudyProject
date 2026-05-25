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

---

## 작업 유형별 프로세스

요청이 들어오면 가장 먼저 **[신규 프레젠테이션 시작]** 인지, 기존 자료의 **[슬라이드 추가/수정]** 인지 파악하고 아래 절차를 따른다.

### A. 신규 프레젠테이션 (New Presentation)

프레젠테이션의 기초 뼈대를 잡는 단계다. 다음 3가지 요소가 지시사항에 포함되어 있는지 확인한다.

1. **메타데이터 확인**
   - `title`, `subtitle`, `author`, `주제(tags/part)`가 모두 포함되었는지 확인한다.
   - 부족하면: "메타데이터의 제목, 부제목, 발표자명 등이 아직 부족합니다. 문맥에 맞게 자의로 작성할까요, 아니면 직접 지정해 주시겠습니까?"라고 질문한다.

2. **디자인 방향 확인**
   - 구체적인 룩앤매너, 특정 폰트나 색상 테마 지시가 있는지 확인한다.
   - 없으면: "`DESIGN.md`에 정의된 기본 팔레트와 폰트를 사용하여 진행할까요?"라고 확인한다.

3. **슬라이드 구성 및 내용 확인**
   - 각 슬라이드(Slide01, Slide02…)별로 구체적인 내용 지시가 있는지 확인한다.
   - 없으면: "전체 슬라이드 수와 그에 따른 구체적인 내용(Outline)이 없습니다. 주신 주제를 바탕으로 먼저 슬라이드 구성을 기획해서 안을 드릴까요?"라고 질문하고 확인을 받은 뒤 진행한다. 아니라고 하면 프레젠테이션 구조만 만들고 슬라이드는 다음 프롬프트에서 작성할 수 있도록 한다.

4. **폴더 구조 생성**
   - `src/presentations/<id>/` 폴더 생성
   - `meta.json` 작성 (위 스키마 참고, `design` 블록 포함)
   - `Slide01.jsx` … `SlideNN.jsx` 작성
   - `index.jsx` 작성 — `meta.json` import 후 `meta.title` 사용
   - `src/App.jsx`에 라우트 추가
   - 미디어 애셋이 필요한 경우 `media/` 폴더도 함께 생성

### B. 슬라이드 추가 및 수정 (Slide Modification)

슬라이드 내용을 채우거나 레이아웃을 구성할 때 아래 규칙을 따른다.

1. **내용 배치**: 지정된 텍스트나 시각화 요소의 배치를 확인한다.

2. **시각화 및 미디어 처리 — 중요 판단 로직**:
   - 슬라이드 내에 이미지나 복잡한 그래픽이 필요한 경우, 먼저 구현할 수 있는 적합한 **JS 라이브러리**가 있는지 판단한다 (아래 인벤토리 참조).
   - 코드로 깔끔하게 구현 가능하면 라이브러리를 사용하여 작성한다. 새로 설치해야 하는 라이브러리는 다운로드 후 아래 **JS 라이브러리 인벤토리** 테이블을 업데이트한다. 다음 번엔 이미 보유한 라이브러리를 재사용한다.
   - JS로 구현하기에 비효율적이거나 불가능한 복잡한 이미지·그진·영상 요소라고 판단된다면 코드로 만들지 말고 다음과 같이 안내한다:
     > "이 부분은 코드로 구현하는 것보다 해당 이미지/영상을 직접 삽입하는 것이 훨씬 효율적입니다. `src/presentations/<id>/media/` 폴더에 해당 애셋(예: `image_name.png`)을 넣으면 자동으로 `<img>` 또는 `<video>` 태그로 처리(Placeholder)를 만들어 드리겠습니다."

---

## media/ 폴더 컨벤션

- 경로: `src/presentations/<id>/media/`
- 용도: 해당 프레젠테이션에서만 사용하는 이미지, 영상, SVG 등 정적 애셋
- 슬라이드에서 참조: `import imgSrc from './media/image_name.png'` 또는 상대경로로 직접 `src` 지정

---

## JS 라이브러리 인벤토리

현재 프로젝트에 설치된 시각화·애니메이션 관련 라이브러리 목록. 새 라이브러리 설치 시 이 표를 업데이트한다.

| 라이브러리 | 버전 | 용도 | 설치일 |
|-----------|------|------|--------|
| (현재 없음) | — | — | — |

> 기본 패키지 (react, react-router-dom, vite, gh-pages)는 이 표에 기재하지 않는다.
