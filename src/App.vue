<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import ChatBox from './components/ChatBox.vue';
import SendMessage from './components/SendMessage.vue';
import HistoryBox from './components/HistoryBox.vue';
import PersonalBox from './components/PersonalBox.vue';
import InfoBox from './components/InfoBox.vue';

const currentTab = ref('info'); // Default tab
</script>

<template>
  <div id="app">
    <Header :current-tab="currentTab" @change-tab="currentTab = $event" />
    <main>
      <div v-if="currentTab === 'chat'">
        <ChatBox />
        <SendMessage />
      </div>
      <div v-if="currentTab === 'history'">
        <HistoryBox />
      </div>
      <div v-if="currentTab === 'personal'">
        <HistoryBox />
      </div>
      <div v-if="currentTab === 'info'">
        <HistoryBox />
      </div>
    </main>
  </div>
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
}

main {
  padding: 20px;
}
</style>
