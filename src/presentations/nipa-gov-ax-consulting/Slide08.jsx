import './slides.css'

export default function Slide08() {
  return (
    <div className="slide n-slide n-ki">
      <div className="n-slide-hd">
        <span className="n-badge n-badge--teal">03 1차 컨설팅 주요내용</span>
      </div>

      <div className="n-ki-hd">
        <div className="n-ki-meta">
          <span className="n-ki-seq">KI-05</span>
          <span className="n-ki-title">AI 모델·인프라</span>
          <span className="n-badge">03 AI모델·인프라 영역</span>
        </div>
        <p className="n-ki-q">AI 모델 선택과 인프라 구축에서의 주요 인사이트: <em>독파모 기반 온프레미스 전환 필요</em></p>
      </div>

      <div className="n-ki-grid">
        <div className="n-ki-cell n-ki-area" style={{ gridRow: 'span 2' }}>
          <span className="n-ki-area-num">03</span>
          <span className="n-ki-area-name">AI 모델·인프라</span>
        </div>
        <div className="n-ki-cell" style={{ borderBottom: '1px solid rgba(64,128,240,.08)' }}>
          <span className="n-ki-cell-label">현황 · 문제점</span>
          <p className="n-ki-cell-text">공공 AI 서비스의 민간 상용 LLM 과의존으로 서비스 지속성·비용·보안 리스크 상존. GPU 인프라 자체 확보 미흡</p>
        </div>
        <div className="n-ki-cell" style={{ borderBottom: '1px solid rgba(64,128,240,.08)' }}>
          <span className="n-ki-cell-label">컨설팅 가이드</span>
          <p className="n-ki-cell-text">정부 전용 독파모(독자개발 파운데이션 모델) 기반 온프레미스 배포 권고. 업무 특성에 따른 경량화 모델 vs. 대형 모델 선택 기준 제시</p>
        </div>
        <div className="n-ki-cell">
          <span className="n-ki-cell-label">추가 발견사항</span>
          <p className="n-ki-cell-text">개발·운영환경 분리 미흡으로 AI 모델 버전 관리 및 성능 모니터링 체계 부재. 배포 이후 모델 성능 저하 감지 불가 상황</p>
        </div>
        <div className="n-ki-cell">
          <span className="n-ki-cell-label">개선 방향</span>
          <p className="n-ki-cell-text">MLOps 파이프라인 구축 로드맵 제시. 모델 성능 KPI 정의 및 A/B 테스트 체계 수립 권고</p>
        </div>
      </div>

      <div className="n-ki-case">
        <span className="n-ki-case-tag">사례 · 건강보험공단</span>
        <p className="n-ki-case-text">재난적의료비 지원 AI-OCR 시스템 구축 시 대용량 문서 처리를 위한 GPU 인프라 자체 확보 필요성이 컨설팅 과정에서 대두</p>
      </div>

      <div className="n-ki-msg">
        <span className="n-ki-msg-label">컨설팅 핵심 메시지</span>
        <p className="n-ki-msg-text">독파모 기반 경량화 OCR 모델 온프레미스 배포로 개인민감정보 보호와 고성능 문서 처리 동시 달성 가능</p>
      </div>
    </div>
  )
}
