<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn more</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop has-text-centered">
            <p class="title"><strong>Lorem ipsum dolor sit amet.</strong></p>
          </div>
          <div class="column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam venenatis massa laoreet iaculis. Nunc a venenatis libero. Mauris vestibulum diam commodo, aliquet nibh eget, ullamcorper nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Maecenas eu turpis sit amet lacus ultricies consectetur. Class aptent.</p>
          </div>
        </div>
      </div>
      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis malesuada mauris.</p>
              <p class="subtitle">José Moreno</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis malesuada mauris.</p>
              <p class="subtitle">José Moreno</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis malesuada mauris.</p>
              <p class="subtitle">José Moreno</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      heading: 'Soaring to new heights',
      subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
  background: url('../assets/clouds.jpg')
  background-size: cover

  .title
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

h2
  margin: 1.5rem 0 2rem 0 !important

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-button: 2rem

.pd
  +tablet
    padding: 2em 0
</style>
