<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-toolbar-title>{{ userName }}</v-toolbar-title>
         <v-divider></v-divider>
        <v-list-tile
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Nom Empresa</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view id="main-view"></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          { icon: 'person', title: 'Profile', link: '/profile' },
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ],
        sideNavItems: [
          { icon: ' ', title: 'Proyectos propios', link: '/proyectospropios' },
          { icon: ' ', title: 'Startups', link: '/startups' },
          { icon: ' ', title: 'Bienes Raices', link: '/bienes_raices' }
        ],
        userName: 'Nom Usuari'
      }
    }
  }
</script>
<style>
#main-view, main{
  width: 100%;
  height: 100%;
  margin: 0px;
}
</style>

<style lang="stylus">
  @import './stylus/main'
</style>
