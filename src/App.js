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

      {/* AM - AGRIMENSURA */}
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

      {/* SERVICIOS */}
      <section style={{ width: "1440px", height: "1023px" }} >
        <img src="parcela.jpg" style={{ objectFit: "cover", objectPosition: "50%" , opacity: "60%", position: "absolute"}}/>
        <div className="absolute">
          <h1 className="font-bold text-center" style={{ fontSize: "42px"}}>SERVICIOS</h1>
          <div className="pl-40 pr-40 mt-20 grid grid-cols-2 grid-rows-2 space-x-20">
            <div className="col-span-1 flex">
              <div className="min-h-2 min-w-2 mr-10">
                <svg style={{ fill: "#F2E300"}} preserveAspectRatio="xMidYMid meet" data-bbox="15.305 10.052 123 123" xmlns="http://www.w3.org/2000/svg" viewBox="15.305 10.052 123 123" role="img">
                  <g>
                      <path d="M138.305 10.052v123h-123v-123h123z"></path>
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="font-bold" style={{ fontSize: "18px" }}>ESTADOS PARCELARIOS (Ley 10.707)</h1>
                <p className="font-normal mt-6 text-sm" style={{ color: "#342F2E"}}>
                  El Estado Parcelario es la tarea que realiza un Agrimensor al momento de una venta, compra o hipoteca de un inmueble. Como lo establece la Ley 10.707. Este servicio garantiza al comprador del inmueble que la propiedad tiene su valuación fiscal actualizada, sus medianeras en su correcta ubicación y el lote en la posición correcta de la manzana. 
                  Es un requisito para poder escriturar y es obligatorio en la Provincia de Buenos Aires.
                </p>

                <p className="text-sm font-bold"><br/>¿Cuánto dura el certificado?</p>
                <p>
                <br/>
                  El estado parcelario de un inmueble en zona urbana tiene una vigencia de 2 años si es baldío, y 3 años si es edificado. Para los inmuebles en zonas rurales la vigencia es de 3 años
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="font-normal text-sm" style={{ color: "#342F2E"}}>
                <h1 className="font-bold" style={{ fontSize: "18px" }}>ESTADOS PARCELARIOS (Ley 10.707)</h1>
                <p className="mt-6">
                  Es un documento confeccionado por el Agrimensor, quien certifica la correcta ubicación de los mojones. En él se deja constancia sobre la concordancia o discrepancia de las medidas existentes con las respectivas medidas del título. <br/><br/>
                </p>
                <p>
                  El <b>Amojonamiento</b>, es la tarea que el Ingeniero Agrimensor lleva a cabo para materializar los límites legales de una parcela, conforme a un exhaustivo estudio dominial y catastral que realiza previamente. <br/><br/>
                </p>
                <p>
                  El trabajo consiste primero en la adquisición de toda la información mencionada anteriormente, luego se lleva a cabo el relevamiento de todos los hechos existentes y de significancia en la zona de incumbencia y con toda esta información obtenida se procede a realizar el estudio que posibilita la correcta ubicación de los mojones en los vértices del bien inmueble, tanto en zona urbana como rural. Un amojonamiento del bien inmueble, realizado a tiempo y antes de comenzar a realizar las mejoras y/o edificaciones, evita posibles problemas ente vecinos.<br/><br/>
                </p>​
                <p>
                  Mientras que el <b>Deslinde</b> es el acto formal de distinguir los límites de una propiedad, la acción de amojonar es una operación posterior y consecuencia del deslinde<br/>
                </p>
              </div>
            </div>
            <div className="col-span-1 mt-10">
              <h1 className="font-bold" style={{ fontSize: "18px" }}>RELEVAMIENTO PLANIALTIMETRICO</h1>
              <p className="font-normal text-sm mt-6">
                Es un procedimiento topográfico que determina la situación planialtimétrica de una serie de puntos distribuidos sobre la superficie del terreno.
                El objetivo principal del trabajo es obtener las coordenadas X, Y, Z de una gran cantidad de puntos en un mismo sistema de coordenadas, que luego de un debido post procesamiento, permite la representación cartográfica de los elementos naturales o artificiales sobre la zona en estudio.
                En la actualidad se puede llevar a cabo mediante la utilización de equipos convencionales como la Estación Total, o a partir de tecnología de posicionamiento satelital como GPS/GNSS.
                En definitiva, este acto de levantamiento converge en representar en un plano con sus respectivas curvas de nivel o mediante modelos digitales de terreno (MDT) la superficie del sector relevado.
              </p>
            </div>
            <div className="col-span-1 mt-10">
              <h1 className="font-bold" style={{ fontSize: "18px" }}>DECLARACIÓN JURADA</h1>
              <p className="font-normal text-sm mt-6">
                Los propietarios, poseedores a título de dueño sean personas físicas o jurídicas, de carácter privado o público, estarán obligados a denunciar cualquier modificación que se introduzca en la parcela de su propiedad a través de la presentación de una declaración jurada de avalúo. 
                El tramite deberá realizarse dentro del término máximo de treinta (30) días contados a partir de que tal modificación se encuentre en condiciones de habitabilidad o habilitación. Asimismo, en ocasión de efectuarse un acto de relevamiento parcelario con el objeto de constituir, modificar o ratificar la subsistencia del estado parcelario, estarán obligados a declarar las accesiones incorporadas a la parcela.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* VISION */}
      <section className="text-center" style={{backgroundColor: "#2f2e2e", color: "#F2D300", fontFamily: "raleway, sans-serif;"}}>
        <h1 className="pt-20" style={{ fontSize: "42px"}}><b>NUESTRA</b> VISIÓN</h1>
        <p className="mt-20 pb-56 w-2/3 m-auto">
          AM AGRIMENSURA es una empresa con espíritu joven y gran experiencia, especializada en todas las incumbencias de la agrimensura urbana y rural. Somos un equipo formado por profesionales que actúan en conjunto para garantizar la máxima precisión y rapidez en cada uno de nuestros trabajos.<br/>
          Utilizando las ultimas tecnologías confiables y de alta calidad.<br/>
          Contamos con el respaldo de importantes empresas que avalan nuestra trayectoria en el mercado.<br/> 
          La atención personalizada, seriedad y el compromiso con cada proyecto es un pilar fundamental en nuestra empresa para garantizar la satisfacción de nuestros clientes.
        </p>​
      </section>

      {/* EQUIPO */}
      <section>
        <h1 className="font-bold pt-10 absolute">EQUIPO AM</h1>
        <div >
          <h6 style={{
            lineHeight: "1.5em",
            textAling: "center",
            fontSize: "20px",
            letterSpacing: "0em",
            fontWeight: "bold",
            color: "342F2E",
          }}>
            CARLOS&nbsp;M. TRAIANI TIANO
          </h6>
          <h6
            style={{
              fontSize: "16px",
              lineHeight: "1.5em",
              textAlign: "center",
              letterSpacing: "0em",
              fontWeight: "bold",
              fontSize: "16px",
              color: "rgb(85, 85, 85)"
            }}
          >
            Ingeniero Agrimensor
          </h6>
        </div>
      </section>

      {/* CONTACTO */}
      <section>

      </section>
    </div>
  );
}

export default App;
