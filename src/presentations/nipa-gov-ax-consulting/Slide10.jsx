import './slides.css'

export default function Slide10() {
  return (
    <div className="slide n-slide n10">
      <div className="n-slide-hd">
        <span className="n-badge">04 향후계획</span>
      </div>

      <p className="n10-sub">
        범정부 AX 컨설팅 <em>3단계 추진 로드맵</em>
      </p>

      <div className="n10-flow">
        <div className="n10-stage">
          <div className="n10-stage-hd">
            <span className="n10-phase">Phase 1</span>
            <span className="n10-date">'26.6월</span>
          </div>
          <div className="n10-stage-title">컨설팅 완료 및 의견서 배포</div>
          <div className="n10-bullets">
            <div className="n10-bullet">2차 서면 컨설팅 의견서 10개 과제 전체 제공</div>
            <div className="n10-bullet">1차 컨설팅 종합 결과 보고서 작성·배포</div>
            <div className="n10-bullet">부처별 컨설팅 이행 계획 수립 지원</div>
          </div>
          <div className="n10-note">상반기 컨설팅 마무리</div>
        </div>

        <div className="n10-arrow">▶</div>

        <div className="n10-stage">
          <div className="n10-stage-hd">
            <span className="n10-phase">Phase 2</span>
            <span className="n10-date">'26.7~9월</span>
          </div>
          <div className="n10-stage-title">추가 컨설팅 및 사업 연계</div>
          <div className="n10-bullets">
            <div className="n10-bullet">부처 요구 기반 대면·서면 추가 컨설팅 진행</div>
            <div className="n10-bullet">컨설팅 결과물 기반 AX 지원사업 연계</div>
            <div className="n10-bullet">컨설팅 이행 모니터링 및 성과지표 관리</div>
          </div>
          <div className="n10-note">컨설팅-사업 연계 본격화</div>
        </div>

        <div className="n10-arrow">▶</div>

        <div className="n10-stage">
          <div className="n10-stage-hd">
            <span className="n10-phase">Phase 3</span>
            <span className="n10-date">'26.10월~</span>
          </div>
          <div className="n10-stage-title">하반기 컨설팅 확대 운영</div>
          <div className="n10-bullets">
            <div className="n10-bullet">하반기 컨설팅 대상 과제 선정 (15개 이상)</div>
            <div className="n10-bullet">상반기 인사이트 기반 컨설팅 방법론 고도화</div>
            <div className="n10-bullet">범부처 AX 컨설팅 수행 체계 상시 운영화</div>
          </div>
          <div className="n10-note">전 부처 대상 확대</div>
        </div>
      </div>

      <div className="n10-conclusion">
        <strong>목표</strong>: 범정부 AX 컨설팅을 통해 부처별 AI 도입 역량 강화 및
        NIPA AX 원스톱 지원 체계를 지속적으로 고도화
      </div>
    </div>
  )
}
