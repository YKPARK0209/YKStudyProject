import './slides.css'

export default function Slide01() {
  return (
    <div className="slide n-slide n01">
      <header className="n01-header">
        <span className="n01-logo-mark">nipa</span>
        <span className="n01-logo-sep">|</span>
        <span className="n01-logo-name">
          정보통신산업진흥원
          <em>National IT Industry Promotion Agency</em>
        </span>
      </header>

      <div className="n01-body">
        <span className="n01-tag">RESULT</span>
        <h1 className="n01-title">
          범정부 AX 1차 컨설팅<br />결과 보고
        </h1>
        <div className="n01-line" />
      </div>

      <footer className="n01-footer">
        <span>2026. 5. 27.</span>
        <span className="n01-dot">·</span>
        <span>정보통신산업진흥원 AX원스톱지원센터</span>
        <span className="n01-dot">·</span>
        <span>정보통신산업진흥원 NIPA</span>
      </footer>
    </div>
  )
}
