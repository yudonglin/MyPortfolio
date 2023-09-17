<template>
  <main class="yellow">
    <div className="demo-sticker" title="Swich Light">
      <router-link to="/light">
        <i aria-hidden="true" className="fa fa-lightbulb-o"></i>
      </router-link>
    </div>
    <!-- End Sticker -->

    <header class="header">
      <ul
          id="myTab"
          class="nav nav-tabs icon-menu d-lg-block revealator-slideup revealator-once revealator-delay1"
          role="tablist"
      >
        <li class="icon-box" role="presentation">
          <button class="active" data-bs-target="#home" data-bs-toggle="tab">
            <i class="fa fa-home"></i>
            <h2>Home</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-target="#about" data-bs-toggle="tab">
            <i class="fa fa-user"></i>
            <h2>About</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-target="#portfolio" data-bs-toggle="tab">
            <i class="fa fa-briefcase"></i>
            <h2>Portfolio</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-target="#contact" data-bs-toggle="tab">
            <i class="fa fa-envelope-open"></i>
            <h2>Contact</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" hidden="hidden" role="presentation">
          <button data-bs-target="#blog" data-bs-toggle="tab">
            <i class="fa fa-comments"></i>
            <h2>Blog</h2>
          </button>
        </li>
        <!-- End icon-box -->
      </ul>
    </header>
    <!-- End header -->

    <div id="myTabContent" class="tab-content tab-panel_list home">
      <!-- Start Hero content tabs -->
      <div id="home" class="tab-pane home fade show active">
        <div class="container-fluid main-container container-home p-0">
          <div class="color-block d-none d-lg-block"></div>
          <HeroBanner/>
        </div>
      </div>
      <!-- End Hero content tabs -->

      <div id="about" class="tab-pane fade about">
        <div>
          <div class="title-section text-left text-sm-center">
            <h1>ABOUT <span>ME</span></h1>
            <span class="title-bg">Resume</span>
          </div>
          <!-- {/* End title */} -->
          <IndexMain/>
        </div>
      </div>
      <!-- End about content tabs -->

      <div id="portfolio" class="tab-pane fade portfolio professional">
        <div
            class="title-section text-left text-sm-center"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
          <h1>my <span>portfolio</span></h1>
          <span class="title-bg">works</span>
        </div>
        <!-- {/* End title */} -->
        <PortfolioInfo/>
      </div>
      <!-- End portfolio content tabs -->

      <div id="contact" class="tab-pane fade contact">
        <div class="title-section text-left text-sm-center">
          <h1>get in <span>touch</span></h1>
          <span class="title-bg">contact</span>
        </div>
        <div class="container">
          <div class="row">
            <!-- {/* Left Side Starts */} -->
            <div class="col-12 col-lg-4">
              <h3 class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                Want to talk?!
              </h3>
              <p class="open-sans-font mb-4">
                Please don't hesitate to follow me on LinkedIn or Github, or send me a friend request on Discord.
                I am always looking for opportunities to connect and work with talented developers.
              </p>
              <AddressInfo/>
              <!-- {/* End Address */} -->

              <SocialInfo/>
              <!-- {/* End Social */} -->
            </div>
            <!-- {/* Left Side Ends */} -->

            <!-- {/* Contact Form Starts */} -->
            <div class="col-12 col-lg-8">
              <ContactInfo/>
            </div>
            <!-- {/* Contact Form Ends */} -->
          </div>
        </div>
        <!-- {/* End .container */} -->
      </div>
      <!-- End contact content tabs -->

      <div id="blog" class="tab-pane fade blog">
        <div class="title-section text-left text-sm-center">
          <h1>my <span>blog</span></h1>
          <span class="title-bg">posts</span>
        </div>
        <div class="container">
          <!-- {/* Articles Starts */} -->
          <div class="row pb-50">
            <BlogInfo/>
          </div>
          <!-- {/* Articles Ends */} -->
        </div>
      </div>
      <!-- End blog content tabs -->
    </div>
  </main>
</template>

<script>
import HeroBanner from "@/components/hero/HeroBanner.vue";
import IndexMain from "@/components/about/IndexMain.vue";
import AddressInfo from "@/components/AddressInfo.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import SocialInfo from "@/components/SocialInfo.vue";
import BlogInfo from "@/components/blog/BlogInfo.vue";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo.vue";

export default {
  components: {
    HeroBanner,
    IndexMain,
    AddressInfo,
    ContactInfo,
    SocialInfo,
    BlogInfo,
    PortfolioInfo,
  },
  data() {
    return {};
  },
};
</script>
