<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        USERS
      </h1>
      <ul class="users">
        <li v-for="user in users" :key="user._id" class="user">
          <nuxt-link :to="{ name: 'users-id', params: { id: user._id }}">
            {{ user.name }}
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link class="button" to="/">
        Homepage
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const usersApiResponse = await $axios.$get('/api/users')
    if (usersApiResponse.status !== 200) {
      alert('エラーです')
    }
    return { users: usersApiResponse.data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
.button
{
  display: inline-block;
  margin-top: 50px;
}
</style>
