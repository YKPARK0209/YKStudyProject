import './slides.css'
import { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import ForceGraph2D from 'react-force-graph-2d'

const LAYERS = [
  { id: 'gov',      label: '정부 오케스트레이션', color: '#f0a828' },
  { id: 'data',     label: '데이터',              color: '#22d3a0' },
  { id: 'infra',    label: 'AI 인프라',            color: '#a78bfa' },
  { id: 'model',    label: 'AI 모델',              color: '#4080f0' },
  { id: 'service',  label: 'AI 서비스',            color: '#00c6e8' },
  { id: 'industry', label: '산업 수요',            color: '#94a3b8' },
]

const LAYER_COLOR = Object.fromEntries(LAYERS.map(l => [l.id, l.color]))

const EDGE_COLORS = {
  gov:     '#f0a828',
  data:    '#22d3a0',
  infra:   '#a78bfa',
  api:     '#4080f0',
  service: '#00c6e8',
  partner: '#6b7da0',
}

const EDGE_LABELS = {
  gov:     '정부 지원',
  data:    '데이터 공급',
  infra:   'GPU·인프라',
  api:     'API 연결',
  service: '서비스 제공',
  partner: '파트너십',
}

const RAW_NODES = [
  { id: 'nipa',    label: 'NIPA',          sub: '정보통신산업진흥원',   layer: 'gov',      fy_frac: 0.08 },
  { id: 'msit',    label: '과기정통부',     sub: '과학기술정보통신부',   layer: 'gov',      fy_frac: 0.08 },
  { id: 'mois',    label: '행안부',         sub: '행정안전부',           layer: 'gov',      fy_frac: 0.08 },

  { id: 'aihub',   label: 'AI Hub',        sub: 'AI 공개 데이터셋',     layer: 'data',     fy_frac: 0.25 },
  { id: 'datgov',  label: '공공데이터포털', sub: '행안부 운영',          layer: 'data',     fy_frac: 0.25 },
  { id: 'kosis',   label: 'KOSIS',         sub: '국가통계포털',          layer: 'data',     fy_frac: 0.25 },

  { id: 'kisti',   label: 'KISTI',         sub: 'NURION 슈퍼컴',        layer: 'infra',    fy_frac: 0.42 },
  { id: 'ncloud',  label: '네이버 클라우드', sub: '공공 HPC·클라우드',   layer: 'infra',    fy_frac: 0.42 },
  { id: 'ktcloud', label: 'KT Cloud',      sub: '공공 클라우드',         layer: 'infra',    fy_frac: 0.42 },
  { id: 'skcc',    label: 'SK C&C',        sub: 'AI 인프라 운영',        layer: 'infra',    fy_frac: 0.42 },

  { id: 'exaone',  label: 'EXAONE',        sub: 'LG AI Research',       layer: 'model',    fy_frac: 0.59 },
  { id: 'solar',   label: 'Solar LLM',     sub: 'Upstage',               layer: 'model',    fy_frac: 0.59 },
  { id: 'clova',   label: 'HyperCLOVA X',  sub: 'NAVER Cloud',          layer: 'model',    fy_frac: 0.59 },
  { id: 'aidot',   label: '에이닷',         sub: 'SK텔레콤',              layer: 'model',    fy_frac: 0.59 },
  { id: 'dokpamo', label: '독파모',         sub: 'NIPA 개발',             layer: 'model',    fy_frac: 0.59 },

  { id: 'asst',    label: '국민비서',       sub: '행안부',                layer: 'service',  fy_frac: 0.76 },
  { id: 'gov24',   label: '정부24',         sub: '전자정부 포털',         layer: 'service',  fy_frac: 0.76 },
  { id: 'welfare', label: '복지로',         sub: '보건복지부',            layer: 'service',  fy_frac: 0.76 },
  { id: 'dochelp', label: '문서도우미',     sub: 'AI 문서 작성',          layer: 'service',  fy_frac: 0.76 },

  { id: 'mfg',     label: '제조',           sub: '스마트팩토리',          layer: 'industry', fy_frac: 0.92 },
  { id: 'med',     label: '의료·바이오',    sub: 'AI 진단·신약',          layer: 'industry', fy_frac: 0.92 },
  { id: 'fin',     label: '금융',           sub: 'AI 리스크 분석',        layer: 'industry', fy_frac: 0.92 },
  { id: 'edu',     label: '교육',           sub: 'AI 튜터링',             layer: 'industry', fy_frac: 0.92 },
  { id: 'pub',     label: '공공행정',       sub: '범정부 AX',             layer: 'industry', fy_frac: 0.92 },
]

const RAW_LINKS = [
  { source: 'nipa',    target: 'aihub',   type: 'gov' },
  { source: 'nipa',    target: 'dokpamo', type: 'gov' },
  { source: 'msit',    target: 'kisti',   type: 'gov' },
  { source: 'mois',    target: 'datgov',  type: 'gov' },

  { source: 'aihub',   target: 'exaone',  type: 'data' },
  { source: 'aihub',   target: 'solar',   type: 'data' },
  { source: 'aihub',   target: 'clova',   type: 'data' },
  { source: 'aihub',   target: 'dokpamo', type: 'data' },
  { source: 'datgov',  target: 'clova',   type: 'data' },
  { source: 'kosis',   target: 'exaone',  type: 'data' },

  { source: 'kisti',   target: 'dokpamo', type: 'infra' },
  { source: 'ncloud',  target: 'clova',   type: 'infra' },
  { source: 'ktcloud', target: 'asst',    type: 'infra' },
  { source: 'skcc',    target: 'aidot',   type: 'infra' },

  { source: 'clova',   target: 'asst',    type: 'api' },
  { source: 'dokpamo', target: 'gov24',   type: 'api' },
  { source: 'exaone',  target: 'dochelp', type: 'api' },
  { source: 'solar',   target: 'welfare', type: 'api' },
  { source: 'aidot',   target: 'asst',    type: 'api' },
  { source: 'dokpamo', target: 'welfare', type: 'api' },

  { source: 'asst',    target: 'pub',     type: 'service' },
  { source: 'gov24',   target: 'pub',     type: 'service' },
  { source: 'welfare', target: 'pub',     type: 'service' },
  { source: 'dochelp', target: 'mfg',     type: 'service' },

  { source: 'exaone',  target: 'mfg',     type: 'partner' },
  { source: 'solar',   target: 'med',     type: 'partner' },
  { source: 'clova',   target: 'fin',     type: 'partner' },
  { source: 'exaone',  target: 'edu',     type: 'partner' },
  { source: 'aidot',   target: 'fin',     type: 'partner' },
]

export default function Slide09() {
  const fgRef = useRef()
  const containerRef = useRef()
  const [dims, setDims] = useState({ w: 0, h: 0 })
  const [hoveredNode, setHoveredNode] = useState(null)
  const [selectedNode, setSelectedNode] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeLayer, setActiveLayer] = useState(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setDims({ w: el.offsetWidth, h: el.offsetHeight })
    update()
    const obs = new ResizeObserver(update)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!fgRef.current || !dims.h) return
    const timer = setTimeout(() => {
      const fg = fgRef.current
      fg.d3Force('charge').strength(-200)
      fg.d3Force('link').distance(85).strength(0.35)
      fg.d3ReheatSimulation()
    }, 300)
    return () => clearTimeout(timer)
  }, [dims])

  const graphData = useMemo(() => {
    const nodes = activeLayer ? RAW_NODES.filter(n => n.layer === activeLayer) : RAW_NODES
    const nodeIds = new Set(nodes.map(n => n.id))
    const links = RAW_LINKS.filter(l => nodeIds.has(l.source) && nodeIds.has(l.target))
    return {
      nodes: nodes.map(n => ({
        ...n,
        fy: dims.h ? (n.fy_frac - 0.5) * dims.h * 0.88 : undefined,
      })),
      links: links.map(l => ({ ...l })),
    }
  }, [activeLayer, dims])

  const paintNode = useCallback((node, ctx, globalScale) => {
    const color = LAYER_COLOR[node.layer]
    const isActive = node === hoveredNode || (selectedNode && node.id === selectedNode.id)
    const r = 22

    const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 2.6)
    grd.addColorStop(0, `${color}${isActive ? '44' : '28'}`)
    grd.addColorStop(1, `${color}00`)
    ctx.beginPath()
    ctx.arc(node.x, node.y, r * 2.6, 0, Math.PI * 2)
    ctx.fillStyle = grd
    ctx.fill()

    ctx.beginPath()
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
    ctx.fillStyle = '#071020'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
    ctx.strokeStyle = isActive ? color : `${color}90`
    ctx.lineWidth = isActive ? 2.5 : 1.5
    ctx.stroke()

    const fs = Math.max(8, Math.min(11, 11 / globalScale + 6))
    ctx.font = `700 ${fs}px KoPubWorldDotum, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = isActive ? '#ffffff' : '#c8d8f0'
    ctx.fillText(node.label, node.x, node.y - fs * 0.45)

    ctx.font = `${fs * 0.76}px KoPubWorldDotum, sans-serif`
    ctx.fillStyle = isActive ? '#a0c0e8' : '#566880'
    ctx.fillText(node.sub, node.x, node.y + fs * 0.65)
  }, [hoveredNode, selectedNode])

  const getLinkColor = useCallback((link) => {
    const color = EDGE_COLORS[link.type] || '#8898b4'
    if (!selectedNode) return `${color}60`
    const sid = selectedNode.id
    const src = typeof link.source === 'object' ? link.source.id : link.source
    const tgt = typeof link.target === 'object' ? link.target.id : link.target
    return (src === sid || tgt === sid) ? color : '#1a2540'
  }, [selectedNode])

  const getLinkWidth = useCallback((link) => {
    if (!selectedNode) return 1.2
    const sid = selectedNode.id
    const src = typeof link.source === 'object' ? link.source.id : link.source
    const tgt = typeof link.target === 'object' ? link.target.id : link.target
    return (src === sid || tgt === sid) ? 2.2 : 0.4
  }, [selectedNode])

  const getParticleColor = useCallback((link) => EDGE_COLORS[link.type] || '#8898b4', [])

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(prev => prev?.id === node.id ? null : node)
  }, [])

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <div className="slide n-slide n-net">
      <div className="n-net-hd">
        <div className="n-slide-hd" style={{ marginBottom: 0 }}>
          <span className="n-badge n-badge--warm">초연결 AI 생태계</span>
          <span className="n-slide-hd-title">대한민국 AI 네트워크 — 정부·기업·산업 연결 구조</span>
        </div>
        <div className="n-net-filters">
          {LAYERS.map(l => (
            <button
              key={l.id}
              className={`n-net-filter${activeLayer === l.id ? ' n-net-filter--on' : ''}`}
              style={{ '--fc': l.color }}
              onClick={() => setActiveLayer(prev => prev === l.id ? null : l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div className="n-net-body" ref={containerRef} onMouseMove={handleMouseMove}>
        {dims.w > 0 && (
          <ForceGraph2D
            ref={fgRef}
            width={dims.w}
            height={dims.h}
            graphData={graphData}
            backgroundColor="transparent"
            nodeCanvasObject={paintNode}
            nodeCanvasObjectMode="replace"
            nodePointerAreaPaint={(node, color, ctx) => {
              ctx.fillStyle = color
              ctx.beginPath()
              ctx.arc(node.x, node.y, 26, 0, Math.PI * 2)
              ctx.fill()
            }}
            linkColor={getLinkColor}
            linkWidth={getLinkWidth}
            linkDirectionalParticles={3}
            linkDirectionalParticleColor={getParticleColor}
            linkDirectionalParticleSpeed={0.005}
            linkDirectionalParticleWidth={2.5}
            onNodeHover={setHoveredNode}
            onNodeClick={handleNodeClick}
            cooldownTicks={120}
            d3AlphaDecay={0.018}
            d3VelocityDecay={0.28}
            enableNodeDrag
            enableZoomInteraction
          />
        )}

        {hoveredNode && (
          <div
            className="n-net-tip"
            style={{
              left: Math.min(mousePos.x + 18, dims.w - 170),
              top: Math.max(mousePos.y - 60, 4),
            }}
          >
            <div className="n-net-tip-name" style={{ color: LAYER_COLOR[hoveredNode.layer] }}>
              {hoveredNode.label}
            </div>
            <div className="n-net-tip-sub">{hoveredNode.sub}</div>
            <div className="n-net-tip-layer" style={{ borderColor: LAYER_COLOR[hoveredNode.layer] }}>
              {LAYERS.find(l => l.id === hoveredNode.layer)?.label}
            </div>
          </div>
        )}

        {selectedNode && (
          <div className="n-net-sel">
            <span style={{ color: LAYER_COLOR[selectedNode.layer] }}>{selectedNode.label}</span>
            {' '}연결망 하이라이트 중
            <button className="n-net-sel-clear" onClick={() => setSelectedNode(null)}>×</button>
          </div>
        )}
      </div>

      <div className="n-net-legend">
        {Object.entries(EDGE_LABELS).map(([type, label]) => (
          <div key={type} className="n-net-legend-item">
            <span className="n-net-legend-dot" style={{ background: EDGE_COLORS[type] }} />
            <span className="n-net-legend-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
