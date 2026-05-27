import './slides.css'

const GPU_COUNT = 32

export default function Slide06() {
  return (
    <div className="slide s05">
      <div>
        <div className="chip">2부 · 인프라</div>
        <h1 className="slide-h1">왜 AI는 <em>GPU</em>를 갈구하는가?</h1>
      </div>

      {/* CPU vs GPU 비교 */}
      <div className="s05-compare">
        <div className="s05-box s05-box--cpu">
          <div className="s05-box-hd">
            <span className="s05-box-icon">🏎️</span>
            <div>
              <div className="s05-box-name">CPU</div>
              <div className="s05-box-title">페라리 4대 — 직렬 처리</div>
            </div>
          </div>
          <div className="s05-units">
            {[0,1,2,3].map(i => (
              <div key={i} className="s05-unit s05-unit--cpu" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>🏎️</div>
            ))}
          </div>
          <p className="s05-box-desc">
            코어 4~64개, 각각 매우 빠름.<br />
            하나씩 순서대로 처리 — 복잡한 논리에 탁월하지만 AI의 방대한 행렬 연산엔 부족하다.
          </p>
        </div>

        <div className="s05-box s05-box--gpu">
          <div className="s05-box-hd">
            <span className="s05-box-icon">🚌</span>
            <div>
              <div className="s05-box-name">GPU</div>
              <div className="s05-box-title">버스 수천 대 — 병렬 처리</div>
            </div>
          </div>
          <div className="s05-units">
            {Array.from({ length: GPU_COUNT }).map((_, i) => (
              <div key={i} className="s05-unit s05-unit--gpu" style={{ animationDelay: `${0.05 * i}s` }} />
            ))}
          </div>
          <p className="s05-box-desc">
            코어 수천~수만 개, 속도는 느리지만 동시에 병렬 처리.<br />
            트랜스포머의 거대한 행렬 곱셈을 한꺼번에 처리 — AI의 필수 인프라.
          </p>
        </div>
      </div>

      {/* 학습 방법 비교 */}
      <div className="s05-learning">
        <div className="s05-method s05-method--scratch" style={{ animationDelay: '0.3s' }}>
          <div className="s05-method-badge">From Scratch</div>
          <div className="s05-method-title">프롬 스크래치 (사전 학습)</div>
          <p className="s05-method-desc">
            백지 상태의 아기 뇌에 위키백과·책·인터넷 전체를 넣어
            대학생으로 키우는 과정.<br />
            <strong style={{color:'var(--color-warm)'}}>초거대 GPU 클러스터가 수개월 필요 → 수백억 원 비용.</strong>
          </p>
        </div>

        <div className="s05-method s05-method--ft" style={{ animationDelay: '0.5s' }}>
          <div className="s05-method-badge">Fine-Tuning</div>
          <div className="s05-method-title">파인튜닝 (미세 조정)</div>
          <p className="s05-method-desc">
            이미 똑똑한 대학생(사전 학습 모델)에게 우리 연구소의
            특수 보안 문서를 전공 교재처럼 읽혀 전문 연구원으로 만드는 과정.<br />
            <strong style={{color:'#34d399'}}>상대적으로 적은 데이터·비용으로 도메인 특화 가능.</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
