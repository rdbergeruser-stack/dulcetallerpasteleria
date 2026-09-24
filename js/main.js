/**
 * DULCE TALLER - Pastelería Artesanal & Café de Especialidad
 * Main Application Logic & Interactivity
 */

// ==========================================================================
// 1. DATA STORE: Menu Catalog (Exactly matching PDF contents)
// ==========================================================================
const MENU_DATA = [
  // --- PASTELERÍA ---
  {
    id: 'torta-seleccion',
    name: 'SELECCIÓN DE TORTAS Y PORCIONES',
    category: 'pasteleria',
    subCategory: 'tortas',
    price: 4800,
    formattedPrice: '$4.800',
    description: 'Una propuesta rotativa de nuestras mejores tartas artesanales. (Consultar sabores)',
    image: 'assets/images/cake-selection.jpg',
    tags: ['Artesanal', 'Rotativo', 'Gourmet'],
    ingredients: 'Bizcochuelo artesanal húmedo, cremas pasteurizadas, frutas frescas seleccionadas según temporada.',
    allergens: 'Contiene gluten, huevo y lácteos. Consultar por variantes sin TACC.'
  },
  {
    id: 'cheesecake',
    name: 'CHEESECAKE CLÁSICO',
    category: 'pasteleria',
    subCategory: 'tortas',
    price: 4200,
    formattedPrice: '$4.200',
    description: 'Base de galleta crocante, relleno cremoso de queso horneo y una delicada cobertura de frutos rojos.',
    image: 'assets/images/cheesecake.jpg',
    tags: ['Clásico', 'Horneado', 'Frutos Rojos'],
    ingredients: 'Queso crema premium, galletas de manteca artesanales, coulis de frambuesas y moras silvestres.',
    allergens: 'Contiene gluten, lácteos y huevo.'
  },
  {
    id: 'lemon-pie',
    name: 'LEMON PIE CON MERENGUE ITALIANO',
    category: 'pasteleria',
    subCategory: 'tartas',
    price: 3900,
    formattedPrice: '$3.900',
    description: 'Suave creme de limón y merengue tostado sobre una base de masa sablée.',
    image: 'assets/images/lemon-pie.jpg',
    tags: ['Cítrico', 'Merengue Italiano', 'Sablée'],
    ingredients: 'Masa sablée a la manteca, curd de limones frescos, merengue italiano flameado al momento.',
    allergens: 'Contiene gluten, huevo y lácteos.'
  },
  {
    id: 'brownie',
    name: 'BROWNIE HÚMEDO DE CHOCOLATE',
    category: 'pasteleria',
    subCategory: 'chocolate',
    price: 3600,
    formattedPrice: '$3.600',
    description: 'Cuadrado de puro chocolate intenso con fina costra crujiente de almendras.',
    image: 'assets/images/brownie.jpg',
    tags: ['Cacao 70%', 'Almendras', 'Húmedo'],
    ingredients: 'Chocolate semiamargo 70%, manteca de campo, cacao holandés, harina y almendras tostadas.',
    allergens: 'Contiene frutos secos (almendras), gluten, huevo y lácteos.'
  },
  {
    id: 'cookies',
    name: 'COOKIES ESTILO AMERICANO',
    category: 'pasteleria',
    subCategory: 'galletas',
    price: 2400,
    formattedPrice: '$2.400',
    description: 'Galletas horneadas en el día con chips de chocolate.',
    image: 'assets/images/cookies.jpg',
    tags: ['Horneado Diario', 'Chips Choc', 'Crunchy'],
    ingredients: 'Manteca noisette, azúcar morena rubia, vainilla natural, chips de chocolate belga.',
    allergens: 'Contiene gluten, huevo y lácteos.'
  },
  {
    id: 'alfajores',
    name: 'ALFAJORES PORTEÑOS',
    category: 'pasteleria',
    subCategory: 'tradicional',
    price: 2200,
    formattedPrice: '$2.200',
    description: 'Masa tierna con relleno abundante del mejor dulce de leche porteño y borde de coco rallado.',
    image: 'assets/images/alfajores.jpg',
    tags: ['Dulce de Leche', 'Coco Rallado', 'Porteño'],
    ingredients: 'Fécula de maíz, harina suave, dulce de leche repostero colonial, coco rallado fino.',
    allergens: 'Contiene gluten, lácteos y huevo.'
  },
  {
    id: 'budin',
    name: 'BUDÍN DE ESTACIÓN',
    category: 'pasteleria',
    subCategory: 'budines',
    price: 3100,
    formattedPrice: '$3.100',
    description: 'Masa esponjosa y húmeda, preparada con las frutas más frescas y sabrosas de la temporada.',
    image: 'assets/images/budin.jpg',
    tags: ['Frutas Frescas', 'Esponjoso', 'Glaseado'],
    ingredients: 'Harina leudante, manteca, ralladura y jugo de cítricos de estación, glaseado real.',
    allergens: 'Contiene gluten, huevo y lácteos.'
  },

  // --- CAFETERÍA: BOLLERÍA ---
  {
    id: 'muffins',
    name: 'MUFFINS DE VAINILLA',
    category: 'cafeteria',
    subCategory: 'bolleria',
    price: 2800,
    formattedPrice: '$2.800',
    description: 'Masa aireada y esponjosa, de interior tierno y corona ligeramente crujiente.',
    image: 'assets/images/muffins.jpg',
    tags: ['Vainilla Bourbon', 'Esponjoso', 'Desayuno'],
    ingredients: 'Vainas de vainilla de Madagascar, yogur natural, manteca, azúcar rubia.',
    allergens: 'Contiene gluten, huevo y lácteos.'
  },
  {
    id: 'scones',
    name: 'SCONES ESTILO INGLÉS',
    category: 'cafeteria',
    subCategory: 'bolleria',
    price: 2600,
    formattedPrice: '$2.600',
    description: 'Panecillos de textura hojaldrada y sutil notas de manteca.',
    image: 'assets/images/scones.jpg',
    tags: ['Hojaldrado', 'Manteca', 'Confitura'],
    ingredients: 'Harina flor, manteca fría en cubos, crema de leche fresca, toque sutil de azúcar.',
    allergens: 'Contiene gluten y lácteos. Se acompaña con mermelada y crema.'
  },

  // --- CAFETERÍA: BEBIDAS DE ESPECIALIDAD ---
  {
    id: 'espresso',
    name: 'ESPRESSO DE ORIGEN',
    category: 'cafeteria',
    subCategory: 'bebidas',
    price: 2300,
    formattedPrice: '$2.300',
    description: 'Extracción vibrante de granos de especialidad, notas tostadas y crema de avellana.',
    image: 'assets/images/espresso.jpg',
    tags: ['100% Arábica', 'Single Origin', 'Intenso'],
    ingredients: 'Granos de especialidad 100% arábica seleccionados (tueste medio), agua filtrada.',
    allergens: 'Libre de alérgenos comunes. Sin gluten / Vegano.'
  },
  {
    id: 'latte',
    name: 'CAFÉ LATTE',
    category: 'cafeteria',
    subCategory: 'bebidas',
    price: 2900,
    formattedPrice: '$2.900',
    description: 'Nuestro blend de la casa emulsionado con microespuma de leche sedosa.',
    image: 'assets/images/latte.jpg',
    tags: ['Latte Art', 'Microespuma', 'Sedoso'],
    ingredients: 'Doble shot de espresso de la casa, leche texturizada (opción leche vegetal disponible).',
    allergens: 'Contiene lácteos (opción leche de almendra o avena disponible).'
  },
  {
    id: 'te-botanico',
    name: 'TÉ BOTÁNICO EN HEBRAS',
    category: 'cafeteria',
    subCategory: 'bebidas',
    price: 2700,
    formattedPrice: '$2.700',
    description: 'Selección de tés puros de Mauritius y blends infusionados a temperatura controlada.',
    image: 'assets/images/tea.jpg',
    tags: ['Mauritius', 'En Hebras', 'Aromático'],
    ingredients: 'Hebras enteras de té negro, té verde, flores de jazmín y pétalos de rosas silvestres.',
    allergens: 'Libre de gluten. 100% natural.'
  },
  {
    id: 'chocolate-caliente',
    name: 'CHOCOLATE CALIENTE',
    category: 'cafeteria',
    subCategory: 'bebidas',
    price: 3200,
    formattedPrice: '$3.200',
    description: 'Ganache de cacao puro fundida lentamente en leche texturizada.',
    image: 'assets/images/chocolate.jpg',
    tags: ['Cacao Puro', 'Ganache', 'Artesanal'],
    ingredients: 'Chocolate cobertura 65%, leche entera cremosa, canela en rama y toque de vainilla.',
    allergens: 'Contiene lácteos.'
  },
  {
    id: 'extractos',
    name: 'EXTRACTOS PRENSADOS',
    category: 'cafeteria',
    subCategory: 'bebidas',
    price: 3000,
    formattedPrice: '$3.000',
    description: 'Jugos de pura fruta de estación, prensados en frío.',
    image: 'assets/images/juice.jpg',
    tags: ['Cold-Pressed', '100% Fruta', 'Sin Conservantes'],
    ingredients: 'Manzana verde, jengibre, naranja, zanahoria y espinaca prensados en frío al instante.',
    allergens: 'Libre de gluten y lácteos. 100% Vegano.'
  }
];

// ==========================================================================
// 2. STATE MANAGEMENT (Shopping Cart & App State)
// ==========================================================================
let cart = [];

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('dulce_taller_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error loading cart from storage', e);
    cart = [];
  }
  updateCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem('dulce_taller_cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Error saving cart to storage', e);
  }
}

// ==========================================================================
// 3. CART OPERATIONS
// ==========================================================================
function addToCart(productId, quantity = 1) {
  const product = MENU_DATA.find(item => item.id === productId);
  if (!product) return;

  const existingItemIndex = cart.findIndex(item => item.id === productId);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      formattedPrice: product.formattedPrice,
      image: product.image,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`¡"${product.name}" añadido al carrito!`, 'success');
}

function updateCartQty(productId, delta) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += delta;

  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
    showToast('Producto eliminado del carrito.', 'info');
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
  showToast('Producto eliminado del pedido.', 'info');
}

function clearCart() {
  cart = [];
  saveCartToStorage();
  updateCartUI();
  showToast('El carrito ha sido vaciado.', 'info');
}

function calculateCartTotals() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return {
    totalItems,
    totalPrice,
    formattedTotal: `$${totalPrice.toLocaleString('es-AR')}`
  };
}

function updateCartUI() {
  const { totalItems, formattedTotal } = calculateCartTotals();

  // Badges
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  // Drawer Elements
  const container = document.getElementById('cartItemsList');
  const emptyState = document.getElementById('cartEmptyState');
  const subtotalElem = document.getElementById('cartSubtotalAmount');
  const totalElem = document.getElementById('cartTotalAmount');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  if (!container) return;

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    container.innerHTML = '';
    if (subtotalElem) subtotalElem.textContent = '$0';
    if (totalElem) totalElem.textContent = '$0';
    if (checkoutBtn) checkoutBtn.setAttribute('disabled', 'true');
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (checkoutBtn) checkoutBtn.removeAttribute('disabled');

    container.innerHTML = cart.map(item => `
      <div class="cart-item-row" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-name" title="${item.name}">${item.name}</div>
          <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString('es-AR')}</div>
        </div>
        <div class="cart-qty-ctrl">
          <button class="qty-btn minus" onclick="updateCartQty('${item.id}', -1)" aria-label="Disminuir">−</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="qty-btn plus" onclick="updateCartQty('${item.id}', 1)" aria-label="Aumentar">+</button>
        </div>
        <button class="btn-remove-item" onclick="removeFromCart('${item.id}')" aria-label="Eliminar item" title="Eliminar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `).join('');

    if (subtotalElem) subtotalElem.textContent = formattedTotal;
    if (totalElem) totalElem.textContent = formattedTotal;
  }
}

function openCartDrawer() {
  const overlay = document.getElementById('cartDrawerOverlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cartDrawerOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// WhatsApp Order Builder
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Tu carrito está vacío. Agrega delicias para pedir.', 'warning');
    return;
  }

  const { totalItems, formattedTotal } = calculateCartTotals();
  let message = `*¡HOLA DULCE TALLER!* 🧁\nQuisiera realizar el siguiente pedido desde la web:\n\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* x${item.quantity} — $${(item.price * item.quantity).toLocaleString('es-AR')}\n`;
  });

  message += `\n📦 *Total de artículos:* ${totalItems}`;
  message += `\n💰 *Monto Total:* ${formattedTotal}`;
  message += `\n\n📍 *Dirección de Entrega / Retiro:* (A coordinar)`;
  message += `\nMuchas gracias.`;

  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '5491100000000'; // WhatsApp oficial del Proyecto Dulce Taller
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
  showToast('Redirigiendo a WhatsApp con tu pedido...', 'success');
}

// ==========================================================================
// 4. PRODUCT QUICK VIEW MODAL
// ==========================================================================
let currentModalProductId = null;

function openProductModal(productId) {
  const product = MENU_DATA.find(item => item.id === productId);
  if (!product) return;

  currentModalProductId = productId;
  const modalBackdrop = document.getElementById('productModalBackdrop');
  const modalImg = document.getElementById('modalProductImg');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalDesc = document.getElementById('modalProductDesc');
  const modalPrice = document.getElementById('modalProductPrice');
  const modalTags = document.getElementById('modalProductTags');
  const modalIngredients = document.getElementById('modalProductIngredients');
  const modalAllergens = document.getElementById('modalProductAllergens');
  const modalQtyInput = document.getElementById('modalQtyInput');

  if (modalImg) modalImg.src = product.image;
  if (modalImg) modalImg.alt = product.name;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalPrice) modalPrice.textContent = product.formattedPrice;
  if (modalQtyInput) modalQtyInput.value = 1;

  if (modalTags) {
    modalTags.innerHTML = product.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');
  }
  if (modalIngredients) modalIngredients.textContent = product.ingredients;
  if (modalAllergens) modalAllergens.textContent = product.allergens;

  if (modalBackdrop) {
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeProductModal() {
  const modalBackdrop = document.getElementById('productModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  currentModalProductId = null;
}

function addModalProductToCart() {
  if (!currentModalProductId) return;
  const qtyInput = document.getElementById('modalQtyInput');
  const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;

  addToCart(currentModalProductId, qty);
  closeProductModal();
}

// ==========================================================================
// 5. SEARCH & FILTERING
// ==========================================================================
function setupFiltersAndSearch() {
  const searchInput = document.getElementById('menuSearchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function applyFilter(category = 'all', searchTerm = '') {
    const term = searchTerm.trim().toLowerCase();
    const items = document.querySelectorAll('.menu-item-card');

    items.forEach(card => {
      const id = card.dataset.id;
      const product = MENU_DATA.find(p => p.id === id);
      if (!product) return;

      const matchesCategory = category === 'all' || 
                              product.category === category || 
                              (category === 'bolleria' && product.subCategory === 'bolleria') ||
                              (category === 'bebidas' && product.subCategory === 'bebidas');

      const matchesSearch = term === '' || 
                            product.name.toLowerCase().includes(term) || 
                            product.description.toLowerCase().includes(term) ||
                            product.tags.some(t => t.toLowerCase().includes(term));

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterCategory = btn.dataset.category || 'all';
      const term = searchInput ? searchInput.value : '';
      applyFilter(filterCategory, term);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeBtn = document.querySelector('.filter-btn.active');
      const category = activeBtn ? activeBtn.dataset.category : 'all';
      applyFilter(category, e.target.value);
    });
  }
}

// ==========================================================================
// 6. RESERVATIONS SYSTEM
// ==========================================================================
function setupReservationForm() {
  const form = document.getElementById('reservationForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('resName').value.trim();
    const guests = document.getElementById('resGuests').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const area = document.getElementById('resArea').value;

    if (!name || !date || !time) {
      showToast('Por favor completa todos los campos requeridos.', 'warning');
      return;
    }

    // Success response
    showToast(`¡Mesa confirmada para ${name}! Te esperamos el ${date} a las ${time}.`, 'success');
    form.reset();
  });
}

// ==========================================================================
// 7. CONTACT FORM
// ==========================================================================
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value;
    showToast(`¡Gracias ${name || ''}! Hemos recibido tu mensaje y te responderemos a la brevedad.`, 'success');
    form.reset();
  });
}

// ==========================================================================
// 8. TOAST NOTIFICATION GENERATOR
// ==========================================================================
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25d366" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
  } else if (type === 'warning') {
    iconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f57c00" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
  } else {
    iconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d99a3e" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  }

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}

// ==========================================================================
// 9. MOBILE NAVIGATION & SCROLL MANAGEMENT
// ==========================================================================
function setupNavigation() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('.site-header');

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      mainNav.classList.toggle('open');
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        mainNav.classList.remove('open');
      });
    });
  }

  // Scroll effect for header & ScrollSpy
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Scrollspy active indicator
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ==========================================================================
// 10. INITIALIZATION
// ==========================================================================

// ==========================================================================
// 11. WORKSHOPS & DIFFERENTIATED RESERVATIONS (PROYECTO INTEGRADOR)
// ==========================================================================

const WORKSHOPS_DATA = {
  cookies: {
    id: 'cookies',
    name: 'Pequeños Pasteleros: Decoración de Cookies (4 a 12 años)',
    price: 7500,
    deposit: 3750,
    level: 'Edad: 4 a 12 años',
    schedule: 'Sábados 16:00 a 17:30 hs'
  },
  cupcakes: {
    id: 'cupcakes',
    name: 'Mini Chef: Cupcakes & Manga Pastelera (6 a 12 años)',
    price: 8200,
    deposit: 4100,
    level: 'Edad: 6 a 12 años',
    schedule: 'Sábados 18:00 a 19:30 hs'
  },
  chocolateria: {
    id: 'chocolateria',
    name: 'Chocolatería Creativa para Chicos (6 a 12 años)',
    price: 8900,
    deposit: 4450,
    level: 'Edad: 6 a 12 años',
    schedule: 'Domingos 16:30 a 18:00 hs'
  }
};

function switchReservationTab(tabName) {
  const btnMesa = document.getElementById('tabBtnMesa');
  const btnTaller = document.getElementById('tabBtnTaller');
  const panelMesa = document.getElementById('resPanelMesa');
  const panelTaller = document.getElementById('resPanelTaller');

  if (!btnMesa || !btnTaller || !panelMesa || !panelTaller) return;

  if (tabName === 'taller') {
    btnTaller.classList.add('active');
    btnMesa.classList.remove('active');
    panelTaller.classList.add('active');
    panelMesa.classList.remove('active');
  } else {
    btnMesa.classList.add('active');
    btnTaller.classList.remove('active');
    panelMesa.classList.add('active');
    panelTaller.classList.remove('active');
  }
}

function openWorkshopBooking(workshopKey) {
  switchReservationTab('taller');
  const select = document.getElementById('wkSelect');
  if (select && workshopKey) {
    select.value = workshopKey;
    updateWorkshopDepositInfo();
  }
  const target = document.getElementById('reservas');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateWorkshopDepositInfo() {
  const select = document.getElementById('wkSelect');
  const qtySelect = document.getElementById('wkParticipants');
  const totalElem = document.getElementById('wkTotalAmount');
  const depositElem = document.getElementById('wkDepositAmount');
  if (!select || !totalElem || !depositElem) return;

  const key = select.value;
  const wk = WORKSHOPS_DATA[key];
  const qty = parseInt(qtySelect?.value || '1', 10);
  if (wk) {
    const total = wk.price * qty;
    const deposit = wk.deposit * qty;
    totalElem.textContent = `$${total.toLocaleString('es-AR')}`;
    depositElem.textContent = `$${deposit.toLocaleString('es-AR')}`;
  }
}

function handleTableReservation(e) {
  e.preventDefault();
  const name = document.getElementById('resName')?.value.trim() || '';
  const phone = document.getElementById('resPhone')?.value.trim() || '';
  const guests = document.getElementById('resGuests')?.value || '2';
  const areaSelect = document.getElementById('resArea');
  const area = areaSelect?.options[areaSelect.selectedIndex]?.text || 'Salón';
  const date = document.getElementById('resDate')?.value || '';
  const time = document.getElementById('resTime')?.value || '';
  const notes = document.getElementById('resNotes')?.value.trim() || 'Sin notas';

  showToast(`¡Mesa solicitada para ${name}! Redirigiendo a WhatsApp...`, 'success');

  const message = `*¡HOLA DULCE TALLER!* ☕\nQuisiera confirmar una *Reserva de Mesa en Cafetería*:\n\n` +
    `👤 *Nombre:* ${name}\n` +
    `📞 *Teléfono:* ${phone}\n` +
    `👥 *Comensales:* ${guests} personas\n` +
    `📍 *Ubicación:* ${area}\n` +
    `📅 *Fecha:* ${date}\n` +
    `⏰ *Horario:* ${time}\n` +
    `📝 *Observaciones:* ${notes}\n\n` +
    `Aguardo su confirmación. ¡Muchas gracias!`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5491100000000&text=${encoded}`;
  window.open(whatsappUrl, '_blank');

  document.getElementById('reservationTableForm')?.reset();
}

function handleWorkshopReservation(e) {
  e.preventDefault();
  const adultName = document.getElementById('wkAdultName')?.value.trim() || document.getElementById('wkName')?.value.trim() || '';
  const childName = document.getElementById('wkChildName')?.value.trim() || '';
  const phone = document.getElementById('wkPhone')?.value.trim() || '';
  const email = document.getElementById('wkEmail')?.value.trim() || '';
  const qtySelect = document.getElementById('wkParticipants');
  const qty = parseInt(qtySelect?.value || '1', 10);
  const wkSelect = document.getElementById('wkSelect');
  const wkKey = wkSelect?.value || 'cookies';
  const wk = WORKSHOPS_DATA[wkKey] || WORKSHOPS_DATA.cookies;
  const turnoSelect = document.getElementById('wkTurno');
  const turno = turnoSelect?.options[turnoSelect.selectedIndex]?.text || '';
  const allergies = document.getElementById('wkAllergies')?.value.trim() || 'Ninguna';

  const total = wk.price * qty;
  const deposit = wk.deposit * qty;

  showToast(`¡Inscripción recibida para ${childName || adultName}! Abriendo WhatsApp para coordinar la seña...`, 'success');

  const message = `*¡HOLA DULCE TALLER!* 🧁\nQuisiera inscribir a un peque en el *Taller Infantil de Pastelería*:\n\n` +
    `🎨 *Taller:* ${wk.name}\n` +
    `📅 *Turno:* ${turno}\n` +
    `👶 *Niño/a (Nombre y Edad):* ${childName || '(A coordinar)'}\n` +
    `👤 *Adulto Responsable:* ${adultName}\n` +
    `📞 *Teléfono:* ${phone}\n` +
    `✉️ *Email:* ${email}\n` +
    `👥 *Cantidad de chicos:* ${qty}\n` +
    `⚠️ *Alergias / Sensibilidades:* ${allergies}\n\n` +
    `💰 *Costo Total:* $${total.toLocaleString('es-AR')}\n` +
    `💳 *Seña previa a transferir (50%):* $${deposit.toLocaleString('es-AR')}\n\n` +
    `Aguardo sus datos bancarios o link de pago para transferir la seña y asegurar el lugar. ¡Muchas gracias!`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5491100000000&text=${encoded}`;
  window.open(whatsappUrl, '_blank');

  document.getElementById('reservationWorkshopForm')?.reset();
  updateWorkshopDepositInfo();
}

function openCateringWhatsApp() {
  const message = `*¡HOLA DULCE TALLER!* 🎂\nQuisiera consultar por *Tortas Personalizadas / Opciones de Catering* para un evento.\n\n` +
    `¿Podrían enviarme su catálogo de mesas dulces, sabores de tortas y disponibilidad?\n\nMuchas gracias.`;
  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5491100000000&text=${encoded}`;
  window.open(whatsappUrl, '_blank');
}

function setupFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isOpen) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function syncMenuPrices() {
  MENU_DATA.forEach(item => {
    const card = document.querySelector(`.menu-item-card[data-id="${item.id}"]`);
    if (card) {
      const priceElem = card.querySelector('.menu-item-price');
      if (priceElem) {
        priceElem.textContent = item.formattedPrice;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  syncMenuPrices();
  setupFaqAccordion();
  updateWorkshopDepositInfo();
  loadCartFromStorage();
  setupFiltersAndSearch();
  setupReservationForm();
  setupContactForm();
  setupNavigation();

  // Wire up Drawer & Modal click handlers
  document.getElementById('cartOpenBtn')?.addEventListener('click', openCartDrawer);
  document.getElementById('cartCloseBtn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cartDrawerOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'cartDrawerOverlay') closeCartDrawer();
  });

  document.getElementById('productModalBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'productModalBackdrop') closeProductModal();
  });

  document.getElementById('modalCloseBtn')?.addEventListener('click', closeProductModal);
  document.getElementById('modalAddToCartBtn')?.addEventListener('click', addModalProductToCart);
  document.getElementById('cartCheckoutBtn')?.addEventListener('click', checkoutViaWhatsApp);

  // Set today's date minimum on reservation date input
  const resDateInput = document.getElementById('resDate');
  if (resDateInput) {
    const today = new Date().toISOString().split('T')[0];
    resDateInput.min = today;
    resDateInput.value = today;
  }
});
