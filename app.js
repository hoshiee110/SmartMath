// Language and Translation System
const translations = {
  en: {
    loginSubtitle: "Learn Graphs Interactively",
    studentNamePlaceholder: "Enter your name",
    loginBtnText: "Log In",
    changeLangText: "Change Language",
    welcomeText: "Welcome back!",
    logoutBtnText: "Logout",
    menuTitle: "Select Topic",
    totalPointsLabel: "Total Points",
    levelLabel: "Current Level",
    topicsTitle: "📚 Topics",
    linearTopicText: "Linear Graphs",
    quadTopicText: "Quadratic Graphs",
    miniGamesTitle: "🎮 Mini Games",
    shapeGameText: "Shape Guesser",
    matchGameText: "Graph Matcher",
    aiTutorTitle: "📖 Learn More",
    aiTutorText: "AI Tutor - Ask Questions",
    level2Title: "Advanced Topics",
    level2BtnText: "Level 2 - Advanced Content",
    backText: "Back",
    submitBtnText: "Submit",
    hintBtnText: "Get Hint",
    linearTitle: "Linear Graphs",
    linearProblem: "For the equation: <br><strong>y = 2x + 3</strong><br><br>What is the value of y when x = 2?",
    linearHint: "Substitute x = 2 into the equation. y = 2(2) + 3 = 4 + 3 = ?",
    quadTitle: "Quadratic Graphs",
    quadProblem: "For the equation: <br><strong>y = x² - 4x + 3</strong><br><br>Find the minimum value of the graph.",
    quadHint: "Use the formula: x = -b / 2a. Here a = 1, b = -4. Then substitute back into the equation.",
    hintTitle: "Hint",
    shapeGameTitle: "Shape Identifier",
    shapeGameDesc: "Identify the shape of the graph based on its characteristics.",
    shapeInstruction: "What type of graph is this?",
    matchGameTitle: "Graph Matcher",
    matchGameDesc: "Match the equation with its correct graph representation.",
    matchEquation: "Which graph matches this equation?",
    matchInstruction: "Check if your drawn graph matches the reference.",
    yourGraphLabel: "Your Drawing",
    correctLabel: "Expected Graph",
    aiTutorPageTitle: "AI Tutor",
    aiTutorDesc: "Ask any question about graphs and get personalized help!",
    studentQuestion: "Ask your question here...",
    sendText: "Send",
    suggestedTopicsLabel: "📌 Suggested Topics:",
    level2Desc: "You've unlocked Level 2! Explore more advanced topics and challenges.",
    totalTopicsLabel: "Topics",
    totalGamesLabel: "Games",
    level2Features: "✨ Advanced quadratic forms<br>✨ Cubic and polynomial graphs<br>✨ Interactive graph builders<br>✨ Challenge modes<br>✨ Certificate on completion",
    backToMenuText: "Back to Menu",
    congratsText: "Congratulations!",
    successMsg: "You've completed SmartMath challenges!",
    shapeOptions: ["Linear (Straight Line)", "Parabola (U-shape)", "Cubic (S-shape)"],
    nextBtnText: "Next Question",
  },
  
  my: {
    loginSubtitle: "Belajar Graf Dengan Interaktif",
    studentNamePlaceholder: "Masukkan nama anda",
    loginBtnText: "Log Masuk",
    changeLangText: "Tukar Bahasa",
    welcomeText: "Selamat kembali!",
    logoutBtnText: "Log Keluar",
    menuTitle: "Pilih Topik",
    totalPointsLabel: "Jumlah Mata",
    levelLabel: "Tahap Semasa",
    topicsTitle: "📚 Topik",
    linearTopicText: "Graf Linear",
    quadTopicText: "Graf Kuadratik",
    miniGamesTitle: "🎮 Mini Permainan",
    shapeGameText: "Teka Bentuk",
    matchGameText: "Padankan Graf",
    aiTutorTitle: "📖 Belajar Lebih",
    aiTutorText: "Tutor AI - Tanya Soalan",
    level2Title: "Topik Lanjutan",
    level2BtnText: "Tahap 2 - Kandungan Lanjutan",
    backText: "Kembali",
    submitBtnText: "Hantar",
    hintBtnText: "Petua",
    linearTitle: "Graf Linear",
    linearProblem: "Bagi persamaan: <br><strong>y = 2x + 3</strong><br><br>Apakah nilai y apabila x = 2?",
    linearHint: "Gantikan x = 2 ke dalam persamaan. y = 2(2) + 3 = 4 + 3 = ?",
    quadTitle: "Graf Kuadratik",
    quadProblem: "Bagi persamaan: <br><strong>y = x² - 4x + 3</strong><br><br>Cari nilai minimum graf.",
    quadHint: "Gunakan formula: x = -b / 2a. Di sini a = 1, b = -4. Kemudian gantikan semula ke dalam persamaan.",
    hintTitle: "Petua",
    shapeGameTitle: "Pengenalan Bentuk",
    shapeGameDesc: "Kenal pasti bentuk graf berdasarkan ciri-cirinya.",
    shapeInstruction: "Jenis graf apakah ini?",
    matchGameTitle: "Padankan Graf",
    matchGameDesc: "Padankan persamaan dengan perwakilan graf yang betul.",
    matchEquation: "Graf mana yang sepadan dengan persamaan ini?",
    matchInstruction: "Semak sama ada graf anda dilukis sepadan dengan rujukan.",
    yourGraphLabel: "Lukisan Anda",
    correctLabel: "Graf Dijangka",
    aiTutorPageTitle: "Tutor AI",
    aiTutorDesc: "Tanya apa-apa soalan tentang graf dan dapatkan bantuan yang diperibadikan!",
    studentQuestion: "Tanya soalan anda di sini...",
    sendText: "Hantar",
    suggestedTopicsLabel: "📌 Topik Cadangan:",
    level2Desc: "Anda telah membuka Tahap 2! Terokai lebih banyak topik dan cabaran lanjutan.",
    totalTopicsLabel: "Topik",
    totalGamesLabel: "Permainan",
    level2Features: "✨ Bentuk kuadratik lanjutan<br>✨ Graf kubik dan polinomial<br>✨ Pembina graf interaktif<br>✨ Mode cabaran<br>✨ Sijil setelah siap",
    backToMenuText: "Kembali ke Menu",
    congratsText: "Tahniah!",
    successMsg: "Anda telah menyelesaikan cabaran SmartMath!",
    shapeOptions: ["Linear (Garis Lurus)", "Parabola (Bentuk U)", "Kubik (Bentuk S)"],
    nextBtnText: "Soalan Seterusnya",
  }
};

// Global State
let currentLanguage = null;
let studentName = null;
let score = 0;
let level = 1;
let gameStats = {
  topicsCompleted: [],
  gamesPlayed: 0,
  achievements: []
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    currentLanguage = savedLang;
    updateUIText();
    loadProgress();
    if (studentName) {
      goToPage('menu');
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
  
  // Update all text elements safely
  const safeUpdate = (id, value, isHTML = false) => {
    const el = document.getElementById(id);
    if (el) {
      if (isHTML) el.innerHTML = value;
      else el.textContent = value;
    }
  };
  
  safeUpdate('loginSubtitle', t.loginSubtitle);
  safeUpdate('studentName', '', false);
  document.getElementById('studentName').placeholder = t.studentNamePlaceholder;
  safeUpdate('loginBtnText', t.loginBtnText);
  safeUpdate('changeLangText', t.changeLangText);
  safeUpdate('welcomeText', t.welcomeText);
  safeUpdate('logoutBtnText', t.logoutBtnText);
  safeUpdate('menuTitle', t.menuTitle);
  safeUpdate('totalPointsLabel', t.totalPointsLabel);
  safeUpdate('levelLabel', t.levelLabel);
  safeUpdate('topicsTitle', t.topicsTitle);
  safeUpdate('linearTopicText', t.linearTopicText);
  safeUpdate('quadTopicText', t.quadTopicText);
  safeUpdate('miniGamesTitle', t.miniGamesTitle);
  safeUpdate('shapeGameText', t.shapeGameText);
  safeUpdate('matchGameText', t.matchGameText);
  safeUpdate('aiTutorTitle', t.aiTutorTitle);
  safeUpdate('aiTutorText', t.aiTutorText);
  safeUpdate('linearTitle', t.linearTitle);
  safeUpdate('linearProblem', t.linearProblem, true);
  safeUpdate('linearHint', t.linearHint);
  safeUpdate('quadTitle', t.quadTitle);
  safeUpdate('quadProblem', t.quadProblem, true);
  safeUpdate('quadHint', t.quadHint);
  safeUpdate('hintTitle', t.hintTitle);
  safeUpdate('shapeGameTitle', t.shapeGameTitle);
  safeUpdate('shapeGameDesc', t.shapeGameDesc);
  safeUpdate('shapeInstruction', t.shapeInstruction);
  safeUpdate('matchGameTitle', t.matchGameTitle);
  safeUpdate('matchGameDesc', t.matchGameDesc);
  safeUpdate('matchEquation', t.matchEquation);
  safeUpdate('matchInstruction', t.matchInstruction);
  safeUpdate('yourGraphLabel', t.yourGraphLabel);
  safeUpdate('correctLabel', t.correctLabel);
  safeUpdate('aiTutorPageTitle', t.aiTutorPageTitle);
  safeUpdate('aiTutorDesc', t.aiTutorDesc);
  document.getElementById('studentQuestion').placeholder = t.studentQuestion;
  safeUpdate('sendText', t.sendText);
  safeUpdate('suggestedTopicsLabel', t.suggestedTopicsLabel);
  safeUpdate('initialMessage', t.aiTutorDesc);
  safeUpdate('level2Title', t.level2Title);
  safeUpdate('level2Desc', t.level2Desc);
  safeUpdate('totalTopicsLabel', t.totalTopicsLabel);
  safeUpdate('totalGamesLabel', t.totalGamesLabel);
  safeUpdate('level2Features', t.level2Features, true);
  safeUpdate('congratsText', t.congratsText);
  safeUpdate('successMsg', t.successMsg);
  
  // Update all button texts
  document.querySelectorAll('#submitBtnText').forEach(el => el.textContent = t.submitBtnText);
  document.querySelectorAll('#hintBtnText').forEach(el => el.textContent = t.hintBtnText);
  document.querySelectorAll('#backText').forEach(el => el.textContent = t.backText);
  document.querySelectorAll('#nextBtnText').forEach(el => el.textContent = t.nextBtnText);
  document.querySelectorAll('#backToMenuText').forEach(el => el.textContent = t.backToMenuText);
  
  // Update shape options
  const shapeOptions = document.getElementById('shapeOptions');
  if (shapeOptions) {
    shapeOptions.innerHTML = t.shapeOptions.map((opt, i) => 
      `<div class="shape-option" onclick="selectShape(${i})" id="shape${i}">${opt}</div>`
    ).join('');
  }
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
  goToPage('menu');
}

function logout() {
  const confirmText = currentLanguage === 'en' 
    ? 'Are you sure you want to logout?' 
    : 'Adakah anda pasti ingin log keluar?';
  
  if (confirm(confirmText)) {
    studentName = null;
    score = 0;
    level = 1;
    gameStats = { topicsCompleted: [], gamesPlayed: 0, achievements: [] };
    document.getElementById('studentName').value = '';
    localStorage.removeItem('smartmath_progress');
    goToPage('login');
  }
}

// Page Navigation
function goToPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pageEl = document.getElementById(page);
  if (pageEl) {
    pageEl.classList.add('active');
  }
  
  if (page === 'shapeGuess') {
    setTimeout(() => drawRandomShape(), 100);
  } else if (page === 'graphMatch') {
    setTimeout(() => initGraphMatch(), 100);
  } else if (page === 'aiTutor') {
    setTimeout(() => initAITutor(), 100);
  }
}

function goToTopic(topic) {
  goToPage(topic);
}

function showHint(hintPage) {
  goToPage(hintPage);
}

// Quiz System
function checkLinear() {
  const ans = document.getElementById('linearAns').value.trim();
  const resultDiv = document.getElementById('linearResult');
  
  if (ans === "7") {
    score += 10;
    resultDiv.innerHTML = '✅ ' + (currentLanguage === 'en' ? 'Correct! +10 points' : 'Betul! +10 mata');
    resultDiv.className = 'result correct';
    if (!gameStats.topicsCompleted.includes('linear')) {
      gameStats.topicsCompleted.push('linear');
    }
  } else {
    resultDiv.innerHTML = '❌ ' + (currentLanguage === 'en' ? 'Wrong. Try again.' : 'Salah. Cuba lagi.');
    resultDiv.className = 'result wrong';
  }
  
  updateScore();
  updateUnlock();
}

function checkQuadratic() {
  const ans = document.getElementById('quadAns').value.trim();
  const resultDiv = document.getElementById('quadResult');
  
  if (ans === "-1") {
    score += 10;
    resultDiv.innerHTML = '✅ ' + (currentLanguage === 'en' ? 'Correct! +10 points' : 'Betul! +10 mata');
    resultDiv.className = 'result correct';
    if (!gameStats.topicsCompleted.includes('quadratic')) {
      gameStats.topicsCompleted.push('quadratic');
    }
  } else {
    resultDiv.innerHTML = '❌ ' + (currentLanguage === 'en' ? 'Wrong. Try again.' : 'Salah. Cuba lagi.');
    resultDiv.className = 'result wrong';
  }
  
  updateScore();
  updateUnlock();
}

// Mini Games - Shape Guessing
function drawLinearShape(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, h);
  ctx.lineTo(w, 0);
  ctx.stroke();
}

function drawParabolaShape(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.beginPath();
  
  for (let x = 0; x <= w; x++) {
    const y = Math.pow(x - w/2, 2) / 100 + 50;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function drawCubicShape(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.beginPath();
  
  for (let x = 0; x <= w; x++) {
    const normalized = (x - w/2) / 50;
    const y = Math.pow(normalized, 3) * 30 + h/2;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

let currentShapeIndex = 0;
let selectedShapeAnswer = null;

function drawRandomShape() {
  selectedShapeAnswer = null;
  document.querySelectorAll('.shape-option').forEach(el => el.classList.remove('selected'));
  
  currentShapeIndex = Math.floor(Math.random() * 3);
  const canvas = document.getElementById('shapeCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  if (currentShapeIndex === 0) {
    drawLinearShape(ctx, canvas.width, canvas.height);
  } else if (currentShapeIndex === 1) {
    drawParabolaShape(ctx, canvas.width, canvas.height);
  } else {
    drawCubicShape(ctx, canvas.width, canvas.height);
  }
  
  document.getElementById('shapeGameResult').innerHTML = '';
  document.getElementById('nextShapeBtn').style.display = 'none';
}

function selectShape(shapeIndex) {
  selectedShapeAnswer = shapeIndex;
  document.querySelectorAll('.shape-option').forEach(el => el.classList.remove('selected'));
  const btn = document.getElementById('shape' + shapeIndex);
  if (btn) btn.classList.add('selected');
  
  setTimeout(() => checkShape(), 300);
}

function checkShape() {
  const resultDiv = document.getElementById('shapeGameResult');
  
  if (selectedShapeAnswer === null) {
    resultDiv.innerHTML = currentLanguage === 'en' 
      ? '⚠️ Please select an answer' 
      : '⚠️ Sila pilih jawapan';
    return;
  }
  
  if (selectedShapeAnswer === currentShapeIndex) {
    score += 5;
    resultDiv.innerHTML = '✅ ' + (currentLanguage === 'en' ? 'Correct! +5 points' : 'Betul! +5 mata');
    resultDiv.className = 'result correct';
    gameStats.gamesPlayed++;
  } else {
    resultDiv.innerHTML = '❌ ' + (currentLanguage === 'en' ? 'Wrong. Try again.' : 'Salah. Cuba lagi.');
    resultDiv.className = 'result wrong';
  }
  
  document.getElementById('nextShapeBtn').style.display = 'inline-block';
  updateScore();
}

function nextShapeGame() {
  drawRandomShape();
}

// Mini Games - Graph Matching
function initGraphMatch() {
  const matchCanvas = document.getElementById('matchCanvas');
  const referenceCanvas = document.getElementById('referenceCanvas');
  
  if (!matchCanvas || !referenceCanvas) return;
  
  const ctx1 = matchCanvas.getContext('2d');
  const ctx2 = referenceCanvas.getContext('2d');
  
  // Clear and draw reference parabola
  ctx2.clearRect(0, 0, referenceCanvas.width, referenceCanvas.height);
  ctx2.strokeStyle = '#667eea';
  ctx2.lineWidth = 2;
  ctx2.beginPath();
  
  for (let x = 0; x <= 250; x++) {
    const y = Math.pow(x - 125, 2) / 200 + 30;
    if (x === 0) ctx2.moveTo(x, y);
    else ctx2.lineTo(x, y);
  }
  ctx2.stroke();
  
  // Clear match canvas
  ctx1.clearRect(0, 0, matchCanvas.width, matchCanvas.height);
  ctx1.fillStyle = '#f5f5f5';
  ctx1.fillRect(0, 0, matchCanvas.width, matchCanvas.height);
  ctx1.fillStyle = '#999';
  ctx1.font = '12px Arial';
  ctx1.textAlign = 'center';
  ctx1.fillText(currentLanguage === 'en' ? 'Draw here' : 'Lukis di sini', matchCanvas.width/2, matchCanvas.height/2);
}

function checkMatch() {
  const resultDiv = document.getElementById('matchResult');
  score += 7;
  resultDiv.innerHTML = '✅ ' + (currentLanguage === 'en' ? 'Great! +7 points' : 'Bagus! +7 mata');
  resultDiv.className = 'result correct';
  updateScore();
}

function nextMatchGame() {
  document.getElementById('matchResult').innerHTML = '';
  initGraphMatch();
}

// AI Tutor System
function initAITutor() {
  const container = document.getElementById('chatContainer');
  if (!container) return;
  
  container.innerHTML = '<div class="message tutor">' + 
    (currentLanguage === 'en' 
      ? 'Hi! I\'m your AI Tutor. Ask me anything about graphs - linear, quadratic, or more!' 
      : 'Halo! Saya tutor AI anda. Tanya saya apa-apa tentang graf - linear, kuadratik, atau lebih!') +
    '</div>';
  
  updateSuggestedTopics();
}

function sendQuestion() {
  const question = document.getElementById('studentQuestion').value.trim();
  if (!question) return;
  
  const container = document.getElementById('chatContainer');
  if (!container) return;
  
  // Add student message
  const studentMsg = document.createElement('div');
  studentMsg.className = 'message student';
  studentMsg.textContent = question;
  container.appendChild(studentMsg);
  
  // Simulate AI response with typing
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.textContent = currentLanguage === 'en' ? 'AI Tutor is thinking...' : 'Tutor AI sedang berfikir...';
  container.appendChild(typingDiv);
  
  container.scrollTop = container.scrollHeight;
  
  setTimeout(() => {
    typingDiv.remove();
    const aiResponse = generateAIResponse(question);
    
    const aiMsg = document.createElement('div');
    aiMsg.className = 'message tutor';
    aiMsg.textContent = aiResponse;
    container.appendChild(aiMsg);
    
    container.scrollTop = container.scrollHeight;
  }, 1500);
  
  document.getElementById('studentQuestion').value = '';
  score += 2;
  updateScore();
}

function generateAIResponse(question) {
  const q = question.toLowerCase();
  
  const responses = {
    en: {
      linear: "Great question! Linear graphs are straight lines with the form y = mx + b, where m is the slope and b is the y-intercept. The slope tells you how steep the line is!",
      quadratic: "Excellent! Quadratic graphs form parabolas (U-shaped curves) with the form y = ax² + bx + c. The vertex is the highest or lowest point on the graph.",
      slope: "The slope is the rate of change. To find it, use (y₂ - y₁) / (x₂ - x₁) between two points on the line.",
      vertex: "The vertex of a parabola is at x = -b/2a. Substitute this value back into the equation to find the y-coordinate!",
      default: "That's an interesting question! Remember to practice plotting points and identifying patterns. Keep exploring!"
    },
    my: {
      linear: "Pertanyaan bagus! Graf linear adalah garis lurus dengan bentuk y = mx + b, di mana m adalah cerun dan b adalah pintasan-y. Cerun memberitahu anda betapa curamnya garisan!",
      quadratic: "Bagus! Graf kuadratik membentuk parabola (lengkung berbentuk U) dengan bentuk y = ax² + bx + c. Puncak adalah titik tertinggi atau terendah pada graf.",
      slope: "Cerun adalah kadar perubahan. Untuk mencarinya, gunakan (y₂ - y₁) / (x₂ - x₁) antara dua titik pada garis.",
      vertex: "Puncak parabola berada di x = -b/2a. Gantikan nilai ini kembali ke dalam persamaan untuk mencari koordinat-y!",
      default: "Itu soalan yang menarik! Ingat untuk berlatih memplot titik dan mengenal pasti corak. Terus terokai!"
    }
  };
  
  const lang = currentLanguage || 'en';
  const responseSet = responses[lang];
  
  if (q.includes('linear') || q.includes('garis')) return responseSet.linear;
  if (q.includes('quadratic') || q.includes('kuadratik')) return responseSet.quadratic;
  if (q.includes('slope') || q.includes('cerun')) return responseSet.slope;
  if (q.includes('vertex') || q.includes('puncak')) return responseSet.vertex;
  return responseSet.default;
}

function updateSuggestedTopics() {
  const suggestedDiv = document.getElementById('suggestedTopics');
  if (!suggestedDiv) return;
  
  const topics = currentLanguage === 'en'
    ? ['How do I find the slope?', 'What is a vertex?', 'How to draw a parabola?']
    : ['Bagaimana cara mencari cerun?', 'Apakah itu puncak?', 'Bagaimana melukis parabola?'];
  
  suggestedDiv.innerHTML = topics.map(topic => 
    `<button style="margin: 5px; padding: 8px 12px; font-size: 0.9em;" onclick="setQuestionAndSend('${topic}');">${topic}</button>`
  ).join('');
}

function setQuestionAndSend(question) {
  document.getElementById('studentQuestion').value = question;
  sendQuestion();
}

// Progress Saving System
function saveProgress() {
  const progress = {
    studentName: studentName,
    score: score,
    level: level,
    gameStats: gameStats,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('smartmath_progress', JSON.stringify(progress));
}

function loadProgress() {
  const saved = localStorage.getItem('smartmath_progress');
  if (saved) {
    try {
      const progress = JSON.parse(saved);
      studentName = progress.studentName;
      score = progress.score;
      level = progress.level;
      gameStats = progress.gameStats || { topicsCompleted: [], gamesPlayed: 0, achievements: [] };
      
      if (studentName) {
        const nameEl = document.getElementById('studentName');
        if (nameEl) nameEl.value = studentName;
        const displayEl = document.getElementById('studentNameDisplay');
        if (displayEl) displayEl.textContent = studentName;
        updateScore();
      }
    } catch (e) {
      console.error('Error loading progress:', e);
    }
  }
}

// Scoring and Unlocking System
function updateScore() {
  const scoreDisplay = document.getElementById('scoreDisplay');
  if (scoreDisplay) scoreDisplay.textContent = 'Score: ' + score;
  
  const totalPoints = document.getElementById('totalPoints');
  if (totalPoints) totalPoints.textContent = score;
  
  // Calculate level
  if (score >= 50) level = 3;
  else if (score >= 20) level = 2;
  else level = 1;
  
  const levelDisplay = document.getElementById('currentLevel');
  if (levelDisplay) levelDisplay.textContent = level;
  
  const level2Btn = document.getElementById('level2Btn');
  const level2Title = document.getElementById('level2Title');
  
  if (level >= 2) {
    if (level2Btn) level2Btn.style.display = 'inline-block';
    if (level2Title) level2Title.style.display = 'block';
  }
  
  if (level >= 3) {
    if (!gameStats.achievements.includes('Advanced Learner')) {
      gameStats.achievements.push('Advanced Learner');
    }
  }
  
  saveProgress();
}

function updateUnlock() {
  updateScore();
  
  if (score >= 50) {
    if (!gameStats.achievements.includes('Expert')) {
      gameStats.achievements.push('Expert');
    }
  }
  
  if (gameStats.topicsCompleted.length === 2) {
    if (!gameStats.achievements.includes('Topic Master')) {
      gameStats.achievements.push('Topic Master');
    }
  }
}
