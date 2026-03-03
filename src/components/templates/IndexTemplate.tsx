import type { ReactNode } from "react";
import { Button, Footer, Header, SideBar } from "@src/index";

interface Props{
  companyName:string
  date:string
  children:ReactNode
}

const IndexTemplate=({children,companyName,date}:Props)=>{
  return (
    <>
      <header>
        <Header date={date}>
          <section><span>{companyName}</span></section>
        </Header>
      </header>
      <main>
        <aside>
          <article>
            <img src="#" alt="Perfil"/>
            <span>Usuario</span>
          </article>
          <SideBar/>
          <section><Button label="Cerrar sesión" type="button" variant="danger-outlined"/></section>
        </aside>
        <section>
          <article><span>
            Aún seguimos trabajando para más funcionalidades :)
          </span></article>
        </section>
        {children}
      </main>
      <footer>
        <Footer>
          <p>Derechos reservador por {companyName}.</p>
          <p>Protección, seguridad y compatibilidad.</p>
        </Footer>
      </footer>
    </>
  );
}

export default IndexTemplate;
