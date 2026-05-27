import './slides.css'

const NODES = [
  { cls: 's02-node-1', icon: '🤖', label: 'AI 모델·서비스\n산업 확산' },
  { cls: 's02-node-2', icon: '🖥️', label: 'GPU 데이터센터\n국가 인프라' },
  { cls: 's02-node-3', icon: '🔬', label: '연구·개발\n생태계 지원' },
  { cls: 's02-node-4', icon: '📋', label: '정책 수립\n산업 컨설팅' },
]

// SVG center(240,160), node centers: top(240,28) right(380,160) bottom(240,292) left(100,160)
const LINES = [
  { x2: 240, y2: 56 },   // top
  { x2: 362, y2: 160 },  // right
  { x2: 240, y2: 264 },  // bottom
  { x2: 118, y2: 160 },  // left
]

export default function Slide03() {
  return (
    <div className="slide s02">
      <div className="s02-hero">
        국가 AI 생태계의 심장
        <strong>NIPA</strong>
      </div>

      <div className="s02-eco">
        <svg className="s02-svg" viewBox="0 0 480 320">
          {LINES.map((l, i) => (
            <line
              key={i}
              className="s02-line"
              x1="240" y1="160"
              x2={l.x2} y2={l.y2}
              style={{ animationDelay: `${0.3 + i * 0.2}s` }}
            />
          ))}
        </svg>

        <div className="s02-center-node">
          NIPA
        </div>

        {NODES.map((n, i) => (
          <div
            key={i}
            className={`s02-node ${n.cls}`}
            style={{ animationDelay: `${0.4 + i * 0.2}s` }}
          >
            <span className="s02-node-icon">{n.icon}</span>
            {n.label.split('\n').map((t, j) => <span key={j}>{t}</span>)}
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.88rem', color: 'var(--color-muted)', animation: 'fadeInUp 0.5s 1.2s ease both', opacity: 0 }}>
        AI 모델·서비스 산업 확산부터 GPU 데이터센터 운영까지 — 국가 AI 인프라의 중심
      </p>
    </div>
  )
}
