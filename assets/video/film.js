window.__timelines=window.__timelines||{};
const tl=gsap.timeline({paused:true});
const byId=Object.fromEntries(SCENES.map(s=>[s.id,s]));
const at=(id,offset=0)=>byId[id].start+offset;
const ease='power3.inOut';
function enter(sel,time,opts={}){tl.from(sel,{opacity:0,y:22,duration:.7,ease:'power3.out',...opts},time)}
function show(sel,time,duration=.5){tl.fromTo(sel,{opacity:0},{opacity:1,duration,ease:'sine.out'},time)}
function hide(sel,time,duration=.5){tl.to(sel,{opacity:0,duration,ease:'sine.in'},time)}
function draw(sel,time,duration=1){document.querySelectorAll(sel).forEach(el=>{const len=el.getTotalLength();tl.fromTo(el,{strokeDasharray:len,strokeDashoffset:len},{strokeDashoffset:0,duration,ease:'power2.inOut'},time)})}
SCENES.forEach((s,i)=>{if(!i)return;const prev='#'+SCENES[i-1].id,next='#'+s.id,t=s.start;
 if(i===2||i===3){tl.to(prev,{x:-1920,duration:.85,ease},t);tl.fromTo(next,{x:1920,opacity:1},{x:0,opacity:1,duration:.85,ease},t);}
 else if(i===4){tl.to(prev,{scale:1.18,opacity:0,duration:.8,ease},t);tl.fromTo(next,{scale:.82,opacity:0},{scale:1,opacity:1,duration:.85,ease},t);}
 else if(i===5){tl.to(prev,{x:-180,scale:1.08,opacity:0,duration:.8,ease},t);tl.fromTo(next,{scale:1.16,opacity:0},{scale:1,opacity:1,duration:.85,ease},t);}
 else{tl.to(prev,{opacity:0,scale:.97,duration:.75,ease:'sine.inOut'},t);tl.fromTo(next,{opacity:0,scale:1.04},{opacity:1,scale:1,duration:.8,ease:'sine.inOut'},t);}
 tl.set(prev,{opacity:0},t+.9);
});
// Identity: living footage behind the academic credits.
tl.fromTo('.belt-0',{x:-250},{x:-950,duration:8,ease:'none'},0);tl.fromTo('.belt-1',{x:-1100},{x:-350,duration:8,ease:'none'},0);tl.fromTo('.belt-2',{x:-150},{x:-850,duration:8,ease:'none'},0);
tl.from('#cover .wordmark',{y:15,scale:.985,duration:1,ease:'power3.out'},0);enter('#cover .cover-title',.45,{y:18,duration:.85});
enter('#cover .cover-credits',.7,{y:12});enter('#cover .affiliations',.85,{y:10});enter('#cover .credit-notes',1,{y:8});
// Teaser: the live clip becomes a state pair across an observation boundary.
enter('.teaser-heading',at('teaser',.4));enter('.teaser-tags',at('teaser',1.1));
hide('.teaser-tags',at('teaser',6.1));hide('.teaser-heading',at('teaser',6.1));
tl.to('.teaser-shot',{x:80,y:250,scale:1000/1920,transformOrigin:'top left',borderRadius:18,duration:1,ease},at('teaser',6.4));
enter('.teaser-reason',at('teaser',7.1),{x:60,y:0,duration:.9});enter('.teaser-state:nth-child(1)',at('teaser',7.5),{scale:.9,y:20});enter('.teaser-state:nth-child(2)',at('teaser',9),{x:-70,y:0,scale:.9});enter('.teaser-answer',at('teaser',10.7),{y:15,duration:.7});
show('.teaser-timeline',at('teaser',7.2));tl.from('.teaser-timeline .rail',{scaleX:0,duration:2.8,ease:'none'},at('teaser',7.2));
// Abstract-based bridge, with the three supplied framework figures.
enter('#bridge .mast',at('bridge',.3));enter('.motivation h2',at('bridge',.5));enter('.motivation-video',at('bridge',.8),{x:-70,y:0});
enter('.motivation-copy .mint',at('bridge',1.2));enter('.motivation-copy .purple',at('bridge',4.8));enter('.motivation-copy p',at('bridge',7.5));
tl.from('.motivation-limits span',{opacity:0,y:15,stagger:2.5,duration:.6},at('bridge',10));
hide('.motivation',at('bridge',14.5),.65);enter('.framework-intro',at('bridge',15.7),{scale:.96,y:0,duration:.8});
tl.from('.framework-figure',{opacity:0,y:40,stagger:.7,duration:.8},at('bridge',16.2));
// Engine: compact grounding, then concrete trace synthesis.
enter('#engine .mast',at('engine',.3));enter('.engine-title',at('engine',.4));tl.from('.engine-stack img',{x:-60,opacity:0,stagger:.1,duration:.5},at('engine',.4));
hide('.engine-stack',at('engine',1));show('.engine-overlays',at('engine',1.1));show('.overlay-car',at('engine',1.1));show('.overlay-person',at('engine',2.1));show('.overlay-building',at('engine',3));hide('.overlay-car',at('engine',2.4));hide('.overlay-person',at('engine',3.3));
tl.from('.mask-row',{x:60,opacity:0,stagger:.35,duration:.5},at('engine',1.3));tl.fromTo('.scanline',{x:0},{x:900,duration:2.5,ease:'none'},at('engine',1.2));hide('.scanline',at('engine',3.8),.2);
hide('.mask-rail',at('engine',4.1));hide('.engine-visual',at('engine',4.2));enter('.geometry-stage',at('engine',4.1),{x:180,y:0,rotationY:-12,scale:.8,duration:.9});tl.to('.geometry-stage img',{rotationY:4,duration:4,ease:'sine.inOut'},at('engine',5));enter('.geometry-signal',at('engine',4.5),{x:-45,y:0});enter('.qa-output',at('engine',6.5),{x:60,y:0});
hide('.geometry-stage',at('engine',9.4));hide('.geometry-signal',at('engine',9.4));hide('.qa-output',at('engine',9.4));show('.trace-stream',at('engine',10),.6);
enter('.synthesis-video',at('engine',10.1),{y:20});enter('.synthesis-template',at('engine',11.1),{x:-30,y:0});enter('.synthesis-qa',at('engine',12.4),{x:-30,y:0});enter('.synthesis-vlm',at('engine',13.6),{scale:.88,y:0});
show('.syn-wire',at('engine',13.7));draw('.syn-wire',at('engine',13.7),.7);show('.syn-out',at('engine',15.2));draw('.syn-out',at('engine',15.2),.6);
show('.reason-trace',at('engine',15.7));enter('.reason-trace h3',at('engine',15.8));
const traceTimes=[15.9,16.8,18,20,22.3];document.querySelectorAll('.trace-line').forEach((el,i)=>enter(el,at('engine',traceTimes[i]),{y:12,duration:.5}));
enter('.synthesis-count',at('engine',24),{y:15,duration:.7});
// Bench: a moving mosaic contracts to the two shared-prefix temporal tasks.
enter('#bench .mast',at('bench',.3));enter('.bench-head',at('bench',.45));tl.from('.bench-tile',{scale:.88,opacity:0,y:60,stagger:.07,duration:.75,ease:'power3.out'},at('bench',.6));hide('.tile-label',at('bench',6.1));tl.to('.bench-grid',{scale:.62,duration:1.1,ease},at('bench',6.4));enter('.bench-branch',at('bench',7),{y:40,duration:.8});tl.from('.temporal-rail i',{scaleX:0,stagger:.08,transformOrigin:'left',duration:.4},at('bench',7.6));
// Model routing mirrors the paper; all connectors have reserved lanes.
function route(sel,t,d=.7){show(sel,t,.15);draw(sel,t,d)}
enter('#model .mast',at('model',.3));enter('.model-title',at('model',.4));enter('.model-input',at('model',.7),{x:-50,y:0});enter('.question-input',at('model',.8));enter('.vlm',at('model',1.2),{scaleX:.94,y:0});route('#input-wire',at('model',1.5));route('#question-wire',at('model',1.4));
show('.token-stream',at('model',2));show('.state-labels',at('model',3));
tl.from('.token.visual',{opacity:0,x:-80,y:-40,stagger:.2,duration:.7},at('model',2));tl.from('.token.text',{opacity:0,y:25,stagger:1.6,duration:.5},at('model',2.5));tl.from('.token.special',{opacity:0,scaleY:0,stagger:2.5,duration:.5},at('model',4.6));tl.from('.token.obs',{opacity:0,x:-40,scale:.6,stagger:.6,duration:.7},at('model',4.8));tl.from('.token.future',{opacity:0,x:-50,scale:.6,stagger:.6,duration:.7},at('model',7.5));tl.from('.token-stream .boundary',{opacity:0,scaleY:0,duration:.5},at('model',6.7));
tl.from('.stream-line',{scaleX:0,duration:7,ease:'none'},at('model',2));show('.stream-pulse',at('model',2),.1);tl.to('.stream-pulse',{x:1200,duration:7.2,ease:'none'},at('model',2));hide('.stream-pulse',at('model',9.2),.2);tl.from('.reasoning-words span',{opacity:0,y:12,stagger:2.5,duration:.4},at('model',2.2));
show('.training-branch',at('model',10));enter('.training-encoders',at('model',11.8),{y:20});route('#encoder-wire',at('model',11.8));
enter('.alignment-head',at('model',15.8),{y:20});route('#observed-head-wire',at('model',16.1));route('#future-head-wire',at('model',16.1));
enter('.target-features',at('model',18.6),{scale:.85,y:0});enter('.pred-features',at('model',18.8),{scale:.85,y:0});route('#target-wire',at('model',18.5));route('#head-feature-wire',at('model',18.5));
enter('.alignment-loss',at('model',19.7),{y:15});route('#target-loss-wire',at('model',19.8));route('#pred-loss-wire',at('model',19.8));enter('.target-label,.pred-label',at('model',20));

// Case: source 8.0-11.8 s only; boxes are explanatory annotations.
enter('#case .mast',at('case',.3));enter('.case-question',at('case',.4));tl.set('.case-shot',{scale:.9},0);
const boxesLight=[[393,202,40,94],[397,192,43,111],[398,185,50,140],[435,171,64,193],[510,175,105,265]];
const boxesDark=[[605,172,90,203],[615,156,82,217],[589,149,88,226],[584,152,91,236],[599,152,87,242]];
for(const [selector,boxes] of [['.light-track',boxesLight],['.dark-track',boxesDark]]){tl.set(selector,{width:100,height:200,transformOrigin:'top left'},0);boxes.forEach((b,i)=>{const props={x:b[0]*1.5,y:b[1]*1.5,width:b[2]*1.5,height:b[3]*1.5};if(i===0)tl.set(selector,props,0);else tl.to(selector,{...props,duration:i===4?1.6:2,ease:'none'},at('case',(i-1)*2));});show(selector,at('case',1.2),.4)}
tl.set('.dark-track',{borderColor:'#B9A2FF'},0);tl.set('.dark-track span',{backgroundColor:'#B9A2FF'},0);tl.to('.case-shot',{x:-160,scale:.64,duration:1.1,ease},at('case',7.9));enter('.case-explanation',at('case',8.4),{x:130,y:0,duration:.8});enter('.case-frame-rail',at('case',9),{y:35,duration:.7});draw('#path-light',at('case',8.5),2);draw('#path-dark',at('case',8.5),2);tl.to('#dot-light',{x:500,duration:3.3,ease:'none'},at('case',8.7));tl.to('#dot-dark',{x:-500,duration:3.3,ease:'none'},at('case',8.7));tl.from('#distance-line',{scaleX:0,transformOrigin:'center',duration:.4},at('case',10));tl.to('#distance-line',{scaleX:23,transformOrigin:'center',duration:1.4,ease:'power2.out'},at('case',10.5));enter('.case-reasoning h3',at('case',8.7));enter('.case-recall',at('case',9),{y:10});enter('.case-imagine',at('case',11.2),{y:10});enter('.case-conclude',at('case',13.4),{y:10});enter('.case-answer',at('case',15.8),{y:15});
// Evidence: measured gains draw in the same direction as the case trajectories.
enter('#results .mast',at('results',.3));enter('.results-head',at('results',.4));enter('.slope',at('results',.8),{y:30,stagger:.2,duration:.7});draw('.slope:first-child .slope-line',at('results',3.4),2.1);draw('.slope:last-child .slope-line',at('results',6.3),2.1);enter('.slope:first-child .gain',at('results',4.2),{y:15,duration:.9});enter('.slope:last-child .gain',at('results',7),{y:15,duration:.9});show('.slope:first-child .ours-dot,.slope:first-child .ours-number',at('results',5.2));show('.slope:last-child .ours-dot,.slope:last-child .ours-number',at('results',8.1));enter('.overall-result',at('results',8.8),{y:25,duration:.7});
// End: footage retains motion behind the closing line.
tl.from('.end-film',{scale:1.13,duration:5.6,ease:'none'},at('closing'));enter('#closing .wordmark',at('closing',.3),{x:-25,y:0,duration:.9});enter('#closing h2',at('closing',.6));enter('.end-links',at('closing',1));
CAPTIONS.forEach((c,i)=>{tl.set('#caption-'+i,{opacity:1},c.start);tl.set('#caption-'+i,{opacity:0},c.end)});tl.from('.progress',{scaleX:0,duration:TOTAL,ease:'none'},0);window.__timelines['pros4d-film']=tl;
