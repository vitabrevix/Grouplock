<template>
  <header class="header-bar">
    <nav>
      <ul>
        <li>
          <button
            type="button"
            :class="{ active: isActive('chat') }"
            @click="$emit('change-tab', 'chat')"
          >
            <i class="fas fa-comments"></i> Chat
          </button>
        </li>
        <li>
          <button
            type="button"
            :class="{ active: isActive('history') }"
            @click="$emit('change-tab', 'history')"
          >
            <i class="fas fa-calendar-alt"></i> History
          </button>
        </li>
        <li>
          <button
            type="button"
            :class="{ active: isActive('personal') }"
            @click="$emit('change-tab', 'personal')"
          >
            <i class="fas fa-id-badge"></i> Personal
          </button>
        </li>
        <li>
          <button
            type="button"
            :class="{ active: isActive('info') }"
            @click="$emit('change-tab', 'info')"
          >
            <i class="fas fa-info-circle"></i> Info
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['currentTab']);

const isActive = (tab) => {
  return props.currentTab === tab;
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
  position: relative;
}

.header-bar nav ul li button {
  width: 100%;
  background: none;
  border: none;
  color: white;
  font: inherit;
  cursor: pointer;
  padding: 10px 20px;
  position: relative;
  transition: background-color 0.3s;
}

.header-bar nav ul li button.active {
  background-color: #555;
  border-radius: 5px;
}

.header-bar nav ul li button:hover {
  background-color: #777;
  border-radius: 5px;
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
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  width: 120px;
  font-size: 14px;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
</style>
