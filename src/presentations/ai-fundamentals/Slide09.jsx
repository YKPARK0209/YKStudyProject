import './slides.css'

const PC_ROWS = [
  { icon: '⚙️', name: 'CPU',       desc: '논리 연산 · 명령 처리 장치',        delay: '0.2s' },
  { icon: '💾', name: 'RAM',       desc: '현재 작업 중인 데이터 (단기 기억)',   delay: '0.4s' },
  { icon: '🗄️', name: '하드디스크', desc: '모든 파일 · 프로그램 저장 (장기 기억)', delay: '0.6s' },
  { icon: '🖱️', name: '주변기기',   desc: '키보드·마우스·프린터 (입출력 도구)', delay: '0.8s' },
]

const AI_ROWS = [
  { icon: '🧠', name: 'LLM',             desc: '언어 이해 · 추론 · 생성 엔진',      delay: '0.3s' },
  { icon: '📋', name: '컨텍스트 윈도우',   desc: '현재 대화 · 문서 (단기 기억)',       delay: '0.5s' },
  { icon: '📚', name: 'RAG · 사내 DB',    desc: '외부 지식 검색 · 벡터 저장소 (장기 기억)', delay: '0.7s' },
  { icon: '🔌', name: 'MCP · 외부 도구',  desc: 'API·계산기·브라우저·로컬 파일 (확장)', delay: '0.9s' },
]

export default function Slide09() {
  return (
    <div className="slide s08">
      <div>
        <div className="chip chip--warm">3부 · LLM OS</div>
        <h1 className="slide-h1">AI는 도구가 아니라 <em>운영체제</em>다</h1>
        <p className="slide-desc">— 안드레이 카파시(Andrej Karpathy)의 비전</p>
      </div>

      <div className="s08-compare">
        {/* 일반 컴퓨터 */}
        <div className="s08-col s08-col--pc">
          <div className="s08-col-hd">
            🖥️ 일반 컴퓨터 아키텍처
          </div>
          <div className="s08-rows">
            {PC_ROWS.map((r, i) => (
              <div key={i} className="s08-row" style={{ animationDelay: r.delay }}>
                <div className="s08-row-icon">{r.icon}</div>
                <div className="s08-row-content">
                  <div className="s08-row-name">{r.name}</div>
                  <div className="s08-row-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LLM OS */}
        <div className="s08-col s08-col--ai">
          <div className="s08-col-hd">
            🤖 LLM OS 아키텍처
          </div>
          <div className="s08-rows">
            {AI_ROWS.map((r, i) => (
              <div key={i} className="s08-row" style={{ animationDelay: r.delay }}>
                <div className="s08-row-icon">{r.icon}</div>
                <div className="s08-row-content">
                  <div className="s08-row-name">{r.name}</div>
                  <div className="s08-row-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="s08-conclusion">
        여러분의 연구실 전체를 <strong>AI라는 운영체제로 통제</strong>하는 시대가 이미 시작됐다.
      </div>
    </div>
  )
}
