import type { ReactNode } from "react";
import { SideBar } from "@src/index";

interface Props{
  children:ReactNode
}

const DashboardTemplate=({children}:Props)=>{
  return (
    // <div className="min-h-screen flex flex-col bg-cyan-100">
    //   <header className="bg-cyan-600 text-white p-4 flex justify-between items-center">
    //     <Header date={date}>
    //       <section className="font-bold text-2xl md:text-3xl lg:text-4xl">
    //         <span>
    //           {companyName}
    //         </span>
    //       </section>
    //     </Header>
    //   </header>
      <section className="flex flex-1">
        <SideBar>
          <article className="flex items-center gap-2 mb-4">
            <img src="https://img.icons8.com/ios-filled/50/test-account.png" alt="Perfil"
              className="phone:w-10 phone:h-10 pc-ultra:w-14 pc-ultra:h-14 rounded-full
              bg-cyan-600"/>
            <span className="font-semibold italic text-sm tablet:text-base laptop:text-lg
              pc-ultra:text-2xl">Usuario</span>
          </article>
        </SideBar>
        <main className="flex-1 p-4 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          <section className="col-span-full mb-4">
            <article className="bg-white shadow rounded p-4">
              <span className="text-base large-tablet:text-lg laptop:text-xl">
                Aún seguimos trabajando para más funcionalidades :)
              </span>
            </article>
          </section>
          {children}
        </main>
      </section>
    //   <footer className="bg-cyan-600 text-white p-4 text-center font-bold">
    //     <Footer>
    //       <p>Derechos reservador por Collection EC.</p>
    //       <p>Protección, seguridad y compatibilidad.</p>
    //     </Footer>
    //   </footer>
    // </div>
  );
}

export default DashboardTemplate;
