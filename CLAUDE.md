# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project: Vibe-Deck

웹 기술(HTML/CSS/JS + 프론트엔드 프레임워크)을 활용해 PPT 형식의 발표 자료를 제작하고 아카이빙하는 저장소.

---

## Commands

```bash
npm run dev      # 개발 서버 실행 (localhost:5173)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 검사
```

## Tech Stack

- **Vite + React** (SPA)
- **React Router DOM** — 슬라이드 간 네비게이션
- **CSS Variables** — 테마/색상 관리

---

## 일반 행동 지침

> **트레이드오프**: 본 지침은 속도보다 신중함에 우선순위를 둔다. 사소한 작업은 상황에 맞게 판단한다.

### 1. 구현 전 사고 (Think Before Coding)

가정하지 않는다. 모호함을 숨기지 않는다. 트레이드오프를 명확히 밝힌다.

- 자신의 가정을 명시적으로 기술한다. 불확실한 경우 질문한다.
- 해석의 여지가 여러 가지라면 임의로 선택하지 말고 대안들을 제시한다.
- 더 간단한 접근 방식이 있다면 제안한다. 정당한 사유가 있다면 사용자의 요청에 반대 의견을 제시한다.
- 불분명한 부분이 있다면 작업을 중단한다. 혼란스러운 부분을 구체적으로 언급하며 질문한다.

### 2. 단순성 우선 (Simplicity First)

- 문제를 해결하는 최소한의 코드만 작성한다. 추측에 기반한 코드는 배제한다.
- 요청되지 않은 기능은 추가하지 않는다.
- 일회성 코드를 위해 추상화 계층을 만들지 않는다.
- 요청되지 않은 유연성이나 설정 가능성을 고려하지 않는다.
- 발생 불가능한 시나리오에 대한 예외 처리를 하지 않는다.
- 200줄의 코드를 50줄로 줄일 수 있다면 코드를 다시 작성한다.
- "시니어 엔지니어가 보기에 이 코드가 지나치게 복잡한가?"라고 자문한다. 그렇다면 단순화한다.

### 3. 정밀한 수정 (Surgical Changes)

필요한 부분만 수정한다. 본인이 만든 코드의 뒷정리만 수행한다.

- 인접한 코드, 주석, 포맷을 임의로 개선하지 않는다.
- 망가지지 않은 부분을 리팩토링하지 않는다.
- 본인의 스타일과 다르더라도 기존 스타일을 따른다.
- 작업과 무관한 데드 코드를 발견하면 보고하되 직접 삭제하지 않는다.
- 본인의 수정으로 인해 불필요해진 임포트, 변수, 함수는 제거한다.
- 기존에 존재하던 데드 코드는 요청이 없는 한 그대로 둔다.
- 변경된 모든 라인은 사용자의 요청사항과 직접적으로 연결되어야 한다.

### 4. 목표 중심 실행 (Goal-Driven Execution)

성공 기준을 정의한다. 검증될 때까지 반복한다.

- 작업을 검증 가능한 목표로 변환한다.
- 다단계 작업의 경우 간략한 계획을 수립하고 각 단계별로 검증을 거친다.
- 성공 기준이 명확해야 독립적인 작업이 가능하다.

---

## 프로젝트 특화 방향성

### 목적
HTML 등 웹 기술을 활용하여 PPT 같은 발표 자료를 생성하고 아카이빙하는 저장소.

### 파일 및 폴더 구조 원칙

| 단위 | 구조 |
|------|------|
| 1 슬라이드(페이지) | 독립된 `.jsx` 컴포넌트 파일 |
| 1 PPT 주제 | `src/presentations/<topic-name>/` 폴더 |

이 원칙을 **엄격하게** 준수한다.

```
src/
├── components/        # 재사용 가능한 공통 컴포넌트 (SlideLayout, NavControls 등)
├── styles/            # 전역 CSS, 테마 변수
├── presentations/
│   └── <topic-name>/
│       ├── Slide01.jsx
│       ├── Slide02.jsx
│       └── index.jsx  # 해당 PPT의 라우터/진입점
└── main.jsx
```

### UI/UX 원칙
메뉴, 컨트롤러 등 모든 UI는 마우스 호버 시에만 나타나는 **자동 숨김(Auto-hide)** 방식을 채택한다. 몰입감 극대화가 목표다.

### 스타일링
CSS Variables로 테마를 관리한다. 3가지 핵심 색상:

```css
--color-primary    /* 주색 */
--color-secondary  /* 보조색 */
--color-accent     /* 강조색 */
```

---

## Git

- Remote: https://github.com/YKPARK0209/YKStudyProject.git
- Default branch: master
