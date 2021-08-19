const blogs = [
  {
    name: "NeoG - The Web Dev Renaissance",
    date: "Aug 19, 2021",
    desc: `
    Hey guys, welcome to the second episode of 'Untangle With Shivi'. This one is about my experience at Level 0 of NeoGcamp. So let's get started right away.

    <h2>Introduction</h2>
    
    As you might have guessed by the word 'camp'; Yes it indeed is a Bootcamp, but not like any of the regular coding/placement Bootcamp. You'll get to know this as you read through.

    
    <h2>Roots</h2>

    NeoGCamp was founded by Ms. Tanvi Priya, the current CEO. Also, it has Mr. Tanay Pratap, a senior software engineer at Microsoft, who mentors students at the camp.
    <br />
    <br />
    
    The camp started because Tanay noticed the sad state of Computer Science Engineering, especially in India, wherein the undergrads were either mugging up DSA, or, got stuck in tutorial hell in order to get jobs.
    <br />
    <br />
    
    So he wanted to bring the fun "Science" part of it back to the students as well as the working professionals while also making them competent enough to be recruited via their work, & not just their certificates.
    `,
    link: "https://shivipro.hashnode.dev/neog-the-web-dev-renaissance",
  },
  {
    name: "SVGs & how do they 'pan out'",
    date: "Aug 18, 2021",
    desc: `
    <h2>Brief</h2>
    
    Hey guys, welcome to the very first episode of 'Untangle With Shivi', where I shall try to make you guys understand complex topics by relating to them in real life.
    <br />
    <br />

    Let's begin.
    <br />
    <br />

    So today's topic would be about what, why, & how of SVGs.
    <br />
    <br />

    First of all, if you are a complete beginner to SVGs, you don't need to bother much about its full form.
    <br />
    <br />

    The motive of this article is to make you feel comfortable with SVGs & fall in love with them. So I will be keeping things simple.
    <br />
    <br />

    One more thing, this article might require you to be somewhat experienced with HTML and CSS, in order to best understand the magic of SVGs. This is not a strict requirement, as I will try my best to explain wherever I can, but it will surely come in handy.
    <br />
    <br />

    With that said, let's just dive in.
    <br />
    <br />

    Firstly, just go to The Noun Project, and choose any image of your choice. It can be anything, don't worry about it too much, just choose what you prefer.
    `,
    link: "https://shivipro.hashnode.dev/svgs-and-how-do-they-pan-out",
  },
];

const primaryContent = document.querySelector("#content--primary");

blogs.forEach((blog, index) => {
  let blogSection = document.createElement("section");
  blogSection.classList.add("container-centered");
  blogSection.innerHTML = `
    <div class="blog-section">
    <h2 class="blog-section__name">${blog.name}</h2>
    <small class="blog-section__date">${blog.date}</small>
    <div class="blog-section__desc">
        ${blog.desc}  
    </div>
    <a class="link--primary" href="${blog.link}" target="_blank" rel="noopener noreferrer">Read more</a>
  </div>
    `;
  primaryContent.appendChild(blogSection);
  if (index !== blogs.length - 1)
    primaryContent.innerHTML += `
    <hr class="hr--half" />
    `;
});
