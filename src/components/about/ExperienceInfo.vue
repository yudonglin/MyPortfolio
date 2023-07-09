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
          year: "02/2023 – present",
          position: "Pushback to the Future",
          compnayName: "Lightgbm / Pandas",
          details: `Implementing a set of tools and models for the "Pushback to the Future" competition,
          and discovered multiple critical features that helped the team achieve fourth place
          among 49 competitors at the conclusion of phase 1.`,
        },
        {
          id: 2,
          year: "2020 – present",
          position: "Linpg",
          compnayName: "Python",
          details: `A 2D game engine based on Pygame, with the goal of making game development using
          Python much easier for developers from all levels.`,
        },
        {
          id: 3,
          year: "2023",
          position: "Your Profile",
          compnayName: "Tensorflow",
          details: `A collaborative course project focused on the development of a user profiling system
          powered by machine-learning. The accuracy of my neural network model in predicting
          gender was 80%, which is the highest accuracy achieved in the category of visual prediction.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
