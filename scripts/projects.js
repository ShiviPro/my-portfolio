let projects = [
  {
    name: "MEmory-quiz",
    date: "Jun, 2021",
    purpose: ["markOne"],
    desc: "A simple CLI based quiz game to check how much one knows about 'ME'.",
    liveLink:
      "https://replit.com/@ShiviPro/MEmory-Quiz?embed=1&output=1#index.js",
    srcLink: "https://github.com/ShiviPro/MEmory-quiz",
  },
  {
    name: "poke-quiz",
    date: "Jun, 2021",
    purpose: ["markTwo"],
    desc: "A simple CLI based Pokémon quiz game.",
    liveLink: "https://replit.com/@ShiviPro/PokeQuiz?embed=1&output=1#index.js",
    srcLink: "https://github.com/ShiviPro/poke-quiz",
  },
  {
    name: "demo-local-repo",
    date: "Jun, 2021",
    purpose: ["markThree"],
    desc: "A demo repo published via Git GUI i.e GitKraken.",
    liveLink: "https://demo-local-app.netlify.app/",
    srcLink: "https://github.com/ShiviPro/demo-local-repo",
  },
  {
    name: "my-portfolio",
    date: "Jun, 2021",
    purpose: ["markFour", "markFive"],
    desc: "My web-developer portfolio website made with HTML, CSS, & JS.",
    liveLink: "https://shivamtewari.netlify.app/",
    srcLink: "https://github.com/ShiviPro/my-portfolio",
  },
  {
    name: "banana-talk",
    date: "Jul, 21",
    purpose: ["markSix"],
    desc: `Are you a fan of minions? Did you know that the gibberish they say is
    an actual language. Use this web app based in HTML, CSS, and JS to
    convert your text from English to <em>Minion speak</em> or
    <em>Banana language</em>.`,
    liveLink: "https://ask-minions.netlify.app/",
    srcLink: "https://github.com/ShiviPro/banana-talk",
  },
  {
    name: "valyrian-vocal",
    date: "Aug, 21",
    purpose: ["markSeven"],
    desc: "Valyrian Vocal is a web app that can help you vocalize yourself in Valyrian; meaning that it can translate your English to Valyrian.",
    liveLink: "https://valyrianvocal.netlify.app/",
    srcLink: "https://github.com/ShiviPro/valyrian-vocal",
  },
  {
    name: "flag-mania",
    date: "Aug, 21",
    purpose: ["markEight"],
    desc: "Want to know what all those flag emojis mean in your chats. Flag Mania can help you in getting a quick idea of what that flag represents, and whether you should engage in a conversation where the flag is being used.",
    liveLink: "https://flagmania.netlify.app/",
    srcLink: "https://github.com/ShiviPro/flag-mania",
  },
  {
    name: "must-plays",
    date: "Aug, 21",
    purpose: ["markNine"],
    desc: "Must Plays is a web app that lists the most legendary games of all time. Now you might prefer only Action-Adventure or RPG or any other genre. Well whatever it might be MPs has got you covered.",
    liveLink: "https://mustplays.netlify.app/",
    srcLink: "https://github.com/ShiviPro/must-plays",
  },
  {
    name: "cash-register",
    date: "Aug, 21",
    purpose: ["markTen"],
    desc: "A web app that can help you to calculate how much minimum number of notes can be given when returning change.",
    liveLink: "https://generatechange.netlify.app/",
    srcLink: "https://github.com/ShiviPro/cash-register",
  },
  {
    name: "lucky-birthday",
    date: "Aug, 21",
    purpose: ["mark11"],
    desc: "A web app that tells you if your birthday is lucky or not.",
    liveLink: "https://luckydob.netlify.app/",
    srcLink: "https://github.com/ShiviPro/lucky-birthday",
  },
  {
    name: "triangles-simplified",
    date: "Aug, 21",
    purpose: ["mark12"],
    desc: "An app that can help you in conquering your fear of Triangles while having some fun.",
    liveLink: "https://simplifytriangles.netlify.app/",
    srcLink: "https://github.com/ShiviPro/triangles-simplified",
  },
  {
    name: "palindromic-birthday",
    date: "Aug, 21",
    purpose: ["mark13"],
    desc: "An app that can tell if any specific combination of your dob is palindromic or not. If not, it returns the nearest one.",
    liveLink: "https://palindromic-dob.netlify.app/",
    srcLink: "https://github.com/ShiviPro/palindromic-birthday",
  },
  {
    name: "stock-redemption",
    date: "Aug, 21",
    purpose: ["mark14"],
    desc: "An app that helps people in determining if they are making profit or loss on their stocks.",
    liveLink: "https://stockredemption.netlify.app/",
    srcLink: "https://github.com/ShiviPro/stock-redemption",
  },
];

const content = document.querySelector("#primary-content");

projects.forEach((project, index) => {
  let purposesDiv = document.createElement("div");
  project.purpose.forEach((purpose) => {
    purposesDiv.innerHTML += `<span class="project-purpose">${purpose}</span>&nbsp;`;
  });
  let projectDiv = document.createElement("div");
  projectDiv.innerHTML = `
    <section class="container-centered">
      <div class="project-section">
        <h2 class="project-section__name">${project.name}</h2>
        <small class="project-section__date">${project.date}</small>&emsp;<div class="purpose-div">${purposesDiv.innerHTML}</div>
        <p class="project-section__desc">
          ${project.desc}
        </p>
        <a
          class="link--primary"
          target="_blank"
          rel="noreferrer noopener"
          href="${project.liveLink}"
          >Live Project</a
        >
        <br />
        <a
          class="link--secondary"
          target="_blank"
          rel="noreferrer noopener"
          href="${project.srcLink}"
          >View Source</a
        >
      </div>
    </section>
    `;
  content.appendChild(projectDiv);
  if (index !== projects.length - 1)
    content.innerHTML += `
    <hr class="hr--half" />
    `;
});
