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
- 슬라이드는 `position: fixed; inset: 0` 전체 화면으로 구현 (기기 해상도에 맞게 자동 확장)
  - 지시서에 "1280×720" 등 픽셀 규격이 명시되어 있어도 동일하게 전체화면으로 처리한다.
  - **16:9 가로화면 기준**으로 설계한다. 콘텐츠가 화면에 꽉 차야 한다 — 과도한 여백은 나쁜 디자인이다.
  - 모바일(세로 포함) 환경에서도 편안하게 볼 수 있도록 `@media (max-width: 640px)` 반응형 CSS를 반드시 함께 작성한다.
- 모든 UI는 **마우스 호버 / 터치 시에만 노출** (Auto-hide, 모바일에서는 항상 표시)
- 슬라이드 전환 시 컴포넌트가 리마운트되어 CSS 애니메이션 자동 재실행

## 타이포그래피 — 반응형 글씨 크기

슬라이드 루트 요소에 **뷰포트 기반 base font-size**를 설정하고, 자식 요소는 모두 `em` 단위를 사용한다.

```css
/* 슬라이드 루트 — 이 한 줄로 모든 자식 크기가 함께 스케일 */
.slide-root {
  font-size: clamp(15px, 1.5vw, 20px);
  /* 768px → 15px / 1280px → 19.2px / 1920px → 20px */
}

/* 자식 요소는 em 사용 (rem 아님) */
.body-text   { font-size: 0.9em;  }   /* ~17px @ 1280px */
.label-text  { font-size: 0.7em;  }   /* ~13px @ 1280px */
.heading     { font-size: 1.3em;  }   /* ~25px @ 1280px */
.large-title { font-size: 2.8em;  }   /* ~54px @ 1280px */
```

| 텍스트 역할 | em 범위 | 비고 |
|-----------|---------|------|
| 대제목 (Title_Slide) | 2.5 ~ 3.2em | 슬라이드 메인 타이틀 |
| 섹션 헤딩 | 1.2 ~ 1.6em | 슬라이드 내 h1/h2 |
| 본문 | 0.85 ~ 0.95em | 카드·설명 텍스트 |
| 레이블·배지 | 0.65 ~ 0.72em | 영문 대문자 레이블 |
| 보조 텍스트 | 0.7 ~ 0.82em | 날짜, 기관명 등 |

> **모바일에서는** `font-size: 15px` 고정으로 폴백 (clamp min값).

---

## PPT 제작 요청 템플릿

지시서 형식은 자유롭게 작성해도 된다. Claude는 아래 필드들이 어디에 있든 찾아서 해석한다.  
지시서에서 자주 쓰이는 필드와 해석 방식:

| 지시서의 표현 | Claude의 해석 |
|--------------|--------------|
| `폴더명(id):` | `src/presentations/<id>/` 폴더명 및 라우트 경로 |
| `title:` | `meta.json`의 `title` 필드 |
| `subtitle:` | `meta.json`의 `subtitle` 필드 |
| `author:` | `meta.json`의 `author` 필드 |
| `part:` | Home 카드에 표시되는 섹션 레이블. 생략 시 `title`에서 유추 |
| `tags:` | `meta.json`의 `tags` 배열 |
| `테마: Business-Blue` 등 자유 기술 | `meta.json["design"]["theme"]`에 기록하고 색상·폰트 방향 설정 |
| `1280×720 규격` / `16:9` | 전체화면(`position: fixed; inset: 0`)으로 처리 |
| `Slide N (레이아웃타입):` | 레이아웃 힌트로 활용, 없으면 콘텐츠에 맞게 자율 선택 |
| `(내용을 구성해줘)` | 해당 영역을 Claude가 자율 설계 |
| `##JS 로직##:` | 시각화 판단 로직(Process B.4) 적용 |

> `count`·`createdAt`·`updatedAt`은 작업 완료 후 Claude가 자동 설정하므로 지시서에 명시 불필요.

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
   - 슬라이드 항목에 **레이아웃 타입**이 명시된 경우 (예: `Slide 01 (Title_Slide):`) 해당 타입을 레이아웃 설계의 힌트로 삼는다. 없으면 콘텐츠에 맞는 레이아웃을 자율적으로 선택한다.
   - **`(내용을 구성해줘)` 지시**가 있는 경우, 해당 영역의 콘텐츠·시각화를 Claude가 자율적으로 설계하여 구현한다.

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

2. **슬라이드 삽입 시 파일 처리**: 기존 슬라이드 사이에 삽입하는 경우 다음을 자동 처리한다.
   - 삽입 위치 이후의 기존 JSX 파일 번호를 하나씩 올려 재명명 (예: `Slide11.jsx` → `Slide12.jsx`)
   - 새 JSX 파일 생성 (삽입 번호 기준)
   - `index.jsx` import 구문 및 slides 배열 업데이트
   - `meta.json`의 `count`·`updatedAt` 갱신

3. **`##JS 로직##` 마커 해석**: 지시서에서 `##JS 로직##`으로 표시된 항목은 CSS 애니메이션 이상의 인터랙션·시각화 구현이 요청된 신호다. 아래 **시각화 판단 로직**을 그대로 적용한다. 지시서에 "Claude가 직접 판단해서 적용", "불가능하다고 판단되면 대안을 안내" 등의 표현이 포함되어 있어도 동일하게 적용한다.

4. **시각화 및 미디어 처리 — 중요 판단 로직**:
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
| `react-force-graph` | ^1.48.2 | 2D 힘-기반 네트워크 그래프 (Canvas 렌더링, 파티클 애니메이션, 줌/팬) | 2026-05-26 |

> 기본 패키지 (react, react-router-dom, vite, gh-pages)는 이 표에 기재하지 않는다.
