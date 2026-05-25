import './slides.css'

const OLD_STEPS = [
  { n: '1', text: '질문 입력' },
  { n: '2', text: '즉시 답변 출력' },
]

const NEW_STEPS = [
  { n: '1', text: '질문 수신' },
  { n: '2', text: '내부 추론 시작', sub: '"이 접근법이 맞나? 다른 방법은?"' },
  { n: '3', text: '논리 검증 · 재사고', sub: '"아니다, 처음부터 다시 생각하자"' },
  { n: '4', text: '최종 검토 후 출력' },
]

export default function Slide06() {
  return (
    <div className="slide s06">
      <div>
        <div className="chip">3부 · 트렌드</div>
        <h1 className="slide-h1">패러다임의 전환: <em>학습 → 추론</em></h1>
      </div>

      {/* 트렌드 방향 */}
      <div className="s06-shift">
        <div className="s06-shift-item s06-shift-item--old">⚙️ Training 시대<br/><small style={{fontWeight:400,fontSize:'0.78rem'}}>파라미터 크기 경쟁</small></div>
        <span className="s06-shift-arrow">→</span>
        <div className="s06-shift-item s06-shift-item--new">💡 Inference 시대<br/><small style={{fontWeight:400,fontSize:'0.78rem'}}>Test-time Compute</small></div>
      </div>

      {/* 일반 모델 vs 추론 모델 비교 */}
      <div className="s06-compare">
        <div className="s06-model s06-model--old">
          <div className="s06-model-badge">일반 모델 (구세대)</div>
          <div className="s06-model-title">🏧 자판기형 — 질문하면 즉시 답변</div>
          <div className="s06-steps">
            {OLD_STEPS.map((s, i) => (
              <div key={i} className="s06-step s06-step--old">
                <span className="s06-step-n">{s.n}</span>
                {s.text}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.83rem', color: 'var(--color-muted)', marginTop: 'auto', lineHeight: 1.6 }}>
            빠르지만 복잡한 논리 문제에선 오류 발생.<br />
            파라미터 크기와 사전학습 데이터양이 성능 결정.
          </p>
        </div>

        <div className="s06-model s06-model--new">
          <div className="s06-model-badge">추론 모델 (o1, o3, R1…)</div>
          <div className="s06-model-title">
            <span className="s06-loop-icon">🔄</span>
            사유형 — 생각하고 또 생각한다
          </div>
          <div className="s06-steps">
            {NEW_STEPS.map((s, i) => (
              <div key={i} className="s06-step s06-step--new" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
                <span className="s06-step-n">{s.n}</span>
                <div>
                  <div>{s.text}</div>
                  {s.sub && <div style={{ fontSize: '0.76rem', color: 'var(--color-accent)', marginTop: 2, fontStyle: 'italic' }}>{s.sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
