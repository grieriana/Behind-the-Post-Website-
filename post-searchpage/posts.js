const params = new URLSearchParams(window.location.search);
const tacticIndex = Number(params.get("tactic")) || 0;

const tacticTitle = document.querySelector("#tacticTitle");
const tacticDescription = document.querySelector("#tacticDescription");
const postGrid = document.querySelector("#postGrid");
const postSearchInput = document.querySelector("#postSearchInput");
const dropdowns = document.querySelectorAll(".filter-dropdown");
const dropdownButtons = document.querySelectorAll(".dropdown-button");
const filterCheckboxes = document.querySelectorAll(".dropdown-menu input");
const activeFiltersContainer = document.querySelector("#activeFilters");
const noResults = document.querySelector("#noResults");

let activeFilters = [];

const tactics = [
  {
    title: "Supposed Attitude Posts",
    description: "Presents a targeted group as if they hold extreme or unreasonable views, without clear sources or verifiable evidence. These posts often use synthetic media to make the supposed attitude feel real.",
    posts: [
      {
        title: "We may leave the UK if Islamophobia continues",
        description: "A post that claims to reveal what the opposition really means, while speaking on their behalf.",
        thumbnail: "../assets/Posts/tactic1_post1.jpg",
        tags: ["ai-media", "image", "facebook"]
      },
      {
        title: "We may leave the UK",
        description: "A post that claims to reveal what the opposition really means, while speaking on their behalf.",
        thumbnail: "../assets/Posts/tactic1_post2.jpg",
        tags: ["ai-media", "image", "facebook"]
      },
     {
        title: "Respect Muslim Values",
        description: "A post that claims to reveal what the opposition really means, while speaking on their behalf.",
        thumbnail: "../assets/Posts/tactic1_post3.jpg",
        tags: ["ai-media", "image", "facebook"]
      },
     
     
    ]
  },

  {
    title: "Selective Evidence Posts",
    description: "Uses direct quotes, recordings, screenshots or clips to show what the opposition has said. Instead of summarising them, the post presents their own words as evidence.",
    posts: [
      {
        title: "Example Post 1",
        description: "A post that uses a clip, quote or screenshot to frame the opposition through their own words.",
        thumbnail: "../assets/Posts/rw_post3.png",
        tags: ["real-media", "video", "tiktok"]
      }
    ]
  },


 //tactic 3 
  {
    title: "Engagement-Baiting Posts",
    description: "Asks the audience to take a specific action, such as voting, protesting, sharing, donating or joining a movement.",
    posts: [
      {
        title: "Example Post 1",
        description: "A synthetic crowd image using flags and national identity to create a feeling of belonging.",
        thumbnail: "../assets/Posts/rw_post4.png",
        tags: ["ai-media", "image", "facebook"]
      }
    ]
  },


//tactic 4
  {
    title: "Call to Action Posts",
    description: "Asks the audience to take a specific action, such as voting, protesting, sharing, donating or joining a movement.",
    posts: [
      {
        title: "Example Post 1",
        description: "A synthetic high street scene staged to look like everyday local evidence.",
        thumbnail: "../assets/Posts/rw_post5.png",
        tags: ["ai-media", "image", "facebook"]
      }
    ]
  },


//tactic 5
  {
    title: "Identity-Affirming Posts",
    description: "Uses shared values, community, heritage, symbols or belonging to build a sense of “us”.",
    posts: [
      {
        title: "Example Post 1",
        description: "A synthetic post that makes a false or exclusionary policy claim feel normal.",
        thumbnail: "../assets/Posts/rw_post6.png",
        tags: ["ai-media", "image", "facebook"]
      }
    ]
  },


//tactic 6
  {
    title: "Threat-to-Identity Posts",
    description: "Frames social or cultural change as a threat to a shared identity, community or way of life. Where Identity-Affirming Posts build a sense of “us”, Threat-to-Identity Posts suggest that “us” is being damaged, replaced, disrespected or taken away.",
    posts: [
      {
        title: "Example Post 1",
        description: "A synthetic image framing cultural visibility as a national or local threat.",
        thumbnail: "../assets/Posts/rw_post7.png",
        tags: ["ai-media", "image", "facebook"]
      }
    ]
  },


//tactic 7
  {
    title: "Resource Scarcity Posts",
    description: "Suggests that one group’s hardship is caused by another group receiving resources, turning infrastructural problems like housing, benefits or public services into a competition between groups.",
    posts: [
      {
        title: "Example Post 1",
        description: "A synthetic protest scene connecting immigration or minority groups to housing scarcity.",
        thumbnail: "../assets/Posts/rw_post8.png",
        tags: ["ai-media", "image", "facebook"]
      }
    ]
  },

//tactic 8
  {
    title: "Attitude Normalisation Posts",
    description: "Frames an attitude, belief or policy as reasonable, common sense or already widely accepted.",
    posts: [
      {
        title: "Example Post 1",
        description: "A synthetic shopfront post that turns halal meat into a yes or no debate.",
        thumbnail: "../assets/Posts/rw_post9.png",
        tags: ["ai-media", "image", "facebook"]
      }
    ]
  },

//tactic 9
  {
    title: "Synthetic Candid Posts",
    description: "Phrases a stronger message indirectly through questions, neutral wording or anti-hate language, so the post appears acceptable within platform rules.",
    posts: [
      {
        title: "Example Post 1",
        description: "A post that directly asks the audience to join, attend, vote, protest, share or act.",
        thumbnail: "../assets/Posts/rw_post10.png",
        tags: ["real-media", "video", "tiktok"]
      }
    ]
  },


  //tactic 10
  {
    title: "Guideline-Dodging Posts",
    description: "Claims to reveal what the media, politicians or institutions are hiding. These posts position the viewer as someone being let in on the truth.",
    posts: [
      {
        title: "Example Post 1",
        description: "A post that presents itself as exposing something other people are trying to hide.",
        thumbnail: "../assets/Posts/rw_post11.png",
        tags: ["image", "real-media", "facebook"]
      }
    ]
  },


//tactic 11
  {
    title: "Format Borrowing Posts",
    description: "Borrows recognisable formats from pop culture, memes, platforms or mainstream media, blurring the boundary between political discourse and online entertainment. It makes political messaging feel less like formal campaigning and more like something native to the feed: a meme, trend, joke, edit or piece of entertainment.",
    posts: [
      {
        title: "Example Post 1",
        description: "A post that uses indirect wording to suggest a more harmful or extreme claim.",
        thumbnail: "../assets/Posts/rw_post12.png",
        tags: ["image", "ai-media", "facebook"]
      }
    ]
  },
];

function renderHeader() {
  const currentTactic = tactics[tacticIndex] || tactics[0];

  tacticTitle.textContent = currentTactic.title;
  tacticDescription.textContent = currentTactic.description;
}

function renderPosts() {
  const currentTactic = tactics[tacticIndex] || tactics[0];
  const posts = currentTactic.posts;

  postGrid.innerHTML = "";

  posts.forEach((post, postIndex) => {
    const postCard = document.createElement("a");

    postCard.classList.add("post-card");
    postCard.href = `../post-analysispage/analysis.html?tactic=${tacticIndex}&post=${postIndex}`;

    postCard.dataset.title = post.title.toLowerCase();
    postCard.dataset.tags = post.tags.join(" ");

    const tagHTML = post.tags
      .map((tag) => `<span class="tag-pill ${tag}">${formatFilterName(tag)}</span>`)
      .join("");

    postCard.innerHTML = `
      <img src="${post.thumbnail}" alt="${post.title}">
      <div class="post-card-content">
        <h2>${post.title}</h2>
        <p>${post.description}</p>
        <div class="post-tags">
          ${tagHTML}
        </div>
      </div>
    `;

    postGrid.appendChild(postCard);
  });

  filterPosts();
}

function setupDropdowns() {
  dropdownButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dropdown = button.closest(".filter-dropdown");

      dropdowns.forEach((item) => {
        if (item !== dropdown) {
          item.classList.remove("open");
        }
      });

      dropdown.classList.toggle("open");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideDropdown = event.target.closest(".filter-dropdown");

    if (!clickedInsideDropdown) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
      });
    }
  });
}

function setupFilters() {
  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      activeFilters = Array.from(filterCheckboxes)
        .filter((box) => box.checked)
        .map((box) => box.value);

      updateActiveFilterPills();
      filterPosts();
    });
  });

  postSearchInput.addEventListener("input", () => {
    filterPosts();
  });
}

function updateActiveFilterPills() {
  activeFiltersContainer.innerHTML = "";

  activeFilters.forEach((filter) => {
    const pill = document.createElement("button");

    pill.classList.add("active-filter-pill");
    pill.textContent = formatFilterName(filter) + " ×";

    pill.addEventListener("click", () => {
      const checkbox = document.querySelector(`.dropdown-menu input[value="${filter}"]`);

      if (checkbox) {
        checkbox.checked = false;
      }

      activeFilters = activeFilters.filter((item) => item !== filter);

      updateActiveFilterPills();
      filterPosts();
    });

    activeFiltersContainer.appendChild(pill);
  });
}

function filterPosts() {
  const searchTerm = postSearchInput.value.toLowerCase();
  const postCards = document.querySelectorAll(".post-card");

  let visibleCount = 0;

  postCards.forEach((card) => {
    const title = card.dataset.title;
    const tags = card.dataset.tags;
    const text = card.textContent.toLowerCase();

    const matchesSearch =
      title.includes(searchTerm) || text.includes(searchTerm);

    const matchesFilters = activeFilters.every((filter) => {
      return tags.includes(filter);
    });

    if (matchesSearch && matchesFilters) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (visibleCount === 0) {
    noResults.classList.add("show");
  } else {
    noResults.classList.remove("show");
  }
}

function formatFilterName(filter) {
  return filter
    .replace("ai-media", "AI Media")
    .replace("real-media", "Real Media")
    .replace("image", "Image")
    .replace("video", "Video")
    .replace("facebook", "Facebook")
    .replace("instagram", "Instagram")
    .replace("tiktok", "TikTok");
}

renderHeader();
renderPosts();
setupDropdowns();
setupFilters();