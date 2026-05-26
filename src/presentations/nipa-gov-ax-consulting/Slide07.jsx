import './slides.css'

export default function Slide07() {
  return (
    <div className="slide n-slide n-ki">
      <div className="n-slide-hd">
        <span className="n-badge n-badge--teal">03 1차 컨설팅 주요내용</span>
      </div>

      <div className="n-ki-hd">
        <div className="n-ki-meta">
          <span className="n-ki-seq">KI-06</span>
          <span className="n-ki-title">법·제도·규제</span>
          <span className="n-badge">04 법·제도·규제 영역</span>
        </div>
        <p className="n-ki-q">AI 서비스 운영의 법적·제도적 장벽과 해소 방안: <em>법적 근거 선행, 단계적 서비스 확대</em></p>
      </div>

      <div className="n-ki-grid">
        <div className="n-ki-cell n-ki-area" style={{ gridRow: 'span 2' }}>
          <span className="n-ki-area-num">04</span>
          <span className="n-ki-area-name">법·제도·규제</span>
        </div>
        <div className="n-ki-cell" style={{ borderBottom: '1px solid rgba(64,128,240,.08)' }}>
          <span className="n-ki-cell-label">현황 · 문제점</span>
          <p className="n-ki-cell-text">AI 기반 행정 산출물의 법적 효력 불명확, 공공 AI 의사결정의 책임소재 규정 미비로 부처의 AI 서비스 도입 주저</p>
        </div>
        <div className="n-ki-cell" style={{ borderBottom: '1px solid rgba(64,128,240,.08)' }}>
          <span className="n-ki-cell-label">컨설팅 가이드</span>
          <p className="n-ki-cell-text">AI 보조 결정 도구 규정 방식 및 법적 근거 마련 절차 컨설팅. 행정 AI 도입 시 리스크 등급 분류 체계 및 단계별 규제 샌드박스 활용 권고</p>
        </div>
        <div className="n-ki-cell">
          <span className="n-ki-cell-label">추가 발견사항</span>
          <p className="n-ki-cell-text">콜센터·민원 AI 서비스에서 이용자 개인정보 처리 동의 절차 및 AI 사용 고지 의무 준수 방법 불명확</p>
        </div>
        <div className="n-ki-cell">
          <span className="n-ki-cell-label">개선 방향</span>
          <p className="n-ki-cell-text">AI 이용자 고지 표준 템플릿 및 개인정보 처리 동의 절차 가이드 제공. 관계 부처 사전 유권해석 신청 절차 지원</p>
        </div>
      </div>

      <div className="n-ki-case">
        <span className="n-ki-case-tag">사례 · 건강보험심사평가원</span>
        <p className="n-ki-case-text">AI 기반 내 주변 병원·약국 찾기 서비스의 의료법 저촉 가능성 및 AI 추천 행위의 책임소재 불명확</p>
      </div>

      <div className="n-ki-msg">
        <span className="n-ki-msg-label">컨설팅 핵심 메시지</span>
        <p className="n-ki-msg-text">의료 AI 추천 서비스는 '정보 제공' 범위 명확화 및 AI 보조 수단 규정 선행 후 단계적 서비스 확대 필요</p>
      </div>
    </div>
  )
}
