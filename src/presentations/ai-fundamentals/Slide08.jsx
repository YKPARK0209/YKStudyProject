import './slides.css'

// SVG center (170,170), spokes to: top(170,55) right(285,170) bottom(170,285) left(55,170)
const SPOKES = [
  { x2: 170, y2: 55 },
  { x2: 285, y2: 170 },
  { x2: 170, y2: 285 },
  { x2: 55,  y2: 170 },
]

const TOOLS = [
  { cls: 's07-node-top',    icon: '📁', label: '로컬 폴더' },
  { cls: 's07-node-right',  icon: '🐙', label: 'GitHub API' },
  { cls: 's07-node-bottom', icon: '🗄️', label: '사내 DB' },
  { cls: 's07-node-left',   icon: '🌐', label: '외부 도구' },
]

const STEPS = [
  { text: '연구자 지시',    sub: '"A프로젝트 데이터 분석해 줘"' },
  { text: '도구 선택',      sub: 'Python 실행기 / GitHub API 등 자율 선택' },
  { text: '코드 작성 · 실행', sub: '스스로 코드 생성 후 즉시 실행' },
  { text: '에러 자가 디버깅', sub: '실패 시 원인 파악 → 재시도' },
  { text: '결과 리포트 출력', sub: '분석 결과를 구조화된 문서로 정리' },
]

export default function Slide08() {
  return (
    <div className="slide s07">
      {/* 왼쪽: LLM 연결망 다이어그램 */}
      <div className="s07-left">
        <div style={{ marginBottom: 16 }}>
          <div className="chip chip--purple">3부 · 핵심 차별화</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            하네스 엔지니어링
          </h2>
          <p style={{ fontSize: '0.83rem', color: 'var(--color-muted)', marginTop: 6 }}>
            AI 두뇌에 손과 발을 달아주는 디지털 연결망
          </p>
        </div>

        <div className="s07-diagram">
          <svg className="s07-svg" viewBox="0 0 340 340">
            {SPOKES.map((s, i) => (
              <line
                key={i}
                className="s07-spoke"
                x1="170" y1="170"
                x2={s.x2} y2={s.y2}
                style={{ animationDelay: `${0.3 + i * 0.2}s` }}
              />
            ))}
          </svg>

          <div className="s07-center">
            <span className="s07-center-icon">🧠</span>
            <span className="s07-center-label">LLM</span>
          </div>

          {TOOLS.map((t, i) => (
            <div
              key={i}
              className={`s07-node ${t.cls}`}
              style={{ animationDelay: `${0.5 + i * 0.2}s` }}
            >
              <span className="s07-node-icon">{t.icon}</span>
              {t.label}
            </div>
          ))}
        </div>
      </div>

      {/* 오른쪽: 에이전트 루프 */}
      <div className="s07-right">
        <p className="s07-loop-title">Autonomous Agent Loop</p>
        <div className="s07-steps">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="s07-step"
              style={{ animationDelay: `${0.4 + i * 0.15}s` }}
            >
              <span className="s07-step-n">{i + 1}</span>
              <div className="s07-step-body">
                <div className="s07-step-text">{s.text}</div>
                <div className="s07-step-sub">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 20, padding: '12px 18px',
          background: 'rgba(124,58,237,0.07)',
          border: '1px solid rgba(124,58,237,0.2)',
          borderRadius: 12,
          fontSize: '0.83rem', color: 'var(--color-muted)', lineHeight: 1.6,
          opacity: 0, animation: 'fadeInUp 0.5s 1.5s ease forwards',
        }}>
          <strong style={{color:'#a78bfa'}}>MCP(Model Context Protocol)</strong> — 표준화된 하네스 연결 규약.<br />
          로컬 폴더, DB, API를 플러그인처럼 LLM에 연결한다.
        </div>
      </div>
    </div>
  )
}
