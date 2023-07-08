<template>
  <div>
    <section class="banner text-center">
      <div class="content">
        <h1>Tunis</h1>
        <h2>Personal Portfolio VueJS 3 Template</h2>
      </div>
    </section>
    <!-- {/* End .banner */} -->

    <section class="demo dark">
      <div class="container">
        <div class="row">
          <div
              v-for="preview in previewDemo"
              :key="preview.id"
              :data-aos-delay="preview.delayAnimation"
              class="col-xs-12 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
          >
            <div class="content text-center">
              <div class="bg_container">
                <router-link
                    :to="preview.routerPath"
                    rel="noreferrer"
                    target="_blank"
                >
                  <img
                      :src="preview.img"
                      alt="demo"
                      class="img-responsive screenshot"
                  />
                </router-link>
              </div>
              <h2 class="demo-title">{{ preview.title }}</h2>
              <div class="anchor">
                <h6>
                  <router-link
                      :to="preview.routerPath"
                      class="btn"
                      rel="noreferrer"
                      target="_blank"
                  >
                    view demo
                  </router-link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- {/* End .Demo */} -->

    <footer>
      <div class="go_purchase">
        <h6 data-aos="fade-up" data-aos-duration="1200">
          You are at the right step now
        </h6>
        <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
          Purchase Tunis & Build Your Faster
          <span class="theme-color">VueJS 3</span> &amp;
          <span class="theme-color">Bootstrap 5 </span> Based Portfolio
          Template.
        </h3>
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
          <a
              class="button"
              href="https://themeforest.net/user/ib-themes/portfolio"
              rel="noreferrer"
              target="_blank"
          >
            <span class="button-text"> Purchase Now</span>
            <span class="button-icon fa fa-arrow-right"></span>
          </a>
        </div>
      </div>
      <!-- {/* End go_purchase */} -->

      <div class="text-center footer_copyright">
        <h6>Tunis - Personal Portfolio VueJS 3 Template</h6>
        <h5>
          &copy; {{ new Date().getFullYear() }} Designed with
          <span class="heart">&#10084;</span> by
          <a
              href="https://themeforest.net/user/ib-themes"
              rel="noreferrer"
              target="_blank"
          >
            ib-themes.
          </a>
        </h5>
      </div>
    </footer>
    <!-- {/* End footer */} -->
  </div>
</template>

<script>
export default {
  setup() {
    return {
      previewDemo: [
        {
          id: 1,
          img: require(`@/assets/images/intro/dark.jpg`),
          title: "Dark Demo Portfolio",
          routerPath: "/home-dark",
          delayAnimation: "0",
        },
        {
          id: 2,
          img: require(`@/assets/images/intro/light.jpg`),
          title: "Light Demo Portfolio",
          routerPath: "/home-light",
          delayAnimation: "50",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
