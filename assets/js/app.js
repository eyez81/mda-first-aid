
const course = [
  {
    id: 1,
    title: "מבוא",
    available: true,
    description: "היכרות עם מד״א, עקרונות העזרה הראשונה והמשפט ההומניטרי.",
    lessons: [
      {
        id: "1.1",
        title: "מבוא למד״א",
        pdf: "pdf/1-intro/1.1-mda-intro.pdf",
        lead: "היכרות עם מד״א כארגון ההצלה הלאומי בישראל, המבנה שלו והתפקידים המרכזיים שלו.",
        points: [
          "מהו מגן דוד אדום ומה מקומו במערך ההצלה בישראל",
          "התפתחות הארגון לאורך השנים",
          "תחומי הפעילות המרכזיים של מד״א",
          "הדרכה, שירותי עזרה ראשונה ומערך הדם"
        ],
        remember: "המטרה כאן היא להבין קודם את תפקידו של מד״א בתוך מערכת ההצלה, לפני שנכנסים לפרקטיקה של טיפול בנפגעים."
      },
      {
        id: "1.2",
        title: "עקרונות העזרה הראשונה",
        pdf: "pdf/1-intro/1.2-first-aid-principles.pdf",
        lead: "מהי עזרה ראשונה, מהן מטרותיה ואיך פועלים באופן מסודר בזירת אירוע.",
        points: [
          "הגדרת עזרה ראשונה",
          "עצירת הידרדרות הנפגע והטבת מצבו ככל האפשר",
          "הזעקת עזרה ופינוי לדרג רפואי מתקדם יותר",
          "סריקת זירת האירוע, זיהוי סכנות והערכת מצב ראשונית"
        ],
        remember: "לפני כל טיפול יש לוודא שהזירה בטוחה ולפעול לפי סדר פעולות ברור."
      },
      {
        id: "1.3",
        title: "המשפט ההומניטרי",
        pdf: "pdf/1-intro/1.3-humanitarian-law.pdf",
        lead: "היכרות עם התפתחות המשפט ההומניטרי והרעיונות שהובילו להקמת התנועה הבינלאומית.",
        points: [
          "לידתה של התנועה ההומניטרית",
          "הנרי דונאנט וקרב סולפרינו",
          "הצורך להגן על צוותים רפואיים",
          "המשמעות של סימנים מוסכמים בינלאומיים"
        ],
        remember: "הרעיון המרכזי: טיפול רפואי צריך להינתן לנפגעים ללא קשר לצד שבו הם נמצאים."
      }
    ]
  },
  {
    id: 2,
    title: "אנטומיה ופיזיולוגיה של גוף האדם",
    available: true,
    description: "יסודות מבנה הגוף ומערכות העצבים, הנשימה, הלב וכלי הדם והשלד.",
    lessons: [
      {
        id: "2.1",
        title: "מבוא לאנטומיה וגוף האדם",
        pdf: "pdf/2-anatomy/2.1-anatomy-intro.pdf",
        lead: "מבוא למושגים בסיסיים שיעזרו להבין איך גוף האדם בנוי ופועל.",
        points: [
          "אנטומיה, פיזיולוגיה, פתולוגיה ופתופיזיולוגיה",
          "תא, רקמה, איבר ומערכת",
          "הומאוסטזיס ושמירה על סביבה פנימית יציבה",
          "רמות הארגון בגוף האדם"
        ],
        remember: "מבנה ותפקוד הולכים יחד: כדי להבין מה השתבש, צריך קודם להבין איך המערכת אמורה לעבוד."
      },
      {
        id: "2.2",
        title: "מערכת העצבים",
        pdf: "pdf/2-anatomy/2.2-nervous-system.pdf",
        lead: "מערכת הבקרה של הגוף: קליטת מידע, עיבודו והפעלת מערכות הגוף.",
        points: [
          "מערכת העצבים המרכזית וההיקפית",
          "המוח הגדול, המוח הקטן וגזע המוח",
          "חוט השדרה",
          "המערכת הסומטית והמערכת האוטונומית"
        ],
        remember: "מערכת העצבים אחראית על בקרה, ויסות והפעלת מערכות הגוף."
      },
      {
        id: "2.3",
        title: "מערכת הנשימה",
        pdf: "pdf/2-anatomy/2.3-respiratory-system.pdf",
        lead: "כיצד הגוף מכניס חמצן, מוציא פחמן דו־חמצני ומבצע חילוף גזים.",
        points: [
          "תפקידי מערכת הנשימה",
          "נשימה חיצונית לעומת נשימה תאית",
          "מבנה בית החזה",
          "הריאות, דרכי הנשימה והסרעפת"
        ],
        remember: "מטרת מערכת הנשימה היא לא רק להכניס אוויר, אלא לאפשר חילוף גזים תקין בין הגוף לסביבה."
      },
      {
        id: "2.4",
        title: "מערכת הלב וכלי הדם",
        pdf: "pdf/2-anatomy/2.4-cardiovascular-system.pdf",
        lead: "מערכת ההובלה של הגוף: לב, כלי דם ודם.",
        points: [
          "תפקידי מערכת הדם",
          "מרכיבי הדם ותפקידם",
          "מבנה הלב",
          "המחזור הגדול והמחזור הקטן"
        ],
        remember: "המערכת פועלת כמערכת סגורה שמעבירה חמצן וחומרים חיוניים לכל תאי הגוף."
      },
      {
        id: "2.5",
        title: "מערכת השלד והשרירים",
        pdf: "pdf/2-anatomy/2.5-musculoskeletal-system.pdf",
        lead: "המערכת שתומכת בגוף, מגנה על איברים ומאפשרת תנועה.",
        points: [
          "תפקידי מערכת השלד",
          "סוגי עצמות וסחוס",
          "עמוד השדרה וכלוב בית החזה",
          "סוגי שרירים ותפקידיהם"
        ],
        remember: "השלד אינו רק מסגרת לגוף — הוא גם מגן, מאפשר תנועה ומשתתף בתהליכים חיוניים נוספים."
      }
    ]
  },
  {id:3,title:"החייאה",available:false,description:"החייאה בסיסית, חנק ושימוש באמצעים.",lessons:[
    {id:"3.1",title:"החייאה בסיסית לציבור הרחב",available:false},
    {id:"3.2",title:"חנק מגוף זר",available:false},
    {id:"3.3",title:"החייאה באמצעות מכשירים",available:false},
    {id:"3.4",title:"הגז",available:false}
  ]},
  {id:4,title:"מצבי חוסר הכרה",available:false,description:"עילפון, טביעה, תלייה, התחשמלות, הרעלות ושאיפות.",lessons:[
    {id:"4.1",title:"עילפון",available:false},
    {id:"4.2",title:"טביעה",available:false},
    {id:"4.3",title:"תלייה",available:false},
    {id:"4.4",title:"התחשמלות",available:false},
    {id:"4.5",title:"הרעלות",available:false},
    {id:"4.6",title:"שאיפות עשן וגזים",available:false}
  ]},
  {id:5,title:"הטיפול בחולה",available:false,description:"סכמת טיפול, גישה לחולה ואנמנזה.",lessons:[
    {id:"5.1",title:"סכימת טיפול בחולה",available:false},
    {id:"5.2",title:"הגישה לחולה ואנמנזה",available:false},
    {id:"5.3",title:"מדדים חיוניים",available:false}
  ]},
  {id:6,title:"מצבי חירום בחולה",available:false,description:"סוכרת, פרכוסים ושבץ מוחי.",lessons:[
    {id:"6.1",title:"סכרת",available:false},
    {id:"6.2",title:"פרכוסים",available:false},
    {id:"6.3",title:"שבץ מוחי",available:false}
  ]},
  {id:7,title:"מערכת הנשימה",available:false,description:"מצבי חירום נשימתיים ואנפילקסיס.",lessons:[
    {id:"7.1",title:"מצבי חירום נשימתיים",available:false},
    {id:"7.2",title:"אנאפילקסיס ואלרגיה",available:false}
  ]},
  {id:8,title:"מחלות לב וילדים",available:false,description:"מחלות לב וכלי דם.",lessons:[
    {id:"8.1",title:"מחלות לב וכלי דם",available:false}
  ]},
  {id:9,title:"הטיפול בטראומה",available:false,description:"מבוא, קינמטיקה, PHTLS ונתיב אוויר.",lessons:[
    {id:"9.1",title:"מבוא לטראומה",available:false},
    {id:"9.2",title:"קינמטיקה בטראומה",available:false},
    {id:"9.3",title:"PHTLS",available:false},
    {id:"9.4",title:"נתיב אוויר בטראומה",available:false}
  ]},
  {id:10,title:"נושאים עיקריים בטראומה",available:false,description:"פגיעות ראש, חזה, בטן, הלם ועוד.",lessons:[
    {id:"10.1",title:"פגיעות ראש",available:false},
    {id:"10.2",title:"פגיעות חזה",available:false},
    {id:"10.3",title:"בטן ופגיעות בטן",available:false},
    {id:"10.4",title:"הלם",available:false},
    {id:"10.5",title:"שטפי דם",available:false},
    {id:"10.6",title:"פגיעות עמוד שדרה",available:false}
  ]},
  {id:11,title:"מערכת התנועה ומערכת העור",available:false,description:"פגיעות תנועה, רקמה רכה ועור.",lessons:[
    {id:"11.1",title:"פגיעות במערכת התנועה",available:false},
    {id:"11.2",title:"כוויות ופגיעות ברקמה רכה",available:false}
  ]},
  {id:12,title:"פגיעות אקלים ובעלי חיים",available:false,description:"פגיעות אקלים ופגיעות מבעלי חיים.",lessons:[
    {id:"12.1",title:"פגיעות אקלים",available:false},
    {id:"12.2",title:"פגיעות בעלי חיים",available:false}
  ]},
  {id:13,title:"טראומה באוכלוסיות מיוחדות",available:false,description:"הריון, ילדים וקשישים.",lessons:[
    {id:"13.1",title:"טראומה נשים בהריון",available:false},
    {id:"13.2",title:"טראומה בילדים",available:false},
    {id:"13.3",title:"טראומה בקשישים",available:false}
  ]}
];

const completed = new Set(JSON.parse(localStorage.getItem("mdaCompleted") || "[]"));
let currentLesson = localStorage.getItem("mdaLastLesson") || "1.1";

const nav = document.getElementById("courseNav");
const grid = document.getElementById("topicGrid");
const lessonView = document.getElementById("lessonView");
const hero = document.querySelector(".hero");
const sectionHead = document.querySelector(".section-head");

function availableLessons(){
  return course.flatMap(t => t.lessons || []);
}

function renderNav(){
  nav.innerHTML = course.map(topic => `
    <div class="nav-group ${topic.available ? "open" : ""}">
      <button type="button" data-nav-topic="${topic.id}">
        <span>${topic.id} — ${topic.title}</span>
        <span>${topic.available ? "⌄" : "•"}</span>
      </button>
      <div class="nav-children">
        ${(topic.lessons || []).map(l => l.available === false
          ? `<span class="nav-child disabled">${l.id} — ${l.title}</span>`
          : `<a href="#" class="nav-child" data-open-topic="${l.id}">${l.id} — ${l.title}</a>`
        ).join("")}
      </div>
    </div>
  `).join("");
}

function renderGrid(){
  grid.innerHTML = course.map(topic => `
    <article class="topic-card ${topic.available ? "" : "locked"}">
      <div>
        <div class="topic-top">
          <div class="topic-num">${topic.id}</div>
          <span>${topic.available ? `${topic.lessons.length} יחידות` : "בקרוב"}</span>
        </div>
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
      </div>
      <div class="topic-footer">
        <span>${topic.available ? progressForTopic(topic) : "ממתין לחומרים"}</span>
        ${topic.available ? `<button class="topic-open" data-open-topic="${topic.lessons[0].id}">פתח נושא ←</button>` : `<span>🔒</span>`}
      </div>
    </article>
  `).join("");
}

function progressForTopic(topic){
  const count = topic.lessons.filter(l => completed.has(l.id)).length;
  return `${count}/${topic.lessons.length} הושלמו`;
}

function findLesson(id){
  for(const topic of course){
    const lesson = (topic.lessons || []).find(l => l.id === id);
    if(lesson) return {topic, lesson};
  }
  return null;
}

function openLesson(id){
  const found = findLesson(id);
  if(!found) return;
  const {topic, lesson} = found;
  currentLesson = id;
  localStorage.setItem("mdaLastLesson", id);

  hero.classList.add("hidden");
  sectionHead.classList.add("hidden");
  grid.classList.add("hidden");
  lessonView.classList.remove("hidden");

  document.getElementById("lessonNumber").textContent = `יחידה ${lesson.id} · ${topic.title}`;
  document.getElementById("lessonTitle").textContent = lesson.title;
  document.getElementById("lessonLead").textContent = lesson.lead;
  document.getElementById("lessonPoints").innerHTML = lesson.points.map(p => `<li>${p}</li>`).join("");
  document.getElementById("lessonRemember").textContent = lesson.remember;
  document.getElementById("pdfLink").href = lesson.pdf;

  const status = document.getElementById("lessonStatus");
  status.textContent = completed.has(id) ? "✓ נלמד" : "טרם הושלם";

  const markBtn = document.getElementById("markComplete");
  markBtn.textContent = completed.has(id) ? "סומן כ־למדתי ✓" : "סמן כ־למדתי";

  document.getElementById("lessonNav").innerHTML = topic.lessons.map(l => `
    <button class="lesson-nav-btn ${l.id === id ? "active" : ""} ${completed.has(l.id) ? "done" : ""}" data-open-topic="${l.id}">
      ${l.id} — ${l.title}
    </button>
  `).join("");

  window.scrollTo({top:0,behavior:"smooth"});
  closeSidebar();
}

function showHome(){
  lessonView.classList.add("hidden");
  hero.classList.remove("hidden");
  sectionHead.classList.remove("hidden");
  grid.classList.remove("hidden");
  renderGrid();
  updateProgress();
  window.scrollTo({top:0,behavior:"smooth"});
}

function toggleComplete(){
  if(completed.has(currentLesson)) completed.delete(currentLesson);
  else completed.add(currentLesson);
  localStorage.setItem("mdaCompleted", JSON.stringify([...completed]));
  openLesson(currentLesson);
  renderGrid();
  updateProgress();
}

function updateProgress(){
  const total = availableLessons().length;
  const done = availableLessons().filter(l => completed.has(l.id)).length;
  const pct = total ? Math.round((done/total)*100) : 0;
  document.getElementById("progressLabel").textContent = `${pct}% הושלם`;
  document.getElementById("progressBar").style.width = `${pct}%`;
}

function closeSidebar(){
  document.getElementById("sidebar").classList.remove("open");
}

document.addEventListener("click", e => {
  const open = e.target.closest("[data-open-topic]");
  if(open){
    e.preventDefault();
    openLesson(open.dataset.openTopic);
    return;
  }
  const navTopic = e.target.closest("[data-nav-topic]");
  if(navTopic){
    const group = navTopic.closest(".nav-group");
    group.classList.toggle("open");
  }
});

document.getElementById("backToHome").addEventListener("click", showHome);
document.getElementById("markComplete").addEventListener("click", toggleComplete);
document.getElementById("continueBtn").addEventListener("click", () => openLesson(localStorage.getItem("mdaLastLesson") || "1.1"));
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

renderNav();
renderGrid();
updateProgress();
