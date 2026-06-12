// Translations for MyOT_G SmartMath
const translations = {
  en: {
    loginSubtitle: "Interactive Mathematics Learning System Based on AI",
    studentNamePlaceholder: "Enter your name",
    loginBtnText: "Log In",
    changeLangText: "Change Language",
    welcomeText: "Welcome back!",
    logoutBtnText: "Logout",
    diagnosticTitle: "Student Diagnostic Assessment",
    diagnosticSubtitle: "Let's assess your current level",
    diagnosticDesc: "Answer a few questions to help us understand your strengths and areas for improvement.",
    menuTitle: "Choose Your Learning Path",
    levelText: "Level",
    pointsText: "Points",
    learningModesTitle: "📚 Learning Modes",
    adaptiveText: "Adaptive Learning - AI Difficulty",
    geogebraText: "Interactive GeoGebra Workspace",
    escapeRoomText: "Escape Room Challenge",
    realLifeText: "Real-Life Mathematics",
    advancedFeaturesTitle: "🚀 Advanced Features",
    collaborativeText: "Collaborative Problem Solving",
    arText: "AR Mathematics Scanner",
    adaptiveTitle: "Adaptive Learning Mode",
    adaptiveDesc: "Personalized questions based on your diagnostic results. The difficulty adjusts as you progress!",
    geogebraTitle: "Interactive GeoGebra Workspace",
    geogebraDesc: "Explore mathematical concepts through dynamic visualization. Manipulate functions and see real-time changes.",
    geogebraPlaceholder: "GeoGebra workspace will load here. Explore graphs, functions, and transformations interactively!",
    escapeRoomTitle: "🔓 Escape Room Challenge",
    realLifeTitle: "🌍 Real-Life Mathematics",
    realLifeDesc: "See how mathematics applies to real-world careers and scenarios.",
    selectCareerText: "Select a career",
    collaborativeTitle: "👥 Collaborative Board",
    collaborativeDesc: "Work together with classmates on mathematics problems. Share reasoning and solve as a team!",
    collaborativePlaceholder: "Collaborative workspace - Discuss and solve problems together in real-time!",
    arTitle: "📱 AR Mathematics Scanner",
    arDesc: "Use your device camera to scan real-world objects and discover the mathematics within them!",
    arPlaceholder: "Point your camera at a bridge, building, or road to discover hidden mathematics.",
    backText: "Back",
    nextBtnText: "Next",
    submitText: "Submit Answer",
    backToMenuText: "Back to Menu",
  },
  
  my: {
    loginSubtitle: "Sistem Pembelajaran Matematik Interaktif Berasaskan AI",
    studentNamePlaceholder: "Masukkan nama anda",
    loginBtnText: "Log Masuk",
    changeLangText: "Tukar Bahasa",
    welcomeText: "Selamat kembali!",
    logoutBtnText: "Log Keluar",
    diagnosticTitle: "Penilaian Diagnostik Pelajar",
    diagnosticSubtitle: "Mari kita nilai tahap semasa anda",
    diagnosticDesc: "Jawab beberapa soalan untuk membantu kami memahami kekuatan dan bidang penambahbaikan anda.",
    menuTitle: "Pilih Laluan Pembelajaran Anda",
    levelText: "Tahap",
    pointsText: "Mata",
    learningModesTitle: "📚 Mod Pembelajaran",
    adaptiveText: "Pembelajaran Adaptif - Kesukaran AI",
    geogebraText: "Ruang Kerja GeoGebra Interaktif",
    escapeRoomText: "Cabaran Bilik Melepasi",
    realLifeText: "Matematik Kehidupan Sebenar",
    advancedFeaturesTitle: "🚀 Ciri Lanjutan",
    collaborativeText: "Penyelesaian Masalah Kolaboratif",
    arText: "Pemindai Matematik AR",
    adaptiveTitle: "Mod Pembelajaran Adaptif",
    adaptiveDesc: "Soalan yang dipersonalisasi berdasarkan hasil diagnostik anda. Kesukaran berubah seiring kemajuan anda!",
    geogebraTitle: "Ruang Kerja GeoGebra Interaktif",
    geogebraDesc: "Jelajahi konsep matematik melalui visualisasi dinamik. Manipulasi fungsi dan lihat perubahan masa nyata.",
    geogebraPlaceholder: "Ruang kerja GeoGebra akan dimuat di sini. Jelajahi graf, fungsi, dan transformasi secara interaktif!",
    escapeRoomTitle: "🔓 Cabaran Bilik Melepasi",
    realLifeTitle: "🌍 Matematik Kehidupan Sebenar",
    realLifeDesc: "Lihat bagaimana matematik digunakan dalam kerjaya dan senario dunia sebenar.",
    selectCareerText: "Pilih kerjaya",
    collaborativeTitle: "👥 Papan Kolaboratif",
    collaborativeDesc: "Bekerja bersama rakan sekelas untuk menyelesaikan masalah matematik. Kongsi penaakulan dan selesaikan bersama!",
    collaborativePlaceholder: "Ruang kerja kolaboratif - Bincang dan selesaikan masalah bersama secara masa nyata!",
    arTitle: "📱 Pemindai Matematik AR",
    arDesc: "Gunakan kamera peranti anda untuk mengimbas objek dunia sebenar dan temui matematik di dalamnya!",
    arPlaceholder: "Tunjukkan kamera anda ke jambatan, bangunan, atau jalan untuk menemui matematik tersembunyi.",
    backText: "Kembali",
    nextBtnText: "Seterusnya",
    submitText: "Hantar Jawapan",
    backToMenuText: "Kembali ke Menu",
  }
};

// Global State
let currentLanguage = null;
let studentName = null;
let score = 0;
let level = 1;
let diagnosticStep = 0;
let studentProfile = {
  confidence: {},
  weakTopics: [],
  strengths: []
};

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
  
  const safeUpdate = (id, value, isHTML = false) => {
    const el = document.getElementById(id);
    if (el) {
      if (isHTML) el.innerHTML = value;
      else el.textContent = value;
    }
  };
  
  // Update all UI text elements
  safeUpdate('loginSubtitle', t.loginSubtitle);
  document.getElementById('studentName').placeholder = t.studentNamePlaceholder;
  safeUpdate('loginBtnText', t.loginBtnText);
  safeUpdate('changeLangText', t.changeLangText);
  safeUpdate('diagnosticTitle', t.diagnosticTitle);
  safeUpdate('diagnosticSubtitle', t.diagnosticSubtitle);
  safeUpdate('diagnosticDesc', t.diagnosticDesc);
  safeUpdate('welcomeText', t.welcomeText);
  safeUpdate('logoutBtnText', t.logoutBtnText);
  safeUpdate('menuTitle', t.menuTitle);
  safeUpdate('levelText', t.levelText);
  safeUpdate('pointsText', t.pointsText);
  safeUpdate('learningModesTitle', t.learningModesTitle);
  safeUpdate('adaptiveText', t.adaptiveText);
  safeUpdate('geogebraText', t.geogebraText);
  safeUpdate('escapeRoomText', t.escapeRoomText);
  safeUpdate('realLifeText', t.realLifeText);
  safeUpdate('advancedFeaturesTitle', t.advancedFeaturesTitle);
  safeUpdate('collaborativeText', t.collaborativeText);
  safeUpdate('arText', t.arText);
  safeUpdate('adaptiveTitle', t.adaptiveTitle);
  safeUpdate('adaptiveDesc', t.adaptiveDesc);
  safeUpdate('geogebraTitle', t.geogebraTitle);
  safeUpdate('geogebraDesc', t.geogebraDesc);
  safeUpdate('geogebraPlaceholder', t.geogebraPlaceholder);
  safeUpdate('escapeRoomTitle', t.escapeRoomTitle);
  safeUpdate('realLifeTitle', t.realLifeTitle);
  safeUpdate('realLifeDesc', t.realLifeDesc);
  safeUpdate('selectCareerText', t.selectCareerText);
  safeUpdate('careerSelectLabel', t.selectCareerText);
  safeUpdate('collaborativeTitle', t.collaborativeTitle);
  safeUpdate('collaborativeDesc', t.collaborativeDesc);
  safeUpdate('collaborativePlaceholder', t.collaborativePlaceholder);
  safeUpdate('arTitle', t.arTitle);
  safeUpdate('arDesc', t.arDesc);
  safeUpdate('arPlaceholder', t.arPlaceholder);
  
  document.querySelectorAll('#backText').forEach(el => el.textContent = t.backText);
  document.querySelectorAll('#nextBtnText').forEach(el => el.textContent = t.nextBtnText);
  document.querySelectorAll('#submitText').forEach(el => el.textContent = t.submitText);
  document.querySelectorAll('#backToMenuText').forEach(el => el.textContent = t.backToMenuText);
}

// Login System
function login() {
  const name = document.getElementById('studentName').value.trim();
  if (!name) {
    alert(currentLanguage === 'en' ? 'Please enter your name' : 'Sila masukkan nama anda');
    return;
  }
  
  studentName = name;
  diagnosticStep = 0;
  document.getElementById('studentNameDisplay').textContent = name;
  document.getElementById('studentNameMenuDisplay').textContent = name;
  updateScore();
  startDiagnostic();
  goToPage('diagnostic');
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
  if (pageEl) {
    pageEl.classList.add('active');
  }
}

// DIAGNOSTIC SYSTEM
function startDiagnostic() {
  diagnosticStep = 0;
  loadDiagnosticQuestion();
}

function loadDiagnosticQuestion() {
  const diagnosticQuestions = [
    {
      en: "How confident are you with linear equations (y = mx + b)?",
      my: "Berapa yakin anda dengan persamaan linear (y = mx + b)?"
    },
    {
      en: "How confident are you with quadratic functions?",
      my: "Berapa yakin anda dengan fungsi kuadratik?"
    },
    {
      en: "How confident are you with functions and transformations?",
      my: "Berapa yakin anda dengan fungsi dan transformasi?"
    }
  ];

  const topics = ['linear', 'quadratic', 'functions'];
  
  if (diagnosticStep < diagnosticQuestions.length) {
    const q = diagnosticQuestions[diagnosticStep];
    const topic = topics[diagnosticStep];
    
    const contentDiv = document.getElementById('diagnosticContent');
    contentDiv.innerHTML = `
      <div class="diagnostic-question">
        <p>${q[currentLanguage]}</p>
        <div class="confidence-scale">
          <button class="confidence-btn" onclick="setConfidence('${topic}', 1)">❌ Not at all</button>
          <button class="confidence-btn" onclick="setConfidence('${topic}', 2)">🤔 Somewhat</button>
          <button class="confidence-btn" onclick="setConfidence('${topic}', 3)">✓ Confident</button>
          <button class="confidence-btn" onclick="setConfidence('${topic}', 4)">🚀 Very Confident</button>
        </div>
      </div>
    `;
  } else {
    goToPage('mainMenu');
  }
}

function setConfidence(topic, level) {
  studentProfile.confidence[topic] = level;
  
  // Identify weak areas
  if (level <= 2) {
    if (!studentProfile.weakTopics.includes(topic)) {
      studentProfile.weakTopics.push(topic);
    }
  } else {
    if (!studentProfile.strengths.includes(topic)) {
      studentProfile.strengths.push(topic);
    }
  }
  
  diagnosticStep++;
  
  // Show visual feedback
  document.querySelectorAll('.confidence-btn').forEach(btn => btn.classList.remove('selected'));
  event.target.classList.add('selected');
  
  setTimeout(() => {
    loadDiagnosticQuestion();
  }, 500);
}

function continueDiagnostic() {
  if (diagnosticStep < 3) {
    alert(currentLanguage === 'en' 
      ? 'Please answer all questions first' 
      : 'Sila jawab semua soalan terlebih dahulu');
  } else {
    goToPage('mainMenu');
  }
}

// ADAPTIVE LEARNING SYSTEM
function loadAdaptiveLearning() {
  const difficultyDiv = document.getElementById('difficultySelector');
  
  const difficulties = [
    { level: 'basic', en: 'Basic', my: 'Asas' },
    { level: 'medium', en: 'Medium', my: 'Sederhana' },
    { level: 'advanced', en: 'Advanced (HOTS)', my: 'Lanjutan (KBAT)' }
  ];

  let html = '<h3 style="margin-bottom: 15px; color: #667eea;">Choose Difficulty Level</h3><div class="difficulty-grid">';
  
  difficulties.forEach(diff => {
    html += `
      <div class="difficulty-card" onclick="setDifficulty('${diff.level}')">
        <h4>${diff[currentLanguage]}</h4>
        <p>${diff.level === 'basic' ? '📖' : diff.level === 'medium' ? '📚' : '🏆'}</p>
      </div>
    `;
  });
  
  html += '</div>';
  difficultyDiv.innerHTML = html;
}

function setDifficulty(level) {
  const contentDiv = document.getElementById('adaptiveContent');
  
  const questions = {
    basic: {
      en: 'What is the y-intercept of y = 2x + 3?',
      my: 'Apakah pintasan-y bagi y = 2x + 3?',
      answer: '3'
    },
    medium: {
      en: 'Solve: 2x² - 8x + 6 = 0',
      my: 'Selesaikan: 2x² - 8x + 6 = 0',
      answer: '1,3'
    },
    advanced: {
      en: 'If f(x) = x² + 2 and g(x) = 3x - 1, find f(g(2))',
      my: 'Jika f(x) = x² + 2 dan g(x) = 3x - 1, cari f(g(2))',
      answer: '27'
    }
  };

  const q = questions[level];
  
  contentDiv.innerHTML = `
    <div class="question-box">
      <p><strong>${q[currentLanguage]}</strong></p>
    </div>
    <input type="text" id="adaptiveAnswer" placeholder="${currentLanguage === 'en' ? 'Your answer' : 'Jawapan anda'}">
  `;
}

function submitAdaptiveAnswer() {
  const answer = document.getElementById('adaptiveAnswer').value.trim();
  
  if (!answer) {
    alert(currentLanguage === 'en' ? 'Please enter an answer' : 'Sila masukkan jawapan');
    return;
  }
  
  score += 10;
  updateScore();
  
  alert(currentLanguage === 'en' 
    ? 'Great! +10 points' 
    : 'Bagus! +10 mata');
}

// REAL-LIFE MATHEMATICS SYSTEM
function loadRealLifeScenario() {
  const career = document.getElementById('careerSelect').value;
  const scenarioDiv = document.getElementById('realLifeScenario');
  
  if (!career) {
    scenarioDiv.innerHTML = '';
    return;
  }

  const scenarios = {
    engineer: {
      en: {
        title: 'Bridge Design Challenge',
        desc: 'Design an arch bridge using a parabola equation. The bridge must span 100m with a maximum height of 25m.',
        task: 'Calculate the equation of the parabola and verify the heights at specific points.'
      },
      my: {
        title: 'Cabaran Reka Jambatan',
        desc: 'Reka bentuk jambatan melengkung menggunakan persamaan parabola. Jambatan mesti menjangkau 100m dengan ketinggian maksimum 25m.',
        task: 'Kira persamaan parabola dan sahkan ketinggian pada titik tertentu.'
      }
    },
    architect: {
      en: {
        title: 'Building Layout Design',
        desc: 'Design a building layout using geometric shapes. Calculate the area and perimeter for optimal space usage.',
        task: 'Create a floor plan that maximizes usable area while minimizing costs.'
      },
      my: {
        title: 'Reka Bentuk Susun Atur Bangunan',
        desc: 'Reka bentuk susun atur bangunan menggunakan bentuk geometri. Kira luas dan perimeter untuk penggunaan ruang yang optimal.',
        task: 'Cipta pelan lantai yang memaksimalkan kawasan yang boleh digunakan sambil meminimalkan kos.'
      }
    },
    analyst: {
      en: {
        title: 'Data Analysis Project',
        desc: 'Analyze sales data using linear regression. Predict future trends and create visualizations.',
        task: 'Find the trend line equation and forecast sales for the next quarter.'
      },
      my: {
        title: 'Projek Analisis Data',
        desc: 'Analisis data jualan menggunakan regresi linear. Ramalkan trend masa depan dan cipta visualisasi.',
        task: 'Cari persamaan garis trend dan ramalkan jualan untuk suku berikutnya.'
      }
    }
  };

  const scenario = scenarios[career];
  if (!scenario) return;

  const lang = currentLanguage === 'en' ? 'en' : 'my';
  
  scenarioDiv.innerHTML = `
    <div class="real-life-scenario">
      <h4>${scenario[lang].title}</h4>
      <p><strong>${scenario[lang].desc}</strong></p>
      <p style="margin-top: 15px;">📋 <strong>${scenario[lang].task}</strong></p>
    </div>
    <textarea id="realLifeAnswer" placeholder="${currentLanguage === 'en' ? 'Your solution' : 'Penyelesaian anda'}"></textarea>
  `;
}

function submitRealLifeAnswer() {
  const answer = document.getElementById('realLifeAnswer').value.trim();
  
  if (!answer) {
    alert(currentLanguage === 'en' ? 'Please provide a solution' : 'Sila berikan penyelesaian');
    return;
  }
  
  score += 15;
  updateScore();
  
  alert(currentLanguage === 'en' 
    ? 'Excellent work! +15 points' 
    : 'Kerja yang cemerlang! +15 mata');
}

function submitEscapeRoomAnswer() {
  score += 20;
  updateScore();
  
  alert(currentLanguage === 'en' 
    ? 'You escaped! +20 points' 
    : 'Anda terlepas! +20 mata');
}

// Scoring System
function updateScore() {
  const scoreDisplay = document.getElementById('totalPoints');
  if (scoreDisplay) scoreDisplay.textContent = score;
  
  // Calculate level
  if (score >= 100) level = 5;
  else if (score >= 70) level = 4;
  else if (score >= 40) level = 3;
  else if (score >= 20) level = 2;
  else level = 1;
  
  const levelDisplay = document.getElementById('currentLevel');
  if (levelDisplay) levelDisplay.textContent = level;
  
  saveProgress();
}

// Progress Saving
function saveProgress() {
  const progress = {
    studentName: studentName,
    score: score,
    level: level,
    studentProfile: studentProfile,
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
      score = progress.score || 0;
      level = progress.level || 1;
      studentProfile = progress.studentProfile || { confidence: {}, weakTopics: [], strengths: [] };
      
      if (studentName) {
        document.getElementById('studentNameMenuDisplay').textContent = studentName;
        updateScore();
      }
    } catch (e) {
      console.error('Error loading progress:', e);
    }
  }
}
