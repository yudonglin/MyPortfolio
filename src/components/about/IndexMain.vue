<template>
  <section class="main-content">
    <div class="container">
      <div class="row">
        <!-- {/* Personal Info Starts */} -->

        <div class="col-xl-6 col-lg-5 col-12">
          <div class="row">
            <div class="col-12">
              <h3 class="text-uppercase custom-title mb-0 ft-wt-600">
                personal infos
              </h3>
            </div>
            <!-- {/* End .col */} -->

            <div class="col-12 d-block d-sm-none">
              <img
                  :src="imgMobile"
                  alt="about avatar"
                  class="img-fluid main-img-mobile"
              />
            </div>
            <!-- {/* image for mobile menu */} -->

            <div class="col-12">
              <PersonalInfo/>
            </div>
            <!-- {/* End personal info */} -->

            <div class="col-12 mt-1">
              <a class="button" href="https://flowcv.com/resume/nlehcfr9n1">
                <span class="button-text">Online Resume</span>
                <span class="button-icon fa fa-link"></span>
              </a>
            </div>
            <!-- {/* End download button */} -->
          </div>
        </div>
        <!-- {/*  Personal Info Ends */} -->

        <!-- {/*  Boxes Starts */} -->
        <div class="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
          <AchievementsInfo/>
        </div>
        <!-- {/* Achievements Ends */} -->
      </div>
      <!-- {/* End .row */} -->

      <hr class="separator"/>

      <!-- {/* Skills Starts */} -->
      <div class="row">
        <div class="col-12">
          <h3
              class="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600"
          >
            My Skills
          </h3>
        </div>
        <SkillInfo/>
      </div>
      <!-- {/* Skills Ends */} -->

      <hr class="separator mt-1"/>

      <!-- {/* Experience & Education Starts */} -->
      <div class="row">
        <div class="col-12">
          <h3
              class="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600"
          >
            Experience <span>&</span> Education
          </h3>
        </div>
        <div class="col-lg-6 m-15px-tb">
          <div class="resume-box">
            <ExperienceInfo/>
          </div>
        </div>
        <div class="col-lg-6 m-15px-tb">
          <div class="resume-box">
            <EducationInfo/>
          </div>
        </div>
      </div>
      <!-- {/*  Experience & Education Ends */} -->
    </div>
  </section>
</template>

<script>
import AchievementsInfo from "./AchievementsInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import PersonalInfo from "./PersonalInfo";
import SkillInfo from "./SkillInfo";

export default {
  components: {
    AchievementsInfo,
    EducationInfo,
    ExperienceInfo,
    PersonalInfo,
    SkillInfo,
  },
  data() {
    return {
      imgMobile: require(`@/assets/images/hero/img-mobile.jpg`)
    };
  },
};
</script>
