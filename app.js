const STORAGE_KEY = "prime_os_publico_v2_0";

const MUSCLES = ["Pierna anterior","Pierna posterior/glúteo","Gemelos","Pecho","Espalda","Hombro","Bíceps","Tríceps","Abdomen","Cardio/recuperación","General"];
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
{name:"JOSPT",url:"https://www.jospt.org/",role:"Evidencia aplicada a ejercicio, movimiento, dolor y rehabilitación cuando corresponde."}
];
const TRAINING_RULES={
"Ganar fuerza general":{repRange:[4,8],targetRir:"2",rest:"2-4 min"},
"Ganar masa muscular":{repRange:[6,15],targetRir:"1-3",rest:"1.5-3 min"},
"Recomposición corporal":{repRange:[6,15],targetRir:"2-3",rest:"1.5-3 min"},
"Bajar grasa":{repRange:[6,15],targetRir:"2-3",rest:"1.5-3 min"},
"Salud general":{repRange:[8,15],targetRir:"3",rest:"1-3 min"},
"Volver a entrenar":{repRange:[8,15],targetRir:"3-4",rest:"1-3 min"}
};
function goalRule(goal){return TRAINING_RULES[goal]||TRAINING_RULES["Salud general"];}
function rangeText(a,b){return a===b?String(a):a+"-"+b;}
function evidencePrescription(e,goal,level,loadLevel,weekIndex){
 const rule=goalRule(goal);
 if((e.group||"")==="Cardio/recuperación")return{suggestedReps:e.baseReps||e.reps||"20-35 min",suggestedRest:"Suave/moderado",targetRir:"Percepción de esfuerzo cómoda",rationale:"El componente cardiovascular se regula por modalidad, duración e intensidad."};
 let low=rule.repRange[0],high=rule.repRange[1];
 if(loadLevel==="Alto"){low=Math.max(3,low-1);high=Math.max(low+1,high-2);}
 if(loadLevel==="Bajo"){low+=3;high+=5;}
 if(weekIndex===3&&goal==="Ganar fuerza general"){low=Math.max(3,low-1);high=Math.max(low+1,high-1);}
 if(weekIndex===4){low+=1;high+=3;}
 let rir=rule.targetRir;
 if(weekIndex===3&&["Ganar fuerza general","Ganar masa muscular"].includes(goal))rir="1-2";
 if(weekIndex>=4)rir=goal==="Volver a entrenar"?"3-4":"3";
 return{suggestedReps:rangeText(low,high),suggestedRest:loadLevel==="Alto"?(goal==="Ganar fuerza general"?"2.5-4 min":"2-3 min"):rule.rest,targetRir:rir,rationale:goal==="Ganar fuerza general"?"Rango inicial orientado a fuerza; ajusta carga según RIR y rendimiento.":goal==="Ganar masa muscular"?"Rango amplio de hipertrofia con múltiples series y RIR controlable.":"Rango inicial adaptable al objetivo, rendimiento y recuperación."};
}
function prescriptionSets(e,goal,level,weekIndex){
 let sets=Math.max(1,Number(e.sets)||3);
 if(level==="Principiante")sets=Math.min(sets,3);
 if(weekIndex===4)sets=Math.max(1,Math.ceil(sets*0.7));
 if(goal==="Salud general"||goal==="Volver a entrenar")sets=Math.min(sets,3);
 return sets;
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
 e.suggestedReps=p.suggestedReps;e.suggestedRest=p.suggestedRest;e.targetRir=p.targetRir;e.trainingRationale=p.rationale;
 e.loadGuide=e.loadLevel==="Alto"?"Carga desafiante: prioriza técnica y usa el RIR objetivo.":"Carga liviana/moderada: punto de partida adaptable al objetivo y al contexto.";
 if(!e.userOverrideReps)e.reps=e.suggestedReps||e.baseReps||e.reps;
 if(!e.userOverrideRest)e.rest=e.suggestedRest||e.baseRest||e.rest;
 return e;
}

function makeExerciseFromLibrary(item){
  const e = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()+Math.random()),
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

const defaultState = () => ({schemaVersion:2,
  profile:{name:"",age:"",height:"",weight:"",email:"",phone:"",goal:"Salud general",level:"Principiante",days:"3",time:"45-60 min",place:"Gimnasio",focus:"general",health:[],alarms:[],painLevel:0,painZone:"Ninguna",avoid:"",medicalHistory:"",injuryHistory:"",notes:"",risk:"Sin evaluar"},
  weeks:["Semana 1","Semana 2","Semana 3","Semana 4","Semana 5"],
  selectedWeek:"Semana 1",
  selectedDay:"Día 1",
  planMeta:{days:3,level:"Intermedio",goal:"Ganar masa muscular",focus:"general",generated:false},
  routine:{},
  sessions:[],
  sessionDrafts:{},
  ui:{theme:"azul",evidenceVersion:EVIDENCE_VERSION}
});

let state = loadState();

function $(s){return document.querySelector(s);}
function $$(s){return Array.from(document.querySelectorAll(s));}
function escapeHtml(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function loadState(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(raw) return deepMerge(defaultState(),JSON.parse(raw));
    const old=localStorage.getItem("prime_os_publico_v1_4") || localStorage.getItem("prime_os_publico_v1_3") || localStorage.getItem("prime_os_publico_v1_2") || localStorage.getItem("prime_os_publico_v1_1") || localStorage.getItem("prime_os_publico_v1");
    if(old) return normalizeImportedState(deepMerge(defaultState(),JSON.parse(old)));
  }catch(e){}
  return defaultState();
}
function normalizeImportedState(s){
  Object.values(s.routine||{}).forEach(week=>Object.values(week||{}).forEach(day=>(day.exercises||[]).forEach(e=>hydrateExercise(e))));
  return s;
}
function hydrateExercise(e){
 const found=(EXERCISE_LIBRARY[e.group]||[]).find(x=>x.name===e.name);
 if(found){e.equipment=e.equipment||found.equipment;e.objective=e.objective||found.objective;e.how=e.how||found.how;e.recommendation=e.recommendation||found.recommendation;e.note=e.note||found.recommendation;e.baseReps=e.baseReps||found.baseReps||found.reps;e.baseRest=e.baseRest||found.baseRest||found.rest;}
 else{e.equipment=e.equipment||"Equipo a definir";e.objective=e.objective||"Ejercicio personalizado.";e.how=e.how||"Describe cómo se ejecuta este ejercicio.";e.recommendation=e.recommendation||e.note||"Edita la recomendación.";e.note=e.note||e.recommendation;e.baseReps=e.baseReps||e.reps||"10-12";e.baseRest=e.baseRest||e.rest||"90 s";}
 e.loadLevel=e.loadLevel||"Moderado";
 applyLoadToExercise(e,e.loadLevel,{goal:state?.planMeta?.goal,level:state?.planMeta?.level,weekIndex:0});
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

function splitFor(days,focus="general"){
  const n=Number(days); let split=[];
  if(n===1) split=["Full Body"];
  if(n===2) split=["Full Body","Full Body"];
  if(n===3) split=["Full Body","Pecho + tríceps","Pierna posterior/glúteo"];
  if(n===4) split=["Pierna anterior","Pecho + tríceps","Pierna posterior/glúteo","Espalda + bíceps"];
  if(n===5) split=["Pierna anterior","Pecho + tríceps","Espalda + bíceps","Pierna posterior/glúteo","Hombro + brazos + abdomen"];
  if(n===6) split=["Pierna anterior","Pecho + tríceps","Espalda + bíceps","Pierna posterior/glúteo","Hombro + brazos + abdomen","Cardio + abdomen"];
  if(focus==="abs"&&n>=2) split[split.length-1]="Cardio + abdomen";
  if(focus==="pierna-anterior"&&n>=2) split[0]="Pierna anterior";
  if(focus==="pierna-posterior"&&n>=2) split[Math.min(2,n-1)]="Pierna posterior/glúteo";
  if(focus==="pecho"&&n>=2) split[1]="Pecho + tríceps";
  if(focus==="espalda"&&n>=2) split[Math.min(2,n-1)]="Espalda + bíceps";
  return split;
}
function summaryForSplit(name){
  return {"Full Body":"Pierna, pecho, espalda, glúteo/posterior, hombro y abdomen.","Pierna anterior":"Prensa, sentadilla simple, extensión de piernas, zancadas y abdomen.","Pierna posterior/glúteo":"Hip thrust, peso muerto rumano, curl femoral, prensa pies altos y glúteo.","Pecho + tríceps":"Press de pecho, press inclinado, aperturas, flexiones y tríceps.","Espalda + bíceps":"Jalón al pecho, remos, face pull, curl bíceps y curl martillo.","Hombro + brazos + abdomen":"Press hombro, elevaciones laterales, bíceps, tríceps y abdomen.","Cardio + abdomen":"Cardio suave, planchas, crunch, dead bug y movilidad."}[name]||"Rutina base general.";
}
function exercisesFor(type,level,focus){
  const pick = {
    "Full Body":[["Pierna anterior","Prensa"],["Pecho","Press de pecho en máquina"],["Espalda","Jalón al pecho"],["Pierna posterior/glúteo","Curl femoral sentado"],["Hombro","Elevaciones laterales"],["Abdomen","Plancha"]],
    "Pierna anterior":[["Pierna anterior","Prensa"],["Pierna anterior","Sentadilla goblet"],["Pierna anterior","Extensión de piernas"],["Pierna anterior","Zancadas"],["Pierna anterior","Subida al cajón"],["Gemelos","Gemelos de pie"],["Abdomen","Crunch"]],
    "Pierna posterior/glúteo":[["Pierna posterior/glúteo","Hip thrust"],["Pierna posterior/glúteo","Peso muerto rumano"],["Pierna posterior/glúteo","Curl femoral sentado"],["Pierna posterior/glúteo","Prensa pies altos"],["Pierna posterior/glúteo","Patada de glúteo"],["Gemelos","Gemelos sentado"],["Abdomen","Plancha"]],
    "Pecho + tríceps":[["Pecho","Press de pecho en máquina"],["Pecho","Press inclinado con mancuernas"],["Pecho","Aperturas en máquina"],["Pecho","Flexiones"],["Tríceps","Tríceps en polea"],["Tríceps","Extensión de tríceps con cuerda"]],
    "Espalda + bíceps":[["Espalda","Jalón al pecho"],["Espalda","Remo sentado"],["Espalda","Remo con mancuerna"],["Espalda","Face pull"],["Bíceps","Curl bíceps con mancuernas"],["Bíceps","Curl martillo"]],
    "Hombro + brazos + abdomen":[["Hombro","Press de hombro en máquina"],["Hombro","Elevaciones laterales"],["Hombro","Pájaros / posterior de hombro"],["Bíceps","Curl bíceps con mancuernas"],["Tríceps","Tríceps en polea"],["Abdomen","Elevación de piernas"]],
    "Cardio + abdomen":[["Cardio/recuperación","Caminata inclinada"],["Abdomen","Plancha"],["Abdomen","Crunch"],["Abdomen","Dead bug"],["Abdomen","Pallof press"],["Cardio/recuperación","Movilidad general"]]
  }[type] || [["General","Ejercicio personalizado"]];
  let list = pick.map(([g,n])=>makeExerciseFromLibrary((EXERCISE_LIBRARY[g]||[]).find(e=>e.name===n)||EXERCISE_LIBRARY[g][0]));
  if(focus==="abs") list.push(makeExerciseFromLibrary(EXERCISE_LIBRARY.Abdomen.find(e=>e.name==="Abdominal en máquina")));
  if(focus==="pecho"&&!type.includes("Pecho")) list.push(makeExerciseFromLibrary(EXERCISE_LIBRARY.Pecho.find(e=>e.name==="Aperturas en máquina")));
  if(focus==="espalda"&&!type.includes("Espalda")) list.push(makeExerciseFromLibrary(EXERCISE_LIBRARY.Espalda.find(e=>e.name==="Remo sentado")));
  if(focus==="pierna-anterior"&&type!=="Pierna anterior") list.push(makeExerciseFromLibrary(EXERCISE_LIBRARY["Pierna anterior"].find(e=>e.name==="Extensión de piernas")));
  if(focus==="pierna-posterior"&&type!=="Pierna posterior/glúteo") list.push(makeExerciseFromLibrary(EXERCISE_LIBRARY["Pierna posterior/glúteo"].find(e=>e.name==="Hip thrust")));
  if(focus==="brazos"&&!type.includes("brazos")){list.push(makeExerciseFromLibrary(EXERCISE_LIBRARY.Bíceps[0]));list.push(makeExerciseFromLibrary(EXERCISE_LIBRARY.Tríceps[0]));}
  if(level==="Principiante") list=list.map(e=>({...e,sets:Math.min(Number(e.sets),3),recommendation:e.recommendation+" Usa RIR 3 al inicio.",note:e.note+" Usa RIR 3 al inicio."}));
  if(level==="Avanzado") list=list.map(e=>({...e,sets:Number(e.sets)+(["Pecho","Espalda","Pierna anterior","Pierna posterior/glúteo"].includes(e.group)?1:0)}));
  return list.slice(0,8);
}
function generateRoutine(days,level,goal,focus){
  const n=Number(days); state.planMeta={days:n,level,goal,focus,generated:true};
  const split=splitFor(n,focus);
  state.weeks.forEach(week=>{state.routine[week]={};split.forEach((type,idx)=>state.routine[week][`Día ${idx+1}`]={title:type,exercises:exercisesFor(type,level,focus)});});
  state.selectedWeek="Semana 1"; state.selectedDay="Día 1"; saveState();
}

function go(view){
  try{ collectRegisterDraft(); updateManualFields($("#routineList"), "routine"); }catch(e){}
  $$(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  $$(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+view));
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
function renderSplitPreview(){const days=$("#generatorDays")?.value||"3",focus=$("#generatorFocus")?.value||"general",goal=$("#generatorGoal")?.value||"Ganar masa muscular",split=splitFor(days,focus,goal),box=$("#splitPreview"); if(!box)return; box.innerHTML=split.map((name,i)=>`<div class="split-day"><h4>Día ${i+1} · ${name}</h4><p>${summaryForSplit(name)}</p></div>`).join("");}
function renderSelectors(){ $("#weekSelect").innerHTML=state.weeks.map(w=>`<option ${w===state.selectedWeek?"selected":""}>${w}</option>`).join(""); const days=Object.keys(state.routine[state.selectedWeek]||{}),list=days.length?days:Array.from({length:state.planMeta.days||3},(_,i)=>`Día ${i+1}`); if(!list.includes(state.selectedDay))state.selectedDay=list[0]||"Día 1"; $("#daySelect").innerHTML=list.map(d=>`<option ${d===state.selectedDay?"selected":""}>${d}</option>`).join("");}
function currentDayObj(){return state.routine[state.selectedWeek]?.[state.selectedDay]||{title:"Sin rutina",exercises:[]};}
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
    <div class="exercise-meta"><span class="pill">${escapeHtml(e.group)}</span><span class="pill">Sugerido: ${e.sets} series</span><span class="pill">${escapeHtml(e.reps)}</span><span class="pill">${escapeHtml(e.rest)}</span></div>
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
        <div class="library-info-row"><strong>Intensidad</strong><span>${escapeHtml(e.loadGuide || "Peso moderado: carga desafiante pero controlable.")}</span></div>
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
    ${mode==="register" ? `<div class="register-sets">${Array.from({length:Number(e.sets)||1},(_,s)=>`<div class="set-line"><span>Serie ${s+1}</span><input data-set="${s}" data-field="weight" placeholder="Peso"><input data-set="${s}" data-field="repsDone" placeholder="Reps"><input data-set="${s}" data-field="rir" placeholder="RIR"><input data-set="${s}" data-field="pain" placeholder="Dolor 0-10"><label><input data-set="${s}" data-field="done" type="checkbox"> Hecha</label></div>`).join("")}</div><textarea data-field="sessionNotes" placeholder="Observaciones del ejercicio"></textarea>` : ""}
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
        const base=currentDayObj().exercises[idx];
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
function renderRoutine(){
  const day=currentDayObj(), box=$("#routineList"); if(!box)return;
  box.innerHTML=`<div class="split-day"><h4>${state.selectedWeek} · ${state.selectedDay} · ${day.title}</h4><p class="small-muted">Selecciona grupo muscular y ejercicio. Prime OS carga automáticamente aparato, objetivo, series, reps, ejecución y recomendación.</p></div>${day.exercises.map((e,idx)=>libraryCard(e,idx,"routine")).join("")}`;
  attachLibraryEvents(box,"routine");
  box.querySelectorAll(".remove-exercise").forEach(btn=>btn.addEventListener("click",()=>{const idx=Number(btn.closest(".exercise-row").dataset.index);ensureCurrentDay().exercises.splice(idx,1);saveState();renderAll();}));
}

function draftKey(){
  return `${state.selectedWeek}__${state.selectedDay}`;
}
function getDraft(){
  const key=draftKey();
  if(!state.sessionDrafts) state.sessionDrafts={};
  if(!state.sessionDrafts[key]){
    state.sessionDrafts[key]={routine:{},extra:[]};
  }
  return state.sessionDrafts[key];
}
function routineExerciseKey(e, idx){
  return e.id || `${idx}_${e.name}_${e.group}`;
}
function collectRegisterDraft(){
  const draft=getDraft();
  const day=currentDayObj();

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
      applyLoadToExercise(ex, level);
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
function renderRegister(){
  const day=currentDayObj(), box=$("#registerList"); if(!box)return;
  const draft=getDraft();
  const top=`<div class="register-actions-top"><button id="addRegisterExerciseBtn" class="ghost">+ Añadir ejercicio a esta sesión</button></div>`;
  const routineRows=(day.exercises||[]).map((e,idx)=>{
    hydrateExercise(e);
    const key=routineExerciseKey(e, idx);
    const d=draft.routine[key];
    const renderExercise=d?.exercise ? d.exercise : e;
    return libraryCard(renderExercise,idx,"register").replace('class="exercise-row"', `class="exercise-row" data-source="routine" data-key="${escapeHtml(key)}"`).replace('<h4>', '<span class="draft-badge">Rutina base</span><h4>');
  }).join("");

  const extraRows=(draft.extra||[]).map((item,idx)=>{
    const e=item.exercise || defaultExercise("Pecho");
    return libraryCard(e,idx,"register").replace('class="exercise-row"', 'class="exercise-row extra-session" data-source="extra"').replace('<h4>', '<span class="draft-badge">Extra de sesión</span><h4>');
  }).join("");

  if(!(day.exercises||[]).length && !(draft.extra||[]).length){
    box.innerHTML=top+'<div class="warning card"><strong>Sin rutina para este día.</strong> Puedes añadir un ejercicio manual o generar/importar una rutina.</div>';
  }else{
    box.innerHTML=top+routineRows+extraRows;
  }

  // Restaurar datos escritos en series y notas
  $$("#registerList .exercise-row").forEach(row=>{
    const source=row.dataset.source || "routine";
    const idx=Number(row.dataset.index);
    let saved=null;
    if(source==="extra") saved=draft.extra?.[idx] || null;
    else saved=draft.routine?.[row.dataset.key] || null;

    if(saved?.sets){
      row.querySelectorAll(".set-line").forEach((line,i)=>applyDraftToSetLine(line, saved.sets[i]));
    }
    if(saved?.notes && row.querySelector('[data-field="sessionNotes"]')){
      row.querySelector('[data-field="sessionNotes"]').value=saved.notes;
    }
  });

  $("#addRegisterExerciseBtn")?.addEventListener("click",()=>addExercise(true));
  attachLibraryEvents(box,"register");

  // Cada tipeo se guarda como borrador para no perderlo al cambiar pestaña
  box.querySelectorAll("input,select,textarea").forEach(el=>{
    el.addEventListener("input", collectRegisterDraft);
    el.addEventListener("change", collectRegisterDraft);
  });

  box.querySelectorAll(".remove-register-exercise").forEach(btn=>btn.addEventListener("click",()=>{
    collectRegisterDraft();
    const row=btn.closest(".exercise-row");
    const source=row.dataset.source || "routine";
    const idx=Number(row.dataset.index);
    const draft=getDraft();
    if(source==="extra"){
      draft.extra.splice(idx,1);
    }else{
      // Quitar solo del registro actual, no de la rutina ni del objetivo
      const key=row.dataset.key;
      if(!draft.routine[key]) draft.routine[key]={exercise:currentDayObj().exercises[idx],sets:[],notes:""};
      draft.routine[key].removed=true;
      // Para no borrar objetivo, solo limpiar los sets de ese ejercicio en esta sesión
      draft.routine[key].sets=[];
    }
    saveState();
    renderAll();
  }));

  // Ocultar visualmente ejercicios base marcados como removidos del registro actual
  $$("#registerList .exercise-row[data-source='routine']").forEach(row=>{
    const saved=getDraft().routine?.[row.dataset.key];
    if(saved?.removed) row.remove();
  });
}
function saveSession(){
  collectRegisterDraft();
  const draft=getDraft();
  const day=currentDayObj();
  const exercises=[];

  (day.exercises||[]).forEach((base,idx)=>{
    const key=routineExerciseKey(base, idx);
    const saved=draft.routine[key];
    if(saved?.removed) return;
    const ex=saved?.exercise || base;
    const sets=(saved?.sets || []).map(s=>({...s}));
    exercises.push({
      name:ex.name,
      group:ex.group,
      target:`${ex.sets} x ${ex.reps}`,
      notes:saved?.notes || "",
      sets
    });
  });

  (draft.extra||[]).forEach(item=>{
    const ex=item.exercise || defaultExercise("Pecho");
    exercises.push({
      name:ex.name,
      group:ex.group,
      target:`Extra sesión · ${ex.sets} x ${ex.reps}`,
      notes:item.notes || "",
      sets:(item.sets || []).map(s=>({...s})),
      extra:true
    });
  });

  const existingIndex=state.sessions.findIndex(s=>s.week===state.selectedWeek && s.day===state.selectedDay && s.draftKey===draftKey());
  const sessionPayload={
    id: existingIndex>=0 ? state.sessions[existingIndex].id : Date.now(),
    draftKey:draftKey(),
    date:new Date().toLocaleString("es-CL"),
    week:state.selectedWeek,
    day:state.selectedDay,
    title:day.title,
    exercises
  };

  if(existingIndex>=0) state.sessions[existingIndex]=sessionPayload;
  else state.sessions.unshift(sessionPayload);

  saveState();
  alert(existingIndex>=0 ? "Sesión actualizada. Los datos permanecen en pantalla." : "Sesión guardada. Los datos permanecen en pantalla por si necesitas actualizar.");
  renderAll();
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
function renderProgress(){
  const scope=$("#progressScope")?.value || "week";
  const targets=targetSeries(scope);
  const done=doneSeries(scope);
  const box=$("#progressBars");
  if(box){
    const activeMuscles=MUSCLES.filter(m=>(targets[m]||0)>0 || (done[m]||0)>0);
    box.innerHTML = activeMuscles.length ? activeMuscles.map(m=>{
      const t=targets[m]||0, d=done[m]||0, pct=t ? Math.min(100, Math.round((d/t)*100)) : 0, cls=progressClass(pct);
      const label = pct < 40 ? "Bajo" : pct < 80 ? "Moderado" : "Completo";
      return `<div class="progress-row enhanced">
        <strong>${m}</strong>
        <div class="progress-detail">
          <div class="progress-bar ${cls}"><span style="width:${pct}%"></span></div>
          <small>${label} · ${pct}% de cumplimiento</small>
        </div>
        <span>${d}/${t} series</span>
      </div>`;
    }).join("") : `<p class="small-muted">No hay objetivos para esta vista. Genera una rutina o añade ejercicios en Mi rutina.</p>`;
  }
  const advice=$("#progressAdvice");
  if(advice){
    advice.innerHTML = scope==="day"
      ? "<strong>Vista por día:</strong><br>Mi rutina define el objetivo del día. Registrar suma las series realizadas. Ejercicios extra del registro suman realizadas, pero no cambian el objetivo."
      : "<strong>Vista por semana:</strong><br>Crear rutina y Mi rutina definen las series objetivo semanales. Registrar muestra cuántas series reales llevas por grupo muscular.";
  }
  const hist=$("#historyList");
  if(hist) hist.innerHTML=state.sessions.length?state.sessions.map(s=>`<div class="history-card"><strong>${s.date} · ${s.week} · ${s.day} · ${s.title}</strong><span class="small-muted">${s.exercises.length} ejercicios registrados</span></div>`).join(""):"<p class='small-muted'>Aún no hay sesiones guardadas.</p>";
}
function addWeek(){const last=state.weeks[state.weeks.length-1],nextNum=Number((last.match(/\d+/)||[state.weeks.length])[0])+1,next=`Semana ${nextNum}`;state.weeks.push(next);state.routine[next]=state.routine[last]?JSON.parse(JSON.stringify(state.routine[last])):{};state.selectedWeek=next;saveState();renderAll();}
function addExercise(fromRegister=false){
  if(fromRegister){
    const draft=getDraft();
    if(!draft.extra) draft.extra=[];
    draft.extra.unshift({exercise:defaultExercise("Pecho"),sets:[],notes:""});
    saveState();
    renderAll();
    setTimeout(()=>alert("Ejercicio extra añadido solo al registro. Suma series realizadas, pero no cambia el objetivo semanal de Mi rutina."),50);
    return;
  }
  const day=ensureCurrentDay();
  day.exercises.unshift(defaultExercise("Pecho"));
  saveState();
  renderAll();
}
function exportExcel(){
  const wb=XLSX.utils.book_new(), routineRows=[], sessionRows=[];
  state.weeks.forEach(week=>Object.entries(state.routine[week]||{}).forEach(([day,obj])=>(obj.exercises||[]).forEach(e=>routineRows.push({Semana:week,Día:day,Tipo:obj.title,Ejercicio:e.name,Grupo:e.group,Series:e.sets,Reps:e.reps,Descanso:e.rest,Aparato:e.equipment||"",Objetivo:e.objective||"",Cómo_hacerlo:e.how||"",Intensidad:e.loadLevel||"Moderado",Guía_carga:e.loadGuide||"",Recomendación:e.recommendation||"",Nota:e.note||""}))));
  state.sessions.forEach(s=>s.exercises.forEach(e=>e.sets.forEach((set,i)=>sessionRows.push({Fecha:s.date,Semana:s.week,Día:s.day,Ejercicio:e.name,Grupo:e.group,Serie:i+1,Peso:set.weight,Reps:set.reps,RIR:set.rir,Dolor:set.pain,Hecha:set.done?"Sí":"No",Observaciones:e.notes||""}))));
  const p=state.profile, profileRows=[{Nombre:p.name,Edad:p.age,Estatura:p.height,Peso:p.weight,Correo:p.email,WhatsApp:p.phone,Objetivo:p.goal,Nivel:p.level,Días:p.days,Tiempo:p.time,Lugar:p.place,Énfasis:p.focus,Salud:(p.health||[]).join(", "),Alarmas:(p.alarms||[]).join(", "),Dolor:p.painLevel,Zona:p.painZone,Antecedentes:p.medicalHistory,Lesiones:p.injuryHistory,Evitar:p.avoid,Notas:p.notes,Screening:p.risk}];
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(profileRows),"Formulario");
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(routineRows),"Rutina");
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(sessionRows),"Registros");
  XLSX.writeFile(wb,"Prime_OS_respaldo.xlsx");
}
function exportAnamnesisWord(){const errors=validateProfile(); if(errors.length){showValidation(errors);return;} const p=state.profile; const html=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Anamnesis Prime OS</title><style>body{font-family:Arial,sans-serif;line-height:1.5;color:#111}h1{color:#0b5ed7}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:8px;text-align:left}th{background:#eee}</style></head><body><h1>Anamnesis inicial - Prime OS</h1><p><strong>Fecha:</strong> ${new Date().toLocaleString("es-CL")}</p><table><tr><th>Campo</th><th>Respuesta</th></tr>${[["Nombre",p.name],["Edad",p.age],["Estatura",p.height],["Peso",p.weight],["Correo",p.email],["WhatsApp",p.phone],["Objetivo",p.goal],["Nivel",p.level],["Días disponibles",p.days],["Tiempo por sesión",p.time],["Lugar",p.place],["Énfasis",p.focus],["Salud/antecedentes",(p.health||[]).join(", ")],["Síntomas de alarma",(p.alarms||[]).join(", ")],["Dolor actual",p.painLevel],["Zona de molestia",p.painZone],["Antecedentes médicos",p.medicalHistory],["Lesiones o molestias anteriores",p.injuryHistory],["Ejercicios a evitar",p.avoid],["Notas",p.notes],["Resultado orientativo",p.risk]].map(([a,b])=>`<tr><td>${escapeHtml(a)}</td><td>${escapeHtml(b)}</td></tr>`).join("")}</table><p><em>Este documento no reemplaza evaluación médica, kinesiológica ni nutricional.</em></p></body></html>`; const blob=new Blob(["\ufeff",html],{type:"application/msword"}),a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`Anamnesis_Prime_OS_${(p.name||"cliente").replace(/[^\wáéíóúñÁÉÍÓÚÑ-]+/g,"_")}.doc`; a.click(); URL.revokeObjectURL(a.href);}
function importFile(file){const status=$("#importStatus"),ext=file.name.split(".").pop().toLowerCase(),reader=new FileReader();reader.onload=e=>{try{if(ext==="json"){const data=JSON.parse(e.target.result);if(data.routine&&data.weeks){state=normalizeImportedState(deepMerge(defaultState(),data));saveState();status.textContent="Rutina personalizada JSON importada correctamente.";renderAll();}else status.textContent="JSON leído, pero no parece respaldo de Prime OS.";}else if(ext==="csv"){importCSV(e.target.result);status.textContent="CSV importado como rutina personalizada.";renderAll();}else if(["xlsx","xls"].includes(ext)){const wb=XLSX.read(e.target.result,{type:"array"}),first=wb.SheetNames[0],rows=XLSX.utils.sheet_to_json(wb.Sheets[first],{defval:""});importRows(rows);status.textContent="Excel importado como rutina personalizada.";renderAll();}}catch(err){status.textContent="Error al importar: "+err.message;}}; if(["xlsx","xls"].includes(ext))reader.readAsArrayBuffer(file);else reader.readAsText(file);}
function importCSV(text){const lines=text.split(/\r?\n/).filter(Boolean),headers=lines.shift().split(",").map(h=>h.trim());importRows(lines.map(line=>{const vals=line.split(",");return Object.fromEntries(headers.map((h,i)=>[h,vals[i]||""]));}));}
function importRows(rows){const routine={};rows.forEach(r=>{const week=r.Semana||r.week||"Semana 1",day=r["Día"]||r.Dia||r.day||"Día 1";if(!routine[week])routine[week]={};if(!routine[week][day])routine[week][day]={title:day,exercises:[]};const group=r.Grupo||r.Músculo||r.Musculo||r.group||"General",name=r.Ejercicio||r.exercise||"Ejercicio personalizado";let item=(EXERCISE_LIBRARY[group]||[]).find(e=>e.name===name);let ex=item?makeExerciseFromLibrary(item):makeExerciseFromLibrary({name,group,equipment:r.Aparato||r.Equipo||"Equipo a definir",sets:Number(r.Series||3),reps:r.Reps||"10-12",rest:r.Descanso||"90 s",objective:r.Objetivo||"Ejercicio personalizado.",how:r.Cómo_hacerlo||r.Como||r.how||"Describe cómo se ejecuta.",recommendation:r.Recomendación||r.Nota||""});ex.sets=Number(r.Series||ex.sets);ex.loadLevel=r.Intensidad||r.Peso||ex.loadLevel||"Moderado";applyLoadToExercise(ex, ex.loadLevel);ex.reps=r.Reps||ex.reps;ex.rest=r.Descanso||ex.rest;routine[week][day].exercises.push(ex);});state.routine=routine;state.weeks=Object.keys(routine).length?Object.keys(routine):["Semana 1"];state.selectedWeek=state.weeks[0];state.selectedDay=Object.keys(state.routine[state.selectedWeek]||{})[0]||"Día 1";state.planMeta.generated=true;saveState();}
function bindControls(){
  $("#weekSelect").addEventListener("change",e=>{state.selectedWeek=e.target.value;saveState();renderAll();});
  $("#daySelect").addEventListener("change",e=>{state.selectedDay=e.target.value;saveState();renderAll();});
  $("#addWeekBtn").addEventListener("click",addWeek); $("#exportBtn").addEventListener("click",exportExcel);
  $("#saveFormBtn").addEventListener("click",()=>{const errors=validateProfile(); if(errors.length){showValidation(errors);return;} renderScreening();renderHome();alert("Formulario guardado.");});
  $("#exportAnamnesisBtn")?.addEventListener("click",exportAnamnesisWord);
  $("#generateFromFormBtn").addEventListener("click",()=>{const errors=validateProfile();if(errors.length){showValidation(errors);return;}generateRoutine(state.profile.days,state.profile.level,state.profile.goal,state.profile.focus);$("#generatorDays").value=state.profile.days;$("#generatorLevel").value=state.profile.level;$("#generatorGoal").value=state.profile.goal;$("#generatorFocus").value=state.profile.focus;go("rutina");});
  ["generatorDays","generatorFocus","generatorLevel","generatorGoal"].forEach(id=>$("#"+id).addEventListener("change",renderSplitPreview));
  $("#generateRoutineBtn").addEventListener("click",()=>{generateRoutine($("#generatorDays").value,$("#generatorLevel").value,$("#generatorGoal").value,$("#generatorFocus").value);go("rutina");});
  $("#goPersonalBtn").addEventListener("click",()=>go("personalizado")); $("#addExerciseBtn").addEventListener("click",()=>addExercise(false)); $("#updateSessionDraftBtn")?.addEventListener("click",()=>{collectRegisterDraft(); alert("Cambios actualizados en el registro. Puedes cambiar de pestaña sin perderlos."); renderAll();}); $("#saveSessionBtn").addEventListener("click",saveSession);
  $("#clearBtn").addEventListener("click",()=>{if(confirm("¿Borrar todos los datos locales?")){localStorage.removeItem(STORAGE_KEY);state=defaultState();saveState();renderAll();go("inicio");}});
  $("#resetDemoBtn").addEventListener("click",()=>{state=defaultState();saveState();renderAll();go("inicio");});
  $("#importInput").addEventListener("change",e=>{const file=e.target.files?.[0];if(file)importFile(file);});
  $("#progressScope")?.addEventListener("change", renderProgress);
  $$("#themeButtons .theme-chip").forEach(btn=>btn.addEventListener("click",()=>{applyTheme(btn.dataset.theme); saveState();}));
}
function renderAll(){applyTheme(state.ui?.theme||"azul");renderSelectors();fillProfile();renderSplitPreview();renderHome();renderRoutine();renderRegister();renderProgress();renderEvidenceSettings();}
document.addEventListener("DOMContentLoaded",()=>{bindLaunch();bindNav();bindControls();renderAll();});
