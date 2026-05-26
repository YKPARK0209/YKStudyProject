import './slides.css'

const RACK_CONFIG = [
  { units: [0,1,2,3,4,5], gpuRows: [0,1,2] },
  { units: [0,1,2,3,4,5,6,7], gpuRows: [0,1,2,3] },
  { units: [0,1,2,3,4,5,6,7], gpuRows: [0,1,2,3] },
  { units: [0,1,2,3,4,5], gpuRows: [0,1] },
]

const CARDS = [
  {
    icon: '🖥️',
    title: '정부 전용 GPU 클러스터',
    desc: 'NVIDIA H100 기반 고성능 GPU 서버 구축. NVLink 인터커넥트로 대규모 AI 학습·추론 지원',
    tag: 'On-Premise',
    accent: 'blue',
  },
  {
    icon: '🤖',
    title: '독파모 (독자개발 파운데이션 모델)',
    desc: '한국어 특화 공공 LLM. 정부 보안정책 준수 온프레미스 완전 배포 지원',
    tag: '국산 AI',
    accent: 'teal',
  },
  {
    icon: '🔒',
    title: '보안·격리 네트워크',
    desc: '물리적 망분리 및 제로트러스트 아키텍처 적용. 공공데이터 외부 유출 차단',
    tag: '망분리',
    accent: 'warm',
  },
  {
    icon: '📊',
    title: 'MLOps 플랫폼',
    desc: '모델 버전관리·A/B 테스트·성능 모니터링 통합 대시보드. 지속적 모델 개선 환경',
    tag: 'MLOps',
    accent: 'green',
  },
]

export default function Slide09() {
  return (
    <div className="slide n-slide n-gpu">
      <div className="n-slide-hd">
        <span className="n-badge n-badge--warm">AX 혁신 인프라</span>
        <span className="n-slide-hd-title">정부 전용 GPU 클러스터 및 독파모 아키텍처</span>
      </div>

      <div className="n-gpu-body">
        {/* Left: Server rack visualization */}
        <div className="n-gpu-vis">
          <div className="n-gpu-dc">
            {RACK_CONFIG.map((rack, ri) => (
              <div className="n-gpu-rack" key={ri} style={{ animationDelay: `${ri * 0.4}s` }}>
                {rack.units.map((_, ui) => (
                  <div
                    className={`n-gpu-unit${rack.gpuRows.includes(ui) ? ' n-gpu-unit--gpu' : ''}`}
                    key={ui}
                    style={{ animationDelay: `${(ri * 0.2 + ui * 0.1).toFixed(1)}s` }}
                  >
                    <div className="n-gpu-led" />
                    <div className="n-gpu-unit-bar" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="n-gpu-dc-label">정부 전용 GPU 데이터센터</div>
        </div>

        {/* Right: Spec cards */}
        <div className="n-gpu-cards">
          {CARDS.map(({ icon, title, desc, tag, accent }) => (
            <div className={`n-gpu-card n-gpu-card--${accent}`} key={title}>
              <div className="n-gpu-card-hd">
                <span className="n-gpu-card-icon">{icon}</span>
                <span className="n-gpu-card-title">{title}</span>
                <span className="n-gpu-card-tag">{tag}</span>
              </div>
              <div className="n-gpu-card-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
