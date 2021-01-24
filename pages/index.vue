<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-express
      </h1>
      <div>
        {{ test }}
        <div class="links">
          <a
            href="/users"
            class="button--green"
          >
            Users List
          </a>
        </div>
      </div>
      <form class="form-table contact-form" @submit.prevent="onSubmit">
        <dl>
          <dt><label>名前<span class="req">必須</span></label></dt>
          <dd>
            <div class="input">
              <input v-model="contact.name" type="text" placeholder="名前" />
            </div>
          </dd>
        </dl>
        <button type="submit" class="button" value="createUser">
          ユーザー作成
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    const testApiResponse = await $axios.$get('/api/test')
    if (testApiResponse.status !== 200) {
      console.log('エラーです')
    }
    return {
      test: testApiResponse.data
    }
  },
  data () {
    return {
      contact: {
        name: ''
      }
    }
  },
  created () {
    console.log(process.env.API)
  },
  methods: {
    async onSubmit () {
      if (this.errorCheck()) {
        return
      }
      const contact = this.contact
      const response = await this.$axios.$post('/api/users', { ...contact })
      if (response.status !== 200) {
        console.log('エラーです')
      }
    },
    errorCheck () {
      const contact = this.contact
      if (!contact.name) {
        return this.errorMessageWrapper('名前')
      }
    },
    errorMessageWrapper (errMsg) {
      console.log(`${errMsg}が入力されていません`)
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

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
