<template>
  <div>
    <h1>TO-DO LIST</h1>
    <form @submit.prevent="addActivity">
      <input type="text" v-model="newActivity" placeholder="Add activity...">
      <button>Add</button>
    </form>
    <ul>
      <li v-for="(activity, index) in filteredActivities" :key="index" :class="{ done: activity.completed }">
        <input type="checkbox" v-model="activity.completed">
        <span class="aku">{{ activity.text }}</span>
        <button @click="removeActivity(index)">Remove</button>
      </li>
    </ul>
    <div class="kamu">
      <label>Show only unfinished activities:</label>
      <input type="checkbox" v-model="showUnfinished">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newActivity: '',
      activities: [
        { text: 'Membajak Sawah', completed: false },
        { text: 'Membersihkan Rumah', completed: true },
        { text: 'Bekerja di Restoran', completed: false }
      ],
      showUnfinished: false
    }
  },
  methods: {
    addActivity() {
      if (this.newActivity.trim() !== '') {
        this.activities.push({ text: this.newActivity, completed: false });
        this.newActivity = '';
      }
    },
    removeActivity(index) {
      this.activities.splice(index, 1);
    }
  },
  computed: {
    filteredActivities() {
      if (this.showUnfinished) {
        return this.activities.filter(activity => !activity.completed);
      } else {
        return this.activities;
      }
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
<style>
body {
  background-image: url("wallpaper1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  text-color: white;
  text-align: center;
 }
h1 {
  color: white;
  text-align: center;
}
.aku {
  color: white;
  width: 200px;
}
.kamu {
  color: white;
}
</style>
