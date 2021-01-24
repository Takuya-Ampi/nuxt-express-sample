<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        ユーザー名
      </h1>
      <h2 class="info">
        {{ user.name }}
      </h2>
      <br />
      <nuxt-link class="button" to="/users">
        Users
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ params, error, $axios }) {
    const userApiResponse = await $axios.$get('/api/users/' + params.id)
    if (userApiResponse.status !== 200) {
      alert('エラーです')
    }
    return { user: userApiResponse.data }
  },
  head () {
    return {
      title: `User: ${this.user.name}`
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
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
