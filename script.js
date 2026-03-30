// ============================================================
// SVG ICONS
// ============================================================
const SVG = {
  bookmark:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  zap:'<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  trophy:'<svg viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  briefcase:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  beaker:'<svg viewBox="0 0 24 24"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>',
  heart:'<svg viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  film:'<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/></svg>'
};

// ============================================================
// NEWS DATA
// ============================================================
const NEWS_DATA = [
  {id:1,title:"Revolutionary AI Model Surpasses Human Cognitive Benchmarks",description:"A groundbreaking artificial intelligence system achieves unprecedented scores across reasoning and creativity tests.",content:"Researchers at a leading AI lab have unveiled a new model that consistently outperforms human experts in complex reasoning tasks. The model demonstrates remarkable abilities in mathematical proof generation, creative writing, and strategic planning. This represents a significant leap forward in artificial general intelligence research, opening new possibilities in healthcare, education, and scientific discovery that were previously thought to be decades away.",source:"TechCrunch",category:"Tech",image:"https://picsum.photos/seed/aimodel/600/400",time:"2h ago",author:"Sarah Chen",readTime:"5 min",tags:["AI","Machine Learning","Research"]},
  {id:2,title:"SpaceX Launches First Mars Habitat Module Into Orbit",description:"The first component of a permanent Mars settlement successfully reaches low Earth orbit for testing.",content:"SpaceX has achieved another historic milestone by launching the first habitation module designed for Mars colonization. The module will spend six months in Earth orbit undergoing rigorous testing before being transported to Mars. The cylindrical habitat can support four astronauts and features advanced life support, radiation shielding, and hydroponic food production systems capable of sustaining a crew for up to two years.",source:"Space.com",category:"Science",image:"https://picsum.photos/seed/spacex2024/600/400",time:"4h ago",author:"Mike Johnson",readTime:"7 min",tags:["Space","Mars","SpaceX"]},
  {id:3,title:"Champions League Final Delivers Historic Upset Victory",description:"An underdog side stuns the footballing world with a dramatic extra-time triumph.",content:"In one of the greatest Champions League finals ever played, the underdog team overcame a two-goal deficit to win 4-3 in extra time. The match featured breathtaking goals, controversial VAR decisions, and a fairy-tale ending. The winning goal came in the 118th minute from a spectacular bicycle kick that will be replayed for generations to come.",source:"ESPN",category:"Sports",image:"https://picsum.photos/seed/championsleague/600/400",time:"6h ago",author:"James Wilson",readTime:"4 min",tags:["Football","Champions League","UEFA"]},
  {id:4,title:"Global Markets Surge on Breakthrough Trade Agreement",description:"Major economies finalize a landmark trade deal eliminating tariffs on tech and renewable energy goods.",content:"Stock markets around the world rallied sharply after negotiators announced a comprehensive trade agreement between the world's largest economies. The deal reduces barriers on technology exports, renewable energy equipment, and digital services. Analysts predict the agreement could boost global GDP by $2.5 trillion over the next decade and create millions of new jobs in emerging sectors.",source:"Bloomberg",category:"Business",image:"https://picsum.photos/seed/stockmarket/600/400",time:"8h ago",author:"Emma Rodriguez",readTime:"6 min",tags:["Markets","Trade","Economy"]},
  {id:5,title:"CRISPR Gene Therapy Cures Previously Untreatable Disease",description:"Patients with a rare genetic disorder show complete remission after novel gene-editing treatment.",content:"A clinical trial using advanced CRISPR-Cas9 technology has achieved remarkable results in treating a devastating genetic disease. All twelve patients in the trial showed complete remission within six months, with no significant side effects. The therapy works by precisely correcting the genetic mutation responsible for the condition, offering hope to thousands of families worldwide who have long awaited a cure.",source:"Nature",category:"Health",image:"https://picsum.photos/seed/genetherapy/600/400",time:"10h ago",author:"Dr. Lisa Park",readTime:"8 min",tags:["CRISPR","Gene Therapy","Medicine"]},
  {id:6,title:"Quantum Computer Solves Complex Problem in Record Time",description:"The latest quantum processor completes a calculation that would take classical supercomputers thousands of years.",content:"A new quantum computing milestone has been achieved with a 1,000-qubit processor solving a complex optimization problem in just 200 seconds. The same calculation would require approximately 10,000 years on the world's most powerful classical supercomputer. This breakthrough opens doors to revolutionary advances in drug discovery, cryptography, climate modeling, and materials science.",source:"Wired",category:"Tech",image:"https://picsum.photos/seed/quantum2024/600/400",time:"12h ago",author:"David Kim",readTime:"6 min",tags:["Quantum","Computing","Physics"]},
  {id:7,title:"Record-Breaking Film Opens with $500M Global Weekend",description:"The highly anticipated sequel shatters box office records with an extraordinary opening.",content:"The long-awaited sequel has exceeded all expectations with a global opening weekend of $500 million, breaking records in 42 countries. Critics have praised the film for its innovative visual effects, compelling narrative, and outstanding ensemble performances. The film's director described the audience response as beyond anything they could have imagined during the five years of production.",source:"Variety",category:"Entertainment",image:"https://picsum.photos/seed/boxoffice/600/400",time:"14h ago",author:"Rachel Green",readTime:"3 min",tags:["Movies","Box Office","Entertainment"]},
  {id:8,title:"Olympic Athlete Shatters 20-Year-Old World Record",description:"A young sprinter redefines the limits of human speed by breaking an untouchable record.",content:"In a stunning performance at the World Athletics Championships, a 21-year-old sprinter broke the 100-meter world record with a time of 9.52 seconds. The record had stood for over two decades and was considered one of the most formidable marks in athletics. The crowd erupted as the electronic scoreboard confirmed the historic achievement, marking a new era in track and field.",source:"BBC Sport",category:"Sports",image:"https://picsum.photos/seed/olympic2024/600/400",time:"16h ago",author:"Tom Bradley",readTime:"4 min",tags:["Olympics","Athletics","World Record"]},
  {id:9,title:"Major Tech Company Unveils Revolutionary AR Glasses",description:"The latest augmented reality device promises to replace smartphones with all-day wearable computing.",content:"A major technology company has revealed its next-generation AR glasses featuring a holographic display with a 120-degree field of view. The device weighs just 45 grams, offers 18-hour battery life, and includes spatial audio and hand tracking. Early reviewers describe the experience as truly transformative, suggesting we may be witnessing the beginning of the post-smartphone era.",source:"The Verge",category:"Tech",image:"https://picsum.photos/seed/arglasses/600/400",time:"18h ago",author:"Alex Turner",readTime:"5 min",tags:["AR","Wearables","Innovation"]},
  {id:10,title:"Startup Raises $2B to Build Sustainable Aviation Fleet",description:"An electric aviation startup secures record funding for hydrogen-powered aircraft development.",content:"The aviation industry takes a giant leap toward sustainability as a startup raises $2 billion in Series D funding. The company plans to build a fleet of hydrogen-powered regional aircraft capable of carrying 80 passengers up to 1,500 miles with zero carbon emissions. First commercial flights are expected by 2028, potentially revolutionizing short-haul air travel.",source:"Forbes",category:"Business",image:"https://picsum.photos/seed/aviation/600/400",time:"20h ago",author:"Nina Patel",readTime:"5 min",tags:["Aviation","Sustainability","Startup"]},
  {id:11,title:"Deep-Sea Expedition Discovers New Species Ecosystem",description:"Scientists find a thriving ecosystem of previously unknown species in the deepest ocean trench.",content:"A deep-sea exploration mission has discovered over 30 previously unknown species living in an isolated ecosystem at the bottom of the Mariana Trench. The organisms include bioluminescent fish, transparent crustaceans, and a new type of coral that thrives without sunlight. Scientists believe these discoveries could lead to breakthroughs in biotechnology and medicine.",source:"National Geographic",category:"Science",image:"https://picsum.photos/seed/deepsea/600/400",time:"22h ago",author:"Dr. Ocean Phillips",readTime:"7 min",tags:["Ocean","Discovery","Biology"]},
  {id:12,title:"Mental Health App Reaches 100 Million Users Worldwide",description:"An AI-powered wellness platform achieves massive adoption with personalized therapy and meditation.",content:"A mental health technology company has reached a major milestone of 100 million global users. The app uses AI to provide personalized cognitive behavioral therapy, guided meditation exercises, and mood tracking. Clinical studies show that regular use reduces anxiety symptoms by 40% and improves sleep quality in 78% of users, making it one of the most effective digital health tools available.",source:"Health Today",category:"Health",image:"https://picsum.photos/seed/mentalhealth/600/400",time:"1d ago",author:"Maria Santos",readTime:"4 min",tags:["Mental Health","App","Wellness"]}
];

// ============================================================
// CONFIG
// ============================================================
const CATEGORIES = ['All','Tech','Sports','Business','Science','Health','Entertainment'];
const CAT_ICONS = { All:SVG.globe, Tech:SVG.zap, Sports:SVG.trophy, Business:SVG.briefcase, Science:SVG.beaker, Health:SVG.heart, Entertainment:SVG.film };
const CAT_COLORS = { Tech:'#6366f1', Sports:'#22c55e', Business:'#f59e0b', Science:'#06b6d4', Health:'#ef4444', Entertainment:'#ec4899' };

// ============================================================
// STATE
// ============================================================
let rotation = 0, velocity = 0, targetRotation = null;
let isDragging = false, lastPointer = {x:0,y:0,time:0};
let autoRotate = true, showDetail = false, detailItemId = null;
let activeCategory = 'All', searchQuery = '', searchExpanded = false;
let bookmarks = new Set(), hasInteracted = false;
let filteredNews = [...NEWS_DATA], activeIndex = 0, cardElements = [];

const FRICTION=0.955, WHEEL_SENS=0.00035, DRAG_SENS=0.003;
const AUTO_SPEED=0.004, MIN_VEL=0.00008, LERP=0.08;

// ============================================================
// DOM
// ============================================================
const $=id=>document.getElementById(id);
const orbitContainer=$('orbitContainer'), cardsContainer=$('cardsContainer');
const categoriesEl=$('categories'), centerLabel=$('centerLabel');
const centerCatDot=$('centerCatDot'), centerCatLabel=$('centerCatLabel'), centerTitle=$('centerTitle');
const popupOverlay=$('popupOverlay'), popupBox=$('popupBox'), popupClose=$('popupClose');
const popupImg=$('popupImg'), popupSource=$('popupSource');
const popupCatDot=$('popupCatDot'), popupCatName=$('popupCatName'), popupCatBadge=$('popupCatBadge');
const popupTime=$('popupTime'), popupTitle=$('popupTitle'), popupDesc=$('popupDesc');
const popupContent=$('popupContent'), popupAuthor=$('popupAuthor');
const popupReadTime=$('popupReadTime'), popupSourceMeta=$('popupSourceMeta');
const popupTags=$('popupTags');
const popupImgBookmark=$('popupImgBookmark');
const popupBookmarkBtn=$('popupBookmarkBtn');
const searchToggle=$('searchToggle'), searchInput=$('searchInput'), searchIcon=$('searchIcon');
const autoBtn=$('autoBtn'), autoIcon=$('autoIcon');
const scrollHint=$('scrollHint');
const articleCount=$('articleCount'), bookmarkCount=$('bookmarkCount'), bookmarkNum=$('bookmarkNum');
const orbitRing=$('orbitRing'), orbitRingInner=$('orbitRingInner');

// ============================================================
// DIMENSIONS
// ============================================================
function getOrbitDims(){
  const w=window.innerWidth;
  if(w<500)return{rx:140,ry:90,cw:148,ch:108};
  if(w<768)return{rx:195,ry:110,cw:170,ch:122};
  if(w<1024)return{rx:275,ry:140,cw:200,ch:145};
  if(w<1400)return{rx:355,ry:168,cw:225,ch:162};
  return{rx:415,ry:188,cw:245,ch:172};
}
let dims=getOrbitDims();
function getCenterXY(){return{cx:window.innerWidth/2,cy:window.innerHeight/2+20}}

// ============================================================
// STARS
// ============================================================
function createStars(){
  const el=$('stars'); el.innerHTML='';
  for(let i=0;i<55;i++){
    const s=document.createElement('div');s.className='star';
    const sz=Math.random()*2+1;
    s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;opacity:${Math.random()*.4+.1};animation:twinkle ${Math.random()*4+3}s ease-in-out ${Math.random()*5}s infinite`;
    el.appendChild(s);
  }
}

// ============================================================
// CATEGORIES
// ============================================================
function renderCategories(){
  categoriesEl.innerHTML='';
  CATEGORIES.forEach(cat=>{
    const btn=document.createElement('button');
    btn.className='cat-pill'+(activeCategory===cat?' active':'');
    btn.innerHTML=`${CAT_ICONS[cat]||''}<span>${cat}</span>`;
    btn.addEventListener('click',()=>{
      activeCategory=cat; searchQuery=''; searchInput.value='';
      filterNews(); renderCategories(); closePopup();
      rotation=0; velocity=0; targetRotation=null;
    });
    categoriesEl.appendChild(btn);
  });
}

// ============================================================
// FILTER
// ============================================================
function filterNews(){
  filteredNews=NEWS_DATA.filter(item=>{
    const mc=activeCategory==='All'||item.category===activeCategory;
    const ms=!searchQuery||item.title.toLowerCase().includes(searchQuery.toLowerCase())||item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return mc&&ms;
  });
  renderCards(); updateBottomBar();
}

// ============================================================
// RENDER CARDS
// ============================================================
function renderCards(){
  cardsContainer.innerHTML=''; cardElements=[];
  if(filteredNews.length===0){
    cardsContainer.innerHTML=`<div class="empty-state">${SVG.search}<p style="font-size:18px;font-weight:600">No articles found</p><p style="font-size:14px;margin-top:8px;opacity:.6">Try adjusting your search or category</p></div>`;
    centerLabel.style.opacity='0'; return;
  }
  filteredNews.forEach((item,i)=>{
    const card=document.createElement('div');
    card.className='news-card'; card.dataset.index=i; card.dataset.id=item.id;
    const cc=CAT_COLORS[item.category]||'#6366f1';
    const ib=bookmarks.has(item.id);
    card.innerHTML=`
      <button class="bookmark-btn${ib?' bookmarked':''}" data-id="${item.id}">${SVG.bookmark}</button>
      <div class="card-img-wrap">
        <img class="card-img" src="${item.image}" alt="${item.title}" loading="lazy" draggable="false">
        <span class="card-source">${item.source}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <div class="card-meta">
          <div class="card-cat"><div class="card-cat-dot" style="background:${cc}"></div><span class="card-cat-label">${item.category}</span></div>
          <span class="card-time">${item.time}</span>
        </div>
      </div>`;
    card.addEventListener('click',e=>{if(e.target.closest('.bookmark-btn'))return;onCardClick(i)});
    card.querySelector('.bookmark-btn').addEventListener('click',e=>{e.stopPropagation();toggleBookmark(item.id)});
    cardsContainer.appendChild(card); cardElements.push(card);
  });
}

// ============================================================
// POSITIONING
// ============================================================
function getCardPos(index,total,rot){
  const angle=(index/total)*Math.PI*2+rot;
  const x=Math.sin(angle)*dims.rx, y=-Math.cos(angle)*dims.ry;
  const depth=-Math.cos(angle), nd=(depth+1)/2;
  return{x,y,scale:.45+nd*.65,opacity:.15+nd*.85,zIndex:Math.round(nd*100),blur:Math.max(0,(1-nd)*3),depth,angle};
}
function getActiveIdx(rot,total){
  if(!total)return -1;
  let best=0,bestD=Infinity;
  for(let i=0;i<total;i++){
    const a=(i/total)*Math.PI*2+rot;
    const n=((a%(Math.PI*2))+Math.PI*2)%(Math.PI*2);
    const d=Math.min(Math.abs(n-Math.PI),Math.PI*2-Math.abs(n-Math.PI));
    if(d<bestD){bestD=d;best=i}
  }
  return best;
}
function getTargetRot(idx,total,cur){
  const base=Math.PI-(idx/total)*Math.PI*2;
  const diff=base-cur;
  const nd=((diff+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;
  return cur+nd;
}

// ============================================================
// UPDATE LOOP
// ============================================================
function updatePositions(){
  const{cx,cy}=getCenterXY(); const total=filteredNews.length;
  if(!total)return;
  activeIndex=getActiveIdx(rotation,total);
  cardElements.forEach((card,i)=>{
    const p=getCardPos(i,total,rotation);
    const tx=p.x+cx-dims.cw/2, ty=p.y+cy-dims.ch/2;
    card.style.transform=`translate(${tx}px,${ty}px) scale(${p.scale})`;
    card.style.opacity=p.opacity; card.style.zIndex=p.zIndex;
    card.style.filter=p.blur>.5?`blur(${p.blur}px)`:'none';
    card.style.width=dims.cw+'px'; card.style.height=dims.ch+'px';
    i===activeIndex?card.classList.add('active-card'):card.classList.remove('active-card');
  });
  orbitRing.style.cssText=`width:${dims.rx*2}px;height:${dims.ry*2}px;left:${cx-dims.rx}px;top:${cy-dims.ry}px`;
  orbitRingInner.style.cssText=`width:${dims.rx*2-60}px;height:${dims.ry*2-30}px;left:${cx-dims.rx+30}px;top:${cy-dims.ry+15}px`;
  if(!showDetail&&filteredNews[activeIndex]){
    const item=filteredNews[activeIndex]; const cc=CAT_COLORS[item.category]||'#6366f1';
    centerCatDot.style.background=cc; centerCatDot.style.boxShadow=`0 0 10px ${cc}`;
    centerCatLabel.style.color=cc; centerCatLabel.textContent=item.category;
    centerTitle.textContent=item.title; centerLabel.style.opacity='1';
  }else{centerLabel.style.opacity='0'}
}

let lastTime=performance.now();
function tick(now){
  const dt=Math.min((now-lastTime)/16.667,3); lastTime=now;
  if(targetRotation!==null){
    const diff=targetRotation-rotation;
    if(Math.abs(diff)<.005){rotation=targetRotation;targetRotation=null;velocity=0}
    else{rotation+=diff*LERP*dt;velocity=0}
  }else{
    if(autoRotate&&!isDragging&&!showDetail){velocity+=AUTO_SPEED*.02*dt;if(velocity>AUTO_SPEED)velocity=AUTO_SPEED}
    velocity*=Math.pow(FRICTION,dt);
    if(Math.abs(velocity)<MIN_VEL)velocity=0;
    rotation+=velocity*dt;
  }
  updatePositions();
  requestAnimationFrame(tick);
}

// ============================================================
// CARD CLICK → POPUP
// ============================================================
function onCardClick(idx){
  if(!filteredNews.length)return;

  const clickedCard = cardElements[idx];

  // Fade other cards
  cardElements.forEach((card,i)=>{
    if(i !== idx){
      card.classList.add('fade-out');
    }
  });

  // Add expand effect
  clickedCard.classList.add('expanding');

  // Move to center
  const {cx, cy} = getCenterXY();
  clickedCard.style.transform = `
    translate(${cx - dims.cw/2}px, ${cy - dims.ch/2}px)
    scale(1.8)
  `;

  // After animation → open popup
  setTimeout(()=>{
    const item = filteredNews[idx];
    detailItemId = item.id;
    openPopup(item);

    // Reset cards after popup opens
    cardElements.forEach(card=>{
      card.classList.remove('fade-out','expanding');
    });

  }, 400);
}

// ============================================================
// POPUP
// ============================================================
function openPopup(item){
  showDetail=true;
  const cc=CAT_COLORS[item.category]||'#6366f1';

  popupImg.src=item.image;
  popupImg.alt=item.title;
  popupSource.textContent=item.source;
  popupCatDot.style.background=cc;
  popupCatBadge.style.background=`${cc}15`;
  popupCatBadge.style.border=`1px solid ${cc}30`;
  popupCatName.style.color=cc;
  popupCatName.textContent=item.category;
  popupTime.textContent=item.time;
  popupTitle.textContent=item.title;
  popupDesc.textContent=item.description;
  popupContent.textContent=item.content;
  popupAuthor.textContent=item.author;
  popupReadTime.textContent=item.readTime;
  popupSourceMeta.textContent=item.source;

  // Tags
  popupTags.innerHTML='';
  if(item.tags){
    item.tags.forEach(t=>{
      const tag=document.createElement('span');
      tag.className='popup-tag'; tag.textContent='#'+t;
      popupTags.appendChild(tag);
    });
  }

  updatePopupBookmarks();
  popupOverlay.classList.add('visible');

  // Reset scroll
  const body=popupBox.querySelector('.popup-body');
  if(body) body.scrollTop=0;

  // Reset image zoom
  popupImg.style.transform='scale(1)';
  requestAnimationFrame(()=>{popupImg.style.transform='scale(1.05)'});
}

function closePopup(){
  showDetail=false;
  popupOverlay.classList.remove('visible');
  detailItemId=null;
}

function updatePopupBookmarks(){
  const ib=detailItemId&&bookmarks.has(detailItemId);
  [popupImgBookmark,popupBookmarkBtn].forEach(btn=>{
    ib?btn.classList.add('bookmarked'):btn.classList.remove('bookmarked');
  });
}

popupClose.addEventListener('click',e=>{e.stopPropagation();closePopup()});

popupOverlay.addEventListener('click',e=>{
  if(e.target===popupOverlay) closePopup();
});

popupImgBookmark.addEventListener('click',e=>{
  e.stopPropagation();
  if(detailItemId){toggleBookmark(detailItemId);updatePopupBookmarks()}
});

popupBookmarkBtn.addEventListener('click',e=>{
  e.stopPropagation();
  if(detailItemId){toggleBookmark(detailItemId);updatePopupBookmarks()}
});

// Stop propagation on popup box
popupBox.addEventListener('pointerdown',e=>e.stopPropagation());
popupBox.addEventListener('wheel',e=>e.stopPropagation(),{passive:true});

// ============================================================
// BOOKMARKS
// ============================================================
function toggleBookmark(id){
  bookmarks.has(id)?bookmarks.delete(id):bookmarks.add(id);
  updateBookmarkUI(id); updateBottomBar();
}
function updateBookmarkUI(id){
  const btn=cardsContainer.querySelector(`.bookmark-btn[data-id="${id}"]`);
  if(btn){bookmarks.has(id)?btn.classList.add('bookmarked'):btn.classList.remove('bookmarked')}
}
function updateBottomBar(){
  articleCount.textContent=`${filteredNews.length} article${filteredNews.length!==1?'s':''}`;
  if(bookmarks.size>0){bookmarkCount.style.display='flex';bookmarkNum.textContent=bookmarks.size}
  else{bookmarkCount.style.display='none'}
}

// ============================================================
// SEARCH
// ============================================================
searchToggle.addEventListener('click',()=>{
  searchExpanded=!searchExpanded;
  if(searchExpanded){
    searchInput.classList.add('expanded');
    searchIcon.innerHTML='<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>';
    setTimeout(()=>searchInput.focus(),150);
  }else{
    searchInput.classList.remove('expanded');
    searchIcon.innerHTML='<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>';
    searchQuery=''; searchInput.value=''; filterNews();
    rotation=0; velocity=0; targetRotation=null;
  }
});
searchInput.addEventListener('input',()=>{
  searchQuery=searchInput.value; filterNews();
  rotation=0; velocity=0; targetRotation=null; closePopup();
});
searchInput.addEventListener('pointerdown',e=>e.stopPropagation());

// ============================================================
// AUTO-ROTATE
// ============================================================
autoBtn.addEventListener('click',()=>{
  autoRotate=!autoRotate;
  if(autoRotate){
    autoBtn.classList.add('active');
    autoIcon.innerHTML='<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    autoBtn.querySelector('.auto-label').textContent='Pause';
  }else{
    autoBtn.classList.remove('active');
    autoIcon.innerHTML='<polygon points="5 3 19 12 5 21 5 3"/>';
    autoBtn.querySelector('.auto-label').textContent='Auto';
  }
});

// ============================================================
// ORBIT EVENTS
// ============================================================
orbitContainer.addEventListener('wheel',e=>{
  e.preventDefault();
  hasInteracted=true; scrollHint.style.display='none';
  targetRotation=null;
  if(showDetail)closePopup();
  velocity+=e.deltaY*WHEEL_SENS;
},{passive:false});

orbitContainer.addEventListener('pointerdown',e=>{
  if(e.target.closest('.bookmark-btn')||e.target.closest('.popup-overlay'))return;
  isDragging=true; hasInteracted=true; scrollHint.style.display='none';
  targetRotation=null; velocity=0;
  lastPointer={x:e.clientX,y:e.clientY,time:performance.now()};
  orbitContainer.classList.add('dragging');
  orbitContainer.setPointerCapture(e.pointerId);
});

orbitContainer.addEventListener('pointermove',e=>{
  if(!isDragging)return;
  const dx=e.clientX-lastPointer.x;
  const now=performance.now();
  const dt=Math.max(now-lastPointer.time,1);
  rotation+=dx*DRAG_SENS*.05;
  velocity=(dx*DRAG_SENS*.05)/(dt/16.667);
  lastPointer={x:e.clientX,y:e.clientY,time:now};
});

function onPointerUp(){isDragging=false;orbitContainer.classList.remove('dragging')}
orbitContainer.addEventListener('pointerup',onPointerUp);
orbitContainer.addEventListener('pointercancel',onPointerUp);

// ============================================================
// KEYBOARD
// ============================================================
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(showDetail)closePopup();
    if(searchExpanded){
      searchExpanded=false;searchInput.classList.remove('expanded');
      searchIcon.innerHTML='<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>';
      searchQuery='';searchInput.value='';filterNews();
    }
  }
  if(document.activeElement===searchInput)return;
  if(e.key==='ArrowRight'||e.key==='ArrowDown'){
    hasInteracted=true;scrollHint.style.display='none';
    targetRotation=null;closePopup();velocity+=.02;
  }
  if(e.key==='ArrowLeft'||e.key==='ArrowUp'){
    hasInteracted=true;scrollHint.style.display='none';
    targetRotation=null;closePopup();velocity-=.02;
  }
  if(e.key==='Enter'&&filteredNews.length>0&&!showDetail) onCardClick(activeIndex);
});

// ============================================================
// RESIZE
// ============================================================
window.addEventListener('resize',()=>{dims=getOrbitDims();updatePositions()});

// ============================================================
// INIT
// ============================================================
createStars();
renderCategories();
filterNews();
updatePositions();
requestAnimationFrame(tick);