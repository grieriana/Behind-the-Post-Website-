const params = new URLSearchParams(window.location.search);

const tacticIndex = Number(params.get("tactic")) || 0;
const postIndex = Number(params.get("post")) || 0;

const backToPosts = document.getElementById("back-to-posts");

if (backToPosts) {
  backToPosts.href = `../post-searchpage/posts.html?tactic=${tacticIndex}`;
}

const tactics = [
  {
    title: "Supposed Attitude Posts",
    description:
      "Presents a targeted group as if they hold extreme or unreasonable views, without clear sources or verifiable evidence. These posts often use synthetic media to make the supposed attitude feel real.",
    posts: [
      {
        accountName: "UK Real Talk",
        postDate: "7 May 2026",

        leftMainText:
          "Respect, safety, and equality should never be optional. Every community deserves to live without fear, hate, or discrimination. 🇬🇧",

        captionAnnotation:
          "The caption uses broad anti-hate language. The post appears supportive, but the image and framing invite the audience to discuss Muslims as the subject of the issue.",

        hashtags:
          "#StopIslamophobia #EqualityForAll #RespectEveryone #UnitedKingdom #HumanRights #EndHate #PeaceAndUnity #CommunitySupport #UKNews #realtalk",

        mainImage: "../assets/Posts/tactic1_post1.jpg",
        mediaType: "image",

        hotspots: [
          {
            x: 42,
            y: 28,
            text: "The flag background places the image inside a national identity frame."
          },
          {
            x: 58,
            y: 46,
            text: "The generated portrait makes the issue feel attached to a real individual, even though the scene is synthetic.",
            flip: true
          }
        ],

        tags: ["image", "ai-media", "instagram"],

        likes: 4900,
        comments: 2300,
        shares: 71,

        comment1: "Doesn’t it work the other way what about Christianophobia?",
        comment1Likes: 34,
        comment1Annotation:
          "The comment reverses the issue by suggesting Muslims are not the only group who experience discrimination.",

        comment2: "I will happily provide suitcase for you to go 😂😂",
        comment2Likes: 18,
        comment2Annotation:
          "The comment turns the post into a removal fantasy, treating leaving the country as the desired response.",

        comment3: "Good riddance",
        comment3Likes: 9,
        comment3Annotation:
          "The short hostile response shows how the post invites rejection rather than discussion."
      },

      {
        accountName: "Eva Vanderbroek",
        postDate: "19 May 2026",

        leftMainText:
          "According to a recent poll, 1 in 3 british muslims is thinking of leaving the UK for another country. *AI imagine to recreate a news",

        captionAnnotation:
          "The caption uses a poll-like claim to make a supposed attitude feel measurable and factual, while the AI image gives the claim a visual form.",

        hashtags: "#IslamicDebate #MuslimCommunity #IslamTeachings",

        mainImage: "../assets/Posts/tactic1_post2.jpg",
        mediaType: "image",

        hotspots: [
          {
            x: 50,
            y: 30,
            text: "The image visualises a claimed attitude rather than showing direct evidence of it."
          },
          {
            x: 58,
            y: 62,
            text: "The synthetic scene gives the poll-like caption a sense of reality.",
            flip: true
          }
        ],

        tags: ["image", "synthetic", "facebook"],

        likes: 129,
        comments: 179,
        shares: 9,

        comment1:
          "Leave immediately!!! You contribute nothing but Violence and Instability!!!!!!!!!!",
        comment1Likes: 30,
        comment1Annotation:
          "The comment treats the supposed desire to leave as proof that the group is a threat.",

        comment2:
          "You can leave, please do.I'm sure they would appreciate it.Just don't come to the u.S a we don't want you",
        comment2Likes: 16,
        comment2Annotation:
          "The comment expands the rejection beyond the UK, turning the post into a wider exclusionary statement.",

        comment3: "Good job, go to Saudi Arabia.",
        comment3Likes: 13,
        comment3Annotation:
          "The comment redirects the person towards a Muslim-majority country, implying they do not belong in the UK."
      },

      {
        accountName: "British Life",
        postDate: "24 April 2026",

        leftMainText:
          "Respect goes both ways in a diverse society 🇬🇧 How should different values coexist in the UK today?👇 Share your thoughts",

        captionAnnotation:
          "The caption sounds balanced, but the phrase ‘respect goes both ways’ frames the targeted group as if they are failing to respect British society.",

        hashtags:
          "#UnitedKingdom #UKDebate #Respect #DiversityUK #MulticulturalUK #CommunityVoices #PublicOpinion #UKDiscussion #HaveYourSay #UKTrending #SocialDebate #CurrentIssues #UKCommunity #PeacefulDiscussion #RespectMatters",

        mainImage: "../assets/Posts/tactic1_post3.jpg",
        mediaType: "image",

        hotspots: [
          {
            x: 50,
            y: 32,
            text: "The image creates a symbolic scene about cultural difference rather than documenting a real event."
          },
          {
            x: 70,
            y: 58,
            text: "The visual framing supports the caption’s idea that respect and belonging are in conflict.",
            flip: true
          }
        ],

        tags: ["image", "synthetic", "facebook"],

        likes: 53,
        comments: 172,
        shares: 7,

        comment1: "Respect english values first",
        comment1Likes: 23,
        comment1Annotation:
          "The comment turns coexistence into a demand for assimilation into English values.",

        comment2:
          "Which 'values'? Allowing adult men to marry several women, including children?",
        comment2Likes: 4,
        comment2Annotation:
          "The comment invents or exaggerates values attributed to the targeted group, which fits the supposed attitude tactic.",

        comment3: "Never … you respect ours first",
        comment3Likes: 8,
        comment3Annotation:
          "The comment frames respect as conditional, suggesting the targeted group must prove respect first."
      }
    ]
  },

  {
    title: "Selective Evidence Posts",
    description:
      "Uses direct quotes, recordings, screenshots or clips to show what the opposition has said. Instead of summarising them, the post presents their own words as evidence.",
    posts: [
      {
        accountName: "Green Party",
        postDate: "Add date here",

        leftMainText: "Add the caption here",

        hashtags: "#GreenParty #Politics #SelectiveEvidence",

        mainImage: "../assets/Posts/tactic2_post1.mov",
        mediaType: "video",

        tags: ["video", "real-media", "tiktok"],

        likes: 0,
        comments: 0,
        shares: 0,

        comment1: "Add comment here",
        comment1Likes: 0,

        comment2: "Add comment here",
        comment2Likes: 0,

        comment3: "Add comment here",
        comment3Likes: 0
      }
    ]
  },

  {
    title: "Synthetic Documentary-Style Posts",
    description: "Presents synthetic images as real-life scenes.",
    posts: [
      {
        accountName: "UK Real Talk",
        postDate: "1 May 19:56",

        leftMainText:
          "Halal meat is part of daily life for many families across Britain. Communities, traditions, and businesses all matter in a diverse nation. What do you think about the role of halal shops in local communities?",

        hashtags: "#HalalMeat #BritishCommunities #UKDebate #LocalBusiness",

        mainImage: "../assets/Posts/rw_post3.png",
        mediaType: "image",

        tags: ["image", "ai-media", "facebook"],

        likes: 5,
        comments: 5,
        shares: 1,

        comment1: "It’s a disgrace and should be banned",
        comment1Likes: 2,

        comment2: "Barbaric",
        comment2Likes: 1,

        comment3: "Stop cruel religious slaughter close all the shops now",
        comment3Likes: 1
      }
    ]
  },

  {
    title: "Normalisation of Fake Policies Posts",
    description:
      "Presents bans and exclusionary policies as reasonable or already happening elsewhere.",
    posts: [
      {
        accountName: "Be on Life",
        postDate: "8 May 21:46",

        leftMainText: "Wake up Britain.",

        hashtags: "#Britain #Policy #UKDebate",

        mainImage: "../assets/Posts/rw_post4.png",
        mediaType: "image",

        tags: ["image", "ai-media", "facebook"],

        likes: 4200,
        comments: 621,
        shares: 153,

        comment1: "Er. that’s a no-brainer isn’t it.",
        comment1Likes: 51,

        comment2: "Same should apply in the UK",
        comment2Likes: 65,

        comment3: "Wake up, England",
        comment3Likes: 11
      }
    ]
  },

  {
    title: "Loss of Britishness Posts",
    description:
      "Frames minorities as a threat to British identity, customs or policies.",
    posts: [
      {
        accountName: "UK Real Talk",
        postDate: "10 May 17:18",

        leftMainText:
          "A question that’s dividing opinions across Britain.\nShould people have complete freedom to wear what they want, or should there be limits in certain public places for security and social reasons?",

        hashtags: "#UK #BritishValues #PublicOpinion",

        mainImage: "../assets/Posts/rw_post5.png",
        mediaType: "image",

        tags: ["image", "ai-media", "facebook"],

        likes: 115,
        comments: 53,
        shares: 1,

        comment1: "Yes wear it in the desert",
        comment1Likes: 5,

        comment2: "Ninja dress definitely yes!",
        comment2Likes: 5,

        comment3:
          "The caption pretends to be neutral, but it clearly invites a pile-on.",
        comment3Likes: 2
      }
    ]
  },

  {
    title: "Loss of Resources Posts",
    description:
      "Frames housing, benefits, hotels or public services as being unfairly taken from “British people”.",
    posts: [
      {
        accountName: "UK MODE",
        postDate: "7 May 12:00",

        leftMainText:
          "The incredible strain on our local communities is becoming impossible to ignore. Across the UK, everyday hard-working citizens are watching as local hotels and accommodations are blocked out to house unprecedented numbers of migrants.",

        hashtags: "#UnitedKingdom #Housing #Community",

        mainImage: "../assets/Posts/rw_post6.png",
        mediaType: "image",

        tags: ["image", "ai-media", "facebook"],

        likes: 395,
        comments: 37,
        shares: 35,

        comment1: "Time to shut the door on this crisis and focus on our own",
        comment1Likes: 2,

        comment2: "Look after British people first.",
        comment2Likes: 4,

        comment3: "This is why people are angry.",
        comment3Likes: 3
      }
    ]
  },

  {
    title: "Debate-Baiting Posts",
    description:
      "Turns complex political issues into simple questions that invite stronger opinions.",
    posts: [
      {
        accountName: "Dona Taylor",
        postDate: "10 May 19:02",

        leftMainText:
          "A question many people are debating across the UK today. Should halal meat remain available, or should new rules be introduced? Respect every opinion, but keep the discussion peaceful and respectful.",

        hashtags: "#HalalMeat #UKDebate #FreedomOfChoice",

        mainImage: "../assets/Posts/rw_post7.png",
        mediaType: "image",

        tags: ["image", "ai-media", "facebook"],

        likes: 36,
        comments: 36,
        shares: 4,

        comment1: "Should be banned, in my opinion",
        comment1Likes: 3,

        comment2: "I don’t want it near me.",
        comment2Likes: 2,

        comment3: "The yes or no format makes it feel too simple.",
        comment3Likes: 1
      }
    ]
  }
];

const tacticTitle = document.getElementById("tactic-title");
const tacticDescription = document.getElementById("tactic-description");
const analysisTags = document.getElementById("analysis-tags");

const accountName = document.getElementById("account-name");
const postDate = document.getElementById("post-date");
const leftMainText = document.getElementById("left-main-text");
const leftHashtags = document.getElementById("left-hashtags");

const mainPostImage = document.getElementById("main-post-image");
const mainPostVideo = document.getElementById("main-post-video");
const mainPostVideoSource = document.getElementById("main-post-video-source");
const imageHotspots = document.getElementById("image-hotspots");

const likeValue = document.getElementById("like-value");
const commentValue = document.getElementById("comment-value");
const shareValue = document.getElementById("share-value");

const comment1Text = document.getElementById("comment-1-text");
const comment1Likes = document.getElementById("comment-1-likes");

const comment2Text = document.getElementById("comment-2-text");
const comment2Likes = document.getElementById("comment-2-likes");

const comment3Text = document.getElementById("comment-3-text");
const comment3Likes = document.getElementById("comment-3-likes");

const comment1Box = comment1Text.closest(".comment-box");
const comment2Box = comment2Text.closest(".comment-box");
const comment3Box = comment3Text.closest(".comment-box");

function formatCount(value) {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace(".0", "") + "M";
  }

  if (value >= 1000) {
    return (value / 1000).toFixed(1).replace(".0", "") + "K";
  }

  return value.toString();
}

function formatTagName(tag) {
  return tag
    .replace("ai-media", "AI Media")
    .replace("real-media", "Real Media")
    .replace("synthetic", "Synthetic")
    .replace("image", "Image")
    .replace("video", "Video")
    .replace("facebook", "Facebook")
    .replace("instagram", "Instagram")
    .replace("tiktok", "TikTok");
}

function renderTags(tags) {
  analysisTags.innerHTML = "";

  tags.forEach((tag) => {
    const pill = document.createElement("span");
    pill.classList.add("tag-pill", tag);
    pill.textContent = formatTagName(tag);
    analysisTags.appendChild(pill);
  });
}

function renderMedia(currentPost) {
  if (currentPost.mediaType === "video") {
    mainPostImage.style.display = "none";

    mainPostVideo.style.display = "block";
    mainPostVideoSource.src = currentPost.mainImage;

    mainPostVideo.load();
  } else {
    mainPostVideo.pause();
    mainPostVideo.style.display = "none";
    mainPostVideoSource.src = "";

    mainPostImage.style.display = "block";
    mainPostImage.src = currentPost.mainImage;
  }
}

function applyAnnotation(element, annotation) {
  if (!element) return;

  if (annotation) {
    element.classList.add("has-annotation");
    element.dataset.annotation = annotation;
  } else {
    element.classList.remove("has-annotation");
    delete element.dataset.annotation;
  }
}

function renderHotspots(hotspots) {
  imageHotspots.innerHTML = "";

  if (!hotspots || hotspots.length === 0) {
    return;
  }

  hotspots.forEach((hotspot) => {
    const dot = document.createElement("div");

    dot.classList.add("image-hotspot");

    if (hotspot.flip) {
      dot.classList.add("flip");
    }

    dot.style.left = hotspot.x + "%";
    dot.style.top = hotspot.y + "%";
    dot.dataset.annotation = hotspot.text;

    imageHotspots.appendChild(dot);
  });
}

function renderPost() {
  const currentTactic = tactics[tacticIndex] || tactics[0];
  const currentPost = currentTactic.posts[postIndex] || currentTactic.posts[0];

  tacticTitle.textContent = currentTactic.title;
  tacticDescription.textContent = currentTactic.description;

  accountName.textContent = currentPost.accountName;
  postDate.textContent = currentPost.postDate;

  leftMainText.textContent = currentPost.leftMainText;
  leftHashtags.textContent = currentPost.hashtags;

  applyAnnotation(leftMainText, currentPost.captionAnnotation);

  renderMedia(currentPost);
  renderHotspots(currentPost.hotspots);

  likeValue.textContent = formatCount(currentPost.likes);
  commentValue.textContent = formatCount(currentPost.comments);
  shareValue.textContent = formatCount(currentPost.shares);

  comment1Text.textContent = currentPost.comment1;
  comment1Likes.textContent =
    currentPost.comment1Likes > 0
      ? `${formatCount(currentPost.comment1Likes)} likes`
      : "";

  comment2Text.textContent = currentPost.comment2;
  comment2Likes.textContent =
    currentPost.comment2Likes > 0
      ? `${formatCount(currentPost.comment2Likes)} likes`
      : "";

  comment3Text.textContent = currentPost.comment3;
  comment3Likes.textContent =
    currentPost.comment3Likes > 0
      ? `${formatCount(currentPost.comment3Likes)} likes`
      : "";

  applyAnnotation(comment1Box, currentPost.comment1Annotation);
  applyAnnotation(comment2Box, currentPost.comment2Annotation);
  applyAnnotation(comment3Box, currentPost.comment3Annotation);

  renderTags(currentPost.tags);
}

renderPost();