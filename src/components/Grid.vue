<template>
<v-container>
  <v-row>
    <v-col
      v-for="n in 24"
      :key="n"
      cols="4"
      >
      <v-card height="200" style="z-align: 97;">
        <img src="../assets/tuber.png" style="z-align: 99;">
        <CThree style="z-align: 98;"/>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import CThree from './CThree';

export default {
  name: 'Grid',
  //
  components: {
    CThree,
  }
}
</script>
