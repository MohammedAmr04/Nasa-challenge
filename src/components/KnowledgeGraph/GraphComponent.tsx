import { useEffect, useRef, useState } from 'react'
import { DataSet, Network } from 'vis-network/standalone'
import type { Node, Edge } from 'vis-network'

function GraphComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [_, setSelectedNodeId] = useState<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const containerHeight = containerRef.current.offsetHeight
    const minDim = Math.min(containerWidth, containerHeight)

    const baseSize = minDim * 0.03
    const selectedSize = minDim * 0.06

    const nodes = new DataSet<Node>([
      { id: 1, label: 'Note 1', color: '#6abe39', size: baseSize },
      { id: 2, label: 'Note 2', color: '#3887e7', size: baseSize },
      { id: 3, label: 'Note 3', color: '#e63946', size: baseSize },
    ])

    const edges = new DataSet<Edge>([
      { from: 1, to: 2 },
      { from: 2, to: 3 },
    ])

    const network = new Network(
      containerRef.current!,
      { nodes, edges },
      {
        nodes: {
          shape: 'dot',
          font: { color: '#222' },
        },
        edges: {
          color: 'black',
        },
        physics: {
          stabilization: false,
        },
      }
    )

    // 🖱️ Click event
    network.on('click', (params) => {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0] as number
        setSelectedNodeId(nodeId)

        nodes.forEach((n) => {
          nodes.update({ id: n.id, size: baseSize })
        })

        nodes.update({ id: nodeId, size: selectedSize })
      } else {
        setSelectedNodeId(null)
        nodes.forEach((n) => {
          nodes.update({ id: n.id, size: baseSize })
        })
      }
    })
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%' }}
      className="bg-gray-200"
    />
  )
}

export default GraphComponent
