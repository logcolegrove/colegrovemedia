/* ═══════════════════════════════════════════════════════════════
   COLEGROVE MEDIA — PRICING DATA
   Single source of truth for all service definitions and pricing.
   
   Used by: services page, pricing page, and future service pages.
   
   To update a price:
     1. Find the service in SERVICES below
     2. Edit the tier price
     3. That's it — both services page and pricing page update
   
   To add a preview sample to a service:
     1. Find the service
     2. Add a sample object (see existing examples)
     3. Play button appears on both pages automatically
   
   sample types:
     { type:'video', projectSlug:'slug-from-portfolio-data' }
     { type:'gallery', projectSlug:'slug-from-portfolio-data' }
     { type:'lottie', projectSlug:'slug-from-portfolio-data' }
     null = no preview button
   ═══════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
// SERVICES — organized by category
// ═══════════════════════════════════════════════════════════════

var SERVICES = {
  video: [
    {
      id:'real-estate-video', name:'Real Estate Video',
      ind:['real-estate'],
      sample:{ type:'video', projectSlug:'someday-ranch' },
      desc:'Showcase any property with cinematic drone and ground-level video — ranch listings, residential homes, commercial spaces, and land. Built to sell.',
      tiers:[
        {n:'Basic',p:'$500',i:['Drone + ground footage up to 30 seconds','Professional edit · Music · 1 revision']},
        {n:'Standard',p:'$900',i:['Up to 90 seconds · Drone + interior walkthrough','Color grade · Music · 2 revisions']},
        {n:'Advanced',p:'$1,500+',i:['Up to 3 minutes · Full property storytelling','Voiceover option · Social cuts included · Unlimited revisions']}
      ]
    },
    {
      id:'brand-video', name:'Brand Videos',
      ind:['corporate','nonprofit','tech','social-media'],
      sample:{ type:'video', projectSlug:'powering-wildfire-intelligence' },
      desc:'Communicate your mission, values, and offering with a cinematic brand film — content that makes an impact and drives real results.',
      tiers:[
        {n:'Basic',p:'$3,500',i:['1 shooting location','1 voiceover or interview','Professional lighting, audio, and branding','1 revision · 1 final edit']},
        {n:'Standard',p:'$6,500',i:['Script + storyboard','Up to 2 shooting locations','B-roll, motion graphics, and thumbnail design','2 revisions · Full video + social cut']},
        {n:'Advanced',p:'$9,500+',i:['Multi-day, multi-location production','End-to-end strategy and publishing support','Unlimited revisions · 3 final files + image asset kit']}
      ]
    },
    {
      id:'testimonial', name:'Testimonials',
      ind:['corporate','nonprofit','tech','real-estate'],
      sample:{ type:'video', projectSlug:'not-jumping-ship' },
      desc:'Let your satisfied customers do the talking. Committed to making interviewees feel comfortable while capturing high-impact, authentic content.',
      tiers:[
        {n:'Basic',p:'$900',i:['Client-provided recording (editing only)','Speaker overlay, background music, thumbnail','1 revision']},
        {n:'Standard',p:'$2,000',i:['On-site interview · Single participant','Professional lighting and audio · 2 cameras','2 revisions']},
        {n:'Advanced',p:'$2,400',i:['On-site interview · Up to 4 participants','Extended filming for custom B-roll','2 video edits · 3 revisions']}
      ]
    },
    {
      id:'podcast', name:'Podcasts',
      ind:['corporate','nonprofit','social-media'],
      sample:{ type:'video', projectSlug:'field-notes-grassland' },
      desc:'Recording, editing, and audio engineering to humanize your brand. Whether you need an editor or a full producer, solutions are tailored to your needs.',
      tiers:[
        {n:'Basic Editing',p:'$700',i:['Up to 1-hour episode (editing only)','Audio mixing & mastering · 1 revision']},
        {n:'Standard',p:'$1,200',i:['Up to 1-hour (recording + editing)','1 camera angle · Mics provided · 2 revisions']},
        {n:'Advanced',p:'$2,000',i:['Up to 4-hour episodes · 3 camera angles','Transcript, show notes, artwork · Unlimited revisions']}
      ]
    },
    {
      id:'product-video', name:'Product Videos',
      ind:['tech','corporate'],
      sample:{ type:'video', projectSlug:'all-in-one-foundation' },
      desc:'Educate and excite viewers on your physical product or software — from a 30-second cut to a full-featured walkthrough with graphics and B-roll.',
      tiers:[
        {n:'Basic',p:'$600',i:['30 seconds · Product shots · 1 revision']},
        {n:'Standard',p:'$1,100',i:['Up to 2 minutes (4K) · Professional lighting and audio · 2 revisions']},
        {n:'Advanced',p:'$2,000',i:['Up to 5 minutes (4K) · B-roll · Informative graphics · Unlimited revisions']}
      ]
    },
    {
      id:'live-stream', name:'Live Streams',
      ind:['corporate','nonprofit','events'],
      sample:null,
      desc:'Professionally broadcast your conference, meeting, or special occasion. Public or private link via Zoom, YouTube, social media, and more.',
      tiers:[
        {n:'Basic',p:'$1,500',i:['1-hour 1080p stream · 1 static camera','1 streaming technician · PowerPoint integration']},
        {n:'Standard',p:'$1,900',i:['2-hour 1080p stream · 2 cameras + live switching']},
        {n:'Advanced',p:'$2,500',i:['4-hour stream · 1 camera operator + 2 static angles','Overlay graphics · Help with registration & embedding']}
      ]
    },
    {
      id:'remote-client-story', name:'Remote Client Stories',
      ind:['corporate','nonprofit','tech'],
      sample:{ type:'video', projectSlug:'a-ranchers-take' },
      desc:'Transform virtual interviews into polished short-form stories. We guide you from interview planning to on-camera direction — or lead it ourselves.',
      tiers:[
        {n:'Basic',p:'$1,100',i:['Editing only · Royalty-free music · 1 revision']},
        {n:'Standard',p:'$2,100',i:['1 interview recorded at high fidelity · Animations, B-roll · 2 revisions']},
        {n:'Advanced',p:'$3,400+',i:['Multiple interviews · Multiple edits + social cuts · Unlimited revisions']}
      ]
    },
    {
      id:'drone-video-fpv', name:'Drone / FPV',
      ind:['real-estate','corporate','social-media','events'],
      sample:{ type:'video', projectSlug:'iceland-in-motion' },
      desc:'Cinematic aerials or dynamic FPV flythroughs that add the wow-factor. FAA licensed pilot. Available standalone or as part of a larger production.',
      tiers:[
        {n:'Regular',p:'$300',i:['Stable DJI 4K footage · 1–2 minute edit · 1 revision']},
        {n:'FPV',p:'$500',i:['First-person view 4K · 3–5 minute edit · 2 revisions']},
        {n:'Regular + FPV',p:'$700',i:['Up to 10-minute edit · 3 social clips · Unlimited revisions']}
      ]
    },
    {
      id:'social-clips', name:'Social Clips / Ads',
      ind:['corporate','real-estate','nonprofit','tech','social-media'],
      sample:null,
      desc:'Market your products and services on social media or YouTube. Short-form content cut for attention and optimized for wherever your audience lives.',
      tiers:[
        {n:'Basic',p:'$1,500',i:['Single-platform ad cut · Existing footage · 1 revision']},
        {n:'Standard',p:'$2,500',i:['Fresh shoot + edit · 2 platform-optimized cuts · 2 revisions']},
        {n:'Advanced',p:'$4,000',i:['Full commercial production · Multiple platforms · Unlimited revisions']}
      ]
    },
    {
      id:'video-editing', name:'Video Editing',
      ind:['corporate','nonprofit','tech','social-media','events'],
      sample:null,
      desc:'Already have footage? Enhance your Zoom, Teams, Loom, or raw recordings into polished, engaging content.',
      tiers:[
        {n:'$125 / hour',p:'',i:['Rough cut assembly','Color correction and audio cleanup','Lower thirds, titles, and basic graphics','Music sync and pacing edits','Export in any format or platform spec']}
      ]
    }
  ],

  photo: [
    {
      id:'headshots', name:'Headshots',
      ind:['corporate','real-estate','tech'],
      sample:{ type:'gallery', projectSlug:'headshots' },
      desc:'High-quality portrait photography for personal branding and professional profiles. Efficient sessions that deliver images you\'ll actually use.',
      tiers:[
        {n:'Basic',p:'$100',i:['Up to 30-min · 5 edited images']},
        {n:'Standard',p:'$200',i:['Up to 1-hour · 15 edited images · Outfit changes welcome']},
        {n:'Advanced',p:'$350',i:['Up to 2-hour · 30 edited images · Full retouching + social kit']}
      ]
    },
    {
      id:'real-estate-photos', name:'Real Estate Photos',
      ind:['real-estate'],
      sample:null,
      desc:'Carefully planned, composed, and retouched interior and exterior property images. Optimized for MLS, Zillow, and marketing materials.',
      tiers:[
        {n:'Basic',p:'$150',i:['15 edited interior + exterior photos']},
        {n:'Standard',p:'$250',i:['30 edited photos · Twilight exterior · HDR blending']},
        {n:'Advanced',p:'$400',i:['60 edited photos · Aerial photos included · 24-hour delivery']}
      ]
    },
    {
      id:'drone-photos', name:'Drone Photos',
      ind:['real-estate','corporate','events'],
      sample:null,
      desc:'Stunning aerial imagery of real estate, landscapes, events, and more. FAA licensed pilot. Available standalone or paired with ground photography.',
      tiers:[
        {n:'Basic',p:'$100',i:['10 edited aerial photos · FAA licensed']},
        {n:'Standard',p:'$175',i:['20 edited aerial photos · Multiple angles']},
        {n:'Advanced',p:'$300',i:['60 edited aerial photos · Twilight aerials available']}
      ]
    },
    {
      id:'3d-virtual-tour', name:'3D Virtual Tours',
      ind:['real-estate'],
      sample:null,
      desc:'Interactive 360° Matterport tours allowing buyers to explore every angle of a property anytime, anywhere.',
      tiers:[
        {n:'Standard',p:'Contact for quote',i:['Full Matterport 3D scan','Hosted tour link · Floor plan included','Embedded into any website or MLS listing']}
      ]
    }
  ],

  animation: [
    {
      id:'animated-explainer', name:'Animated Explainers',
      ind:['tech','nonprofit','corporate'],
      sample:{ type:'video', projectSlug:'streamline-your-nonprofit' },
      desc:'Complex ideas made clear in under 2 minutes. High retention, high trust. Motion and narration working together to explain what words alone can\'t.',
      tiers:[
        {n:'Basic',p:'$2,500',i:['Up to 60 seconds · Simple 2D motion graphics · 1 revision']},
        {n:'Standard',p:'$5,000',i:['Up to 90 seconds · Script + storyboard · Custom graphics · Master + social cut · 2 revisions']},
        {n:'Advanced',p:'$8,500+',i:['Up to 3 minutes · Full creative direction · Custom illustration style · Unlimited revisions']}
      ]
    },
    {
      id:'motion-graphics', name:'Motion Graphics',
      ind:['corporate','tech','social-media'],
      sample:null,
      desc:'Animated graphics for ads, social content, presentations, and video overlays — motion that makes your brand impossible to ignore.',
      tiers:[
        {n:'Basic',p:'$500',i:['Single animated graphic · Looping + one-shot · 1 revision']},
        {n:'Standard',p:'$1,200',i:['Up to 5 animated elements · Multiple format exports · 2 revisions']},
        {n:'Advanced',p:'$2,500+',i:['Full motion graphics package · 10+ elements · Unlimited revisions']}
      ]
    },
    {
      id:'logo-animation', name:'Logo Animations',
      ind:['corporate','tech','nonprofit','social-media'],
      sample:{ type:'lottie', projectSlug:'logo-animations' },
      desc:'Bring your logo to life with a custom animated intro — perfect for video openers, social profiles, and presentations.',
      tiers:[
        {n:'Basic',p:'$300',i:['Simple reveal animation · MP4 + transparent version · 1 revision']},
        {n:'Standard',p:'$600',i:['Custom motion · Multiple versions · 2 revisions']},
        {n:'Advanced',p:'$1,000',i:['Full animated brand identity suite · Unlimited revisions']}
      ]
    },
    {
      id:'lottie-animation', name:'Website Animations / Lottie',
      ind:['tech','corporate'],
      sample:{ type:'lottie', projectSlug:'lottie-collaboration' },
      desc:'Lightweight, scalable animations built for the web — Lottie files that integrate seamlessly into any website or app without slowing it down.',
      tiers:[
        {n:'Basic',p:'$400',i:['Single Lottie animation · JSON + MP4 export · 1 revision']},
        {n:'Standard',p:'$900',i:['Up to 3 Lottie animations · Developer handoff included · 2 revisions']},
        {n:'Advanced',p:'$2,000+',i:['Full-site animation package · Scroll-triggered and interactive animations · Unlimited revisions']}
      ]
    }
  ],

  design: [
    {
      id:'graphic-design', name:'Graphic Design',
      ind:['corporate','nonprofit','real-estate','events','social-media'],
      sample:null,
      desc:'Visuals for digital and print — infographics, ads, business cards, brochures, posters, and more. Consistent, polished, on-brand.',
      tiers:[
        {n:'Business Card',p:'$150',i:['Front + back design · Print-ready files · 2 revisions']},
        {n:'Flyer / Poster',p:'$200',i:['Single or double-sided · Digital + print formats · 2 revisions']},
        {n:'Brochure',p:'$400+',i:['Tri-fold or multi-page · Print-ready + digital PDF · 3 revisions']}
      ]
    },
    {
      id:'web-design', name:'Web Design',
      ind:['corporate','nonprofit','tech','real-estate'],
      sample:null,
      desc:'Custom Webflow websites — responsive, accessible, and built to convert. From simple landing pages to full multi-page sites.',
      tiers:[
        {n:'Landing Page',p:'$500',i:['Single-page design + build in Webflow','Mobile responsive · CMS ready · 2 revisions']},
        {n:'Multi-Page Site',p:'$1,500+',i:['Up to 5 pages · Custom animations · SEO setup · 3 revisions']},
        {n:'Full Website',p:'$3,500+',i:['Unlimited pages · E-commerce or booking integration','Training session + ongoing support · Unlimited revisions']}
      ]
    },
    {
      id:'satellite-map', name:'Satellite Maps',
      ind:['real-estate'],
      sample:null,
      desc:'Animated Google Earth flyovers showing property lines, nearby attractions, and custom labels. A powerful tool for real estate and land listings.',
      tiers:[
        {n:'Basic',p:'$150',i:['Simple flyover · Property boundary overlay · 1 revision']},
        {n:'Standard',p:'$300',i:['Flyover + custom labels and callouts · 2 revisions']},
        {n:'Advanced',p:'$500+',i:['Full animated property tour · Multiple POIs · Unlimited revisions']}
      ]
    },
    {
      id:'virtual-staging', name:'Virtual Staging',
      ind:['real-estate'],
      sample:null,
      desc:'Transform any empty room into a fully-furnished, beautifully designed space — without moving a single piece of furniture.',
      tiers:[
        {n:'1 Image',p:'$50',i:['1 virtually staged room · 2 style options · 2 revisions']},
        {n:'5 Images',p:'$200',i:['5 virtually staged rooms · Consistent style · 2 revisions']},
        {n:'10 Images',p:'$350',i:['10 virtually staged rooms · Rush delivery available · Unlimited revisions']}
      ]
    }
  ]
};


// ═══════════════════════════════════════════════════════════════
// RETAINER PLANS
// ═══════════════════════════════════════════════════════════════

var RETAINERS = [
  {
    name:'Essentials', price:'$2,000', period:'/mo',
    note:'3-month minimum · billed monthly',
    featured:false,
    features:[
      '1 Basic-tier hero deliverable per month',
      '1 social cut or repurposed asset',
      'Priority scheduling',
      'Monthly planning call'
    ]
  },
  {
    name:'Capacity Building', price:'$3,500', period:'/mo',
    note:'3-month minimum · billed monthly',
    featured:true,
    features:[
      '1–2 Standard-tier hero deliverables per month',
      '2–3 social cuts or repurposed assets',
      'Priority scheduling + same-week availability',
      'End-to-end support — we handle publishing to your channels',
      'Bi-weekly planning calls',
      'Dedicated chat'
    ]
  },
  {
    name:'Partner', price:'$6,500', period:'/mo',
    note:'3-month minimum · billed monthly',
    featured:false,
    features:[
      '2–4 Advanced-tier hero deliverables per month',
      '4–6 social cuts or repurposed assets',
      'On-call availability — always first in queue',
      'End-to-end publishing + monthly performance reporting',
      'Weekly strategy sessions',
      'Dedicated chat'
    ]
  }
];


// ═══════════════════════════════════════════════════════════════
// PACKAGES (bundles)
// ═══════════════════════════════════════════════════════════════

var PACKAGES = [
  {
    name:'Real Estate', price:'$1,200',
    desc:'Everything you need to market a listing — from aerial to interior, static to virtual. Delivered fast, optimized for MLS and social.',
    services:['Real Estate Video','Real Estate Photos','Drone Video','Satellite Map','3D Virtual Tour']
  },
  {
    name:'Corporate / Brand', price:'$2,500',
    desc:'A full content suite for companies that want to show up professionally — across web, social, and sales conversations.',
    services:['Brand Video','Testimonial','Animated Explainer','Product Demo Video','Team Headshots']
  },
  {
    name:'Live Event', price:'$3,000',
    desc:'Full event coverage — broadcast it live, capture it on camera, and walk away with assets that extend its reach for months.',
    services:['Live Stream','Event Highlight Video','Testimonials on-site','Headshots for attendees / speakers','Graphic Design']
  },
  {
    name:'Social Media', price:'$2,500',
    desc:'A month of content in a single shoot day — video, stills, and graphics ready to post across all your channels.',
    services:['Social Clips / Ads','Drone Video','Headshots','Motion Graphics set','Graphic Design']
  }
];


// ═══════════════════════════════════════════════════════════════
// POLICIES
// ═══════════════════════════════════════════════════════════════

var POLICIES = [
  { name:'Rush Fee', value:'2× quoted rate', desc:'For delivery significantly shorter than the standard production schedule.' },
  { name:'Travel Fee', value:'$1 / mile', desc:'Beyond 15 miles from Bozeman, MT. Multi-day productions quoted individually.' },
  { name:'Usage Rights', value:'Full transfer on delivery', desc:'All rights pass to you upon final delivery. No ongoing licensing fees.' },
  { name:'Hourly / Day Rate', value:'$125 / hr \u00a0·\u00a0 $1,000 / day', desc:'For consulting, maintenance, or any work billed by time.' }
];


// ═══════════════════════════════════════════════════════════════
// CATEGORY METADATA — for services page sections
// ═══════════════════════════════════════════════════════════════

var SERVICE_CATEGORIES = {
  video: {
    label:'Video',
    title:'Video Services',
    desc:'Cinematic storytelling that connects emotionally and drives people to act — from a 15-second social cut to a full brand film.',
    cols:3
  },
  photo: {
    label:'Photo',
    title:'Photo Services',
    desc:'Stills that do more than document — composition, light, and timing making your property, team, or space look exactly as good as it is.',
    cols:4
  },
  animation: {
    label:'Animation',
    title:'Animation Services',
    desc:'Motion and narrative working together to explain what words alone can\'t — and build recognition while doing it.',
    cols:4
  },
  design: {
    label:'Design',
    title:'Design Services',
    desc:'Visual identity from the first impression to the final touchpoint — design that reflects who you are and gives people a reason to trust you.',
    cols:4
  }
};


// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/** Find a service by ID across all categories */
function findService(id) {
  var found = null;
  Object.keys(SERVICES).forEach(function(cat){
    SERVICES[cat].forEach(function(s){ if(s.id === id) found = s; });
  });
  return found;
}

/** Get the sample project for a service (resolves projectSlug to full project data) */
function getServiceSample(service) {
  if (!service.sample || !service.sample.projectSlug) return null;
  var project = findProject(service.sample.projectSlug);
  if (!project) return null;
  return { type: service.sample.type, project: project };
}
