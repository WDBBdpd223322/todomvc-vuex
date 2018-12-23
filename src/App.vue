<template>
  <div id="app">
    <section-html></section-html>
    <footer-html></footer-html>
  </div>
</template>

<script>
import SectionHtml from '@/components/section/section'
import FooterHtml from '@/components/footer/footer'
export default {
  name: 'App',
  components: {
    SectionHtml,
    FooterHtml
  }
}
</script>

<style>

</style>
