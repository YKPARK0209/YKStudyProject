import './slides.css'

const TIMELINE = [
  { label: 'NIPA 입사', year: '2017' },
  { label: 'CMMI 심사원 활동' },
  { label: 'SW 프로세스(SP) 운영' },
  { label: '국회 대관 업무 담당' },
  { label: '독파모 사업 · 단계평가 기획' },
  { label: '메가 특화 파운데이션 기획' },
  { label: '국가AX원스톱지원센터 부처 컨설팅', year: 'NOW', active: true },
]

export default function Slide01() {
  return (
    <div className="slide s01">
      <div className="s01-left">
        <div className="s01-badge">NIPA</div>
        <h1 className="s01-name">박영근</h1>
        <p className="s01-role">
          국가AX원스톱지원센터<br />
          부처 컨설팅 담당
        </p>
      </div>

      <div className="s01-divider" />

      <div className="s01-right">
        <p className="s01-tl-label">Career</p>
        <div className="s01-tl">
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className={`s01-item${item.active ? ' s01-item--active' : ''}`}
              style={{ animationDelay: `${0.2 + i * 0.12}s` }}
            >
              <div className={`s01-dot${item.active ? ' s01-dot--active' : ''}`} />
              <span className={`s01-item-text${item.active ? ' s01-item-text--active' : ''}`}>
                {item.label}
              </span>
              {item.year && <span className="s01-year">{item.year}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
