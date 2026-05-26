import './slides.css'

const STEPS = [
  {
    state: 'done',
    date: '2~3월',
    num: '1',
    title: '수요조사',
    desc: '범부처 대상 AX 컨설팅 수요 접수 (15개 부처, 39건)',
  },
  {
    state: 'done',
    date: '3.31.',
    num: '2',
    title: '과제선정',
    desc: '상반기 우선 컨설팅 대상 10개 핵심 과제 선정',
  },
  {
    state: 'done',
    date: '4.16.',
    num: '3',
    title: '착수·매칭',
    desc: '범정부 AX 컨설팅 착수식 개최 및 전담 컨설턴트 매칭',
  },
  {
    state: 'done',
    date: '4.21.~5.15.',
    num: '4',
    title: '1차 컨설팅',
    desc: '부처 Pain-Point 분석 및 AX 가이드 제시 (대면)',
  },
  {
    state: 'active',
    date: '5.7.~5.31.',
    num: '5',
    title: '2차 컨설팅',
    desc: '1차 컨설팅 바탕 데이터·인프라·솔루션 등 서면 의견서 제공',
  },
  {
    state: 'upcoming',
    date: '6~7월',
    num: '6',
    title: '추가 컨설팅',
    desc: '의견서 바탕, 부처 요구 기반 대면/서면 추가 컨설팅 진행',
  },
]

export default function Slide03() {
  return (
    <div className="slide n-slide n05">
      <div className="n-slide-hd">
        <span className="n-badge">02 추진절차 및 경과</span>
      </div>

      <div className="n05-tl">
        {STEPS.map(({ state, date, num, title, desc }) => (
          <div className={`n05-step n05-step--${state}`} key={num}>
            <span className="n05-date">{date}</span>
            <div className="n05-circle">{num}</div>
            <div className="n05-body">
              <div className="n05-title">{title}</div>
              <div className="n05-desc">{desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="n05-status">
        <strong>현재 진행 상황:</strong>&ensp;
        1차 컨설팅 종료 ('26.4.21.~5.15., 10개 부처·기관 현장방문 완료)
        &ensp;·&ensp;
        2차 서면 컨설팅 진행 중
      </div>
    </div>
  )
}
