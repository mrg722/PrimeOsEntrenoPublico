const STORAGE_KEY = "prime_os_publico_v2_0";
let APP_READY=false;

const MUSCLES = ["Pierna anterior","Pierna posterior/glúteo","Gemelos","Pecho","Espalda","Hombro","Bíceps","Tríceps","Abdomen","Cardio/recuperación","General"];
const APP_VERSION="3.0.0";
const EVIDENCE_VERSION="2026-09-28";
const EVIDENCE_REGISTRY=[
{source:"ACSM",type:"Position Stand / overview of reviews",year:2026,title:"Resistance Training Prescription for Muscle Function, Hypertrophy, and Physical Performance in Healthy Adults: An Overview of Reviews",id:"PMID 41843416 · DOI 10.1249/MSS.0000000000003897",url:"https://pubmed.ncbi.nlm.nih.gov/41843416/",sourceUrl:"https://acsm.org/resistance-training-guidelines-update-2026/",use:"Marco principal para traducir la síntesis de evidencia sobre entrenamiento de fuerza en adultos sanos a reglas transparentes."},
{source:"PubMed / Sports Medicine",type:"Meta-regresión 2026",year:2026,title:"The Resistance Training Dose Response: Meta-Regressions Exploring the Effects of Weekly Volume and Frequency on Muscle Hypertrophy and Strength Gains",id:"PMID 41343037 · DOI 10.1007/s40279-025-02344-w",url:"https://pubmed.ncbi.nlm.nih.gov/41343037/",use:"Volumen semanal, frecuencia y rendimientos decrecientes; las series indirectas se modelan como fracción configurable y no como ley universal."},
{source:"BJSM / PubMed",type:"Systematic review + Bayesian network meta-analysis",year:2023,title:"Resistance training prescription for muscle strength and hypertrophy in healthy adults",id:"PMID 37414459 · DOI 10.1136/bjsports-2023-106807",url:"https://pubmed.ncbi.nlm.nih.gov/37414459/",sourceUrl:"https://bjsm.bmj.com/content/57/18/1211",use:"Sustenta que distintas prescripciones pueden funcionar; cargas altas destacan para fuerza y múltiples series aparecen entre las prescripciones destacadas para hipertrofia."},
{source:"PubMed / Sports Medicine",type:"Meta-regresiones",year:2024,title:"Exploring the Dose-Response Relationship Between Estimated Resistance Training Proximity to Failure, Strength Gain, and Muscle Hypertrophy",id:"PMID 38970765 · DOI 10.1007/s40279-024-02069-2",url:"https://pubmed.ncbi.nlm.nih.gov/38970765/",use:"RIR como variable central; la relación con fuerza fue débil en los mejores modelos, mientras que acercarse al fallo se relacionó con mayor hipertrofia."},
{source:"PubMed / Sports Medicine",type:"Systematic review + meta-analysis",year:2023,title:"Influence of Resistance Training Proximity-to-Failure on Skeletal Muscle Hypertrophy",id:"PMID 36334240 · DOI 10.1007/s40279-022-01784-y",url:"https://pubmed.ncbi.nlm.nih.gov/36334240/",use:"Refuerza el uso de proximidad al fallo/RIR sin convertir el fallo muscular en requisito obligatorio."},
{source:"PubMed / J Sport Health Sci",type:"Systematic review + meta-analysis",year:2022,title:"Effects of resistance training performed to repetition failure or non-failure on muscular strength and hypertrophy",id:"PMID 33497853 · DOI 10.1016/j.jshs.2021.01.007",url:"https://pubmed.ncbi.nlm.nih.gov/33497853/",use:"No muestra una superioridad clara del fallo frente al no-fallo para fuerza o hipertrofia; Prime OS mantiene RIR."},
{source:"PubMed / Front Sports Act Living",type:"Systematic review + Bayesian meta-analysis",year:2024,title:"Give it a rest: a systematic review with Bayesian meta-analysis on the effect of inter-set rest interval duration on muscle hypertrophy",id:"PMID 39205815 · DOI 10.3389/fspor.2024.1429789",url:"https://pubmed.ncbi.nlm.nih.gov/39205815/",use:"El descanso se representa como objetivo adaptable y dependiente del contexto, no como una cifra universal."},
{source:"PubMed / Sports Medicine",type:"Systematic review + meta-analysis",year:2022,title:"Effects of Periodization on Strength and Muscle Hypertrophy in Volume-Equated Resistance Training Programs",id:"PMID 35044672 · DOI 10.1007/s40279-021-01636-1",url:"https://pubmed.ncbi.nlm.nih.gov/35044672/",use:"Periodización explícita puede aportar ventaja en 1RM cuando el volumen está equiparado; no se usa como afirmación de superioridad universal para hipertrofia."},
{source:"PubMed / J Strength Cond Res",type:"Systematic review + meta-analysis",year:2024,title:"Efficacy of Split Versus Full-Body Resistance Training on Strength and Muscle Growth",id:"PMID 38595233 · DOI 10.1519/JSC.0000000000004774",url:"https://pubmed.ncbi.nlm.nih.gov/38595233/",use:"Permite seleccionar Full Body o Split según volumen, frecuencia, tiempo, objetivo y preferencias cuando la dosis total es apropiada."},
{source:"PubMed / J Sports Sci",type:"Systematic review + meta-analysis",year:2021,title:"Influence of resistance training load on measures of skeletal muscle hypertrophy and improvements in maximal strength",id:"PMID 33874848 · DOI 10.1080/02640414.2021.1898094",url:"https://pubmed.ncbi.nlm.nih.gov/33874848/",use:"Las cargas altas favorecen especialmente fuerza máxima; hipertrofia puede lograrse con un espectro amplio de cargas."},
{source:"PubMed / Eur J Sport Sci",type:"Systematic review + meta-analysis",year:2021,title:"What influence does resistance exercise order have on muscular strength gains and muscle hypertrophy?",id:"PMID 32077380 · DOI 10.1080/17461391.2020.1733672",url:"https://pubmed.ncbi.nlm.nih.gov/32077380/",use:"En fuerza, los ejercicios colocados antes tienden a beneficiarse; por eso los movimientos prioritarios se colocan primero cuando el objetivo es fuerza."},
{source:"PubMed / Sports Medicine",type:"Umbrella review of meta-analyses",year:2026,title:"Maximizing Adaptations in Concurrent Training: An Umbrella Review of Meta-analyses",id:"PMID 41762427 · DOI 10.1007/s40279-026-02401-y",url:"https://pubmed.ncbi.nlm.nih.gov/41762427/",use:"El cardio se considera de forma contextual junto con modalidad, volumen, intensidad, frecuencia y proximidad entre sesiones."},
{source:"PubMed / ACSM",type:"Preparticipation screening guidance",year:2015,title:"Updating ACSM's Recommendations for Exercise Preparticipation Health Screening",id:"PMID 26473759",url:"https://pubmed.ncbi.nlm.nih.gov/26473759/",use:"Base para mantener el screening como orientación sobre actividad actual, síntomas, enfermedad conocida e intensidad prevista; no constituye autorización médica."}
,{source:"PubMed / Sports Medicine",type:"Systematic review + meta-analysis",year:2024,title:"Dose-Response Modelling of Resistance Exercise Across Outcome Domains in Strength and Conditioning: A Meta-analysis",id:"PMCID PMC11239729 · DOI 10.1007/s40279-024-02006-3",url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC11239729/",use:"Modelado de dosis para frecuencia, volumen e intensidad; se usa para reglas no lineales y para evitar saltos rígidos."}
,{source:"PubMed / Sports Medicine",type:"Systematic review + meta-analysis",year:2022,title:"The Effect of Load and Volume Autoregulation on Muscular Strength and Hypertrophy: A Systematic Review and Meta-Analysis",id:"PMID 35038063",url:"https://pubmed.ncbi.nlm.nih.gov/35038063/",use:"Sustenta la autorregulación de carga y volumen y el ajuste según rendimiento en lugar de porcentajes fijos universales."}
,{source:"PubMed / Journal of Strength and Conditioning Research",type:"Randomized trial",year:2025,title:"Training volume increases or maintenance based on previous volume: the effects on muscular adaptations in trained males",id:"PMID 39665246",url:"https://pubmed.ncbi.nlm.nih.gov/39665246/",use:"Aporta evidencia experimental para progresar series respecto al volumen previo sin asumir aumentos obligatorios."}
,{source:"PubMed / Journal of Strength and Conditioning Research",type:"Randomized trial",year:2025,title:"Does increasing the resistance-training volume lead to greater gains? The effects of weekly set progressions on muscular adaptations in females",id:"PMID 39869076",url:"https://pubmed.ncbi.nlm.nih.gov/39869076/",use:"Aporta evidencia experimental sobre progresión de series cada dos semanas frente a mantener volumen."}
,{source:"PubMed / Sports Medicine",type:"Systematic review + meta-analysis",year:2026,title:"The Influence of Individual Resistance Training Variables on Muscle Strength: A Systematic Review and Meta-analysis",id:"PMCID PMC13457492",url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC13457492/",use:"Comprueba relaciones no lineales y posibles mesetas de volumen/intensidad para fuerza; no se convierte en límites fisiológicos universales."}
];
const EVIDENCE_DATABASES=[
{name:"PubMed / MEDLINE",url:"https://pubmed.ncbi.nlm.nih.gov/",role:"Búsqueda principal de literatura biomédica, ensayos, revisiones y meta-análisis."},
{name:"Cochrane Library",url:"https://www.cochranelibrary.com/",role:"Confirmación y contraste de revisiones sistemáticas cuando existe evidencia Cochrane pertinente."},
{name:"SPORTDiscus",url:"https://about.ebsco.com/products/research-databases/sportdiscus",role:"Ampliación específica de literatura de ciencias del deporte y medicina deportiva."},
{name:"PEDro",url:"https://pedro.org.au/",role:"Comprobación de ensayos/revisiones relevantes en fisioterapia y evaluación de calidad metodológica."},
{name:"Scopus",url:"https://www.scopus.com/",role:"Rastreo de literatura, citas y trabajos relacionados."},
{name:"Web of Science",url:"https://www.webofscience.com/",role:"Rastreo de literatura y redes de citación con indexación editorial."},
{name:"ACSM",url:"https://acsm.org/",role:"Position stands y guías profesionales para traducir evidencia a práctica."},
{name:"NSCA",url:"https://www.nsca.com/about-us/position-statements/",role:"Position statements de fuerza y acondicionamiento."},
{name:"BJSM",url:"https://bjsm.bmj.com/",role:"Medicina deportiva y síntesis de evidencia."},
{name:"JOSPT",url:"https://www.jospt.org/",role:"Evidencia aplicada a ejercicio, movimiento, dolor y rehabilitación cuando corresponde."},
{name:"Google Scholar",url:"https://scholar.google.com/",role:"Descubrimiento y rastreo de citas; todo estudio localizado allí debe verificarse en la fuente editorial o base primaria antes de entrar al registro."},
{name:"PMC (PubMed Central)",url:"https://pmc.ncbi.nlm.nih.gov/",role:"Texto completo gratuito cuando el artículo biomédico está depositado en PMC."}
];
const TRAINING_RULES={
"Ganar fuerza general":{repRange:[4,8],targetRir:"2",rest:"2-4 min",evidenceRefs:["acsm2026","load2021","periodization2022","order2021"]},
"Ganar masa muscular":{repRange:[6,15],targetRir:"1-3",rest:"1.5-3 min",evidenceRefs:["acsm2026","dose2026","bjsm2023","rir2024","failure2023","failure2022","rest2024","fullbody2024"]},
"Recomposición corporal":{repRange:[6,15],targetRir:"2-3",rest:"1.5-3 min",evidenceRefs:["acsm2026","dose2026","rir2024","rest2024","fullbody2024"]},
"Bajar grasa":{repRange:[6,15],targetRir:"2-3",rest:"1.5-3 min",evidenceRefs:["acsm2026","rir2024","rest2024","concurrent2026"]},
"Salud general":{repRange:[8,15],targetRir:"3",rest:"1-3 min",evidenceRefs:["acsm2026","fullbody2024"]},
"Volver a entrenar":{repRange:[8,15],targetRir:"3-4",rest:"1-3 min",evidenceRefs:["acsm2026","rir2024","rest2024","screening2015"]}
};
const EVIDENCE_KEYS={
 acsm2026:"PMID 41843416",dose2026:"PMID 41343037",bjsm2023:"PMID 37414459",rir2024:"PMID 38970765",
 failure2023:"PMID 36334240",failure2022:"PMID 33497853",rest2024:"PMID 39205815",periodization2022:"PMID 35044672",
 fullbody2024:"PMID 38595233",load2021:"PMID 33874848",order2021:"PMID 32077380",concurrent2026:"PMID 41762427",screening2015:"PMID 26473759",volumeModel2024:"PMCID PMC11239729",autoregulation2022:"PMID 35038063",setProgression2025:"PMID 39869076",individualDose2026:"PMCID PMC13457492",volumeProgression2025:"PMID 39665246"
};

function goalRule(goal){return TRAINING_RULES[goal]||TRAINING_RULES["Salud general"];}
function rangeText(a,b){return a===b?String(a):a+"-"+b;}
function periodizationForWeek(goal,weekIndex){
  const g=goalRule(goal),i=Math.max(0,Math.min(5,Number(weekIndex)||0));
  const phases=[
    {phase:"Semana 1 · Base",loadLevel:"Moderado",rir:g.targetRir,volumeFactor:1,repRange:[g.repRange[0],g.repRange[1]]},
    {phase:"Semana 2 · Progresión",loadLevel:"Moderado",rir:"2-3",volumeFactor:1,repRange:[g.repRange[0],g.repRange[1]]},
    {phase:"Semana 3 · Progresión de dosis",loadLevel:"Moderado",rir:["Ganar fuerza general","Ganar masa muscular"].includes(goal)?"1-2":"2",volumeFactor:1.05,repRange:["Ganar fuerza general"===goal?4:6,"Ganar fuerza general"===goal?6:12]},
    {phase:"Semana 4 · Intensificación",loadLevel:goal==="Ganar fuerza general"?"Alto":"Moderado",rir:["Ganar fuerza general","Ganar masa muscular"].includes(goal)?"1-2":g.targetRir,volumeFactor:1.05,repRange:["Ganar fuerza general"===goal?3:6,"Ganar fuerza general"===goal?6:10]},
    {phase:"Semana 5 · Consolidación",loadLevel:"Moderado",rir:["Ganar fuerza general","Ganar masa muscular"].includes(goal)?"1-2":g.targetRir,volumeFactor:1,volumeProgression:true,repRange:["Ganar fuerza general"===goal?4:6,"Ganar fuerza general"===goal?7:12]},
    {phase:"Semana 6 · Reducción de fatiga",loadLevel:"Moderado",rir:"3-4",volumeFactor:0.65,repRange:[Math.max(6,g.repRange[0]),Math.min(15,g.repRange[1]+2)]}
  ];
  return {...phases[i],weekIndex:i,evidenceRefs:["acsm2026","dose2026","bjsm2023","periodization2022","load2021","autoregulation2022","volumeModel2024","individualDose2026","setProgression2025","volumeProgression2025"]};
}
function evidencePrescription(e,goal,level,loadLevel,weekIndex){
  const rule=goalRule(goal),phase=periodizationForWeek(goal,weekIndex);
  if((e.group||"")==="Cardio/recuperación")return{
    suggestedReps:e.baseReps||e.reps||"20-35 min",
    suggestedRest:"Suave/moderado",
    targetRir:"Percepción de esfuerzo cómoda",
    rationale:"El cardio se contextualiza junto con modalidad, volumen, intensidad, frecuencia y proximidad con fuerza.",
    evidenceRefs:["concurrent2026"],phase:phase.phase
  };
  let low=phase.repRange[0],high=phase.repRange[1];
  if(loadLevel==="Bajo"){low=Math.min(high,low+2);high+=2;}
  if(loadLevel==="Alto"){low=Math.max(3,low-1);}
  return{
    suggestedReps:rangeText(low,high),
    suggestedRest:(loadLevel==="Alto"||goal==="Ganar fuerza general")?(goal==="Ganar fuerza general"?"2.5-4 min":"2-3 min"):rule.rest,
    targetRir:phase.rir,
    rationale:goal==="Ganar fuerza general"?"Fuerza: prioridad a carga, orden de movimientos y RIR, sin requerir fallo.":goal==="Ganar masa muscular"?"Hipertrofia: volumen semanal distribuido, múltiples series, rango amplio de cargas y proximidad al fallo controlada.":"Prescripción adaptable al objetivo y al rendimiento real; no es un mínimo o máximo fisiológico universal.",
    evidenceRefs:Array.from(new Set([...(rule.evidenceRefs||[]),...phase.evidenceRefs])),
    phase:phase.phase
  };
}
function prescriptionSets(e,goal,level,weekIndex){
  const base=Math.max(1,Number(e.sets)||3),phase=periodizationForWeek(goal,weekIndex);
  let sets=base;
  if(level==="Principiante")sets=Math.min(sets,3);
  if(goal==="Salud general"||goal==="Volver a entrenar")sets=Math.min(sets,3);
  return Math.max(1,Math.round(sets*phase.volumeFactor));
}
const INDIRECT_SET_FACTOR=0.5;
function volumeBandForGoal(goal,group){
  const major=new Set(["Pierna anterior","Pierna posterior/glúteo","Pecho","Espalda","Hombro"]);
  const small=new Set(["Bíceps","Tríceps","Gemelos","Abdomen"]);
  if(group==="Cardio/recuperación"||group==="General")return [0,0];
  // Operational starting bands used by the engine to distribute weekly dose.
  // They are not physiological minimum/maximums and are not copied as exact
  // prescriptions from a single paper; the scientific constraint is the
  // dose-response + diminishing-returns model.
  const bands={
    "Ganar fuerza general":{major:[8,12],small:[6,8]},
    "Ganar masa muscular":{major:[10,14],small:[6,10]},
    "Recomposición corporal":{major:[8,12],small:[6,8]},
    "Bajar grasa":{major:[8,12],small:[6,8]},
    "Salud general":{major:[6,10],small:[4,6]},
    "Volver a entrenar":{major:[6,8],small:[3,6]}
  };
  const p=bands[goal]||bands["Salud general"];
  return major.has(group)?p.major:small.has(group)?p.small:[0,0];
}
function exerciseSecondaryGroups(e){
  const n=String(e.name||"").toLowerCase(),out=[];
  if(["press banca","press inclinado","press de pecho","fondos","press cerrado"].some(x=>n.includes(x)))out.push(["Tríceps",INDIRECT_SET_FACTOR]);
  if(["jalón","dominadas","remo","pullover"].some(x=>n.includes(x)))out.push(["Bíceps",INDIRECT_SET_FACTOR]);
  if(["peso muerto","curl femoral","hip thrust","patada de glúteo"].some(x=>n.includes(x)))out.push(["Pierna anterior",INDIRECT_SET_FACTOR]);
  if(["prensa","sentadilla","zancadas","búlgara","hack squat","subida al cajón"].some(x=>n.includes(x)))out.push(["Pierna posterior/glúteo",INDIRECT_SET_FACTOR]);
  return out;
}
function calculateEffectiveWeeklySets(plan){
  const direct={},effective={};
  plan.forEach(day=>(day.exercises||[]).forEach(e=>{
    const sets=Math.max(0,Number(e.sets)||0);
    direct[e.group]=(direct[e.group]||0)+sets;
    effective[e.group]=(effective[e.group]||0)+sets;
    exerciseSecondaryGroups(e).forEach(([group,f])=>effective[group]=(effective[group]||0)+sets*f);
  }));
  return{direct,effective};
}
function distributeWeeklySets(plan,goal){
  const grouped={};
  plan.forEach(day=>(day.exercises||[]).forEach(e=>(grouped[e.group]||(grouped[e.group]=[])).push(e)));
  Object.entries(grouped).forEach(([group,items])=>{
    const band=volumeBandForGoal(goal,group);if(!band[1])return;
    const current=items.reduce((s,e)=>s+(Number(e.sets)||0),0),target=Math.round((band[0]+band[1])/2);
    if(current>=target)return;
    let remaining=target-current;
    items.forEach((e,i)=>{if(remaining<=0)return;const add=Math.ceil(remaining/(items.length-i));e.sets=(Number(e.sets)||1)+add;remaining-=add;});
  });
  return plan;
}
function isExerciseCompatible(e,profile){
 const place=profile?.place||"Gimnasio",avoidText=String(profile?.avoid||"").toLowerCase(),name=String(e.name||"").toLowerCase(),equipment=String(e.equipment||"").toLowerCase();
 const gymOnly=["máquina","polea","smith","hack squat","peck deck","cinta","bicicleta","elíptica"];
 if(place==="Casa"&&gymOnly.some(x=>equipment.includes(x)))return false;
 const tokens=avoidText.split(/[,;\n]+/).map(x=>x.trim()).filter(Boolean);
 if(tokens.some(token=>token.length>=3&&(name.includes(token)||token.includes(name))))return false;
 return true;
}
function exerciseRestrictionNote(e,profile){
 const zone=String(profile?.painZone||"Ninguna");if(zone==="Ninguna"||Number(profile?.painLevel||0)<=0)return "";
 const n=String(e.name||"").toLowerCase();
 if(zone==="Hombro"&&["press","aperturas","fondos","elevación frontal"].some(x=>n.includes(x)))return"Revisar por molestia declarada de hombro y ajustar si aparece dolor.";
 if(zone==="Rodilla"&&["sentadilla","zancadas","búlgara","prensa","subida al cajón"].some(x=>n.includes(x)))return"Revisar por molestia declarada de rodilla y ajustar rango/carga según tolerancia.";
 if(zone==="Columna lumbar"&&["peso muerto","remo con mancuerna","rack pull"].some(x=>n.includes(x)))return"Revisar por molestia declarada lumbar y ajustar según tolerancia.";
 return "";
}


const EXERCISE_LIBRARY = {
  "Pierna anterior": [
    lib("Prensa","Pierna anterior","Máquina de prensa",4,"8-12","90-120 s","Trabajar cuádriceps y pierna con estabilidad.","Siéntate firme, pies al ancho de hombros, baja controlado y empuja sin bloquear agresivamente las rodillas.","Muy buena opción general para piernas. Ajusta profundidad según comodidad de rodilla y cadera."),
    lib("Extensión de piernas","Pierna anterior","Máquina de extensión",3,"12-15","60-90 s","Aislar cuádriceps.","Extiende las rodillas controlando el movimiento. Pausa breve arriba y baja lento.","No uses rebotes. Si molesta la rodilla, baja carga o acorta rango."),
    lib("Sentadilla goblet","Pierna anterior","Mancuerna o kettlebell",3,"10-12","90 s","Aprender sentadilla con carga simple.","Sostén el peso frente al pecho, baja con control y mantén el torso firme.","Ideal para principiantes. Mantén talones apoyados."),
    lib("Sentadilla en máquina Smith","Pierna anterior","Máquina Smith",3,"8-12","90-120 s","Sentadilla guiada y estable.","Ubícate cómodo bajo la barra, baja controlado y sube sin perder postura.","Útil si la sentadilla libre se siente difícil."),
    lib("Zancadas","Pierna anterior","Peso corporal o mancuernas",3,"8-12 por pierna","90 s","Trabajar piernas y estabilidad.","Da un paso firme, baja controlado y empuja con la pierna delantera.","Empieza sin peso si pierdes equilibrio."),
    lib("Sentadilla búlgara","Pierna anterior","Banco + mancuernas",3,"8-10 por pierna","90-120 s","Trabajo unilateral intenso de pierna.","Apoya el pie trasero en banco, baja controlado y empuja con la pierna delantera.","Ejercicio demandante: empieza liviano."),
    lib("Búlgaras","Pierna anterior","Banco + mancuernas",3,"8-10 por pierna","90-120 s","Trabajo unilateral intenso de pierna.","Apoya el pie trasero en banco, baja controlado y empuja con la pierna delantera.","Ejercicio demandante: empieza liviano."),
    lib("Sentadilla con peso corporal","Pierna anterior","Peso corporal",3,"10-15","60-90 s","Aprender patrón básico de sentadilla.","Baja manteniendo el torso firme y rodillas alineadas con los pies.","Buena opción inicial o de calentamiento."),
    lib("Sentadilla libre","Pierna anterior","Barra libre",3,"6-10","120 s","Trabajar pierna completa y fuerza general.","Barra estable, pies firmes, baja controlado y sube manteniendo torso firme.","Usa solo si dominas técnica. Si no, elige goblet, prensa o Smith."),
    lib("Sentadilla frontal","Pierna anterior","Barra libre o mancuernas",3,"6-10","120 s","Dar énfasis a cuádriceps con torso más vertical.","Sostén la carga al frente, mantén codos altos y baja controlado.","Exige movilidad y postura; empieza liviano."),
    lib("Hack squat","Pierna anterior","Máquina hack",3,"8-12","90-120 s","Trabajar cuádriceps con guía estable.","Apoya espalda en la máquina, baja controlado y empuja sin bloquear fuerte.","Buena alternativa a sentadilla libre."),
    lib("Subida al cajón","Pierna anterior","Cajón o banco bajo",3,"8-12 por pierna","90 s","Pierna, estabilidad y coordinación.","Sube empujando con la pierna apoyada en el cajón y baja controlado.","Usa una altura segura y estable.")
  ],
  "Pierna posterior/glúteo": [
    lib("Hip thrust","Pierna posterior/glúteo","Banco + barra o máquina",4,"8-12","90-120 s","Trabajar principalmente glúteos.","Apoya la espalda en banco, empuja con glúteos y pausa arriba sin arquear la espalda.","Pausa arriba 1 segundo. Si sientes lumbar, baja carga."),
    lib("Curl femoral sentado","Pierna posterior/glúteo","Máquina de curl femoral",3,"10-15","60-90 s","Trabajar isquios con estabilidad.","Flexiona las rodillas y vuelve lento, sin despegar el cuerpo del respaldo.","Controla la bajada para mejor estímulo."),
    lib("Curl femoral acostado","Pierna posterior/glúteo","Máquina de curl femoral acostado",3,"10-15","60-90 s","Trabajar isquios.","Flexiona las piernas sin levantar la cadera y baja lento.","No uses impulso."),
    lib("Peso muerto rumano","Pierna posterior/glúteo","Barra o mancuernas",3,"8-10","120 s","Trabajar glúteos e isquios.","Lleva la cadera atrás, rodillas levemente flexionadas y espalda firme. Sube apretando glúteos.","No necesitas bajar al suelo; baja hasta donde controles."),
    lib("Peso muerto convencional","Pierna posterior/glúteo","Barra",3,"5-8","120-180 s","Trabajar fuerza general de cadena posterior.","Barra cerca del cuerpo, espalda firme, empuja el suelo y sube controlado.","Ejercicio técnico. No usar pesado si hay dolor lumbar o mala técnica."),
    lib("Peso muerto sumo","Pierna posterior/glúteo","Barra",3,"5-8","120-180 s","Variante de peso muerto con postura amplia.","Pies más abiertos, manos dentro de piernas, torso firme y empuje con piernas.","Puede ser más cómodo para algunas caderas, pero requiere técnica."),
    lib("Peso muerto con mancuernas","Pierna posterior/glúteo","Mancuernas",3,"8-12","90-120 s","Aprender bisagra de cadera con carga simple.","Mancuernas a los lados, cadera atrás y espalda firme.","Más amigable que la barra para principiantes."),
    lib("Rack pull / peso muerto parcial","Pierna posterior/glúteo","Barra en rack",3,"5-8","120-180 s","Trabajar parte alta del peso muerto con menor recorrido.","Barra elevada, espalda firme y extensión controlada.","Usar solo si se entiende la técnica."),
    lib("Puente de glúteo","Pierna posterior/glúteo","Peso corporal, barra o mancuerna",3,"12-15","60-90 s","Activar y fortalecer glúteos.","Acostado boca arriba, empuja la cadera hacia arriba apretando glúteos.","Buena opción principiante."),
    lib("Prensa pies altos","Pierna posterior/glúteo","Máquina de prensa",3,"10-12","90 s","Dar más énfasis a glúteos/isquios en prensa.","Coloca los pies un poco más altos en la plataforma y empuja controlado.","No bajes tanto si la pelvis se despega."),
    lib("Patada de glúteo","Pierna posterior/glúteo","Máquina o polea",3,"12-15","60 s","Aislar glúteo.","Empuja la pierna hacia atrás sin mover la zona lumbar.","Controla el movimiento, no balancees."),
    lib("Abducción de cadera","Pierna posterior/glúteo","Máquina de abductores",3,"12-20","60 s","Trabajar glúteo medio.","Abre las piernas controlado y vuelve lento.","Evita rebotes.")
  ],
  "Pecho": [
    lib("Press de pecho en máquina","Pecho","Máquina de pecho",4,"8-12","90 s","Trabajar pecho con movimiento guiado y estable.","Ajusta el asiento, apoya la espalda y empuja al frente sin despegar hombros.","Si molesta el hombro, baja carga o cambia a una máquina más cómoda."),
    lib("Press banca","Pecho","Barra o mancuernas",3,"6-10","120 s","Trabajar pecho y fuerza general.","Acostado en banco, baja controlado al pecho y empuja manteniendo hombros estables.","Usa técnica y rango cómodo."),
    lib("Press inclinado con mancuernas","Pecho","Banco inclinado + mancuernas",3,"8-12","90 s","Dar énfasis al pecho superior.","Banco levemente inclinado, baja mancuernas controlado y empuja sin dolor.","Si molesta el hombro, baja inclinación o carga."),
    lib("Flexiones","Pecho","Peso corporal",3,"8-15","60-90 s","Trabajar pecho y control corporal.","Cuerpo recto, baja controlado y empuja. Puedes apoyar rodillas.","Ajusta dificultad según nivel."),
    lib("Aperturas en máquina","Pecho","Máquina contractor / peck deck",3,"12-15","60-90 s","Aislar pecho.","Junta los brazos al frente sin perder control. Evita estirar demasiado el hombro.","No uses rebotes."),
    lib("Aperturas en polea","Pecho","Poleas",3,"12-15","60-90 s","Trabajar pecho con tensión continua.","Con codos semiflexionados, junta las manos al frente controlando el movimiento.","Mantén hombros estables."),
    lib("Press inclinado en máquina","Pecho","Máquina inclinada",3,"8-12","90 s","Pecho superior con movimiento guiado.","Ajusta asiento, empuja en diagonal y controla la bajada.","Alternativa segura al press inclinado libre."),
    lib("Press con mancuernas plano","Pecho","Banco + mancuernas",3,"8-12","90 s","Pecho y estabilidad.","Baja mancuernas controlado y empuja sin chocar arriba.","Controla hombro y muñeca.")
  ],
  "Espalda": [
    lib("Jalón al pecho","Espalda","Polea alta",4,"8-12","90 s","Trabajar dorsales y espalda.","Tira la barra hacia la parte alta del pecho, baja hombros y evita balancearte.","No lleves la barra detrás de la nuca."),
    lib("Remo sentado","Espalda","Polea baja",3,"10-12","90 s","Trabajar espalda media.","Tira el agarre hacia el abdomen y junta escápulas sin echarte hacia atrás.","Mantén torso estable."),
    lib("Remo en máquina","Espalda","Máquina de remo",3,"8-12","90 s","Espalda con estabilidad.","Apoya el pecho si la máquina lo permite y tira con codos hacia atrás.","Ideal si cuesta la técnica libre."),
    lib("Remo con mancuerna","Espalda","Mancuerna + banco",3,"10 por lado","90 s","Trabajar espalda unilateral.","Apoya una mano en banco y tira la mancuerna hacia la cadera.","Evita rotar el tronco."),
    lib("Dominadas asistidas","Espalda","Máquina asistida o banda",3,"6-10","120 s","Progresar hacia dominadas.","Sube controlado llevando el pecho hacia la barra y baja sin caer.","Usa asistencia suficiente para técnica limpia."),
    lib("Pullover en polea","Espalda","Polea alta",3,"12-15","60-90 s","Enfatizar dorsales.","Con brazos casi estirados, lleva la barra hacia los muslos.","No lo conviertas en tríceps."),
    lib("Face pull","Espalda","Polea + cuerda",3,"12-15","60 s","Espalda alta y hombro posterior.","Tira la cuerda hacia la cara con codos altos y control.","Útil para postura y hombros."),
    lib("Remo pecho apoyado","Espalda","Máquina o banco inclinado",3,"8-12","90 s","Trabajar espalda sin cargar lumbar.","Apoya el pecho y tira los codos hacia atrás.","Buena opción segura.")
  ],
  "Hombro": [
    lib("Press de hombro en máquina","Hombro","Máquina de hombro",3,"8-12","90 s","Trabajar hombros con guía.","Ajusta asiento, empuja sobre la cabeza y baja controlado.","No arquees la espalda."),
    lib("Press hombro con mancuernas","Hombro","Mancuernas",3,"8-12","90 s","Hombro y fuerza general.","Empuja las mancuernas sobre la cabeza con control.","Usa respaldo si pierdes postura."),
    lib("Elevaciones laterales","Hombro","Mancuernas o polea",3,"12-15","60 s","Trabajar deltoide lateral.","Sube los brazos hacia los lados hasta cerca de altura hombro.","Sin impulso ni balanceo."),
    lib("Pájaros / posterior de hombro","Hombro","Mancuernas o máquina",3,"12-15","60 s","Trabajar hombro posterior.","Inclina el torso o usa máquina y abre los brazos con control.","No uses demasiado peso."),
    lib("Face pull","Hombro","Polea + cuerda",3,"12-15","60 s","Hombro posterior y escápulas.","Tira hacia la cara con codos altos y control.","Excelente accesorio preventivo."),
    lib("Elevación frontal","Hombro","Mancuernas o disco",2,"10-15","60 s","Trabajar hombro anterior.","Eleva el peso al frente hasta altura hombro.","No abusar si ya haces mucho press."),
    lib("Máquina de hombro lateral","Hombro","Máquina de elevación lateral",3,"12-15","60 s","Deltoide lateral guiado.","Ajusta asiento y sube controlado.","Fácil de usar."),
    lib("Encogimientos","Hombro","Mancuernas o barra",3,"10-15","60-90 s","Trabajar trapecio.","Sube hombros hacia arriba y baja lento.","Opcional, no prioridad para todos.")
  ],
  "Bíceps": [
    lib("Curl bíceps con mancuernas","Bíceps","Mancuernas",3,"10-15","60 s","Trabajar bíceps.","Sube las mancuernas sin balancear el cuerpo y baja lento.","Codos relativamente quietos."),
    lib("Curl bíceps en polea","Bíceps","Polea baja",3,"10-15","60 s","Bíceps con tensión constante.","Toma la barra o cuerda y flexiona los codos controlado.","Muy buena opción para control."),
    lib("Curl martillo","Bíceps","Mancuernas",3,"10-12","60 s","Trabajar bíceps/braquial.","Palmas enfrentadas, sube y baja controlado.","No balancees."),
    lib("Curl predicador","Bíceps","Banco predicador o máquina",3,"10-12","60-90 s","Bíceps con apoyo.","Apoya brazos y flexiona sin despegar codos.","No hiperextiendas abajo."),
    lib("Curl barra Z","Bíceps","Barra Z",3,"8-12","60-90 s","Bíceps con barra cómoda.","Flexiona los codos manteniendo postura firme.","Útil si la barra recta molesta muñecas."),
    lib("Curl inclinado","Bíceps","Banco inclinado + mancuernas",2,"10-12","60 s","Bíceps en posición estirada.","Apoya espalda en banco inclinado y sube controlado.","Solo si no molesta hombro/codo.")
  ],
  "Tríceps": [
    lib("Tríceps en polea","Tríceps","Polea alta",3,"10-15","60 s","Trabajar tríceps simple y seguro.","Codos pegados al cuerpo, extiende hacia abajo y vuelve lento.","No balancees el torso."),
    lib("Extensión de tríceps con cuerda","Tríceps","Polea + cuerda",3,"10-15","60 s","Tríceps con buena libertad de muñeca.","Extiende hacia abajo y abre levemente la cuerda al final.","Controla la vuelta."),
    lib("Extensión sobre cabeza","Tríceps","Mancuerna o polea",3,"10-15","60 s","Trabajar cabeza larga del tríceps.","Lleva el peso detrás de la cabeza y extiende los codos.","Evita si molesta hombro."),
    lib("Fondos asistidos","Tríceps","Máquina asistida",3,"8-12","90 s","Tríceps y empuje.","Baja hasta rango cómodo y empuja sin dolor.","No bajes profundo si molesta hombro."),
    lib("Press cerrado en máquina","Tríceps","Máquina de press",3,"8-12","90 s","Empuje con énfasis en tríceps.","Usa agarre más cerrado y empuja controlado.","Alternativa estable."),
    lib("Patada de tríceps","Tríceps","Mancuerna o polea",2,"12-15","60 s","Accesorio liviano de tríceps.","Inclina torso, codo fijo y extiende atrás.","Mejor con cargas moderadas.")
  ],
  "Abdomen": [
    lib("Plancha","Abdomen","Colchoneta",3,"20-45 s","60 s","Mejorar estabilidad del core.","Codos bajo hombros, abdomen firme y cuerpo recto.","No hundas la cadera."),
    lib("Crunch","Abdomen","Colchoneta",3,"12-20","60 s","Trabajar abdomen simple.","Flexiona el abdomen sin tirar del cuello.","Controlado, sin impulso."),
    lib("Abdominal en máquina","Abdomen","Máquina abdominal",3,"12-15","60 s","Abdomen con movimiento guiado.","Ajusta la máquina y flexiona el tronco controlado.","No tires solo con brazos."),
    lib("Elevación de piernas","Abdomen","Banco o paralelas",3,"10-15","60 s","Trabajar abdomen y control pélvico.","Eleva rodillas o piernas sin balancearte.","Empieza con rodillas flexionadas."),
    lib("Dead bug","Abdomen","Colchoneta",3,"8-12 por lado","60 s","Control lumbar y coordinación.","Espalda baja estable mientras mueves brazo y pierna contraria.","Lento y controlado."),
    lib("Pallof press","Abdomen","Polea o banda",3,"10-12 por lado","60 s","Resistir rotación del tronco.","Empuja al frente sin dejar que el cuerpo rote.","Muy bueno y seguro."),
    lib("Crunch en polea","Abdomen","Polea alta",3,"10-15","60 s","Abdomen con carga.","Arrodillado, flexiona el abdomen llevando codos hacia abajo.","No tires solo con brazos."),
    lib("Russian twist suave","Abdomen","Peso corporal o disco liviano",2,"12-20","60 s","Rotación controlada.","Gira el tronco suavemente de lado a lado.","Evita si molesta lumbar.")
  ],
  "Cardio/recuperación": [
    lib("Caminata inclinada","Cardio/recuperación","Cinta",1,"20-35 min","Suave","Mejorar salud cardiovascular.","Camina a ritmo conversable con inclinación moderada.","Debe sentirse sostenible."),
    lib("Bicicleta estática","Cardio/recuperación","Bicicleta",1,"20-35 min","Suave/moderado","Cardio de bajo impacto.","Pedalea a ritmo constante.","Buena si molestan rodillas o tobillos."),
    lib("Elíptica","Cardio/recuperación","Elíptica",1,"20-35 min","Suave/moderado","Cardio general de bajo impacto.","Mantén postura estable y ritmo cómodo.","No hace falta ir al máximo."),
    lib("Caminata al aire libre","Cardio/recuperación","Sin equipo",1,"20-45 min","Suave","Salud general y adherencia.","Camina a paso cómodo.","Excelente para principiantes."),
    lib("Movilidad general","Cardio/recuperación","Colchoneta",1,"8-12 min","Suave","Recuperación y movilidad.","Realiza movimientos suaves de cadera, hombros y columna.","No fuerces rangos."),
    lib("Respiración + movilidad","Cardio/recuperación","Colchoneta",1,"5-10 min","Suave","Bajar estrés y recuperar.","Respira profundo y combina movilidad suave.","Ideal para día rojo o descarga.")
  ],
  "Gemelos": [
    lib("Gemelos de pie","Gemelos","Máquina de gemelos o escalón",4,"10-15","60-90 s","Trabajar principalmente gastrocnemio.","Sube los talones, pausa arriba y baja lento buscando rango completo.","Mantén rodillas extendidas y evita rebotes."),
    lib("Gemelos sentado","Gemelos","Máquina de gemelos sentado",4,"12-20","60-90 s","Trabajar sóleo y resistencia local de pantorrilla.","Siéntate firme, empuja con la punta de los pies y baja controlado.","Ideal para complementar gemelos de pie."),
    lib("Gemelos en prensa","Gemelos","Máquina de prensa",3,"12-20","60-90 s","Trabajar gemelos usando la prensa.","Coloca la punta de los pies en la plataforma y mueve solo el tobillo.","No bloquees ni rebotes."),
    lib("Gemelos unilateral","Gemelos","Escalón o mancuerna",3,"10-15 por pierna","60 s","Equilibrar fuerza entre piernas.","Realiza el movimiento con una pierna, sube y baja lento.","Usa apoyo si pierdes estabilidad."),
    lib("Gemelos en Smith","Gemelos","Máquina Smith + plataforma",3,"10-15","60-90 s","Cargar gemelos de forma estable.","Barra sobre trapecios, puntas en plataforma y eleva talones.","Usa carga moderada y rango completo.")
  ],
  "General": [
    lib("Ejercicio personalizado","General","Equipo a definir",3,"10-12","90 s","Agregar un ejercicio no listado.","Describe el ejercicio, selecciona grupo muscular y registra la ejecución.","Úsalo cuando Martin entregue una indicación específica.")
  ]
};

function lib(name, group, equipment, sets, reps, rest, objective, how, recommendation){
  return {name, group, equipment, sets, reps, rest, baseReps: reps, baseRest: rest, loadLevel: "Moderado", objective, how, recommendation, note: recommendation};
}

function applyLoadToExercise(e,level,context={}){
 e.loadLevel=level||e.loadLevel||"Moderado";
 const p=evidencePrescription(e,context.goal||state?.planMeta?.goal||"Salud general",context.level||state?.planMeta?.level||"Intermedio",e.loadLevel,Number(context.weekIndex??0));
 e.suggestedReps=p.suggestedReps;e.suggestedRest=p.suggestedRest;e.targetRir=p.targetRir;e.trainingRationale=p.rationale;e.evidenceRefs=p.evidenceRefs||goalRule(context.goal||state?.planMeta?.goal||"Salud general").evidenceRefs;e.periodizationNote=p.periodizationNote||p.phase||"";
 e.loadGuide=e.loadLevel==="Alto"?"Carga desafiante: prioriza técnica y usa el RIR objetivo.":"Carga liviana/moderada: punto de partida adaptable al objetivo y al contexto.";
 if(!e.userOverrideReps)e.reps=e.suggestedReps||e.baseReps||e.reps;
 if(!e.userOverrideRest)e.rest=e.suggestedRest||e.baseRest||e.rest;
 return e;
}

let FALLBACK_ID_SEQ=0;
function makeExerciseFromLibrary(item){
  const e = {
    id: globalThis.crypto&&typeof globalThis.crypto.randomUUID==="function" ? globalThis.crypto.randomUUID() : `ex_${Date.now()}_${++FALLBACK_ID_SEQ}`,
    name:item.name,
    group:item.group,
    equipment:item.equipment,
    sets:item.sets,
    reps:item.reps,
    rest:item.rest,
    baseReps:item.baseReps || item.reps,
    baseRest:item.baseRest || item.rest,
    loadLevel:item.loadLevel || "Moderado",
    objective:item.objective,
    how:item.how,
    recommendation:item.recommendation,
    note:item.recommendation
  };
  return applyLoadToExercise(e, e.loadLevel);
}
function defaultExercise(group="Pecho"){
  return makeExerciseFromLibrary(EXERCISE_LIBRARY[group]?.[0] || EXERCISE_LIBRARY.General[0]);
}

const WEEKDAYS_ES=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
const DEFAULT_WEEKDAY_SCHEDULES={
  1:[0],
  2:[0,3],
  3:[0,2,4],
  4:[0,1,3,4],
  5:[0,1,2,4,5],
  6:[0,1,2,3,4,5]
};
function defaultWeekdaySchedule(days){
  const n=Math.max(1,Math.min(6,Number(days)||3));
  return [...(DEFAULT_WEEKDAY_SCHEDULES[n]||DEFAULT_WEEKDAY_SCHEDULES[3])];
}
function normalizeWeekdaySchedule(schedule,days){
  const n=Math.max(1,Math.min(6,Number(days)||3));
  const source=Array.isArray(schedule)?schedule:defaultWeekdaySchedule(n);
  const clean=Array.from(new Set(source.map(Number).filter(i=>Number.isInteger(i)&&i>=0&&i<7)));
  return clean.slice(0,n).sort((a,b)=>a-b);
}
function scheduleForPlan(meta,profile={}){
  const days=Number(meta?.days||profile?.days||3);
  return normalizeWeekdaySchedule(meta?.weekdaySchedule||profile?.weekdaySchedule,days);
}
const defaultState = () => ({schemaVersion:2,
  profile:{name:"",age:"",height:"",weight:"",email:"",phone:"",goal:"Salud general",level:"Principiante",days:"3",time:"45-60 min",place:"Gimnasio",focus:"general",distribution:"full-body-3",weekdaySchedule:defaultWeekdaySchedule(3),health:[],alarms:[],painLevel:0,painZone:"Ninguna",avoid:"",medicalHistory:"",injuryHistory:"",notes:"",risk:"Sin evaluar"},
  weeks:["Semana 1","Semana 2","Semana 3","Semana 4","Semana 5","Semana 6"],
  selectedWeek:"Semana 1",
  selectedDay:"Lunes",
  planMeta:{days:3,level:"Intermedio",goal:"Ganar masa muscular",focus:"general",distribution:"full-body-3",distributionLabel:"Full Body ×3",weekdaySchedule:defaultWeekdaySchedule(3),generated:false},
  routine:{},
  sessions:[],
  sessionDrafts:{},
  ui:{theme:"azul",evidenceVersion:EVIDENCE_VERSION,register:{week:"Semana 1",weekday:0,performedDate:"",modality:"3 días",sessionKey:"Lunes",editingSessionId:null},generator:{weekdaySchedule:defaultWeekdaySchedule(3)}}
});

let state = loadState();
APP_READY=true;

function $(s){return document.querySelector(s);}
function $$(s){return Array.from(document.querySelectorAll(s));}
function escapeHtml(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function migrateLegacyWeekdays(s){
  const days=Math.max(1,Math.min(6,Number(s.planMeta?.days||s.profile?.days||3)));
  const schedule=normalizeWeekdaySchedule(s.planMeta?.weekdaySchedule||s.profile?.weekdaySchedule,days);
  Object.values(s.routine||{}).forEach(week=>{
    const replacements=[];
    Object.keys(week||{}).forEach(key=>{
      const match=String(key).match(/^Día\s+(\d+)$/i);
      if(!match)return;
      const idx=Number(match[1])-1;
      const weekday=WEEKDAYS_ES[schedule[idx]??idx];
      if(weekday)replacements.push([key,weekday]);
    });
    replacements.forEach(([oldKey,newKey])=>{
      if(week[newKey]===undefined)week[newKey]=week[oldKey];
      delete week[oldKey];
    });
  });
  const migrateDayKey=key=>{
    const m=String(key||"").match(/^Día\s+(\d+)$/i);
    if(!m)return key;
    const idx=Number(m[1])-1;
    return WEEKDAYS_ES[schedule[idx]??idx]||key;
  };
  s.selectedDay=migrateDayKey(s.selectedDay);
  if(s.ui?.register)s.ui.register.sessionKey=migrateDayKey(s.ui.register.sessionKey);
  (s.sessions||[]).forEach(session=>{
    session.plannedDay=migrateDayKey(session.plannedDay||session.day||"");
    session.day=session.plannedDay||session.day;
    session.sessionKey=migrateDayKey(session.sessionKey||session.plannedDay||"");
  });
  s.planMeta=s.planMeta||{};
  s.planMeta.weekdaySchedule=schedule;
  s.profile=s.profile||{};
  s.profile.weekdaySchedule=schedule;
  return s;
}
function normalizeStateShape(s){
  const base=defaultState();
  s=s&&typeof s==="object"?s:{};
  s.profile={...base.profile,...(s.profile&&typeof s.profile==="object"?s.profile:{})};
  s.planMeta={...base.planMeta,...(s.planMeta&&typeof s.planMeta==="object"?s.planMeta:{})};
  s.weeks=Array.isArray(s.weeks)&&s.weeks.length?s.weeks:base.weeks.slice();
  s.routine=s.routine&&typeof s.routine==="object"?s.routine:{};
  s.sessions=Array.isArray(s.sessions)?s.sessions:[];
  s.sessionDrafts=s.sessionDrafts&&typeof s.sessionDrafts==="object"?s.sessionDrafts:{};
  s.ui={...base.ui,...(s.ui&&typeof s.ui==="object"?s.ui:{})};
  s.ui.register={...base.ui.register,...(s.ui.register&&typeof s.ui.register==="object"?s.ui.register:{})};
  s.ui.generator={...((base.ui&&base.ui.generator)||{}),...(s.ui.generator&&typeof s.ui.generator==="object"?s.ui.generator:{})};
  migrateLegacyWeekdays(s);
  const hasRoutine=Object.values(s.routine||{}).some(week=>Object.values(week||{}).some(day=>(day?.exercises||[]).length>0));
  if(hasRoutine)s.planMeta.generated=true;
  const routineDays=Object.values(s.routine||{}).reduce((max,week)=>Math.max(max,Object.keys(week||{}).filter(k=>WEEKDAYS_ES.includes(k)).length),0);
  if(routineDays>0)s.planMeta.days=Math.max(1,Math.min(6,Number(s.planMeta.days)||routineDays));
  s.planMeta.weekdaySchedule=normalizeWeekdaySchedule(s.planMeta.weekdaySchedule||s.profile.weekdaySchedule,s.planMeta.days||s.profile.days||3);
  s.profile.weekdaySchedule=s.planMeta.weekdaySchedule;
  s.ui.generator.weekdaySchedule=Array.isArray(s.ui.generator.weekdaySchedule)&&s.ui.generator.weekdaySchedule.length===Number(s.planMeta.days||s.profile.days||3)
    ?s.ui.generator.weekdaySchedule
    :s.planMeta.weekdaySchedule;
  s.selectedWeek=s.weeks.includes(s.selectedWeek)?s.selectedWeek:s.weeks[0];
  if(!WEEKDAYS_ES.includes(s.selectedDay)){
    const schedule=scheduleForPlan(s.planMeta,s.profile);
    s.selectedDay=WEEKDAYS_ES[schedule[0]]||WEEKDAYS_ES[0];
  }
  return s;
}
function loadState(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(raw)return normalizeStateShape(deepMerge(defaultState(),JSON.parse(raw)));
    const old=localStorage.getItem("prime_os_publico_v1_4") || localStorage.getItem("prime_os_publico_v1_3") || localStorage.getItem("prime_os_publico_v1_2") || localStorage.getItem("prime_os_publico_v1_1") || localStorage.getItem("prime_os_publico_v1");
    if(old)return normalizeStateShape(normalizeImportedState(deepMerge(defaultState(),JSON.parse(old))));
  }catch(e){console.warn("Prime OS: se restauró un estado local seguro después de un dato inválido.",e);}
  return normalizeStateShape(defaultState());
}
function normalizeImportedState(s){
  Object.values(s.routine||{}).forEach(week=>Object.values(week||{}).forEach(day=>(day.exercises||[]).forEach(e=>hydrateExercise(e,{goal:s.planMeta?.goal,level:s.planMeta?.level,weekIndex:0}))));
  return s;
}
function hydrateExercise(e,context={}){
 const found=(EXERCISE_LIBRARY[e.group]||[]).find(x=>x.name===e.name);
 if(found){e.equipment=e.equipment||found.equipment;e.objective=e.objective||found.objective;e.how=e.how||found.how;e.recommendation=e.recommendation||found.recommendation;e.note=e.note||found.recommendation;e.baseReps=e.baseReps||found.baseReps||found.reps;e.baseRest=e.baseRest||found.baseRest||found.rest;}
 else{e.equipment=e.equipment||"Equipo a definir";e.objective=e.objective||"Ejercicio personalizado.";e.how=e.how||"Describe cómo se ejecuta este ejercicio.";e.recommendation=e.recommendation||e.note||"Edita la recomendación.";e.note=e.note||e.recommendation;e.baseReps=e.baseReps||e.reps||"10-12";e.baseRest=e.baseRest||e.rest||"90 s";}
 e.loadLevel=e.loadLevel||"Moderado";
 const current=APP_READY?state:null;
 const goal=context.goal||e.planGoal||(current?.planMeta?.goal)||"Salud general";
 const level=context.level||e.planLevel||(current?.planMeta?.level)||"Intermedio";
 const weekIndex=context.weekIndex??e.weekIndex??0;
 applyLoadToExercise(e,e.loadLevel,{goal,level,weekIndex});
 return e;
}

function deepMerge(base,extra){const out={...base,...extra};out.profile={...base.profile,...(extra.profile||{})};out.planMeta={...base.planMeta,...(extra.planMeta||{})};out.ui={...base.ui,...(extra.ui||{})};return out;}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}

const THEME_PRESETS={
  azul:{color:"#2f81f7",main:"assets/backgrounds/theme-main-1.png",launch:"assets/backgrounds/theme-main-2.png"},
  verde:{color:"#238636",main:"assets/backgrounds/theme-main-3.png",launch:"assets/backgrounds/theme-main-1.png"},
  turquesa:{color:"#12b8c6",main:"assets/backgrounds/theme-main-4.png",launch:"assets/backgrounds/theme-main-2.png"},
  negro:{color:"#58606a",main:"assets/backgrounds/theme-main-2.png",launch:"assets/backgrounds/theme-main-3.png"},
  blanco:{color:"#e5e7eb",main:"assets/backgrounds/theme-main-4.png",launch:"assets/backgrounds/theme-main-1.png"}
};
function applyTheme(themeName){
  const name = THEME_PRESETS[themeName] ? themeName : "azul";
  state.ui = state.ui || {};
  state.ui.theme = name;
  const preset = THEME_PRESETS[name];
  document.body.setAttribute("data-theme", name);
  document.documentElement.style.setProperty("--bg-image-main", `url('${preset.main}')`);
  document.documentElement.style.setProperty("--bg-image-launch", `url('${preset.launch}')`);
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', preset.color);
  document.querySelectorAll('#themeButtons .theme-chip').forEach(btn=>btn.classList.toggle('active', btn.dataset.theme===name));
}



const DISTRIBUTION_POLICIES={
  1:[{value:"full-body-1",label:"Full Body",sessions:["Full Body A"],basis:"Una sesión global."}],
  2:[
    {value:"full-body-2",label:"Full Body A + Full Body B",sessions:["Full Body A","Full Body B"],basis:"Dos exposiciones globales; variantes A/B."},
    {value:"upper-lower",label:"Torso + Pierna",sessions:["Upper Focus","Lower Focus"],basis:"Una sesión focal de torso y otra de pierna."},
    {value:"lower-upper",label:"Pierna + Torso",sessions:["Lower Focus","Upper Focus"],basis:"Misma combinación con el orden invertido."},
    {value:"upper-upper",label:"Torso + Torso",sessions:["Upper Focus","Upper Focus"],basis:"Repetición permitida; la variante interna cambia de forma determinista entre semanas."},
    {value:"lower-lower",label:"Pierna + Pierna",sessions:["Lower Focus","Lower Focus"],basis:"Repetición permitida; la variante interna cambia de forma determinista entre semanas."}
  ],
  3:[
    {value:"upper-lower-full",label:"Upper + Lower + Full Body",sessions:["Upper A","Lower A","Full Body C"],basis:"El Full Body aporta una segunda exposición semanal a las grandes regiones."},
    {value:"full-body-3",label:"Full Body ×3",sessions:["Full Body A","Full Body B","Full Body C"],basis:"Tres exposiciones globales para distribuir la dosis semanal."}
  ],
  4:[
    {value:"upper-lower-4",label:"Upper A + Upper B + Lower A + Lower B",sessions:["Upper A","Upper B","Lower A","Lower B"],basis:"Estructura Upper/Lower ×2 con el orden de cuatro sesiones mostrado de forma explícita."}
  ],
  5:[
    {value:"upper-lower-2-full",label:"Upper A + Upper B + Lower A + Lower B + Full Body",sessions:["Upper A","Upper B","Lower A","Lower B","Full Body C"],basis:"Extensión determinista de la estructura de 4 días."}
  ],
  6:[
    {value:"upper-lower-3",label:"Upper A + Upper B + Upper C + Lower A + Lower B + Lower C",sessions:["Upper A","Upper B","Upper C","Lower A","Lower B","Lower C"],basis:"Tres exposiciones Upper y tres Lower; orden determinista."}
  ]
};
function distributionOptionsForDays(days){return DISTRIBUTION_POLICIES[Number(days)]||DISTRIBUTION_POLICIES[4];}
function defaultDistributionForDays(days){return distributionOptionsForDays(days)[0].value;}
function getDistribution(days,value){const opts=distributionOptionsForDays(days);return opts.find(x=>x.value===value)||opts[0];}
function distributionLabel(days,value){return getDistribution(days,value).label;}
function splitFor(days,focus="general",goal="Ganar masa muscular",distribution=null){return getDistribution(days,distribution).sessions.slice(0,Number(days));}

function summaryForSplit(name){
  return {
    "Full Body A":"Cuerpo completo con cobertura global.",
    "Full Body B":"Cuerpo completo con variante de ejercicios.",
    "Full Body C":"Cuerpo completo con tercera variante.",
    "Upper Focus":"Torso: pecho, espalda, hombros y brazos.",
    "Lower Focus":"Pierna: cuádriceps, posterior/glúteo, gemelos y core.",
    "Upper A":"Torso A.",
    "Upper B":"Torso B.",
    "Upper C":"Torso C.",
    "Lower A":"Pierna A.",
    "Lower B":"Pierna B.",
    "Lower C":"Pierna C."
  }[name]||"Rutina base general.";
}
const PICK_VARIANTS={
  "Full Body A":[["Pierna anterior","Prensa"],["Pecho","Press de pecho en máquina"],["Espalda","Jalón al pecho"],["Pierna posterior/glúteo","Curl femoral sentado"],["Hombro","Elevaciones laterales"],["Abdomen","Plancha"]],
  "Full Body B":[["Pierna anterior","Sentadilla goblet"],["Pecho","Press banca"],["Espalda","Remo sentado"],["Pierna posterior/glúteo","Peso muerto rumano"],["Hombro","Pájaros / posterior de hombro"],["Abdomen","Pallof press"]],
  "Full Body C":[["Pierna anterior","Zancadas"],["Pecho","Press inclinado con mancuernas"],["Espalda","Remo en máquina"],["Pierna posterior/glúteo","Hip thrust"],["Hombro","Elevaciones laterales"],["Abdomen","Crunch"]],
  "Upper A":[["Pecho","Press banca"],["Espalda","Jalón al pecho"],["Hombro","Press hombro con mancuernas"],["Espalda","Remo sentado"],["Bíceps","Curl bíceps con mancuernas"],["Tríceps","Tríceps en polea"]],
  "Upper B":[["Pecho","Press inclinado en máquina"],["Espalda","Remo en máquina"],["Hombro","Elevaciones laterales"],["Espalda","Dominadas asistidas"],["Bíceps","Curl martillo"],["Tríceps","Extensión de tríceps con cuerda"],["Hombro","Pájaros / posterior de hombro"]],
  "Upper C":[["Pecho","Press con mancuernas plano"],["Espalda","Pullover en polea"],["Hombro","Press de hombro en máquina"],["Espalda","Remo pecho apoyado"],["Bíceps","Curl predicador"],["Tríceps","Press cerrado en máquina"],["Hombro","Face pull"]],
  "Lower A":[["Pierna anterior","Prensa"],["Pierna posterior/glúteo","Peso muerto rumano"],["Pierna anterior","Extensión de piernas"],["Pierna posterior/glúteo","Curl femoral sentado"],["Gemelos","Gemelos de pie"],["Abdomen","Crunch"]],
  "Lower B":[["Pierna anterior","Sentadilla goblet"],["Pierna posterior/glúteo","Hip thrust"],["Pierna posterior/glúteo","Curl femoral sentado"],["Pierna anterior","Zancadas"],["Gemelos","Gemelos sentado"],["Abdomen","Dead bug"]],
  "Lower C":[["Pierna anterior","Hack squat"],["Pierna posterior/glúteo","Peso muerto con mancuernas"],["Pierna anterior","Subida al cajón"],["Pierna posterior/glúteo","Patada de glúteo"],["Gemelos","Gemelos en Smith"],["Abdomen","Elevación de piernas"]]
};
const FAMILY_VARIANTS={"Full Body":["Full Body A","Full Body B","Full Body C"],"Upper":["Upper A","Upper B","Upper C"],"Lower":["Lower A","Lower B","Lower C"]};
function familyOfType(type){return String(type).replace(/\s+[ABC]$/,"").replace(" Focus","");}
function sourceVariantFor(type,weekIndex){
  const family=familyOfType(type),vars=FAMILY_VARIANTS[family];
  if(!vars)return type;
  const letter=String(type).match(/[ABC]$/)?.[0],offset=letter==="B"?1:letter==="C"?2:0;
  const block=Math.floor(Math.max(0,Number(weekIndex)||0)/2);
  return vars[(block+offset)%vars.length];
}
function exercisesFor(type,level,focus,context={}){
  const profile=context.profile||state.profile||{},weekIndex=Number(context.weekIndex||0);
  const sourceType=sourceVariantFor(type,weekIndex);
  const picks=PICK_VARIANTS[sourceType]||[["General","Ejercicio personalizado"]];
  const items=[];
  for(const [g,n] of picks){
    const item=(EXERCISE_LIBRARY[g]||[]).find(e=>e.name===n)||EXERCISE_LIBRARY[g]?.[0];
    if(item){
      const ex=makeExerciseFromLibrary(item);
      if(isExerciseCompatible(ex,profile))items.push(ex);
    }
  }
  const focusAdds={
    abs:["Abdomen","Pallof press"],
    pecho:["Pecho",EXERCISE_LIBRARY.Pecho?.[0]?.name],
    espalda:["Espalda",EXERCISE_LIBRARY.Espalda?.[0]?.name],
    "pierna-anterior":["Pierna anterior",EXERCISE_LIBRARY["Pierna anterior"]?.[0]?.name],
    "pierna-posterior":["Pierna posterior/glúteo",EXERCISE_LIBRARY["Pierna posterior/glúteo"]?.[0]?.name]
  };
  if(focusAdds[focus]){
    const [g,n]=focusAdds[focus],item=(EXERCISE_LIBRARY[g]||[]).find(x=>x.name===n)||EXERCISE_LIBRARY[g]?.[0];
    if(item){
      const ex=makeExerciseFromLibrary(item);
      if(isExerciseCompatible(ex,profile))items.push(ex);
    }
  }
  if(focus==="brazos"){
    [EXERCISE_LIBRARY.Bíceps?.[0],EXERCISE_LIBRARY.Tríceps?.[0]].forEach(item=>{
      if(item){
        const ex=makeExerciseFromLibrary(item);
        if(isExerciseCompatible(ex,profile))items.push(ex);
      }
    });
  }
  const maxByTime={"30 min":4,"45-60 min":6,"60-75 min":7,"75-90 min":8},maxExercises=maxByTime[profile.time]||8;
  const unique=items.filter((e,i,a)=>a.findIndex(x=>x.name===e.name&&x.group===e.group)===i).slice(0,maxExercises);
  return unique.map(e=>{
    const currentGoal=context.goal||state.planMeta.goal||"Salud general";
    hydrateExercise(e,{goal:currentGoal,level,weekIndex});
    e.sets=prescriptionSets(e,currentGoal,level,weekIndex);
    e.loadLevel=periodizationForWeek(currentGoal,weekIndex).loadLevel;
    applyLoadToExercise(e,e.loadLevel,{goal:currentGoal,level,weekIndex});
    e.weekIndex=weekIndex;
    e.planGoal=currentGoal;
    e.planLevel=level;
    e.variantBlock=Math.floor(weekIndex/2)+1;
    e.sourceVariant=sourceType;
    e.restrictionNote=exerciseRestrictionNote(e,profile);
    if(level==="Principiante")e.recommendation=(e.recommendation||"")+" Parte con esfuerzo conservador y prioriza técnica.";
    return e;
  });
}

function performanceSignal(exercise,previousWeekIndex){
  if(previousWeekIndex<0)return{signal:"Sin datos previos",action:"Establece línea base y registra RIR.",confidence:"baja"};
  const previous=state.sessions.filter(s=>Number(String(s.week||"").replace(/\D/g,""))===previousWeekIndex+1);
  const same=previous.flatMap(s=>s.exercises||[]).filter(e=>e.name===exercise.name&&e.group===exercise.group);
  const sets=same.flatMap(e=>e.sets||[]).filter(x=>x.done&&Number(x.reps)>0);
  if(!sets.length)return{signal:"Sin datos previos",action:"Registra peso, repeticiones y RIR para ajustar la próxima semana.",confidence:"baja"};
  const rirs=sets.map(x=>Number(x.rir)).filter(Number.isFinite);
  const reps=sets.map(x=>Number(x.reps)).filter(Number.isFinite);
  if(!rirs.length)return{signal:"Datos insuficientes",action:"Registra RIR además de peso y repeticiones antes de aumentar la dosis.",confidence:"baja"};
  const avgRir=rirs.reduce((a,b)=>a+b,0)/rirs.length;
  const avgReps=reps.length?reps.reduce((a,b)=>a+b,0)/reps.length:null;
  if(avgRir<1)return{signal:"Esfuerzo demasiado alto",action:"No progresar carga ni volumen; recuperar y volver al RIR objetivo.",confidence:"media"};
  if(avgRir>3.5)return{signal:"Esfuerzo demasiado bajo",action:"Considera aumentar progresivamente la carga disponible manteniendo técnica y RIR objetivo.",confidence:"media"};
  return{signal:"Rendimiento utilizable",action:avgReps!==null?"Mantén la técnica y progresa dentro del rango antes de introducir otra variante.":"Mantén la carga y registra RIR.",confidence:"media"};
}
function applyConditionalVolumeProgression(plan,goal,weekIndex,previousWeekIndex){
  const phase=periodizationForWeek(goal,weekIndex);
  if(!phase.volumeProgression||previousWeekIndex<0)return plan;
  const added={};
  const direct={};
  plan.forEach(day=>(day.exercises||[]).forEach(e=>{direct[e.group]=(direct[e.group]||0)+(Number(e.sets)||0);}));
  plan.forEach(day=>(day.exercises||[]).forEach(e=>{
    const signal=performanceSignal(e,previousWeekIndex);
    e.progression=signal;
    const band=volumeBandForGoal(goal,e.group);
    if(signal.signal!=="Rendimiento utilizable"||!band[1]||(added[e.group]||0)>=1)return;
    if((direct[e.group]||0)<band[1]){
      e.sets=(Number(e.sets)||1)+1;
      added[e.group]=1;
      e.volumeProgression="Se añade 1 serie en una transición de dos semanas sólo cuando el rendimiento y el RIR previo lo permiten y el grupo sigue bajo el techo operativo.";
    }
  }));
  return plan;
}
function exerciseOrderScore(e){
  const n=String(e.name||"").toLowerCase();
  const isolation=["extensión","curl","elevación","aperturas","patada","abducción","crunch","plancha","dead bug","pallof"].some(x=>n.includes(x));
  const compound=["sentadilla","prensa","peso muerto","hip thrust","press","remo","jalón","dominadas","fondos"].some(x=>n.includes(x));
  return isolation?3:compound?1:2;
}
function applyExerciseOrder(plan,goal){
  // The order effect is relevant to strength; hypertrophy does not receive an assumed order advantage.
  if(goal!=="Ganar fuerza general")return plan;
  plan.forEach(day=>day.exercises.sort((a,b)=>exerciseOrderScore(a)-exerciseOrderScore(b)));
  return plan;
}
function trainingEngine(days,level,goal,focus,profile,weekIndex,distribution){
  const phase=periodizationForWeek(goal,weekIndex),split=splitFor(days,focus,goal,distribution);
  let plan=split.map(type=>({title:type,exercises:exercisesFor(type,level,focus,{goal,level,weekIndex,profile})}));
  plan=distributeWeeklySets(plan,goal);
  plan=applyConditionalVolumeProgression(plan,goal,weekIndex,weekIndex-1);
  plan=applyExerciseOrder(plan,goal);
  plan.forEach(day=>(day.exercises||[]).forEach(e=>{
    e.weekRole=phase.phase;e.phase=phase.phase;e.weekIndex=weekIndex;e.planGoal=goal;e.planLevel=level;
    e.periodizationNote=phase.phase;
    const phaseRefs=["acsm2026","periodization2022","autoregulation2022","volumeModel2024"];
    if(phase.volumeProgression)phaseRefs.push("setProgression2025","volumeProgression2025");
    if(goal==="Ganar fuerza general")phaseRefs.push("order2021","load2021");
    e.evidenceRefs=Array.from(new Set([...(e.evidenceRefs||[]),...phaseRefs]));
    if(!e.progression)e.progression=performanceSignal(e,weekIndex-1);
    e.loadGuide=e.progression.confidence==="baja"
      ?"Usa el RIR objetivo y registra la ejecución; la siguiente progresión depende de tus datos."
      :e.progression.action;
    applyLoadToExercise(e,e.loadLevel,{goal,level,weekIndex});
  }));
  const effective=calculateEffectiveWeeklySets(plan);
  plan.forEach(day=>(day.exercises||[]).forEach(e=>e.effectiveWeeklyDose=Number((effective.effective[e.group]||0).toFixed(1))));
  return plan;
}
function generateRoutine(days,level,goal,focus,distribution,weekdaySchedule){
  state=normalizeStateShape(state);
  const n=Math.max(1,Math.min(6,Number(days)||3)),selected=getDistribution(n,distribution);
  const rawSchedule=Array.isArray(weekdaySchedule)?weekdaySchedule:state.ui?.generator?.weekdaySchedule||state.planMeta?.weekdaySchedule;
  const normalizedSchedule=normalizeWeekdaySchedule(rawSchedule,n);
  if(Array.isArray(rawSchedule)&&rawSchedule.length!==n)throw new Error(`INVALID_WEEKDAY_COUNT:${rawSchedule.length}/${n}`);
  const schedule=normalizedSchedule.length===n?normalizedSchedule:defaultWeekdaySchedule(n);
  if(state.sessions.length&&!confirm("Ya existen sesiones registradas. La regeneración cambiará la planificación actual, pero conservará el historial. ¿Continuar?"))return false;
  const profile={...state.profile,days:String(n),level,goal,focus,distribution:selected.value,weekdaySchedule:schedule};
  const nextPlanMeta={
    days:n,level,goal,focus,distribution:selected.value,distributionLabel:selected.label,weekdaySchedule:schedule,generated:true,
    engine:"Evidence Training Engine 2026",evidenceVersion:EVIDENCE_VERSION,programLengthWeeks:6,
    evidenceModel:{
      directSetFactor:1,indirectSetFactor:INDIRECT_SET_FACTOR,
      autoregulation:"RIR + rendimiento registrado",volumeProgression:"Sólo en semanas 3 y 5 y sólo si existe rendimiento registrado; una serie por grupo como máximo por transición.",
      periodization:"6 semanas: Base → Progresión → Progresión de dosis → Intensificación → Consolidación → Reducción de fatiga",
      structure:"Combinaciones acotadas por días; no se mezclan macroestructuras arbitrariamente.",variantCadence:"La variante de ejercicios se mantiene 2 semanas para permitir comparación de rendimiento; las variables de dosis/esfuerzo cambian cada semana.",
      note:"La literatura respalda variables y principios; la secuencia exacta de seis semanas es una implementación transparente y no una prescripción universal de un solo estudio."
    }
  };
  const generatedWeeks=["Semana 1","Semana 2","Semana 3","Semana 4","Semana 5","Semana 6"];
  let generatedRoutine;
  try{
    const previousPlanMeta=state.planMeta;
    state.planMeta=nextPlanMeta;
    generatedRoutine=buildGeneratedRoutine(n,level,goal,focus,selected.value,profile,generatedWeeks);
    state.planMeta=previousPlanMeta;
  }catch(err){
    state.planMeta=state.planMeta;
    console.error("Prime OS: ENGINE_GENERATION_ERROR",err);
    alert("Prime OS no pudo completar el motor de generación. El estado anterior se conservó. Detalle: "+(err?.message||"error desconocido"));
    return false;
  }
  if(!validateGeneratedRoutineObject(generatedRoutine,n,generatedWeeks)){
    console.error("Prime OS: generatedRoutine failed structural validation",{days:n,goal,level,focus,distribution:selected.value});
    alert("El generador no pudo completar una rutina válida de 6 semanas. No se guardaron cambios incompletos.");
    return false;
  }
  state.profile=profile;
  state.planMeta=nextPlanMeta;
  state.weeks=generatedWeeks;
  state.routine=generatedRoutine;
  state.ui=state.ui||{};
  state.ui.register=state.ui.register||{};
  state.ui.register.editingSessionId=null;
  state.selectedWeek="Semana 1";
  state.selectedDay=WEEKDAYS_ES[schedule[0]]||"Lunes";
  state.ui.generator=state.ui.generator||{};
  state.ui.generator.distribution=selected.value;
  state.ui.generator.weekdaySchedule=schedule;
  state.ui.register.week="Semana 1";
  state.ui.register.sessionKey=state.selectedDay;
  state.ui.register.performedDate=state.ui.register.performedDate||localDateISO();
  state.ui.register.modality=modalityForDays(n);
  state.ui.register.weekday=schedule[0]??0;
  saveState();return true;
}
function syncRegisterToPlanner(){
  const r=ensureRegistrationState();
  if(r.editingSessionId)return r;
  const week=state.selectedWeek,day=state.selectedDay;
  const plannedWeek=state.routine?.[week];
  if(plannedWeek && plannedWeek[day]){
    r.week=week;
    r.sessionKey=day;
    r.modality=modalityForDays(state.planMeta?.days||state.profile?.days||3);
  }else{
    // Never point Registrar at a stale/nonexistent session after regenerating the plan.
    const firstWeek=state.weeks.find(w=>Object.keys(state.routine?.[w]||{}).length) || state.weeks[0] || "Semana 1";
    const firstDay=Object.keys(state.routine?.[firstWeek]||{})[0] || "Día 1";
    r.week=firstWeek;
    r.sessionKey=firstDay;
    r.modality=modalityForDays(state.planMeta?.days||state.profile?.days||3);
  }
  saveState();
  return r;
}
function validateGeneratedRoutineObject(routine,days,weeks){
  const n=Number(days)||0,list=Array.isArray(weeks)?weeks:[];
  if(!n||list.length!==6||!routine)return false;
  return list.every(w=>{
    const week=routine[w]||{},keys=Object.keys(week);
    return keys.length===n && keys.every(k=>{
      if(!WEEKDAYS_ES.includes(k))return false;
      const exercises=week[k]?.exercises||[];
      return exercises.length>0 && exercises.every(e=>{
        const sets=Number(e.sets),reps=String(e.reps||"").trim(),rir=String(e.targetRir||"").trim(),rest=String(e.rest||"").trim();
        const refs=Array.isArray(e.evidenceRefs)?e.evidenceRefs:[];
        const evidenceOk=refs.length>0&&refs.every(ref=>Boolean(EVIDENCE_KEYS[ref]));
        return Number.isFinite(sets)&&sets>=1&&reps&&rir&&rest&&evidenceOk;
      });
    });
  });
}
function safeFallbackExercise(goal,level,weekIndex,profile){
  const candidates=[
    ...(EXERCISE_LIBRARY.General||[]),
    ...(EXERCISE_LIBRARY["Pierna anterior"]||[]),
    ...(EXERCISE_LIBRARY.Pecho||[]),
    ...(EXERCISE_LIBRARY.Espalda||[])
  ];
  const item=candidates.find(x=>isExerciseCompatible(makeExerciseFromLibrary(x),profile))||candidates[0];
  if(!item)return null;
  const ex=makeExerciseFromLibrary(item);
  hydrateExercise(ex,{goal,level,weekIndex});
  ex.sets=prescriptionSets(ex,goal,level,weekIndex);
  ex.loadLevel=periodizationForWeek(goal,weekIndex).loadLevel;
  applyLoadToExercise(ex,ex.loadLevel,{goal,level,weekIndex});
  ex.weekIndex=weekIndex;ex.planGoal=goal;ex.planLevel=level;
  return ex;
}
function buildGeneratedRoutine(days,level,goal,focus,distribution,profile,weeks){
  const n=Math.max(1,Math.min(6,Number(days)||3)),selected=getDistribution(n,distribution);
  const list=Array.isArray(weeks)&&weeks.length===6?weeks:["Semana 1","Semana 2","Semana 3","Semana 4","Semana 5","Semana 6"];
  const schedule=normalizeWeekdaySchedule(profile?.weekdaySchedule||state.planMeta?.weekdaySchedule,n);
  if(schedule.length!==n)throw new Error(`INVALID_WEEKDAY_COUNT:${schedule.length}/${n}`);
  const routine={};
  list.forEach((week,weekIndex)=>{
    const plan=trainingEngine(n,level,goal,focus,{...profile,weekdaySchedule:schedule},weekIndex,selected.value);
    if(!Array.isArray(plan)||plan.length!==n)throw new Error(`ENGINE_DAY_COUNT:${week}:${plan?.length||0}/${n}`);
    routine[week]={};
    plan.forEach((day,idx)=>{
      const exercises=Array.isArray(day.exercises)?day.exercises.filter(Boolean):[];
      if(!exercises.length){
        const fallback=safeFallbackExercise(goal,level,weekIndex,profile);
        if(fallback)exercises.push(fallback);
      }
      const weekday=WEEKDAYS_ES[schedule[idx]];
      if(!weekday)throw new Error(`ENGINE_WEEKDAY_ASSIGNMENT:${week}:${idx+1}`);
      routine[week][weekday]={
        title:day.title||`Sesión ${idx+1}`,
        exercises,
        phase:periodizationForWeek(goal,weekIndex).phase,
        weekIndex,
        weekdayIndex:schedule[idx]
      };
    });
  });
  return routine;
}
function ensurePlannerSelection(){
  const validWeeks=(state.weeks||[]).filter(w=>Object.keys(state.routine?.[w]||{}).length);
  if(!validWeeks.length)return false;
  if(!validWeeks.includes(state.selectedWeek))state.selectedWeek=validWeeks[0];
  if(!WEEKDAYS_ES.includes(state.selectedDay)){
    const schedule=scheduleForPlan(state.planMeta,state.profile);
    state.selectedDay=WEEKDAYS_ES[schedule[0]]||WEEKDAYS_ES[0];
  }
  return true;
}
function ensureGeneratedRoutineIntegrity(){
  if(!state.planMeta?.generated)return ensurePlannerSelection();
  const days=Math.max(1,Math.min(6,Number(state.planMeta?.days||state.profile?.days||0)));
  if(validateGeneratedRoutineObject(state.routine,days,state.weeks)){
    ensurePlannerSelection();
    return true;
  }
  const profile={...state.profile,days:String(days),level:state.planMeta.level||state.profile?.level||"Intermedio",goal:state.planMeta.goal||state.profile?.goal||"Salud general",focus:state.planMeta.focus||state.profile?.focus||"general",distribution:state.planMeta.distribution||defaultDistributionForDays(days)};
  try{
    const repaired=buildGeneratedRoutine(days,profile.level,profile.goal,profile.focus,profile.distribution,profile,["Semana 1","Semana 2","Semana 3","Semana 4","Semana 5","Semana 6"]);
    const repairedWeeks=["Semana 1","Semana 2","Semana 3","Semana 4","Semana 5","Semana 6"];
    if(!validateGeneratedRoutineObject(repaired,days,repairedWeeks))return false;
    state.weeks=repairedWeeks;
    state.routine=repaired;
    ensurePlannerSelection();
    saveState();
    console.warn("Prime OS: se reparó una planificación generada incompleta desde el motor determinista.");
    return true;
  }catch(err){
    console.error("Prime OS: REPAIR_GENERATED_ROUTINE_ERROR",err);
    return false;
  }
}
function reconcileGeneratedPlan(){
  return ensureGeneratedRoutineIntegrity();
}
function go(view){
  try{ collectRegisterDraft(); updateManualFields($("#routineList"), "routine"); }catch(e){}
  if(view==="registrar")syncRegisterToPlanner();
  $(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  $(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+view));
  const top= document.querySelector(".top-actions");
  const showPlannerSelectors=["rutina","progreso"].includes(view);
  top?.classList.toggle("planner-context",showPlannerSelectors);
  $("#weekSelect")?.classList.toggle("context-hidden",!showPlannerSelectors);
  $("#daySelect")?.classList.toggle("context-hidden",!showPlannerSelectors);
  $("#addWeekBtn")?.classList.toggle("context-hidden",!(showPlannerSelectors&&!state.planMeta?.generated));
  const titles={inicio:["Inicio","Plataforma pública de entrenamiento inteligente."],formulario:["Formulario inicial","Anamnesis básica para orientar tu rutina."],crear:["Crear rutina","Generador de rutina base según días, objetivo y énfasis."],rutina:["Mi rutina","Revisa y edita tu planificación semanal."],registrar:["Registrar","Anota tu entrenamiento real."],progreso:["Progreso","Revisa series, historial y recomendaciones."],importar:["Importar rutina","Importa rutinas personalizadas preparadas por Martin o una planificación externa."],personalizado:["Personalizado","Solicita una rutina adaptada a ti."],ajustes:["Ajustes","Gestión local de la app."]};
  $("#pageTitle").textContent=titles[view]?.[0]||"Prime OS"; $("#pageSubtitle").textContent=titles[view]?.[1]||""; $("#sidebar")?.classList.remove("open"); document.body.classList.remove("mobile-menu-open"); renderAll();
}
function bindLaunch(){const l=$("#launchScreen"),b=$("#launchBtn"); if(sessionStorage.getItem("prime_os_public_launch_seen")==="1")l?.classList.add("hidden");else document.body.classList.add("launch-active"); b?.addEventListener("click",()=>{sessionStorage.setItem("prime_os_public_launch_seen","1");l.classList.add("hidden");document.body.classList.remove("launch-active");});}
function bindNav(){
  $$(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>go(btn.dataset.view)));
  $$("[data-go]").forEach(btn=>btn.addEventListener("click",()=>go(btn.dataset.go)));
  $("#menuBtn")?.addEventListener("click",()=>{const s=$("#sidebar");s.classList.toggle("open");document.body.classList.toggle("mobile-menu-open",s.classList.contains("open"));});
  document.addEventListener("click",e=>{const s=$("#sidebar"),m=$("#menuBtn"); if(!s||!m||window.innerWidth>980||!s.classList.contains("open"))return; if(!s.contains(e.target)&&!m.contains(e.target)){s.classList.remove("open");document.body.classList.remove("mobile-menu-open");}});
}
function getSelectedChecks(id){return Array.from(document.querySelectorAll(`#${id} input:checked`)).map(x=>x.value);}
function setChecks(id,arr){document.querySelectorAll(`#${id} input`).forEach(input=>input.checked=(arr||[]).includes(input.value));}
function collectProfile(){state.profile={name:$("#clientName").value.trim(),age:$("#clientAge").value,height:$("#clientHeight").value.trim(),weight:$("#clientWeight").value.trim(),email:$("#clientEmail").value.trim(),phone:$("#clientPhone").value.trim(),goal:$("#clientGoal").value,level:$("#clientLevel").value,days:$("#clientDays").value,time:$("#clientTime").value,place:$("#clientPlace").value,focus:$("#clientFocus").value,health:getSelectedChecks("healthChecks"),alarms:getSelectedChecks("alarmChecks"),painLevel:Number($("#painLevel").value||0),painZone:$("#painZone").value,avoid:$("#avoidExercises").value.trim(),medicalHistory:$("#medicalHistory")?.value.trim()||"",injuryHistory:$("#injuryHistory")?.value.trim()||"",notes:$("#clientNotes").value.trim(),risk:"Sin evaluar"}; state.profile.risk=evaluateRisk(state.profile).level; saveState();}
function fillProfile(){const p=state.profile; $("#clientName").value=p.name||"";$("#clientAge").value=p.age||"";$("#clientHeight").value=p.height||"";$("#clientWeight").value=p.weight||"";$("#clientEmail").value=p.email||"";$("#clientPhone").value=p.phone||"";$("#clientGoal").value=p.goal||"Salud general";$("#clientLevel").value=p.level||"Principiante";$("#clientDays").value=p.days||"3";$("#clientTime").value=p.time||"45-60 min";$("#clientPlace").value=p.place||"Gimnasio";$("#clientFocus").value=p.focus||"general";setChecks("healthChecks",p.health||[]);setChecks("alarmChecks",p.alarms||[]);$("#painLevel").value=p.painLevel||0;$("#painZone").value=p.painZone||"Ninguna";$("#avoidExercises").value=p.avoid||"";if($("#medicalHistory"))$("#medicalHistory").value=p.medicalHistory||"";if($("#injuryHistory"))$("#injuryHistory").value=p.injuryHistory||"";$("#clientNotes").value=p.notes||"";renderScreening();}
function validateProfile(){collectProfile();const p=state.profile,errors=[]; if(!p.name)errors.push("Nombre"); if(!p.age)errors.push("Edad"); if(!p.weight)errors.push("Peso actual"); if(!p.goal)errors.push("Objetivo principal"); if(!p.level)errors.push("Nivel"); if(!p.days)errors.push("Días disponibles"); if(!p.health?.length)errors.push("Salud y antecedentes"); if(!p.alarms?.length)errors.push("Síntomas de alarma"); return errors;}
function evaluateRisk(p){
 const alarms=(p.alarms||[]).filter(x=>x!=="Ninguno"),serious=(p.health||[]).filter(x=>["Enfermedad cardiovascular","Enfermedad renal","Diabetes","Hipertensión","Embarazo/postparto"].includes(x));
 if(alarms.length||Number(p.painLevel)>=7)return{level:"Rojo",className:"red",msg:"Screening orientativo: se recomienda evaluación profesional antes de entrenamiento intenso. Prime OS no constituye autorización médica."};
 if(serious.length||Number(p.painLevel)>=4)return{level:"Amarillo",className:"yellow",msg:"Screening orientativo: reduce intensidad, prioriza técnica y considera evaluación profesional según tu condición. Prime OS no sustituye una evaluación clínica."};
 return{level:"Verde",className:"green",msg:"Screening orientativo: no se identifican señales de alarma en los datos declarados. Esto no constituye autorización médica."};
}

function renderScreening(){const r=evaluateRisk(state.profile),box=$("#screeningResult"); if(!box)return; box.className="decision "+r.className; box.innerHTML=`<strong>Resultado orientativo: ${r.level}</strong><br>${r.msg}`;}
function showValidation(errors){const box=$("#screeningResult"); box.className="decision red form-error"; box.innerHTML=`<strong>Faltan datos obligatorios:</strong><ul class="form-error-list">${errors.map(e=>`<li>${e}</li>`).join("")}</ul>`;}
function renderDistributionOptions(){
 const days=Number($("#generatorDays")?.value||3),sel=$("#generatorDistribution"),current=state.planMeta?.distribution||defaultDistributionForDays(days);
 if(!sel)return;
 const opts=distributionOptionsForDays(days);
 sel.innerHTML=opts.map(o=>`<option value="${escapeHtml(o.value)}" ${o.value===current?"selected":""}>${escapeHtml(o.label)}</option>`).join("");
 if(!opts.some(o=>o.value===current))sel.value=opts[0].value;
}
function renderGeneratorWeekdayOptions(){
 const days=Number($("#generatorDays")?.value||3);
 const box=$("#generatorWeekdayChoices");if(!box)return;
 const stored=Array.isArray(state.ui?.generator?.weekdaySchedule)?state.ui.generator.weekdaySchedule:[];
 const schedule=stored.length?Array.from(new Set(stored.map(Number).filter(i=>Number.isInteger(i)&&i>=0&&i<7))).sort((a,b)=>a-b):defaultWeekdaySchedule(days);
 box.innerHTML=WEEKDAYS_ES.map((name,i)=>`<label class="weekday-choice ${schedule.includes(i)?"selected":""}"><input type="checkbox" data-generator-weekday="${i}" ${schedule.includes(i)?"checked":""}><span>${name}</span></label>`).join("");
}
function renderSplitPreview(){
 const days=Number($("#generatorDays")?.value||3),focus=$("#generatorFocus")?.value||"general",goal=$("#generatorGoal")?.value||"Ganar masa muscular",distribution=$("#generatorDistribution")?.value||defaultDistributionForDays(days),opt=getDistribution(days,distribution),box=$("#splitPreview");
 if(!box)return;
 const stored=Array.isArray(state.ui?.generator?.weekdaySchedule)?state.ui.generator.weekdaySchedule:[];
 const schedule=stored.length?Array.from(new Set(stored.map(Number).filter(i=>Number.isInteger(i)&&i>=0&&i<7))).sort((a,b)=>a-b):defaultWeekdaySchedule(days);
 const profile={...state.profile,days:String(days),level:$("#generatorLevel")?.value||state.profile.level||"Intermedio",goal,focus,distribution:opt.value,weekdaySchedule:schedule};
 let preview=[];
 const complete=schedule.length===days;
 if(complete){
   try{preview=trainingEngine(days,profile.level,goal,focus,profile,0,opt.value)||[];}
   catch(err){console.error("Prime OS: preview engine error",err);}
 }
 const top=`<div class="decision ${complete?"green":"yellow"}"><strong>Propuesta de Semana 1</strong><br><span class="small-muted">${escapeHtml(opt.label)} · ${escapeHtml(opt.basis)}</span><br><span class="small-muted">${complete?"Días elegidos: "+schedule.map(i=>WEEKDAYS_ES[i]).join(" · "):"Selecciona exactamente "+days+" días de entrenamiento."}</span><br><span class="small-muted">La vista previa usa el mismo motor que materializa las 6 semanas y muestra la prescripción de la primera semana.</span></div>`;
 const body=complete?preview.map((day,i)=>{
   const weekday=WEEKDAYS_ES[schedule[i]]||`Sesión ${i+1}`;
   const exercises=(day.exercises||[]).map(e=>`<div class="preview-exercise"><strong>${escapeHtml(e.name)}</strong><span>${e.sets} series · ${escapeHtml(e.reps)} reps · RIR ${escapeHtml(e.targetRir||"—")} · descanso ${escapeHtml(e.rest)}</span><small>Fuentes: ${escapeHtml((e.evidenceRefs||[]).map(k=>EVIDENCE_KEYS[k]||k).join(", "))}</small></div>`).join("");
   return `<div class="split-day"><h4>${escapeHtml(weekday)} · ${escapeHtml(day.title||`Sesión ${i+1}`)}</h4><p>${summaryForSplit(day.title||"")}</p>${exercises||`<div class="warning"><strong>Sin ejercicios compatibles en la vista previa.</strong></div>`}</div>`;
 }).join(""):`<div class="decision"><strong>La generación está bloqueada hasta seleccionar exactamente ${days} días.</strong></div>`;
 box.innerHTML=top+body+`<div class="decision"><strong>Bloque de 6 semanas:</strong> Semana 1 Base · Semana 2 Progresión · Semana 3 Progresión de dosis · Semana 4 Intensificación · Semana 5 Consolidación · Semana 6 Reducción de fatiga.</div>`;
}
function renderSelectors(){
  ensureGeneratedRoutineIntegrity();
  const weekSelect=$("#weekSelect");
  if(weekSelect)weekSelect.innerHTML=state.weeks.map(w=>`<option value="${escapeHtml(w)}" ${w===state.selectedWeek?"selected":""}>${escapeHtml(w)}</option>`).join("");
  const planned=new Set(Object.keys(state.routine?.[state.selectedWeek]||{}).filter(k=>WEEKDAYS_ES.includes(k)));
  const daySelect=$("#daySelect");
  if(daySelect)daySelect.innerHTML=WEEKDAYS_ES.map(name=>`<option value="${escapeHtml(name)}" ${name===state.selectedDay?"selected":""}>${escapeHtml(name)}${planned.has(name)?" · Entrenamiento":" · Descanso"}</option>`).join("");
}
function currentDayObj(){
  const planned=state.routine[state.selectedWeek]?.[state.selectedDay];
  if(planned)return planned;
  return {title:"Descanso / sin entrenamiento programado",exercises:[],isRestDay:true,weekday:state.selectedDay};
}
function ensureCurrentDay(){if(!state.routine[state.selectedWeek])state.routine[state.selectedWeek]={}; if(!state.routine[state.selectedWeek][state.selectedDay])state.routine[state.selectedWeek][state.selectedDay]={title:"Día personalizado",exercises:[]}; return state.routine[state.selectedWeek][state.selectedDay];}
function renderEvidenceSettings(){
 const box=$("#evidenceList");
 if(box)box.innerHTML=EVIDENCE_REGISTRY.map((item,i)=>`<div class="evidence-item"><div class="evidence-head"><strong>${i+1}. ${escapeHtml(item.source)}</strong><span class="evidence-type">${escapeHtml(item.type)} · ${item.year}</span></div><h4>${escapeHtml(item.title)}</h4><p class="small-muted">${escapeHtml(item.id)}</p><p>${escapeHtml(item.use)}</p><div class="evidence-links"><a href="${item.url}" target="_blank" rel="noopener">PubMed / referencia</a>${item.sourceUrl?`<a href="${item.sourceUrl}" target="_blank" rel="noopener">Fuente institucional</a>`:""}</div></div>`).join("");
 const db=$("#evidenceDatabaseList");
 if(db)db.innerHTML=EVIDENCE_DATABASES.map(item=>`<div class="database-item"><a href="${item.url}" target="_blank" rel="noopener"><strong>${escapeHtml(item.name)}</strong></a><span>${escapeHtml(item.role)}</span></div>`).join("");
 const meta=$("#evidenceVersion");if(meta)meta.textContent="Registro de evidencia actualizado: "+EVIDENCE_VERSION;
}
function renderHome(){ $("#homePlanTitle").textContent=state.planMeta.generated?`${state.planMeta.goal} · ${state.planMeta.days} días`:"Sin rutina generada"; $("#homeDays").textContent=state.planMeta.generated?state.planMeta.days:"—"; $("#homeLevel").textContent=state.planMeta.generated?state.planMeta.level:"—"; $("#homeGoal").textContent=state.planMeta.generated?state.planMeta.goal:"—"; $("#homeRisk").textContent=state.profile.risk||"Sin evaluar";}
function exerciseOptions(group, selected){return (EXERCISE_LIBRARY[group]||EXERCISE_LIBRARY.General).map(e=>`<option value="${escapeHtml(e.name)}" ${e.name===selected?"selected":""}>${escapeHtml(e.name)}</option>`).join("");}
function libraryCard(e,idx,mode="routine"){
  hydrateExercise(e);
  return `<div class="exercise-row" data-index="${idx}">
    <h4>${idx+1}. ${escapeHtml(e.name)}</h4>
    <div class="exercise-meta"><span class="pill">${escapeHtml(e.group)}</span><span class="pill">Propuesto: ${e.sets} series</span><span class="pill">${escapeHtml(e.reps)}</span><span class="pill">${escapeHtml(e.rest)}</span><span class="pill">RIR objetivo: ${escapeHtml(e.targetRir||"—")}</span></div>
    ${mode==="register"?`<div class="register-prescription"><strong>Prescripción propuesta</strong><span>${e.sets} series · ${escapeHtml(e.reps)} reps · RIR objetivo ${escapeHtml(e.targetRir||"—")} · descanso ${escapeHtml(e.rest)} · ${escapeHtml(e.periodizationNote||e.phase||"fase del programa")}</span></div>`:""}
    <div class="library-card">
      <div class="library-grid three">
        <label>Grupo muscular
          <select data-lib-field="group">${MUSCLES.map(m=>`<option ${m===e.group?"selected":""}>${m}</option>`).join("")}</select>
        </label>
        <label>Ejercicio
          <select data-lib-field="name">${exerciseOptions(e.group,e.name)}</select>
        </label>
        <label>Intensidad / peso
          <select data-lib-field="loadLevel">
            <option ${e.loadLevel==="Bajo"?"selected":""}>Bajo</option>
            <option ${e.loadLevel==="Moderado"?"selected":""}>Moderado</option>
            <option ${e.loadLevel==="Alto"?"selected":""}>Alto</option>
          </select>
        </label>
      </div>
      <div class="library-info">
        <div class="library-info-row"><strong>Aparato</strong><span>${escapeHtml(e.equipment)}</span></div>
        <div class="library-info-row"><strong>Objetivo</strong><span>${escapeHtml(e.objective)}</span></div>
        <div class="library-info-row"><strong>Series / reps</strong><span>${e.sets} series · ${escapeHtml(e.reps)} · descanso ${escapeHtml(e.rest)}</span></div>
        <div class="library-info-row"><strong>RIR objetivo</strong><span>${escapeHtml(e.targetRir||"—")}</span></div><div class="library-info-row"><strong>Intensidad</strong><span>${escapeHtml(e.loadGuide || "Punto de partida adaptable al objetivo y RIR.")}</span></div><div class="library-info-row"><strong>Fundamento del motor</strong><span>${escapeHtml(e.trainingRationale||"Prescripción adaptable según objetivo, carga y contexto.")}</span></div><div class="library-info-row"><strong>Fuentes aplicadas</strong><span>${escapeHtml(evidenceRefText(e.evidenceRefs||[]))}</span></div>${e.restrictionNote?`<div class="library-info-row"><strong>Revisión por restricciones</strong><span>${escapeHtml(e.restrictionNote)}</span></div>`:""}
        <div class="library-info-row"><strong>Cómo hacerlo</strong><span>${escapeHtml(e.how)}</span></div>
        <div class="library-info-row"><strong>Recomendación</strong><span>${escapeHtml(e.recommendation)}</span></div>
      </div>
      <button class="ghost manual-toggle" type="button">Editar detalles manualmente</button>
      <div class="manual-fields">
        <div class="field-labels"><span>Ejercicio</span><span>Grupo</span><span>Series</span><span>Reps</span><span>Descanso</span></div>
        <div class="exercise-edit">
          <input data-field="name" value="${escapeHtml(e.name)}" placeholder="Ejercicio">
          <select data-field="group">${MUSCLES.map(m=>`<option ${m===e.group?"selected":""}>${m}</option>`).join("")}</select>
          <input data-field="sets" type="number" min="1" value="${e.sets}">
          <input data-field="reps" value="${escapeHtml(e.reps)}" placeholder="Reps">
          <input data-field="rest" value="${escapeHtml(e.rest)}" placeholder="Descanso">
        </div>
        <textarea data-field="equipment" placeholder="Aparato recomendado">${escapeHtml(e.equipment)}</textarea>
        <textarea data-field="objective" placeholder="Objetivo">${escapeHtml(e.objective)}</textarea>
        <textarea data-field="how" placeholder="Cómo hacerlo">${escapeHtml(e.how)}</textarea>
        <textarea data-field="recommendation" placeholder="Recomendación">${escapeHtml(e.recommendation)}</textarea>
        <textarea data-field="note" placeholder="Nota extra">${escapeHtml(e.note||"")}</textarea>
      </div>
    </div>
    ${mode==="register" ? `<div class="register-sets">${Array.from({length:Number(e.sets)||1},(_,s)=>`<div class="set-line" data-set-index="${s}"><span>Serie ${s+1}<small>Objetivo: ${escapeHtml(e.reps)} · RIR ${escapeHtml(e.targetRir||"—")}</small></span><input data-set="${s}" data-field="weight" placeholder="Peso real"><input data-set="${s}" data-field="repsDone" placeholder="Reps reales"><input data-set="${s}" data-field="rir" placeholder="RIR real"><input data-set="${s}" data-field="pain" placeholder="Dolor 0-10"><label><input data-set="${s}" data-field="done" type="checkbox"> Hecha</label><button type="button" class="ghost set-remove" data-set-index="${s}">Quitar serie</button></div>`).join("")}</div><div class="set-actions"><button type="button" class="ghost set-add">+ Añadir serie</button></div><textarea data-field="sessionNotes" placeholder="Observaciones del ejercicio"></textarea>` : ""}
    <div class="actions-row"><button class="danger ${mode==="register"?"remove-register-exercise":"remove-exercise"}">Quitar</button></div>
  </div>`;
}
function attachLibraryEvents(container, mode="routine"){
  function setExerciseForRow(row, newExercise){
    const idx=Number(row.dataset.index);
    if(mode==="register"){
      const draft=getDraft();
      const source=row.dataset.source || "routine";
      if(source==="extra"){
        if(!draft.extra[idx]) draft.extra[idx]={exercise:newExercise,sets:[],notes:""};
        draft.extra[idx].exercise=newExercise;
      }else{
        const key=row.dataset.key;
        if(!draft.routine[key]) draft.routine[key]={exercise:newExercise,sets:[],notes:""};
        draft.routine[key].exercise=newExercise;
        draft.routine[key].removed=false;
      }
    }else{
      const day=ensureCurrentDay();
      day.exercises[idx]=newExercise;
    }
    saveState();
    renderAll();
  }

  container.querySelectorAll("[data-lib-field='group']").forEach(sel=>sel.addEventListener("change",()=>{
    const row=sel.closest(".exercise-row"), group=sel.value;
    setExerciseForRow(row, defaultExercise(group));
  }));

  container.querySelectorAll("[data-lib-field='name']").forEach(sel=>sel.addEventListener("change",()=>{
    const row=sel.closest(".exercise-row"), group=row.querySelector("[data-lib-field='group']").value;
    const item=(EXERCISE_LIBRARY[group]||[]).find(e=>e.name===sel.value) || EXERCISE_LIBRARY[group]?.[0] || EXERCISE_LIBRARY.General[0];
    const level=row.querySelector("[data-lib-field='loadLevel']")?.value || "Moderado";
    setExerciseForRow(row, applyLoadToExercise(makeExerciseFromLibrary(item), level));
  }));

  container.querySelectorAll("[data-lib-field='loadLevel']").forEach(sel=>sel.addEventListener("change",()=>{
    const row=sel.closest(".exercise-row"), idx=Number(row.dataset.index);
    if(mode==="register"){
      const draft=getDraft();
      const source=row.dataset.source || "routine";
      let ex;
      if(source==="extra"){
        ex=draft.extra[idx]?.exercise || defaultExercise("Pecho");
        if(!draft.extra[idx]) draft.extra[idx]={exercise:ex,sets:[],notes:""};
        draft.extra[idx].exercise=applyLoadToExercise(ex, sel.value);
      }else{
        const key=row.dataset.key;
        const base=getRegisterPlan().obj.exercises[idx];
        ex=draft.routine[key]?.exercise || JSON.parse(JSON.stringify(base));
        if(!draft.routine[key]) draft.routine[key]={exercise:ex,sets:[],notes:""};
        draft.routine[key].exercise=applyLoadToExercise(ex, sel.value);
      }
    }else{
      const day=ensureCurrentDay();
      if(day.exercises[idx]) applyLoadToExercise(day.exercises[idx], sel.value);
    }
    saveState();
    renderAll();
  }));

  container.querySelectorAll(".manual-toggle").forEach(btn=>btn.addEventListener("click",()=>btn.nextElementSibling.classList.toggle("open")));
  if(mode==="register"){
    container.querySelectorAll(".set-add").forEach(btn=>btn.addEventListener("click",()=>{
      const row=btn.closest(".exercise-row");if(!row)return;
      const lines=row.querySelectorAll(".set-line"),template=lines[lines.length-1];if(!template)return;
      const next=lines.length,clone=template.cloneNode(true);clone.dataset.setIndex=String(next);
      clone.querySelectorAll("[data-set]").forEach(el=>el.dataset.set=String(next));
      clone.querySelectorAll("input").forEach(el=>{if(el.type==="checkbox")el.checked=false;else el.value="";});
      const rm=clone.querySelector(".set-remove");if(rm)rm.dataset.setIndex=String(next);
      row.querySelector(".register-sets")?.appendChild(clone);collectRegisterDraft();
    }));
    container.querySelectorAll(".set-remove").forEach(btn=>btn.addEventListener("click",()=>{
      const row=btn.closest(".exercise-row");if(!row)return;
      const lines=row.querySelectorAll(".set-line");if(lines.length<=1){alert("Cada ejercicio debe conservar al menos una serie.");return;}
      btn.closest(".set-line")?.remove();
      row.querySelectorAll(".set-line").forEach((line,i)=>{
        line.dataset.setIndex=String(i);line.querySelectorAll("[data-set]").forEach(el=>el.dataset.set=String(i));
        const label=line.querySelector("span");if(label)label.textContent=`Serie ${i+1}`;
        const rm=line.querySelector(".set-remove");if(rm)rm.dataset.setIndex=String(i);
      });
      collectRegisterDraft();
    }));
  }
  container.querySelectorAll("[data-field]").forEach(el=>{el.addEventListener("input",()=>updateManualFields(container, mode));el.addEventListener("change",()=>updateManualFields(container, mode));});
}
function updateManualFields(container, mode="routine"){
  if(mode==="register"){
    collectRegisterDraft();
    return;
  }
  const day=ensureCurrentDay();
  container.querySelectorAll(".exercise-row").forEach(row=>{
    const idx=Number(row.dataset.index); if(!day.exercises[idx]) return;
    row.querySelectorAll(".manual-fields [data-field]").forEach(el=>{
      const f=el.dataset.field;
      day.exercises[idx][f]=f==="sets"?Number(el.value||1):el.value;if(f==="reps")day.exercises[idx].userOverrideReps=true;if(f==="rest")day.exercises[idx].userOverrideRest=true;
      if(f==="recommendation") day.exercises[idx].note=el.value;
    });
  });
  saveState();
}
function routineExerciseAdder(){
  const group=state.ui?.routineAdderGroup||"Pecho";
  const selectedName=state.ui?.routineAdderExercise||EXERCISE_LIBRARY[group]?.[0]?.name||"";
  return `<div class="routine-add-panel">
    <div><strong>Añadir ejercicio a la rutina maestra</strong><span>Selecciona músculo y ejercicio. La prescripción se calcula según objetivo, semana y fase actual.</span></div>
    <div class="routine-add-grid">
      <label>Músculo<select id="routineAddGroup">${MUSCLES.map(m=>`<option ${m===group?"selected":""}>${escapeHtml(m)}</option>`).join("")}</select></label>
      <label>Ejercicio<select id="routineAddExercise">${exerciseOptions(group,selectedName)}</select></label>
      <button type="button" class="ghost" id="routineAddConfirm">+ Añadir a rutina</button>
    </div>
  </div>`;
}
function attachRoutineExerciseAdder(box){
  const group=box.querySelector("#routineAddGroup"),name=box.querySelector("#routineAddExercise"),btn=box.querySelector("#routineAddConfirm");
  group?.addEventListener("change",()=>{
    state.ui=state.ui||{};state.ui.routineAdderGroup=group.value;
    state.ui.routineAdderExercise=EXERCISE_LIBRARY[group.value]?.[0]?.name||"";
    if(name)name.innerHTML=exerciseOptions(group.value,state.ui.routineAdderExercise);
    saveState();
  });
  btn?.addEventListener("click",()=>{
    const g=group?.value||"Pecho",n=name?.value||EXERCISE_LIBRARY[g]?.[0]?.name;
    const item=(EXERCISE_LIBRARY[g]||[]).find(e=>e.name===n)||EXERCISE_LIBRARY[g]?.[0];
    if(!item)return;
    const day=ensureCurrentDay(),weekIndex=Number(day.weekIndex??0),goal=state.planMeta?.goal||"Salud general",level=state.planMeta?.level||"Intermedio";
    const ex=makeExerciseFromLibrary(item);
    hydrateExercise(ex,{goal,level,weekIndex});
    ex.sets=prescriptionSets(ex,goal,level,weekIndex);
    ex.loadLevel=periodizationForWeek(goal,weekIndex).loadLevel;
    applyLoadToExercise(ex,ex.loadLevel,{goal,level,weekIndex});
    day.exercises.push(ex);
    state.ui=state.ui||{};state.ui.routineAdderGroup=g;state.ui.routineAdderExercise=n;
    saveState();renderAll();
  });
}
function renderRoutine(){
  ensureGeneratedRoutineIntegrity();
  ensurePlannerSelection();
  const day=currentDayObj(), box=$("#routineList"); if(!box)return;
  const hasAnyRoutine=Object.values(state.routine||{}).some(week=>Object.values(week||{}).some(item=>(item?.exercises||[]).length>0));
  if(!hasAnyRoutine){
    box.innerHTML=`<div class="decision yellow routine-empty-state"><strong>Aún no hay una rutina cargada.</strong><br><span class="small-muted">Completa el formulario o entra en Crear rutina base para materializar la propuesta de 6 semanas con la prescripción del motor.</span><div class="actions-row"><button type="button" class="primary" id="goCreateRoutineBtn">Crear rutina base</button></div></div>`;
    box.querySelector("#goCreateRoutineBtn")?.addEventListener("click",()=>go("crear"));
    return;
  }
  const rows=(day.exercises||[]).map((e,idx)=>libraryCard(e,idx,"routine")).join("");
  const header=`<div class="split-day"><h4>${escapeHtml(state.selectedWeek)} · ${escapeHtml(state.selectedDay)} · ${escapeHtml(day.title)}</h4><p class="small-muted">${day.isRestDay?"No hay una sesión planificada para este día. Selecciona un día marcado como Entrenamiento.":"Rutina generada con prescripción de series, reps, RIR, descanso, fase y fuentes aplicadas. Los cambios aquí afectan la planificación, no borran el historial."}</p></div>`;
  const body=day.isRestDay
    ? `<div class="decision"><strong>${escapeHtml(state.selectedDay)} es un día de descanso en esta planificación.</strong><br><span class="small-muted">La sesión está disponible en el día marcado como Entrenamiento.</span></div>`
    : `${routineExerciseAdder()}${rows||`<div class="warning card"><strong>Este día no tiene ejercicios.</strong><span>La rutina generada se puede reparar desde el motor.</span></div>`}`;
  box.innerHTML=header+body;
  if(!day.isRestDay){
    attachRoutineExerciseAdder(box);
    attachLibraryEvents(box,"routine");
    box.querySelectorAll(".remove-exercise").forEach(btn=>btn.addEventListener("click",()=>{
      const idx=Number(btn.closest(".exercise-row").dataset.index);
      const current=ensureCurrentDay();current.exercises.splice(idx,1);saveState();renderAll();
    }));
  }
}


function localDateISO(){const d=new Date(),p=n=>String(n).padStart(2,"0");return d.getFullYear()+"-"+p(d.getMonth()+1)+"-"+p(d.getDate());}

function weekdayIndex(dateISO){
  const d=new Date(String(dateISO||"")+"T12:00:00");
  if(Number.isNaN(d.getTime()))return -1;
  return (d.getDay()+6)%7;
}
function weekdayLabel(dateISO){const i=weekdayIndex(dateISO);return i>=0?WEEKDAYS_ES[i]:"";}
function dateForWeekday(target,currentISO){
  const base=new Date(String(currentISO||localDateISO())+"T12:00:00"),current=weekdayIndex(currentISO||localDateISO());
  if(current<0)return localDateISO();
  const t=Math.max(0,Math.min(6,Number(target)||0)),delta=(t-current+7)%7;
  base.setDate(base.getDate()+delta);
  const p=n=>String(n).padStart(2,"0");
  return base.getFullYear()+"-"+p(base.getMonth()+1)+"-"+p(base.getDate());
}
function modalityForDays(days){const n=Math.max(1,Math.min(6,Number(days)||3));return n===1?"1 día":`${n} días`;}
function ensureRegistrationState(){
  state=normalizeStateShape(state);
  state.ui=state.ui||{};state.ui.register=state.ui.register||{};
  const r=state.ui.register,planDays=Number(state.planMeta?.days||state.profile?.days||3);
  r.week=state.weeks.includes(r.week)?r.week:(state.selectedWeek||state.weeks[0]||"Semana 1");
  if(!r.performedDate)r.performedDate=localDateISO();
  r.weekday=weekdayIndex(r.performedDate)>=0?weekdayIndex(r.performedDate):0;
  r.modality=modalityForDays(planDays);
  const days=Object.keys(state.routine[r.week]||{});
  r.sessionKey=days.includes(r.sessionKey)?r.sessionKey:(days[0]||"Día 1");
  return r;
}
function getRegisterPlan(){
  const r=ensureRegistrationState();
  const obj=state.routine[r.week]?.[r.sessionKey]||{title:"Sin rutina",exercises:[]};
  return {config:r,obj};
}
function setRegisterSelection(field,value){
  const r=ensureRegistrationState();r[field]=value;
  if(field==="week"){
    const days=Object.keys(state.routine[value]||{});
    if(!days.includes(r.sessionKey))r.sessionKey=days.find(d=>WEEKDAYS_ES.includes(d))||days[0]||"Lunes";
  }
  if(field==="sessionKey"){
    const days=Object.keys(state.routine[r.week]||{});
    if(!days.includes(r.sessionKey))r.sessionKey=days.find(d=>WEEKDAYS_ES.includes(d))||days[0]||"Lunes";
  }
  saveState();renderAll();
}
function populateRegisterControls(){
  const r=ensureRegistrationState(),planDays=Number(state.planMeta?.days||state.profile?.days||3),dist=distributionLabel(planDays,state.planMeta?.distribution);
  const week=$("#registerWeek"),date=$("#registerPerformedDate"),weekday=$("#registerWeekday"),mod=$("#registerModality"),ses=$("#registerSession"),status=$("#registerContextStatus");
  if(week)week.innerHTML=state.weeks.map(w=>`<option value="${escapeHtml(w)}" ${w===r.week?"selected":""}>${escapeHtml(w)}</option>`).join("");
  if(date)date.value=r.performedDate||localDateISO();
  if(weekday)weekday.innerHTML=WEEKDAYS_ES.map((name,i)=>`<option value="${i}" ${i===r.weekday?"selected":""}>${name}</option>`).join("");
  if(mod)mod.innerHTML=`<option value="${escapeHtml(modalityForDays(planDays))}" selected>${escapeHtml(modalityForDays(planDays))}</option>`;
  if(ses){
    const days=Object.entries(state.routine[r.week]||{}).filter(([key])=>WEEKDAYS_ES.includes(key));
    ses.innerHTML=days.length?days.map(([key,obj])=>`<option value="${escapeHtml(key)}" ${key===r.sessionKey?"selected":""}>${escapeHtml(obj.title||"Sesión")} · ${escapeHtml(key)}</option>`).join(""):`<option value="">Sin sesión planificada</option>`;
  }
  if(status){
    status.innerHTML=`<strong>${escapeHtml(weekdayLabel(r.performedDate)||"Día")}</strong> · realizado el ${escapeHtml(r.performedDate)} · planificación: ${escapeHtml(r.sessionKey)} · distribución: ${escapeHtml(dist)}`;
  }
}

function draftKey(){
  const r=ensureRegistrationState();
  const key=`${r.week}__${r.performedDate}__${r.sessionKey}`;
  const legacy=`${r.week}__${r.sessionKey}`;
  if(state.sessionDrafts?.[legacy]&&!state.sessionDrafts?.[key])state.sessionDrafts[key]=JSON.parse(JSON.stringify(state.sessionDrafts[legacy]));
  return key;
}
function getDraft(){
  const key=draftKey();if(!state.sessionDrafts)state.sessionDrafts={};
  if(!state.sessionDrafts[key])state.sessionDrafts[key]={routine:{},extra:[]};
  return state.sessionDrafts[key];
}

function routineExerciseKey(e, idx){
  return e.id || `${idx}_${e.name}_${e.group}`;
}
function collectRegisterDraft(){
  const draft=getDraft();

  $$("#registerList .exercise-row").forEach(row=>{
    const idx=Number(row.dataset.index);
    const source=row.dataset.source || "routine";
    const sourceKey=row.dataset.key || "";
    const readExerciseFromRow = () => {
      const group=row.querySelector("[data-lib-field='group']")?.value || row.querySelector("[data-field='group']")?.value || "General";
      const name=row.querySelector("[data-lib-field='name']")?.value || row.querySelector("[data-field='name']")?.value || "Ejercicio";
      const level=row.querySelector("[data-lib-field='loadLevel']")?.value || "Moderado";
      const item=(EXERCISE_LIBRARY[group]||[]).find(x=>x.name===name) || {name,group,equipment:"Equipo a definir",sets:3,reps:"10-12",rest:"90 s",objective:"Ejercicio personalizado.",how:"Describe cómo se ejecuta.",recommendation:"Edita la recomendación."};
      let ex=makeExerciseFromLibrary(item);
      const manualSets=row.querySelector("[data-field='sets']")?.value;
      const manualReps=row.querySelector("[data-field='reps']")?.value;
      const manualRest=row.querySelector("[data-field='rest']")?.value;
      if(manualSets)ex.sets=Number(manualSets||ex.sets);
      if(manualReps){ex.reps=manualReps;ex.userOverrideReps=true;}
      if(manualRest){ex.rest=manualRest;ex.userOverrideRest=true;}
      const plannedExercise=source==="routine"?getRegisterPlan().obj.exercises[idx]:null;
      applyLoadToExercise(ex,level,{goal:state.planMeta?.goal||ex.planGoal,level:state.planMeta?.level||ex.planLevel,weekIndex:plannedExercise?.weekIndex??ex.weekIndex??0});
      return ex;
    };

    const sets=[];
    row.querySelectorAll(".set-line").forEach(line=>{
      const get=f=>line.querySelector(`[data-field="${f}"]`);
      sets.push({
        weight:get("weight")?.value || "",
        reps:get("repsDone")?.value || "",
        rir:get("rir")?.value || "",
        pain:get("pain")?.value || "",
        done:get("done")?.checked || false
      });
    });

    const payload={
      exercise: readExerciseFromRow(),
      sets,
      notes: row.querySelector('[data-field="sessionNotes"]')?.value || ""
    };

    if(source==="extra"){
      draft.extra[idx]=payload;
    }else{
      draft.routine[sourceKey]=payload;
    }
  });
  saveState();
}
function getDraftForExercise(e, idx){
  const draft=getDraft();
  const key=routineExerciseKey(e, idx);
  return draft.routine[key] || null;
}
function applyDraftToSetLine(setLine, data){
  if(!data) return;
  const set = data;
  const setVal=(f,v)=>{
    const el=setLine.querySelector(`[data-field="${f}"]`);
    if(!el) return;
    if(el.type==="checkbox") el.checked=!!v;
    else el.value=v ?? "";
  };
  setVal("weight", set.weight);
  setVal("repsDone", set.reps);
  setVal("rir", set.rir);
  setVal("pain", set.pain);
  setVal("done", set.done);
}
function updateRegisterDraftButtonText(){
  const btn=$("#updateSessionDraftBtn");
  if(!btn) return;
  btn.textContent="Actualizar cambios";
}

function registerExerciseAdder(){
  const group=state.ui?.registerAdderGroup||"Pecho";
  const selectedName=state.ui?.registerAdderExercise||EXERCISE_LIBRARY[group]?.[0]?.name||"";
  return `<div class="register-add-panel">
    <div class="register-add-head"><strong>Añadir ejercicio a esta sesión</strong><span>Se agrega solo al registro de esta sesión y no modifica la rutina maestra. Su prescripción de series, reps, RIR y descanso usa el mismo objetivo y fase.</span></div>
    <div class="register-add-grid">
      <label>Músculo<select id="registerAddGroup">${MUSCLES.map(m=>`<option ${m===group?"selected":""}>${escapeHtml(m)}</option>`).join("")}</select></label>
      <label>Ejercicio<select id="registerAddExercise">${exerciseOptions(group,selectedName)}</select></label>
      <button type="button" class="ghost" id="registerAddConfirm">+ Añadir ejercicio</button>
    </div>
  </div>`;
}
function attachRegisterExerciseAdder(box){
  const group=box.querySelector("#registerAddGroup"),name=box.querySelector("#registerAddExercise"),btn=box.querySelector("#registerAddConfirm");
  group?.addEventListener("change",()=>{
    state.ui=state.ui||{};
    state.ui.registerAdderGroup=group.value;
    state.ui.registerAdderExercise=EXERCISE_LIBRARY[group.value]?.[0]?.name||"";
    if(name)name.innerHTML=exerciseOptions(group.value,state.ui.registerAdderExercise);
    saveState();
  });
  name?.addEventListener("change",()=>{
    state.ui=state.ui||{};
    state.ui.registerAdderExercise=name.value;
    saveState();
  });
  btn?.addEventListener("click",()=>{
    const r=ensureRegistrationState();
    const weekIndex=Math.max(0,Number(String(r.week||"Semana 1").match(/\d+/)?.[0]||1)-1);
    const goal=state.planMeta?.goal||"Salud general",level=state.planMeta?.level||"Intermedio";
    const g=group?.value||"Pecho",n=name?.value||"";
    const item=(EXERCISE_LIBRARY[g]||[]).find(e=>e.name===n)||EXERCISE_LIBRARY[g]?.[0];
    if(!item)return;
    const ex=makeExerciseFromLibrary(item);
    hydrateExercise(ex,{goal,level,weekIndex});
    ex.sets=prescriptionSets(ex,goal,level,weekIndex);
    ex.loadLevel=periodizationForWeek(goal,weekIndex).loadLevel;
    applyLoadToExercise(ex,ex.loadLevel,{goal,level,weekIndex});
    const draft=getDraft();
    draft.extra=draft.extra||[];
    draft.extra.unshift({exercise:ex,sets:[],notes:""});
    saveState();
    renderAll();
  });
}
function renderRegister(){
  ensureGeneratedRoutineIntegrity();
  const plan=getRegisterPlan(),day=plan.obj,box=$("#registerList");if(!box)return;
  populateRegisterControls();
  const draft=getDraft();
  const top=registerExerciseAdder();
  const routineRows=(day.exercises||[]).map((e,idx)=>{
    hydrateExercise(e);
    const key=routineExerciseKey(e,idx),d=draft.routine[key],renderExercise=d?.exercise?d.exercise:e;
    return libraryCard(renderExercise,idx,"register").replace('class="exercise-row"',`class="exercise-row" data-source="routine" data-key="${escapeHtml(key)}"`).replace('<h4>','<span class="draft-badge">Rutina base</span><h4>');
  }).join("");
  const extraRows=(draft.extra||[]).map((item,idx)=>{const e=item.exercise||defaultExercise("Pecho");return libraryCard(e,idx,"register").replace('class="exercise-row"','class="exercise-row extra-session" data-source="extra"').replace('<h4>','<span class="draft-badge">Extra de sesión</span><h4>');}).join("");
  if(!(day.exercises||[]).length&&!(draft.extra||[]).length)box.innerHTML=top+'<div class="warning card"><strong>Sin rutina para este entrenamiento.</strong> Puedes añadir un ejercicio manual o revisar la planificación seleccionada.</div>';else box.innerHTML=top+routineRows+extraRows;
  $$("#registerList .exercise-row").forEach(row=>{
    const source=row.dataset.source||"routine",idx=Number(row.dataset.index),saved=source==="extra"?(draft.extra?.[idx]||null):(draft.routine?.[row.dataset.key]||null);
    if(saved?.sets)row.querySelectorAll(".set-line").forEach((line,i)=>applyDraftToSetLine(line,saved.sets[i]));
    if(saved?.notes&&row.querySelector('[data-field="sessionNotes"]'))row.querySelector('[data-field="sessionNotes"]').value=saved.notes;
  });
  attachRegisterExerciseAdder(box);
  attachLibraryEvents(box,"register");
  box.querySelectorAll("input,select,textarea").forEach(el=>{el.addEventListener("input",collectRegisterDraft);el.addEventListener("change",collectRegisterDraft);});
  box.querySelectorAll(".remove-register-exercise").forEach(btn=>btn.addEventListener("click",()=>{
    collectRegisterDraft();const row=btn.closest(".exercise-row"),source=row.dataset.source||"routine",idx=Number(row.dataset.index),draft=getDraft();
    if(source==="extra")draft.extra.splice(idx,1);else{const key=row.dataset.key;if(!draft.routine[key])draft.routine[key]={exercise:day.exercises[idx],sets:[],notes:""};draft.routine[key].removed=true;draft.routine[key].sets=[];}
    saveState();renderAll();
  }));
  $$("#registerList .exercise-row[data-source='routine']").forEach(row=>{if(getDraft().routine?.[row.dataset.key]?.removed)row.remove();});
}


function buildExerciseSnapshot(ex){return JSON.parse(JSON.stringify({name:ex.name,group:ex.group,equipment:ex.equipment,objective:ex.objective,how:ex.how,recommendation:ex.recommendation,note:ex.note,sets:ex.sets,reps:ex.reps,rest:ex.rest,loadLevel:ex.loadLevel,targetRir:ex.targetRir,suggestedReps:ex.suggestedReps,suggestedRest:ex.suggestedRest}));}
function saveSession(){
  collectRegisterDraft();
  const plan=getRegisterPlan(),day=plan.obj,r=plan.config,draft=getDraft(),exercises=[];
  (day.exercises||[]).forEach((base,idx)=>{
    const key=routineExerciseKey(base,idx),saved=draft.routine[key];if(saved?.removed)return;
    const ex=saved?.exercise||base,sets=(saved?.sets||[]).map(s=>({...s}));
    exercises.push({name:ex.name,group:ex.group,target:`${ex.sets} x ${ex.reps}`,notes:saved?.notes||"",sets,exerciseSnapshot:buildExerciseSnapshot(ex)});
  });
  (draft.extra||[]).forEach(item=>{const ex=item.exercise||defaultExercise("Pecho");exercises.push({name:ex.name,group:ex.group,target:`Extra sesión · ${ex.sets} x ${ex.reps}`,notes:item.notes||"",sets:(item.sets||[]).map(s=>({...s})),extra:true,exerciseSnapshot:buildExerciseSnapshot(ex)});});

  const duplicateIndex=state.sessions.findIndex(s=>s.week===r.week&&s.performedDate===r.performedDate);
  const editingIndex=r.editingSessionId?state.sessions.findIndex(s=>s.id===r.editingSessionId):-1;
  if(duplicateIndex>=0&&editingIndex<0){
    const existing=state.sessions[duplicateIndex];
    const answer=confirm(`Ya existe un registro para ${r.week} el ${r.performedDate}. ¿Abrir ese registro para editarlo?`);
    if(answer){openSessionForEdit(existing.id);}
    return;
  }
  const useIndex=editingIndex>=0?editingIndex:duplicateIndex;
  const id=useIndex>=0?state.sessions[useIndex].id:Date.now();
  const sessionPayload={
    id,draftKey:draftKey(),date:new Date().toLocaleString("es-CL"),performedDate:r.performedDate,performedDay:weekdayLabel(r.performedDate),
    week:r.week,weekId:r.week,day:r.sessionKey,plannedDay:r.sessionKey,title:day.title,modality:r.modality,sessionKey:r.sessionKey,exercises
  };
  if(useIndex>=0)state.sessions[useIndex]=sessionPayload;else state.sessions.unshift(sessionPayload);
  state.ui.register.editingSessionId=null;
  saveState();alert(useIndex>=0?"Sesión actualizada.":"Sesión guardada.");renderAll();
}
function loadSessionDraft(session){
  const plan=state.routine[session.week]?.[session.sessionKey||session.day]||{exercises:[]};
  const draft={routine:{},extra:[]};
  (session.exercises||[]).forEach(item=>{
    const ex=item.exerciseSnapshot||{name:item.name,group:item.group,sets:Math.max(1,item.sets?.length||3),reps:"10-12",rest:"90 s",loadLevel:"Moderado",targetRir:"—"};
    const idx=(plan.exercises||[]).findIndex(e=>e.name===item.name&&e.group===item.group);
    const payload={exercise:ex,sets:(item.sets||[]).map(s=>({...s})),notes:item.notes||""};
    if(item.extra||idx<0)draft.extra.push(payload);else draft.routine[routineExerciseKey(plan.exercises[idx],idx)]=payload;
  });
  state.sessionDrafts[draftKey()]=draft;
}
function openSessionForEdit(id){
  const session=state.sessions.find(s=>s.id===id);if(!session)return;
  const r=ensureRegistrationState();r.week=session.week;r.performedDate=session.performedDate||localDateISO();r.modality=session.modality||modalityForDays(state.planMeta?.days||3);r.sessionKey=session.sessionKey||session.day;r.editingSessionId=session.id;
  loadSessionDraft(session);saveState();go("registrar");renderAll();
}
function exportSessionExcel(session){
  const wb=XLSX.utils.book_new(),rows=[];
  (session.exercises||[]).forEach(e=>(e.sets||[]).forEach((s,i)=>rows.push({SesionID:session.id,Fecha:session.date,FechaRealizada:session.performedDate,DiaRealizado:session.performedDay,Semana:session.week,DiaPlanificado:session.plannedDay,Modalidad:session.modality,Sesion:session.title,Ejercicio:e.name,Grupo:e.group,Serie:i+1,Peso:s.weight,Reps:s.reps,RIR:s.rir,Dolor:s.pain,Hecha:s.done?"Sí":"No",Observaciones:e.notes||""})));
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(rows),"Sesion");XLSX.writeFile(wb,`Prime_OS_${session.week}_${session.performedDate||"registro"}.xlsx`);
}
function exportSessionWord(session){
  const rows=(session.exercises||[]).map(e=>`<h3>${escapeHtml(e.name)}</h3><p>${escapeHtml(e.group)} · ${escapeHtml(e.target||"")}</p><table><tr><th>Serie</th><th>Peso</th><th>Reps</th><th>RIR</th><th>Dolor</th><th>Hecha</th></tr>${(e.sets||[]).map((s,i)=>`<tr><td>${i+1}</td><td>${escapeHtml(s.weight)}</td><td>${escapeHtml(s.reps)}</td><td>${escapeHtml(s.rir)}</td><td>${escapeHtml(s.pain)}</td><td>${s.done?"Sí":"No"}</td></tr>`).join("")}</table><p>${escapeHtml(e.notes||"")}</p>`).join("");
  const html=`<!doctype html><html><head><meta charset="utf-8"><title>Prime OS · Sesión</title><style>body{font-family:Arial;color:#111;line-height:1.4}table{border-collapse:collapse;width:100%;margin:8px 0 18px}th,td{border:1px solid #ccc;padding:6px;text-align:left}</style></head><body><h1>Prime OS · Sesión</h1><p><strong>Semana:</strong> ${escapeHtml(session.week)} · <strong>Día realizado:</strong> ${escapeHtml(session.performedDate||session.date)} · <strong>Sesión:</strong> ${escapeHtml(session.title)}</p>${rows}</body></html>`;
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["\ufeff",html],{type:"application/msword"}));a.download=`Prime_OS_${session.week}_${session.performedDate||"sesion"}.doc`;a.click();URL.revokeObjectURL(a.href);
}
function exportWeekExcel(week){
  const sessions=state.sessions.filter(s=>s.week===week),rows=[];sessions.forEach(session=>(session.exercises||[]).forEach(e=>(e.sets||[]).forEach((s,i)=>rows.push({SesionID:session.id,Fecha:session.date,FechaRealizada:session.performedDate,DiaRealizado:session.performedDay,Semana:session.week,DiaPlanificado:session.plannedDay,Modalidad:session.modality,Sesion:session.title,Ejercicio:e.name,Grupo:e.group,Serie:i+1,Peso:s.weight,Reps:s.reps,RIR:s.rir,Dolor:s.pain,Hecha:s.done?"Sí":"No",Observaciones:e.notes||""}))));
  const wb=XLSX.utils.book_new();
  const planRows=[];Object.entries(state.routine[week]||{}).forEach(([day,obj])=>(obj.exercises||[]).forEach(e=>planRows.push({Semana:week,Día:day,Sesión:obj.title,Ejercicio:e.name,Grupo:e.group,Series:e.sets,Reps:e.reps,Descanso:e.rest,RIR_objetivo:e.targetRir||""})));
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet([{Semana:week,Sesiones:sessions.length,VolumenCarga:volumeSummary(week).loadVolume}]),"Resumen");
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(planRows),"Planificacion");
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(rows),"Sesiones");
  XLSX.writeFile(wb,`Prime_OS_${week}_semanal.xlsx`);
}
function exportWeekWord(week){
  const sessions=state.sessions.filter(s=>s.week===week),v=volumeSummary(week);
  const body=sessions.map(s=>`<h2>${escapeHtml(s.performedDate||s.date)} · ${escapeHtml(s.title)}</h2><p>${escapeHtml(s.modality||"")} · ${escapeHtml(s.performedDay||"")}</p><ul>${(s.exercises||[]).map(e=>`<li><strong>${escapeHtml(e.name)}</strong> — ${escapeHtml(e.target||"")} — ${(e.sets||[]).filter(x=>x.done).length} series realizadas</li>`).join("")}</ul>`).join("");
  const html=`<!doctype html><html><head><meta charset="utf-8"><title>Prime OS · ${escapeHtml(week)}</title></head><body><h1>Prime OS · ${escapeHtml(week)}</h1><p>Sesiones: ${sessions.length} · Volumen de carga registrado: ${Math.round(v.loadVolume)}</p>${body||"<p>No hay sesiones registradas.</p>"}</body></html>`;
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["\ufeff",html],{type:"application/msword"}));a.download=`Prime_OS_${week}_semanal.doc`;a.click();URL.revokeObjectURL(a.href);
}

function targetSeries(scope){
  const targets={}; MUSCLES.forEach(m=>targets[m]=0);
  const weekData=state.routine[state.selectedWeek]||{};
  const days = scope==="day" ? {[state.selectedDay]: weekData[state.selectedDay]} : weekData;
  Object.values(days||{}).forEach(day=>{
    (day?.exercises||[]).forEach(e=>{
      hydrateExercise(e);
      targets[e.group]=(targets[e.group]||0)+Number(e.sets||0);
    });
  });
  return targets;
}
function doneSeries(scope){
  const totals={}; MUSCLES.forEach(m=>totals[m]=0);
  state.sessions
    .filter(s=>s.week===state.selectedWeek && (scope==="week" || s.day===state.selectedDay))
    .forEach(session=>session.exercises.forEach(ex=>{
      totals[ex.group]=(totals[ex.group]||0)+ex.sets.filter(s=>s.done).length;
    }));
  return totals;
}
function progressClass(pct){
  if(pct < 40) return "red";
  if(pct < 80) return "yellow";
  return "green";
}

function estimate1RM(weight,reps){const w=Number(weight),r=Number(reps);if(!Number.isFinite(w)||w<=0||!Number.isFinite(r)||r<=0||r>30)return null;return w*(1+r/30);}
function performanceSummary(scope,week){
  const sessions=state.sessions.filter(s=>(scope==="week"?s.week===week:true));
  const map={};
  sessions.forEach(s=>(s.exercises||[]).forEach(e=>(e.sets||[]).forEach(set=>{
    if(!set.done)return;const w=Number(set.weight),r=Number(set.reps);if(!Number.isFinite(w)||!Number.isFinite(r)||w<=0||r<=0)return;
    const key=e.name;if(!map[key])map[key]={name:key,maxLoad:0,maxReps:0,bestE1RM:0,volume:0};
    map[key].maxLoad=Math.max(map[key].maxLoad,w);map[key].maxReps=Math.max(map[key].maxReps,r);map[key].bestE1RM=Math.max(map[key].bestE1RM,estimate1RM(w,r)||0);map[key].volume+=w*r;
  })));
  return Object.values(map).sort((a,b)=>b.bestE1RM-a.bestE1RM);
}
function volumeSummary(week){
  const direct={};MUSCLES.forEach(m=>direct[m]=0);let loadVolume=0;
  state.sessions.filter(s=>s.week===week).forEach(s=>(s.exercises||[]).forEach(e=>(e.sets||[]).forEach(set=>{
    if(!set.done)return;direct[e.group]=(direct[e.group]||0)+1;const w=Number(set.weight),r=Number(set.reps);if(Number.isFinite(w)&&Number.isFinite(r)&&w>0&&r>0)loadVolume+=w*r;
  })));
  return {directSets:direct,loadVolume};
}
function renderProgress(){
 const scope=$("#progressScope")?.value||"week",targets=targetSeries(scope),done=doneSeries(scope),box=$("#progressBars");
 if(box){const activeMuscles=MUSCLES.filter(m=>(targets[m]||0)>0||(done[m]||0)>0);box.innerHTML=activeMuscles.length?activeMuscles.map(m=>{const t=targets[m]||0,d=done[m]||0,pct=t?Math.min(100,Math.round(d/t*100)):0,cls=progressClass(pct),label=pct<40?"Bajo":pct<80?"Moderado":"Completo";return `<div class="progress-row enhanced"><strong>${m}</strong><div class="progress-detail"><div class="progress-bar ${cls}"><span style="width:${pct}%"></span></div><small>${label} · ${pct}% de cumplimiento</small></div><span>${d}/${t} series</span></div>`;}).join(""):`<p class="small-muted">No hay objetivos para esta vista. Genera una rutina o añade ejercicios en Mi rutina.</p>`;}
 const perf=$("#performanceMetrics"),ps=performanceSummary("week",state.selectedWeek);
 if(perf)perf.innerHTML=ps.length?ps.slice(0,8).map(x=>`<div class="metric-item"><strong>${escapeHtml(x.name)}</strong><span>e1RM estimado: ${Math.round(x.bestE1RM)} · PR carga: ${x.maxLoad} · PR reps: ${x.maxReps}</span></div>`).join(""):"<p class='small-muted'>Aún no hay series válidas para calcular e1RM o PRs.</p>";
 const vol=$("#volumeMetrics"),v=volumeSummary(state.selectedWeek);
 if(vol){const active=Object.entries(v.directSets).filter(([g,n])=>n>0);vol.innerHTML=(active.length?active.map(([g,n])=>`<div class="metric-item"><strong>${escapeHtml(g)}</strong><span>${n} series directas registradas</span></div>`).join(""):"<p class='small-muted'>Aún no hay volumen directo registrado.</p>")+(`<div class="metric-item"><strong>Volumen de carga</strong><span>${Math.round(v.loadVolume)} kg·reps registrados</span></div>`);}
 const advice=$("#progressAdvice");
 if(advice)advice.innerHTML=scope==="day"?"<strong>Vista por día:</strong><br>El objetivo se compara con la ejecución real. Los ejercicios extra no cambian la rutina maestra.":"<strong>Vista por semana:</strong><br>Cumplimiento y rendimiento son métricas diferentes. e1RM y PRs sólo aparecen con datos reales válidos.";
 const hist=$("#historyList");
 if(hist){
   hist.innerHTML=state.sessions.length?state.sessions.map(s=>`<div class="history-card"><div><strong>${escapeHtml(s.performedDate||s.date)} · ${escapeHtml(s.week)} · ${escapeHtml(s.title)}</strong><span class="small-muted">${escapeHtml(s.performedDay||"")} · ${s.exercises.length} ejercicios · ${escapeHtml(s.modality||"")}</span></div><div class="history-actions"><button class="ghost" data-history-edit="${s.id}">Editar</button><button class="ghost" data-history-xlsx="${s.id}">Excel</button><button class="ghost" data-history-word="${s.id}">Word</button></div></div>`).join(""):"<p class='small-muted'>Aún no hay sesiones guardadas.</p>";
   hist.querySelectorAll("[data-history-edit]").forEach(b=>b.addEventListener("click",()=>openSessionForEdit(Number(b.dataset.historyEdit))));
   hist.querySelectorAll("[data-history-xlsx]").forEach(b=>b.addEventListener("click",()=>{const s=state.sessions.find(x=>x.id===Number(b.dataset.historyXlsx));if(s)exportSessionExcel(s);}));
   hist.querySelectorAll("[data-history-word]").forEach(b=>b.addEventListener("click",()=>{const s=state.sessions.find(x=>x.id===Number(b.dataset.historyWord));if(s)exportSessionWord(s);}));
 }
 const weekSel=$("#historyWeek");
 if(weekSel){weekSel.innerHTML=state.weeks.map(w=>`<option ${w===state.selectedWeek?"selected":""}>${escapeHtml(w)}</option>`).join("");}
}
function addWeek(){
 if(state.planMeta?.programLengthWeeks===6||state.weeks.length>=6){alert("El bloque actual está definido en 6 semanas. Genera un nuevo bloque cuando quieras reiniciar la progresión.");return;}
 const last=state.weeks[state.weeks.length-1],nextNum=Number((last.match(/\d+/)||[state.weeks.length])[0])+1,next="Semana "+nextNum;
 const n=Number(state.planMeta?.days||state.profile?.days||3),level=state.planMeta?.level||state.profile?.level||"Intermedio",goal=state.planMeta?.goal||state.profile?.goal||"Salud general",focus=state.planMeta?.focus||state.profile?.focus||"general",dist=state.planMeta?.distribution||defaultDistributionForDays(n);
 const schedule=scheduleForPlan(state.planMeta,state.profile);
 const profile={...state.profile,days:String(n),level,goal,focus,distribution:dist,weekdaySchedule:schedule};
 const plan=trainingEngine(n,level,goal,focus,profile,state.weeks.length,dist);
 state.routine[next]={};
 plan.forEach((day,idx)=>{
   const weekday=WEEKDAYS_ES[schedule[idx]??idx];
   if(!weekday)return;
   state.routine[next][weekday]={title:day.title,exercises:day.exercises,weekIndex:state.weeks.length,weekdayIndex:schedule[idx]};
 });
 state.weeks.push(next);
 state.selectedWeek=next;
 state.selectedDay=WEEKDAYS_ES[schedule[0]??0]||"Lunes";
 saveState();renderAll();
}

function addExercise(fromRegister=false){
  if(fromRegister){
    const r=ensureRegistrationState();
    const weekIndex=Math.max(0,Number(String(r.week||"Semana 1").match(/\d+/)?.[0]||1)-1);
    const goal=state.planMeta?.goal||"Salud general",level=state.planMeta?.level||"Intermedio";
    const ex=defaultExercise("Pecho");
    hydrateExercise(ex,{goal,level,weekIndex});
    ex.sets=prescriptionSets(ex,goal,level,weekIndex);
    ex.loadLevel=periodizationForWeek(goal,weekIndex).loadLevel;
    applyLoadToExercise(ex,ex.loadLevel,{goal,level,weekIndex});
    const draft=getDraft();draft.extra=draft.extra||[];
    draft.extra.unshift({exercise:ex,sets:[],notes:""});
    saveState();renderAll();
    return;
  }
  const day=ensureCurrentDay();
  const goal=state.planMeta?.goal||"Salud general",level=state.planMeta?.level||"Intermedio",weekIndex=Number(day.weekIndex??0);
  const ex=defaultExercise("Pecho");
  hydrateExercise(ex,{goal,level,weekIndex});
  ex.sets=prescriptionSets(ex,goal,level,weekIndex);
  ex.loadLevel=periodizationForWeek(goal,weekIndex).loadLevel;
  applyLoadToExercise(ex,ex.loadLevel,{goal,level,weekIndex});
  day.exercises.unshift(ex);
  saveState();renderAll();
}

function exportBackupJson(){
  const payload={app:"Prime OS Público",appVersion:APP_VERSION,schemaVersion:2,evidenceVersion:EVIDENCE_VERSION,evidenceKeys:EVIDENCE_KEYS,distributionPolicies:DISTRIBUTION_POLICIES,exportedAt:new Date().toISOString(),profile:state.profile,weeks:state.weeks,selectedWeek:state.selectedWeek,selectedDay:state.selectedDay,planMeta:state.planMeta,routine:state.routine,sessions:state.sessions,sessionDrafts:state.sessionDrafts,ui:state.ui};
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:"application/json"}));a.download="Prime_OS_backup.json";a.click();URL.revokeObjectURL(a.href);
}
function validateBackup(data){
  if(!data||typeof data!=="object")return "El archivo no contiene un objeto JSON válido.";
  if(!data.routine||!Array.isArray(data.weeks))return "No parece un respaldo válido de Prime OS.";
  if(data.schemaVersion&&Number(data.schemaVersion)>2)return "El respaldo fue creado con una versión más nueva de Prime OS.";
  return "";
}
function exportExcel(){
  const wb=XLSX.utils.book_new(), routineRows=[], sessionRows=[];
  state.weeks.forEach(week=>Object.entries(state.routine[week]||{}).forEach(([day,obj])=>(obj.exercises||[]).forEach(e=>routineRows.push({Semana:week,Día:day,Tipo:obj.title,Ejercicio:e.name,Grupo:e.group,Series:e.sets,Reps:e.reps,Descanso:e.rest,Aparato:e.equipment||"",Objetivo:e.objective||"",Cómo_hacerlo:e.how||"",Intensidad:e.loadLevel||"Moderado",Guía_carga:e.loadGuide||"",Recomendación:e.recommendation||"",Nota:e.note||""}))));
  state.sessions.forEach(s=>s.exercises.forEach(e=>e.sets.forEach((set,i)=>sessionRows.push({SesionID:s.id,Fecha:s.date,FechaRealizada:s.performedDate||"",DiaRealizado:s.performedDay||"",Semana:s.week,DiaPlanificado:s.plannedDay||s.day||"",Modalidad:s.modality||"",Sesion:s.title||"",Ejercicio:e.name,Grupo:e.group,Serie:i+1,Peso:set.weight,Reps:set.reps,RIR:set.rir,Dolor:set.pain,Hecha:set.done?"Sí":"No",Observaciones:e.notes||""}))));
  const p=state.profile, profileRows=[{Nombre:p.name,Edad:p.age,Estatura:p.height,Peso:p.weight,Correo:p.email,WhatsApp:p.phone,Objetivo:p.goal,Nivel:p.level,Días:p.days,Tiempo:p.time,Lugar:p.place,Énfasis:p.focus,Salud:(p.health||[]).join(", "),Alarmas:(p.alarms||[]).join(", "),Dolor:p.painLevel,Zona:p.painZone,Antecedentes:p.medicalHistory,Lesiones:p.injuryHistory,Evitar:p.avoid,Notas:p.notes,Screening:p.risk}];
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(profileRows),"Formulario");
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(routineRows),"Rutina");
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(sessionRows),"Registros");
  XLSX.writeFile(wb,"Prime_OS_respaldo.xlsx");
}
function exportAnamnesisWord(){const errors=validateProfile(); if(errors.length){showValidation(errors);return;} const p=state.profile; const html=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Anamnesis Prime OS</title><style>body{font-family:Arial,sans-serif;line-height:1.5;color:#111}h1{color:#0b5ed7}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:8px;text-align:left}th{background:#eee}</style></head><body><h1>Anamnesis inicial - Prime OS</h1><p><strong>Fecha:</strong> ${new Date().toLocaleString("es-CL")}</p><table><tr><th>Campo</th><th>Respuesta</th></tr>${[["Nombre",p.name],["Edad",p.age],["Estatura",p.height],["Peso",p.weight],["Correo",p.email],["WhatsApp",p.phone],["Objetivo",p.goal],["Nivel",p.level],["Días disponibles",p.days],["Tiempo por sesión",p.time],["Lugar",p.place],["Énfasis",p.focus],["Salud/antecedentes",(p.health||[]).join(", ")],["Síntomas de alarma",(p.alarms||[]).join(", ")],["Dolor actual",p.painLevel],["Zona de molestia",p.painZone],["Antecedentes médicos",p.medicalHistory],["Lesiones o molestias anteriores",p.injuryHistory],["Ejercicios a evitar",p.avoid],["Notas",p.notes],["Resultado orientativo",p.risk]].map(([a,b])=>`<tr><td>${escapeHtml(a)}</td><td>${escapeHtml(b)}</td></tr>`).join("")}</table><p><em>Este documento no reemplaza evaluación médica, kinesiológica ni nutricional.</em></p></body></html>`; const blob=new Blob(["\ufeff",html],{type:"application/msword"}),a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`Anamnesis_Prime_OS_${(p.name||"cliente").replace(/[^\wáéíóúñÁÉÍÓÚÑ-]+/g,"_")}.doc`; a.click(); URL.revokeObjectURL(a.href);}
function importFile(file){const status=$("#importStatus"),ext=file.name.split(".").pop().toLowerCase(),reader=new FileReader();reader.onload=e=>{try{
 if(ext==="json"){const data=JSON.parse(e.target.result),err=validateBackup(data);if(err){status.textContent=err;return;}state=normalizeImportedState(deepMerge(defaultState(),data));saveState();status.textContent="Respaldo JSON restaurado correctamente.";renderAll();}
 else if(ext==="csv"){importCSV(e.target.result);status.textContent="CSV importado como rutina personalizada.";renderAll();}
 else if(["xlsx","xls"].includes(ext)){const wb=XLSX.read(e.target.result,{type:"array"});importWorkbook(wb);status.textContent="Excel importado correctamente. Se procesaron las hojas disponibles.";renderAll();}
 }catch(err){status.textContent="Error al importar: "+err.message;}};if(["xlsx","xls"].includes(ext))reader.readAsArrayBuffer(file);else reader.readAsText(file);}
function importWorkbook(wb){
 const names=wb.SheetNames||[];
 const routineSheet=names.includes("Rutina")?"Rutina":names[0];
 const routineRows=routineSheet?XLSX.utils.sheet_to_json(wb.Sheets[routineSheet],{defval:""}):[];
 if(routineRows.length)importRows(routineRows);
 if(names.includes("Formulario")){const rows=XLSX.utils.sheet_to_json(wb.Sheets.Formulario,{defval:""});if(rows[0]){const r=rows[0];state.profile={...state.profile,name:r.Nombre||state.profile.name,age:r.Edad||state.profile.age,height:r.Estatura||state.profile.height,weight:r.Peso||state.profile.weight,email:r.Correo||state.profile.email,phone:r.WhatsApp||state.profile.phone,goal:r.Objetivo||state.profile.goal,level:r.Nivel||state.profile.level,days:r.Días||state.profile.days,time:r.Tiempo||state.profile.time,place:r.Lugar||state.profile.place,focus:r.Énfasis||state.profile.focus};}}
 if(names.includes("Registros")||names.includes("Sesiones")){const sheet=names.includes("Registros")?"Registros":"Sesiones",rows=XLSX.utils.sheet_to_json(wb.Sheets[sheet],{defval:""}),grouped={};rows.forEach(r=>{const sid=r.SesionID||r.ID||r.Fecha+"__"+r.Sesion;if(!grouped[sid])grouped[sid]={id:sid,week:r.Semana||"Semana 1",date:r.Fecha||"",performedDate:r.FechaRealizada||"",performedDay:r.DiaRealizado||"",plannedDay:r.DiaPlanificado||r.Día||"Día 1",day:r.DiaPlanificado||r.Día||"Día 1",title:r.Sesion||"Sesión",modality:r.Modalidad||"3 días",sessionKey:r.DiaPlanificado||r.Día||"Día 1",exercises:[]};let ex=grouped[sid].exercises.find(x=>x.name===(r.Ejercicio||"Ejercicio"));if(!ex){ex={name:r.Ejercicio||"Ejercicio",group:r.Grupo||"General",target:"",notes:r.Observaciones||"",sets:[]};grouped[sid].exercises.push(ex);}ex.sets.push({weight:r.Peso||"",reps:r.Reps||"",rir:r.RIR||"",pain:r.Dolor||"",done:r.Hecha==="Sí"||r.Hecha===true});});state.sessions=Object.values(grouped);}}
function importCSV(text){const lines=text.split(/\r?\n/).filter(Boolean),headers=lines.shift().split(",").map(h=>h.trim());importRows(lines.map(line=>{const vals=line.split(",");return Object.fromEntries(headers.map((h,i)=>[h,vals[i]||""]));}));}
function importRows(rows){const routine={};rows.forEach(r=>{const week=r.Semana||r.week||"Semana 1",day=r["Día"]||r.Dia||r.day||"Día 1";if(!routine[week])routine[week]={};if(!routine[week][day])routine[week][day]={title:day,exercises:[]};const group=r.Grupo||r.Músculo||r.Musculo||r.group||"General",name=r.Ejercicio||r.exercise||"Ejercicio personalizado";let item=(EXERCISE_LIBRARY[group]||[]).find(e=>e.name===name);let ex=item?makeExerciseFromLibrary(item):makeExerciseFromLibrary({name,group,equipment:r.Aparato||r.Equipo||"Equipo a definir",sets:Number(r.Series||3),reps:r.Reps||"10-12",rest:r.Descanso||"90 s",objective:r.Objetivo||"Ejercicio personalizado.",how:r.Cómo_hacerlo||r.Como||r.how||"Describe cómo se ejecuta.",recommendation:r.Recomendación||r.Nota||""});ex.sets=Number(r.Series||ex.sets);ex.loadLevel=r.Intensidad||r.Peso||ex.loadLevel||"Moderado";applyLoadToExercise(ex,ex.loadLevel,{goal:state?.planMeta?.goal,level:state?.planMeta?.level,weekIndex:0});if(r.Reps){ex.reps=r.Reps;ex.userOverrideReps=true;}if(r.Descanso){ex.rest=r.Descanso;ex.userOverrideRest=true;}routine[week][day].exercises.push(ex);});state.routine=routine;state.weeks=Object.keys(routine).length?Object.keys(routine):["Semana 1"];state.selectedWeek=state.weeks[0];state.selectedDay=Object.keys(state.routine[state.selectedWeek]||{})[0]||"Día 1";state.planMeta.generated=true;saveState();}
function bindControls(){
  $("#weekSelect").addEventListener("change",e=>{state.selectedWeek=e.target.value;saveState();renderAll();});
  $("#daySelect").addEventListener("change",e=>{state.selectedDay=e.target.value;saveState();renderAll();});
  $("#addWeekBtn").addEventListener("click",addWeek); $("#exportBtn").addEventListener("click",exportExcel);
  $("#saveFormBtn").addEventListener("click",()=>{const errors=validateProfile(); if(errors.length){showValidation(errors);return;} renderScreening();renderHome();alert("Formulario guardado.");});
  $("#exportAnamnesisBtn")?.addEventListener("click",exportAnamnesisWord);
  $("#generateFromFormBtn").addEventListener("click",()=>{
    const errors=validateProfile();
    if(errors.length){showValidation(errors);return;}
    try{
      const days=Number(state.profile.days||3),dist=getDistribution(days,state.profile.distribution).value;
      const ok=generateRoutine(days,state.profile.level,state.profile.goal,state.profile.focus,dist);
      $("#generatorDays").value=days;$("#generatorLevel").value=state.profile.level;$("#generatorGoal").value=state.profile.goal;$("#generatorFocus").value=state.profile.focus;
      renderDistributionOptions();$("#generatorDistribution").value=dist;
      if(ok){
        if(!reconcileGeneratedPlan()){alert("La rutina no pudo completarse porque la planificación generada quedó vacía.");return;}
        syncRegisterToPlanner();go("rutina");
      }
    }catch(err){console.error("Prime OS: error generando desde formulario",err);alert("No se pudo generar la rutina. Revisa la consola del navegador para el detalle técnico.");}
  });
  ["generatorDays","generatorFocus","generatorLevel","generatorGoal"].forEach(id=>$("#"+id).addEventListener("change",()=>{
    if(id==="generatorDays"){
      const days=Number($("#generatorDays").value||3);
      state.ui=state.ui||{};state.ui.generator=state.ui.generator||{};
      state.ui.generator.weekdaySchedule=defaultWeekdaySchedule(days);
      saveState();
      renderDistributionOptions();
      renderGeneratorWeekdayOptions();
    }
    renderSplitPreview();
  }));
  $("#generatorWeekdayChoices")?.addEventListener("change",e=>{
    const input=e.target.closest("[data-generator-weekday]");
    if(!input)return;
    const days=Number($("#generatorDays").value||3);
    const selected=$$("#generatorWeekdayChoices [data-generator-weekday]:checked").map(x=>Number(x.dataset.generatorWeekday));
    if(selected.length>days){
      input.checked=false;
      input.closest(".weekday-choice")?.classList.toggle("selected",true);
      return;
    }
    state.ui=state.ui||{};state.ui.generator=state.ui.generator||{};
    state.ui.generator.weekdaySchedule=selected;
    saveState();
    renderGeneratorWeekdayOptions();
    renderSplitPreview();
  });
  $("#generatorDistribution")?.addEventListener("change",()=>{
    const days=Number($("#generatorDays").value||3),value=$("#generatorDistribution").value;
    state.planMeta=state.planMeta||{};state.planMeta.distribution=value;state.planMeta.distributionLabel=distributionLabel(days,value);
    state.profile=state.profile||{};state.profile.distribution=value;saveState();renderSplitPreview();
  });
  $("#generateRoutineBtn").addEventListener("click",()=>{
    try{
      const days=Number($("#generatorDays").value||3);
      const level=$("#generatorLevel").value;
      const goal=$("#generatorGoal").value;
      const focus=$("#generatorFocus").value;
      const distribution=$("#generatorDistribution")?.value;
      const rawSchedule=Array.isArray(state.ui?.generator?.weekdaySchedule)?state.ui.generator.weekdaySchedule:[];
      if(rawSchedule.length!==days){
        alert(`Selecciona exactamente ${days} días de entrenamiento antes de generar la rutina.`);
        return;
      }
      const ok=generateRoutine(days,level,goal,focus,distribution,rawSchedule);
      if(!ok)return;
      if(!reconcileGeneratedPlan()){
        console.error("Prime OS: generateRoutine no produjo una planificación válida",{
          days,distribution,routine:state.routine,planMeta:state.planMeta
        });
        alert("La rutina no pudo completarse porque la planificación generada quedó vacía. No se guardaron cambios incompletos.");
        return;
      }
      syncRegisterToPlanner();
      go("rutina");
    }catch(err){
      console.error("Prime OS: error generando rutina",err);
      alert("No se pudo generar la rutina. Motivo: "+(err?.message||"error desconocido"));
    }
  });
  $("#goPersonalBtn").addEventListener("click",()=>go("personalizado")); $("#addExerciseBtn").addEventListener("click",()=>addExercise(false)); $("#updateSessionDraftBtn")?.addEventListener("click",()=>{collectRegisterDraft(); alert("Cambios actualizados en el registro. Puedes cambiar de pestaña sin perderlos."); renderAll();}); $("#saveSessionBtn").addEventListener("click",saveSession);
  $("#clearBtn").addEventListener("click",()=>{if(confirm("¿Borrar todos los datos locales?")){localStorage.removeItem(STORAGE_KEY);state=defaultState();saveState();renderAll();go("inicio");}});
  $("#resetDemoBtn").addEventListener("click",()=>{state=defaultState();saveState();renderAll();go("inicio");});
  $("#importInput").addEventListener("change",e=>{const file=e.target.files?.[0];if(file)importFile(file);});
  $("#progressScope")?.addEventListener("change",renderProgress);
  $("#registerWeek")?.addEventListener("change",e=>{const r=ensureRegistrationState();r.editingSessionId=null;setRegisterSelection("week",e.target.value);});
  $("#registerPerformedDate")?.addEventListener("change",e=>{
    const r=ensureRegistrationState(),old=r.performedDate;
    r.performedDate=e.target.value||localDateISO();
    r.weekday=weekdayIndex(r.performedDate);
    if(old!==r.performedDate)r.editingSessionId=null;
    saveState();renderAll();
  });
  $("#registerWeekday")?.addEventListener("change",e=>{
    const r=ensureRegistrationState(),old=r.performedDate;
    r.weekday=Math.max(0,Math.min(6,Number(e.target.value)||0));
    r.performedDate=dateForWeekday(r.weekday,r.performedDate);
    if(old!==r.performedDate)r.editingSessionId=null;
    saveState();renderAll();
  });
  $("#registerModality")?.addEventListener("change",e=>{const r=ensureRegistrationState();r.editingSessionId=null;setRegisterSelection("modality",e.target.value);});
  $("#registerSession")?.addEventListener("change",e=>{const r=ensureRegistrationState();r.editingSessionId=null;setRegisterSelection("sessionKey",e.target.value);});
  $("#historyWeek")?.addEventListener("change",e=>{state.selectedWeek=e.target.value;saveState();renderProgress();});
  $("#historyWeekExcelBtn")?.addEventListener("click",()=>exportWeekExcel($("#historyWeek")?.value||state.selectedWeek));
  $("#historyWeekWordBtn")?.addEventListener("click",()=>exportWeekWord($("#historyWeek")?.value||state.selectedWeek));
  $("#backupExportBtn")?.addEventListener("click",exportBackupJson);
  $("#backupRestoreBtn")?.addEventListener("click",()=>$("#importInput")?.click());
  $("#themeButtons .theme-chip").forEach(btn=>btn.addEventListener("click",()=>{applyTheme(btn.dataset.theme);saveState();}));
}
function renderAll(){
  state=normalizeStateShape(state);
  ensureGeneratedRoutineIntegrity();
  applyTheme(state.ui?.theme||"azul");
  renderSelectors();
  fillProfile();
  renderDistributionOptions();
  renderGeneratorWeekdayOptions();
  renderSplitPreview();
  renderHome();
  renderRoutine();
  renderRegister();
  renderProgress();
  renderEvidenceSettings();
}
document.addEventListener("DOMContentLoaded",()=>{bindLaunch();bindNav();bindControls();renderAll();});
