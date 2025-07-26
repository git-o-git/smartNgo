// Add this to your script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menuSlider = document.querySelector('.menu-slider');

  // Toggle Menu
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    menuSlider.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menuSlider.contains(e.target)) {
      hamburger.classList.remove('active');
      menuSlider.classList.remove('active');
    }
  });

  // Close menu on link click
  document.querySelectorAll('.menu-slider a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menuSlider.classList.remove('active');
    });
  });
});

// // Initialize scrolling
// const imageGal = document.querySelector('.image-gal');
// let scrollAmount = 0;
// let scrollInterval;

// function startScrolling() {
//   scrollInterval = setInterval(() => {
//     scrollAmount += 1;
//     if (scrollAmount >= imageGal.scrollWidth / 2) {
//       scrollAmount = 0;
//     }
//     imageGal.scrollLeft = scrollAmount;
//   }, 20);
// }

// // Start scrolling on page load
// startScrolling();

// // Pause on hover
// const images = document.querySelectorAll('.img-item');
// images.forEach(item => {
//   item.addEventListener('mouseenter', () => clearInterval(scrollInterval));
//   item.addEventListener('mouseleave', startScrolling);
// });



// const typedTextSpan = document.querySelector(".typed-text");
// const cursor = document.querySelector(".cursor");

// const words = [
//   "builds leaders.",
//   "empowers citizens.",
//   "changes mindsets.",
//   "makes learning fun.",
//   "teaches democracy.",
//   "connects communities."
// ];

// const typingDelay = 150;
// const erasingDelay = 100;
// const newLetterDelay = 1000; // pause between typed & erase
// let index = 0;
// let charIndex = 0;

// document.addEventListener('DOMContentLoaded', () => {
//     if (words.length) {
//         setTimeout(type, newLetterDelay);
//     }
// });

// function type() {
//     if (charIndex < words[index].length) {
//         typedTextSpan.textContent += words[index].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typingDelay);
//     } else {
//         setTimeout(erase, newLetterDelay);
//     }
// }

// function erase() {
//     if (charIndex > 0) {
//         typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase, erasingDelay);
//     } else {
//         index++;
//         if (index >= words.length) index = 0;
//         setTimeout(type, typingDelay);
//     }
// }



// for team section
function startInfiniteCarousel(carouselSelector, speed = 1, reverse = false) {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return;
  let scrollAmount = 0;
  let direction = reverse ? -1 : 1;

  // Duplicate cards for seamless looping
  carousel.innerHTML += carousel.innerHTML;

  function animate() {
    scrollAmount += speed * direction;
    if (scrollAmount >= carousel.scrollWidth / 2) scrollAmount = 0;
    if (scrollAmount < 0) scrollAmount = carousel.scrollWidth / 2;
    carousel.scrollLeft = scrollAmount;
    requestAnimationFrame(animate);
  }
  animate();

  // Pause on hover
  carousel.addEventListener('mouseenter', () => direction = 0);
  carousel.addEventListener('mouseleave', () => direction = reverse ? -1 : 1);
}

// Start carousels
startInfiniteCarousel('.ist-part', 1, false);  // Left to right
startInfiniteCarousel('.iind-part', 1, true);  // Right to left


// for rotation of theme-knob
window.addEventListener('scroll', () => {
  const knob = document.getElementById('radio-knob');
  const section = document.querySelector('.game-section');
  const sectionRect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate scroll progress in the section
  const start = windowHeight - sectionRect.top; // Pixels scrolled into view
  const total = sectionRect.height + windowHeight; // Total scrollable distance

  // Clamp progress between 0 and 1
  let progress = start / total;
  progress = Math.min(Math.max(progress, 0), 1);

  // Map progress to rotation angle (0° to 360°)
  const rotation = progress * 360;

  // Apply rotation transform to the knob
  knob.style.transform = `rotate(${rotation}deg)`;
});



// for team section
const members = [
  {
    img: "./images/governing-bodies/archana-kapoor.webp",
    desc: "Archana Kapoor, Founder-Director of SMART, Radio Mewat, and The Radio Festival, is a publisher, author, and a committed community media specialist. A visionary leader, she has transformed SMART into a nationally recognized organization working at the intersection of media, technology, and social justice. Her work has empowered marginalized communities across India, amplifying their voices and strengthening access to rights and information. Her experience during the pandemic further reinforced her commitment to public health as a cornerstone of resilient and inclusive development."
  },
  {
    img: "./images/team/SATYA-PRAKASH.webp",
    desc: "Satya Prakash is currently overseeing administrative responsibilities at SMART NGO, where he plays a key role in ensuring operational efficiency and organizational support. With a focus on coordination, documentation, and day-to-day management, he contributes to the smooth functioning of the NGO's programs and initiatives."
  },
  {
    img: "./images/team/Ashvani-Sharma-scaled.webp",
    desc: "Ashvani Sharma is the Accounts Lead at SMART, overseeing all financial operations and fund management across the organization. He plays a key role in budgeting for projects, ensuring that financial plans align with program goals and donor requirements. With a deep understanding of compliance and reporting, Ashvani provides the structure and clarity that empowers teams to focus on impact. His steady leadership ensures SMART’s finances remain transparent, efficient, and purpose-driven."
  },
  {
    img: "./images/team/Shraboni-Das.jpeg.png",
    desc: "Shraboni is a development sector professional with 7 years of experience driving social impact through roles in monitoring and evaluation, project management, partnerships, and knowledge management. She holds dual master’s degrees in Women’s Studies from Tata Institute of Social Sciences (TISS), Mumbai, and Public Policy and Management from King’s College London. Deeply committed to advancing gender equity, her work is rooted in a strong passion for social justice and inclusive development. Outside of work, she is an avid reader, keen consumer of popular culture and enjoys travelling."
  },
  {
    img: "./images/team/Aryamaan-Sinha.webp",
    desc: "Aryamaan Sinha manages the climate change vertical at SMART NGO, where he works with communities, Panchayats, and anyone else willing to listen about why climate resilience actually matters. He also leads research and intervention design, grounding SMART’s field tools in real-world contexts—because good ideas need better backstories. Between decoding policy jargon and making tools people might actually use, he tries to turn long-term climate goals into something less terrifying and more doable. Outside work, Aryamaan is an avid gamer and someone who’s unusually invested in the history and context of things—both virtual and real. "
  },
  {
    img: "./images/team/Himanshi-Pandey-e1682579834156.jpeg",
    desc: "Himanshi Pandey is a dynamic development sector professional with over two years of experience in program management, gender advocacy, and community media. Currently serving as a Program Associate at SMART, she leads and supports large-scale campaigns on gender-based violence, public health, and nutrition in collaboration with community radio stations across India. Himanshi holds a Master’s in Mass Communication from Guru Gobind Singh Indraprastha University and has also pursued a Postgraduate Diploma in Hindi–English Translation. Her academic background in Hindi Literature from Miranda House, University of Delhi, coupled with her training in journalism and content writing, lends her a strong foundation in storytelling, grassroots communication, and media-based interventions."
  },
  {
    img: "./images/team/Mansi.jpeg-e1736835350478.png",
    desc: "Mansi Chaudhary is a passionate gender mainstreaming professional with a Master’s in Gender Studies from Ambedkar University Delhi. Her work bridges grassroots engagement and critical research, from building trust with women and children in Delhi’s red-light areas to examining the root causes of toxic masculinity. She has conducted field research on Bihar’s state liquor ban, analyzing its on-ground impact through a gendered lens. Currently with SMART, she contributes to Project HKN, addressing gender-based violence through community radio platforms. Mansi’s work is grounded in feminist values and a rights-based approach, committed to inclusive, community-led change for gender equity and justice."
  },
  {
    img: "./images/team/Priyanka-Joshi.webp",
    desc: "Priyanka Joshi is a Development Communication practitioner with a strong foundation in multimedia storytelling and digital strategy. She holds a Bachelor's degree from Lady Irwin College and a Master’s in Development Communication from Jamia Millia Islamia. At SMART, she serves as the Communication Lead and Program Associate, where she designs impactful content, manages social media outreach, and supports program implementation—particularly in the health sector. Passionate about using communication as a tool for social change, she works closely with communities to amplify voices and drive meaningful dialogue."
  },
  {
    img: "./images/team/Sharuya-Singh.jpeg.png",
    desc: "Shaurya Singh is a graphic designer at SMART, with a keen interest in packaging, print, and UI/UX design. A graduate of Srishti School of Design, he brings a multidisciplinary approach to visual storytelling and communication. At SMART, he works at the intersection of design and social change, crafting creative outputs that resonate with diverse rural and urban audiences. His work spans branding, systems design, and participatory media, with a focus on creating accessible, engaging, and purpose-driven visual experiences. Shaurya believes in the power of design to influence behavior and shape inclusive futures."
  },
  {
    img: "./images/team/Lembi-Devi-scaled-e1696589411220.webp",
    desc: "Kh. Manglembi Devi is a photojournalist with over a decade of experience as a photo researcher and news coordinator. She seamlessly blends aesthetics with a keen eye for visuals and exceptional people skills. Holding a Master's degree in Botany and a PGJMC, her passion lies in sustainable living, nature, flora, fauna, and photography."
  },
  {
    img: "./images/team/GYAN-PRAKASH.webp",
    desc: "Description for Gyan Prakash, Office Help."
  },
  {
    img: "./images/team/Abeer-Kapoor.jpg",
    desc: "Abeer Kapoor is the Founder of Civic Games Lab and the Creative Director at SMART, where he leads the Social Games for Change vertical. A game designer and writer, he uses the power of play to inspire civic engagement, foster dialogue, and drive social transformation. His work blends creativity and systems thinking to design interactive experiences on themes like governance, gender, and climate. "
  },
  {
    img: "./images/team/member_13.webp",
    desc: "Description for Ravindra, HR."
  },
  {
    img: "./images/team/Rajni-e1682578622883.webp",
    desc: "Rajni is a dedicated Account Manager at SMART NGO, bringing precision and accountability to every financial detail. With a strong background in finance and administration, she ensures transparent and efficient fund management across all projects. Rajni is passionate about supporting social impact through her work, contributing behind the scenes to help SMART's initiatives succeed."
  },
  {
    img: "./images/team/Tarushikha.jpeg.png",
    desc: "Development professional with extensive experience in strategic program management and implementation across gender, sustainability, CSR-related projects, and a strong advocate for mental health. Currently leading the WASH-CCES project across four states, with overseeing end-to-end implementation. She has the expertise in managing project cycles, monitoring and reporting. Skilled in strengthening systems for effective and impactful program delivery."
  },
  {
    img: "./images/team/Praveen.webp",
    desc: "Praveen is a Master's graduate in International Relations with over three years of hands-on experience in program implementation and field-based development work. His expertise lies in conducting workshops, training community members, and leading a wide range of capacity-building initiatives at the grassroots level. Currently serving as an Assistant Program Manager at SMART, he plays a key role in planning, coordinating, and executing development programs that drive sustainable impact."
  },
  {
    img: "./images/team/Mohammad-Hanzala-e1736834574163.jpeg",
    desc: "Mohammad Hanzala is a public health professional currently serving in the capacity of Program Associate at SMART. Holding an MBA in Healthcare Management, he brings around three years of experience in reproductive, maternal, and child health (RMNCH), adolescent health, nutrition, gender, and sexual and reproductive health and rights (SRHR). His work emphasizes program coordination, data-driven implementation, technical documentation, and stakeholder engagement to strengthen community health systems and improve program quality through evidence-based approaches. Hanzala is deeply committed to advancing public health outcomes. Beyond his professional pursuits, he is an avid reader and a devoted pet parent who finds joy in thoughtful exploration and companionship."
  },
  {
    img: "./images/team/Masira-Siddiqui.JPG.webp",
    desc: "Masira Siddiqui holds a Bachelor's degree in English Literature from Delhi University and a Master's in Mass Communication from AJK MCRC, Jamia Millia Islamia. She currently works as a Research Associate at SMART NGO, where she explores the dynamic intersection of education, media, and research. With a strong foundation in storytelling and academic inquiry, Masira is passionate about using communication as a tool for social change, and is committed to creating meaningful, community-driven impact through knowledge and narrative."
  },
  {
    img: "./images/team/Abhishek-Singh-Rajput-e1736834041984.jpeg",
    desc: "Abhishek Singh is a seasoned Video Editor and Multimedia Producer with over a decade of experience in the media and content creation industry. Currently serving as Senior Video Editor at SMART, he brings a sharp eye for detail, technical expertise, and a deep understanding of visual storytelling.Abhishek leads multimedia content production, transforming complex narratives into compelling and impactful audio-visual formats."
  },
  {
    img: "./images/team/member_20.webp",
    desc: "Description for Aashsna Khanna, Graphic Designer."
  },
  {
    img: "./images/team/GREGORY-TOPPO.webp",
    desc: "Description for Gregory Toppo, Office Help."
  },
  {
    img: "./images/team/JAMES.webp",
    desc: "Description for James Paulose, Office Help."
  }
];

document.querySelectorAll('.team-member').forEach((el, idx) => {
  el.addEventListener('click', function() {
    document.querySelectorAll('.team-member').forEach(m => m.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('profile-img').src = members[idx].img;
    document.getElementById('profile-desc').innerHTML = `<p>${members[idx].desc}</p>`;
  });
});





// our partners carosels

function setupLogoScroller(rowId, interval = 2000) {
  const row = document.getElementById(rowId);
  let logoWidth = 0;

  function scrollOnce() {
    if (row.children.length === 0) return;
    logoWidth = row.children[0].offsetWidth + 40; // 40px = .logos-row gap

    row.scrollBy({ left: logoWidth, behavior: 'smooth' });

    // If we're near the end, reset to start for infinite loop effect
    setTimeout(() => {
      if (row.scrollLeft + row.offsetWidth >= row.scrollWidth - 1) {
        row.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 500);
  }

  setInterval(scrollOnce, interval);
}

// Set up both rows
setupLogoScroller('gov-partners', 2100);
setupLogoScroller('ngo-partners', 2100);






// Arrow icon in project section
document.querySelectorAll('.themeProjectPast').forEach(themePastSection => {
  const pastProject = themePastSection.querySelector('.PastProject');
  const leftArrow = themePastSection.querySelector('.left-arrow');
  const rightArrow = themePastSection.querySelector('.right-arrow');

  // Scroll behavior on clicking arrows
  leftArrow.onclick = () => pastProject.scrollBy({ left: -300, behavior: 'smooth' });
  rightArrow.onclick = () => pastProject.scrollBy({ left: 300, behavior: 'smooth' });

  // Show/hide arrows based on scroll position
  function checkScroll() {
    leftArrow.style.display = pastProject.scrollLeft > 0 ? 'block' : 'none';
    rightArrow.style.display =
      (pastProject.scrollWidth - pastProject.clientWidth - pastProject.scrollLeft > 1)
        ? 'block'
        : 'none';
  }

  // Add event listeners and initial check
  pastProject.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', checkScroll);
  checkScroll();
});

