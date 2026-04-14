/* ═══════════════════════════════════════════════════════════════
   COLEGROVE MEDIA — PORTFOLIO DATA
   Single source of truth for all portfolio projects.
   
   Used by: homepage, work page, services page, pricing page,
            and future individual service pages.
   
   To add a new project:
     1. Add an entry to the PORTFOLIO array below
     2. Set featured: true + featuredOrder if you want it on the homepage
     3. Set servicePages to control which service pages it appears on
     4. That's it — every page reads from this file automatically
   
   Fields:
     slug            — unique ID (used for modal routing)
     title           — display title
     client          — client name (leave empty string if none)
     cat             — top-level category: 'video', 'animation', 'photo', 'design'
     type            — specific type (matches service IDs in pricing-data.js)
     typeLabel       — human-readable type label
     thumb           — thumbnail image path
     thumbPosition   — optional CSS object-position override (default: 'center center')
     vimeoId         — Vimeo video ID (for video/animation projects)
     desc            — description shown in modal
     specs           — array of {k, v} key-value pairs for modal specs
     cta             — optional custom CTA button text
     ctaHref         — optional custom CTA link (default: /brief)
     
     featured        — true = shows on homepage grid
     featuredOrder   — number controlling homepage position (1 = first)
     servicePages    — array of service type IDs this project demos
     
     // Photo/design specific:
     images          — array of image URLs for gallery modal
     related         — false to suppress "related" section in modal
     
     // Lottie specific:
     lottieUrl       — primary Lottie JSON URL
     lottieFiles     — array of {url} for multi-file Lottie player
     
     // Coming soon:
     coming          — true = renders as "Coming Soon" placeholder card
   ═══════════════════════════════════════════════════════════════ */

var PORTFOLIO = [

  // ═══════════════════════════════════════════════════════════
  // VIDEO — BRAND
  // ═══════════════════════════════════════════════════════════
  {
    slug:'powering-wildfire-intelligence',
    title:'Powering Wildfire Intelligence',
    client:'Ignis Technologies',
    cat:'video', type:'brand-video', typeLabel:'Brand Video',
    thumb:'/assets/images/thumb-ignis.jpeg',
    vimeoId:'1011394531',
    desc:'A cinematic brand video for Ignis Technologies, a wildfire intelligence platform. Shot on location to capture the urgency and innovation behind their mission-critical software — built to help firefighters and land managers stay ahead of fast-moving fires.',
    specs:[{k:'Type',v:'Brand Video'},{k:'Client',v:'Ignis Technologies'},{k:'Production',v:'Strategy session, script, storyboard, 1 day shoot'},{k:'Deliverables',v:'Hero video + social cuts'},{k:'Turnaround',v:'2 months'}],
    featured:true, featuredOrder:1,
    servicePages:['brand-video']
  },
  {
    slug:'painted-hills-gvlt',
    title:'Painted Hills',
    client:'Gallatin Valley Land Trust',
    cat:'video', type:'brand-video', typeLabel:'Brand Video',
    thumb:'/assets/images/thumb-painted-hills.jpg',
    vimeoId:'1011446090',
    desc:'A brand video about the Painted Hills trail for Gallatin Valley Land Trust. My involvement on this project was conducting and recording the interviews and editing.',
    specs:[{k:'Type',v:'Brand Video'},{k:'Client',v:'Gallatin Valley Land Trust'},{k:'Deliverables',v:'Hero video + social cuts'}],
    featured:false,
    servicePages:['brand-video']
  },
  {
    slug:'montana-grassland-initiative',
    title:'Montana Grassland Initiative Explained',
    client:'Pheasants Forever',
    cat:'video', type:'brand-video', typeLabel:'Brand Video',
    thumb:'/assets/images/thumb-grassland-initiative.jpg',
    vimeoId:'1072711800',
    desc:'A brand video explaining the Montana Grassland Initiative and its conservation impact across the state.',
    specs:[{k:'Type',v:'Brand Video'},{k:'Client',v:'Pheasants Forever'},{k:'Format',v:'4K Cinematic'}],
    featured:true, featuredOrder:5,
    servicePages:['brand-video']
  },
  {
    slug:'foundant-brand-overview',
    title:'Foundant Brand Overview',
    client:'Foundant Technologies',
    cat:'video', type:'brand-video', typeLabel:'Brand Video',
    thumb:'/assets/images/thumb-foundant-brand.jpeg',
    vimeoId:'1011467483',
    desc:'A comprehensive brand overview video communicating Foundant\'s mission, values, and product suite to grantmakers and nonprofits across the country.',
    specs:[{k:'Type',v:'Brand Video'},{k:'Client',v:'Foundant Technologies'},{k:'Deliverables',v:'Hero video + social cuts'}],
    featured:false,
    servicePages:['brand-video']
  },
  {
    slug:'girls-on-the-run',
    title:'Girls On The Run — Thrive Charity Video',
    client:'Girls On The Run',
    cat:'video', type:'brand-video', typeLabel:'Brand Video',
    thumb:'/assets/images/thumb-girls-on-the-run.jpeg',
    vimeoId:'1011397220',
    desc:'A charity brand video capturing the mission, impact, and joy of Girls On The Run — a nonprofit that uses running to build confidence and life skills in young girls.',
    specs:[{k:'Type',v:'Charity Brand Video'},{k:'Client',v:'Girls On The Run'},{k:'Deliverables',v:'Hero video + social cuts'}],
    featured:false,
    servicePages:['brand-video']
  },
  {
    slug:'enhancing-habitats',
    title:'Enhancing Habitats through Mesic Restoration',
    client:'Pheasants Forever',
    cat:'video', type:'brand-video', typeLabel:'Brand Video',
    thumb:'/assets/images/thumb-enhancing-habitats.jpeg',
    vimeoId:'1009737494',
    desc:'A project highlight showcasing Pheasants Forever\'s mesic restoration work and habitat impact across Montana. My involvement on this project was editing, lower thirds graphics, and gear consulting.',
    specs:[{k:'Type',v:'Brand Video'},{k:'Client',v:'Pheasants Forever'},{k:'Turnaround',v:'3 weeks'}],
    featured:false,
    servicePages:['brand-video']
  },

  // ═══════════════════════════════════════════════════════════
  // VIDEO — TESTIMONIAL
  // ═══════════════════════════════════════════════════════════
  {
    slug:'not-jumping-ship',
    title:'Not Jumping Ship',
    client:'Foundant Technologies',
    cat:'video', type:'testimonial', typeLabel:'Testimonial',
    thumb:'/assets/images/thumb-not-jumping-ship.jpeg',
    vimeoId:'1011460491',
    desc:'An in-person testimonial built around a real client story. Clean production that puts the subject at ease and delivers authentic, quotable content that builds trust faster than any marketing copy.',
    specs:[{k:'Type',v:'In-Person Testimonial'},{k:'Client',v:'Foundant Technologies'},{k:'Deliverables',v:'Full cut + 30s version'}],
    featured:false,
    servicePages:['testimonial']
  },
  {
    slug:'client-service-testimonial',
    title:'Client Service Testimonial',
    client:'Foundant Technologies',
    cat:'video', type:'testimonial', typeLabel:'Testimonial',
    thumb:'/assets/images/thumb-client-service.jpeg',
    vimeoId:'1012194769',
    desc:'An on-site testimonial focused on service experience. Professional lighting, clean audio, and a 2-camera setup deliver authentic, usable content.',
    specs:[{k:'Type',v:'In-Person Testimonial'},{k:'Client',v:'Foundant Technologies'}],
    featured:false,
    servicePages:['testimonial']
  },
  {
    slug:'from-farmland-to-grassland',
    title:'From Farmland to Grassland: Sterling\'s Story',
    client:'Pheasants Forever',
    cat:'video', type:'testimonial', typeLabel:'Testimonial',
    thumb:'/assets/images/thumb-sterling.jpg',
    vimeoId:'1104993187',
    desc:'A rancher shares his conservation journey — an intimate, story-driven testimonial about grassland restoration on a Montana family farm.',
    specs:[{k:'Type',v:'In-Person Testimonial'},{k:'Client',v:'Pheasants Forever'},{k:'Location',v:'Montana'}],
    featured:false,
    servicePages:['testimonial']
  },
  {
    slug:'team-testimonial',
    title:'Team Testimonial',
    client:'Foundant Technologies',
    cat:'video', type:'testimonial', typeLabel:'Testimonial',
    thumb:'/assets/images/thumb-team-testimonial.jpeg',
    vimeoId:'1011448652',
    desc:'A multi-person team testimonial capturing authentic voices and company culture in a clean, professional format.',
    specs:[{k:'Type',v:'Team Testimonial'},{k:'Client',v:'Foundant Technologies'}],
    featured:false,
    servicePages:['testimonial']
  },
  {
    slug:'transforming-workflows',
    title:'Transforming Workflows',
    client:'Foundant Technologies',
    cat:'video', type:'testimonial', typeLabel:'Testimonial',
    thumb:'/assets/images/thumb-transforming-workflows.jpeg',
    vimeoId:'1011455705',
    desc:'A testimonial about workflow transformation — how one platform changed the way an entire team operates, told through a real client\'s words.',
    specs:[{k:'Type',v:'In-Person Testimonial'},{k:'Client',v:'Foundant Technologies'}],
    featured:false,
    servicePages:['testimonial']
  },
  {
    slug:'doing-so-much-more',
    title:'Doing So Much More',
    client:'Foundant Technologies',
    cat:'video', type:'testimonial', typeLabel:'Testimonial',
    thumb:'/assets/images/thumb-doing-so-much-more.jpeg',
    vimeoId:'1011448080',
    desc:'A testimonial about how a platform far exceeded a client\'s initial expectations — authentic, concise, and built to convert.',
    specs:[{k:'Type',v:'In-Person Testimonial'},{k:'Client',v:'Foundant Technologies'}],
    featured:false,
    servicePages:['testimonial']
  },
  {
    slug:'meet-the-interns',
    title:'Meet The Interns — Company Culture',
    client:'Foundant Technologies',
    cat:'video', type:'testimonial', typeLabel:'Testimonial',
    thumb:'/assets/images/thumb-meet-the-interns.jpeg',
    vimeoId:'1011467289',
    desc:'A company culture video spotlighting intern perspectives and organizational energy — candid, warm, and human.',
    specs:[{k:'Type',v:'Company Culture'},{k:'Client',v:'Foundant Technologies'}],
    featured:false,
    servicePages:['testimonial']
  },
  {
    slug:'salt-lake-summit',
    title:'Salt Lake Summit — Event Promo',
    client:'Foundant Technologies',
    cat:'video', type:'testimonial', typeLabel:'Testimonial',
    thumb:'/assets/images/thumb-salt-lake-summit.jpeg',
    vimeoId:'1011467103',
    desc:'An event promo capturing the energy and key moments from the Salt Lake Summit.',
    specs:[{k:'Type',v:'Event Promo'},{k:'Client',v:'Foundant Technologies'}],
    featured:true, featuredOrder:11,
    servicePages:['testimonial']
  },

  // ═══════════════════════════════════════════════════════════
  // VIDEO — PRODUCT DEMO
  // ═══════════════════════════════════════════════════════════
  {
    slug:'all-in-one-foundation',
    title:'All-in-One Foundation Management',
    client:'Foundant Technologies',
    cat:'video', type:'product-video', typeLabel:'Product Demo',
    thumb:'/assets/images/thumb-foundation-mgmt.jpeg',
    vimeoId:'1011444538',
    desc:'A software overview video built to help a foundation management platform communicate complex functionality to a non-technical audience. Screen recordings, motion graphics, and clear voiceover work together to make the product feel approachable and powerful.',
    specs:[{k:'Type',v:'Software Overview'},{k:'Client',v:'Foundant Technologies'},{k:'Style',v:'Screen capture + MoGraph'},{k:'Deliverables',v:'Master + demo loop'},{k:'Turnaround',v:'3–4 weeks'}],
    featured:true, featuredOrder:12,
    servicePages:['product-video']
  },
  {
    slug:'software-demo-video',
    title:'Software Demo Video',
    client:'Foundant Technologies',
    cat:'video', type:'product-video', typeLabel:'Product Demo',
    thumb:'/assets/images/thumb-software-demo.jpeg',
    vimeoId:'1011464708',
    desc:'A software demo combining screen recordings and motion graphics to walk users through a complex product suite in a clear, engaging way.',
    specs:[{k:'Type',v:'Software Demo'},{k:'Client',v:'Foundant Technologies'},{k:'Style',v:'Screen capture + MoGraph'}],
    featured:false,
    servicePages:['product-video']
  },
  {
    slug:'reporting-product-demo',
    title:'Reporting — Product Demo',
    client:'Foundant Technologies',
    cat:'video', type:'product-video', typeLabel:'Product Demo',
    thumb:'/assets/images/thumb-reporting-demo.jpeg',
    vimeoId:'1011466134',
    desc:'A product demo focused on reporting features with clean screen recordings and clear voiceover.',
    specs:[{k:'Type',v:'Product Demo'},{k:'Client',v:'Foundant Technologies'}],
    featured:true, featuredOrder:10,
    servicePages:['product-video']
  },
  {
    slug:'accounting-product-demo',
    title:'Accounting — Product Demo',
    client:'Foundant Technologies',
    cat:'video', type:'product-video', typeLabel:'Product Demo',
    thumb:'/assets/images/thumb-accounting-demo.jpeg',
    vimeoId:'1011466308',
    desc:'A focused product demo walking viewers through accounting features in a complex software platform — clean screen recordings and clear voiceover throughout.',
    specs:[{k:'Type',v:'Product Demo'},{k:'Client',v:'Foundant Technologies'}],
    featured:false,
    servicePages:['product-video']
  },
  {
    slug:'fundraising-product-demo',
    title:'Fundraising — Product Demo',
    client:'Foundant Technologies',
    cat:'video', type:'product-video', typeLabel:'Product Demo',
    thumb:'/assets/images/thumb-fundraising-demo.jpeg',
    vimeoId:'1011466737',
    desc:'A product demo for fundraising features designed for nonprofits and grantmakers — straightforward, clear, and built to educate.',
    specs:[{k:'Type',v:'Product Demo'},{k:'Client',v:'Foundant Technologies'}],
    featured:false,
    servicePages:['product-video']
  },
  {
    slug:'constituent-relationship-management',
    title:'Constituent Relationship Management',
    client:'Foundant Technologies',
    cat:'video', type:'product-video', typeLabel:'Product Demo',
    thumb:'/assets/images/thumb-crm-demo.jpeg',
    vimeoId:'1011466519',
    desc:'A product demo walking viewers through CRM features built specifically for nonprofits and foundations.',
    specs:[{k:'Type',v:'Product Demo'},{k:'Client',v:'Foundant Technologies'}],
    featured:false,
    servicePages:['product-video']
  },

  // ═══════════════════════════════════════════════════════════
  // VIDEO — DRONE / FPV
  // ═══════════════════════════════════════════════════════════
  {
    slug:'iceland-in-motion',
    title:'Iceland in Motion',
    client:'Personal Travel Film',
    cat:'video', type:'drone-video-fpv', typeLabel:'Drone / FPV',
    thumb:'/assets/images/thumb-iceland.jpg',
    vimeoId:'1036921693',
    desc:'Hyperlapses, drone footage, and 8K cinematics shot across Iceland. A personal cinematic project capturing the raw, otherworldly landscape — glaciers, volcanic fields, and endless light.',
    specs:[{k:'Type',v:'Cinematic Travel Film'},{k:'Client',v:'Personal Project'},{k:'Location',v:'Iceland'},{k:'Turnaround',v:'4 weeks'}],
    featured:true, featuredOrder:3,
    servicePages:['drone-video-fpv']
  },
  {
    slug:'above-the-arctic-circle',
    title:'Above the Arctic Circle',
    client:'Northern Norway',
    cat:'video', type:'drone-video-fpv', typeLabel:'Drone / FPV',
    thumb:'/assets/images/thumb-arctic.jpeg',
    vimeoId:'1012197311',
    desc:'A personal cinematic project above the Arctic Circle. Sweeping 4K drone footage of fjords, snowfields, and endless sky.',
    specs:[{k:'Type',v:'Cinematic Drone Film'},{k:'Location',v:'Northern Norway'}],
    featured:true, featuredOrder:8,
    servicePages:['drone-video-fpv']
  },
  {
    slug:'drone-reel',
    title:'Drone Reel',
    client:'Colegrove Media',
    cat:'video', type:'drone-video-fpv', typeLabel:'Drone / FPV',
    thumb:'/assets/images/thumb-drone-reel.jpeg',
    vimeoId:'1011433865',
    desc:'A showreel of cinematic aerial footage — orbits, top-downs, FPV flythroughs, and wide landscapes.',
    specs:[{k:'Type',v:'Showreel'},{k:'Equipment',v:'DJI + FPV'},{k:'Format',v:'4K'}],
    featured:true, featuredOrder:7,
    servicePages:['drone-video-fpv']
  },

  // ═══════════════════════════════════════════════════════════
  // VIDEO — REAL ESTATE
  // ═══════════════════════════════════════════════════════════
  {
    slug:'someday-ranch',
    title:'Someday Ranch',
    client:'Real Estate Listing',
    cat:'video', type:'real-estate-video', typeLabel:'Real Estate Video',
    thumb:'/assets/images/thumb-someday-ranch.jpeg',
    vimeoId:'1011395960',
    desc:'An immersive real estate video for an Idaho ranch listing combining drone and ground-level cinematics. Showcases the property\'s scale, landscape, and lifestyle in a way that photos simply can\'t.',
    specs:[{k:'Type',v:'Real Estate Video'},{k:'Location',v:'Idaho'},{k:'Services',v:'Drone / FPV, Animated Satellite Map'},{k:'Deliverables',v:'Full video + social cut'}],
    featured:false,
    servicePages:['real-estate-video','drone-video-fpv']
  },
  {
    slug:'15-spring-ridge',
    title:'15 Spring Ridge Dr',
    client:'Dahlquist Realtors',
    cat:'video', type:'real-estate-video', typeLabel:'Real Estate Video',
    thumb:'/assets/images/thumb-spring-ridge.jpeg',
    vimeoId:'823929975',
    desc:'An immersive residential listing video with gimbal-stabilized interior and exterior shots. Delivered fast, cut for MLS and social.',
    specs:[{k:'Type',v:'Real Estate Video'},{k:'Client',v:'Dahlquist Realtors'}],
    featured:false,
    servicePages:['real-estate-video']
  },

  // ═══════════════════════════════════════════════════════════
  // VIDEO — REMOTE CLIENT STORY
  // ═══════════════════════════════════════════════════════════
  {
    slug:'a-ranchers-take',
    title:'A Rancher\'s Take on Grassland Restoration',
    client:'Pheasants Forever',
    cat:'video', type:'remote-client-story', typeLabel:'Remote Client Story',
    thumb:'/assets/images/thumb-ranchers-take.jpg',
    vimeoId:'1134497582',
    desc:'Fourth generation Montana rancher Jeff Sather shares his experience restoring grassland on his family\'s farm north of Glasgow — and how partnering with Pheasants Forever made the process simple, fast, and affordable.',
    specs:[{k:'Type',v:'Remote Client Story'},{k:'Client',v:'Pheasants Forever'},{k:'Format',v:'Remote Interview'},{k:'Deliverables',v:'Master + social cuts'},{k:'Turnaround',v:'2 weeks'}],
    featured:true, featuredOrder:6,
    servicePages:['remote-client-story']
  },
  {
    slug:'conversation-from-the-combine',
    title:'Conversation from the Combine',
    client:'Pheasants Forever',
    cat:'video', type:'remote-client-story', typeLabel:'Remote Client Story',
    thumb:'/assets/images/thumb-combine-conversation.jpg',
    vimeoId:'1134656254',
    desc:'Montana farmer Matthew Klindworth shares how converting a few tough, erosion-prone acres into grassland transformed his operation. With support from Pheasants Forever, those marginal fields now provide strong forage for cattle and fast-improving habitat for wildlife.',
    specs:[{k:'Type',v:'Remote Client Story'},{k:'Client',v:'Pheasants Forever'},{k:'Format',v:'Remote Interview'},{k:'Deliverables',v:'Master + social cuts'}],
    featured:false,
    servicePages:['remote-client-story']
  },
  {
    slug:'remote-testimonial',
    title:'Remote Testimonial',
    client:'Foundant Technologies',
    cat:'video', type:'remote-client-story', typeLabel:'Remote Client Story',
    thumb:'/assets/images/thumb-remote-testimonial.jpeg',
    vimeoId:'1011464238',
    desc:'A polished remote testimonial transforming a virtual interview recording into a high-quality marketing asset — proof that great production doesn\'t always require being in the same room.',
    specs:[{k:'Type',v:'Remote Client Story'},{k:'Client',v:'Foundant Technologies'}],
    featured:false,
    servicePages:['remote-client-story']
  },

  // ═══════════════════════════════════════════════════════════
  // VIDEO — PODCAST
  // ═══════════════════════════════════════════════════════════
  {
    slug:'field-notes-grassland',
    title:'Field Notes: Grassland Conversation with Montana Ranchers',
    client:'Pheasants Forever',
    cat:'video', type:'podcast', typeLabel:'Podcast',
    thumb:'/assets/images/thumb-field-notes.jpg',
    vimeoId:'1103018945',
    desc:'A roundtable conversation with Montana ranchers about grassland conservation — authentic voices captured and produced as a polished podcast episode.',
    specs:[{k:'Type',v:'Podcast'},{k:'Client',v:'Pheasants Forever'},{k:'Format',v:'Multi-guest'}],
    featured:true, featuredOrder:9,
    servicePages:['podcast']
  },

  // ═══════════════════════════════════════════════════════════
  // VIDEO — SOCIAL CLIPS
  // ═══════════════════════════════════════════════════════════
  {
    slug:'sharp-tails-and-grasslands',
    title:'Sharp-tails and Grasslands',
    client:'Pheasants Forever',
    cat:'video', type:'social-clips', typeLabel:'Social Clip',
    thumb:'/assets/images/Social Clip Sharptail Thumbnail PF.jpg',
    vimeoId:'1146601342',
    desc:'A short-form social clip highlighting the connection between sharp-tailed grouse and healthy prairie habitat — built to educate and drive conservation awareness.',
    specs:[{k:'Type',v:'Social Clip'},{k:'Client',v:'Pheasants Forever'},{k:'Format',v:'Short-Form Social'}],
    featured:false,
    servicePages:['social-clips']
  },
  {
    slug:'conifer-expansion',
    title:'Conifer Expansion',
    client:'Pheasants Forever',
    cat:'video', type:'social-clips', typeLabel:'Social Clip',
    thumb:'/assets/images/Conifer Expansion Social Clip Thumbnail PF.jpg',
    vimeoId:'1148657915',
    desc:'A short-form social clip showing how conifer invasion threatens open grasslands — drying soils, increasing fire risk, and displacing the wildlife and ranchers that depend on healthy prairies.',
    specs:[{k:'Type',v:'Social Clip'},{k:'Client',v:'Pheasants Forever'},{k:'Format',v:'Short-Form Social'}],
    featured:false,
    servicePages:['social-clips']
  },
  {
    slug:'rate-of-grassland-loss',
    title:'Rate of Grassland Loss',
    client:'Pheasants Forever',
    cat:'video', type:'social-clips', typeLabel:'Social Clip',
    thumb:'/assets/images/Rate of Grassland Loss Social Clip Thumbnail PF.jpg',
    vimeoId:'1146105722',
    desc:'A short-form social clip spotlighting the rapid loss of grassland in Eastern Montana — nearly a third of historic prairie gone and thousands of acres disappearing every year.',
    specs:[{k:'Type',v:'Social Clip'},{k:'Client',v:'Pheasants Forever'},{k:'Format',v:'Short-Form Social'}],
    featured:false,
    servicePages:['social-clips']
  },

  // ═══════════════════════════════════════════════════════════
  // ANIMATION — ANIMATED EXPLAINER
  // ═══════════════════════════════════════════════════════════
  {
    slug:'streamline-your-nonprofit',
    title:'Streamline Your Nonprofit',
    client:'NonprofitCore',
    cat:'animation', type:'animated-explainer', typeLabel:'Animated Explainer',
    thumb:'/assets/images/thumb-nonprofit-explainer.jpeg',
    vimeoId:'1011466967',
    desc:'A clean, engaging animated explainer designed to walk nonprofit administrators through a complex software product in under two minutes. Motion graphics and clear narration replace a wall of features with a compelling story.',
    specs:[{k:'Type',v:'Animated Explainer'},{k:'Client',v:'NonprofitCore'},{k:'Style',v:'2D Motion Graphics'},{k:'Deliverables',v:'Master + social cuts'},{k:'Turnaround',v:'3 weeks'}],
    featured:true, featuredOrder:2,
    servicePages:['animated-explainer']
  },
  {
    slug:'smartsimple-animated-explainer',
    title:'Cloud Grants Management',
    client:'SmartSimple',
    cat:'animation', type:'animated-explainer', typeLabel:'Animated Explainer',
    thumb:'/assets/images/thumb-smartsimple.jpg',
    vimeoId:'1053133749',
    desc:'A clean animated explainer built to communicate the value of a complex SaaS platform to a non-technical audience. Motion graphics and clear narration make the product feel approachable and worth exploring.',
    specs:[{k:'Type',v:'Animated Explainer'},{k:'Client',v:'SmartSimple'},{k:'Style',v:'2D Motion Graphics'},{k:'Deliverables',v:'Master + social cuts'},{k:'Turnaround',v:'3 months'}],
    featured:true, featuredOrder:4,
    servicePages:['animated-explainer']
  },
  {
    slug:'online-portal-animated-explainer',
    title:'Online Portal — Animated Explainer',
    client:'Foundant Technologies',
    cat:'animation', type:'animated-explainer', typeLabel:'Animated Explainer',
    thumb:'/assets/images/thumb-online-portal.jpeg',
    vimeoId:'1011465254',
    desc:'An animated explainer guiding users through an online portal — motion makes navigation intuitive and the product feel approachable.',
    specs:[{k:'Type',v:'Animated Explainer'},{k:'Client',v:'Foundant Technologies'},{k:'Style',v:'2D Motion Graphics'}],
    featured:false,
    servicePages:['animated-explainer']
  },
  {
    slug:'third-party-animated-explainer',
    title:'Third Party — Animated Explainer',
    client:'Foundant Technologies',
    cat:'animation', type:'animated-explainer', typeLabel:'Animated Explainer',
    thumb:'/assets/images/thumb-third-party.jpeg',
    vimeoId:'1011464669',
    desc:'An animated explainer demystifying third-party integrations in a complex software ecosystem — clear narration and motion make a technical topic easy to follow.',
    specs:[{k:'Type',v:'Animated Explainer'},{k:'Client',v:'Foundant Technologies'},{k:'Style',v:'2D Motion Graphics'}],
    featured:false,
    servicePages:['animated-explainer']
  },

  // ═══════════════════════════════════════════════════════════
  // ANIMATION — MOTION GRAPHICS (coming soon)
  // ═══════════════════════════════════════════════════════════
  {
    slug:'cs-motion-graphics',
    title:'Motion Graphics',
    client:'', cat:'animation', type:'motion-graphics', typeLabel:'Motion Graphics',
    thumb:null, coming:true,
    desc:'Animated graphics for ads, social content, presentations, and video overlays — motion that makes your brand stand out.',
    specs:[],
    featured:false, servicePages:['motion-graphics']
  },

  // ═══════════════════════════════════════════════════════════
  // ANIMATION — LOGO ANIMATION
  // ═══════════════════════════════════════════════════════════
  {
    slug:'logo-animations',
    title:'Logo Animations',
    client:'Various Clients',
    cat:'animation', type:'logo-animation', typeLabel:'Logo Animation',
    thumb:null,
    lottieUrl:'https://cdn.jsdelivr.net/gh/logcolegrove/colegrovemedia@main/assets/lottie/colegrove%20media%20logo%20Animation.json',
    lottieFiles:[
      {url:'https://cdn.jsdelivr.net/gh/logcolegrove/colegrovemedia@main/assets/lottie/colegrove%20media%20logo%20Animation.json'},
      {url:'https://assets1.lottiefiles.com/packages/lf20_2cvpdhi2.json'}
    ],
    desc:'Bring your logo to life with a custom animated intro — built for video openers, social profiles, presentations, and the web. Delivered as MP4, GIF, and Lottie JSON.',
    specs:[],
    featured:false,
    servicePages:['logo-animation']
  },

  // ═══════════════════════════════════════════════════════════
  // ANIMATION — LOTTIE / WEBSITE
  // ═══════════════════════════════════════════════════════════
  {
    slug:'lottie-collaboration',
    title:'Custom Website Animations',
    client:'Web Project',
    cat:'animation', type:'lottie-animation', typeLabel:'Website / Lottie',
    thumb:'/assets/images/thumb-smartsimple.jpg',
    lottieUrl:'https://raw.githubusercontent.com/logcolegrove/lott/main/5%20Collaboration%20v2%20Animation.json',
    lottieFiles:[
      {url:'https://raw.githubusercontent.com/logcolegrove/lott/main/5%20Collaboration%20v2%20Animation.json'},
      {url:'https://raw.githubusercontent.com/logcolegrove/lott/main/6%20Transparency%20v2%20Animation.json'},
      {url:'https://raw.githubusercontent.com/logcolegrove/lott/refs/heads/main/Get%20unlimited%20customer%20service.json'},
      {url:'https://raw.githubusercontent.com/logcolegrove/lott/refs/heads/main/Make%20better%20decisions.json'},
      {url:'https://raw.githubusercontent.com/logcolegrove/lott/main/4%20Streamline%20v3%20Animation.json'}
    ],
    desc:'Lightweight Lottie animations built for seamless web integration — smooth, scalable, and optimized for any device. Each file exports as JSON and drops into any website or app without slowing it down.',
    specs:[],
    featured:false,
    servicePages:['lottie-animation']
  },

  // ═══════════════════════════════════════════════════════════
  // PHOTO — HEADSHOTS
  // ═══════════════════════════════════════════════════════════
  {
    slug:'headshots',
    title:'Portraits & Group Shots',
    client:'Various Clients',
    cat:'photo', type:'headshots', typeLabel:'Headshots',
    thumb:'https://logcolegrove.github.io/colegrovemedia/assets/images/654c134434654e76e7cb7274_example%204.jpg',
    thumbPosition:'center 30%',
    images:[
      'https://logcolegrove.github.io/colegrovemedia/assets/images/654c134434654e76e7cb7274_example%204.jpg',
      'https://logcolegrove.github.io/colegrovemedia/assets/images/663179c1f5a90335108d93b8_da.jpg',
      'https://logcolegrove.github.io/colegrovemedia/assets/images/Image%20(71).jpg',
      'https://logcolegrove.github.io/colegrovemedia/assets/images/654c13434caa97fd4c1224de_example%202.jpg',
      'https://logcolegrove.github.io/colegrovemedia/assets/images/654c13433914007fc72b25d2_RCropped.jpg',
      'https://logcolegrove.github.io/colegrovemedia/assets/images/654c13433a76d3c494e761a0_code.jpg',
      'https://logcolegrove.github.io/colegrovemedia/assets/images/654c1343e8508c0e32155bdd_dr%20tim%20medium.jpg',
      'https://logcolegrove.github.io/colegrovemedia/assets/images/654c134394751dfdf861b934_doggy.jpg',
      'https://logcolegrove.github.io/colegrovemedia/assets/images/654c1753bc298f11cb658f44_spanky.jpg'
    ],
    related:false,
    cta:'Book Your Headshot Session →',
    ctaHref:'/brief',
    desc:'High-quality portrait photography for personal branding, professional profiles, and team pages. Efficient, relaxed sessions — so you get images that actually look like you at your best.',
    specs:[],
    featured:false,
    servicePages:['headshots']
  },

  // ═══════════════════════════════════════════════════════════
  // PHOTO — COMING SOON
  // ═══════════════════════════════════════════════════════════
  {slug:'cs-real-estate-photos',title:'Real Estate Photography',client:'',cat:'photo',type:'real-estate-photos',typeLabel:'Real Estate Photos',thumb:null,coming:true,desc:'Carefully planned, composed, and retouched interior and exterior property photography.',specs:[{k:'Type',v:'Real Estate Photos'},{k:'Starting At',v:'$150'}],featured:false,servicePages:['real-estate-photos']},
  {slug:'cs-drone-photos',title:'Drone Photography',client:'',cat:'photo',type:'drone-photos',typeLabel:'Drone Photos',thumb:null,coming:true,desc:'Stunning aerial imagery of real estate, landscapes, events, and more. FAA licensed pilot.',specs:[{k:'Type',v:'Drone Photos'},{k:'Starting At',v:'$100'}],featured:false,servicePages:['drone-photos']},
  {slug:'cs-3d-virtual-tour',title:'3D Virtual Tours',client:'',cat:'photo',type:'3d-virtual-tour',typeLabel:'3D Virtual Tour',thumb:null,coming:true,desc:'Interactive 360° Matterport tours allowing buyers to explore every angle of a property anytime, anywhere.',specs:[{k:'Type',v:'3D Virtual Tour'},{k:'Platform',v:'Matterport'}],featured:false,servicePages:['3d-virtual-tour']},

  // ═══════════════════════════════════════════════════════════
  // DESIGN — COMING SOON
  // ═══════════════════════════════════════════════════════════
  {slug:'cs-graphic-design',title:'Graphic Design',client:'',cat:'design',type:'graphic-design',typeLabel:'Graphic Design',thumb:null,coming:true,desc:'Visuals for digital and print — infographics, ads, business cards, brochures, posters, and more.',specs:[{k:'Type',v:'Graphic Design'},{k:'Starting At',v:'$150'}],featured:false,servicePages:['graphic-design']},
  {slug:'cs-web-design',title:'Web Design',client:'',cat:'design',type:'web-design',typeLabel:'Web Design',thumb:null,coming:true,desc:'Custom Webflow websites — responsive, accessible, and built to convert.',specs:[{k:'Type',v:'Web Design'},{k:'Platform',v:'Webflow'},{k:'Starting At',v:'$500'}],featured:false,servicePages:['web-design']},
  {slug:'cs-satellite-map',title:'Satellite Maps',client:'',cat:'design',type:'satellite-map',typeLabel:'Satellite Map',thumb:null,coming:true,desc:'Animated Google Earth flyovers showing property lines, nearby attractions, and custom labels.',specs:[{k:'Type',v:'Satellite Map'},{k:'Starting At',v:'$150'}],featured:false,servicePages:['satellite-map']},
  {slug:'cs-virtual-staging',title:'Virtual Staging',client:'',cat:'design',type:'virtual-staging',typeLabel:'Virtual Staging',thumb:null,coming:true,desc:'Transform any empty room into a fully-furnished, beautifully designed space.',specs:[{k:'Type',v:'Virtual Staging'},{k:'Starting At',v:'$50 / image'}],featured:false,servicePages:['virtual-staging']}
];


// ═══════════════════════════════════════════════════════════════
// LOOKUP TABLES — used by multiple pages
// ═══════════════════════════════════════════════════════════════

var CAT_LABELS = {
  'brand-video':'Brand Videos',
  'animated-explainer':'Animated Explainers',
  'drone-video-fpv':'Drone & FPV Films',
  'product-video':'Product Demos',
  'real-estate-video':'Real Estate Videos',
  'testimonial':'Testimonials',
  'remote-client-story':'Client Stories',
  'podcast':'Podcasts',
  'social-clips':'Social Clips',
  'motion-graphics':'Motion Graphics',
  'logo-animation':'Logo Animations',
  'lottie-animation':'Website / Lottie',
  'headshots':'Headshots',
  'real-estate-photos':'Real Estate Photos',
  'drone-photos':'Drone Photos',
  '3d-virtual-tour':'3D Virtual Tours',
  'graphic-design':'Graphic Design',
  'web-design':'Web Design',
  'satellite-map':'Satellite Maps',
  'virtual-staging':'Virtual Staging'
};

var TYPE_CTA = {
  'brand-video':'Get Your Brand Video Made →',
  'testimonial':'Get Your Testimonial Made →',
  'product-video':'Get Your Product Demo Made →',
  'drone-video-fpv':'Get Your Drone Film Made →',
  'real-estate-video':'Get Your Real Estate Video Made →',
  'remote-client-story':'Get Your Client Story Made →',
  'podcast':'Get Your Podcast Made →',
  'animated-explainer':'Get Your Explainer Made →',
  'motion-graphics':'Get Your Motion Graphics Made →',
  'logo-animation':'Get Your Logo Animated →',
  'lottie-animation':'Get Your Web Animation Made →',
  'headshots':'Book Your Headshot Session →',
  'real-estate-photos':'Get Your Property Photographed →',
  'drone-photos':'Get Your Aerial Photos Taken →',
  '3d-virtual-tour':'Get Your Virtual Tour Made →',
  'graphic-design':'Get Your Design Made →',
  'web-design':'Get Your Website Built →',
  'satellite-map':'Get Your Satellite Map Made →',
  'virtual-staging':'Get Your Space Staged →'
};

var SUBTYPES = {
  video:[
    {type:'brand-video',label:'Brand Video'},
    {type:'testimonial',label:'Testimonial'},
    {type:'product-video',label:'Product Demo'},
    {type:'drone-video-fpv',label:'Drone / FPV'},
    {type:'real-estate-video',label:'Real Estate'},
    {type:'remote-client-story',label:'Remote Client Story'},
    {type:'podcast',label:'Podcast'},
    {type:'social-clips',label:'Social Clips'}
  ],
  animation:[
    {type:'animated-explainer',label:'Animated Explainer'},
    {type:'motion-graphics',label:'Motion Graphics'},
    {type:'logo-animation',label:'Logo Animation'},
    {type:'lottie-animation',label:'Website / Lottie'}
  ],
  photo:[
    {type:'headshots',label:'Headshots'},
    {type:'real-estate-photos',label:'Real Estate Photos'},
    {type:'drone-photos',label:'Drone Photos'},
    {type:'3d-virtual-tour',label:'3D Virtual Tour'}
  ],
  design:[
    {type:'graphic-design',label:'Graphic Design'},
    {type:'web-design',label:'Web Design'},
    {type:'satellite-map',label:'Satellite Map'},
    {type:'virtual-staging',label:'Virtual Staging'}
  ]
};

var CS_ICONS = {
  'motion-graphics':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10 Q7 3 10 10 Q13 17 17 10" stroke-linecap="round"/><circle cx="10" cy="10" r="2.5" fill="currentColor" stroke="none" opacity="0.8"/></svg>',
  'logo-animation':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 3l2 4h4l-3 3 1 4-4-2.5L6 14l1-4-3-3h4z"/></svg>',
  'lottie-animation':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="M7 10l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'headshots':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="16" height="12" rx="2"/><circle cx="10" cy="11" r="3" fill="currentColor" stroke="none" opacity="0.7"/><path d="M7 5l1.5-2h3L13 5" stroke-linecap="round"/></svg>',
  'real-estate-photos':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="18" height="14" rx="2"/><path d="M3 13l4-4 3 3 4-5 3 6"/></svg>',
  'drone-photos':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8h2M14 8h2M8 4v2M12 4v2"/><circle cx="10" cy="10" r="2"/><path d="M6 6l1.5 1.5M13 6l-1.5 1.5M6 14l1.5-1.5M13 14l-1.5-1.5"/></svg>',
  '3d-virtual-tour':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 2L18 6v8l-8 4-8-4V6z"/><path d="M10 2v12M2 6l8 4 8-4"/></svg>',
  'graphic-design':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.9"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.9"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4"/></svg>',
  'web-design':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="18" height="14" rx="2"/><path d="M1 7h18M5 5h.01M7 5h.01M9 5h.01"/></svg>',
  'satellite-map':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="7"/><path d="M10 3a9 9 0 0 1 0 14M3 10h14"/></svg>',
  'virtual-staging':'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="16" height="9" rx="1"/><path d="M6 7V5a4 4 0 0 1 8 0v2"/></svg>'
};


// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS — used by multiple pages
// ═══════════════════════════════════════════════════════════════

/** Get featured projects sorted by featuredOrder */
function getFeatured() {
  return PORTFOLIO.filter(function(p){ return p.featured; })
    .sort(function(a,b){ return (a.featuredOrder||999) - (b.featuredOrder||999); });
}

/** Get all non-coming-soon projects (for work page) */
function getAllProjects() {
  return PORTFOLIO;
}

/** Get projects for a specific service page */
function getProjectsForService(serviceType) {
  return PORTFOLIO.filter(function(p){
    return !p.coming && p.servicePages && p.servicePages.indexOf(serviceType) > -1;
  });
}

/** Get related projects (same type, excluding current) */
function getRelatedProjects(slug, type, limit) {
  limit = limit || 3;
  return PORTFOLIO.filter(function(p){
    return p.slug !== slug && !p.coming && p.type === type;
  }).slice(0, limit);
}

/** Get related projects by category (for photo/design coming-soon modals) */
function getRelatedByCategory(slug, cat, limit) {
  limit = limit || 3;
  return PORTFOLIO.filter(function(p){
    return p.slug !== slug && p.cat === cat;
  }).slice(0, limit);
}

/** Find a project by slug */
function findProject(slug) {
  return PORTFOLIO.find(function(p){ return p.slug === slug; }) || null;
}

/** Get placeholder SVG for coming-soon items */
function placeholderSVG(type) {
  var icon = CS_ICONS[type] || '';
  return '<div class="modal-preview-placeholder"><div class="preview-ph-icon" style="width:72px;height:72px;border-radius:18px;">' + icon.replace('width="20" height="20"','width="28" height="28"') + '</div><div class="preview-ph-label">Gallery Coming Soon</div></div>';
}

function capitalise(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
