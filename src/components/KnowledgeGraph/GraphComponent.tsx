import ForceGraph2D from 'react-force-graph-2d'

const data = {
  nodes: [
    { id: 'Note 1', group: 1 },
    { id: 'Note 2', group: 2 },
    { id: 'Note 3', group: 1 },
    { id: 'Note 4', group: 3 },
    { id: 'Note 5', group: 2 },
  ],
  links: [
    { source: 'Note 1', target: 'Note 2' },
    { source: 'Note 2', target: 'Note 3' },
    { source: 'Note 2', target: 'Note 4' },
    { source: 'Note 4', target: 'Note 5' },
  ],
}

function GraphComponent() {
  return (
    <div className="w-full h-screen bg-black">
      <ForceGraph2D
        graphData={data}
        width={800}
        height={600}
        backgroundColor="#0f0f0f"
        linkColor={() => 'rgba(200,200,200,0.4)'}
        nodeRelSize={4}
        nodeLabel={(node) => node.id} // Tooltip عند hover
        nodeCanvasObject={(node, ctx, globalScale) => {
          const colors = ['#6abe39', '#3887e7', '#e63946']
          const color = colors[(node.group || 0) % colors.length]

          ctx.beginPath()
          ctx.arc(node.x!, node.y!, 6, 0, 2 * Math.PI, false)
          ctx.fillStyle = color
          ctx.fill()

          const label = node.id as string
          const fontSize = 10 / globalScale
          ctx.font = `${fontSize}px Sans-Serif`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'bottom'

          ctx.fillStyle = 'white'
          ctx.fillText(label, node.x!, node.y! - 8)
        }}
      />
    </div>
  )
}

export default GraphComponent
