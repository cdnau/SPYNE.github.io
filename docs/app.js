/* ======================================================================
   SPYNE — พฤติกรรมหน้าเว็บ
   ข้อมูลที่แก้บ่อย: content.js และ demo-data.js
   01. จำลองท่านั่ง   02. คลิป YouTube   03. สื่อทดลองจริง
   ====================================================================== */

// 01. ปุ่มจำลองท่านั่ง ----------------------------------------------------
function setupPostureDemo() {
  const container = document.querySelector('#posture-buttons');
  const states = window.SPYNE_DEMO_STATES;

  function showPosture(selectedIndex) {
    const state = states[selectedIndex];

    [...container.children].forEach((button, index) => {
      button.setAttribute('aria-pressed', String(index === selectedIndex));
    });

    document.querySelector('#head-value').innerHTML = `${state.head}<small>cm</small>`;
    document.querySelector('#chest-value').innerHTML = `${state.chest}<small>cm</small>`;
    document.querySelector('#state-name').textContent = state.code;
    document.querySelector('#state-description').textContent = state.description;
    document.querySelector('#state-dot').style.background = state.color;
  }

  states.forEach((state, index) => {
    const button = document.createElement('button');
    const code = document.createElement('small');

    button.type = 'button';
    button.textContent = state.label;
    code.textContent = state.code;
    button.append(code);
    button.addEventListener('click', () => showPosture(index));
    container.append(button);
  });

  showPosture(0);
}

// 02. คลิปนำเสนอ YouTube -------------------------------------------------
function getYouTubeId(value) {
  try {
    const url = new URL(value);
    const hosts = ['youtube.com', 'www.youtube.com', 'm.youtube.com'];
    let videoId;

    if (hosts.includes(url.hostname)) {
      videoId = url.searchParams.get('v')
        || url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1];
    } else if (url.hostname === 'youtu.be') {
      videoId = url.pathname.slice(1);
    }

    return /^[\w-]{11}$/.test(videoId || '') ? videoId : null;
  } catch {
    return null;
  }
}

function setupPresentationVideo(youtubeUrl) {
  const videoId = getYouTubeId(youtubeUrl);
  if (!videoId) return; // ยังไม่ใส่ลิงก์: คงช่องรอคลิปไว้

  const frame = document.createElement('iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
  frame.title = 'คลิปนำเสนอ SPYNE';
  frame.loading = 'lazy';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  frame.allowFullscreen = true;

  document.querySelector('#youtube').replaceChildren(frame);
  document.querySelector('#presentation .tag').textContent = 'คลิปจากทีมผู้จัดทำ';
}

// 03. ภาพและวิดีโอจากการทดลองจริง ---------------------------------------
function createEvidenceMedia(item, index) {
  const slot = document.createElement('div');
  slot.className = 'media-slot';

  if (!item.src) {
    const icon = document.createElement('span');
    const label = document.createElement('div');
    icon.textContent = item.type === 'video' ? '▷' : '+';
    icon.setAttribute('aria-hidden', 'true');
    label.textContent = `0${index + 1} / รอสื่อจากการทดลองจริง`;
    slot.append(icon, label);
    return slot;
  }

  const isVideo = item.type === 'video';
  const media = document.createElement(isVideo ? 'video' : 'img');
  media.src = item.src;

  if (isVideo) {
    media.controls = true;
    media.preload = 'metadata';
  } else {
    media.alt = item.title;
    media.loading = 'lazy';
  }

  slot.append(media);
  return slot;
}

function setupEvidenceGallery(items) {
  const gallery = document.querySelector('#evidence-grid');

  items.forEach((item, index) => {
    const article = document.createElement('article');
    const title = document.createElement('h3');
    const note = document.createElement('p');

    title.textContent = item.title;
    note.textContent = item.note;
    article.append(createEvidenceMedia(item, index), title, note);
    gallery.append(article);
  });
}

// เริ่มทำงานเมื่อโหลด HTML และข้อมูลแล้ว (ใช้ defer ใน index.html)
const content = window.SPYNE_CONTENT || {};
setupPostureDemo();
setupPresentationVideo(content.youtubeUrl);
setupEvidenceGallery(content.evidence || []);
