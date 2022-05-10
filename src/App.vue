<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app>
      <template>
        <v-card class="mx-auto" max-width="300" tile>
          <v-list dense>
            <v-subheader>MENU</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i" >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <router-link :to="item.to">{{item.text}}</router-link>
                  <!-- <v-list-item-title><router-link :to="item.to">{{item.text}}</router-link></v-list-item-title> -->
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <!--  -->
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 0,
      items: [
        { text: 'Home', icon: 'mdi-home', to: '/' },
        { text: 'Todolist Info', icon: 'mdi-message-text', to: '/todolistInfo' },
        { text: 'Todolist', icon: 'mdi-calendar-check', to: '/todolist' },
        { text: 'Calculator Info', icon: 'mdi-message-text', to: '/calculatorInfo' },
        { text: 'Calculator', icon: 'mdi-calculator', to: '/calculator' },
        { text: 'Axios', icon: 'mdi-cube-outline', to: '/axios' },
      ],
    }),
  }
</script>