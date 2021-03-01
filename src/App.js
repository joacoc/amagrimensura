import './App.css';
import WixPrices from "./wixprices"

function navButtonComponent(text, href, selected) {
  return (
    <li key={text}>
      <a href={href}>
        <div
          className="bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg pl-2 pr-2 hover:from-yellow-100 hover:to-yellow-300"
          style={{ fontSize:"12px", lineHeight: "30px", fontFamily: "raleway, sans-serif"}}>
          {text}
        </div>
      </a>
    </li>
  )
}

function App() {
  return (
    <div className="App" style={{ fontFamily: "open sans,sans-serif"}}>
      <header style={{ backgroundColor: "#2f2e2e",  position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <div className="p-3 grid grid-cols-12">

          {/* Logo + Titulo */}
          <div className="flex items-center col-span-5 pl-32" style={{ letterSpacing:"0.03em" }}>
            {/* Logo */}
            <img src="./brujula_chico.png" className="w-10 h-10 mr-4" alt="brujula_logo" />
            <div className-="float-left" style={{ color: "#F2D300" }}>
              <h1 className="text-2xl"><b>AM</b> Agrimensura</h1>
              {/* TODO: Detallesito line_height */}
              <div className="text-xs font-semibold">
                <i>Carlos Traiani Tiano <br/>Ing. Agrimensor Mat. 2719</i>
              </div>
            </div>
          </div>

          {/* Nav + Social */}
          <div className="flex items-center col-span-7 pl-48">
            {/* Nav */}
            <nav>
              <ul className="m-auto flex space-x-2 font-light">
                {navButtonComponent("INICIO", "https://www.amagrimensura.com")}
                {navButtonComponent("SERVICIO", "https://www.amagrimensura.com/servicio")}
                {navButtonComponent("NUESTRA VISION", "https://www.amagrimensura.com/nuestra-vision")}
                {navButtonComponent("EQUIPO", "https://www.amagrimensura.com/equipo")}
                {navButtonComponent("CONTACTO", "https://www.amagrimensura.com/contacto")}
              </ul>
            </nav>

            {/* Social Icons */}
            <div className="flex space-x-2 ml-4">
              <a href="">
                <img src="iglogo.png" alt="Instagram Social Icon" className="h-7 w-7"/>
              </a>
              <a href="">
                <img src="facebooklogo.png" alt="Facebook Social Icon"  className="h-7 w-7"/>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section style={{ width: "1440px", height: "787px"}}>
        <div>
            <img alt="que_se_yo" src="mar_del_plata_con_logo.jpg" className="absolute" />
            <div className="flex">
              <div className="w-1/2 h-full" style={{ backgroundColor: "#F2D30066", position: "absolute"}}><span/></div>
              <div className="w-1/2 h-full inset-x-1/2" style={{ backgroundColor: "#FFFFFF66", position: "absolute"}}><span/></div>
            </div>
            <div className="h-full">
              <div style={{ color: "#332f2e", top: "50%", left: "57%", transform: "translate(-50%, -57%)" }} className="absolute">
                <div className="flex items-center">
                  <h1 className="font-bold" style={{ fontSize: "151px", textShadow: "rgba(0, 0, 0, 0.298039) 0px 5px 0px"}}>AM</h1>
                  <h2 className="ml-16 underline font-bold" style={{ fontSize: "57px", textShadow: "rgba(0, 0, 0, 0.298039) 0px 5px 0px"}}>AGRIMENSURA</h2>
                </div>
                <p className="ml-32" style={{ fontSize: "23px", width: "max-content" }}>Precisión en cada paso.</p>
              </div>
            </div>
        </div>
      </section>

      <section className="block">
        <h1 className="font-bold text-center" style={{ fontSize: "42px"}}>SERVICIOS</h1>
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="col-span-1">

          </div>
          <div className="col-span-1">

          </div>
        </div>
      </section>

      {/* DIV */}
      {/* <WixPrices /> */}
    </div>
  );
}

export default App;
