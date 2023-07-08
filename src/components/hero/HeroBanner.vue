<template>
  <div class="row home-details-container align-items-center">
    <div
        :style="{ backgroundImage: 'url(' + heroContent.heroImage + ')' }"
        class="col-lg-4 bg position-fixed d-none d-lg-block hero-img"
    ></div>
    <div
        class="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start"
    >
      <div>
        <img
            :src="heroContent.heroMobileImage"
            alt="hero man"
            class="img-fluid main-img-mobile d-sm-block d-lg-none"
        />
        <h1 class="text-uppercase poppins-font">
          Hi there, my name is {{ heroContent.heroTitleName }}.
          <span>{{ heroContent.heroDesignation }}</span>
        </h1>
        <p class="open-sans-font">{{ heroContent.heroDescriptions }}</p>
        <button
            class="button"
            data-bs-target="#exampleModal"
            data-bs-toggle="modal"
        >
          <span class="button-text">{{ heroContent.heroBtn }}</span>
          <span class="button-icon fa fa-arrow-right"></span>
        </button>
      </div>
    </div>
  </div>
  <!-- {/* End home-details-container */} -->

  <!-- Modal -->
  <div
      id="exampleModal"
      aria-hidden="true"
      aria-labelledby="exampleModalLabel"
      class="modal fade"
      tabindex="-1"
  >
    <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
    >
      <div class="modal-content dark">
        <button aria-label="Close" class="close-modal" data-bs-dismiss="modal">
          <img alt="close image" src="../../assets/images/cancel.svg"/>
        </button>
        <div class="modal-body">
          <div class="box_inner about">
            <div class="title-section text-left text-sm-center">
              <h1>ABOUT <span>ME</span></h1>
              <span class="title-bg">Resume</span>
            </div>
            <!-- {/* End title */} -->
            <IndexMain/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->
</template>

<script>
import IndexMain from "../about/IndexMain.vue";

export default {
  data() {
    return {
      heroContent: {
        heroImage: require(`@/assets/images/hero/dark.jpg`),
        heroMobileImage: require(`@/assets/images/hero/img-mobile.jpg`),
        heroTitleName: "Yudong Lin",
        heroDesignation: "software engineer",
        heroDescriptions: `
        I am a recent graduate seeking an entry-level role in a technology company to further grow my knowledge and experience.
        In my spare time, I am also an indie game designer, focusing on several different scale game projects.`,
        heroBtn: "more about me",
      },
    };
  },
  components: {IndexMain},
};
</script>

<style lang="scss" scoped></style>
