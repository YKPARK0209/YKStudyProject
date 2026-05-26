import './slides.css'

export default function Slide03() {
  return (
    <div className="slide n-slide n03">
      <div className="n-slide-hd">
        <span className="n-badge">01 컨설팅 개요</span>
      </div>

      <div className="n03-cards">
        <div className="n03-card">
          <span className="n03-card-label">BACKGROUND</span>
          <span className="n03-card-sub">추진배경</span>
          <p className="n03-card-text">
            「정부 AX사업 全주기 원스톱 지원방안」('26.1.28. 과기장관회의 의결) 후속조치로
            全부처 AX사업(33개 부처·206개 2.4조원)에 대한 체계적 지원체계 구축 추진
          </p>
        </div>

        <div className="n03-card">
          <span className="n03-card-label">PURPOSE</span>
          <span className="n03-card-sub">컨설팅 목적</span>
          <p className="n03-card-text">
            부처별 AX 필요사항 발굴 맞춤형 컨설팅 사업 연계로 이어지는 전주기 지원체계를 마련하여
            AI 전문기업 컨설턴트의 1:1 밀착 자문을 통해 부처별 AX 사업의 완성도 제고
          </p>
        </div>

        <div className="n03-card">
          <span className="n03-card-label">APPROACH</span>
          <span className="n03-card-sub">추진방식</span>
          <p className="n03-card-text">
            민간 AI 전문기업으로 구성된 'AX컨설팅단'을 10개 핵심과제와 1:1 매칭하여,
            부처·기관별 대면 방식으로 1차 컨설팅 수행 ('26.4.21. ~ 5.15.)
          </p>
        </div>
      </div>
    </div>
  )
}
