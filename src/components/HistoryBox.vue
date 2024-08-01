<template>
  <div class="chat-history">
    <div class="chat-box">
      <div
        v-for="(entry, index) in chatEntries"
        :key="index"
        class="chat-entry"
      >
        <div class="chat-time">{{ entry.time }}</div>
        <div class="chat-message">{{ entry.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryBox',
  data() {
    return {
      chatEntries: [],
    };
  },
  created() {
    this.generateChatEntries();
  },
  methods: {
    generateChatEntries() {
      // Mock chat data
      const messages = [
        'Hello, how are you?',
        "I'm doing great, thanks for asking!",
        'What about you?',
        "I'm good too, just working on a project.",
        "That's awesome! Keep up the good work.",
        "Thanks! Let's catch up later.",
      ];

      // Generate chat entries with timestamps
      for (let i = 0; i < messages.length; i++) {
        const entry = {
          time: new Date().toLocaleTimeString(),
          message: messages[i],
        };
        this.chatEntries.push(entry);
      }
    },
  },
};
</script>

<style scoped>
.chat-history {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  max-width: 600px;
  margin: auto;
}

.chat-box {
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.chat-entry {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.chat-time {
  font-size: 0.8em;
  color: #999;
}

.chat-message {
  margin-top: 5px;
}
</style>
