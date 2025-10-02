import React, { useState } from 'react'
import { AutoComplete, Input } from 'antd'
import { useNavigate } from 'react-router' // لو شغال ب React Router
import './styles.css'

interface IData {
  title: string
  description: string
  category: string
  link: string
}

interface IOption {
  value: string
  label: React.ReactNode
}

const data: IData[] = [
  {
    title: 'Database',
    description:
      'A database is an organized collection of inter-related data that models some aspect of the real-world...',
    category: 'Concepts/Data Storage',
    link: '/database',
  },
  {
    title: 'Relational Model & Algebra',
    description: 'CMU Intro to Database Systems / Fall 2023',
    category: 'Course',
    link: '/relational-model',
  },
  {
    title: 'Relational Algebra',
    description: 'Intro to data operations in relational databases',
    category: 'Concepts',
    link: '/relational-algebra',
  },
]

function highlight(text: string, query: string): React.ReactNode {
  if (!query) return text
  const regex = new RegExp(`(${query})`, 'gi')
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span key={i} style={{ backgroundColor: 'yellow' }}>
        {part}
      </span>
    ) : (
      part
    )
  )
}

function SearchSemantic() {
  const [options, setOptions] = useState<IOption[]>([])
  const navigate = useNavigate()

  const handleSearch = (value: string) => {
    if (!value) {
      setOptions([])
      return
    }

    const filtered: IOption[] = data
      .filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
      .map((item) => ({
        value: item.link,
        label: (
          <div className="p-1.5">
            <div className="font-bold">{highlight(item.title, value)}</div>
            <div style={{ fontSize: '10px', color: '#555' }}>
              {highlight(item.description, value)}
            </div>
            <div style={{ fontSize: '8px', color: '#999' }}>
              {item.category}
            </div>
          </div>
        ),
      }))

    setOptions(filtered)
  }

  const handleSelect = (value: string) => {
    // value هنا هو link اللي حطيته فوق
    navigate(value) // لو جوه المشروع ب React Router
    // أو window.open(value, "_blank") لو عايز لينك خارجي
  }

  return (
    <div
      className="search-semantic"
      style={{ maxWidth: 400, margin: '50px auto' }}
    >
      <AutoComplete
        style={{ width: '100%' }}
        options={options}
        onSearch={handleSearch}
        onSelect={handleSelect}
        placeholder="Search..."
      >
        <Input.Search className="duration-300" />
      </AutoComplete>
    </div>
  )
}

export default SearchSemantic
