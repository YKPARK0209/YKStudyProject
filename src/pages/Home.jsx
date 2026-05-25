import { useNavigate } from 'react-router-dom'
import './Home.css'

// 각 presentations/<id>/meta.json 을 자동 수집 — 새 PPT 추가 시 Home.jsx 수정 불필요
const metaModules = import.meta.glob('../presentations/*/meta.json', { eager: true })
const DECKS = Object.entries(metaModules).map(([filePath, mod]) => {
  const id = filePath.split('/').at(-2)
  return { ...mod.default, id, path: `/presentations/${id}` }
})

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="home">
      <header className="home-hd">
        <h1 className="home-logo">
          <span>Park Young Keun</span>
          <span className="home-logo-b">AI Study Archive</span>
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
