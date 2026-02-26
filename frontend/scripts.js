/* ================= CART ================= */

const CART_KEY = "interior_cart";

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
  updateCartPill();
}

function initCart() {
  const cart = getCart();

  const empty = document.querySelector(".cart-empty");
  const itemsWrap = document.querySelector(".cart-items");
  const summary = document.querySelector(".cart-summary");

  if (!itemsWrap) return;

  if (cart.length === 0) {
    empty.classList.remove("hidden");
    itemsWrap.classList.add("hidden");
    summary.classList.add("hidden");
    return;
  }

  empty.classList.add("hidden");
  itemsWrap.classList.remove("hidden");
  summary.classList.remove("hidden");

  itemsWrap.innerHTML = "";
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price;

    itemsWrap.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" />
        <div>
          <h4>${item.name}</h4>
          <span>₹${item.price}</span>
        </div>
      </div>
    `;
  });

  document.getElementById("cartSubtotal").innerText = `₹${subtotal}`;
  document.getElementById("cartDiscount").innerText = "₹0";
  document.getElementById("cartTotal").innerText = `₹${subtotal}`;
}

/* ================= DATA ================= */

const data = {
  kitchen: [
    {
      name: "Modern Chandelier",
      price: 12000,
      tier: "premium",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
    },
    {
      name: "Minimal Showpiece",
      price: 4000,
      tier: "budget",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    }
  ],
  living: [
    {
      name: "Statement Lamp",
      price: 8000,
      tier: "mid",
      img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41"
    }
  ],
  bedroom: [
    {
      name: "Warm Pendant",
      price: 6000,
      tier: "mid",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
    }
  ],
  kids: [
    {
      name: "Playful Decor",
      price: 3000,
      tier: "budget",
      img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab"
    }
  ]
};

/* ================= SHOP ================= */

function initShop() {
  const tiles = document.querySelectorAll(".room-tile");
  const roomContent = document.querySelector(".room-content");
  const budgetSelect = document.getElementById("budget");

  if (!tiles.length || !roomContent || !budgetSelect) return;

  let activeRoom = null;

  function renderRoom(room) {
    roomContent.classList.remove("placeholder");
    roomContent.classList.add("active");

    roomContent.innerHTML = `
      <h2>${room.charAt(0).toUpperCase() + room.slice(1)}</h2>
      <div class="items"></div>
    `;

    renderItems(room);
  }

  function renderItems(room) {
    const wrap = document.querySelector(".items");
    const budget = budgetSelect.value;

    if (!wrap) return;

    const filtered = data[room].filter(item => {
      if (budget === "premium") return true;
      return item.tier === budget;
    });

    wrap.innerHTML = "";

    filtered.forEach(item => {
      wrap.innerHTML += `
        <div class="shop-item">
          <img src="${item.img}" />
          <h4>${item.name}</h4>
          <span>₹${item.price}</span>
          <button class="add-btn">Add to cart</button>
        </div>
      `;
    });

    wrap.querySelectorAll(".add-btn").forEach((btn, i) => {
      btn.onclick = () => addToCart(filtered[i]);
    });
  }

  tiles.forEach(tile => {
    tile.onclick = () => {
      tiles.forEach(t => t.classList.remove("placeholder"));
      tile.classList.add("active");

      activeRoom = tile.dataset.room;
      renderRoom(activeRoom);
    };
  });

  budgetSelect.onchange = () => {
    if (activeRoom) renderItems(activeRoom);
  };
}

/* ================= PILL ================= */

function updateCartPill() {
  const cartBtn = document.querySelector(".pill-nav .cart");
  if (!cartBtn) return;

  const count = getCart().length;
  cartBtn.dataset.count = count || "";
}

updateCartPill();
