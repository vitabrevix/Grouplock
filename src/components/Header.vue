<template>
  <header class="header-bar">
    <nav>
      <ul>
        <li>
          <button type="button" @click="swapToChat">
            <i class="fas fa-comments"></i> Chat
            <span class="tooltip">Chat with the other lockees</span>
          </button>
        </li>
        <li>
          <button type="button" @click="swapToHistory">
            <i class="fas fa-calendar-alt"></i> History
            <span class="tooltip"
              >Show everything that has happened so far</span
            >
          </button>
        </li>
        <li>
          <button type="button" @click="swapToPersonal">
            <i class="fas fa-id-badge"></i> Personal
            <span class="tooltip">Show only what affect you</span>
          </button>
        </li>
        <li>
          <button type="button" @click="swapToInfo">
            <i class="fas fa-info-circle"></i> Info
            <span class="tooltip">Get more information</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    swapToChat() {
      // Your logic here
    },
    swapToHistory() {
      // Your logic here
    },
    swapToPersonal() {
      // Your logic here
    },
    swapToInfo() {
      // Your logic here
    },
  },
};
</script>

<style scoped>
.header-bar {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
}

.header-bar nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-bar nav ul li {
  flex-grow: 1;
  text-align: center;
  position: relative; /* Needed for tooltip positioning */
}

.header-bar nav ul li button {
  /*background: black;*/
  border: none;
  color: white;
  font: inherit;
  cursor: pointer;
  padding: 10px 20px;
  position: relative; /* Needed for tooltip positioning */
}

.header-bar nav ul li button i {
  margin-right: 8px;
}

.header-bar nav ul li button:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

.tooltip {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 100%; /* Position the tooltip above the button */
  left: 50%;
  margin-left: -60px; /* Use half of the width to center the tooltip */
  opacity: 0;
  transition: opacity 0.3s;
  width: 120px; /* Adjust width as needed */
  font-size: 14px;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
</style>
