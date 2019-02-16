<template>
    <v-container>
        <v-layout row wrap align-center justify-center>
            <v-flex xs8>
                <v-card>
                    <v-card-title primary-title>
                        <div class="headline">Proyectos Propios</div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap align-center justify-center >
            <v-flex 
            xs8 
            mt-4
            v-for="item in cards"
            :key="item.title"
            >
                <v-card class="info">
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{ item.title }}</div>
                            <span>{{ item.desc }}</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat to="/proyectospropios/1" dark>See Project</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>            
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {title: 'Project 1', desc: 'This is the description of my first project'},
        {title: 'Project 2', desc: 'This is the description of my second project'}
      ]
    }
  }
}
</script>
