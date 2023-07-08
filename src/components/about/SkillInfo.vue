<template>
  <div
      v-for="skills in skillsContent"
      :key="skills.id"
      class="col-6 col-md-3 mb-3 mb-sm-5"
  >
    <div :class="`c100 ${skills.skillClass}`">
      <span>{{ skills.skillPercent }}%</span>
      <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
      </div>
    </div>
    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
      {{ skills.skillName }}
    </h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsContent: [
        {id: 1, skillClass: "p25", skillPercent: "25", skillName: "HTML"},
        {
          id: 2,
          skillClass: "p89",
          skillPercent: "89",
          skillName: "JAVASCRIPT",
        },
        {id: 3, skillClass: "p70", skillPercent: "70", skillName: "CSS"},
        {id: 4, skillClass: "p66", skillPercent: "66", skillName: "PHP"},
        {
          id: 5,
          skillClass: "p95",
          skillPercent: "95",
          skillName: "WORDPRESS",
        },
        {id: 6, skillClass: "p50", skillPercent: "50", skillName: "JQUERY"},
        {id: 7, skillClass: "p65", skillPercent: "65", skillName: "ANGULAR"},
        {id: 8, skillClass: "p45", skillPercent: "45", skillName: "REACT"},
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
