<template>
  <ul>
    <li v-for="experience in experienceContent" :key="experience.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
          experience.year
        }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ experience.position }}
        <span class="place open-sans-font">{{ experience.compnayName }}</span>
      </h5>
      <p class="open-sans-font">{{ experience.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      experienceContent: [
        {
          id: 1,
          year: "   2018 - Present",
          position: " Web Developer",
          compnayName: "Envato",
          details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
        },
        {
          id: 2,
          year: "2013 - 2018",
          position: " UI/UX Designer",
          compnayName: "Themeforest",
          details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
        },
        {
          id: 3,
          year: "2005 - 2013",
          position: "Consultant",
          compnayName: "Videohive",
          details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
