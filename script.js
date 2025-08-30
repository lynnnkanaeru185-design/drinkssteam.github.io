src="https://cdn.tailwindcss.com"
const menu = [
      { name: "Es Bucin Strawberry", image: "strawberry.jpg" },
      { name: "Es Bucin Anggur", image: "anggur.jpg" },
      { name: "Es Bucin Jeruk", image: "jeruk.jpg" },
      { name: "Es Bucin Blackcurrent", image: "blackcurrent.jpg" },
      { name: "Es Bucin Avocado", image: "avocado.jpg" },
      { name: "Es Bucin Bublegum", image: "bublegum.jpg" },
    ];

    const cart = {};
    const section = document.querySelector("section");
    const cartList = document.getElementById("cart");

    menu.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-lg shadow-lg p-4 fade-in hover:scale-105 transition-transform duration-300";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="w-full h-40 object-cover rounded-md mb-4 shadow-sm" />
        <h3 class="text-lg font-bold text-cyan-700">${item.name}</h3>
        <div class="flex items-center justify-between mt-4">
          <button onclick="addToCart('${item.name}')" class="bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700 transition">Tambah</button>
          <button onclick="removeFromCart('${item.name}')" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">Kurang</button>
          <button onclick="buyItem('${item.name}')" class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">Beli</button>
        </div>
      `;
      section.appendChild(card);
    });

    function addToCart(name) {
      cart[name] = (cart[name] || 0) + 1;
      updateCart();
    }

    function removeFromCart(name) {
      if (cart[name]) {
        cart[name]--;
        if (cart[name] === 0) delete cart[name];
        updateCart();
      }
    }

    function buyItem(name) {
      alert(`Terima kasih sudah membeli ${name}!`);
      cart[name] = 0;
      delete cart[name];
      updateCart();
    }

    function clearCart() {
      for (let item in cart) delete cart[item];
      updateCart();
    }

    function updateCart() {
      cartList.innerHTML = "";
      for (let item in cart) {
        const li = document.createElement("li");
        li.textContent = `${item} x ${cart[item]}`;
        cartList.appendChild(li);
      }
      if (Object.keys(cart).length === 0) {
        cartList.innerHTML = "<li class='text-gray-500'>Belum ada pesanan.</li>";
      }
    }