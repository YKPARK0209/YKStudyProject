import './slides.css'

const WORDS = [
  { text: '오늘', level: 'dim' },
  { text: '회의에서', level: 'dim' },
  { text: '논의한', level: 'medium' },
  { text: 'AI', level: 'focus' },
  { text: '전략을', level: 'focus' },
  { text: '정리해', level: 'medium' },
  { text: '줘', level: 'dim' },
]

const CARDS = [
  {
    icon: '🧱',
    name: 'Token',
    title: '토큰',
    desc: '문장을 쪼개는 레고 블록. AI는 글자가 아닌 토큰 단위로 언어를 처리한다.',
    example: '"대한민국" → "대한" + "민국"',
    delay: '0.3s',
  },
  {
    icon: '🧠',
    name: 'Parameter',
    title: '파라미터',
    desc: '뇌의 시냅스. 수천억 개의 가중치가 서로 얽혀 복잡한 추론을 가능하게 한다.',
    example: 'GPT-4: ~1.8조 개 추정\nClaude 3: 비공개',
    delay: '0.5s',
  },
  {
    icon: '🗂️',
    name: 'Context Window',
    title: '컨텍스트 윈도우',
    desc: 'AI가 한 번에 볼 수 있는 책상 넓이. 넓을수록 더 많은 문서를 동시에 참조한다.',
    example: 'GPT-3.5: 4K 토큰\nGemini 1.5: 1M 토큰',
    delay: '0.7s',
  },
]

export default function Slide05() {
  return (
    <div className="slide s04">
      <div>
        <div className="chip">2부 · 생성형 AI</div>
        <h1 className="slide-h1">생성형 AI와 <em>트랜스포머</em></h1>
      </div>

      {/* 어텐션 메커니즘 시각화 */}
      <div className="s04-orchestra">
        <div className="s04-words">
          {WORDS.map((w, i) => (
            <span
              key={i}
              className={`s04-word s04-word--${w.level}`}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              {w.text}
            </span>
          ))}
        </div>
        <p className="s04-att-note">
          <strong>어텐션(Attention)</strong> — 지금 이 문장에서 가장 중요한 단어에 집중하는 메커니즘.
          오케스트라 지휘자처럼 어떤 악기(단어)를 강조할지 실시간으로 조율한다.
        </p>
      </div>

      {/* 3대 핵심 용어 */}
      <div className="s04-cards">
        {CARDS.map((c, i) => (
          <div key={i} className="s04-card" style={{ animationDelay: c.delay }}>
            <div className="s04-card-icon">{c.icon}</div>
            <div className="s04-card-name">{c.name}</div>
            <div className="s04-card-title">{c.title}</div>
            <p className="s04-card-desc">{c.desc}</p>
            <pre className="s04-card-ex">{c.example}</pre>
          </div>
        ))}
      </div>
    </div>
  )
}
