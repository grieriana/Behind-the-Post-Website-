const searchInput = document.querySelector("#searchInput");
const tacticGrid = document.querySelector("#tacticGrid");
const noResults = document.querySelector("#noResults");

const tactics = [
  {
    title: "Supposed Attitude Posts",
    cardDescription: "Claims a group holds extreme views without clear evidence.",
    fullDescription: "Presents a targeted group as if they hold extreme or unreasonable views, without clear sources or verifiable evidence. These posts often use synthetic media to make the supposed attitude feel real."
  },
  {
    title: "Selective Evidence Posts",
    cardDescription: "Uses clips, quotes or articles as evidence while shaping context.",
    fullDescription: "Uses clips, screenshots, quotes or articles as evidence, while still shaping meaning through editing, captions or context."
  },
  {
    title: "Simplification and Engagement-Baiting Posts",
    cardDescription: "Turns complex issues into simple prompts for reaction.",
    fullDescription: "Reduces complex issues into simple choices, questions or prompts, then uses that simplification to invite likes, shares, comments or arguments."
  },
  {
    title: "Call to Action Posts",
    cardDescription: "Asks the audience to vote, protest, share, donate or join.",
    fullDescription: "Asks the audience to take a specific action, such as voting, protesting, sharing, donating or joining a movement."
  },
  {
    title: "Identity-Affirming Posts",
    cardDescription: "Builds a sense of shared values, belonging or community.",
    fullDescription: "Uses shared values, community, heritage, symbols or belonging to build a sense of “us”."
  },
  {
    title: "Threat-to-Identity Posts",
    cardDescription: "Frames change as a threat to identity or way of life.",
    fullDescription: "Frames social or cultural change as a threat to a shared identity, community or way of life."
  },
  {
    title: "Resource Scarcity Posts",
    cardDescription: "Turns structural problems into competition between groups.",
    fullDescription: "Suggests that one group’s hardship is caused by another group receiving resources, turning structural problems like housing, benefits or public services into a competition between groups."
  },
  {
    title: "Attitude Normalisation Posts",
    cardDescription: "Makes an attitude or belief feel reasonable or common sense.",
    fullDescription: "Frames an attitude, belief or policy as reasonable, common sense or already widely accepted."
  },
  {
    title: "Synthetic Candid Posts",
    cardDescription: "Makes staged or generated scenes feel casually photographed.",
    fullDescription: "Uses generated or staged images that look casually photographed, making fictional scenes feel like real-life evidence."
  },
  {
    title: "Guideline-Dodging Posts",
    cardDescription: "Uses indirect wording to keep stronger messages acceptable.",
    fullDescription: "Phrases a stronger message indirectly through questions, neutral wording or anti-hate language, so the post appears acceptable within platform rules."
  },
  {
    title: "Format Borrowing Posts",
    cardDescription: "Uses familiar online formats to make politics feel native to the feed.",
    fullDescription: "Borrows recognisable formats from pop culture, memes, platforms or mainstream media, blurring the boundary between political discourse and online entertainment."
  },
  {
  title: "See Our Data",
  cardDescription: "View the posts and sources behind our tactic categories.",
  fullDescription: "View the posts, sources and examples used to build this tactic categorisation."
  }
];

function renderTactics() {
  tacticGrid.innerHTML = "";

  tactics.forEach((tactic, index) => {
    const card = document.createElement("a");

    card.classList.add("tactic-card");

    if (tactic.title === "See Our Data") {
      card.classList.add("data-card");
      card.href = "#";
    } else {
      card.href = `../post-searchpage/posts.html?tactic=${index}`;
    }

    card.dataset.title = tactic.title.toLowerCase();
    card.dataset.description = tactic.cardDescription.toLowerCase();

    card.innerHTML = `
      <span class="tactic-number">${index + 1}</span>
      <h2>${tactic.title}</h2>
      <p>${tactic.cardDescription}</p>
    `;

    tacticGrid.appendChild(card);
  });

  noResults.classList.remove("show");
}

function filterTactics() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll(".tactic-card");

  let visibleCount = 0;

  cards.forEach((card) => {
    const title = card.dataset.title;
    const description = card.dataset.description;
    const text = card.textContent.toLowerCase();

    const matchesSearch =
      title.includes(searchTerm) ||
      description.includes(searchTerm) ||
      text.includes(searchTerm);

    if (matchesSearch) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  if (searchTerm !== "" && visibleCount === 0) {
    noResults.classList.add("show");
  } else {
    noResults.classList.remove("show");
  }
}

renderTactics();

searchInput.addEventListener("input", filterTactics);