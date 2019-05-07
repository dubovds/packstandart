<template>
  <section class="section section_news">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <a href="#" class="news"
             v-for="item in newsContent"
             :key="item.title">
            <div class="col-3">
              <div class="news__image">
                <img src="../assets/images/news-image.png" alt="">
              </div>
            </div>
            <div class="col-9">
              <div class="news__content">
                <div class="news__title-block">
                  <div class="news__title">
                    {{ item.title }}
                  </div>
                  <div class="news__time">
                    {{ item.date }}
                  </div>
                </div>
                <div class="news__text">
                  {{ item.content }}
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'News',
    data(){
      return {
        newsContent: [
          {
            title: 'Новость 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,                         sed do eiusmod tempor incididunt ut labore et dolore magna                     aliqua.' +
                      'Ut enim ad minim veniam, quis nostrud exercitation ullamco                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute                      irure dolor in reprehenderit in voluptate velit esse cillum                     dolore eu fugiat nulla pariatur',
            date: '03.12.2018'
          },
          {
            title: 'Новость 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,                         sed do eiusmod tempor incididunt ut labore et dolore magna                     aliqua.' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute                      irure dolor in reprehenderit in voluptate velit esse cillum                     dolore eu fugiat nulla pariatur',
            date: '15.01.2019'
          },{
            title: 'Новость 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,                         sed do eiusmod tempor incididunt ut labore et dolore magna                     aliqua.' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute                      irure dolor in reprehenderit in voluptate velit esse cillum                     dolore eu fugiat nulla pariatur',
            date: '25.06.2019'
          }
        ]
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>