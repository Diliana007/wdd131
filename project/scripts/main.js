// ====== UTIL ======
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// ====== NAV ======
const menuToggle = $('#menuToggle');
const navMenu = $('#navMenu');
if (menuToggle && navMenu){
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('active');
  });
  $$('#navMenu a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('active')));
}

// ====== SMOOTH SCROLLING ======
$$('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without triggering a page reload
      history.pushState(null, null, href);
    }
  });
});

// ====== DATA (Objects/Arrays) ======
const games = [
  {
    id: 'terraforming-mars',
    name: 'Terraforming Mars',
    category: 'strategy',
    players: '1–5',
    time: '120 min',
    difficulty: 'Hard',
    imgWebp: 'images/terraforming-mars.jpg',
    imgJpg:  'images/terraforming-mars.jpg',
    alt: 'Terraforming Mars board game box and components'
  },
  {
    id: 'codenames',
    name: 'Codenames',
    category: 'party',
    players: '2–8+',
    time: '15 min',
    difficulty: 'Easy',
    imgWebp: 'images/codenames.jpg',
    imgJpg:  'images/codenames.jpg',
    alt: 'Codenames party game with word cards'
  },
  {
    id: 'pandemic',
    name: 'Pandemic',
    category: 'cooperative',
    players: '2–4',
    time: '45 min',
    difficulty: 'Medium',
    imgWebp: 'images/pandemic.jpg',
    imgJpg:  'images/pandemic.jpg',
    alt: 'Pandemic cooperative board game setup'
  },
  {
    id: 'ticket-to-ride',
    name: 'Ticket to Ride',
    category: 'family',
    players: '2–5',
    time: '30–60 min',
    difficulty: 'Easy',
    imgWebp: 'images/ticket-to-ride.jpg',
    imgJpg:  'images/ticket-to-ride.jpg',
    alt: 'Ticket to Ride board game with train routes'
  }
];

const menuData = [
  {
    id: 'strategy-brew', type: 'drinks', name: 'Strategy Brew', price: 5.50,
    desc: 'Signature blend coffee with caramel and hazelnut notes.',
    imgWebp: 'images/strategy-brew.jpg',
    imgJpg:  'images/strategy-brew.jpg',
    alt: 'Strategy Brew coffee in a ceramic cup'
  },
  {
    id: 'grilled-cheese', type: 'food', name: "Gamer's Grilled Cheese", price: 9.95,
    desc: 'Three-cheese blend with bacon and tomato on sourdough.',
    imgWebp: 'images/grilled-cheese.jpg',
    imgJpg:  'images/grilled-cheese.jpg',
    alt: 'Gourmet grilled cheese sandwich'
  },
  {
    id: 'brownie', type: 'desserts', name: 'Dice Roll Brownie', price: 6.75,
    desc: 'Fudgy brownie topped with caramel and sea salt.',
    imgWebp: 'images/brownie.jpg',
    imgJpg:  'images/brownie.jpg',
    alt: 'Chocolate brownie with caramel drizzle'
  },
  {
    id: 'victory-latte', type: 'drinks', name: 'Victory Latte', price: 6.25,
    desc: 'Espresso with steamed milk and vanilla, topped with foam.',
    imgWebp: 'images/victory-latte.jpg',
    imgJpg:  'images/victory-latte.jpg',
    alt: 'Victory Latte with beautiful foam art'
  }
];

// ====== RENDER HELPERS ======
const gamesGrid = $('#gamesGrid');
function renderGames(filter = 'all'){
  if (!gamesGrid) return;
  const filtered = filter === 'all' ? games : games.filter(g => g.category === filter);
  gamesGrid.innerHTML = filtered.map(g => `
    <article class="game-card" data-category="${g.category}">
      <picture>
        <source type="image/jpeg" srcset="${g.imgJpg}">
        <img loading="lazy" src="${g.imgJpg}" alt="${g.alt}" width="800" height="500">
      </picture>
      <div class="game-info">
        <h3>${g.name}</h3>
        <p>${({
          strategy:'Compete with deep planning.',
          party:'Fast laughs and quick rounds.',
          cooperative:'Win together against the game.',
          family:'Easy rules, big smiles.'
        }[g.category])}</p>
        <div class="game-meta">
          <span><i class="fas fa-user-friends" aria-hidden="true"></i> ${g.players}</span>
          <span><i class="fas fa-clock" aria-hidden="true"></i> ${g.time}</span>
          <span><i class="fas fa-brain" aria-hidden="true"></i> ${g.difficulty}</span>
        </div>
      </div>
    </article>
  `).join('');
}
renderGames();

// Homepage preview sections
const gamesPreview = $('#gamesPreview');
function renderGamesPreview(){
  if (!gamesPreview) return;
  gamesPreview.innerHTML = games.map(g => `
    <article class="game-preview-card">
      <picture>
        <source type="image/jpeg" srcset="${g.imgJpg}">
        <img loading="lazy" src="${g.imgJpg}" alt="${g.alt}" width="800" height="500">
      </picture>
      <div class="game-preview-info">
        <h3>${g.name}</h3>
        <p>${({
          strategy:'Deep strategy game for tactical minds.',
          party:'Quick party game perfect for groups.',
          cooperative:'Work together to save the world.',
          family:'Fun for the whole family to enjoy.'
        }[g.category])}</p>
        <div class="game-preview-meta">
          <span><i class="fas fa-user-friends" aria-hidden="true"></i> ${g.players}</span>
          <span><i class="fas fa-clock" aria-hidden="true"></i> ${g.time}</span>
        </div>
      </div>
    </article>
  `).join('');
}
renderGamesPreview();

const menuPreview = $('#menuPreview');
function renderMenuPreview(){
  if (!menuPreview) return;
  menuPreview.innerHTML = menuData.map(m => `
    <article class="menu-preview-card">
      <picture>
        <source type="image/jpeg" srcset="${m.imgJpg}">
        <img loading="lazy" src="${m.imgJpg}" alt="${m.alt}" width="400" height="400">
      </picture>
      <div class="menu-preview-info">
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <span class="price">${currency(m.price)}</span>
      </div>
    </article>
  `).join('');
}
renderMenuPreview();

$$('.filter-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    $$('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderGames(btn.dataset.filter);
  });
});

// Menu
const menuItemsEl = $('#menuItems');
function currency(n){ return `$${n.toFixed(2)}`; }
function renderMenu(filter='all'){
  if (!menuItemsEl) return;
  const items = filter==='all' ? menuData : menuData.filter(m => m.type===filter);
  menuItemsEl.innerHTML = items.map(m => `
    <article class="menu-item" data-type="${m.type}">
        <picture>
          <source type="image/jpeg" srcset="${m.imgJpg}">
          <img loading="lazy" src="${m.imgJpg}" alt="${m.alt}" width="120" height="120">
        </picture>
        <div class="menu-item-info">
        <div class="menu-item-header">
          <h3>${m.name}</h3>
          <span class="menu-item-price">${currency(m.price)}</span>
        </div>
        <p class="menu-item-desc">${m.desc}</p>
      </div>
    </article>
  `).join('');
}
renderMenu();

$$('.menu-category').forEach(cat=>{
  cat.addEventListener('click', ()=>{
    $$('.menu-category').forEach(c=>c.classList.remove('active'));
    cat.classList.add('active');
    renderMenu(cat.dataset.category);
  });
});

// ====== CALENDAR ======
const events = {
  '2025-07-15':'Strategy Game Night',
  '2025-07-18':'Pizza & Board Games',
  '2025-07-22':'New Game Demo Day',
  '2025-07-25':'Tournament: Catan Championship',
  '2025-07-30':'Family Game Day'
};
const calendarDays = $('#calendarDays');
const prevMonthBtn = $('#prevMonth');
const nextMonthBtn = $('#nextMonth');
const monthLabel = $('#monthLabel');

function renderCalendar(year, month){
  if (!calendarDays || !monthLabel) return;
  calendarDays.innerHTML = '';
  const first = new Date(year, month, 1);
  const firstDayOfWeek = first.getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();

  for(let i=0;i<firstDayOfWeek;i++){
    const empty = document.createElement('div');
    empty.className = 'day empty';
    empty.setAttribute('aria-hidden','true');
    calendarDays.appendChild(empty);
  }

  for(let d=1; d<=daysInMonth; d++){
    const el = document.createElement('div');
    el.className = 'day';
    el.innerHTML = `<div class="day-number">${d}</div>`;
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    if (events[dateStr]){
      el.innerHTML += `<div class="event" title="${events[dateStr]}">${events[dateStr]}</div>`;
    }
    calendarDays.appendChild(el);
  }

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  monthLabel.textContent = `${monthNames[month]} ${year}`;
}

let currentDate = new Date(2025, 6); // July 2025 by default (sample data)
renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
prevMonthBtn?.addEventListener('click', ()=>{
  currentDate.setMonth(currentDate.getMonth()-1);
  renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
});
nextMonthBtn?.addEventListener('click', ()=>{
  currentDate.setMonth(currentDate.getMonth()+1);
  renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

// ====== FORM + localStorage ======
const bookingForm = $('#bookingForm');
const formMessage = $('#formMessage');
const reservationCount = $('#reservationCount');

function getReservations(){
  try{
    return JSON.parse(localStorage.getItem('bgh_reservations') || '[]');
  }catch{ return []; }
}
function saveReservations(list){
  localStorage.setItem('bgh_reservations', JSON.stringify(list));
  if (reservationCount) reservationCount.textContent = String(list.length);
}
// initialize badge
saveReservations(getReservations());

if (bookingForm){
  bookingForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const phone = $('#phone').value.trim();
    const guests = $('#guests').value;
    const date = $('#date').value;
    const time = $('#time').value;
    const notes = $('#notes').value.trim();

    if(!name || !email || !phone || !date || !time){
      if (formMessage){
        formMessage.textContent = 'Please complete all required fields.';
        formMessage.style.color = 'var(--error)';
      }
      return;
    }

    const reservation = { name, email, phone, guests, date, time, notes, createdAt: new Date().toISOString() };
    const list = getReservations();
    list.push(reservation);
    saveReservations(list);

    const formatted = new Date(date).toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
    if (formMessage){
      formMessage.textContent = `Thanks, ${name}! Reservation for ${guests} on ${formatted} at ${time} saved.`;
      formMessage.style.color = 'var(--success)';
    }
    bookingForm.reset();
  });
  // Min date = today
  const today = new Date();
  $('#date').setAttribute('min', today.toISOString().split('T')[0]);
}

// ====== Smooth scroll (only same-page anchors) ======
$$('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const targetId = a.getAttribute('href');
    if (targetId === '#') return;
    const target = $(targetId);
    if (target){
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

// ====== Newsletter feedback ======
const newsletterForm = $('#newsletterForm');
if (newsletterForm){
  newsletterForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input = $('#newsEmail');
    const msg = $('#newsMessage');
    if (!input.checkValidity()){
      msg.textContent = 'Please enter a valid email address.';
      msg.style.color = 'var(--error)';
      return;
    }
    msg.textContent = 'Subscribed! Check your inbox for confirmation.';
    msg.style.color = 'var(--success)';
    input.value = '';
  });
}

// ====== CONTACT FORM ======
const contactForm = $('#contactForm');
const contactFormMessage = $('#contactFormMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const phone = formData.get('phone')?.trim();
    const subject = formData.get('subject');
    const message = formData.get('message')?.trim();
    
    // Clear previous error messages
    clearContactErrors();
    
    // Validate required fields
    let hasErrors = false;
    
    if (!name) {
      showContactError('nameError', 'Full name is required');
      hasErrors = true;
    }
    
    if (!email) {
      showContactError('emailError', 'Email address is required');
      hasErrors = true;
    } else if (!isValidEmail(email)) {
      showContactError('emailError', 'Please enter a valid email address');
      hasErrors = true;
    }
    
    if (!message) {
      showContactError('messageError', 'Message is required');
      hasErrors = true;
    } else if (message.length < 10) {
      showContactError('messageError', 'Message must be at least 10 characters long');
      hasErrors = true;
    }
    
    if (hasErrors) {
      showContactFormMessage('Please correct the errors above and try again.', 'error');
      return;
    }
    
    // Simulate form submission (in a real app, this would be sent to a server)
    const contactData = {
      name,
      email,
      phone: phone || 'Not provided',
      subject: subject || 'General Inquiry',
      message,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    
    // Store in localStorage for demo purposes
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push(contactData);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    // Show success message
    const subjectText = subject ? ` regarding "${getSubjectLabel(subject)}"` : '';
    showContactFormMessage(
      `Thank you, ${name}! Your message${subjectText} has been sent successfully. We'll get back to you within 24 hours.`,
      'success'
    );
    
    // Reset form
    contactForm.reset();
    
    // Scroll to success message
    contactFormMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// Contact form helper functions
function clearContactErrors() {
  const errorElements = ['nameError', 'emailError', 'messageError'];
  errorElements.forEach(id => {
    const element = $(`#${id}`);
    if (element) {
      element.textContent = '';
    }
  });
}

function showContactError(elementId, message) {
  const element = $(`#${elementId}`);
  if (element) {
    element.textContent = message;
  }
}

function showContactFormMessage(message, type) {
  if (contactFormMessage) {
    contactFormMessage.textContent = message;
    
    // Remove existing status classes
    contactFormMessage.parentElement.classList.remove('success', 'error');
    
    // Add appropriate status class
    contactFormMessage.parentElement.classList.add(type);
    contactFormMessage.parentElement.style.display = 'block';
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getSubjectLabel(value) {
  const subjects = {
    'reservation': 'Table Reservation',
    'event': 'Private Event Planning',
    'games': 'Game Recommendations',
    'feedback': 'Feedback',
    'general': 'General Inquiry',
    'other': 'Other'
  };
  return subjects[value] || 'General Inquiry';
}

// Form reset functionality
const resetButtons = $$('button[type="reset"]');
resetButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Clear error messages when form is reset
    setTimeout(() => {
      clearContactErrors();
      if (contactFormMessage) {
        contactFormMessage.parentElement.style.display = 'none';
      }
    }, 100);
  });
});
