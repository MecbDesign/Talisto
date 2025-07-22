// Variables globales para bienvenida dinámica
let welcomeSection, welcomeLogo, welcomeTitle, welcomeSubtitle, welcomeDescription, welcomeBackground;
let welcomeArrow;

// Variables globales del carrito
let carrito = [];
let carritoVisible = false;

// Variables globales del carrito de Nawara e' Flow
let carritoNEF = [];
let carritoVisibleNEF = false;

// Datos de Willian's House Market
const whmData = {
  logo: 'img/whmlogo.png',
  title: 'Bienvenido a Willian\'s House Market',
  subtitle: 'Tu tienda de confianza, frescura y calidad en cada producto',
  description: 'Descubre nuestra amplia variedad de productos frescos y de calidad'
};

// Datos de Nawara e' Flow
const nefData = {
  logo: 'img/logonawaraeflow.png',
  title: "Bienvenido a Nawara e' Flow",
  subtitle: 'expresa tu estilo, lleva tu Flow',
  description: "Descubre la moda urbana y oversize con esencia venezolana.",
  gradient: 'linear-gradient(135deg, #292929 0%, #AF3286 40%, #FFBC00 70%, #F2F2E6 90%, #F0D7B8 100%)',
  categorias: [
    'accesorios',
    'prendas superiores',
    'prendas inferiores',
    'calzado'
  ],
  contacto: {
    correo: 'info@nawaraeflow.com',
    instagram: 'nawaraeflow',
    telefono: '+58 412-0000000'
  },
  info: {
    intro: `“Nawara e' flow” es una marca de ropa que fusiona la esencia del arte urbano y la moda oversize con un toque exclusivo de la cultura venezolana. Su diseño refleja la autenticidad, la creatividad y el estilo libre de aquellos que buscan vestir con confianza y actitud. Con piezas que invitan a la autoexpresión, “Nawara e' flow” ofrece ropa cómoda, moderna y con un estilo único, pensada para aquellos que se sienten identificados con la energía vibrante del entorno urbano y el arte contemporáneo.`,
    vision: `Ser una marca referente en la moda urbana y artística, reconocida por su originalidad y por inspirar a las nuevas generaciones a expresar su identidad a través del estilo. Buscamos posicionarnos como un puente cultural entre las raíces venezolanas y la moda internacional.`,
    mision: `Crear prendas que fusionen el arte urbano con el estilo oversize, brindando comodidad y diseño innovador. Queremos que cada prenda sea una obra de expresión individual, permitiendo a nuestros clientes transmitir su personalidad y su energía en cada paso que den.`
  }
};

// Función para mostrar bienvenida de Talisto
function showTalistoWelcome() {
  if (!welcomeSection) return;
  welcomeSection.classList.remove('whm-theme');
  welcomeSection.classList.remove('nef-theme');
  // Restaurar fondo blanco y eliminar degradado
  welcomeSection.style.background = '#fff';
  // Ocultar el logo de manera que no afecte el layout
  if (welcomeLogo) {
    welcomeLogo.style.display = 'none';
    welcomeLogo.style.visibility = 'hidden';
    welcomeLogo.style.opacity = '0';
    // Mantener las dimensiones para evitar reflow
    welcomeLogo.style.width = '120px';
    welcomeLogo.style.height = '120px';
    welcomeLogo.style.margin = '0 auto 1.5rem auto';
    welcomeLogo.style.padding = '1rem';
  }
  welcomeTitle.textContent = 'Bienvenido a Talisto';
  welcomeSubtitle.textContent = '"Lo pediste, Talisto"';
  welcomeDescription.textContent = 'Descubre comercios locales y encuentra lo que necesitas de forma rápida y directa';
  welcomeSection.style.display = 'block';
  if (welcomeArrow) welcomeArrow.style.display = 'none';
}

// Función para mostrar bienvenida de Willian's House Market
function showWHMWelcome() {
  if (!welcomeSection) return;
  welcomeSection.classList.remove('nef-theme');
  welcomeSection.classList.add('whm-theme');
  // Restaurar fondo por defecto (dejarlo vacío o el color original de Talisto)
  welcomeSection.style.background = '';
  // Restaurar el logo para Willian's House Market
  if (welcomeLogo) {
    welcomeLogo.style.display = 'flex';
    welcomeLogo.style.visibility = 'visible';
    welcomeLogo.style.opacity = '1';
    welcomeLogo.style.width = '180px';
    welcomeLogo.style.height = '180px';
    welcomeLogo.style.margin = '0 auto 1.5rem auto';
    welcomeLogo.style.background = 'none';
    welcomeLogo.style.borderRadius = '0';
    welcomeLogo.innerHTML = `<img src="${whmData.logo}" alt="Willian's House Market">`;
  }
  welcomeTitle.textContent = whmData.title;
  welcomeSubtitle.textContent = whmData.subtitle;
  welcomeDescription.textContent = whmData.description;
  welcomeSection.style.display = 'block';
  if (welcomeArrow) welcomeArrow.style.display = 'block';
}

// Función para mostrar bienvenida de Nawara e' Flow
function showNEFWelcome() {
  if (!welcomeSection) return;
  welcomeSection.classList.remove('whm-theme');
  welcomeSection.classList.add('nef-theme');
  if (welcomeLogo) {
    welcomeLogo.style.display = 'flex';
    welcomeLogo.style.visibility = 'visible';
    welcomeLogo.style.opacity = '1';
    welcomeLogo.style.width = '180px';
    welcomeLogo.style.height = '180px';
    welcomeLogo.style.margin = '0 auto 1.5rem auto';
    welcomeLogo.style.background = 'none';
    welcomeLogo.style.borderRadius = '0';
    welcomeLogo.innerHTML = `<img src="${nefData.logo}" alt="Nawara e' Flow">`;
  }
  welcomeTitle.textContent = nefData.title;
  welcomeSubtitle.textContent = nefData.subtitle;
  welcomeDescription.textContent = nefData.description;
  welcomeSection.style.display = 'block';
  welcomeSection.style.background = nefData.gradient;
  if (welcomeArrow) welcomeArrow.style.display = 'none';
}

// Función para ocultar bienvenida
function hideWelcome() {
  if (!welcomeSection) return;
  welcomeSection.style.display = 'none';
}

// Función para agregar producto al carrito
function agregarAlCarrito(producto) {
  const productoExistente = carrito.find(item => item.nombre === producto.nombre);
  
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({
      ...producto,
      cantidad: 1
    });
  }
  
  actualizarCarritoUI();
  mostrarNotificacionCarrito('Producto agregado al carrito');
}

// Función para remover producto del carrito
function removerDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarritoUI();
  mostrarNotificacionCarrito('Producto removido del carrito');
}

// Función para actualizar cantidad
function actualizarCantidad(index, nuevaCantidad) {
  if (nuevaCantidad <= 0) {
    removerDelCarrito(index);
  } else {
    carrito[index].cantidad = nuevaCantidad;
    actualizarCarritoUI();
  }
}

// Función para actualizar la UI del carrito
function actualizarCarritoUI() {
  const carritoCount = document.getElementById('carritoCount');
  const carritoLista = document.getElementById('carritoLista');
  const carritoTotal = document.getElementById('carritoTotal');
  
  if (carritoCount) {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    carritoCount.textContent = totalItems;
    carritoCount.style.display = totalItems > 0 ? 'block' : 'none';
  }
  
  if (carritoLista) {
    carritoLista.innerHTML = '';
    carrito.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'carrito-item';
      itemElement.innerHTML = `
        <div class="carrito-item-info">
          <img src="${item.imagen}" alt="${item.nombre}" class="carrito-item-img">
          <div class="carrito-item-details">
            <div class="carrito-item-nombre">${item.nombre}</div>
          </div>
        </div>
        <div class="carrito-item-controls">
          <button onclick="actualizarCantidad(${index}, ${item.cantidad - 1})" class="carrito-btn-cantidad">-</button>
          <span class="carrito-cantidad">${item.cantidad}</span>
          <button onclick="actualizarCantidad(${index}, ${item.cantidad + 1})" class="carrito-btn-cantidad">+</button>
          <button onclick="removerDelCarrito(${index})" class="carrito-btn-remover">×</button>
        </div>
      `;
      carritoLista.appendChild(itemElement);
    });
  }
  
  if (carritoTotal) {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    carritoTotal.textContent = `${totalItems} producto${totalItems !== 1 ? 's' : ''}`;
  }
}

// Función para mostrar/ocultar el carrito
function toggleCarrito() {
  const carritoPanel = document.getElementById('carritoPanel');
  if (carritoPanel) {
    carritoVisible = !carritoVisible;
    carritoPanel.style.transform = carritoVisible ? 'translateX(0)' : 'translateX(100%)';
  }
}

// Función para enviar pedido por WhatsApp
function enviarPedidoWhatsApp() {
  if (carrito.length === 0) {
    mostrarNotificacionCarrito('El carrito está vacío');
    return;
  }
  
  const numero = '+584120717091';
  let mensaje = 'Hola! Me gustaría hacer un pedido:\n\n';
  
  carrito.forEach(item => {
    mensaje += `• ${item.nombre} - Cantidad: ${item.cantidad}\n`;
  });
  
  mensaje += '\nGracias!';
  
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// Función para mostrar notificación del carrito
function mostrarNotificacionCarrito(mensaje) {
  const notificacion = document.createElement('div');
  notificacion.textContent = mensaje;
  // Detectar si estamos en la interfaz de Nawara e Flow
  const isNEF = document.getElementById('catalogoSection')?.classList.contains('nef-theme');
  notificacion.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${isNEF ? '#AF3286' : '#00592f'};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-family: 'Keep Calm Medium', Arial, sans-serif;
    font-size: 14px;
    z-index: 10001;
    box-shadow: 0 4px 12px rgba(0, 89, 47, 0.3);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(notificacion);
  
  setTimeout(() => {
    notificacion.style.transform = 'translateX(0)';
  }, 100);
  
  setTimeout(() => {
    notificacion.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notificacion.parentNode) {
        document.body.removeChild(notificacion);
      }
    }, 300);
  }, 3000);
}

// Función para agregar producto al carrito de Nawara e' Flow
function agregarAlCarritoNEF(producto) {
  const productoExistente = carritoNEF.find(item => item.nombre === producto.nombre);
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carritoNEF.push({ ...producto, cantidad: 1 });
  }
  actualizarCarritoUINEF();
  mostrarNotificacionCarrito('Producto agregado al carrito');
}

// Función para remover producto del carrito de Nawara e' Flow
function removerDelCarritoNEF(index) {
  carritoNEF.splice(index, 1);
  actualizarCarritoUINEF();
  mostrarNotificacionCarrito('Producto removido del carrito');
}

// Función para actualizar cantidad en el carrito de Nawara e' Flow
function actualizarCantidadNEF(index, nuevaCantidad) {
  if (nuevaCantidad <= 0) {
    removerDelCarritoNEF(index);
  } else {
    carritoNEF[index].cantidad = nuevaCantidad;
    actualizarCarritoUINEF();
  }
}

// Función para actualizar la UI del carrito de Nawara e' Flow
function actualizarCarritoUINEF() {
  let panel = document.getElementById('carritoPanelNEF');
  if (!panel) return;
  const lista = panel.querySelector('#carritoListaNEF');
  const total = panel.querySelector('#carritoTotalNEF');
  const count = document.getElementById('carritoCountNEF');
  if (count) {
    const totalItems = carritoNEF.reduce((sum, item) => sum + item.cantidad, 0);
    count.textContent = totalItems;
    count.style.display = totalItems > 0 ? 'block' : 'none';
  }
  if (lista) {
    lista.innerHTML = '';
    carritoNEF.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'carrito-item';
      itemElement.innerHTML = `
        <div class="carrito-item-info">
          <img src="${item.imagen}" alt="${item.nombre}" class="carrito-item-img">
          <div class="carrito-item-details">
            <div class="carrito-item-nombre">${item.nombre}</div>
          </div>
        </div>
        <div class="carrito-item-controls">
          <button onclick="actualizarCantidadNEF(${index}, ${item.cantidad - 1})" class="carrito-btn-cantidad">-</button>
          <span class="carrito-cantidad">${item.cantidad}</span>
          <button onclick="actualizarCantidadNEF(${index}, ${item.cantidad + 1})" class="carrito-btn-cantidad">+</button>
          <button onclick="removerDelCarritoNEF(${index})" class="carrito-btn-remover">×</button>
        </div>
      `;
      lista.appendChild(itemElement);
    });
  }
  if (total) {
    const totalItems = carritoNEF.reduce((sum, item) => sum + item.cantidad, 0);
    total.textContent = `${totalItems} producto${totalItems !== 1 ? 's' : ''}`;
  }
}

// Función para mostrar/ocultar el carrito de Nawara e' Flow
function toggleCarritoNEF() {
  const panel = document.getElementById('carritoPanelNEF');
  if (panel) {
    carritoVisibleNEF = !carritoVisibleNEF;
    panel.style.transform = carritoVisibleNEF ? 'translateX(0)' : 'translateX(100%)';
  }
}

// Función para enviar pedido por WhatsApp de Nawara e' Flow
function enviarPedidoWhatsAppNEF() {
  if (carritoNEF.length === 0) {
    mostrarNotificacionCarrito('El carrito está vacío');
    return;
  }
  const numero = '584241826146';
  let mensaje = 'Hola! Me gustaría hacer un pedido a Nawara e\' Flow:\n\n';
  carritoNEF.forEach(item => {
    mensaje += `• ${item.nombre} - Cantidad: ${item.cantidad}\n`;
  });
  mensaje += '\nGracias!';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// Navegación principal y lógica de mostrar/ocultar secciones

document.addEventListener('DOMContentLoaded', () => {
  const comerciosSection = document.getElementById('comerciosSection');
  const catalogoSection = document.getElementById('catalogoSection');
  const contactoSection = document.getElementById('contactoSection');
  const whmCard = document.getElementById('whmCard');
  const btnLocales = document.getElementById('btnLocales');
  const btnInicio = document.getElementById('btnInicio');
  const btnContacto = document.getElementById('btnContacto');
  const btnNosotros = document.getElementById('btnNosotros');
  const logoInicio = document.getElementById('logoInicio');
  const nosotrosSection = document.getElementById('nosotrosSection');
  const header = document.querySelector('.header-minimal');
  const nefCard = document.getElementById('nefCard');

  console.log('Elementos cargados:', {
    whmCard: whmCard,
    catalogoSection: catalogoSection,
    comerciosSection: comerciosSection
  });

  // Variables para el header sticky
  let lastScrollTop = 0;
  let isHeaderVisible = true;

  // Función para manejar el scroll del header
  function handleHeaderScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Solo activar después de cierto scroll para evitar parpadeo en la parte superior
    if (scrollTop > 100) {
      if (scrollTop > lastScrollTop && isHeaderVisible) {
        // Scroll hacia abajo - ocultar header
        header.style.transform = 'translateY(-100%)';
        isHeaderVisible = false;
      } else if (scrollTop < lastScrollTop && !isHeaderVisible) {
        // Scroll hacia arriba - mostrar header
        header.style.transform = 'translateY(0)';
        isHeaderVisible = true;
      }
    } else {
      // En la parte superior - siempre mostrar header
      header.style.transform = 'translateY(0)';
      isHeaderVisible = true;
    }
    
    lastScrollTop = scrollTop;
  }

  // Event listener para el scroll
  window.addEventListener('scroll', handleHeaderScroll);

  // Mostrar comercios (inicio)
  function mostrarInicio() {
    // Eliminar el botón y panel del carrito si existen
    const botonCarritoExistente = document.getElementById('botonCarritoFloating');
    const panelCarritoExistente = document.getElementById('carritoPanel');
    if (botonCarritoExistente) botonCarritoExistente.remove();
    if (panelCarritoExistente) panelCarritoExistente.remove();
    // Eliminar el botón y panel del carrito de Nawara e Flow si existen
    const botonCarritoNEF = document.getElementById('botonCarritoFloatingNEF');
    const panelCarritoNEF = document.getElementById('carritoPanelNEF');
    if (botonCarritoNEF) botonCarritoNEF.remove();
    if (panelCarritoNEF) panelCarritoNEF.remove();
    isNavigating = true;
    comerciosSection.style.display = '';
    catalogoSection.style.display = 'none';
    contactoSection.style.display = '';
    nosotrosSection.style.display = 'none';
    btnLocales.style.display = '';
    btnInicio.style.display = 'none';
    logoInicio.style.cursor = 'pointer';
    setActiveNav('locales');
    showTalistoWelcome();
    setTimeout(() => { isNavigating = false; }, 1000);
  }

  // Mostrar contacto
  function mostrarContacto() {
    // Eliminar el botón y panel del carrito si existen
    const botonCarritoExistente = document.getElementById('botonCarritoFloating');
    const panelCarritoExistente = document.getElementById('carritoPanel');
    if (botonCarritoExistente) botonCarritoExistente.remove();
    if (panelCarritoExistente) panelCarritoExistente.remove();
    // Eliminar clases de tema del catálogo para restaurar estilos originales
    catalogoSection.classList.remove('nef-theme');
    catalogoSection.classList.remove('whm-theme');
    isNavigating = true;
    comerciosSection.style.display = '';
    catalogoSection.style.display = 'none';
    contactoSection.style.display = '';
    nosotrosSection.style.display = 'none';
    btnLocales.style.display = '';
    btnInicio.style.display = 'none';
    logoInicio.style.cursor = 'pointer';
    setActiveNav('contacto');
    hideWelcome();
    // Scroll suave a la sección de contacto después de un pequeño delay
    setTimeout(() => {
      contactoSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => { isNavigating = false; }, 1000);
    }, 100);
  }

  // Mostrar catálogo de Willian's House Market
  window.mostrarCatalogoWHM = async function() {
    isNavigating = true;
    comerciosSection.style.display = 'none';
    catalogoSection.style.display = '';
    contactoSection.style.display = 'none';
    nosotrosSection.style.display = 'none';
    btnLocales.style.display = '';
    btnInicio.style.display = '';
    logoInicio.style.cursor = 'pointer';
    setActiveNav('none'); // Ningún botón activo en el catálogo
    showWHMWelcome();
    // Eliminar clases de tema antes de agregar la de WHM
    catalogoSection.classList.remove('nef-theme');
    catalogoSection.classList.remove('whm-theme');
    catalogoSection.classList.add('whm-theme');
    await cargarCatalogoWHM();
    crearBotonesCarrito();
    setTimeout(() => { isNavigating = false; }, 1000);
  };

  // Mostrar catálogo de Nawara e' Flow
  window.mostrarCatalogoNEF = async function() {
    isNavigating = true;
    comerciosSection.style.display = 'none';
    catalogoSection.style.display = '';
    contactoSection.style.display = 'none';
    nosotrosSection.style.display = 'none';
    btnLocales.style.display = '';
    btnInicio.style.display = '';
    logoInicio.style.cursor = 'pointer';
    setActiveNav('none');
    showNEFWelcome();
    // Asegurar que el catálogo tenga la clase nef-theme y no whm-theme
    catalogoSection.classList.add('nef-theme');
    catalogoSection.classList.remove('whm-theme');
    // Eliminar el botón y panel del carrito de WHM si existen
    const botonCarritoExistente = document.getElementById('botonCarritoFloating');
    const panelCarritoExistente = document.getElementById('carritoPanel');
    if (botonCarritoExistente) botonCarritoExistente.remove();
    if (panelCarritoExistente) panelCarritoExistente.remove();
    await cargarCatalogoNEF();
    // NO llamar a crearBotonesCarrito aquí para Nawara e Flow
    setTimeout(() => { isNavigating = false; }, 1000);
  };

  // Función para crear botones del carrito
  function crearBotonesCarrito() {
    // Remover botones existentes si los hay
    const botonCarritoExistente = document.getElementById('botonCarritoFloating');
    const panelCarritoExistente = document.getElementById('carritoPanel');
    
    if (botonCarritoExistente) botonCarritoExistente.remove();
    if (panelCarritoExistente) panelCarritoExistente.remove();
    
    // Crear botón flotante del carrito
    const botonCarrito = document.createElement('div');
    botonCarrito.id = 'botonCarritoFloating';
    botonCarrito.className = 'boton-carrito-floating';
    botonCarrito.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      <span id="carritoCount" class="carrito-count" style="display: none;">0</span>
    `;
    botonCarrito.onclick = toggleCarrito;
    
    // Crear panel del carrito
    const panelCarrito = document.createElement('div');
    panelCarrito.id = 'carritoPanel';
    panelCarrito.className = 'carrito-panel';
    panelCarrito.innerHTML = `
      <div class="carrito-header">
        <h3>Carrito de Compras</h3>
        <button onclick="toggleCarrito()" class="carrito-btn-cerrar">×</button>
      </div>
      <div id="carritoLista" class="carrito-lista"></div>
      <div class="carrito-footer">
        <div id="carritoTotal" class="carrito-total">0 productos</div>
        <button onclick="enviarPedidoWhatsApp()" class="carrito-btn-whatsapp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          Enviar Pedido
        </button>
      </div>
    `;
    
    document.body.appendChild(botonCarrito);
    document.body.appendChild(panelCarrito);
    
    // Inicializar UI del carrito
    actualizarCarritoUI();
  }

  // Cargar catálogo desde JSON con carrusel horizontal
  async function cargarCatalogoWHM() {
    try {
      console.log('Cargando catálogo de Willian\'s House Market...');
      console.log('Ruta del archivo:', 'data/willians-house-market.json');
      
      const res = await fetch('data/willians-house-market.json');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
      }
      const data = await res.json();
      // --- SECCIÓN DE CATÁLOGO ---
      let html = '';
      html += '<div class="catalogo-categorias">';
      data.categorias.forEach((cat, idx) => {
        const catId = `carrusel-${idx}`;
        html += `
          <div class="catalogo-categoria">
            <h3 style="font-family:'Mogilte', Arial, sans-serif; color:#1a5d1a; font-size:1.3rem; text-align:center; margin-bottom:0.7rem; font-weight:600; letter-spacing:0.01em;">${cat.nombre}</h3>
            <div class="carrusel-container" style="display:flex;align-items:center;gap:0.5rem;">
              <div class="carrusel-productos" id="${catId}" tabindex="0">
                ${cat.productos.map(prod => `
                  <div class="catalogo-producto">
                    <img class="producto-img" src="${prod.imagen}" alt="${prod.nombre}" style="width:110px;height:110px;object-fit:cover;border-radius:10px;margin-bottom:0.4em;" loading="lazy">
                    <span class="producto-nombre" style="font-family:'Keep Calm Medium', Arial, sans-serif;font-size:0.78rem;text-align:center;display:block;line-height:1.1;">${prod.nombre}</span>
                    <button class="btn-agregar-carrito anim-btn" data-nombre="${prod.nombre}" data-imagen="${prod.imagen}" aria-label="Agregar al carrito" style="margin-top:0.4em;display:flex;align-items:center;justify-content:center;gap:0.3em;background:#1a5d1a;color:#fff;border:none;border-radius:8px;padding:0.4em 0.7em;cursor:pointer;transition:background 0.2s;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/></svg>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      });
      html += '</div>';
      // --- FIN CATÁLOGO ---
      // Información de la empresa
      html += `
        <div class="empresa-info">
          <h2>Sobre Willian's House Market</h2>
          <p class="intro">Willian´s House Market 2022 C.A. es una empresa dedicada a la venta de víveres y productos de primera necesidad en la comunidad donde se aloje, ofreciendo un servicio cercano, confiable y de calidad a sus clientes. Con un enfoque en satisfacer las necesidades diarias de los habitantes de la zona, la empresa ha logrado consolidarse como un referente en la distribución de productos de consumo básico. Su compromiso con la comunidad es brindar productos frescos, a precios competitivos, asegurando siempre la excelencia en el servicio.</p>
          <h3>Visión</h3>
          <p>Ser el establecimiento líder en la venta de víveres en la comunidad donde se aloje, destacándonos por nuestra calidad, confianza y atención al cliente, contribuyendo al bienestar y desarrollo de la comunidad a través de nuestros productos y servicios.</p>
          <h3>Misión</h3>
          <p>Proveer a la comunidad productos de víveres y alimentos de la más alta calidad, ofreciendo un servicio cercano, eficiente y accesible, para satisfacer las necesidades diarias de nuestros clientes, contribuyendo al desarrollo y bienestar de la zona.</p>
        </div>
      `;
      // Contacto
      html += `
        <div class="contacto-empresa">
          <h2>Contacto</h2>
          <div class="contacto-grid">
            <div class="contacto-item" onclick="copiarCorreo()">
              <div class="icono">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div class="valor">willianshousevnzla@gmail.com</div>
            </div>
            <a href="https://www.instagram.com/willianshouse/" target="_blank" class="contacto-item">
              <div class="icono">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div class="valor">@willianshouse</div>
            </a>
            <a href="tel:+584120717091" class="contacto-item">
              <div class="icono">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div class="valor">+58 412-0717091</div>
            </a>
          </div>
        </div>
      `;
      // Mapa
      html += `
        <div class="ubicacion-section">
          <h2>Nuestra Ubicación</h2>
          <div class="mapa-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d245.22930039979786!2d-66.8600786755023!3d10.447834058083771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d10.447823836844742!2d-66.86032208596106!5e0!3m2!1ses-419!2sve!4v1753050265631!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      `;
      catalogoSection.innerHTML = html;
      // Asignar evento a los botones de agregar al carrito
      setTimeout(() => {
        document.querySelectorAll('.btn-agregar-carrito').forEach(btn => {
          btn.addEventListener('click', function() {
            const nombre = this.getAttribute('data-nombre');
            const imagen = this.getAttribute('data-imagen');
            agregarAlCarrito({ nombre, imagen });
            this.classList.add('animado');
            setTimeout(() => this.classList.remove('animado'), 350);
          });
        });
      }, 200);
      // --- LÓGICA DE BOTONES DEL CARRUSEL ---
      // Eliminar también la lógica de botones del carrusel (carrusel-btn)
      // --- Animaciones existentes ---
      setTimeout(animateCatalogElements, 100);
    } catch (e) {
      console.error('Error cargando catálogo:', e);
      catalogoSection.innerHTML = `<div style="background: #ffcccc; padding: 20px; margin: 20px; border: 2px solid red; border-radius: 10px;"><h2 style="color: red;">Error cargando catálogo</h2><p><strong>Tipo:</strong> ${e.name}</p><p><strong>Mensaje:</strong> ${e.message}</p><p><strong>Posible causa:</strong> El archivo JSON no se puede cargar. Verifica que el archivo 'data/willians-house-market.json' existe.</p><p><strong>Solución:</strong> Asegúrate de que estás ejecutando la página desde un servidor web (no abriendo el archivo HTML directamente).</p></div>`;
    }
  }

  // Cargar catálogo de Nawara e' Flow
  async function cargarCatalogoNEF() {
    try {
      const res = await fetch('data/nawara-e-flow.json');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      let html = '';
      html += '<div class="catalogo-categorias">';
      data.categorias.forEach((cat, idx) => {
        const catId = `nef-carrusel-${idx}`;
        html += `
          <div class="catalogo-categoria">
            <h3 style="font-family:'Mogilte', Arial, sans-serif; color:#AF3286; font-size:1.3rem; text-align:center; margin-bottom:0.7rem; font-weight:600; letter-spacing:0.01em;">${cat.nombre}</h3>
            <div class="carrusel-container" style="display:flex;align-items:center;gap:0.5rem;">
              <div class="carrusel-productos" id="${catId}" tabindex="0">
                ${cat.productos.map(prod => `
                  <div class="catalogo-producto">
                    <img class="producto-img" src="${prod.imagen}" alt="${prod.nombre}" style="width:110px;height:110px;object-fit:cover;border-radius:10px;margin-bottom:0.4em;" loading="lazy">
                    <span class="producto-nombre" style="font-family:'Keep Calm Medium', Arial, sans-serif;font-size:0.78rem;text-align:center;display:block;line-height:1.1;">${prod.nombre}</span>
                    <button class="btn-agregar-carrito nef-btn-carrito anim-btn" data-nombre="${prod.nombre}" data-imagen="${prod.imagen}" aria-label="Agregar al carrito" style="margin-top:0.4em;display:flex;align-items:center;justify-content:center;gap:0.3em;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/></svg>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      });
      html += '</div>';
      document.getElementById('catalogoSection').innerHTML = html;
      setTimeout(() => {
        document.querySelectorAll('.nef-btn-carrito').forEach(btn => {
          btn.addEventListener('click', function() {
            const nombre = this.getAttribute('data-nombre');
            const imagen = this.getAttribute('data-imagen');
            agregarAlCarritoNEF({ nombre, imagen });
            this.classList.add('animado');
            setTimeout(() => this.classList.remove('animado'), 350);
          });
        });
        crearBotonCarritoFloatingNEF();
      }, 200);
    } catch (e) {
      document.getElementById('catalogoSection').innerHTML = `<div style="background: #ffcccc; padding: 20px; margin: 20px; border: 2px solid red; border-radius: 10px;"><h2 style="color: red;">Error cargando catálogo</h2><p><strong>Tipo:</strong> ${e.name}</p><p><strong>Mensaje:</strong> ${e.message}</p></div>`;
    }
  }

  function mostrarNosotros() {
    // Eliminar el botón y panel del carrito si existen
    const botonCarritoExistente = document.getElementById('botonCarritoFloating');
    const panelCarritoExistente = document.getElementById('carritoPanel');
    if (botonCarritoExistente) botonCarritoExistente.remove();
    if (panelCarritoExistente) panelCarritoExistente.remove();
    isNavigating = true;
    comerciosSection.style.display = '';
    catalogoSection.style.display = 'none';
    contactoSection.style.display = 'none';
    nosotrosSection.style.display = '';
    btnLocales.style.display = '';
    btnInicio.style.display = 'none';
    logoInicio.style.cursor = 'pointer';
    setActiveNav('nosotros');
    hideWelcome();
    setTimeout(() => { isNavigating = false; }, 1000);
  }

  // UX: marcar botón activo
  function setActiveNav(section) {
    btnLocales.classList.remove('active');
    btnInicio.classList.remove('active');
    btnContacto.classList.remove('active');
    btnNosotros.classList.remove('active');
    if(section === 'locales') btnLocales.classList.add('active');
    if(section === 'inicio') btnInicio.classList.add('active');
    if(section === 'contacto') btnContacto.classList.add('active');
    if(section === 'nosotros') btnNosotros.classList.add('active');
    // Si section es 'none', ningún botón queda activo
  }

  // Detectar qué sección está visible
  let isNavigating = false; // Bandera para evitar conflictos durante navegación
  
  function detectarSeccionVisible() {
    // Si estamos navegando activamente, no cambiar el botón activo
    if (isNavigating) return;
    
    const scrollPosition = window.scrollY + 100; // Offset para mejor detección
    
    // Si estamos en el catálogo, no cambiar botón activo
    if (catalogoSection.style.display !== 'none') {
      return;
    }
    
    // Si estamos en la sección nosotros, activar ese botón
    if (nosotrosSection.style.display !== 'none') {
      setActiveNav('nosotros');
      return;
    }
    
    // Detectar si estamos en la sección de contacto
    const contactoRect = contactoSection.getBoundingClientRect();
    const comerciosRect = comerciosSection.getBoundingClientRect();
    
    if (contactoRect.top <= 150 && contactoRect.bottom >= 150) {
      setActiveNav('contacto');
    } else if (comerciosRect.top <= 150 && comerciosRect.bottom >= 150) {
      setActiveNav('locales');
    }
  }

  // Eventos de navegación
  whmCard.addEventListener('click', () => {
    console.log('Click en Willian\'s House Market detectado');
    window.mostrarCatalogoWHM();
  });
  btnLocales.addEventListener('click', mostrarInicio);
  btnInicio.addEventListener('click', mostrarInicio);
  btnContacto.addEventListener('click', mostrarContacto);
  logoInicio.addEventListener('click', mostrarInicio);
  btnNosotros.addEventListener('click', mostrarNosotros);
  if (nefCard) {
    nefCard.addEventListener('click', window.mostrarCatalogoNEF);
  }

  // Detectar scroll para cambiar botón activo
  window.addEventListener('scroll', detectarSeccionVisible);

  // Opcionales: scroll al top al cambiar de sección
  [btnLocales, btnInicio, logoInicio, whmCard].forEach(el => {
    el.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  });

  // Por defecto mostrar comercios
  mostrarInicio();
  
  // Asegurar que el logo esté oculto en la bienvenida de Talisto
  if (welcomeLogo) {
    welcomeLogo.style.display = 'none';
  }

  // Función para animar elementos que aparecen dinámicamente
  function animateElement(element, animationClass) {
    element.classList.add(animationClass);
    element.addEventListener('animationend', () => {
      element.classList.remove(animationClass);
    }, { once: true });
  }

  // Función para animar elementos del catálogo cuando se cargan
  function animateCatalogElements() {
    const productos = document.querySelectorAll('.catalogo-producto');
    productos.forEach((producto, index) => {
      setTimeout(() => {
        animateElement(producto, 'scale-in');
      }, index * 100);
    });
  }

  // Observador de intersección para animar elementos cuando entran en vista
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Aplicar observador a elementos que deben animarse al entrar en vista
  function setupScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('.comercio-card, .contacto-icon-link, .catalogo-producto');
    elementsToAnimate.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });
  }

  // Llamar setupScrollAnimations después de que se cargue la página
  setTimeout(setupScrollAnimations, 1000);

  // Mejorar la función de cargar catálogo para incluir animaciones
  const originalCargarCatalogoWHM = cargarCatalogoWHM;
  cargarCatalogoWHM = async function() {
    await originalCargarCatalogoWHM();
    setTimeout(animateCatalogElements, 100);
  };

  // Configuración de bienvenida dinámica
  welcomeSection = document.getElementById('welcomeSection');
  welcomeLogo = document.getElementById('welcomeLogo');
  welcomeTitle = document.getElementById('welcomeTitle');
  welcomeSubtitle = document.getElementById('welcomeSubtitle');
  welcomeDescription = document.getElementById('welcomeDescription');
  welcomeBackground = document.getElementById('welcomeBackground');
  welcomeArrow = document.getElementById('welcomeArrow');

  // Inicialización inmediata para ocultar el logo
  if (welcomeLogo) {
    welcomeLogo.style.display = 'none';
    welcomeLogo.style.visibility = 'hidden';
    welcomeLogo.style.opacity = '0';
    // Mantener las dimensiones para evitar reflow
    welcomeLogo.style.width = '120px';
    welcomeLogo.style.height = '120px';
    welcomeLogo.style.margin = '0 auto 1.5rem auto';
    welcomeLogo.style.padding = '1rem';
  }

  // --- MENÚ HAMBURGUESA ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobileMenu = document.getElementById('closeMobileMenu');
  const mobileLocales = document.getElementById('mobileLocales');
  const mobileContacto = document.getElementById('mobileContacto');
  const mobileNosotros = document.getElementById('mobileNosotros');
  const mobileInicio = document.getElementById('mobileInicio');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    hamburgerBtn.classList.add('menu-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('mobile-menu-open');
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburgerBtn.classList.remove('menu-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mobile-menu-open');
  }

  hamburgerBtn.addEventListener('click', openMobileMenu);
  closeMobileMenu.addEventListener('click', closeMenu);
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMenu();
  });
  // Cerrar menú al presionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Navegación desde menú móvil
  mobileLocales.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    mostrarInicio();
    window.scrollTo({top:0, behavior:'smooth'});
  });
  mobileContacto.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    mostrarContacto();
  });
  mobileNosotros.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    mostrarNosotros();
  });
  mobileInicio.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    mostrarInicio();
    window.scrollTo({top:0, behavior:'smooth'});
  });
}); 

// Función para copiar el correo electrónico al portapapeles
function copiarCorreo() {
  const correo = 'willianshousevnzla@gmail.com';
  
  // Intentar usar la API moderna del portapapeles
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(correo).then(() => {
      mostrarNotificacion('Correo copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar:', err);
      fallbackCopyTextToClipboard(correo);
    });
  } else {
    // Fallback para navegadores más antiguos
    fallbackCopyTextToClipboard(correo);
  }
}

// Función fallback para copiar texto
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    mostrarNotificacion('Correo copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar:', err);
    mostrarNotificacion('Error al copiar el correo');
  }
  
  document.body.removeChild(textArea);
}

// Función para mostrar notificación
function mostrarNotificacion(mensaje) {
  // Crear elemento de notificación
  const notificacion = document.createElement('div');
  notificacion.textContent = mensaje;
  notificacion.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #00592f;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-family: 'Keep Calm Medium', Arial, sans-serif;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(notificacion);
  
  // Animar entrada
  setTimeout(() => {
    notificacion.style.transform = 'translateX(0)';
  }, 100);
  
  // Remover después de 3 segundos
  setTimeout(() => {
    notificacion.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notificacion.parentNode) {
        document.body.removeChild(notificacion);
      }
    }, 300);
  }, 3000);
} 

// Función para copiar el correo electrónico de Talisto al portapapeles
function copiarCorreoTalisto() {
  const correo = 'info@talisto.com';
  
  // Intentar usar la API moderna del portapapeles
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(correo).then(() => {
      mostrarNotificacionTalisto('Correo copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar:', err);
      fallbackCopyTextToClipboardTalisto(correo);
    });
  } else {
    // Fallback para navegadores más antiguos
    fallbackCopyTextToClipboardTalisto(correo);
  }
}

// Función fallback para copiar texto de Talisto
function fallbackCopyTextToClipboardTalisto(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    mostrarNotificacionTalisto('Correo copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar:', err);
    mostrarNotificacionTalisto('Error al copiar el correo');
  }
  
  document.body.removeChild(textArea);
}

// Función para mostrar notificación de Talisto
function mostrarNotificacionTalisto(mensaje) {
  // Crear elemento de notificación
  const notificacion = document.createElement('div');
  notificacion.textContent = mensaje;
  notificacion.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--naranja-primario);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-family: 'Keep Calm Medium', Arial, sans-serif;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(255, 117, 24, 0.3);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(notificacion);
  
  // Animar entrada
  setTimeout(() => {
    notificacion.style.transform = 'translateX(0)';
  }, 100);
  
  // Remover después de 3 segundos
  setTimeout(() => {
    notificacion.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notificacion.parentNode) {
        document.body.removeChild(notificacion);
      }
    }, 300);
  }, 3000);
} 

function crearBotonCarritoFloatingNEF() {
  if (document.getElementById('botonCarritoFloatingNEF')) return;
  const btn = document.createElement('button');
  btn.id = 'botonCarritoFloatingNEF';
  btn.className = 'boton-carrito-floating';
  btn.style.background = '#292929';
  btn.style.position = 'fixed';
  btn.style.bottom = '32px';
  btn.style.right = '32px';
  btn.style.zIndex = '9999';
  btn.style.display = 'flex';
  btn.style.alignItems = 'center';
  btn.style.justifyContent = 'center';
  btn.style.width = '56px';
  btn.style.height = '56px';
  btn.style.borderRadius = '50%';
  btn.style.boxShadow = '0 4px 16px rgba(41,41,41,0.18)';
  btn.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/></svg><span id="carritoCountNEF" style="position:absolute;top:8px;right:8px;background:#FFBC00;color:#111;font-size:0.95rem;font-family:'Keep Calm Medium',Arial,sans-serif;border-radius:50%;width:22px;height:22px;display:none;align-items:center;justify-content:center;">0</span>`;
  btn.onclick = toggleCarritoNEF;
  document.body.appendChild(btn);
  crearPanelCarritoNEF();
}

function crearPanelCarritoNEF() {
  if (document.getElementById('carritoPanelNEF')) return;
  const panel = document.createElement('div');
  panel.id = 'carritoPanelNEF';
  panel.className = 'carrito-panel';
  panel.style.position = 'fixed';
  panel.style.top = '0';
  panel.style.right = '0';
  panel.style.width = '340px';
  panel.style.height = '100vh';
  panel.style.background = '#fff';
  panel.style.zIndex = '10000';
  panel.style.transform = 'translateX(100%)';
  panel.style.transition = 'transform 0.3s';
  panel.innerHTML = `
    <div class="carrito-header" style="background:#FFBC00;color:#fff;">
      <h3 style="color:#fff;">Carrito de compras</h3>
      <button class="carrito-btn-cerrar" onclick="toggleCarritoNEF()">×</button>
    </div>
    <div id="carritoListaNEF" class="carrito-lista"></div>
    <div class="carrito-footer">
      <div id="carritoTotalNEF" class="carrito-total">0 productos</div>
      <button class="carrito-btn-whatsapp" onclick="enviarPedidoWhatsAppNEF()" style="background:#25D366;color:#fff;font-weight:700;display:flex;align-items:center;gap:0.5em;justify-content:center;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
        Enviar pedido
      </button>
    </div>
  `;
  document.body.appendChild(panel);
  actualizarCarritoUINEF();
} 