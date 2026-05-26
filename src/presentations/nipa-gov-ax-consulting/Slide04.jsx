import './slides.css'

export default function Slide04() {
  return (
    <div className="slide n-slide n-ki">
      <div className="n-slide-hd">
        <span className="n-badge n-badge--teal">03 1차 컨설팅 주요내용</span>
      </div>

      <div className="n-ki-hd">
        <div className="n-ki-meta">
          <span className="n-ki-seq">KI-03</span>
          <span className="n-ki-title">기획</span>
          <span className="n-badge">01 기획 영역</span>
        </div>
        <p className="n-ki-q">AI 사업 기획 단계의 핵심 인사이트: <em>유스케이스 중심 재설계 필요</em></p>
      </div>

      <div className="n-ki-grid">
        <div className="n-ki-cell n-ki-area" style={{ gridRow: 'span 2' }}>
          <span className="n-ki-area-num">01</span>
          <span className="n-ki-area-name">기획</span>
        </div>
        <div className="n-ki-cell" style={{ borderBottom: '1px solid rgba(64,128,240,.08)' }}>
          <span className="n-ki-cell-label">현황 · 문제점</span>
          <p className="n-ki-cell-text">다수 과제가 기능 나열 중심의 단순 DX 수준에 머물러 있으며, AI 도입 목적과 기대효과가 불분명. 유스케이스 도출 없이 시스템 발주로 이어지는 경우 다수 포착</p>
        </div>
        <div className="n-ki-cell" style={{ borderBottom: '1px solid rgba(64,128,240,.08)' }}>
          <span className="n-ki-cell-label">컨설팅 가이드</span>
          <p className="n-ki-cell-text">업무 프로세스 분석 기반의 문제해결 중심 유스케이스 도출 선행 권고. As-Is / To-Be 분석을 통한 AI 도입 타당성 검증 프레임 제시</p>
        </div>
        <div className="n-ki-cell">
          <span className="n-ki-cell-label">추가 발견사항</span>
          <p className="n-ki-cell-text">현업 담당자의 AI 리터러시 부족으로 사업 목표와 기술 구현 간 인식 차이 발생. POC 없이 전면 구축으로 진행하는 리스크 요소 다수</p>
        </div>
        <div className="n-ki-cell">
          <span className="n-ki-cell-label">개선 방향</span>
          <p className="n-ki-cell-text">컨설턴트-담당자 공동 워크숍을 통한 AI 도입 로드맵 수립. 소규모 POC 선행 후 단계적 확대 방식 채택 권고</p>
        </div>
      </div>

      <div className="n-ki-case">
        <span className="n-ki-case-tag">사례 · 소방청</span>
        <p className="n-ki-case-text">신고부터 사후분석까지 부서별 다양한 업무 특성 탓에 추진 과제 도출 애로. 현장 대응 업무와 분석 업무의 AI 활용 방향이 혼재되어 핵심 유스케이스 특정에 어려움</p>
      </div>

      <div className="n-ki-msg">
        <span className="n-ki-msg-label">컨설팅 핵심 메시지</span>
        <p className="n-ki-msg-text">골든타임을 저해하는 병목 구간을 우선 분석하여 업무 프로세스 중심의 단계별 유스케이스로 재구조화 필요</p>
      </div>
    </div>
  )
}
