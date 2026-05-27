import './slides.css'

export default function Slide04() {
  return (
    <div className="slide s03">

      {/* ── SW 패널 ── */}
      <div className="s03-panel s03-panel--sw">
        <div className="s03-type s03-type--sw">Software</div>
        <h2 className="s03-heading">규칙을 <em style={{color:'#a78bfa',fontStyle:'normal'}}>주는</em> 것</h2>
        <p className="s03-tagline">개발자가 규칙을 직접 코드로 작성한다</p>

        <div className="s03-flow">
          <div className="s03-box">x = 5</div>
          <span className="s03-arrow">→</span>
          <div className="s03-rule-box">
            <div className="s03-rule-name">Program</div>
            <div className="s03-rule-content">y = x + 1</div>
          </div>
          <span className="s03-arrow">→</span>
          <div className="s03-box">y = 6</div>
        </div>

        <div className="s03-sw-note">
          입력(x)이 무엇이든 규칙(+1)은 변하지 않는다.<br />
          프로그램은 <strong style={{color:'#a78bfa'}}>닫힌 구조</strong>다 — 규칙은 사람이 넣어준다.
        </div>
      </div>

      {/* ── AI 패널 ── */}
      <div className="s03-panel s03-panel--ai">
        <div className="s03-type s03-type--ai">AI</div>
        <h2 className="s03-heading">규칙을 <em style={{color:'var(--color-accent)',fontStyle:'normal'}}>찾는</em> 것</h2>
        <p className="s03-tagline">데이터로부터 스스로 규칙(함수)을 추정한다</p>

        {/* 학습 */}
        <div className="s03-phase">① 학습 (Training)</div>
        <svg className="s03-graph" viewBox="0 0 340 156">
          {/* 축 */}
          <line x1="30" y1="10" x2="30" y2="136" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
          <line x1="24" y1="130" x2="320" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
          <text x="315" y="143" fill="rgba(255,255,255,0.35)" fontSize="11">x</text>
          <text x="18"  y="14"  fill="rgba(255,255,255,0.35)" fontSize="11">y</text>
          {/* 눈금 */}
          {[1,2,3].map((v,i) => (
            <text key={i} x={78+i*70} y="143" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle">{v}</text>
          ))}
          {[2,3,4].map((v,i) => (
            <text key={i} x="20" y={120-i*40} fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle">{v}</text>
          ))}

          {/* 회귀선 y = x+1 */}
          <line
            className="s03-line"
            x1="30" y1="150" x2="280" y2="0"
            stroke="var(--color-warm)" strokeWidth="2.5" strokeLinecap="round"
            style={{ animationDelay: '2s' }}
          />
          <text
            className="s03-label"
            x="255" y="14" fill="var(--color-warm)" fontSize="11" fontWeight="bold"
            style={{ animationDelay: '3s' }}
          >y=x+1</text>

          {/* 데이터 포인트 (1,2) (2,3) (3,4) */}
          <circle className="s03-dot" cx="80"  cy="110" r="5" fill="var(--color-accent)" style={{ animationDelay: '0.5s' }} />
          <circle className="s03-dot" cx="150" cy="70"  r="5" fill="var(--color-accent)" style={{ animationDelay: '1.0s' }} />
          <circle className="s03-dot" cx="220" cy="30"  r="5" fill="var(--color-accent)" style={{ animationDelay: '1.5s' }} />
        </svg>

        {/* 추론 */}
        <div className="s03-phase" style={{ marginTop: 20 }}>② 추론 (Inference)</div>
        <div className="s03-inference">
          <div className="s03-inf s03-inf--in">x = 10</div>
          <span className="s03-inf-arrow">→</span>
          <div className="s03-inf s03-inf--out">y = 11</div>
        </div>
        <p className="s03-result-note">
          한 번도 본 적 없는 x=10을 넣어도 학습된 규칙으로 답을 도출한다.
        </p>
      </div>

    </div>
  )
}
