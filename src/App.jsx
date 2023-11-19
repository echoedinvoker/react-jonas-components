function App() {
  return (
    <div className="grid grid-cols-[90px_400px_1fr_250px] grid-rows-[80px_1fr] h-screen text-center">
      <nav className="bg-stone-700 text-stone-50 row-span-full pt-3">
        Nav
      </nav>
      <menu className="bg-indigo-500 text-indigo-50 col-[2_/_-1] flex items-center gap-5 px-8">
        {
          ['New', 'Reply', 'Forward', 'Mark unread', 'Trash']
            .map(name => <button className="bg-indigo-800 py-2 px-4 rounded-md last:bg-pink-700 last:ml-auto">{name}</button>)
        }

      </menu>
      <section className="bg-stone-200 text-stone-800 pt-10 flex flex-col gap-10 items-center overflow-hidden">
        { Array.from({ length: 20 }, (_, i) => <button className="text-xl font-semibold bg-stone-400 px-24 py-8 rounded-md">{`Email ${i+1}`}</button>)}
      </section>
      <main className="bg-stone-50 text-stone-800 pt-3">
        Email view
      </main>
      <aside className="bg-stone-200 text-stone-800 pt-3">
        Additional info
      </aside>
    </div>
  )
}

export default App
