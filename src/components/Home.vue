<template>
 <v-parallax id="parallax"
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  ></v-parallax>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {src: 'https://images.pexels.com/photos/908292/pexels-photo-908292.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'},
          {src: 'https://c.pxhere.com/images/e1/c5/b7749c3de841aac333779a534c00-1451427.jpg!d'},
          {src: 'http://www.picpedia.org/handwriting/images/development.jpg'}
        ]
      }
    }
  }
</script>

<style>
  #parallax{
    height: 100%;
    width: 100%;

  }
  #generalContainer{
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }
</style>
