import './slides.css'

export default function Slide01() {
  return (
    <div className="slide s-cover">
      <div className="scov-bg-grid" />

      <div className="scov-body">
        <div className="scov-part">생성형AI 아는척 하기</div>

        <h1 className="scov-title">
          생성형 AI<br />
          <em>기초 및 활용</em>
        </h1>

        <p className="scov-sub">AI의 기초부터 잘쓰는법까지</p>

        <div className="scov-line" />

        <div className="scov-meta">
          <span>박영근</span>
          <span className="scov-sep">·</span>
          <span>정보통신산업진흥원</span>
          <span className="scov-sep">·</span>
          <span>2026. 5.</span>
        </div>
      </div>
    </div>
  )
}
