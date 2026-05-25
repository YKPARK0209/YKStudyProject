# DESIGN.md — 디자인 시스템 참조 가이드

> PPT 제작 지시 시 이 파일이 기본값 기준이 된다.
> 폰트·색상을 명시적으로 지시하면 해당 값이 우선이고, 지시가 없으면 아래 기본값을 따른다.

---

## 폰트 시스템

### 등록된 폰트 목록 (`src/styles/fonts.css`)

| font-family 이름 | 설명 | 사용 가능 웨이트 |
|-----------------|------|----------------|
| `KoPubBatang`      | KoPub 명조 (serif) | 300, 400, 700 |
| `KoPubDotum`       | KoPub 고딕 (sans) | 300, 400, 700 |
| `KoPubWorldBatang` | KoPub World 명조 (serif) | 300, 400, 700 |
| `KoPubWorldDotum`  | KoPub World 고딕 (sans) | 300, 400, 700 |
| `Moebius`          | 모에비우스 (한글 디스플레이) | 400, 700 |
| `RixHead`          | 릭스 헤드라인 (디스플레이) | 700 |
| `RixVita`          | 릭스 비타 (디스플레이) | 700 |
| `YoonGothic`       | 윤고딕 (sans, 4단계) | 300, 400, 500, 700 |
| `YoonMyeongjo`     | 윤명조 (serif) | 400 |

> 새 폰트 추가 시: `.ttf` 파일을 `src/styles/fonts/` 에 넣고 `src/styles/fonts.css` 에 `@font-face` 블록 추가.

---

### 기본 폰트 역할 (`src/styles/global.css`)

| CSS 변수 | 기본 폰트 | 사용처 |
|----------|----------|--------|
| `--font-display`  | `RixHead`          | 대제목, 히어로 텍스트, 임팩트 강조 |
| `--font-heading`  | `YoonGothic`       | 슬라이드 h1/h2, 섹션 제목 |
| `--font-base`     | `KoPubWorldDotum`  | 본문, UI 기본 텍스트 |
| `--font-serif`    | `KoPubWorldBatang` | 인용, 강조 블록, 명조 액센트 |
| `--font-mono`     | `KoPubDotum`       | 코드 블록, 수식, 키워드 박스 |

### PPT 제작 시 폰트 지시 예시

```
# 명시적 지시 (이 지시가 기본값보다 우선)
제목에 Moebius Bold 써줘
본문은 KoPubBatang Light 으로

# 지시 없는 경우
→ 위 기본 폰트 역할표를 따름
```

---

## 색상 팔레트

| CSS 변수 | 값 | 용도 |
|----------|----|------|
| `--color-primary`   | `#080c14` | 슬라이드/배경 기본색 (딥 다크 네이비) |
| `--color-secondary` | `#0f1523` | 카드, 패널 배경 |
| `--color-accent`    | `#00d4ff` | 주 강조색 (시안) |
| `--color-accent2`   | `#7c3aed` | 보조 강조색 (퍼플) |
| `--color-warm`      | `#f59e0b` | 포인트 색 (앰버/따뜻한 강조) |
| `--color-text`      | `#e2e8f0` | 기본 텍스트 |
| `--color-muted`     | `#64748b` | 보조 텍스트, 설명 |

---

## 슬라이드 레이아웃 원칙

- **1 슬라이드 = 1 JSX 파일** — `Slide01.jsx`, `Slide02.jsx` …
- **1 PPT 주제 = 1 폴더** — `src/presentations/<topic-name>/`
- 슬라이드는 `position: fixed; inset: 0` 으로 전체 화면 점유
- 모든 UI(네비게이션, 버튼)는 **마우스 호버 시에만 노출** (Auto-hide)
- 슬라이드 진입 시 CSS 애니메이션이 자동 실행 (컴포넌트 리마운트 방식)

## PPT 제작 지시 템플릿

```
[주제]: ...
[슬라이드 수]: N장
[폰트 지시]: (없으면 DESIGN.md 기본값)
[색상 테마]: (없으면 기본 팔레트)
[특이사항]: ...
```
