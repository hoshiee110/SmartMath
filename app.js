// Translations
const translations = {
  en: {
    subtitleLang: "Interactive Graph Learning System",
    loginSubtitle: "Master Mathematics Through Interactive Learning",
    studentNamePlaceholder: "Enter your name",
    loginBtnText: "Log In",
    changeLangText: "Change Language",
    welcomeText: "Welcome!",
    scoreLabel: "Score",
    levelLabel: "Level",
    logoutBtnText: "Logout",
    menuTitle: "Choose Your Learning Activity",
    graphQuizText: "📊 Graph Quiz (3 Difficulty Levels)",
    shapeGameText: "🎨 Shape Guessing Game",
    aiTutorText: "🤖 AI Math Tutor",
    
    // Graph Quiz
    graphQuizTitle: "Graph Quiz Challenge",
    graphQuizDesc: "Test your knowledge about different types of graphs. Answer questions based on graph properties, equations, and characteristics.",
    difficultySelectText: "Select Difficulty Level:",
    
    // Easy Questions
    easyQ1: "What is the y-intercept of y = 2x + 3?",
    easyQ1Options: ["1", "2", "3", "4"],
    easyQ1Answer: 2,
    
    easyQ2: "Which graph represents a linear function?",
    easyQ2Options: ["Parabola", "Straight Line", "Circle", "Wave"],
    easyQ2Answer: 1,
    
    // Medium Questions
    mediumQ1: "What is the vertex of y = (x - 2)² + 3?",
    mediumQ1Options: ["(2, 3)", "(-2, 3)", "(3, 2)", "(-3, -2)"],
    mediumQ1Answer: 0,
    
    mediumQ2: "Find the x-intercepts of y = x² - 4",
    mediumQ2Options: ["x = 0, 4", "x = 2, -2", "x = 4, -4", "No x-intercepts"],
    mediumQ2Answer: 1,
    
    // Hard Questions
    hardQ1: "What is the domain of y = √(x - 3)?",
    hardQ1Options: ["x ≥ 3", "x ≤ 3", "All real numbers", "x ≠ 3"],
    hardQ1Answer: 0,
    
    hardQ2: "If f(x) = x² and g(x) = 2x, what is (g∘f)(2)?",
    hardQ2Options: ["8", "16", "4", "2"],
    hardQ2Answer: 0,
    
    // Shape Game
    shapeGameTitle: "🎨 Shape Guessing Game",
    shapeGameDesc: "Identify the type of graph based on its visual representation. Quick and fun!",
    shapeInstruction: "What type of graph is this?",
    
    // AI Tutor
    aiTutorTitle: "🤖 AI Mathematics Tutor",
    aiTutorDesc: "Ask any mathematics question and get personalized help. Or choose from suggested topics!",
    welcomeMessage: "Hi! I'm your AI Math Tutor 🧮. Ask me anything about graphs, functions, equations, or any math topic! I'm here to help you understand concepts better.",
    suggestedTopicsLabel: "📌 Popular Topics (Click to ask):",
    sendText: "Send Question",
    
    // Results
    backText: "Back",
    nextText: "Next Question",
    submitText: "Submit Answer",
    
    // Messages
    correctAnswer: "✅ Correct! Great job!",
    wrongAnswer: "❌ Wrong answer. Try again!",
    pointsAdded: "points added!",
  },
  
  my: {
    subtitleLang: "Sistem Pembelajaran Graf Interaktif",
    loginSubtitle: "Kuasai Matematik Melalui Pembelajaran Interaktif",
    studentNamePlaceholder: "Masukkan nama anda",
    loginBtnText: "Log Masuk",
    changeLangText: "Tukar Bahasa",
    welcomeText: "Selamat datang!",
    scoreLabel: "Mata",
    levelLabel: "Tahap",
    logoutBtnText: "Log Keluar",
    menuTitle: "Pilih Aktiviti Pembelajaran Anda",
    graphQuizText: "📊 Kuiz Graf (3 Tahap Kesukaran)",
    shapeGameText: "🎨 Permainan Teka Bentuk",
    aiTutorText: "🤖 Tutor Matematik AI",
    
    // Graph Quiz
    graphQuizTitle: "Cabaran Kuiz Graf",
    graphQuizDesc: "Uji pengetahuan anda tentang pelbagai jenis graf. Jawab soalan berdasarkan sifat, persamaan, dan ciri-ciri graf.",
    difficultySelectText: "Pilih Tahap Kesukaran:",
    
    // Easy Questions
    easyQ1: "Apakah pintasan-y bagi y = 2x + 3?",
    easyQ1Options: ["1", "2", "3", "4"],
    easyQ1Answer: 2,
    
    easyQ2: "Graf mana yang mewakili fungsi linear?",
    easyQ2Options: ["Parabola", "Garis Lurus", "Bulatan", "Gelombang"],
    easyQ2Answer: 1,
    
    // Medium Questions
    mediumQ1: "Apakah puncak bagi y = (x - 2)² + 3?",
    mediumQ1Options: ["(2, 3)", "(-2, 3)", "(3, 2)", "(-3, -2)"],
    mediumQ1Answer: 0,
    
    mediumQ2: "Cari pintasan-x bagi y = x² - 4",
    mediumQ2Options: ["x = 0, 4", "x = 2, -2", "x = 4, -4", "Tiada pintasan-x"],
    mediumQ2Answer: 1,
    
    // Hard Questions
    hardQ1: "Apakah domain bagi y = √(x - 3)?",
    hardQ1Options: ["x ≥ 3", "x ≤ 3", "Semua nombor nyata", "x ≠ 3"],
    hardQ1Answer: 0,
    
    hardQ2: "Jika f(x) = x² dan g(x) = 2x, apakah (g∘f)(2)?",
    hardQ2Options: ["8", "16", "4", "2"],
    hardQ2Answer: 0,
    
    // Shape Game
    shapeGameTitle: "🎨 Permainan Teka Bentuk",
    shapeGameDesc: "Kenal pasti jenis graf berdasarkan perwakilan visualnya. Cepat dan menyeronokkan!",
    shapeInstruction: "Graf jenis apakah ini?",
    
    // AI Tutor
    aiTutorTitle: "🤖 Tutor Matematik AI",
    aiTutorDesc: "Tanya apa-apa soalan matematik dan dapatkan bantuan yang dipersonalisasi. Atau pilih dari topik yang dicadangkan!",
    welcomeMessage: "Halo! Saya tutor matematik AI anda 🧮. Tanya saya apa-apa tentang graf, fungsi, persamaan, atau topik matematik lain! Saya di sini untuk membantu anda memahami konsep dengan lebih baik.",
    suggestedTopicsLabel: "📌 Topik Populer (Klik untuk bertanya):",
    sendText: "Hantar Soalan",
    
    // Results
    backText: "Kembali",
    nextText: "Soalan Seterusnya",
    submitText: "Hantar Jawapan",
    
    // Messages
    correctAnswer: "✅ Betul! Kerja yang bagus!",
    wrongAnswer: "❌ Jawapan salah. Cuba lagi!",
    pointsAdded: "mata ditambah!",
  }
};

// Global State
let currentLanguage = null;
let studentName = null;
let score = 0;
let level = 1;
let currentDifficulty = null;
let currentShapeIndex = 0;
let selectedAnswer = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    currentLanguage = savedLang;
    updateUIText();
    loadProgress();
    if (studentName) {
      goToPage('mainMenu');
    } else {
      goToPage('login');
    }
  }
});

// Language System
function setLanguage(lang) {
  if (lang === null) {
    goToPage('langSelection');
    return;
  }
  
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updateUIText();
  goToPage('login');
}

function updateUIText() {
  if (!currentLanguage) return;
  const t = translations[currentLanguage];
  
  const safe = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  safe('subtitleLang', t.subtitleLang);
  safe('loginSubtitle', t.loginSubtitle);
  document.getElementById('studentName').placeholder = t.studentNamePlaceholder;
  safe('loginBtnText', t.loginBtnText);
  safe('changeLangText', t.changeLangText);
  safe('welcomeText', t.welcomeText);
  safe('scoreLabel', t.scoreLabel);
  safe('levelLabel', t.levelLabel);
  safe('logoutBtnText', t.logoutBtnText);
  safe('menuTitle', t.menuTitle);
  safe('graphQuizText', t.graphQuizText);
  safe('shapeGameText', t.shapeGameText);
  safe('aiTutorText', t.aiTutorText);
  safe('graphQuizTitle', t.graphQuizTitle);
  safe('graphQuizDesc', t.graphQuizDesc);
  safe('difficultySelectText', t.difficultySelectText);
  safe('shapeGameTitle', t.shapeGameTitle);
  safe('shapeGameDesc', t.shapeGameDesc);
  safe('shapeInstruction', t.shapeInstruction);
  safe('aiTutorTitle', t.aiTutorTitle);
  safe('aiTutorDesc', t.aiTutorDesc);
  safe('welcomeMessage', t.welcomeMessage);
  safe('suggestedTopicsLabel', t.suggestedTopicsLabel);
  
  document.querySelectorAll('#backText').forEach(el => el.textContent = t.backText);
  document.querySelectorAll('#nextText').forEach(el => el.textContent = t.nextText);
  document.querySelectorAll('#submitText').forEach(el => el.textContent = t.submitText);
  document.querySelectorAll('#sendText').forEach(el => el.textContent = t.sendText);
  
  document.getElementById('studentQuestion').placeholder = t.aiTutorDesc;
}

// Login System
function login() {
  const name = document.getElementById('studentName').value.trim();
  if (!name) {
    alert(currentLanguage === 'en' ? 'Please enter your name' : 'Sila masukkan nama anda');
    return;
  }
  
  studentName = name;
  saveProgress();
  document.getElementById('studentNameDisplay').textContent = name;
  updateScore();
  goToPage('mainMenu');
}

function logout() {
  const confirmText = currentLanguage === 'en' 
    ? 'Are you sure you want to logout?' 
    : 'Adakah anda pasti ingin log keluar?';
  
  if (confirm(confirmText)) {
    studentName = null;
    score = 0;
    level = 1;
    document.getElementById('studentName').value = '';
    localStorage.removeItem('smartmath_progress');
    goToPage('login');
  }
}

// Page Navigation
function goToPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pageEl = document.getElementById(page);
  if (pageEl) pageEl.classList.add('active');
  
  if (page === 'graphQuiz') {
    loadDifficultyButtons();
  } else if (page === 'shapeGame') {
    setTimeout(() => drawRandomShape(), 100);
  } else if (page === 'aiTutor') {
    initAITutor();
  }
}

// ===== GRAPH QUIZ SYSTEM =====
function loadDifficultyButtons() {
  const difficulties = [
    { level: 'easy', label: 'MUDAH', emoji: '⭐' },
    { level: 'medium', label: 'SEDERHANA', emoji: '⭐⭐' },
    { level: 'hard', label: 'SUKAR', emoji: '⭐⭐⭐' }
  ];

  let html = '';
  difficulties.forEach(d => {
    const lang = currentLanguage === 'en' ? d.label : ['Mudah', 'Sederhana', 'Sukar'][difficulties.indexOf(d)];
    html += `<button class="difficulty-btn ${d.level}" onclick="setQuizDifficulty('${d.level}')">${d.emoji} ${lang}</button>`;
  });
  
  document.getElementById('difficultyButtons').innerHTML = html;
}

function setQuizDifficulty(difficulty) {
  currentDifficulty = difficulty;
  document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
  event.target.classList.add('selected');
  
  loadQuizQuestion();
}

function loadQuizQuestion() {
  const t = translations[currentLanguage];
  const contentDiv = document.getElementById('quizContent');
  const submitBtn = document.getElementById('submitQuizBtn');
  
  let question, options, answer;
  
  if (currentDifficulty === 'easy') {
    const rand = Math.random() > 0.5 ? 0 : 1;
    question = rand === 0 ? t.easyQ1 : t.easyQ2;
    options = rand === 0 ? t.easyQ1Options : t.easyQ2Options;
    answer = rand === 0 ? t.easyQ1Answer : t.easyQ2Answer;
  } else if (currentDifficulty === 'medium') {
    const rand = Math.random() > 0.5 ? 0 : 1;
    question = rand === 0 ? t.mediumQ1 : t.mediumQ2;
    options = rand === 0 ? t.mediumQ1Options : t.mediumQ2Options;
    answer = rand === 0 ? t.mediumQ1Answer : t.mediumQ2Answer;
  } else {
    const rand = Math.random() > 0.5 ? 0 : 1;
    question = rand === 0 ? t.hardQ1 : t.hardQ2;
    options = rand === 0 ? t.hardQ1Options : t.hardQ2Options;
    answer = rand === 0 ? t.hardQ1Answer : t.hardQ2Answer;
  }
  
  sessionStorage.setItem('currentAnswer', answer);
  
  let html = `<div class="question-box"><p><strong>${question}</strong></p></div>`;
  html += '<div style="margin: 20px 0;">';
  
  options.forEach((opt, idx) => {
    html += `<button style="width: 100%; padding: 12px; margin: 8px 0; text-align: left; background: white; color: #667eea; border: 2px solid #ddd;" onclick="selectAnswer(${idx}, this)">${opt}</button>`;
  });
  
  html += '</div>';
  contentDiv.innerHTML = html;
  submitBtn.style.display = 'block';
  selectedAnswer = null;
}

function selectAnswer(idx, btn) {
  document.querySelectorAll('[onclick*="selectAnswer"]').forEach(b => b.style.borderColor = '#ddd');
  btn.style.borderColor = '#667eea';
  btn.style.backgroundColor = '#f0f7ff';
  selectedAnswer = idx;
}

function submitQuizAnswer() {
  if (selectedAnswer === null) {
    alert(currentLanguage === 'en' ? 'Please select an answer' : 'Sila pilih jawapan');
    return;
  }
  
  const correct = parseInt(sessionStorage.getItem('currentAnswer'));
  const t = translations[currentLanguage];
  const contentDiv = document.getElementById('quizContent');
  
  if (selectedAnswer === correct) {
    const points = currentDifficulty === 'easy' ? 5 : currentDifficulty === 'medium' ? 10 : 15;
    score += points;
    contentDiv.innerHTML = `<div class="result correct">${t.correctAnswer}<br><strong>+${points} ${t.pointsAdded}</strong></div>`;
  } else {
    contentDiv.innerHTML = `<div class="result wrong">${t.wrongAnswer}</div>`;
  }
  
  updateScore();
  setTimeout(() => loadQuizQuestion(), 2000);
}

// ===== SHAPE GUESSING GAME =====
const shapeTypes = [
  { name: 'linear', draw: drawLinear },
  { name: 'parabola', draw: drawParabola },
  { name: 'cubic', draw: drawCubic },
  { name: 'exponential', draw: drawExponential },
  { name: 'sine', draw: drawSine }
];

function drawLinear(ctx, w, h) {
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(20, h - 20);
  ctx.lineTo(w - 20, 20);
  ctx.stroke();
}

function drawParabola(ctx, w, h) {
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let x = 20; x < w - 20; x++) {
    const y = Math.pow((x - w/2) / 50, 2) + 50;
    if (x === 20) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function drawCubic(ctx, w, h) {
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let x = 20; x < w - 20; x++) {
    const y = Math.pow((x - w/2) / 80, 3) * 100 + h/2;
    if (x === 20) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function drawExponential(ctx, w, h) {
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let x = 20; x < w - 20; x++) {
    const y = h - Math.pow(1.05, (x - 20) / 5);
    if (x === 20) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function drawSine(ctx, w, h) {
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let x = 20; x < w - 20; x++) {
    const y = Math.sin((x - 20) / 30) * 80 + h/2;
    if (x === 20) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function drawRandomShape() {
  currentShapeIndex = Math.floor(Math.random() * 5);
  const canvas = document.getElementById('shapeCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  shapeTypes[currentShapeIndex].draw(ctx, canvas.width, canvas.height);
  
  loadShapeOptions();
  document.getElementById('shapeResult').innerHTML = '';
  document.getElementById('nextShapeBtn').style.display = 'none';
}

function loadShapeOptions() {
  const shapes = ['Linear', 'Parabola', 'Cubic', 'Exponential', 'Sine Wave'];
  let html = '';
  
  shapes.forEach((shape, idx) => {
    html += `<button class="shape-option" onclick="selectShape(${idx})">${shape}</button>`;
  });
  
  document.getElementById('shapeOptions').innerHTML = html;
}

function selectShape(idx) {
  const t = translations[currentLanguage];
  const resultDiv = document.getElementById('shapeResult');
  
  if (idx === currentShapeIndex) {
    score += 8;
    resultDiv.innerHTML = `<div class="result correct">${t.correctAnswer} +8 ${t.pointsAdded}</div>`;
  } else {
    resultDiv.innerHTML = `<div class="result wrong">${t.wrongAnswer}</div>`;
  }
  
  updateScore();
  document.getElementById('nextShapeBtn').style.display = 'block';
}

function nextShapeGame() {
  drawRandomShape();
}

// ===== AI TUTOR SYSTEM =====
function initAITutor() {
  document.getElementById('chatContainer').innerHTML = '<div class="message tutor">' + translations[currentLanguage].welcomeMessage + '</div>';
  loadSuggestedTopics();
}

function loadSuggestedTopics() {
  const topics = currentLanguage === 'en' 
    ? ['What is a linear graph?', 'How to find the vertex of a parabola?', 'What does gradient mean?', 'How to identify graph transformations?', 'What is a function domain?']
    : ['Apakah itu graf linear?', 'Bagaimana mencari puncak parabola?', 'Apakah maksud kecerunan?', 'Bagaimana mengenal pasti transformasi graf?', 'Apakah domain fungsi?'];
  
  let html = '';
  topics.forEach(topic => {
    html += `<button onclick="askSuggestedQuestion('${topic}')">${topic}</button>`;
  });
  
  document.getElementById('suggestedTopics').innerHTML = html;
}

function sendQuestion() {
  const question = document.getElementById('studentQuestion').value.trim();
  if (!question) return;
  
  const container = document.getElementById('chatContainer');
  
  const studentMsg = document.createElement('div');
  studentMsg.className = 'message student';
  studentMsg.textContent = question;
  container.appendChild(studentMsg);
  
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message tutor';
  typingDiv.textContent = currentLanguage === 'en' ? '⏳ Thinking...' : '⏳ Sedang berfikir...';
  container.appendChild(typingDiv);
  
  container.scrollTop = container.scrollHeight;
  
  setTimeout(() => {
    typingDiv.remove();
    const response = generateAIResponse(question);
    
    const aiMsg = document.createElement('div');
    aiMsg.className = 'message tutor';
    aiMsg.textContent = response;
    container.appendChild(aiMsg);
    
    container.scrollTop = container.scrollHeight;
    score += 2;
    updateScore();
  }, 1500);
  
  document.getElementById('studentQuestion').value = '';
}

function askSuggestedQuestion(question) {
  document.getElementById('studentQuestion').value = question;
  sendQuestion();
}

function generateAIResponse(question) {
  const q = question.toLowerCase();
  
  const responses = {
    en: {
      linear: "A linear graph is a straight line! It represents a linear function like y = mx + b. The 'm' is the slope (steepness), and 'b' is where it crosses the y-axis.",
      parabola: "A parabola is a U-shaped or inverted U-shaped curve. It comes from quadratic functions like y = ax² + bx + c. The vertex is the highest or lowest point!",
      gradient: "Gradient (or slope) measures how steep a line is. It's calculated as rise/run = (y₂-y₁)/(x₂-x₁). A steep line has a large gradient!",
      vertex: "The vertex of a parabola y = ax² + bx + c is at x = -b/2a. Then substitute this x-value back into the equation to find the y-coordinate!",
      transformation: "Graph transformations include: shifts (up/down/left/right), stretches/compressions, and reflections. Each changes the original function in specific ways!",
      default: "Great question! 🧠 Let me explain: Mathematics is all about relationships and patterns. Understanding graphs helps you visualize these patterns and solve real-world problems!"
    },
    my: {
      linear: "Graf linear ialah garis lurus! Ia mewakili fungsi linear seperti y = mx + b. 'm' ialah cerun (kecuraman), dan 'b' ialah tempat ia memotong paksi-y.",
      parabola: "Parabola ialah lengkung berbentuk U atau U terbalik. Ia berasal dari fungsi kuadratik seperti y = ax² + bx + c. Puncak ialah titik tertinggi atau terendah!",
      gradient: "Kecerunan mengukur seberapa curam garis itu. Ia dikira sebagai naik/lari = (y₂-y₁)/(x₂-x₁). Garis yang curam mempunyai kecerunan yang besar!",
      vertex: "Puncak parabola y = ax² + bx + c berada di x = -b/2a. Kemudian gantikan nilai x ini kembali ke dalam persamaan untuk mencari koordinat-y!",
      transformation: "Transformasi graf termasuk: anjakan (atas/bawah/kiri/kanan), regangan/mampatan, dan pantulan. Setiap satu mengubah fungsi asal dengan cara tertentu!",
      default: "Soalan yang bagus! 🧠 Mari saya jelaskan: Matematik adalah tentang hubungan dan corak. Memahami graf membantu anda memvisualisasikan corak ini dan menyelesaikan masalah dunia sebenar!"
    }
  };
  
  const lang = currentLanguage === 'en' ? 'en' : 'my';
  const responseSet = responses[lang];
  
  if (q.includes('linear') || q.includes('garis lurus')) return responseSet.linear;
  if (q.includes('parabola') || q.includes('kuadratik')) return responseSet.parabola;
  if (q.includes('gradient') || q.includes('cerun')) return responseSet.gradient;
  if (q.includes('vertex') || q.includes('puncak')) return responseSet.vertex;
  if (q.includes('transform')) return responseSet.transformation;
  return responseSet.default;
}

// Progress System
function updateScore() {
  document.getElementById('totalScore').textContent = score;
  
  if (score >= 100) level = 5;
  else if (score >= 70) level = 4;
  else if (score >= 40) level = 3;
  else if (score >= 20) level = 2;
  else level = 1;
  
  document.getElementById('currentLevel').textContent = level;
  
  const progress = (score % 50) / 50 * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  
  saveProgress();
}

function saveProgress() {
  localStorage.setItem('smartmath_progress', JSON.stringify({
    studentName: studentName,
    score: score,
    level: level,
    timestamp: new Date().toISOString()
  }));
}

function loadProgress() {
  const saved = localStorage.getItem('smartmath_progress');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      studentName = data.studentName;
      score = data.score || 0;
      level = data.level || 1;
      updateScore();
    } catch (e) {
      console.error('Error loading progress:', e);
    }
  }
}
