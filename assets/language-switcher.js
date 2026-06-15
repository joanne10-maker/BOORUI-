(function () {
  const storageKey = "boorui-language";
  const defaultLanguage = "en";
  const languages = [
    { code: "en", nativeName: "English", dir: "ltr" },
    { code: "fr", nativeName: "Français", dir: "ltr" },
    { code: "de", nativeName: "Deutsch", dir: "ltr" },
    { code: "ar", nativeName: "العربية", dir: "rtl" },
    { code: "ru", nativeName: "Русский", dir: "ltr" },
    { code: "es", nativeName: "Español", dir: "ltr" },
    { code: "pt", nativeName: "Português", dir: "ltr" },
  ];

  const translations = {
    en: {
      "meta.title": "BOORUI | OEM & ODM Smartwatch Band Supplier",
      "meta.description": "BOORUI is a China-based OEM and ODM smartwatch band supplier for global brands, distributors, Amazon sellers, Shopify stores and private label businesses.",
      "nav.home": "Home",
      "nav.products": "Products",
      "nav.services": "OEM/ODM Services",
      "nav.markets": "Markets",
      "nav.about": "About Us",
      "nav.faq": "FAQ",
      "nav.contact": "Contact Us",
      "nav.quote": "Get a Quote",
      "nav.language": "Language",
      "trust.oem": "OEM / ODM Support",
      "trust.stock": "Ready Stock & New Arrivals",
      "trust.privateLabel": "Private Label Packaging",
      "trust.alibaba": "Alibaba Storefront",
      "hero.title": "OEM & ODM Smartwatch Bands for Global Brands, Online Sellers and Distributors.",
      "hero.subtitle": "Private label, wholesale stock and custom accessory programs for wearable product businesses.",
      "button.quote": "Get a Quote",
      "button.catalog": "Download Catalog",
      "button.whatsapp": "WhatsApp",
      "button.products": "View Product Range",
      "button.email": "Email Joanne",
      "button.map": "Open Exact Address in OpenStreetMap",
      "section.intro": "BOORUI is a China-based OEM and ODM smartwatch band supplier serving brands, importers, distributors, Amazon sellers, Shopify stores and private label businesses worldwide.",
      "section.browseTitle": "Retail Clarity, B2B Sourcing Speed",
      "section.browseText": "Browse by device, material, buyer need and size, then move directly into quotation and sample discussion.",
      "section.productTitle": "Core Product Families",
      "section.productText": "BOORUI keeps the buying path simple: choose compatibility, material direction and customization needs.",
      "section.oemTitle": "OEM / ODM and Private Label Service",
      "section.oemText": "From material selection to packaging direction, BOORUI helps buyers turn accessory ideas into sellable watch band ranges.",
      "section.aboutTitle": "About Shenzhen Boxing Trading Development Co., Ltd.",
      "section.aboutText": "Founded in 2016, Shenzhen Boxing Trading Development Co., Ltd. operates BOORUI as a smartwatch band and wearable accessory supplier for global B2B buyers.",
      "section.contactTitle": "Request a Quote or Product Selection",
      "section.contactText": "Share your target models, material direction, quantity and private label needs. BOORUI will respond with suitable options.",
      "product.apple": "Apple Watch Bands",
      "product.samsung": "Samsung Watch Bands",
      "product.garmin": "Garmin Watch Bands",
      "product.miband": "Mi Band Straps",
      "product.silicone": "Silicone Watch Bands",
      "product.leather": "Leather Watch Bands",
      "product.nylon": "Nylon Watch Bands",
      "product.metal": "Metal Watch Bands",
      "adv.factory": "Factory Direct",
      "adv.logo": "Custom Logo & Packaging",
      "adv.wholesale": "Global Wholesale Supplier",
      "adv.accessories": "Smart Watch Bands & 3C Accessories",
      "form.name": "Name",
      "form.email": "Email",
      "form.country": "Country",
      "form.companyType": "Company Type",
      "form.productInterest": "Product Interest",
      "form.quantity": "Quantity",
      "form.customization": "Customization Need",
      "form.whatsapp": "WhatsApp",
      "form.message": "Message",
      "form.submit": "Submit Inquiry",
      "form.note": "Thank you. Our sales team will contact you soon.",
      "footer.tagline": "OEM & ODM Smartwatch Band Supplier for Global B2B Buyers.",
      "footer.corePages": "Core Pages",
      "footer.address": "Address",
      "contact.sales": "Sales Contact",
      "contact.address": "Company Address",
      "contact.mapText": "Location preview for Dawang High-tech Zone, Sihui, Zhaoqing. Use the button below to open an OpenStreetMap search for the exact BOORUI address.",
    },
    fr: {
      "meta.title": "BOORUI | Fournisseur OEM & ODM de bracelets pour montres connectées",
      "meta.description": "BOORUI fournit des bracelets de montres connectées OEM/ODM, des accessoires 3C, du logo personnalisé et des emballages pour les acheteurs B2B mondiaux.",
      "nav.home": "Accueil", "nav.products": "Produits", "nav.services": "Services OEM/ODM", "nav.markets": "Marchés", "nav.about": "À propos", "nav.faq": "FAQ", "nav.contact": "Contact", "nav.quote": "Demander un devis", "nav.language": "Langue",
      "trust.oem": "Support OEM / ODM", "trust.stock": "Stock disponible & nouveautés", "trust.privateLabel": "Emballage marque privée", "trust.alibaba": "Boutique Alibaba",
      "hero.title": "Bracelets de montres connectées OEM & ODM pour marques, vendeurs en ligne et distributeurs.", "hero.subtitle": "Marque privée, stock de gros et programmes d'accessoires personnalisés pour le wearable.", "button.quote": "Demander un devis", "button.catalog": "Télécharger le catalogue", "button.whatsapp": "WhatsApp", "button.products": "Voir les produits", "button.email": "Contacter Joanne", "button.map": "Ouvrir l'adresse dans OpenStreetMap",
      "section.intro": "BOORUI est un fournisseur chinois OEM/ODM de bracelets de montres connectées pour marques, importateurs, distributeurs et vendeurs e-commerce.", "section.browseTitle": "Clarté retail, rapidité sourcing B2B", "section.browseText": "Parcourez par appareil, matière, besoin acheteur et taille, puis passez au devis et aux échantillons.", "section.productTitle": "Familles de produits principales", "section.productText": "BOORUI simplifie l'achat : compatibilité, matière et besoin de personnalisation.", "section.oemTitle": "Service OEM / ODM et marque privée", "section.oemText": "De la sélection des matières à l'emballage, BOORUI aide à transformer les idées en gammes vendables.", "section.aboutTitle": "À propos de Shenzhen Boxing Trading Development Co., Ltd.", "section.aboutText": "Fondée en 2016, Shenzhen Boxing Trading Development Co., Ltd. exploite BOORUI pour les acheteurs B2B mondiaux.", "section.contactTitle": "Demander un devis ou une sélection produit", "section.contactText": "Partagez vos modèles cibles, matières, quantités et besoins de marque privée. BOORUI proposera des options adaptées.",
      "product.apple": "Bracelets Apple Watch", "product.samsung": "Bracelets Samsung Watch", "product.garmin": "Bracelets Garmin", "product.miband": "Bracelets Mi Band", "product.silicone": "Bracelets silicone", "product.leather": "Bracelets cuir", "product.nylon": "Bracelets nylon", "product.metal": "Bracelets métal",
      "adv.factory": "Direct usine", "adv.logo": "Logo & emballage personnalisés", "adv.wholesale": "Fournisseur grossiste mondial", "adv.accessories": "Bracelets smart watch & accessoires 3C",
      "form.name": "Nom", "form.email": "Email", "form.country": "Pays", "form.companyType": "Type d'entreprise", "form.productInterest": "Produit recherché", "form.quantity": "Quantité", "form.customization": "Personnalisation", "form.whatsapp": "WhatsApp", "form.message": "Message", "form.submit": "Envoyer la demande", "form.note": "Merci. Notre équipe commerciale vous contactera rapidement.",
      "footer.tagline": "Fournisseur OEM & ODM de bracelets pour montres connectées pour acheteurs B2B mondiaux.", "footer.corePages": "Pages principales", "footer.address": "Adresse", "contact.sales": "Contact commercial", "contact.address": "Adresse de l'entreprise", "contact.mapText": "Aperçu de la zone Dawang High-tech, Sihui, Zhaoqing. Utilisez le bouton pour ouvrir la recherche d'adresse exacte dans OpenStreetMap.",
    },
    de: {
      "meta.title": "BOORUI | OEM & ODM Smartwatch-Armband Lieferant",
      "meta.description": "BOORUI liefert OEM/ODM Smartwatch-Armbänder, 3C-Zubehör, individuelle Logos und Verpackungen für globale B2B-Kunden.",
      "nav.home": "Startseite", "nav.products": "Produkte", "nav.services": "OEM/ODM Services", "nav.markets": "Märkte", "nav.about": "Über uns", "nav.faq": "FAQ", "nav.contact": "Kontakt", "nav.quote": "Angebot anfragen", "nav.language": "Sprache",
      "trust.oem": "OEM / ODM Support", "trust.stock": "Lagerware & Neuheiten", "trust.privateLabel": "Private-Label Verpackung", "trust.alibaba": "Alibaba Shop",
      "hero.title": "OEM & ODM Smartwatch-Armbänder für Marken, Online-Seller und Distributoren.", "hero.subtitle": "Private Label, Großhandelsbestand und kundenspezifische Zubehörprogramme.", "button.quote": "Angebot anfragen", "button.catalog": "Katalog herunterladen", "button.whatsapp": "WhatsApp", "button.products": "Produkte ansehen", "button.email": "Joanne kontaktieren", "button.map": "Adresse in OpenStreetMap öffnen",
      "section.intro": "BOORUI ist ein chinesischer OEM/ODM Lieferant für Smartwatch-Armbänder für Marken, Importeure, Distributoren und E-Commerce-Seller.", "section.browseTitle": "Retail-Klarheit, B2B-Sourcing-Geschwindigkeit", "section.browseText": "Suchen Sie nach Gerät, Material, Bedarf und Größe und gehen Sie direkt zu Angebot und Muster.", "section.productTitle": "Wichtige Produktfamilien", "section.productText": "BOORUI macht den Einkauf einfach: Kompatibilität, Materialrichtung und Anpassungsbedarf.", "section.oemTitle": "OEM / ODM und Private Label Service", "section.oemText": "Von Materialauswahl bis Verpackung hilft BOORUI, Ideen in verkaufbare Armbandserien zu verwandeln.", "section.aboutTitle": "Über Shenzhen Boxing Trading Development Co., Ltd.", "section.aboutText": "Seit 2016 betreibt Shenzhen Boxing Trading Development Co., Ltd. BOORUI für globale B2B-Kunden.", "section.contactTitle": "Angebot oder Produktauswahl anfragen", "section.contactText": "Senden Sie Zielmodelle, Materialwunsch, Menge und Private-Label-Bedarf. BOORUI empfiehlt passende Optionen.",
      "product.apple": "Apple Watch Armbänder", "product.samsung": "Samsung Watch Armbänder", "product.garmin": "Garmin Armbänder", "product.miband": "Mi Band Armbänder", "product.silicone": "Silikonarmbänder", "product.leather": "Lederarmbänder", "product.nylon": "Nylonarmbänder", "product.metal": "Metallarmbänder",
      "adv.factory": "Direkt ab Werk", "adv.logo": "Individuelles Logo & Verpackung", "adv.wholesale": "Globaler Großhandelslieferant", "adv.accessories": "Smartwatch-Armbänder & 3C-Zubehör",
      "form.name": "Name", "form.email": "E-Mail", "form.country": "Land", "form.companyType": "Unternehmenstyp", "form.productInterest": "Produktinteresse", "form.quantity": "Menge", "form.customization": "Anpassungsbedarf", "form.whatsapp": "WhatsApp", "form.message": "Nachricht", "form.submit": "Anfrage senden", "form.note": "Danke. Unser Vertriebsteam wird Sie bald kontaktieren.",
      "footer.tagline": "OEM & ODM Smartwatch-Armband Lieferant für globale B2B-Kunden.", "footer.corePages": "Kernseiten", "footer.address": "Adresse", "contact.sales": "Vertriebskontakt", "contact.address": "Firmenadresse", "contact.mapText": "Standortvorschau für Dawang High-tech Zone, Sihui, Zhaoqing. Öffnen Sie die genaue Adresse über OpenStreetMap.",
    },
    ar: {
      "meta.title": "BOORUI | مورد أحزمة ساعات ذكية OEM و ODM",
      "meta.description": "BOORUI مورد صيني لأحزمة الساعات الذكية وإكسسوارات 3C مع شعار وتغليف مخصصين للمشترين العالميين.",
      "nav.home": "الرئيسية", "nav.products": "المنتجات", "nav.services": "خدمات OEM/ODM", "nav.markets": "الأسواق", "nav.about": "من نحن", "nav.faq": "الأسئلة", "nav.contact": "اتصل بنا", "nav.quote": "اطلب عرض سعر", "nav.language": "اللغة",
      "trust.oem": "دعم OEM / ODM", "trust.stock": "مخزون جاهز ومنتجات جديدة", "trust.privateLabel": "تغليف بعلامة خاصة", "trust.alibaba": "متجر Alibaba",
      "hero.title": "أحزمة ساعات ذكية OEM و ODM للعلامات التجارية والبائعين والموزعين.", "hero.subtitle": "علامة خاصة، توريد بالجملة، وبرامج إكسسوارات مخصصة لأعمال الأجهزة القابلة للارتداء.", "button.quote": "اطلب عرض سعر", "button.catalog": "تحميل الكتالوج", "button.whatsapp": "واتساب", "button.products": "عرض المنتجات", "button.email": "راسل Joanne", "button.map": "فتح العنوان في OpenStreetMap",
      "section.intro": "BOORUI مورد صيني لأحزمة الساعات الذكية OEM/ODM يخدم العلامات التجارية والمستوردين والموزعين وبائعي التجارة الإلكترونية.", "section.browseTitle": "وضوح للمتجر وسرعة في التوريد B2B", "section.browseText": "تصفح حسب الجهاز والخامة واحتياج المشتري والمقاس ثم انتقل مباشرة إلى عرض السعر والعينات.", "section.productTitle": "فئات المنتجات الأساسية", "section.productText": "تجعل BOORUI مسار الشراء واضحا: التوافق، الخامة، واحتياجات التخصيص.", "section.oemTitle": "خدمة OEM / ODM والعلامة الخاصة", "section.oemText": "من اختيار الخامات إلى التغليف، تساعد BOORUI المشترين على تحويل الأفكار إلى مجموعات قابلة للبيع.", "section.aboutTitle": "حول Shenzhen Boxing Trading Development Co., Ltd.", "section.aboutText": "تأسست الشركة عام 2016 وتدير علامة BOORUI لخدمة المشترين العالميين في مجال B2B.", "section.contactTitle": "اطلب عرض سعر أو اختيار منتجات", "section.contactText": "أرسل النماذج المطلوبة والخامة والكمية واحتياجات العلامة الخاصة، وستقترح BOORUI الخيارات المناسبة.",
      "product.apple": "أحزمة Apple Watch", "product.samsung": "أحزمة Samsung Watch", "product.garmin": "أحزمة Garmin", "product.miband": "أحزمة Mi Band", "product.silicone": "أحزمة سيليكون", "product.leather": "أحزمة جلد", "product.nylon": "أحزمة نايلون", "product.metal": "أحزمة معدنية",
      "adv.factory": "مباشرة من المصنع", "adv.logo": "شعار وتغليف مخصص", "adv.wholesale": "مورد جملة عالمي", "adv.accessories": "أحزمة ساعات ذكية وإكسسوارات 3C",
      "form.name": "الاسم", "form.email": "البريد الإلكتروني", "form.country": "الدولة", "form.companyType": "نوع الشركة", "form.productInterest": "المنتج المطلوب", "form.quantity": "الكمية", "form.customization": "احتياج التخصيص", "form.whatsapp": "واتساب", "form.message": "الرسالة", "form.submit": "إرسال الطلب", "form.note": "شكرا لك. سيتواصل معك فريق المبيعات قريبا.",
      "footer.tagline": "مورد أحزمة ساعات ذكية OEM و ODM للمشترين العالميين B2B.", "footer.corePages": "الصفحات الرئيسية", "footer.address": "العنوان", "contact.sales": "مسؤول المبيعات", "contact.address": "عنوان الشركة", "contact.mapText": "معاينة لموقع منطقة Dawang High-tech في Sihui، Zhaoqing. استخدم الزر لفتح البحث عن العنوان الدقيق في OpenStreetMap.",
    },
    ru: {
      "meta.title": "BOORUI | Поставщик OEM и ODM ремешков для смарт-часов",
      "meta.description": "BOORUI поставляет OEM/ODM ремешки для смарт-часов, 3C аксессуары, индивидуальный логотип и упаковку для глобальных B2B покупателей.",
      "nav.home": "Главная", "nav.products": "Продукты", "nav.services": "OEM/ODM услуги", "nav.markets": "Рынки", "nav.about": "О нас", "nav.faq": "FAQ", "nav.contact": "Контакты", "nav.quote": "Запросить цену", "nav.language": "Язык",
      "trust.oem": "Поддержка OEM / ODM", "trust.stock": "Склад и новинки", "trust.privateLabel": "Упаковка private label", "trust.alibaba": "Магазин Alibaba",
      "hero.title": "OEM и ODM ремешки для смарт-часов для брендов, онлайн-продавцов и дистрибьюторов.", "hero.subtitle": "Private label, оптовый склад и кастомные программы аксессуаров для wearable бизнеса.", "button.quote": "Запросить цену", "button.catalog": "Скачать каталог", "button.whatsapp": "WhatsApp", "button.products": "Смотреть продукты", "button.email": "Написать Joanne", "button.map": "Открыть адрес в OpenStreetMap",
      "section.intro": "BOORUI - китайский OEM/ODM поставщик ремешков для смарт-часов для брендов, импортеров, дистрибьюторов и e-commerce продавцов.", "section.browseTitle": "Понятный ассортимент и быстрый B2B sourcing", "section.browseText": "Выбирайте по устройству, материалу, потребности и размеру, затем переходите к цене и образцам.", "section.productTitle": "Основные продуктовые категории", "section.productText": "BOORUI упрощает закупку: совместимость, материал и требования к кастомизации.", "section.oemTitle": "OEM / ODM и private label сервис", "section.oemText": "От выбора материалов до упаковки BOORUI помогает превращать идеи в продаваемые линейки ремешков.", "section.aboutTitle": "О Shenzhen Boxing Trading Development Co., Ltd.", "section.aboutText": "Основанная в 2016 году компания управляет BOORUI для глобальных B2B покупателей.", "section.contactTitle": "Запросить цену или подбор продуктов", "section.contactText": "Отправьте модели, материалы, количество и требования private label. BOORUI предложит подходящие варианты.",
      "product.apple": "Ремешки Apple Watch", "product.samsung": "Ремешки Samsung Watch", "product.garmin": "Ремешки Garmin", "product.miband": "Ремешки Mi Band", "product.silicone": "Силиконовые ремешки", "product.leather": "Кожаные ремешки", "product.nylon": "Нейлоновые ремешки", "product.metal": "Металлические ремешки",
      "adv.factory": "Напрямую с фабрики", "adv.logo": "Индивидуальный логотип и упаковка", "adv.wholesale": "Глобальный оптовый поставщик", "adv.accessories": "Ремешки для смарт-часов и 3C аксессуары",
      "form.name": "Имя", "form.email": "Email", "form.country": "Страна", "form.companyType": "Тип компании", "form.productInterest": "Интересующий продукт", "form.quantity": "Количество", "form.customization": "Кастомизация", "form.whatsapp": "WhatsApp", "form.message": "Сообщение", "form.submit": "Отправить запрос", "form.note": "Спасибо. Наша команда продаж скоро свяжется с вами.",
      "footer.tagline": "OEM и ODM поставщик ремешков для смарт-часов для глобальных B2B покупателей.", "footer.corePages": "Основные страницы", "footer.address": "Адрес", "contact.sales": "Контакт продаж", "contact.address": "Адрес компании", "contact.mapText": "Предпросмотр района Dawang High-tech Zone, Sihui, Zhaoqing. Нажмите кнопку, чтобы открыть точный адрес в OpenStreetMap.",
    },
    es: {
      "meta.title": "BOORUI | Proveedor OEM & ODM de correas para smart watch",
      "meta.description": "BOORUI suministra correas para smart watch OEM/ODM, accesorios 3C, logo personalizado y embalaje para compradores B2B globales.",
      "nav.home": "Inicio", "nav.products": "Productos", "nav.services": "Servicios OEM/ODM", "nav.markets": "Mercados", "nav.about": "Nosotros", "nav.faq": "FAQ", "nav.contact": "Contacto", "nav.quote": "Solicitar cotización", "nav.language": "Idioma",
      "trust.oem": "Soporte OEM / ODM", "trust.stock": "Stock listo y novedades", "trust.privateLabel": "Embalaje de marca privada", "trust.alibaba": "Tienda Alibaba",
      "hero.title": "Correas OEM & ODM para smart watch para marcas, vendedores online y distribuidores.", "hero.subtitle": "Marca privada, stock mayorista y programas personalizados de accesorios wearable.", "button.quote": "Solicitar cotización", "button.catalog": "Descargar catálogo", "button.whatsapp": "WhatsApp", "button.products": "Ver productos", "button.email": "Contactar a Joanne", "button.map": "Abrir dirección en OpenStreetMap",
      "section.intro": "BOORUI es un proveedor chino OEM/ODM de correas para smart watch para marcas, importadores, distribuidores y vendedores e-commerce.", "section.browseTitle": "Claridad retail, velocidad de sourcing B2B", "section.browseText": "Busque por dispositivo, material, necesidad y talla, luego avance a cotización y muestras.", "section.productTitle": "Familias principales de productos", "section.productText": "BOORUI simplifica la compra: compatibilidad, material y necesidad de personalización.", "section.oemTitle": "Servicio OEM / ODM y marca privada", "section.oemText": "Desde selección de materiales hasta embalaje, BOORUI ayuda a convertir ideas en líneas vendibles.", "section.aboutTitle": "Acerca de Shenzhen Boxing Trading Development Co., Ltd.", "section.aboutText": "Fundada en 2016, la empresa opera BOORUI para compradores B2B globales.", "section.contactTitle": "Solicitar cotización o selección de productos", "section.contactText": "Comparta modelos objetivo, material, cantidad y necesidades de marca privada. BOORUI recomendará opciones adecuadas.",
      "product.apple": "Correas Apple Watch", "product.samsung": "Correas Samsung Watch", "product.garmin": "Correas Garmin", "product.miband": "Correas Mi Band", "product.silicone": "Correas de silicona", "product.leather": "Correas de cuero", "product.nylon": "Correas de nylon", "product.metal": "Correas metálicas",
      "adv.factory": "Directo de fábrica", "adv.logo": "Logo y embalaje personalizados", "adv.wholesale": "Proveedor mayorista global", "adv.accessories": "Correas smart watch y accesorios 3C",
      "form.name": "Nombre", "form.email": "Email", "form.country": "País", "form.companyType": "Tipo de empresa", "form.productInterest": "Producto de interés", "form.quantity": "Cantidad", "form.customization": "Personalización", "form.whatsapp": "WhatsApp", "form.message": "Mensaje", "form.submit": "Enviar consulta", "form.note": "Gracias. Nuestro equipo comercial le contactará pronto.",
      "footer.tagline": "Proveedor OEM & ODM de correas para smart watch para compradores B2B globales.", "footer.corePages": "Páginas principales", "footer.address": "Dirección", "contact.sales": "Contacto comercial", "contact.address": "Dirección de empresa", "contact.mapText": "Vista previa de Dawang High-tech Zone, Sihui, Zhaoqing. Use el botón para abrir la dirección exacta en OpenStreetMap.",
    },
    pt: {
      "meta.title": "BOORUI | Fornecedor OEM & ODM de pulseiras para smart watch",
      "meta.description": "BOORUI fornece pulseiras para smart watch OEM/ODM, acessórios 3C, logotipo personalizado e embalagens para compradores B2B globais.",
      "nav.home": "Início", "nav.products": "Produtos", "nav.services": "Serviços OEM/ODM", "nav.markets": "Mercados", "nav.about": "Sobre nós", "nav.faq": "FAQ", "nav.contact": "Contato", "nav.quote": "Solicitar cotação", "nav.language": "Idioma",
      "trust.oem": "Suporte OEM / ODM", "trust.stock": "Estoque pronto e novidades", "trust.privateLabel": "Embalagem private label", "trust.alibaba": "Loja Alibaba",
      "hero.title": "Pulseiras OEM & ODM para smart watch para marcas, vendedores online e distribuidores.", "hero.subtitle": "Private label, estoque atacadista e programas personalizados de acessórios wearable.", "button.quote": "Solicitar cotação", "button.catalog": "Baixar catálogo", "button.whatsapp": "WhatsApp", "button.products": "Ver produtos", "button.email": "Falar com Joanne", "button.map": "Abrir endereço no OpenStreetMap",
      "section.intro": "BOORUI é um fornecedor chinês OEM/ODM de pulseiras para smart watch para marcas, importadores, distribuidores e vendedores e-commerce.", "section.browseTitle": "Clareza retail, velocidade de sourcing B2B", "section.browseText": "Navegue por dispositivo, material, necessidade e tamanho, depois avance para cotação e amostras.", "section.productTitle": "Principais famílias de produtos", "section.productText": "BOORUI simplifica a compra: compatibilidade, material e necessidade de personalização.", "section.oemTitle": "Serviço OEM / ODM e private label", "section.oemText": "Da seleção de materiais à embalagem, BOORUI ajuda compradores a transformar ideias em linhas vendáveis.", "section.aboutTitle": "Sobre Shenzhen Boxing Trading Development Co., Ltd.", "section.aboutText": "Fundada em 2016, a empresa opera BOORUI para compradores B2B globais.", "section.contactTitle": "Solicitar cotação ou seleção de produtos", "section.contactText": "Envie modelos, material, quantidade e necessidades private label. BOORUI recomendará opções adequadas.",
      "product.apple": "Pulseiras Apple Watch", "product.samsung": "Pulseiras Samsung Watch", "product.garmin": "Pulseiras Garmin", "product.miband": "Pulseiras Mi Band", "product.silicone": "Pulseiras de silicone", "product.leather": "Pulseiras de couro", "product.nylon": "Pulseiras de nylon", "product.metal": "Pulseiras metálicas",
      "adv.factory": "Direto da fábrica", "adv.logo": "Logo e embalagem personalizados", "adv.wholesale": "Fornecedor atacadista global", "adv.accessories": "Pulseiras smart watch e acessórios 3C",
      "form.name": "Nome", "form.email": "Email", "form.country": "País", "form.companyType": "Tipo de empresa", "form.productInterest": "Produto de interesse", "form.quantity": "Quantidade", "form.customization": "Personalização", "form.whatsapp": "WhatsApp", "form.message": "Mensagem", "form.submit": "Enviar consulta", "form.note": "Obrigado. Nossa equipe comercial entrará em contato em breve.",
      "footer.tagline": "Fornecedor OEM & ODM de pulseiras para smart watch para compradores B2B globais.", "footer.corePages": "Páginas principais", "footer.address": "Endereço", "contact.sales": "Contato de vendas", "contact.address": "Endereço da empresa", "contact.mapText": "Prévia da região Dawang High-tech Zone, Sihui, Zhaoqing. Use o botão para abrir o endereço exato no OpenStreetMap.",
    },
  };

  function languageFromPath() {
    const match = window.location.pathname.match(/^\/(en|fr|de|ar|ru|es|pt)(?:\/|$)/);
    return match ? match[1] : null;
  }

  function getInitialLanguage() {
    const fromPath = languageFromPath();
    if (fromPath) return fromPath;
    const stored = window.localStorage.getItem(storageKey);
    return translations[stored] ? stored : defaultLanguage;
  }

  function applyText(el, value) {
    if (!value) return;
    el.textContent = value;
  }

  function updateLabel(el, value) {
    if (!value) return;
    const node = Array.from(el.childNodes).find((child) => child.nodeType === Node.TEXT_NODE);
    if (node) {
      node.textContent = value;
    } else {
      el.insertBefore(document.createTextNode(value), el.firstChild);
    }
  }

  function setLanguage(code) {
    const lang = translations[code] ? code : defaultLanguage;
    const dictionary = translations[lang];
    const language = languages.find((item) => item.code === lang) || languages[0];

    document.documentElement.lang = lang;
    document.documentElement.dir = language.dir;
    document.body.classList.toggle("is-rtl", language.dir === "rtl");
    document.title = dictionary["meta.title"] || document.title;

    const description = document.querySelector('meta[name="description"]');
    if (description && dictionary["meta.description"]) {
      description.setAttribute("content", dictionary["meta.description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => applyText(el, dictionary[el.dataset.i18n]));
    document.querySelectorAll("[data-i18n-label]").forEach((el) => updateLabel(el, dictionary[el.dataset.i18nLabel]));
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const value = dictionary[el.dataset.i18nPlaceholder];
      if (value) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-language-option]").forEach((el) => {
      const isActive = el.dataset.languageOption === lang;
      el.classList.toggle("is-active", isActive);
      el.setAttribute("aria-current", isActive ? "true" : "false");
    });

    document.querySelectorAll("[data-language-current]").forEach((el) => {
      el.textContent = language.nativeName;
    });

    window.localStorage.setItem(storageKey, lang);
    window.dispatchEvent(new CustomEvent("boorui:language-change", { detail: { language: lang } }));
  }

  function initSwitcher() {
    document.querySelectorAll("[data-language-switcher]").forEach((switcher) => {
      const trigger = switcher.querySelector("[data-language-trigger]");
      const menu = switcher.querySelector("[data-language-menu]");
      if (!trigger || !menu) return;

      trigger.addEventListener("click", () => {
        const isOpen = switcher.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", String(isOpen));
      });

      menu.querySelectorAll("[data-language-option]").forEach((option) => {
        option.addEventListener("click", () => {
          setLanguage(option.dataset.languageOption);
          switcher.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
        });
      });
    });

    document.addEventListener("click", (event) => {
      document.querySelectorAll("[data-language-switcher].is-open").forEach((switcher) => {
        if (!switcher.contains(event.target)) {
          switcher.classList.remove("is-open");
          switcher.querySelector("[data-language-trigger]")?.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  function initHreflang() {
    const path = window.location.pathname.replace(/^\/(en|fr|de|ar|ru|es|pt)(?=\/|$)/, "") || "/";
    languages.forEach((language) => {
      if (document.querySelector(`link[rel="alternate"][hreflang="${language.code}"]`)) return;
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = language.code;
      link.href = `${window.location.origin}/${language.code}${path}`;
      document.head.appendChild(link);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initSwitcher();
    initHreflang();
    setLanguage(getInitialLanguage());
  });
})();
