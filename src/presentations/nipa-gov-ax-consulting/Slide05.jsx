import './slides.css'

export default function Slide05() {
  return (
    <div className="slide n-slide n-ki">
      <div className="n-slide-hd">
        <span className="n-badge n-badge--teal">03 1차 컨설팅 주요내용</span>
      </div>

      <div className="n-ki-hd">
        <div className="n-ki-meta">
          <span className="n-ki-seq">KI-04</span>
          <span className="n-ki-title">데이터 거버넌스</span>
          <span className="n-badge">02 데이터 영역</span>
        </div>
        <p className="n-ki-q">데이터 수집·품질·연계에서의 주요 인사이트: <em>학습 가능한 데이터 확보가 선행 과제</em></p>
      </div>

      <div className="n-ki-grid">
        <div className="n-ki-cell n-ki-area" style={{ gridRow: 'span 2' }}>
          <span className="n-ki-area-num">02</span>
          <span className="n-ki-area-name">데이터 거버넌스</span>
        </div>
        <div className="n-ki-cell" style={{ borderBottom: '1px solid rgba(64,128,240,.08)' }}>
          <span className="n-ki-cell-label">현황 · 문제점</span>
          <p className="n-ki-cell-text">부처 내 데이터가 부서별로 분산·단절되어 있으며, 표준화 미흡으로 AI 학습에 활용 가능한 정제 데이터 확보가 어려운 상황</p>
        </div>
        <div className="n-ki-cell" style={{ borderBottom: '1px solid rgba(64,128,240,.08)' }}>
          <span className="n-ki-cell-label">컨설팅 가이드</span>
          <p className="n-ki-cell-text">데이터 표준화 가이드 수립 및 부처 공통 데이터 카탈로그 구성. AI 학습용 레이블링 체계 및 품질 검증 프로세스 선행 구축 권고</p>
        </div>
        <div className="n-ki-cell">
          <span className="n-ki-cell-label">추가 발견사항</span>
          <p className="n-ki-cell-text">개인정보 포함 데이터의 가명처리 절차 미비로 의료·복지 분야 AI 학습 데이터 활용에 법적 제약이 걸림돌로 작용</p>
        </div>
        <div className="n-ki-cell">
          <span className="n-ki-cell-label">개선 방향</span>
          <p className="n-ki-cell-text">가명정보 활용 절차 표준화 및 데이터 결합 전담 신청 창구 마련. 비식별화 처리 자동화 파이프라인 구축 방안 제시</p>
        </div>
      </div>

      <div className="n-ki-case">
        <span className="n-ki-case-tag">사례 · 산림청</span>
        <p className="n-ki-case-text">임업 현장 센서·드론·현장조사 데이터의 수집 체계가 미흡하여 스마트 산림경영 AI 학습 데이터 확보에 어려움</p>
      </div>

      <div className="n-ki-msg">
        <span className="n-ki-msg-label">컨설팅 핵심 메시지</span>
        <p className="n-ki-msg-text">산림 IoT 데이터 통합 파이프라인 구축 및 표준 레이블링 체계 선행 수립 후 AI 모델 개발 착수를 권고</p>
      </div>
    </div>
  )
}
