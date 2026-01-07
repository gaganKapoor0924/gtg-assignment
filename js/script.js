const subscriptions = document.querySelectorAll(".subscription");

const cartState = {
  fragrance: null,
  purchase: null
};

subscriptions.forEach(sub => {
  const headerRadio = sub.querySelector(
    'input[type="radio"][name="subscription"]'
  );

  headerRadio.addEventListener("change", () => {
    // Collapse all
    subscriptions.forEach(s => s.classList.remove("active"));

    // Expand selected
    sub.classList.add("active");

    // Update cart
    cartState.plan = sub.dataset.plan;
    cartState.fragrances = [];

    console.log("Selected Plan:", cartState.plan);
  });

  // Inner fragrance selection
document.querySelectorAll('input[name="fragrance"]').forEach(radio => {
  radio.addEventListener("change", e => {
    cartState.fragrance = e.target.value;
    updateAddToCart();
  });
});

document.querySelectorAll('input[name="purchase"]').forEach(radio => {
  radio.addEventListener("change", e => {
    cartState.purchase = e.target.value;
    updateAddToCart();
  });
});

});

const addToCartBtn = document.getElementById("addToCart");




const cartLinks = {
  original: {
    single: "https://dummy.com/original-single",
    double: "https://dummy.com/original-double",
    subscription: "https://dummy.com/original-subscription"
  },
  lily: {
    single: "https://dummy.com/lily-single",
    double: "https://dummy.com/lily-double",
    subscription: "https://dummy.com/lily-subscription"
  },
  rose: {
    single: "https://dummy.com/rose-single",
    double: "https://dummy.com/rose-double",
    subscription: "https://dummy.com/rose-subscription"
  }
};

// Final Add to Cart
function updateAddToCart() {
  if (cartState.fragrance && cartState.purchase) {
    addToCartBtn.href =
      cartLinks[cartState.fragrance][cartState.purchase];
  } else {
    addToCartBtn.href = "#";
  }
}


const images = ["./assets/thumbnail.png", "./assets/thumbnail1.jpg", "./assets/thumbnail2.jpg", "./assets/thumbnail3.jpg","./assets/thumbnail.png", "./assets/thumbnail1.jpg", "./assets/thumbnail2.jpg", "./assets/thumbnail3.jpg"];
let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const dots = document.querySelectorAll(".dot");
const thumbnails = document.querySelectorAll(".thumbnails img");

function updateGallery(index) {
  currentIndex = index;
  mainImage.src = images[currentIndex];

  dots.forEach(d => d.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Arrows
document.getElementById("next").onclick = () => {
  updateGallery((currentIndex + 1) % images.length);
};

document.getElementById("prev").onclick = () => {
  updateGallery((currentIndex - 1 + images.length) % images.length);
};

// Dots
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    updateGallery(Number(dot.dataset.index));
  });
});

// Thumbnails
thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    updateGallery(Number(thumb.dataset.index));
  });
});

const data = [
  {
    title: "Signature Scents",
    content: "Discover our curated line of signature perfumes, designed to become your daily companion."
  },
   {
    title: "Signature Scents",
    content: "Discover our curated line of signature perfumes, designed to become your daily companion."
  },
   {
    title: "Signature Scents",
    content: "Discover our curated line of signature perfumes, designed to become your daily companion."
  },
   {
    title: "Signature Scents",
    content: "Discover our curated line of signature perfumes, designed to become your daily companion."
  }
];

const container = document.getElementById("accordions");

data.forEach(item => {
  // Item wrapper
  const accItem = document.createElement("div");
  accItem.className = "accordion-item";

  // Header
  const header = document.createElement("div");
  header.className = "accordion-header";

  const title = document.createElement("span");
  title.textContent = item.title;

  const icon = document.createElement("span");
  icon.textContent = "+";
  icon.className = "icon";

  header.appendChild(title);
  header.appendChild(icon);

  // Content
  const content = document.createElement("div");
  content.className = "accordion-content";
  content.textContent = item.content;
  content.style.display = "none";

  // Click handler
  header.addEventListener("click", () => {
    const isOpen = content.style.display === "block";

    // Close all
    document.querySelectorAll(".accordion-content").forEach(c => {
      c.style.display = "none";
    });
    document.querySelectorAll(".icon").forEach(i => {
      i.textContent = "+";
    });

    // Toggle current
    if (!isOpen) {
      content.style.display = "block";
      icon.textContent = "-";
    }
  });

  accItem.appendChild(header);
  accItem.appendChild(content);
  container.appendChild(accItem);
});

const statsData = [
  { value: 84, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { value: 78, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { value: 89, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { value: 90, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }
];

const statsContainer = document.getElementById("stats-section");

// Wrapper
const wrapper = document.createElement("div");
wrapper.className = "stats-wrapper";

statsData.forEach(stat => {
  const item = document.createElement("div");
  item.className = "stat-item";

  const value = document.createElement("div");
  value.className = "stat-value";
  value.textContent = "0%";

  

  const desc = document.createElement("div");
  desc.className = "stat-desc";
  desc.textContent = stat.text;

  item.appendChild(value);
  item.appendChild(desc);
  wrapper.appendChild(item);

  animateNumber(value, stat.value);
});

statsContainer.appendChild(wrapper);

// Count-up function
function animateNumber(element, target) {
  let current = 0;
  const increment = Math.ceil(target / 60); // smooth speed

  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = current + "%";
  }, 20);
}


