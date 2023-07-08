<template>
  <ul>
    <li v-for="education in educationContent" :key="education.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
          education.year
        }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ education.degree }}
        <span class="place open-sans-font">{{ education.institute }}</span>
      </h5>
      <p class="open-sans-font">{{ education.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      educationContent: [
        {
          id: 1,
          year: "2015",
          degree: "ENGINEERING DEGREE",
          institute: "OXFORD UNIVERSITY",
          details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
        },
        {
          id: 2,
          year: "2012",
          degree: "MASTER DEGREE",
          institute: "KIEV UNIVERSITY",
          details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
        },
        {
          id: 3,
          year: "2009",
          degree: "BACHELOR DEGREE ",
          institute: "TUNIS HIGH SCHOOL",
          details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
