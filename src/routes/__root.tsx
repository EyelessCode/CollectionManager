import { showDate, Footer, Header } from '@src/index';
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route=createRootRoute({
  component:()=>(
    <div className="min-h-screen flex flex-col bg-cyan-100">
      <header className="bg-cyan-600 text-white p-4 flex justify-between items-center">
        <Header date={showDate}>
          <section className="font-bold text-2xl large-tablet::text-3xl laptop:text-4xl
          pc:text-5xl pc-ultra:text-6xl">
            <span>Collection EC</span>
          </section>
        </Header>
      </header>
      <Outlet/>
      <footer className="bg-cyan-600 text-white p-4 text-center font-bold
        text-sm md:text-lg ">
        <Footer>
          <p className='pc-ultra:text-2xl'>Derechos reservador por Collection EC.</p>
          <p className='pc-ultra:text-2xl'>Protección, seguridad y compatibilidad.</p>
        </Footer>
      </footer>
    </div>
  )
})
