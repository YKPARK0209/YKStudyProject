import { useNavigate } from 'react-router-dom'
import './Home.css'

const DECKS = [
  {
    id: 'ai-fundamentals',
    title: 'AI 기초 이해',
    subtitle: 'AI의 본질부터 LLM OS 비전까지',
    count: 8,
    tags: ['AI', 'LLM', '생성형AI'],
    path: '/presentations/ai-fundamentals',
    part: '1부·2부·3부',
  },
]

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="home">
      <header className="home-hd">
        <h1 className="home-logo">
          <span>Vibe</span><span className="home-logo-b">Deck</span>
        </h1>
        <p className="home-tagline">웹 기반 프레젠테이션 아카이브</p>
      </header>

      <section className="home-section">
        <h2 className="home-section-title">프레젠테이션</h2>
        <div className="home-grid">
          {DECKS.map(deck => (
            <article
              key={deck.id}
              className="deck-card"
              onClick={() => navigate(deck.path)}
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && navigate(deck.path)}
            >
              <div className="deck-card-play">▶</div>
              <div className="deck-card-body">
                <span className="deck-card-part">{deck.part}</span>
                <h3 className="deck-card-title">{deck.title}</h3>
                <p className="deck-card-sub">{deck.subtitle}</p>
                <div className="deck-card-foot">
                  <span className="deck-card-count">{deck.count} 슬라이드</span>
                  <div className="deck-tags">
                    {deck.tags.map(t => <span key={t} className="deck-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
