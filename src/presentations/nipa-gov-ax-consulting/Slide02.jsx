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

export default function Slide02() {
  return (
    <div className="slide n-slide n02m">
      <div className="n-slide-hd">
        <span className="n-badge">01 컨설팅 개요</span>
        <span className="n-slide-hd-num">상반기 우선 선정 · 10개 부처·기관</span>
      </div>

      <div className="n02m-overview">
        <div className="n02m-card">
          <span className="n02m-label">BACKGROUND</span>
          <span className="n02m-sub">추진배경</span>
          <p className="n02m-text">「정부 AX사업 全주기 원스톱 지원방안」('26.1.28. 과기장관회의 의결) 후속조치로 全부처 AX사업(33개 부처·206개 2.4조원)에 대한 체계적 지원체계 구축 추진</p>
        </div>
        <div className="n02m-card">
          <span className="n02m-label">PURPOSE</span>
          <span className="n02m-sub">컨설팅 목적</span>
          <p className="n02m-text">부처별 AX 필요사항 발굴 맞춤형 컨설팅 사업 연계로 이어지는 전주기 지원체계를 마련하여 AI 전문기업 컨설턴트의 1:1 밀착 자문을 통해 부처별 AX 사업의 완성도 제고</p>
        </div>
        <div className="n02m-card">
          <span className="n02m-label">APPROACH</span>
          <span className="n02m-sub">추진방식</span>
          <p className="n02m-text">민간 AI 전문기업으로 구성된 'AX컨설팅단'을 10개 핵심과제와 1:1 매칭하여, 부처·기관별 대면 방식으로 1차 컨설팅 수행 ('26.4.21. ~ 5.15.)</p>
        </div>
      </div>

      <div className="n02m-divider">
        <span className="n-badge n-badge--gray">10대 핵심 컨설팅 과제</span>
      </div>

      <div className="n02m-tasks">
        {TASKS.map(({ num, icon, agency, task }) => (
          <div className="n02m-task" key={num}>
            <span className="n02m-task-num">{num}</span>
            <span className="n02m-task-icon">{icon}</span>
            <div className="n02m-task-info">
              <div className="n02m-task-agency">{agency}</div>
              <div className="n02m-task-name">{task}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
