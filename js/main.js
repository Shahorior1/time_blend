/* =============================================
   TIME BLEND - Main JavaScript
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
        accentColor: '#c8a96e'
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
        accentColor: '#b0c4de'
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
        accentColor: '#d4af37'
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
        accentColor: '#8b4513'
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
        accentColor: '#555'
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
        accentColor: '#b76e79'
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
        accentColor: '#708090'
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
        accentColor: '#daa520'
    },
    {
        id: 9,
        name: 'Platinum Tourbillon',
        category: 'Premium Collection',
        collection: 'premium',
        price: 5850,
        oldPrice: null,
        badge: 'Exclusive',
        desc: '40mm tourbillon, platinum case',
        fullDesc: 'The Platinum Tourbillon is the pinnacle of horological artistry. Housing a hand-assembled tourbillon movement within a solid platinum case, this masterpiece features a skeletonized dial that reveals the mesmerizing dance of the rotating cage. Limited to 50 pieces worldwide.',
        specs: {
            'Case Size': '40mm',
            'Movement': 'Hand-wound Tourbillon',
            'Crystal': 'Sapphire (Double AR)',
            'Water Resistance': '30m',
            'Case Material': '950 Platinum',
            'Strap': 'Hand-stitched Alligator',
            'Power Reserve': '72 hours',
            'Dial Color': 'Open-worked Silver'
        },
        rating: 5.0,
        reviews: 18,
        straps: ['Alligator', 'Platinum Bracelet'],
        accentColor: '#e5e4e2'
    },
    {
        id: 10,
        name: 'Diamond Constellation',
        category: 'Premium Collection',
        collection: 'premium',
        price: 4200,
        oldPrice: null,
        badge: 'Limited',
        desc: '38mm automatic, diamond bezel',
        fullDesc: 'The Diamond Constellation dazzles with 48 brilliant-cut diamonds adorning its bezel, set by master jewelers using the invisible setting technique. The midnight blue aventurine dial mimics a starlit sky, making every glance at the time a breathtaking experience.',
        specs: {
            'Case Size': '38mm',
            'Movement': 'Swiss Automatic',
            'Crystal': 'Sapphire',
            'Water Resistance': '50m',
            'Case Material': '18K White Gold',
            'Strap': 'Satin',
            'Power Reserve': '42 hours',
            'Dial Color': 'Aventurine Blue'
        },
        rating: 5.0,
        reviews: 24,
        straps: ['Satin', 'White Gold Bracelet'],
        accentColor: '#4169e1'
    },
    {
        id: 11,
        name: 'Sapphire Perpetual',
        category: 'Premium Collection',
        collection: 'premium',
        price: 3750,
        oldPrice: null,
        badge: null,
        desc: '42mm perpetual calendar, sapphire caseback',
        fullDesc: 'The Sapphire Perpetual features a grand complication perpetual calendar that automatically adjusts for months of varying lengths and leap years until 2100. The exhibition sapphire caseback reveals the intricately decorated movement with Geneva stripes and blued screws.',
        specs: {
            'Case Size': '42mm',
            'Movement': 'Automatic Perpetual Calendar',
            'Crystal': 'Sapphire (AR coated)',
            'Water Resistance': '30m',
            'Case Material': 'Polished Steel',
            'Strap': 'Louisiana Alligator',
            'Power Reserve': '52 hours',
            'Dial Color': 'Grand Feu Enamel White'
        },
        rating: 4.9,
        reviews: 31,
        straps: ['Alligator', 'Steel Bracelet'],
        accentColor: '#2e8b57'
    },
    {
        id: 12,
        name: 'Noir Skeleton',
        category: 'Luxury Collection',
        collection: 'luxury',
        price: 2890,
        oldPrice: null,
        badge: 'New',
        badgeType: 'new',
        desc: '43mm skeleton dial, DLC coated',
        fullDesc: 'The Noir Skeleton strips horology to its essence. The fully skeletonized dial reveals every bridge, wheel, and spring of the manual-winding movement, all finished in dark DLC coating. The contrast of black-coated components against the luminous hands creates a dramatic visual statement.',
        specs: {
            'Case Size': '43mm',
            'Movement': 'Manual-winding Skeleton',
            'Crystal': 'Sapphire (front & back)',
            'Water Resistance': '50m',
            'Case Material': 'DLC-coated Titanium',
            'Strap': 'Alcantara',
            'Power Reserve': '65 hours',
            'Dial Color': 'Skeletonized Black'
        },
        rating: 4.9,
        reviews: 42,
        straps: ['Alcantara', 'Rubber', 'DLC Steel'],
        accentColor: '#c0c0c0'
    },
    {
        id: 13,
        name: 'Imperial Regulator',
        category: 'Classic Collection',
        collection: 'classic',
        price: 3200,
        oldPrice: null,
        badge: null,
        desc: '41mm regulator display, enamel dial',
        fullDesc: 'The Imperial Regulator pays homage to the precision clocks used by master watchmakers. Its unique regulator display separates hours, minutes, and seconds on individual sub-dials, offering unparalleled legibility. The hand-painted grand feu enamel dial takes artisans over 40 hours to complete.',
        specs: {
            'Case Size': '41mm',
            'Movement': 'Automatic Regulator',
            'Crystal': 'Domed Sapphire',
            'Water Resistance': '30m',
            'Case Material': 'Rose Gold',
            'Strap': 'Shell Cordovan',
            'Power Reserve': '56 hours',
            'Dial Color': 'Grand Feu Enamel Ivory'
        },
        rating: 4.8,
        reviews: 29,
        straps: ['Shell Cordovan', 'Rose Gold Bracelet'],
        accentColor: '#cd7f32'
    },
    {
        id: 14,
        name: 'Carbon Apex',
        category: 'Sport Collection',
        collection: 'sport',
        price: 1950,
        oldPrice: null,
        badge: null,
        desc: '45mm forged carbon, chronograph',
        fullDesc: 'Born from motorsport technology, the Carbon Apex features a case forged from carbon composite, making it incredibly strong yet feather-light at just 68 grams. The integrated chronograph with tachymeter bezel and racing-inspired dial make it the ultimate performance timepiece.',
        specs: {
            'Case Size': '45mm',
            'Movement': 'Automatic Chronograph',
            'Crystal': 'Sapphire (AR coated)',
            'Water Resistance': '100m',
            'Case Material': 'Forged Carbon',
            'Strap': 'Textured Rubber',
            'Power Reserve': '46 hours',
            'Dial Color': 'Carbon Black'
        },
        rating: 4.8,
        reviews: 56,
        straps: ['Rubber', 'Carbon-fiber NATO'],
        accentColor: '#ff4500'
    },
    {
        id: 15,
        name: 'Emerald Reserve',
        category: 'Premium Collection',
        collection: 'premium',
        price: 4500,
        oldPrice: null,
        badge: 'Exclusive',
        desc: '39mm minute repeater, emerald crown',
        fullDesc: 'The Emerald Reserve features one of watchmaking\'s most cherished complications: the minute repeater. At the push of a slide, hammers strike gongs to audibly chime the hours, quarters, and minutes. The winding crown is adorned with a cabochon-cut Colombian emerald.',
        specs: {
            'Case Size': '39mm',
            'Movement': 'Manual-winding Minute Repeater',
            'Crystal': 'Sapphire',
            'Water Resistance': '30m',
            'Case Material': '18K Yellow Gold',
            'Strap': 'Crocodile',
            'Power Reserve': '50 hours',
            'Dial Color': 'Guilloché Silver'
        },
        rating: 5.0,
        reviews: 12,
        straps: ['Crocodile', 'Gold Bracelet'],
        accentColor: '#50c878'
    },
    {
        id: 16,
        name: 'Sterling Grand Date',
        category: 'Premium Collection',
        collection: 'premium',
        price: 6200,
        oldPrice: null,
        badge: 'Limited',
        desc: '44mm grande date, annual calendar',
        fullDesc: 'The Sterling Grand Date combines a striking oversized date display with an annual calendar that only requires adjustment once a year. The multi-layered dial architecture creates a sense of depth, while the hand-engraved rotor visible through the caseback showcases artisanal excellence.',
        specs: {
            'Case Size': '44mm',
            'Movement': 'Automatic Annual Calendar',
            'Crystal': 'Sapphire (Double AR)',
            'Water Resistance': '50m',
            'Case Material': 'Platinum 950',
            'Strap': 'Barenia Calfskin',
            'Power Reserve': '68 hours',
            'Dial Color': 'Anthracite Sunburst'
        },
        rating: 5.0,
        reviews: 9,
        straps: ['Calfskin', 'Platinum Bracelet'],
        accentColor: '#9370db'
    },
    {
        id: 17,
        name: 'Pulse Pro Ultra',
        category: 'Smart Watch',
        collection: 'smartwatch',
        price: 499,
        oldPrice: null,
        badge: 'New',
        badgeType: 'new',
        desc: '1.9" AMOLED, health monitoring, GPS',
        fullDesc: 'The Pulse Pro Ultra combines cutting-edge technology with sleek design. Featuring a vibrant 1.9" AMOLED always-on display, advanced health monitoring with heart rate, SpO2, and ECG, built-in GPS, and 7-day battery life. Water-resistant to 50m with over 100 workout modes.',
        specs: {
            'Display': '1.9" AMOLED 396x484',
            'Battery': '7 Days / 14 Days Standby',
            'Sensors': 'HR, SpO2, ECG, Temp',
            'Water Resistance': '5 ATM (50m)',
            'Connectivity': 'Bluetooth 5.3, WiFi',
            'GPS': 'Dual-band GPS',
            'Storage': '32GB',
            'Compatibility': 'iOS & Android'
        },
        rating: 4.7,
        reviews: 234,
        straps: ['Silicone', 'Steel Band', 'Leather'],
        accentColor: '#00bcd4'
    },
    {
        id: 18,
        name: 'Vertex Titanium',
        category: 'Smart Watch',
        collection: 'smartwatch',
        price: 699,
        oldPrice: null,
        badge: null,
        desc: 'Titanium case, sapphire display, LTE',
        fullDesc: 'The Vertex Titanium is the premium smartwatch for those who demand the best. Grade 5 titanium case, scratch-proof sapphire crystal display, standalone LTE connectivity, and advanced fitness coaching powered by AI. Features a stunning 1.5" round OLED display.',
        specs: {
            'Display': '1.5" Round OLED 466x466',
            'Battery': '5 Days / 10 Days Standby',
            'Sensors': 'HR, SpO2, ECG, BP',
            'Water Resistance': '10 ATM (100m)',
            'Connectivity': 'LTE, Bluetooth 5.3, WiFi, NFC',
            'GPS': 'Multi-band GNSS',
            'Storage': '64GB',
            'Case Material': 'Grade 5 Titanium'
        },
        rating: 4.9,
        reviews: 142,
        straps: ['Titanium Band', 'Fluoroelastomer', 'Leather'],
        accentColor: '#78909c'
    },
    {
        id: 19,
        name: 'Aura Fit',
        category: 'Smart Watch',
        collection: 'smartwatch',
        price: 349,
        oldPrice: 449,
        badge: '-22%',
        badgeType: 'sale',
        desc: '1.4" AMOLED, fitness focused, slim',
        fullDesc: 'The Aura Fit is designed for the fitness enthusiast who values style. Its ultra-slim 9mm profile and lightweight 36g body make it disappear on your wrist during intense workouts. Advanced sleep tracking, stress monitoring, and personalized fitness plans keep you at your best.',
        specs: {
            'Display': '1.4" AMOLED 454x454',
            'Battery': '10 Days / 20 Days Standby',
            'Sensors': 'HR, SpO2, Stress, Sleep',
            'Water Resistance': '5 ATM (50m)',
            'Connectivity': 'Bluetooth 5.2',
            'GPS': 'Built-in GPS',
            'Weight': '36g',
            'Thickness': '9mm'
        },
        rating: 4.6,
        reviews: 318,
        straps: ['Silicone', 'Nylon', 'Mesh'],
        accentColor: '#e91e63'
    },
    {
        id: 20,
        name: 'Chrono Hybrid X',
        category: 'Smart Watch',
        collection: 'smartwatch',
        price: 595,
        oldPrice: null,
        badge: 'Bestseller',
        desc: 'Analog + smart, e-ink sub-dial',
        fullDesc: 'The Chrono Hybrid X bridges the gap between traditional watchmaking and smart technology. Real mechanical hands sit above a hidden e-ink sub-display that shows notifications, steps, and heart rate. Looks like a classic watch, works like a smartwatch. 30-day battery life.',
        specs: {
            'Display': 'Analog + E-Ink Sub-dial',
            'Battery': '30 Days',
            'Sensors': 'HR, Steps, Sleep',
            'Water Resistance': '5 ATM (50m)',
            'Connectivity': 'Bluetooth 5.0',
            'Case Size': '42mm',
            'Case Material': 'Stainless Steel',
            'Compatibility': 'iOS & Android'
        },
        rating: 4.8,
        reviews: 189,
        straps: ['Italian Leather', 'Steel Bracelet', 'NATO'],
        accentColor: '#4caf50'
    },
    {
        id: 21,
        name: 'Nova Sport GPS',
        category: 'Smart Watch',
        collection: 'smartwatch',
        price: 425,
        oldPrice: null,
        badge: 'New',
        badgeType: 'new',
        desc: '1.6" display, rugged, multi-sport',
        fullDesc: 'Built for adventure, the Nova Sport GPS features a rugged MIL-STD-810G certified body that withstands extreme conditions. Dual-frequency GPS delivers pinpoint accuracy for trail running, cycling, and hiking. Topographic maps and route navigation built right in.',
        specs: {
            'Display': '1.6" Transflective MIP',
            'Battery': '14 Days / 40 Days Standby',
            'Sensors': 'HR, SpO2, Altimeter, Barometer',
            'Water Resistance': '10 ATM (100m)',
            'Connectivity': 'Bluetooth 5.2, ANT+',
            'GPS': 'Dual-frequency GNSS',
            'Durability': 'MIL-STD-810G',
            'Maps': 'Topo Maps Built-in'
        },
        rating: 4.7,
        reviews: 96,
        straps: ['Silicone', 'Nylon'],
        accentColor: '#ff9800'
    },
    {
        id: 22,
        name: 'Luxe Connect',
        category: 'Smart Watch',
        collection: 'smartwatch',
        price: 850,
        oldPrice: null,
        badge: 'Exclusive',
        desc: '18K gold bezel, diamond markers',
        fullDesc: 'The Luxe Connect is where haute horlogerie meets Silicon Valley. An 18K rose gold bezel surrounds a vivid sapphire-covered AMOLED display, while diamond hour markers add unmistakable luxury. Full smartwatch features including NFC payments, voice assistant, and health suite.',
        specs: {
            'Display': '1.4" AMOLED Sapphire',
            'Battery': '4 Days / 8 Days Standby',
            'Sensors': 'HR, SpO2, ECG, Temp',
            'Water Resistance': '5 ATM (50m)',
            'Connectivity': 'LTE, Bluetooth 5.3, NFC',
            'Bezel': '18K Rose Gold',
            'Markers': '12 Diamond Indices',
            'Case Material': 'Ceramic & Gold'
        },
        rating: 4.9,
        reviews: 47,
        straps: ['Alligator', 'Rose Gold Bracelet'],
        accentColor: '#b76e79'
    }
];

// ==========================================
// Cart Management
// ==========================================
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('timeblend_cart')) || [];
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
        localStorage.setItem('timeblend_cart', JSON.stringify(this.items));
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
// Add to Cart Buttons
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

            const body = document.getElementById('quickViewBody');
            body.innerHTML = `
                <div class="quick-view__image" style="background: #0d0d0d; border-radius: 8px; padding: 30px; display: flex; align-items: center; justify-content: center; aspect-ratio: 1;">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
                        <circle cx="100" cy="100" r="80" fill="#1a1a1a" stroke="${product.accentColor}" stroke-width="1.5"/>
                        <circle cx="100" cy="100" r="72" fill="#0d0d0d"/>
                        <line x1="100" y1="100" x2="100" y2="50" stroke="${product.accentColor}" stroke-width="2.5" stroke-linecap="round"/>
                        <line x1="100" y1="100" x2="140" y2="80" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                        <circle cx="100" cy="100" r="3" fill="${product.accentColor}"/>
                        <text x="100" y="80" text-anchor="middle" fill="${product.accentColor}" font-size="5" letter-spacing="2">TIME BLEND</text>
                    </svg>
                </div>
                <div class="quick-view__info">
                    <p style="font-size: 0.75rem; color: var(--accent); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;">${product.category}</p>
                    <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 8px;">${product.name}</h3>
                    <div style="margin-bottom: 12px;">
                        <span style="color: var(--accent); letter-spacing: 2px;">★★★★★</span>
                        <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 4px;">(${product.reviews})</span>
                    </div>
                    <p style="font-family: var(--font-display); font-size: 1.5rem; color: var(--accent); font-weight: 600; margin-bottom: 16px;">$${product.price.toLocaleString()}</p>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; margin-bottom: 24px;">${product.fullDesc}</p>
                    <div style="display: flex; gap: 12px;">
                        <button class="btn btn--primary add-to-cart-btn" data-product-id="${product.id}" style="flex: 1;">Add to Cart</button>
                        <a href="product-detail.html?id=${product.id}" class="btn btn--outline" style="flex: 1; text-align: center;">View Details</a>
                    </div>
                </div>
            `;

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
                            <text x="100" y="80" text-anchor="middle" fill="${p.accentColor}" font-size="5" letter-spacing="2">TIME BLEND</text>
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
                        <button class="btn btn--small add-to-cart-btn" data-product-id="${p.id}">Add to Cart</button>
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

    document.title = `${product.name} - Time Blend`;

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
            <button class="btn btn--primary" id="addToCartDetail">Add to Cart</button>
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
}

function createWatchSVG(color, size) {
    const s = size === 'large' ? 300 : 60;
    return `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: ${s}px; height: ${s}px;">
        <circle cx="100" cy="100" r="80" fill="#1a1a1a" stroke="${color}" stroke-width="1.5"/>
        <circle cx="100" cy="100" r="72" fill="#0d0d0d"/>
        <line x1="100" y1="100" x2="100" y2="50" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="100" y1="100" x2="140" y2="80" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="100" cy="100" r="3" fill="${color}"/>
        ${size === 'large' ? `<text x="100" y="80" text-anchor="middle" fill="${color}" font-size="5" letter-spacing="2">TIME BLEND</text>` : ''}
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
// Particle System
// ==========================================
function initParticles() {
    const canvas = document.getElementById('heroParticles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h, animId;

    function resize() {
        w = canvas.width = canvas.offsetWidth;
        h = canvas.height = canvas.offsetHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.5 + 0.5,
            dx: (Math.random() - 0.5) * 0.3,
            dy: (Math.random() - 0.5) * 0.3,
            alpha: Math.random() * 0.4 + 0.1,
            pulse: Math.random() * Math.PI * 2
        };
    }

    function init() {
        resize();
        particles = [];
        const count = Math.min(80, Math.floor(w * h / 15000));
        for (let i = 0; i < count; i++) particles.push(createParticle());
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        for (const p of particles) {
            p.x += p.dx;
            p.y += p.dy;
            p.pulse += 0.02;
            const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200,169,110,${a})`;
            ctx.fill();
        }

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(200,169,110,${0.04 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener('resize', init);
}

// ==========================================
// Animated Price Counter
// ==========================================
function animatePrice(el) {
    if (!el) return;
    const target = parseInt(el.dataset.value) || 0;
    const duration = 1200;
    const start = performance.now();
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ==========================================
// Hero Slider
// ==========================================
function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const vnavDots = slider.querySelectorAll('.vnav-dot');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    const progressBar = document.getElementById('heroProgress');
    const counterEl = document.getElementById('counterCurrent');

    let current = 0;
    let isTransitioning = false;
    let autoplayTimer;
    const DURATION = 6000;

    function goToSlide(index) {
        if (isTransitioning || index === current) return;
        isTransitioning = true;

        const prev = current;
        current = (index + slides.length) % slides.length;

        slides[prev].classList.add('leaving');
        slides[prev].classList.remove('active');

        slides[current].classList.add('active');

        vnavDots[prev]?.classList.remove('active');
        vnavDots[current]?.classList.add('active');

        if (counterEl) counterEl.textContent = String(current + 1).padStart(2, '0');

        const priceEl = slides[current].querySelector('.price-value');
        animatePrice(priceEl);

        resetProgress();

        setTimeout(() => {
            slides[prev].classList.remove('leaving');
            isTransitioning = false;
        }, 1000);
    }

    function next() { goToSlide(current + 1); }
    function prev() { goToSlide(current - 1); }

    function resetProgress() {
        if (!progressBar) return;
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        void progressBar.offsetWidth;
        progressBar.style.transition = `width ${DURATION}ms linear`;
        progressBar.style.width = '100%';
    }

    function startAutoplay() {
        stopAutoplay();
        resetProgress();
        autoplayTimer = setInterval(next, DURATION);
    }
    function stopAutoplay() { clearInterval(autoplayTimer); }

    nextBtn?.addEventListener('click', () => { next(); startAutoplay(); });
    prevBtn?.addEventListener('click', () => { prev(); startAutoplay(); });

    vnavDots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.dataset.slide));
            startAutoplay();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { next(); startAutoplay(); }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { prev(); startAutoplay(); }
    });

    // Touch/swipe
    let tx = 0;
    slider.addEventListener('touchstart', e => { tx = e.changedTouches[0].screenX; stopAutoplay(); }, { passive: true });
    slider.addEventListener('touchend', e => {
        const diff = tx - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
        startAutoplay();
    }, { passive: true });

    // Mouse wheel
    let wheelCooldown = false;
    slider.addEventListener('wheel', (e) => {
        if (wheelCooldown) return;
        wheelCooldown = true;
        if (e.deltaY > 0) next(); else prev();
        startAutoplay();
        setTimeout(() => wheelCooldown = false, 1200);
    }, { passive: true });

    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Animate first slide price on load
    const firstPrice = slides[0]?.querySelector('.price-value');
    animatePrice(firstPrice);

    startAutoplay();
}

// ==========================================
// Products Carousel
// ==========================================
function initProductsCarousel() {
    const carousel = document.getElementById('productsCarousel');
    if (!carousel) return;

    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (!track) return;

    const cards = track.querySelectorAll('.product-card');
    let position = 0;

    function getVisibleCount() {
        const w = window.innerWidth;
        if (w <= 480) return 1;
        if (w <= 768) return 2;
        if (w <= 1024) return 3;
        return 4;
    }

    function getCardWidth() {
        const card = cards[0];
        if (!card) return 0;
        const style = getComputedStyle(track);
        const gap = parseInt(style.gap) || 24;
        return card.offsetWidth + gap;
    }

    function maxPosition() {
        return Math.max(0, cards.length - getVisibleCount());
    }

    function updateTrack() {
        const cardWidth = getCardWidth();
        track.style.transform = `translateX(-${position * cardWidth}px)`;
    }

    prevBtn?.addEventListener('click', () => {
        position = Math.max(0, position - 1);
        updateTrack();
    });

    nextBtn?.addEventListener('click', () => {
        position = Math.min(maxPosition(), position + 1);
        updateTrack();
    });

    // Touch swipe for carousel
    let carouselTouchStart = 0;
    let carouselTouchEnd = 0;

    carousel.addEventListener('touchstart', (e) => {
        carouselTouchStart = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        carouselTouchEnd = e.changedTouches[0].screenX;
        const diff = carouselTouchStart - carouselTouchEnd;
        if (Math.abs(diff) > 40) {
            if (diff > 0) {
                position = Math.min(maxPosition(), position + 1);
            } else {
                position = Math.max(0, position - 1);
            }
            updateTrack();
        }
    }, { passive: true });

    // Auto-scroll carousel slowly
    let carouselAutoplay = setInterval(() => {
        if (position >= maxPosition()) {
            position = 0;
        } else {
            position++;
        }
        updateTrack();
    }, 4000);

    carousel.addEventListener('mouseenter', () => clearInterval(carouselAutoplay));
    carousel.addEventListener('mouseleave', () => {
        carouselAutoplay = setInterval(() => {
            if (position >= maxPosition()) {
                position = 0;
            } else {
                position++;
            }
            updateTrack();
        }, 4000);
    });

    window.addEventListener('resize', () => {
        position = Math.min(position, maxPosition());
        updateTrack();
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
    initParticles();
    initHeroSlider();
    initProductsCarousel();
});
