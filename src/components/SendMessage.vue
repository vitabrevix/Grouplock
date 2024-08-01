<template>
  <div class="send-message">
    <form @submit.prevent="sendMessage">
      <input
        type="text"
        v-model="message"
        placeholder="Type your message..."
        required
      />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('');

const sendMessage = () => {
  if (message.value.trim()) {
    // Emit the message to the parent component
    emit('send-message', message.value);
    message.value = '';
  }
};
</script>

<style scoped>
.send-message {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-top: 1px solid #ccc;
}

.send-message form {
  display: flex;
  width: 100%;
}

.send-message input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.send-message button {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.send-message button:hover {
  background-color: #0056b3;
}
</style>
