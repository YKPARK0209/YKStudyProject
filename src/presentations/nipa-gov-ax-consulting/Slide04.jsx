import './slides.css'

const TASKS = [
  { num: '01', icon: '🌿', agency: '기후에너지환경부 국립환경과학원', task: 'AI기반 환경영향평가 체계 구축' },
  { num: '02', icon: '🦋', agency: '기후에너지환경부 국립생물자원관', task: '한국의 생물다양성 AI 구축' },
  { num: '03', icon: '📚', agency: '문화체육관광부 국립중앙도서관', task: '도서관 AI 학습데이터 구축·개방 확대' },
  { num: '04', icon: '🏥', agency: '보건복지부 건강보험심사평가원', task: 'AI 기반 내 주변 병원·약국 찾기 서비스' },
  { num: '05', icon: '📋', agency: '보건복지부 국민건강보험공단', task: '재난적의료비 지원 AI-OCR 시스템 도입' },
  { num: '06', icon: '📞', agency: '성평등가족부 한국건강가정진흥원', task: '다누리콜센터 AX기반 고도화' },
  { num: '07', icon: '🚢', agency: '해양수산부 선박해양플랜트연구소', task: 'AI 기반 지능형 해상교통정보 시스템' },
  { num: '08', icon: '🤖', agency: '국민권익위원회', task: 'AI기반 범정부 전화상담 허브시스템 구축' },
  { num: '09', icon: '🔥', agency: '소방청', task: 'AI 기반 소방 및 안전 대응체계 구축' },
  { num: '10', icon: '🌲', agency: '산림청', task: '스마트 산림경영 테스트베드 구축' },
]

export default function Slide04() {
  return (
    <div className="slide n-slide n04">
      <div className="n-slide-hd">
        <span className="n-badge">10대 핵심 컨설팅 과제</span>
        <span className="n-slide-hd-num">상반기 우선 선정 · 10개 부처·기관</span>
      </div>

      <div className="n04-grid">
        {TASKS.map(({ num, icon, agency, task }) => (
          <div className="n04-item" key={num}>
            <span className="n04-num">{num}</span>
            <span className="n04-icon">{icon}</span>
            <div className="n04-info">
              <div className="n04-agency">{agency}</div>
              <div className="n04-task">{task}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
