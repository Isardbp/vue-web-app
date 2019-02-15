<template>
 <v-app id="inspire">
  <v-container id="generalContainer">
    <v-layout row wrap>
        <v-toolbar>
          <v-toolbar-title>Pensar Diseny</v-toolbar-title>
        </v-toolbar>
          <v-carousel>
            <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
          </v-carousel>
    </v-layout>
  </v-container>
  </v-app>
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
  #generalContainer{
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }
</style>
