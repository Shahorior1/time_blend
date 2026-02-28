/* =============================================
   TIME BLENDS - Main JavaScript
   ============================================= */

const PRODUCTS = [
    {
        id: 1,
        name: 'Midnight Sovereign',
        category: 'Classic Collection',
        collection: 'classic',
        price: 1295,
        oldPrice: null,
        badge: 'Bestseller',
        desc: '42mm automatic, sapphire crystal',
        fullDesc: 'The Midnight Sovereign embodies classic elegance with its 42mm stainless steel case and mesmerizing dark dial. Powered by an automatic movement, this timepiece features a scratch-resistant sapphire crystal and a genuine leather strap.',
        specs: {
            'Case Size': '42mm',
            'Movement': 'Automatic',
            'Crystal': 'Sapphire',
            'Water Resistance': '50m',
            'Case Material': 'Stainless Steel',
            'Strap': 'Genuine Leather',
            'Power Reserve': '40 hours',
            'Dial Color': 'Midnight Black'
        },
        rating: 4.9,
        reviews: 127,
        straps: ['Leather', 'Steel', 'NATO'],
        accentColor: '#c8a96e',
        colors: [
            { name: 'Midnight Black', hex: '#1a1a1a' },
            { name: 'Silver', hex: '#c0c0c0' },
            { name: 'Gold', hex: '#c8a96e' }
        ]
    },
    {
        id: 2,
        name: 'Azure Chronograph',
        category: 'Sport Collection',
        collection: 'sport',
        price: 895,
        oldPrice: null,
        badge: 'New',
        badgeType: 'new',
        desc: '44mm quartz, water-resistant 200m',
        fullDesc: 'Built for adventure, the Azure Chronograph combines sporty aesthetics with robust functionality. Its 44mm case houses a precision quartz chronograph movement, while the 200m water resistance makes it the perfect companion for any aquatic activity.',
        specs: {
            'Case Size': '44mm',
            'Movement': 'Quartz Chronograph',
            'Crystal': 'Hardened Mineral',
            'Water Resistance': '200m',
            'Case Material': 'Stainless Steel',
            'Strap': 'Rubber',
            'Battery Life': '3 years',
            'Dial Color': 'Azure Blue'
        },
        rating: 4.7,
        reviews: 89,
        straps: ['Rubber', 'NATO', 'Steel'],
        accentColor: '#b0c4de',
        colors: [
            { name: 'Azure Blue', hex: '#b0c4de' },
            { name: 'Black', hex: '#1a1a1a' },
            { name: 'Navy', hex: '#1e3a5f' }
        ]
    },
    {
        id: 3,
        name: 'Golden Heritage',
        category: 'Luxury Collection',
        collection: 'luxury',
        price: 2450,
        oldPrice: null,
        badge: null,
        desc: '40mm automatic, 18K gold case',
        fullDesc: 'The Golden Heritage is the crown jewel of our collection. Crafted with an 18K gold case and powered by a Swiss automatic movement, this masterpiece features hand-finished details and a mother-of-pearl dial that catches light beautifully.',
        specs: {
            'Case Size': '40mm',
            'Movement': 'Swiss Automatic',
            'Crystal': 'Sapphire',
            'Water Resistance': '30m',
            'Case Material': '18K Gold',
            'Strap': 'Alligator Leather',
            'Power Reserve': '48 hours',
            'Dial Color': 'Champagne'
        },
        rating: 5.0,
        reviews: 45,
        straps: ['Alligator', 'Gold Bracelet'],
        accentColor: '#d4af37',
        colors: [
            { name: 'Champagne', hex: '#d4af37' },
            { name: 'White', hex: '#f5f5dc' },
            { name: 'Rose Gold', hex: '#b76e79' }
        ]
    },
    {
        id: 4,
        name: 'Rustic Navigator',
        category: 'Vintage Collection',
        collection: 'vintage',
        price: 720,
        oldPrice: 899,
        badge: '-20%',
        badgeType: 'sale',
        desc: '38mm mechanical, leather strap',
        fullDesc: 'Inspired by the watches worn by early aviators, the Rustic Navigator features a beautifully aged dial with luminous Arabic numerals. The hand-wound mechanical movement is visible through the exhibition caseback.',
        specs: {
            'Case Size': '38mm',
            'Movement': 'Mechanical (Hand-wound)',
            'Crystal': 'Domed Mineral',
            'Water Resistance': '30m',
            'Case Material': 'Brushed Steel',
            'Strap': 'Vintage Leather',
            'Power Reserve': '42 hours',
            'Dial Color': 'Aged Patina'
        },
        rating: 4.8,
        reviews: 63,
        straps: ['Vintage Leather', 'Canvas'],
        accentColor: '#8b4513',
        colors: [
            { name: 'Aged Patina', hex: '#8b4513' },
            { name: 'Brown', hex: '#5d4037' },
            { name: 'Cream', hex: '#d4c4a8' }
        ]
    },
    {
        id: 5,
        name: 'Obsidian Diver',
        category: 'Sport Collection',
        collection: 'sport',
        price: 1150,
        oldPrice: null,
        badge: null,
        desc: '43mm automatic, ceramic bezel',
        fullDesc: 'Engineered for the depths, the Obsidian Diver features a unidirectional ceramic bezel and 300m water resistance. The automatic movement keeps perfect time whether you are on a deep-sea dive or in a boardroom.',
        specs: {
            'Case Size': '43mm',
            'Movement': 'Automatic',
            'Crystal': 'Sapphire',
            'Water Resistance': '300m',
            'Case Material': 'Stainless Steel',
            'Strap': 'Steel Bracelet',
            'Power Reserve': '44 hours',
            'Dial Color': 'Obsidian Black'
        },
        rating: 4.8,
        reviews: 71,
        straps: ['Steel', 'Rubber', 'NATO'],
        accentColor: '#555',
        colors: [
            { name: 'Obsidian Black', hex: '#1a1a1a' },
            { name: 'Charcoal', hex: '#555' },
            { name: 'Blue', hex: '#2c3e50' }
        ]
    },
    {
        id: 6,
        name: 'Rose Elegance',
        category: 'Luxury Collection',
        collection: 'luxury',
        price: 1890,
        oldPrice: null,
        badge: 'New',
        badgeType: 'new',
        desc: '36mm automatic, rose gold',
        fullDesc: 'The Rose Elegance brings refined sophistication with its polished rose gold case and delicate dial design. Perfect for those who appreciate understated luxury, this timepiece is both a fashion statement and a precision instrument.',
        specs: {
            'Case Size': '36mm',
            'Movement': 'Automatic',
            'Crystal': 'Sapphire',
            'Water Resistance': '30m',
            'Case Material': 'Rose Gold PVD',
            'Strap': 'Italian Leather',
            'Power Reserve': '38 hours',
            'Dial Color': 'Rose Blush'
        },
        rating: 4.9,
        reviews: 34,
        straps: ['Italian Leather', 'Mesh'],
        accentColor: '#b76e79',
        colors: [
            { name: 'Rose Blush', hex: '#b76e79' },
            { name: 'Silver', hex: '#c0c0c0' },
            { name: 'Champagne', hex: '#d4af37' }
        ]
    },
    {
        id: 7,
        name: 'Titan Chronometer',
        category: 'Classic Collection',
        collection: 'classic',
        price: 1650,
        oldPrice: null,
        badge: null,
        desc: '41mm COSC certified, titanium',
        fullDesc: 'Precision meets lightweight durability in the Titan Chronometer. COSC certified for exceptional accuracy, this titanium masterpiece is significantly lighter than steel while being incredibly strong and corrosion-resistant.',
        specs: {
            'Case Size': '41mm',
            'Movement': 'COSC Certified Automatic',
            'Crystal': 'Sapphire (AR coated)',
            'Water Resistance': '100m',
            'Case Material': 'Grade 5 Titanium',
            'Strap': 'Titanium Bracelet',
            'Power Reserve': '72 hours',
            'Dial Color': 'Slate Grey'
        },
        rating: 4.9,
        reviews: 52,
        straps: ['Titanium', 'Leather', 'Rubber'],
        accentColor: '#708090',
        colors: [
            { name: 'Slate Grey', hex: '#708090' },
            { name: 'Black', hex: '#1a1a1a' },
            { name: 'Blue Grey', hex: '#5a6c7d' }
        ]
    },
    {
        id: 8,
        name: 'Heritage Moonphase',
        category: 'Vintage Collection',
        collection: 'vintage',
        price: 2100,
        oldPrice: 2625,
        badge: '-20%',
        badgeType: 'sale',
        desc: '40mm automatic, moonphase complication',
        fullDesc: 'The Heritage Moonphase combines vintage charm with astronomical precision. The hand-painted moonphase indicator is accurate to within a day over 122 years, while the classic design evokes the golden age of watchmaking.',
        specs: {
            'Case Size': '40mm',
            'Movement': 'Automatic w/ Moonphase',
            'Crystal': 'Domed Sapphire',
            'Water Resistance': '50m',
            'Case Material': 'Polished Steel',
            'Strap': 'Cordovan Leather',
            'Power Reserve': '48 hours',
            'Dial Color': 'Cream'
        },
        rating: 4.7,
        reviews: 38,
        straps: ['Cordovan Leather', 'Suede'],
        accentColor: '#daa520',
        colors: [
            { name: 'Cream', hex: '#f5f5dc' },
            { name: 'Gold', hex: '#daa520' },
            { name: 'Ivory', hex: '#fffff0' }
        ]
    }
];

// ==========================================
// Cart Management
// ==========================================
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('timeblends_cart')) || [];
        this.updateCount();
    }

    add(productId, quantity = 1) {
        const product = PRODUCTS.find(p => p.id === parseInt(productId));
        if (!product) return;

        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category,
                quantity: quantity,
                accentColor: product.accentColor
            });
        }
        this.save();
        this.updateCount();
        showToast(`${product.name} added to cart`);
    }

    addAndCheckout(productId, quantity = 1) {
        this.add(productId, quantity);
        window.location.href = 'cart.html';
    }

    remove(productId) {
        this.items = this.items.filter(item => item.id !== parseInt(productId));
        this.save();
        this.updateCount();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === parseInt(productId));
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.save();
            this.updateCount();
        }
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    save() {
        localStorage.setItem('timeblends_cart', JSON.stringify(this.items));
    }

    updateCount() {
        const countEls = document.querySelectorAll('#cartCount');
        const count = this.getItemCount();
        countEls.forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    clear() {
        this.items = [];
        this.save();
        this.updateCount();
    }
}

const cart = new Cart();

// ==========================================
// Toast Notifications
// ==========================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}

// ==========================================
// Header Scroll Effect
// ==========================================
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    const onScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ==========================================
// Mobile Navigation
// ==========================================
function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ==========================================
// Search Overlay
// ==========================================
function initSearch() {
    const toggleBtn = document.querySelector('.search-toggle');
    const overlay = document.getElementById('searchOverlay');
    const closeBtn = document.getElementById('searchClose');
    const input = document.getElementById('searchInput');

    if (!toggleBtn || !overlay) return;

    toggleBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        setTimeout(() => input?.focus(), 300);
    });

    const close = () => overlay.classList.remove('active');
    closeBtn?.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });

    input?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && input.value.trim()) {
            window.location.href = `shop.html?search=${encodeURIComponent(input.value.trim())}`;
        }
    });
}

// ==========================================
// Scroll Animations
// ==========================================
function initAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in, .product-card, .testimonial-card, .value-card, .collection-card').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// Add to Cart & Buy Now Buttons
// ==========================================
function initAddToCart() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (btn) {
            e.preventDefault();
            const productId = btn.dataset.productId;
            cart.add(productId);

            btn.textContent = 'Added!';
            btn.style.background = '#4caf50';
            setTimeout(() => {
                btn.textContent = 'Add to Cart';
                btn.style.background = '';
            }, 1500);
        }

        const buyNowBtn = e.target.closest('.buy-now-btn');
        if (buyNowBtn) {
            e.preventDefault();
            const productId = buyNowBtn.dataset.productId;
            const qty = parseInt(buyNowBtn.dataset.quantity) || 1;
            cart.addAndCheckout(productId, qty);
        }
    });
}

// ==========================================
// Quick View Modal
// ==========================================
function initQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (!modal) return;

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.quick-view-btn');
        if (btn) {
            e.preventDefault();
            const productId = parseInt(btn.dataset.productId);
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) return;

            const colors = product.colors || [{ name: 'Default', hex: product.accentColor }];
            const body = document.getElementById('quickViewBody');
            body.innerHTML = `
                <div class="quick-view__image" style="background: #0d0d0d; border-radius: 8px; padding: 30px; display: flex; align-items: center; justify-content: center; aspect-ratio: 1;">
                    <div id="quickViewWatchSvg">${createWatchSVG(product.accentColor, 'full')}</div>
                </div>
                <div class="quick-view__info">
                    <p style="font-size: 0.75rem; color: var(--accent); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;">${product.category}</p>
                    <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 8px;">${product.name}</h3>
                    <div style="margin-bottom: 12px;">
                        <span style="color: var(--accent); letter-spacing: 2px;">★★★★★</span>
                        <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 4px;">(${product.reviews})</span>
                    </div>
                    <p style="font-family: var(--font-display); font-size: 1.5rem; color: var(--accent); font-weight: 600; margin-bottom: 16px;">$${product.price.toLocaleString()}</p>
                    <div style="margin-bottom: 16px;">
                        <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 8px;">Watch Color</span>
                        <div class="color-options">
                            ${colors.map((c, i) => `
                                <button class="color-option ${i === 0 ? 'active' : ''}" data-color="${c.hex}" title="${c.name}" style="--swatch: ${c.hex};"></button>
                            `).join('')}
                        </div>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; margin-bottom: 24px;">${product.fullDesc}</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                        <button class="btn btn--outline add-to-cart-btn" data-product-id="${product.id}" style="flex: 1;">Add to Cart</button>
                        <button class="btn btn--primary buy-now-btn" data-product-id="${product.id}" style="flex: 1;">Buy Now</button>
                        <a href="product-detail.html?id=${product.id}" class="btn btn--outline" style="flex: 1; text-align: center;">View Details</a>
                    </div>
                </div>
            `;

            body.querySelectorAll('.color-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    body.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const svgContainer = document.getElementById('quickViewWatchSvg');
                    if (svgContainer) svgContainer.innerHTML = createWatchSVG(btn.dataset.color, 'full');
                });
            });

            modal.classList.add('active');
        }
    });

    modal.querySelector('.modal__overlay')?.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.querySelector('.modal__close')?.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.classList.remove('active');
    });
}

// ==========================================
// Newsletter Form
// ==========================================
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input?.value) {
            showToast('Thank you for subscribing!');
            input.value = '';
        }
    });
}

// ==========================================
// Contact Form
// ==========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message sent! We\'ll get back to you soon.');
        form.reset();
    });
}

// ==========================================
// Shop Page
// ==========================================
function initShopPage() {
    const grid = document.querySelector('.shop-products__grid');
    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const collectionFilter = params.get('collection');
    const searchQuery = params.get('search')?.toLowerCase();

    let filtered = [...PRODUCTS];

    if (collectionFilter) {
        filtered = filtered.filter(p => p.collection === collectionFilter);
        const checkbox = document.querySelector(`input[value="${collectionFilter}"]`);
        if (checkbox) checkbox.checked = true;
    }

    if (searchQuery) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            p.category.toLowerCase().includes(searchQuery) ||
            p.desc.toLowerCase().includes(searchQuery)
        );
    }

    function renderProducts(products) {
        const count = document.querySelector('.shop-toolbar__count');
        if (count) count.textContent = `Showing ${products.length} watches`;

        grid.innerHTML = products.map(p => `
            <div class="product-card" data-product-id="${p.id}">
                <div class="product-card__image">
                    <div class="product-card__placeholder">
                        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" fill="#1a1a1a" stroke="${p.accentColor}" stroke-width="1.5"/>
                            <circle cx="100" cy="100" r="72" fill="#0d0d0d"/>
                            <line x1="100" y1="100" x2="100" y2="50" stroke="${p.accentColor}" stroke-width="2.5" stroke-linecap="round"/>
                            <line x1="100" y1="100" x2="140" y2="80" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                            <circle cx="100" cy="100" r="3" fill="${p.accentColor}"/>
                            <text x="100" y="80" text-anchor="middle" fill="${p.accentColor}" font-size="5" letter-spacing="2">TIME BLENDS</text>
                        </svg>
                    </div>
                    ${p.badge ? `<span class="product-card__badge ${p.badgeType === 'new' ? 'badge--new' : p.badgeType === 'sale' ? 'badge--sale' : ''}">${p.badge}</span>` : ''}
                    <div class="product-card__actions">
                        <button class="product-card__action-btn quick-view-btn" data-product-id="${p.id}" title="Quick View">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>
                        <button class="product-card__action-btn wishlist-btn" title="Add to Wishlist">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </button>
                    </div>
                </div>
                <div class="product-card__info">
                    <p class="product-card__category">${p.category}</p>
                    <h3 class="product-card__name"><a href="product-detail.html?id=${p.id}">${p.name}</a></h3>
                    <p class="product-card__desc">${p.desc}</p>
                    <div class="product-card__footer">
                        <div>
                            <span class="product-card__price">$${p.price.toLocaleString()}</span>
                            ${p.oldPrice ? `<span class="product-card__price--old">$${p.oldPrice.toLocaleString()}</span>` : ''}
                        </div>
                        <div class="product-card__btns">
                            <button class="btn btn--small add-to-cart-btn" data-product-id="${p.id}">Add to Cart</button>
                            <button class="btn btn--small btn--primary buy-now-btn" data-product-id="${p.id}">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderProducts(filtered);

    // Filter checkboxes
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
            const checked = Array.from(document.querySelectorAll('.filter-option input[type="checkbox"]:checked'))
                .map(el => el.value);

            let result = [...PRODUCTS];
            if (checked.length > 0) {
                result = result.filter(p => checked.includes(p.collection));
            }
            if (searchQuery) {
                result = result.filter(p =>
                    p.name.toLowerCase().includes(searchQuery) ||
                    p.category.toLowerCase().includes(searchQuery)
                );
            }
            renderProducts(result);
        });
    });

    // Sort
    const sortSelect = document.querySelector('.shop-toolbar__sort select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const val = sortSelect.value;
            const currentProducts = [...filtered];
            switch (val) {
                case 'price-low': currentProducts.sort((a, b) => a.price - b.price); break;
                case 'price-high': currentProducts.sort((a, b) => b.price - a.price); break;
                case 'name': currentProducts.sort((a, b) => a.name.localeCompare(b.name)); break;
                case 'rating': currentProducts.sort((a, b) => b.rating - a.rating); break;
            }
            renderProducts(currentProducts);
        });
    }

    // Price range
    const priceRange = document.querySelector('.price-range');
    const priceMax = document.getElementById('priceMax');
    if (priceRange) {
        priceRange.addEventListener('input', () => {
            const max = parseInt(priceRange.value);
            if (priceMax) priceMax.textContent = `$${max.toLocaleString()}`;
            const result = PRODUCTS.filter(p => p.price <= max);
            renderProducts(result);
        });
    }
}

// ==========================================
// Product Detail Page
// ==========================================
function initProductDetail() {
    const infoEl = document.querySelector('.product-detail__info');
    if (!infoEl) return;

    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = PRODUCTS.find(p => p.id === productId);

    if (!product) {
        infoEl.innerHTML = '<p>Product not found.</p>';
        return;
    }

    document.title = `${product.name} - Time Blends`;

    const breadcrumbName = document.getElementById('productBreadcrumb');
    if (breadcrumbName) breadcrumbName.textContent = product.name;

    // Main image
    const mainImage = document.querySelector('.product-detail__main-image');
    if (mainImage) {
        mainImage.innerHTML = createWatchSVG(product.accentColor, 'large');
    }

    // Thumbnails
    const thumbs = document.querySelector('.product-detail__thumbnails');
    if (thumbs) {
        thumbs.innerHTML = [1, 2, 3, 4].map((_, i) => `
            <div class="product-detail__thumb ${i === 0 ? 'active' : ''}">
                ${createWatchSVG(product.accentColor, 'small')}
            </div>
        `).join('');
    }

    infoEl.innerHTML = `
        <p class="product-detail__category">${product.category}</p>
        <h1 class="product-detail__name">${product.name}</h1>
        <div class="product-detail__rating">
            <span class="stars">★★★★★</span>
            <span class="count">${product.rating} (${product.reviews} reviews)</span>
        </div>
        <p class="product-detail__price">$${product.price.toLocaleString()}${product.oldPrice ? ` <span class="product-card__price--old">$${product.oldPrice.toLocaleString()}</span>` : ''}</p>
        <p class="product-detail__desc">${product.fullDesc}</p>

        <div class="product-detail__options">
            <span class="option-label">Watch Color</span>
            <div class="color-options">
                ${(product.colors || [{ name: 'Default', hex: product.accentColor }]).map((c, i) => `
                    <button class="color-option ${i === 0 ? 'active' : ''}" data-color="${c.hex}" title="${c.name}" style="--swatch: ${c.hex};"></button>
                `).join('')}
            </div>
        </div>

        <div class="product-detail__options">
            <span class="option-label">Strap Type</span>
            <div class="strap-options">
                ${product.straps.map((s, i) => `<button class="strap-option ${i === 0 ? 'active' : ''}">${s}</button>`).join('')}
            </div>
        </div>

        <div class="product-detail__quantity">
            <span class="option-label" style="margin-bottom: 0;">Quantity</span>
            <div class="qty-control">
                <button class="qty-btn" id="qtyMinus">−</button>
                <input type="number" class="qty-value" id="qtyValue" value="1" min="1" max="10" readonly>
                <button class="qty-btn" id="qtyPlus">+</button>
            </div>
        </div>

        <div class="product-detail__actions">
            <button class="btn btn--outline" id="addToCartDetail">Add to Cart</button>
            <button class="btn btn--primary" id="buyNowDetail" data-product-id="${product.id}">Buy Now</button>
            <button class="btn btn--outline wishlist-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                Wishlist
            </button>
        </div>

        <div class="product-detail__meta">
            <div class="meta-item"><span class="label">SKU:</span> TB-${String(product.id).padStart(4, '0')}</div>
            <div class="meta-item"><span class="label">Category:</span> ${product.category}</div>
            <div class="meta-item"><span class="label">Availability:</span> <span style="color: #4caf50;">In Stock</span></div>
        </div>

        <div class="product-detail__specs">
            <h3 class="specs-title">Specifications</h3>
            <div class="specs-grid">
                ${Object.entries(product.specs).map(([key, val]) => `
                    <div class="spec-item">
                        <span class="spec-label">${key}</span>
                        <span>${val}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Color option toggle - updates watch display
    const mainImageEl = document.querySelector('.product-detail__main-image');
    const thumbsEl = document.querySelector('.product-detail__thumbnails');
    infoEl.querySelectorAll('.color-option').forEach(btn => {
        btn.addEventListener('click', () => {
            infoEl.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const color = btn.dataset.color;
            if (mainImageEl) mainImageEl.innerHTML = createWatchSVG(color, 'large');
            if (thumbsEl) {
                thumbsEl.innerHTML = [1, 2, 3, 4].map((_, i) => `
                    <div class="product-detail__thumb ${i === 0 ? 'active' : ''}">
                        ${createWatchSVG(color, 'small')}
                    </div>
                `).join('');
            }
        });
    });

    // Strap option toggle
    infoEl.querySelectorAll('.strap-option').forEach(btn => {
        btn.addEventListener('click', () => {
            infoEl.querySelectorAll('.strap-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Quantity controls
    const qtyValue = document.getElementById('qtyValue');
    document.getElementById('qtyMinus')?.addEventListener('click', () => {
        const v = parseInt(qtyValue.value);
        if (v > 1) qtyValue.value = v - 1;
    });
    document.getElementById('qtyPlus')?.addEventListener('click', () => {
        const v = parseInt(qtyValue.value);
        if (v < 10) qtyValue.value = v + 1;
    });

    // Add to cart
    document.getElementById('addToCartDetail')?.addEventListener('click', () => {
        const qty = parseInt(qtyValue.value);
        cart.add(product.id, qty);
    });

    // Buy now
    document.getElementById('buyNowDetail')?.addEventListener('click', () => {
        const qty = parseInt(qtyValue.value);
        cart.addAndCheckout(product.id, qty);
    });
}

function createWatchSVG(color, size) {
    const s = size === 'large' ? 300 : size === 'full' ? '100%' : 60;
    return `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: ${s}; height: ${s};">
        <circle cx="100" cy="100" r="80" fill="#1a1a1a" stroke="${color}" stroke-width="1.5"/>
        <circle cx="100" cy="100" r="72" fill="#0d0d0d"/>
        <line x1="100" y1="100" x2="100" y2="50" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="100" y1="100" x2="140" y2="80" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="100" cy="100" r="3" fill="${color}"/>
        ${(size === 'large' || size === 'full') ? `<text x="100" y="80" text-anchor="middle" fill="${color}" font-size="5" letter-spacing="2">TIME BLENDS</text>` : ''}
    </svg>`;
}

// ==========================================
// Cart Page
// ==========================================
function initCartPage() {
    const cartContainer = document.getElementById('cartItems');
    if (!cartContainer) return;

    function renderCart() {
        if (cart.items.length === 0) {
            cartContainer.innerHTML = `
                <div class="cart-empty">
                    <div class="cart-empty__icon">🛒</div>
                    <h3 class="cart-empty__title">Your cart is empty</h3>
                    <p class="cart-empty__text">Looks like you haven't added any watches yet.</p>
                    <a href="shop.html" class="btn btn--primary">Browse Watches</a>
                </div>
            `;
            const summary = document.querySelector('.cart-summary');
            if (summary) summary.style.display = 'none';
            return;
        }

        cartContainer.innerHTML = cart.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item__image">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="80" fill="#1a1a1a" stroke="${item.accentColor || '#c8a96e'}" stroke-width="1.5"/>
                        <circle cx="100" cy="100" r="72" fill="#0d0d0d"/>
                        <circle cx="100" cy="100" r="3" fill="${item.accentColor || '#c8a96e'}"/>
                    </svg>
                </div>
                <div class="cart-item__info">
                    <h4>${item.name}</h4>
                    <p>${item.category}</p>
                    <div class="qty-control" style="margin-top: 8px;">
                        <button class="qty-btn cart-qty-minus" data-id="${item.id}">−</button>
                        <input type="number" class="qty-value" value="${item.quantity}" readonly style="width: 40px;">
                        <button class="qty-btn cart-qty-plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="cart-item__price">$${(item.price * item.quantity).toLocaleString()}</div>
                <button class="cart-item__remove" data-id="${item.id}" title="Remove">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </div>
        `).join('');

        // Summary
        const subtotal = cart.getTotal();
        const shipping = subtotal >= 500 ? 0 : 25;
        const total = subtotal + shipping;

        const subtotalEl = document.getElementById('cartSubtotal');
        const shippingEl = document.getElementById('cartShipping');
        const totalEl = document.getElementById('cartTotal');
        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
        if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : `$${shipping}`;
        if (totalEl) totalEl.textContent = `$${total.toLocaleString()}`;
    }

    renderCart();

    cartContainer.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.cart-item__remove');
        if (removeBtn) {
            cart.remove(removeBtn.dataset.id);
            renderCart();
            return;
        }

        const minus = e.target.closest('.cart-qty-minus');
        if (minus) {
            const item = cart.items.find(i => i.id === parseInt(minus.dataset.id));
            if (item && item.quantity > 1) {
                cart.updateQuantity(minus.dataset.id, item.quantity - 1);
                renderCart();
            }
            return;
        }

        const plus = e.target.closest('.cart-qty-plus');
        if (plus) {
            const item = cart.items.find(i => i.id === parseInt(plus.dataset.id));
            if (item) {
                cart.updateQuantity(plus.dataset.id, item.quantity + 1);
                renderCart();
            }
        }
    });

    // Checkout button
    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        showToast('Thank you! Checkout feature coming soon.');
    });
}

// ==========================================
// Wishlist Toggle
// ==========================================
function initWishlist() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.wishlist-btn');
        if (btn) {
            e.preventDefault();
            btn.classList.toggle('active');
            const svg = btn.querySelector('svg');
            if (btn.classList.contains('active')) {
                if (svg) svg.setAttribute('fill', 'currentColor');
                btn.style.color = '#e74c3c';
                showToast('Added to wishlist');
            } else {
                if (svg) svg.setAttribute('fill', 'none');
                btn.style.color = '';
                showToast('Removed from wishlist');
            }
        }
    });
}

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileNav();
    initSearch();
    initAnimations();
    initAddToCart();
    initQuickView();
    initNewsletter();
    initContactForm();
    initShopPage();
    initProductDetail();
    initCartPage();
    initWishlist();
});
