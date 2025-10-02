import GraphComponent from '@/components/KnowledgeGraph/GraphComponent'
import SearchSemantic from '@/components/ui/SearchSemantic'

function HomePage() {
  return (
    <div className="grid grid-cols-5 relative pt-9">
      <div className="max-w-md w-full col-span-1 px-4  ">
        <h1 className="text-2xl font-bold text-center   text-gray-900 font-sans  ">
          Knowledge Graph
        </h1>
        <div>
          <SearchSemantic />
        </div>
      </div>
      <div className="col-span-3  h-screen overflow-y-auto">
        <div className="p-4 space-y-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <p key={i}>Content line {i + 1}</p>
          ))}
        </div>
      </div>
      <div className="max-w-md  w-full col-start-5  col-span-1 px-4  ">
        <h2 className="text-xl leading-2.5 text-gray-900 uppercase font-semibold font-sans pb-7 ">
          Interactive Graph
        </h2>
        <div className="overflow-hidden min-h-[150px] h-[200px] rounded-2xl">
          <GraphComponent />
        </div>
      </div>
    </div>
  )
}

export default HomePage
