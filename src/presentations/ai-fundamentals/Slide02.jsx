import './slides.css'

const TIMELINE = [
  { label: '정보통신산업진흥원 입사',                year: '2017~' },
  { label: 'SW프로세스 품질인증 심사 및 기관 운영',   year: '2017~2020' },
  { label: '개방형OS 보급 확산 사업 담당',           year: '2020~2022' },
  { label: 'NIPA 국회 대관 업무',                   year: '2022~2024' },
  { label: '독자 AI 파운데이션 모델 단계 평가 기획',  year: '2025' },
  { label: '특화 AI 파운데이션 모델 기획',            year: '2025~2026' },
  { label: '국가AX원스톱지원센터 부처 컨설팅 담당',   year: '2026', active: true },
]

export default function Slide02() {
  return (
    <div className="slide s01">
      <div className="s01-left">
        <div className="s01-badge">NIPA</div>
        <h1 className="s01-name">박영근</h1>
        <p className="s01-role">
          정보통신산업진흥원<br />
          AI융합본부
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
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
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
